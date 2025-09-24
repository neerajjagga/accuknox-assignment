import { useState } from "react";
import { useDashboardStore } from "../../store/dashboard.store";

interface PropTypes {
    currentCategoryId: string;
    onClose: () => void;
}

const AddWidgetModal = ({ currentCategoryId, onClose }: PropTypes) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });
    const { addWidget } = useDashboardStore(state => state);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addWidget({ categoryId: currentCategoryId, widget: { name: formData.name, text: formData.description } });
        onClose();
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full ">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Add New Widget</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label
                        htmlFor="widget-name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Widget Name
                    </label>
                    <input
                        id="widget-name"
                        type="text"
                        placeholder="Enter widget name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="widget-description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Widget Description
                    </label>
                    <textarea
                        id="widget-description"
                        placeholder="Enter widget description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        name="description"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                    <button
                        type="button"
                        onClick={onClose}
                        className="btn-secondary"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn-primary"
                    >
                        Add Widget
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddWidgetModal