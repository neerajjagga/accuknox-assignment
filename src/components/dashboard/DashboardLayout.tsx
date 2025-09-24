import { useState } from "react";
import { useDashboardStore } from "../../store/dashboard.store";
import AddWidgetSidebar from "./AddWidgetSidebar";
import DashboardCategory from "./DashboardCategory";

const DashboardLayout = () => {
  const { config } = useDashboardStore(state => state);
  const [isAddWidgetSidebarOpen, setIsAddWidgetSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 pb-6 px-4">
      {config.map((category) => (
        <DashboardCategory
          key={category.id}
          category={category}
          onAddWidget={() => setIsAddWidgetSidebarOpen(true)}
        />
      ))}

      <AddWidgetSidebar
        isOpen={isAddWidgetSidebarOpen}
        onClose={() => setIsAddWidgetSidebarOpen(false)}
      />
    </div>
  )
}

export default DashboardLayout