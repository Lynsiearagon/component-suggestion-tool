// Only import each component once at the top
import { Accordion, AccordionHeading, AccordionPanel, AccordionToggleIcon, Typography, Chip, SectionMessage, Button, Badge, Avatar, Divider, Tabs, Tab, VisaLogo } from '@visa/nova-react';

const NovaComponents = {
  "accordion": {
    name: "Accordion",
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
    codeSnippet: `import { AnchorLinkMenu } from '@visa/nova-react';

export const DefaultAnchorLinkMenu = () => {
  return (
    <AnchorLinkMenu>
      {/* Anchor links go here */}
    </AnchorLinkMenu>
  );
};`
  },
  "avatar": {
    name: "Avatar",
    codeSnippet: `import { Avatar } from '@visa/nova-react';

export const DefaultAvatar = () => {
  return (
    <Avatar name="Alex Miller" size="large" />
  );
};`
  },
  "badge": {
    name: "Badge",
    codeSnippet: `import { Badge } from '@visa/nova-react';

export const DefaultBadge = () => {
  return (
    <Badge colorScheme="success">Success</Badge>
  );
};`
  },
  "banner": {
    name: "Banner",
    codeSnippet: `import { Banner, Typography } from '@visa/nova-react';

export const DefaultBanner = () => {
  return (
    <Banner>
      <Typography>This is a banner message.</Typography>
    </Banner>
  );
};`
  },
  "breadcrumbs": {
    name: "Breadcrumbs",
    codeSnippet: `import { Breadcrumbs, Link } from '@visa/nova-react';

export const DefaultBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Link href="#">Home</Link>
      <Link href="#">Section</Link>
      <Link href="#">Page</Link>
    </Breadcrumbs>
  );
};`
  },
  "button": {
    name: "Button",
    codeSnippet: `import { Button } from '@visa/nova-react';

export const DefaultButton = () => {
  return (
    <Button colorScheme="primary">Button</Button>
  );
};`
  },
    "checkbox": {
    name: "Checkbox",
    codeSnippet: `import { Checkbox } from '@visa/nova-react';

export const DefaultCheckbox = () => {
  return (
    <Checkbox>Label</Checkbox>
  );
};`
  },
  "chip": {
    name: "Selection Chip",
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
  "contentcard": {
    name: "ContentCard",
    codeSnippet: `import { ContentCard, ContentCardBody, ContentCardTitle, Typography } from '@visa/nova-react';

export const DefaultContentCard = () => {
  return (
    <ContentCard>
      <ContentCardTitle>Title</ContentCardTitle>
      <ContentCardBody>
        <Typography>Body content</Typography>
      </ContentCardBody>
    </ContentCard>
  );
};`
  },
  "contentcardbody": {
    name: "ContentCardBody",
    codeSnippet: `import { ContentCardBody } from '@visa/nova-react';

export const DefaultContentCardBody = () => {
  return (
    <ContentCardBody>Body content</ContentCardBody>
  );
};`
  },
  "contentcardtitle": {
    name: "ContentCardTitle",
    codeSnippet: `import { ContentCardTitle } from '@visa/nova-react';

export const DefaultContentCardTitle = () => {
  return (
    <ContentCardTitle>Title</ContentCardTitle>
  );
};`
  },
  "divider": {
    name: "Divider",
    codeSnippet: `import { Divider } from '@visa/nova-react';

export const DefaultDivider = () => {
  return (
    <Divider dividerType="decorative" />
  );
};`
  },
  "drawer": {
    name: "Drawer",
    codeSnippet: `import { Drawer, Button, Typography } from '@visa/nova-react';
import { useState } from 'react';

export const DefaultDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Typography>Drawer content</Typography>
      </Drawer>
    </>
  );
};`
  },
  "dropdown": {
    name: "Dropdown",
    codeSnippet: `import { Dropdown } from '@visa/nova-react';

export const DefaultDropdown = () => {
  return (
    <Dropdown label="Dropdown">
      <Dropdown.Item>Option 1</Dropdown.Item>
      <Dropdown.Item>Option 2</Dropdown.Item>
    </Dropdown>
  );
};`
  },
  "formfield": {
    name: "FormField",
    codeSnippet: `import { FormField, Input } from '@visa/nova-react';

export const DefaultFormField = () => {
  return (
    <FormField label="Label">
      <Input />
    </FormField>
  );
};`
  },
  "icon": {
    name: "Icon",
    codeSnippet: `import { Icon } from '@visa/nova-react';

export const DefaultIcon = () => {
  return (
    <Icon name="check" />
  );
};`
  },
  "input": {
    name: "Input",
    codeSnippet: `import { Input } from '@visa/nova-react';

export const DefaultInput = () => {
  return (
    <Input placeholder="Type here..." />
  );
};`
  },
  "link": {
    name: "Link",
    codeSnippet: `import { Link } from '@visa/nova-react';

export const DefaultLink = () => {
  return (
    <Link href="https://www.visa.com" noUnderline>Visa</Link>
  );
};`
  },
  "modal": {
    name: "Modal",
    codeSnippet: `import { Modal, Button, Typography } from '@visa/nova-react';
import { useState } from 'react';

export const DefaultModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Typography>Modal content</Typography>
      </Modal>
    </>
  );
};`
  },
  "nav": {
    name: "Nav",
    codeSnippet: `import { Nav } from '@visa/nova-react';

export const DefaultNav = () => {
  return (
    <Nav>Navigation</Nav>
  );
};`
  },
  "navappname": {
    name: "NavAppName",
    codeSnippet: `import { NavAppName } from '@visa/nova-react';

export const DefaultNavAppName = () => {
  return (
    <NavAppName>App Name</NavAppName>
  );
};`
  },
  "pagination": {
    name: "Pagination",
    codeSnippet: `import { Pagination } from '@visa/nova-react';

export const DefaultPagination = () => {
  return (
    <Pagination total={100} pageSize={10} />
  );
};`
  },
  "progressbar": {
    name: "ProgressBar",
    codeSnippet: `import { ProgressBar } from '@visa/nova-react';

export const DefaultProgressBar = () => {
  return (
    <ProgressBar value={50} max={100} />
  );
};`
  },
  "radio": {
    name: "Radio",
    codeSnippet: `import { Radio } from '@visa/nova-react';

export const DefaultRadio = () => {
  return (
    <Radio>Option</Radio>
  );
};`
  },
  "select": {
    name: "Select",
    codeSnippet: `import { Select } from '@visa/nova-react';

export const DefaultSelect = () => {
  return (
    <Select label="Select">
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
    </Select>
  );
};`
  },
  "skeleton": {
    name: "Skeleton",
    codeSnippet: `import { Skeleton } from '@visa/nova-react';

export const DefaultSkeleton = () => {
  return (
    <Skeleton />
  );
};`
  },
  "spinner": {
    name: "Spinner",
    codeSnippet: `import { Spinner } from '@visa/nova-react';

export const DefaultSpinner = () => {
  return (
    <Spinner />
  );
};`
  },
  "stepper": {
    name: "Stepper",
    codeSnippet: `import { Stepper } from '@visa/nova-react';

export const DefaultStepper = () => {
  return (
    <Stepper steps={["Step 1", "Step 2", "Step 3"]} current={1} />
  );
};`
  },
  "switch": {
    name: "Switch",
    codeSnippet: `import { Switch } from '@visa/nova-react';

export const DefaultSwitch = () => {
  return (
    <Switch>Toggle</Switch>
  );
};`
  },
  "tab": {
    name: "Tab",
    codeSnippet: `import { Tab } from '@visa/nova-react';

export const DefaultTab = () => {
  return (
    <Tab>Tab</Tab>
  );
};`
  },
  "tabsuffix": {
    name: "TabSuffix",
    codeSnippet: `import { TabSuffix } from '@visa/nova-react';

export const DefaultTabSuffix = () => {
  return (
    <TabSuffix element={<span>Suffix</span>} />
  );
};`
  },
  "tabs": {
    name: "Tabs",
    codeSnippet: `import { Tabs, Tab } from '@visa/nova-react';

export const DefaultTabs = () => {
  return (
    <Tabs>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </Tabs>
  );
};`
  },
  "tag": {
    name: "Tag",
    codeSnippet: `import { Tag } from '@visa/nova-react';

export const DefaultTag = () => {
  return (
    <Tag>Tag</Tag>
  );
};`
  },
  "textarea": {
    name: "Textarea",
    codeSnippet: `import { Textarea } from '@visa/nova-react';

export const DefaultTextarea = () => {
  return (
    <Textarea placeholder="Type here..." />
  );
};`
  },
  "toast": {
    name: "Toast",
    codeSnippet: `import { Toast } from '@visa/nova-react';

export const DefaultToast = () => {
  return (
    <Toast open>Toast message</Toast>
  );
};`
  },
  "toggle": {
    name: "Toggle",
    codeSnippet: `import { Toggle } from '@visa/nova-react';

export const DefaultToggle = () => {
  return (
    <Toggle>Toggle</Toggle>
  );
};`
  },
  "tooltip": {
    name: "Tooltip",
    codeSnippet: `import { Tooltip, Button } from '@visa/nova-react';

export const DefaultTooltip = () => {
  return (
    <Tooltip content="Tooltip text">
      <Button>Hover me</Button>
    </Tooltip>
  );
};`
  },
  "typography": {
    name: "Typography",
    codeSnippet: `import { Typography } from '@visa/nova-react';

export const DefaultTypography = () => {
  return (
    <Typography variant="headline-1">Headline</Typography>
  );
};`
  },
  "utility": {
    name: "Utility",
    codeSnippet: `import { Utility } from '@visa/nova-react';

export const DefaultUtility = () => {
  return (
    <Utility vFlex vGap={8}>Utility content</Utility>
  );
};`
  },
  "utilityfragment": {
    name: "UtilityFragment",
    codeSnippet: `import { UtilityFragment } from '@visa/nova-react';

export const DefaultUtilityFragment = () => {
  return (
    <UtilityFragment vFlex vGap={8}>Fragment content</UtilityFragment>
  );
};`
  },
  "visalogo": {
    name: "VisaLogo",
    codeSnippet: `import { VisaLogo } from '@visa/nova-react';

export const DefaultVisaLogo = () => {
  return (
    <VisaLogo />
  );
};`
  }
};

export default NovaComponents;