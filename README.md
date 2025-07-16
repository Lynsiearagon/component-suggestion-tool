# Component Suggestion Tool

## ABOUT

- Allows users to search for and use Visa components using a search bar or a menu.
- Built using NextJs - it is a framework for React and provides a nice developer experience.
- Styled using Tailwind - this provides a very fast and easy way to style components and create responsive designs.

## NOTES:

- TOTAL TIME: ~ 7.5 HOURS

- Research and understanding the design.visa.com site took about 1 hour.

- The longest part of this project was the data portion; this took about 2 hours. You can see the data in src/data/NovaComponents.ts.

- Styling took roughly 1 hour.

- Development and testing took roughtly 2 hours.

- Readme took 45 minutes.

- Deploying to Netlify took 15 minutes.

## APPROACH

- Research

- Decide on data structures and algo approach

- Structure data:

  - I created a NovaComponents object; I used the help of Cursor to do this. I gave cursor the Visa documentation and the object structure that I wanted. Cursor mostly completed the object structure that I needed, having a "name", "component", and "codeSnippet" attribute, and using the lower-cased version of the componenet name as the key, but it did not copy the codeSnippet correctly. After trying to clarify and write better queries for Cursor to understand the correct code snippets, I eventually had to go through and quality check/update the object myself (time consuming). Most of the base components are in the object, but they are not all being displayed right now.

- Create basic design and color scheme:

  - I told cursor to style the words "Component Suggestion Tool" as a basic logo and give me five different designs. I chose the one I liked best. The colors used in my logo became the color scheme seen throughout my project.
  - I spent roughly 1.5 hour total styling the application.

- I selected a couple of Visa's components and icons that I wanted to use in my project. I did customize them a little to fit my needs (colors, added/remove some functionality).

  - AlternateVerticalNavigation
  - VisaSearchLow
  - Button

- Completed the rest of the application, development, and testing. Order of features implemented below:
  1. Header - Logo and nav.
  2. Visa Component Sidebar and Main Content - A clicked component in sidebar shows up in main container; used useState to hold which component was clicked and then displayed component in main container.
  3. Create Ccomponent Card in Main Content - Card has title, Visa component, code snippet, and action buttons.
  4. Search Bar - functionality, filtering, displaying content in main container; used useState to set value of search input; on click of 'Search' button searched for keys in the NovaComponents object that included matching words from the search input. Each key that had matching words got pushed into the display results; duplicate components were accounted for.
  5. Testing and debugging took place through entire process.
  6. Create and edit ReadME
  7. Deploy to Netlify

## CHALLENGES

- There are some small changes in the displayed code snippets that I had to make because VS Code kept flagging the template literals in the codeSnippets key. For time, I had to change `` to ''.

- I tried searching for an API to pull all of the base component data but I could not find one.

- The time it took to structure the data

- I like to be thorough, and for things to look nice, and for the app to work properly, so it took me longer than the recommended 3 - 4 hours; this was challenging because it did cause me stress since I was taking longer.

## FUTURE FEATURES AND UPDATES:

- I would like to add more component files into the project so that it's richer in data. Currently, the majority of the NovaComponent data is commented out because I wanted to prioritize development and not component file creation.

- I want to add 508 compliance/accessibility.

- I want to improve the mobile / responsive design, as I did not have enough time to fully tend to this.

- I'd like to add more icons to bring the app to life.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
