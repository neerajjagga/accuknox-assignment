import { BellRing, ChevronRight } from "lucide-react"
import SearchBar from "./SearchBar";

const AppHeader = () => {
  return (
    <div className="w-full h-12 bg-white">
      <div className="flex h-full items-center px-10 justify-between">

        <div className="flex items-center gap-1">
          <h2 className="text-gray-500">Home</h2>
          <span className="text-gray-500"> <ChevronRight size={18} /> </span>
          <h2 className="font-bold text-primary">Dashboard V2</h2>
        </div>

        <div className="flex items-center gap-8 md:gap-18">
          <SearchBar />

          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="text-gray-500"> <BellRing size={18} /> </span>
            </div>

            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white"> U </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader