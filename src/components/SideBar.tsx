'use client'

import {
    VisaAccountTiny,
    VisaChevronDownTiny,
    VisaChevronUpTiny,
    VisaMediaFastForwardTiny,
    VisaMediaRewindTiny,
  } from '@visa/nova-icons-react';
import {
  Button,
  Divider,
  Link,
  Nav,
  NavAppName,
  Tab,
  TabSuffix,
  Tabs,
  Typography,
  Utility,
  UtilityFragment,
  VisaLogo,
} from '@visa/nova-react';
import { useState } from 'react';
import NovaComponents from '../data/NovaComponents';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'alternate-vertical-navigation';
const navRegionAriaLabel = 'Alternate vertical navigation';

const novaComponentsArray: { key: string; name: string; codeSnippet: string }[] = Object.entries(NovaComponents).map(([key, value]) => ({
  key,
  name: value.name,
  codeSnippet: value.codeSnippet
}));

const accountSubItems = [
  {
    tabLabel: 'L2 label 1',
    id: `${id}-account-sub-item-0`,
    href: './vertical-navigation',
  },
  {
    tabLabel: 'L2 label 2',
    id: `${id}-account-sub-item-1`,
    href: './vertical-navigation',
  },
];

export const AlternateVerticalNavigation = () => {
  const [navExpanded, setNavExpanded] = useState(true);
  const [accountTabOpen, setAccountTabOpen] = useState(false);

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
                vMarginRight={16}
                vMarginBottom={30}
                vMarginLeft={20}
              >
                <h2 className='text-3xl'>Components</h2>
              </UtilityFragment>
              <nav aria-label={navRegionAriaLabel}>
                <UtilityFragment vGap={8}>
                  <Tabs orientation="vertical">
                    {novaComponentsArray.map(component => (
                      <Tab key={component.key}>
                        <Button colorScheme="tertiary" element={<span>{component.name}</span>} />
                      </Tab>
                    ))}
                  </Tabs>
                </UtilityFragment>
              </nav>
            </>
          )}
          
        </Nav>
        <div className="mainContent">
          <Typography>Main Content</Typography>
        </div>
      </div>
    </div>
  );
};