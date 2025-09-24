import type { Widget } from "../../types"

interface PropTypes {
  widget: Widget
}

const DashboardWidget = ({ widget }: PropTypes) => {
  return (
    <div className="flex flex-col items-center justify-center h-[230px] min-w-[480px] bg-white rounded-2xl px-6 py-2 shadow-lg overflow-y-auto">
      <h2 className="text-lg font-semibold">{widget.name}</h2>
      <p className="text-sm text-gray-500">{widget.text}</p>
    </div>
  )
}

export default DashboardWidget