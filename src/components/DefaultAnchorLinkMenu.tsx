import { AnchorLinkMenu, AnchorLinkMenuHeader, Link, Typography } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'default-anchor-link-menu';

export const DefaultAnchorLinkMenu = () => {
  return (
    <AnchorLinkMenu aria-labelledby={`${id}-header`}>
      <section>
        <AnchorLinkMenuHeader>
          <Typography id={`${id}-header`} tag="h2" variant="overline">
            Section title
          </Typography>
        </AnchorLinkMenuHeader>
        <ul>
          <li>
            <Link aria-current="true" href="#">
              L1 label 1
            </Link>
          </li>
          <li>
            <Link href="#">L1 label 2</Link>
          </li>
          <li>
            <Link href="#">L1 label 3</Link>
          </li>
          <li>
            <Link href="#">L1 label 4</Link>
          </li>
          <li>
            <Link href="#">L1 label 5</Link>
          </li>
        </ul>
      </section>
    </AnchorLinkMenu>
  );
};