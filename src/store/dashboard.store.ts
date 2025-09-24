
import { create } from "zustand";
import type { Category, Widget } from "../types";
import { nanoid } from "nanoid";

interface DashboardState {
    config: Category[];
    addWidget: ({ categoryId, widget }: { categoryId: string, widget: Omit<Widget, 'id'> }) => void;
    removeWidget: ({ categoryId, widgetId }: { categoryId: string, widgetId: string }) => void;
}

const initialConfig: Category[] = [
    {
        id: "cspm-exec-dashboard",
        name: "CSPM Executive Dashboard",
        widgets: [
            { id: nanoid(), name: "Cloud Accounts", text: "Displays total connected and disconnected cloud accounts." },
        ],
    },
    {
        id: "cwpp-dashboard",
        name: "CWPP Dashboard",
        widgets: [
            { id: nanoid(), name: "Top 5 Namespace Specific Alerts", text: "Highlights namespaces with the most alerts." },
            { id: nanoid(), name: "Workload Alerts", text: "Lists critical workload-related alerts and their severity." },
            { id: nanoid(), name: "Cloud Account Risk Assessment", text: "Shows compliance checks with passed, failed, and warning results." },
        ],
    },
    {
        id: "registry-scan",
        name: "Registry Scan",
        widgets: [
            { id: nanoid(), name: "Image Risk Assessment", text: "Summarizes vulnerabilities detected in scanned images." },
            { id: nanoid(), name: "Image Security Issues", text: "Tracks issues in container images across environments." },
        ],
    },
];

export const useDashboardStore = create<DashboardState>((set, get) => ({
    config: initialConfig,
    addWidget: ({ categoryId, widget }: { categoryId: string, widget: Omit<Widget, 'id'> }) => {
        const currentConfig = get().config;
        const newConfig = currentConfig.map(category => {
            if (category.id === categoryId) {
                return {
                    ...category,
                    widgets: [...category.widgets, { ...widget, id: nanoid() }]
                };
            }
            return category;
        });
        set({ config: newConfig });
    },
    removeWidget: ({ categoryId, widgetId }: { categoryId: string, widgetId: string }) => {
        const currentConfig = get().config;
        const newConfig = currentConfig.map(category => {
            if (category.id === categoryId) {
                return {
                    ...category,
                    widgets: category.widgets.filter(widget => widget.id !== widgetId)
                };
            }
            return category;
        });
        set({ config: newConfig });
    },
}));