"use client";

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

const novaComponentsArray = Object.entries(NovaComponents)
  .filter(([_, value]) => "component" in value && "codeSnippet" in value)
  .map(([key, value]) => ({
    key,
    name: value.name,
    component: value.component,
    codeSnippet: value.codeSnippet,
  }));

export const AlternateVerticalNavigation = () => {
  const [navExpanded, setNavExpanded] = useState(true);
  const [displayedComponents, setDisplayedComponents] = useState<
    { name: string; component: string; codeSnippet: string }[]
  >([]);

  const displayComponent = (key: string) => {
    const comp = NovaComponents[key as keyof typeof NovaComponents];
    if (comp && "component" in comp && "codeSnippet" in comp) {
      setDisplayedComponents([comp]);
    } else {
      setDisplayedComponents([]);
    }
  };

  return (
    <div className="appContainer font-mono uppercase">
      <div id="layout" className="layoutContainer">
        <Nav id={id} alternate orientation="vertical" tag="header">
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
          {displayedComponents.map((component) => (
            <div key={component.name} className="border">
              <h3>{component.name}</h3>
              {component.component.replace(/"/g, "")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
