import Head from "next/head";
import Layouts from "../layouts/Layouts";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Arshad Qadri | Frontend Developer Portfolio</title>
          <meta
            name="description"
            content="Arshad Qadri is a Frontend Developer with 3.5 years of experience in React.js, Next.js, and modern web technologies. Explore his projects and skills."
          />
          <meta
            name="keywords"
            content="Arshad Qadri, React Developer, Frontend Developer, Next.js Developer, JavaScript Developer, Portfolio, Web Developer India"
          />
          <meta name="author" content="Arshad Qadri" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arshadqadri.com" />
          <meta
            property="og:title"
            content="Arshad Qadri | Frontend Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Experienced React.js and Next.js developer. Explore Arshad Qadri’s portfolio, projects, and frontend skills."
          />
          <meta
            property="og:image"
            content="https://arshadqadri.com/profile2.jfif"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://arshadqadri.com" />
          <meta
            name="twitter:title"
            content="Arshad Qadri | Frontend Developer Portfolio"
          />
          <meta
            name="twitter:description"
            content="Experienced React.js and Next.js developer. Explore Arshad Qadri’s portfolio, projects, and frontend skills."
          />
          <meta
            name="twitter:image"
            content="https://arshadqadri.com/profile2.jfif"
          />
        </head>
      </Head>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
