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
  console.log("router===", router);

  return (
    <>
      <Head>
        <title>Arshad Qadri | Frontend Developer</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/arshad.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Arshad Qadri" />

        {/* JSON-LD Structured Data (Schemas) */}
        {(router.asPath === "/" || router.asPath === "/about") && (
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
        )}

        {router.asPath === "/" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Arshad Qadri Portfolio",
                url: "https://arshadqadri.com",
                description:
                  "Portfolio website of Arshad Qadri, a frontend developer specializing in React and Next.js.",
                inLanguage: "en",
                publisher: {
                  "@type": "Person",
                  name: "Arshad Qadri",
                },
              }),
            }}
          />
        )}
      </Head>

      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
