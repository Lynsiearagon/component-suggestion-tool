'use client'
import { SearchBar } from "@/components/SearchBar";
import { AlternateVerticalNavigation } from "@/components/MainContainer";
import NovaComponents from "../data/NovaComponents";
import { useState } from "react";

const novaComponentsArray: {
  key: string;
  name: string;
  component: React.ComponentType<any>;
  codeSnippet: string;
}[] = Object.entries(NovaComponents).map(([key, value]) => ({
  key,
  name: value.name,
  component: value.component,
  codeSnippet: value.codeSnippet,
}));


export default function Home() {
  const [displayedComponents, setDisplayedComponents] = useState<
    { name: string; component: React.ComponentType<any>; codeSnippet: string }[]
  >(novaComponentsArray);

  return (
    <div className="my-12 mx-4 md:mx-8 lg:mx-16 xl:mx-24">
      <SearchBar setDisplayedComponents={setDisplayedComponents} novaComponentsArray={novaComponentsArray} />
      <div className="shadow-lg">
        <AlternateVerticalNavigation displayedComponents={displayedComponents} setDisplayedComponents={setDisplayedComponents} novaComponentsArray={novaComponentsArray} />
      </div>
    </div>
  );
}
