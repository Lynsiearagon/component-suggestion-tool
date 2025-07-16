# Component Suggestion Tool

## ABOUT

- Allows users to search for and use Visa components using a search bar or a menu.

## NOTES:

- The longest part of this project was the data portion - this took a couple of hours to format it as needed to use in the app. There are some small changes in the code snippets that I had to make because VS Code kept flagging the template literals in the codeSnippets key.
- In total, the research in the Design.visa.com site and the data formatting took about 3 hours.

- I tried searching for an API to pull all of the base component data so that I could use, but I could not find one.

- Instead, I had to create the NovaComponents object myself. I used the help of Cursor to do this. I gave cursor the documentation and the object structure that I wanted. It mostly completed the object structure as needed, having a "name", "component", and "codeSnippet" key, but it did copy the codeSnippet incorrectly, and after trying to clarity and write better queries for it to understand the correct code snippets, I had to go through and quality check the object myself.

- I spent roughly 1 hour total styling the application.
- I used cursor to suggest a color palet. I asked for five choices and the finished product is what I selected.

- The rest of the application, development and testing, went by pretty fast, appx 2 hours.

## WHAT I WANT TO DO:

- I know what I went over the four hour limit, as the data took longer to gather, but I would like to add more component files into the project. Currently the majority of components are commented out in the NovaComponents object, as I wanted to prioritize development and not data for the project.

- I want to add 508 compliance/accessibility.

- Improve the mobile / responsive design - I did not have enough time to full style this.

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
