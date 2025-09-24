import { Plus, X } from "lucide-react";
import { motion } from "motion/react"
import { useDashboardStore } from "../../store/dashboard.store";
import { useState } from "react";
import AddWidgetModal from "./AddWidgetModal";

interface PropTypes {
  isOpen: boolean;
  onClose: () => void;
}

const AddWidgetSidebar = ({ isOpen, onClose }: PropTypes) => {
  if (!isOpen) return null;
  const { config, removeWidget } = useDashboardStore(state => state);

  const [openedCategoryId, setOpenedCategoryId] = useState<string | null>(config ? config[0].id : null);
  const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false);
  const [widgetsToRemove, setWidgetsToRemove] = useState<string[]>([]);

  const handleConfirm = () => {
    widgetsToRemove.forEach(widgetId => {
      removeWidget({ categoryId: openedCategoryId!, widgetId });
    });
    onClose();
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-2/4 h-screen bg-white shadow-lg z-50">
        <div className="h-full flex flex-col relative">
          <div className="flex justify-between items-center mb-4 bg-primary px-4 py-2">
            <h2 className="text-lg font-bold text-white">Add Widget</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-white/80 text-2xl"
            >
              <X size={20} />
            </button>
          </div>

          <div className="px-4 py-2 space-y-4">
            <div className="flex-1 overflow-y-auto">
              <p className="text-gray-600">Personalize your dashboard by adding the following widget</p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-4">
                {config.map((category) => (
                  <div
                    key={category.id}
                    className={`mb-4 px-2 cursor-pointer ${openedCategoryId === category.id ? "border-b-2 border-b border-primary" : ""}`}
                    onClick={() => setOpenedCategoryId(category.id)}
                  >
                    <h3 className="font-bold">{category.name}</h3>
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                {openedCategoryId && config.find(category => category.id === openedCategoryId)?.widgets.map((widget) => (
                  <div
                    key={widget.id}
                    className="mb-4 px-2 cursor-pointer flex items-center gap-4 border border-primary/30 py-2 rounded-md"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={widgetsToRemove.includes(widget.id)}
                      onChange={() => setWidgetsToRemove(prev =>
                        prev.includes(widget.id)
                          ? prev.filter(id => id !== widget.id)
                          : [...prev, widget.id]
                      )}
                    />
                    <h3 className="font-bold">{widget.name}</h3>
                  </div>
                ))}

                {/* add widget */}
                <button
                  onClick={() => setIsAddWidgetModalOpen(prev => !prev)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  {!isAddWidgetModalOpen ? (
                    <Plus size={16} className="text-gray-600" />
                  ) : (
                    <X size={16} className="text-red-600" />
                  )}
                  <span className={`text-sm font-medium ${isAddWidgetModalOpen ? "text-red-600" : "text-gray-600"}`}>{isAddWidgetModalOpen ? "Close" : "Add"} Widget</span>
                </button>

                {isAddWidgetModalOpen &&
                  <AddWidgetModal
                    currentCategoryId={openedCategoryId!}
                    onClose={() => setIsAddWidgetModalOpen(false)}
                  />
                }
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 -left-4 w-full flex justify-end gap-2 px-4 py-2">
            <button
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="btn-primary"
            >
              Confirm
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default AddWidgetSidebar