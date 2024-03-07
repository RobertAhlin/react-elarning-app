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
https://github.com/RobertAhlin/react-elearning-app  
Opened with GitHub Desktop  
Clonded and opened with VS Code

## Created a new Next.js project
In terminal ran the following command: `npx create-next-app@latest . --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"`  
Since `npx create-next-app .` made something strange to the app.  
Start the development server: `npm run dev`  

# Developement progress
* After getting the YouTube API working. I soon discovered that my "unlisted" videos was not able to to be fetched. So instead I implemented to show a random quote to will encurage for happiness.
* Instead I made a database.json file with urls to all the videos.  
* I made three pages. One for each course.
* To meet the API critera; I instead fetch a quote that add happiness and incourage to studying.
* Made some simple CSS styling.
At this stage I had been struggeling with al kinds of things that didn't work as expected. So I ended up creating a new repo and created the app with another command described in the section above.

# Components
There are in total 13 components:
1. **Card**: Displays a card containing embedded YouTube video.
2. **ContactForm**: Renders a form for users to input their contact information and message.
3. **Footer**: Contains a section at the bottom of the page, often used for displaying quotes or other information.
4. **Header**: Typically located at the top of the page, containing navigation links and other header elements.
5. **HeroSection**: Represents the hero section of the webpage, usually containing a large image or video with accompanying text.
6. **Navbar**: Renders a navigation bar with links to different pages of the website.
7. **NewsSection**: Displays the latest news items fetched from a JSON file, usually containing a title, date, and text.
8. **QuoteList**: Fetches and displays a list of quotes from an external API, often used in the footer or other sections.
9. **Kontakt**: Represents the contact page of the website, including a header, contact form, and footer.
10. **Home**: The main landing page of the website, including a header, hero section, news section, and footer.
11. **Page1**: Represents a specific page of the website, in this case, "Introduktion till säkerhetsskydd," displaying cards with relevant content.
12. **Page2**: Represents another specific page of the website, focusing on "Personalsäkerhet," displaying cards with relevant content.
13. **Page3**: Represents yet another specific page of the website, centered around "Säkerhetsskyddsplanering," displaying cards with relevant content.


