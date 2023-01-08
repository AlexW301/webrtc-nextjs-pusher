/* eslint-disable @next/next/no-head-element */
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
// import { Nunito } from "@next/font/google";
// const nunito = Nunito();

export default function RootLayout({ children }) {

  return (
    <html>
      <head>
        <title>Next JS Starter Template</title>
        <meta
          name="description"
          content="This is a quickstart template for a Next JS"
        />
        <meta
          name="tags"
          content="Next JS, Tailwind CSS, Global State, Layout, Components, Hooks"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image" href="favicon.ico" />
      </head>
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
