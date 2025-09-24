import { Plus } from "lucide-react"
import type { Category } from "../../types"
import DashboardWidget from "./DashboardWidget"

interface PropTypes {
  category: Category;
  onAddWidget: () => void;
}

const DashboardCategory = ({ category, onAddWidget }: PropTypes) => {
  return (
    <div className="space-y-2">
      <h2 className="font-extrabold">{category.name}</h2>
      <div className="flex items-center gap-2 overflow-x-auto">
        {/* add widget button */}
        <div
        onClick={onAddWidget} 
        className="flex items-center justify-center h-[230px] min-w-[480px] bg-gradient-to-r from-primary/10 to-background/10 rounded-2xl px-6 py-2 shadow-lg border-b-2 border-r-2 border-primary cursor-pointer">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Plus size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Add Widget</span>
          </button>
        </div>

        {category.widgets.map((widget) => (
          <DashboardWidget key={widget.id} widget={widget} />
        ))}
      </div>
    </div>
  )
}

export default DashboardCategory