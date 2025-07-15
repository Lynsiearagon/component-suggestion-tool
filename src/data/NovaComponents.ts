const NovaComponents = {
  "accordion": {
    name: "Accordion",
    component: '<CollapsedAccordion />',
    codeSnippet: `import { Accordion, AccordionHeading, AccordionPanel, AccordionToggleIcon, Typography } from '@visa/nova-react';

export const CollapsedAccordion = () => {
  return (
    <Accordion>
      <AccordionHeading buttonSize="large" colorScheme="secondary">
        <AccordionToggleIcon />
        Accordion title
      </AccordionHeading>
      <AccordionPanel>
        <Typography>This is required text that describes the accordion section in more detail.</Typography>
      </AccordionPanel>
    </Accordion>
  );
};`
  },
  "anchor link menu": {
    name: "Anchor Link Menu",
    component: '<DefaultAnchorLinkMenu />',
    codeSnippet: `import { AnchorLinkMenu } from '@visa/nova-react';

export const DefaultAnchorLinkMenu = () => {
  return (
    <AnchorLinkMenimport { AnchorLinkMenu, AnchorLinkMenuHeader, Link, Typography } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-anchor-link-menu';

export const DefaultAnchorLinkMenu = () => {
  return (
    <AnchorLinkMenu aria-labelledby={'\${id}-header'}>
      <section>
        <AnchorLinkMenuHeader>
          <Typography id={'\${id}-header'} tag="h2" variant="overline">
            Section title
          </Typography>
        </AnchorLinkMenuHeader>
        <ul>
          <li>
            <Link aria-current="true" href="./anchor-link-menu">
              L1 label 1
            </Link>
          </li>
          <li>
            <Link href="./anchor-link-menu">L1 label 2</Link>
          </li>
          <li>
            <Link href="./anchor-link-menu">L1 label 3</Link>
          </li>
          <li>
            <Link href="./anchor-link-menu">L1 label 4</Link>
          </li>
          <li>
            <Link href="./anchor-link-menu">L1 label 5</Link>
          </li>
        </ul>
      </section>
    </AnchorLinkMenu>
  );
};`
  },
  "avatar": {
    name: "Avatar",
    codeSnippet: `import { Avatar } from '@visa/nova-react';

/// This is the base url for where your site is deployed. 'import.meta.env.BASE_URL' is the environment variable used to import the base url for Vite. Change this import to match your build tool's base url.
const BASE_URL = import.meta.env.BASE_URL;
const user = 'Alex Miller';

export const SmallImageAvatar = () => {
  return <Avatar alt={user} small tag="img" src={BASE_URL + '/alex-miller-stock.png'} />;
};`
  },
  "badge": {
    name: "Badge",
    component: '<SubtleBadgeDefault />',
    codeSnippet: `import { VisaHistoryTiny } from '@visa/nova-icons-react';
import { Badge } from '@visa/nova-react';

export const SubtleBadgeDefault = () => {
  return (
      <Badge badgeType="subtle">
        <VisaHistoryTiny aria-label="history" /> Label
      </Badge>
  );
};`
  },
  "banner": {
    name: "Banner",
    component: '<EmptyInformationBanner />',
    codeSnippet: `import { Banner } from '@visa/nova-react';

export const EmptyInformationBanner = () => {
  return <Banner></Banner>;
};`
  },
  "breadcrumbs": {
    name: "Breadcrumbs",
    component: '<DefaultBreadcrumbs />',
    codeSnippet: `import { Breadcrumbs, Link } from '@visa/nova-react';

export const DefaultBreadcrumbs = () => {
  return (
    <Breadcrumbs ariaLabel="Default breadcrumbs">
      <ol>
        <li>
          <Link href="./">L1 label</Link>
        </li>
        <li>
          <Link href="./">L2 label</Link>
        </li>
        <li>
          <Link href="./">L3 label</Link>
        </li>
        <li>
          <span aria-current="page">L4 label</span>
        </li>
      </ol>
    </Breadcrumbs>
  );
};`
  },
  "button": {
    name: "Button",
    component: '<DefaultButton />',
    codeSnippet: `import { Button } from '@visa/nova-react';

export const DefaultButton = () => {
  return <Button>Primary action</Button>;
};`
  },
    "checkbox": {
    name: "Checkbox",
    component: '<DefaultCheckbox />',
    codeSnippet: `import { Checkbox, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'checkbox-default';

export const DefaultCheckbox = () => {
  return (
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} />
      <Label htmlFor={id}>Label</Label>
    </Utility>
  );
};`
  },
  "chip": {
    name: "Selection Chip",
    component: '<DefaultSelectionChip />',
    codeSnippet: `import { Checkbox, Chip } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-selection-chip';

export const DefaultSelectionChip = () => {
  return (
    <Chip chipType="selection" htmlFor={id} tag="label">
      Label
      <Checkbox id={id} />
    </Chip>
  );
};`
  },
  "content card": {
    name: "Content Card",
    component: '<DefaultContentCard />',
    codeSnippet: `import { VisaChevronRightTiny } from '@visa/nova-icons-react';
import {
  Button,
  ContentCard,
  ContentCardBody,
  ContentCardSubtitle,
  ContentCardTitle,
  Link,
  Typography,
  Utility,
} from '@visa/nova-react';

export const DefaultContentCard = () => {
  return (
    <ContentCard>
      <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
        <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
        <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
        <Typography className="v-pt-4">
          This is optional text that describes the headline and subtitle in more detail.
        </Typography>
        <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
          <Button>Primary action</Button>
          <Link href="./content-card" noUnderline>
            Destination label <VisaChevronRightTiny rtl />
          </Link>
        </Utility>
      </Utility>
    </ContentCard>
  );
};`
},
  "divider": {
    name: "Divider",
    component: '<DefaultDivider />',
    codeSnippet: `import { Divider } from '@visa/nova-react';

export const DefaultDivider = () => {
  return <Divider />;
};`
  },
  "dropdown": {
    name: "Dropdown menu",
    component: '<DefaultDropdownMenu />',
    codeSnippet: `import { useClick, useFloating, useInteractions } from '@floating-ui/react';
import { VisaChevronDownTiny, VisaChevronUpTiny } from '@visa/nova-icons-react';
import { useState } from 'react';
import { Button, DropdownButton, DropdownMenu, Listbox, UtilityFragment } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'dropdown-menu-default';

export const DefaultDropdownMenu = () => {
  const [open, setOpen] = useState(false);

  const { context, floatingStyles, refs } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
  });

  const onClick = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([onClick]);

  return (
    // This div is not required, it's used to show the whole dropdown menu in the example
    <div style={{ blockSize: 250 }}>
      <DropdownButton
        aria-controls={id}
        aria-expanded={open}
        id={'\${id}-button'}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        Action
        {open ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />}
      </DropdownButton>
      {open && (
        <DropdownMenu
          id={id}
          aria-hidden={!open}
          ref={refs.setFloating}
          style={{ inlineSize: '180px', ...floatingStyles }}
          {...getFloatingProps()}
        >
          <UtilityFragment vHide={!open}>
            <Listbox>
              <li>
                <UtilityFragment
                  vFlex
                  vFlexRow
                  vAlignItems="start"
                  vGap={6}
                  vPaddingHorizontal={8}
                  vPaddingVertical={11}
                >
                  <Button className="v-listbox-item" colorScheme="tertiary" subtle>
                    Label 1
                  </Button>
                </UtilityFragment>
              </li>
              <li>
                <UtilityFragment
                  vFlex
                  vFlexRow
                  vAlignItems="start"
                  vGap={6}
                  vPaddingHorizontal={8}
                  vPaddingVertical={11}
                >
                  <Button className="v-listbox-item" colorScheme="tertiary" subtle>
                    Label 3
                  </Button>
                </UtilityFragment>
              </li>
              <li>
                <UtilityFragment
                  vFlex
                  vFlexRow
                  vAlignItems="start"
                  vGap={6}
                  vPaddingHorizontal={8}
                  vPaddingVertical={11}
                >
                  <Button className="v-listbox-item" colorScheme="tertiary" subtle>
                    Label 3
                  </Button>
                </UtilityFragment>
              </li>
              <li>
                <UtilityFragment
                  vFlex
                  vFlexRow
                  vAlignItems="start"
                  vGap={6}
                  vPaddingHorizontal={8}
                  vPaddingVertical={11}
                >
                  <Button className="v-listbox-item" colorScheme="tertiary">
                    Label 4
                  </Button>
                </UtilityFragment>
              </li>
            </Listbox>
          </UtilityFragment>
        </DropdownMenu>
      )}
    </div>
  );
};`
  },
  "input": {
    name: "Input",
    component: '<DefaultInput />',
    codeSnippet: `import { Input, InputContainer, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-default';

export const DefaultInput = () => {
  return (
    <Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={id} type="text" />
      </InputContainer>
    </Utility>
  );
};`
  },
  "link": {
    name: "Link",
    component: '<DefaultLink />',
    codeSnippet: `import { Link } from '@visa/nova-react';

export const DefaultLink = () => {
  return <Link href="./link">Destination label</Link>;
};`
  },
  "Navigation Drawer": {
    name: "Navigation Drawer",
    component: '<DefaultNavigationDrawer />',
    codeSnippet: `import { VisaAccountTiny, VisaChevronDownTiny, VisaChevronUpTiny, VisaCloseTiny } from '@visa/nova-icons-react';
import {
  Button,
  Divider,
  Panel,
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
import { CSSProperties, useState, useRef } from 'react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-navigation-drawer';
const navElAriaLabel = 'Default drawer';

const tabsContent = [
  {
    tabLabel: 'L1 label 1',
    id: '\${id}-tab-0',
    href: './navigation-drawer',
  },
  {
    tabLabel: 'L1 label 2',
    id: '\${id}-tab-1',
    href: './navigation-drawer',
  },
  {
    tabLabel: 'L1 label 3',
    id: '\${id}-tab-2',
    href: './navigation-drawer',
  },
  {
    tabLabel: 'L1 label 4',
    id: '\${id}-tab-3',
    href: './navigation-drawer',
  },
  {
    tabLabel: 'L1 label 5',
    id: '\${id}-tab-4',
    href: './navigation-drawer',
  },
];

const accountSubItems = [
  {
    tabLabel: 'L2 label 1',
    id: '\${id}-account-sub-item-0',
    href: './navigation-drawer',
  },
  {
    tabLabel: 'L2 label 2',
    id: '\${id}-account-sub-item-1',
    href: './navigation-drawer',
  },
];

export const DefaultNavigationDrawer = () => {
  const [accountTabOpen, setAccountTabOpen] = useState(false);
  const navDrawerRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <UtilityFragment vMargin={10}>
        <Button onClick={() => navDrawerRef.current?.showModal()}>Open drawer</Button>
      </UtilityFragment>

      <UtilityFragment vMarginHorizontal={0}>
        <Panel
          aria-modal="true"
          ref={navDrawerRef}
          id={id}
          tag="dialog"
          style={
            {
              '--v-panel-inline-size': 'initial',
            } as CSSProperties
          }
        >
          <Nav
            drawer
            orientation="vertical"
            tag="div"
            style={
              {
                inlineSize: '242px',
              } as CSSProperties
            }
          >
            <UtilityFragment vMarginRight={4} vMarginLeft="auto">
              <Button
                aria-label="Close"
                buttonSize="small"
                colorScheme="tertiary"
                iconButton
                onClick={() => navDrawerRef.current?.close()}
                subtle
              >
                <VisaCloseTiny />
              </Button>
            </UtilityFragment>
            <UtilityFragment
              vFlex
              vFlexCol
              vGap={12}
              vMarginTop={4}
              vMarginRight={16}
              vMarginBottom={16}
              vMarginLeft={24}
            >
              <Link
                aria-label="Visa Application Name Home"
                href="https://www.visa.com"
                id={'\${id}-home-link'}
                noUnderline
                style={{ backgroundColor: 'transparent' }}
              >
                <VisaLogo />
                <NavAppName>
                  <Typography variant="subtitle-1">Application Name</Typography>
                </NavAppName>
              </Link>
            </UtilityFragment>
            <nav aria-label={navElAriaLabel}>
              <Tabs orientation="vertical">
                {tabsContent.map(tabContent => (
                  <Tab key={tabContent.id}>
                    <UtilityFragment vMarginLeft={14}>
                      <Button colorScheme="tertiary" element={<a href={tabContent.href}>{tabContent.tabLabel}</a>} />
                    </UtilityFragment>
                  </Tab>
                ))}
              </Tabs>
            </nav>
            <Utility vFlex vFlexCol vAlignSelf="stretch" vGap={4} vMarginTop="auto">
              <Divider dividerType="decorative" />
              <Tab tag="div">
                <Button
                  aria-expanded={accountTabOpen}
                  aria-controls={'\${id}-account-sub-menu'}
                  aria-label="Alex Miller"
                  buttonSize="large"
                  colorScheme="tertiary"
                  onClick={() => setAccountTabOpen(!accountTabOpen)}
                >
                  <VisaAccountTiny />
                  Alex Miller
                  <TabSuffix element={accountTabOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />} />
                </Button>
                <UtilityFragment vHide={!accountTabOpen}>
                  <Tabs orientation="vertical" id={'\${id}-account-sub-menu'} aria-hidden={!accountTabOpen}>
                    {accountSubItems.map(accountSubItem => (
                      <Tab key={accountSubItem.id} id={accountSubItem.id}>
                        <Button
                          colorScheme="tertiary"
                          element={<a href={accountSubItem.href}>{accountSubItem.tabLabel}</a>}
                        />
                      </Tab>
                    ))}
                  </Tabs>
                </UtilityFragment>
              </Tab>
            </Utility>
          </Nav>
        </Panel>
      </UtilityFragment>
    </>
  );
};`
  },
  "pagination": {
    name: "Pagination",
    component: '<OneDigitPagination />',
    codeSnippet: `import {
  VisaArrowEndTiny,
  VisaArrowStartTiny,
  VisaChevronLeftTiny,
  VisaChevronRightTiny,
  VisaOptionHorizontalTiny,
} from '@visa/nova-icons-react';
import { Button, Pagination, PaginationOverflow } from '@visa/nova-react';

export const OneDigitPagination = () => {
  return (
    <nav aria-label="1 digit pagination" role="navigation">
      <Pagination className="v-flex v-flex-row v-align-items-center v-gap-4">
        <li className="v-mobile-container-hide">
          <Button aria-label="Go to first page" buttonSize="small" colorScheme="tertiary" disabled iconButton>
            <VisaArrowStartTiny rtl />
          </Button>
        </li>
        <li>
          <Button aria-label="Go to previous page" buttonSize="small" colorScheme="tertiary" disabled iconButton>
            <VisaChevronLeftTiny rtl />
          </Button>
        </li>
        <li>
          <Button aria-current="true" aria-label="Page 1" colorScheme="tertiary">
            1
          </Button>
        </li>
        <li>
          <Button aria-label="Page 2" colorScheme="tertiary">
            2
          </Button>
        </li>
        <li>
          <Button aria-label="Page 3" colorScheme="tertiary">
            3
          </Button>
        </li>
        <li className="v-mobile-container-hide">
          <Button aria-label="Page 4" colorScheme="tertiary">
            4
          </Button>
        </li>
        <li className="v-mobile-container-hide">
          <Button aria-label="Page 5" colorScheme="tertiary">
            5
          </Button>
        </li>
        <li className="v-mobile-container-hide">
          <Button aria-label="Page 6" colorScheme="tertiary">
            6
          </Button>
        </li>
        <li className="v-mobile-container-hide">
          <Button aria-label="Page 7" colorScheme="tertiary">
            7
          </Button>
        </li>
        <PaginationOverflow className="v-flex v-align-items-center v-mobile-container-hide">
          <VisaOptionHorizontalTiny />
        </PaginationOverflow>
        <li className="v-mobile-container-hide">
          <Button aria-label="Page 100" colorScheme="tertiary">
            100
          </Button>
        </li>
        <li>
          <Button aria-label="Go to next page" buttonSize="small" colorScheme="tertiary" iconButton>
            <VisaChevronRightTiny rtl />
          </Button>
        </li>
        <li className="v-mobile-container-hide">
          <Button aria-label="Go to last page" buttonSize="small" colorScheme="tertiary" iconButton>
            <VisaArrowEndTiny rtl />
          </Button>
        </li>
      </Pagination>
    </nav>
  );
};`
  },
  "radio": {
    name: "Radio",
    component: '<DefaultRadio />',
    codeSnippet: `import { Label, Radio, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-radio';

export const DefaultRadio = () => {
  return (
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Radio id={id} name={id} />
      <Label htmlFor={id}>Label</Label>
    </Utility>
  );
};`
  },
  "select": {
    name: "Select",
    component: '<DefaultSelect />',
    codeSnippet: `import { VisaChevronDownTiny } from '@visa/nova-icons-react';
import { InputContainer, InputControl, Label, Select, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-select';

const options = ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'];

export const DefaultSelect = () => {
  return (
    <Utility tag="fieldset" vFlex vFlexCol vGap={6}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Select id={id} name={'\${id}-name'}>
          <option hidden value="" />
          {options.map((option, index) => (
            <option key={'\${id}-option-\${index}'} value={index}>
              {option}
            </option>
          ))}
        </Select>
        <InputControl>
          <VisaChevronDownTiny />
        </InputControl>
      </InputContainer>
    </Utility>
  );
};`
  },
  "switch": {
    name: "Switch",
    component: "<DefaultSwitch />",
    codeSnippet: `import { Switch, SwitchLabel, Utility } from '@visa/nova-react';

const id = 'default-switch-example';

export const DefaultSwitch = () => {
  return (
    <Utility vFlex vFlexWrap vGap={10} vJustifyContent="between" vMargin={8} style={{ maxInlineSize: '288px' }}>
      <SwitchLabel htmlFor={'\${id}-switch'}>Label</SwitchLabel>
      <Switch id={'\${id}-switch'} name="default-switch" />
    </Utility>
  );
};`
  },
  "tab": {
    name: "Tab",
    component: "<DefaultVerticalTabs />",
    codeSnippet: `import { Button, Surface, Tab, Tabs, Utility, UtilityFragment, useTabs } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'nova-vertical-tabs-example';

const tabsContent = [
  {
    tabLabel: 'Label 1',
    text: 'This is the content area for label 1',
    id: '\${id}-tab-0',
  },
  {
    tabLabel: 'Label 2',
    text: 'This is the content area for label 2',
    id: '\${id}-tab-1',
  },
  {
    tabLabel: 'Label 3',
    text: 'This is the content area for label 3',
    id: '\${id}-tab-2',
  },
  {
    tabLabel: 'Label 4',
    text: 'This is the content area for label 4',
    id: '\${id}-tab-3',
  },
];

export const DefaultVerticalTabs = () => {
  const {
    getTabIndex,
    onIndexChange,
    onKeyNavigation,
    ref: tabsRef,
    selectedIndex,
  } = useTabs({ arrowKeyNavigation: 'vertical', defaultSelected: 0 });

  return (
    <Utility vFlex vFlexWrap vGap={8}>
      <Tabs onKeyDown={onKeyNavigation} orientation="vertical" role="tablist" style={{ flexBasis: '30%' }}>
        {tabsContent.map((tabContent, index) => (
          <Tab key={tabContent.id} role="none">
            <Button
              aria-selected={index === selectedIndex}
              aria-controls={tabContent.id}
              colorScheme="tertiary"
              onClick={() => onIndexChange(index)}
              ref={el => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              tabIndex={getTabIndex(index)}
            >
              {tabContent.tabLabel}
            </Button>
          </Tab>
        ))}
      </Tabs>
      <Utility vFlex vFlexGrow vElevation="inset">
        <UtilityFragment vPadding={10}>
          <Surface id={tabsContent[selectedIndex].id} role="tabpanel">
            <span>{tabsContent[selectedIndex]?.text}</span>
          </Surface>
        </UtilityFragment>
      </Utility>
    </Utility>
  );
};`
  },
  "toggle": {
    name: "Toggle",
    component: "<DefaultToggles />",
    codeSnippet: `import { Toggle, ToggleContainer, UtilityFragment } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-toggle';

const options = [
  { label: 'Label 1', id: '\${id}-label-1', defaultSelected: true },
  { label: 'Label 2', id: '\${id}-label-2' },
  { label: 'Label 3', id: '\${id}-label-3' },
];

export const DefaultToggles = () => {
  const [togglePressedState, setTogglePressedState] = useState(options.map(o => !!o.defaultSelected));

  const handleSingleSelectTogglePress = (pressedIndex: number) => {
    setTogglePressedState(options.map((_, buttonIndex) => pressedIndex === buttonIndex));
  };

  return (
    <ToggleContainer>
      {options.map((option, optionIndex) => (
        <UtilityFragment key={option.id} vGap={6}>
          <Toggle
            tag="button"
            aria-pressed={togglePressedState[optionIndex]}
            onClick={() => handleSingleSelectTogglePress(optionIndex)}
          >
            {option.label}
          </Toggle>
        </UtilityFragment>
      ))}
    </ToggleContainer>
  );
};`
  }
};

export default NovaComponents;