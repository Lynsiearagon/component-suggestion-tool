import NovaComponents from "@/data/NovaComponents";
import { VisaSearchLow } from "@visa/nova-icons-react";
import { Button } from "@visa/nova-react";
import { useState } from "react";

type DisplayedComponent = {
  name: string;
  component: React.ComponentType<any>;
  codeSnippet: string;
};

interface SearchBarProps {
  setDisplayedComponents: React.Dispatch<React.SetStateAction<DisplayedComponent[]>>;
  novaComponentsArray:[]
}

export const SearchBar = ({
  setDisplayedComponents,
  novaComponentsArray
}: SearchBarProps) => {
    const [searchInputVal, setSearchInputVal] = useState("")

    const handleSearchBarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputVal(e.target.value);

        if (e.target.value === "") {
            setDisplayedComponents(novaComponentsArray)
        }
    }

    const findComponentMatches = () => {
        const possibleComponents: DisplayedComponent[] = [];
        const added = new Set<string>();
        const searchTerms = searchInputVal.toLowerCase().split(" ");

        Object.keys(NovaComponents).forEach((key) => {
            const lowerKey = key.toLowerCase();
            if (searchTerms.some(term => term && lowerKey.includes(term))) {
                if (!added.has(key)) {
                    possibleComponents.push(NovaComponents[key as keyof typeof NovaComponents]);
                    added.add(key);
                }
            }
        });

        if (possibleComponents.length > 0) {
            setDisplayedComponents(possibleComponents);
        }
    }

    const findComponentMatchesKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            findComponentMatches()
        }
    }

    return (
        <div className="w-full my-8 lg:my-16 flex flex-col">
            <div className="flex flex-row mb-6">
                <VisaSearchLow />
                <label htmlFor="search-bar" className="text-base lg:text-xl font-semibold text-gray-600 font-mono uppercase pl-2">Search for a component</label>
            </div>
            <div className="flex flex-row gap-4 items-center">
            <input
                id="search-bar"
                name="search-bar"
                type="text"
                className="w-full border-[#1434cb] border-6 rounded-4xl caret-pink-500 p-1 sm:p-2 lg:p-4 text-xl"
                placeholder="Search..."
                value={searchInputVal}
                onInput={handleSearchBarInput}
                onKeyDown={(e) => findComponentMatchesKeyDown(e)}
            />
            <Button onClick={findComponentMatches} className="hover:bg-pink-500">Search</Button>
            </div>
        </div>
    )
}