"use client";
import type React from "react";

import {
  Button,
  Link,
  Nav,
  Tab,
  Tabs,
  Utility,
  UtilityFragment,
} from "@visa/nova-react";
import {
  VisaMediaRewindTiny,
  VisaMediaFastForwardTiny,
} from "@visa/nova-icons-react";
import { useState } from "react";
import NovaComponents from "../data/NovaComponents";

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = "alternate-vertical-navigation";
const navRegionAriaLabel = "Alternate vertical navigation";

type DisplayedComponent = {
  name: string;
  component: React.ComponentType<unknown>;
  codeSnippet: string;
};

interface AlternateVerticalNavigationProps {
  displayedComponents: DisplayedComponent[];
  setDisplayedComponents: React.Dispatch<React.SetStateAction<DisplayedComponent[]>>;
  novaComponentsArray: (DisplayedComponent & { key: string })[];
  setSearchInputVal: React.Dispatch<React.SetStateAction<string>>; 
}
export const AlternateVerticalNavigation = ({
  displayedComponents,
  setDisplayedComponents,
  novaComponentsArray,
  setSearchInputVal
}: AlternateVerticalNavigationProps) => {
  const [navExpanded, setNavExpanded] = useState(true);
  const [componentCodeToShow, setComponentCodeToShow] = useState("");

  const displayComponent = (key: string) => {
    setDisplayedComponents([
      NovaComponents[key as keyof typeof NovaComponents],
    ]);
  };

  const viewCode = (componentName: string) => {
    setComponentCodeToShow(componentName);
  };

  const copyCode = async (codeSnippet: string) => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      console.log("Copied!");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const clearResults = () => {
    setComponentCodeToShow("");
    setDisplayedComponents(novaComponentsArray);
    setSearchInputVal("");
  };

  return (
    <div className="appContainer font-mono uppercase">
      <div id="layout" className="layoutContainer">
        <Nav
          id={id}
          alternate
          orientation="vertical"
          tag="header"
          className="h-screen overflow-auto"
        >
          {navExpanded && (
            <Link alternate skipLink href="#content">
              Skip to content
            </Link>
          )}
          {navExpanded && (
            <>
              <UtilityFragment
                vFlex
                vFlexCol
                vGap={12}
                vMarginTop={16}
                vMarginRight={24}
                vMarginBottom={30}
                vMarginLeft={24}
              >
                <h2 className="text-3xl">Components</h2>
              </UtilityFragment>
              <nav aria-label={navRegionAriaLabel}>
                <UtilityFragment vGap={8}>
                  <Tabs orientation="vertical">
                    {novaComponentsArray.map((component) => (
                      <Tab key={component.key}>
                        <Button
                          id={component.key}
                          colorScheme="tertiary"
                          className="hover:text-pink-500"
                          element={<span>{component.name}</span>}
                          onClick={() => displayComponent(component.key)}
                        />
                      </Tab>
                    ))}
                  </Tabs>
                </UtilityFragment>
              </nav>
            </>
          )}
          <Utility
            vFlex
            vFlexCol
            vAlignSelf="stretch"
            vGap={4}
            vMarginTop="auto"
          >
            <UtilityFragment
              vMarginLeft={navExpanded ? "auto" : 5}
              vMarginRight={navExpanded ? 8 : 5}
            >
              <Button
                aria-label="Side bar"
                aria-expanded={!!navExpanded}
                buttonSize="small"
                colorScheme="tertiary"
                iconButton
                iconTwoColor
                onClick={() => setNavExpanded(!navExpanded)}
                subtle
              >
                {navExpanded ? (
                  <VisaMediaRewindTiny rtl />
                ) : (
                  <VisaMediaFastForwardTiny rtl />
                )}
              </Button>
            </UtilityFragment>
          </Utility>
        </Nav>
        <div className="mainContent">
          <div className="flex flex-row justify-between items-center pt-3 pb-12 px-2">
            <h2 className="text-3xl">Results {displayedComponents.length}</h2>
            <button
              type="button"
              className="hover:text-pink-500 hover:underline cursor-pointer"
              onClick={clearResults}
            >
              Clear Results
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {displayedComponents.length > 0 ? (
              displayedComponents.map((component) => (
                <div
                  key={component.name}
                  className="border p-8 bg-white rounded-md shadow-md border border-gray-400 flex flex-col gap-6"
                >
                  <div>
                    <h3 className="pb-4 text-xl">{component.name}</h3>
                    {<component.component />}
                  </div>

                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-2">
                      <Button
                        onClick={() => viewCode(component.name)}
                        className={
                          component.name === componentCodeToShow
                            ? "hidden"
                            : "block hover:bg-pink-500"
                        }
                      >
                        View Code
                      </Button>
                      <Button
                        onClick={() => setComponentCodeToShow("")}
                        className={
                          component.name === componentCodeToShow
                            ? "block hover:bg-pink-500"
                            : "hidden"
                        }
                      >
                        Hide Code
                      </Button>
                    </div>
                    {component.name === componentCodeToShow && (
                      <Button
                        onClick={() => copyCode(component.codeSnippet)}
                        className=" hover:bg-pink-500"
                      >
                        Copy
                      </Button>
                    )}
                  </div>

                  {component.name === componentCodeToShow && (
                    <div className="bg-gray-800  text-white p-8 rounded-lg overflow-auto">
                      <pre className="w-100 max-h-100">
                        <code className="">{component.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center">No match. Try a different term.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
