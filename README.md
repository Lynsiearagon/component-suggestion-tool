# Component Suggestion Tool

## ABOUT

- Allows users to search for and use Visa components using a search bar or a menu.
- I used NextJs - it is a framework for React and provides a nice developer experience.
- I used Tailwind to style the app - this provides a very fast and easy way to style components and create responsive designs.

## NOTES:

- TOTAL TIME: ~ 7 HOURS

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

  - I created a NovaComponents object; I used the help of Cursor to do this. I gave cursor the visa documentation and the object structure that I wanted. Cursor mostly completed the object structure that I needed, having a "name", "component", and "codeSnippet" attributes, but it did not copy the codeSnippet correctly. After trying to clarity and write better queries for Cursor to understand the correct code snippets, I had to go through and quality check/update the object myself (time consuming).

- Create basic design and color scheme:

  - I told cursor to style the words "Component Suggestion Tool" as a basic logo and give me five different designs. I chose the one I liked best. The colors used in my logo because the color scheme seen throughout my project.
  - I spent roughly 1 hour total styling the application.

- I selected a couple of Visa's components and icons that I wanted to use in my project. I did customize them a little to fit my needs (colors, extra functionality).

- The rest of the application, development, and testing. Order of developed components below:
  1. Header - Logo and nav.
  2. Visa component sidebar and main content - Clicked component in sidebar shows up in main container; used useState to hold which component was clicked and then displayed component in main container.
  3. Create component card - Card has title, Visa component, code snippet, and action buttons.
  4. Search bar - functionality, filtering, displaying content in main container; used useState to set value of input; on click of Search button searched for keys in the NovaComponents object that included matching words from the search input. Each key that had matching words got pushed into the display results; duplicates components were accounted for.
  5. Test and debugging took place through entire process, more testing happened at end.
  6. Create and edit ReadME
  7. Deploy to Netlify

## CHALLENGES

- There are some small changes in the displayed code snippets that I had to make because VS Code kept flagging the template literals in the codeSnippets key. For time, I had to change `` to ''.

- I tried searching for an API to pull all of the base component data but I could not find one.

- It took a little bit of time to decide how I wanted to structure my data.

- I like for things to look nice and work so it took me longer than the 3 - 4 hours because I wanted to do a good job.

## FUTURE FEATURES AND UPDATES:

- I would like to add more component files into the project. Currently the majority of the NovaComponent data is commented out because I wanted to prioritize development and not component file creation.

- I want to add 508 compliance/accessibility.

- Improve the mobile / responsive design - I did not have enough time to attend to this.

- Add more icons to bring the app to life.

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
