
import { Plus, RefreshCw, Clock, MoreVertical } from 'lucide-react'

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <h1 className="text-xl font-semibold text-gray-900">
        CNAPP Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Plus size={16} className="text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Add Widget</span>
        </button>

        <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <RefreshCw size={16} className="text-gray-600" />
        </button>

        <button className="p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <MoreVertical size={16} className="text-gray-600" />
        </button>

        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-primary border-primary">
          <div className="flex items-center gap-2">
            <Clock size={16} className="" />
            <span className="">|</span>
            <span className="text-sm font-extrabold">Last 2 days</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader