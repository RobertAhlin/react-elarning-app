This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# i4 e-learning.
This is an application that is mainly for the third project (Labb 3) in the course "Webbutveckling med React" at IT-högskolan.
This is a Next.JS app that will use an API to YouTube to get the educational vidoes.


# Setting up.
Started by setting up the GitHub repo:
https://github.com/RobertAhlin/react-i4-elearning  
Opened with GitHub Desktop  
Clonded and opened with VS Code

## Created a new Next.js project
In terminal ran the following command: `npx create-next-app .`  
Choosed following options:  
√ Would you like to use TypeScript? ... <u>No</u> / Yes  
√ Would you like to use ESLint? ... No / <u>Yes</u>  
√ Would you like to use Tailwind CSS? ... <u>No</u> / Yes  
√ Would you like to use `src/` directory? ... <u>No</u> / Yes  
√ Would you like to use App Router? (recommended) ... No / <u>Yes</u>  
√ Would you like to customize the default import alias (@/*)? ... <u>No</u> / Yes  
Creating a new Next.js app in F:\GitHub\react-i4-elearning.  

Start the development server: `npm run dev`  
<img src="readmefiles/nextjs-running.jpg" alt="Showing Next,js application running at first start up">

# Developement progress
* After getting the YouTube API working. I soon discovered that my "unlisted" videos was not able to to be fetched. So instead I implemented to show a random quote to will encurage for happiness.
* Instead I made a database.json file with urls to all the videos.  
* I made three pages. One for each course.
* To meet the API critera; I instead fetch a quote that add happiness and incourage to studying.
* Made some simple CSS styling.

# Components
There are in total 14 components:
1. **Header**: This component represents the header section of your website, typically containing navigation links and any other header-related content.

2. **Footer**: The footer component represents the footer section of your website, often containing links, contact information, or other supplementary content.

3. **ContactForm**: This component is a form used for contacting the website owner or administrator. It includes fields for the user's name, email, subject, message, and a send button.

4. **Navbar**: The Navbar component is responsible for rendering the navigation bar, which typically contains links to different pages or sections of the website.

5. **QuoteList**: This component fetches and displays a list of quotes from an external API. It's used to showcase quotes in the footer section of the website.

6. **HeroSection**: The HeroSection component is a prominent section at the top of a page, often containing a large image or video background, along with a title and subtitle.

7. **Card**: The Card component represents a card or tile used to display content, such as links to videos or other resources. It's commonly used to present information in a visually appealing way.

8. **Page1**: This component represents a specific page of your website, titled "Introduktion till säkerhetsskydd". It displays a list of cards related to security introduction.

9. **Page2**: Similar to Page1, this component represents another page titled "Personalsäkerhet". It displays a list of cards related to personal security.

10. **Page3**: This component represents yet another page titled "Säkerhetsskyddsplanering". It displays a list of cards related to security planning.

11. **Layout**: The Layout component serves as a wrapper around the main content of each page. It includes the Header, HeroSection, Footer, and the main content of the page as children components.

12. **Main**: The Main component represents the main content area of each page, excluding the header, hero section, and footer.

13. **HeroSection (inside Layout)**: This is a specialized instance of the HeroSection component, specifically used within the Layout component to provide a hero section for each page.

14. **Footer (inside Layout)**: Similar to the HeroSection, this is a specialized instance of the Footer component used within the Layout component to provide a consistent footer for each page.

