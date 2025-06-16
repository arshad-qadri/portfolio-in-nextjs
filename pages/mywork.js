import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Footer from "../layouts/Footer";

const Mywork = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false);
  }, []);
  const myWorks = [
    {
      image: "crm.png",
      live: "https://crm-frontend-01.netlify.app",
    },
    {
      image: "diamondcertified.png",
      live: "https://www.diamondcertified.org/",
    },
    {
      image: "timespro.png",
      live: "https://timespro.com/",
    },
    {
      image: "gallery.png",
      live: "https://gallery.arshadqadri.com/login",
    },
    {
      image: "royalbaby.png",
      live: "https://royalbaby-02.web.app/",
    },
    {
      image: "egg-portal.png",
      live: "https://egg-portal.netlify.app/",
    },
  ];
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  //api.urlbox.io/v1/T6LcLYJSQb9WkOPJ/png?url=${websiteUrl}
  https: return (
    <>
      <Head>
        {/* <!-- Meta Title --> */}
        <title>My Projects | React & Next.js Portfolio by Arshad Qadri</title>

        {/* <!-- Meta Title --> */}
        <meta
          name="title"
          content="My Projects | React & Next.js Portfolio by Arshad Qadri"
        />
        {/* <!-- Meta Description --> */}
        <meta
          name="description"
          content="Explore the professional projects I've built using React, Next.js, and Node.js. From dynamic UIs to full-stack applications, see my work in action."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Projects by Arshad Qadri",
              url: "https://arshadqadri.com/mywork",
              description:
                "Explore the frontend projects and work done by Arshad Qadri using React.js, Next.js, and modern web tools.",
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: "Arshad Qadri",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://arshadqadri.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "My Work",
                  item: "https://arshadqadri.com/mywork",
                },
              ],
            }),
          }}
        />
      </Head>
      {!load ? (
        <div className="overFlow-scroll">
          <div className="page">
            <div className="container">
              <Header
                text="My"
                colorText="Work"
                desc="Check out some of my projects..."
              />
              <div className="row gy-3">
                {myWorks.map((item, ind) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={ind}>
                    <div className="projet">
                      <figure
                        style={{
                          width: "100%",
                          height: "200px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={`/assets/img/${item.image}`}
                          layout={"fill"}
                          loader={myLoader}
                          objectFit={"cover"}
                          alt={"projects image"}
                        />
                        {/* <Image
                        src={`https://api.apiflash.com/v1/urltoimage?access_key=212e6657f9d84dffb90369c555e1eda2&wait_until=page_loaded&url=${item.live}&width=410`}
                        layout={"fill"}
                        loader={myLoader}
                        objectFit={"cover"}
                        alt={"projects image"}
                      /> */}
                      </figure>
                      <a
                        className="live-preview"
                        href={item.live}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        Live preview
                      </a>

                      {/* <a 
                        className="source-code"
                        href={item.gitLink}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        Source code
                      </a>*/}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Mywork;
