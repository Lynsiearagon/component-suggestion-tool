
import { VisaSearchLow } from "@visa/nova-icons-react";

export const SearchBar = () => {
    return (
        <div className="w-full my-8 lg:my-16 flex flex-col">
            <div className="flex flex-row mb-6">
                <VisaSearchLow />
                <label htmlFor="search-bar" className="text-base lg:text-xl font-semibold text-gray-600 font-mono uppercase pl-2">Search for a component</label>
            </div>
            <input id="search-bar" name="search-bar" type="text" className="w-full border-[#1434cb] border-6 rounded-4xl caret-pink-500 p-1 sm:p-2 lg:p-4" />
            <button></button>
        </div>
    )
}