import Head from "next/head";
import Layouts from "../layouts/Layouts";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://arshadqadri.com${
    router.asPath === "/" ? "" : router.asPath
  }`;
  return (
    <>
      <Head>
        <title>Arshad Qadri | Frontend Developer</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/arshad.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Arshad Qadri is a Frontend Developer with 3.5 years of experience in React.js, Next.js, and modern web technologies. Explore his projects and skills."
        />
        <meta
          name="keywords"
          content="Arshad Qadri, React Developer, Frontend Developer, Next.js Developer, JavaScript Developer, Portfolio, Web Developer India"
        />
        <meta name="author" content="Arshad Qadri" />

        {/* Open Graph (Facebook etc.) */}
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
          content="https://arshadqadri.com/profile.jpg"
        />

        {/* Twitter Card */}
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
          content="https://arshadqadri.com/profile.jpg"
        />

        {/* JSON-LD Structured Data (Schemas) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arshad Qadri",
              url: "https://arshadqadri.com",
              image: {
                "@type": "ImageObject",
                url: "https://arshadqadri.com/profile.jpg",
                width: 800,
                height: 800,
              },
              sameAs: [
                "https://www.linkedin.com/in/arshad-qadri/",
                "https://www.instagram.com/arshadraza.01/",
                "https://github.com/arshad-qadri",
                "https://www.facebook.com/arshad.qadri.355",
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Neosoft Technologies",
                url: "https://www.neosofttech.com",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Chintamanrao Institute of Management Development & Research, Sangli",
                parentOrganization: {
                  "@type": "CollegeOrUniversity",
                  name: "Shivaji University Kolhapur",
                },
              },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                educationalLevel: "Bachelor",
                name: "Bachelor of Computer Applications (BCA)",
              },
              description:
                "Arshad Qadri is a frontend developer with 3.5 years of experience in React.js, Next.js, and modern JavaScript technologies. Currently working at Neosoft Technologies, Mumbai.",
              email: "mailto:arshadqadri321@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "MH",
                addressCountry: "IN",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arshad Qadri Portfolio",
              url: "https://arshadqadri.com",
              author: {
                "@type": "Person",
                name: "Arshad Qadri",
              },
              description:
                "Portfolio website of Arshad Qadri, a frontend developer specializing in React and Next.js.",
              inLanguage: "en",
            }),
          }}
        />
      </Head>

      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
