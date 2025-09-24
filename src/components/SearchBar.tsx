import { useRef, useState } from "react";
import { useDashboardStore } from "../store/dashboard.store";
import type { Widget } from "../types";
import { Search, X } from "lucide-react";

const SearchBar = () => {
    const { config } = useDashboardStore(state => state);
    const allWidgets = config.map(category => category.widgets).flat();

    const [searchText, setSearchText] = useState<string>("");
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<Widget[]>([]);

    const timeoutRef = useRef<number | null>(null);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchText(value);
        if (!value) {
            setSearchResults([]);
            return;
        }

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            const searchResults = allWidgets.filter(widget => widget.name.toLowerCase().includes(value.toLowerCase()));
            setSearchResults(searchResults);
        }, 500);
    }

    const handleClearSearch = () => {
        setSearchText("");
        setSearchResults([]);
        setIsSearchActive(false);
    }

    return (
        <div className="relative">
            <div className="relative bg-background md:min-w-xl">
                <input
                    value={searchText}
                    onFocus={() => setIsSearchActive(true)}
                    onBlur={() => setIsSearchActive(false)}
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="Search anything..."
                    className="w-full h-8 pl-8 pr-4 border border-gray-300 rounded-md border-primary/40 text-primary" />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <Search size={18} />
                </span>

                {isSearchActive && (
                    <button
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={handleClearSearch}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            {
                isSearchActive && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md">
                        {searchResults.map(widget => (
                            <div key={widget.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                <p className="text-primary">{widget.name}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default SearchBar