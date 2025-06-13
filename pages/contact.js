import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Footer from "../layouts/Footer";
const MyMap = dynamic(() => import("../components/MyMap"), {
  ssr: false,
});
// import MyMap from "../components/MyMap";

const Contact = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false);
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Contact Arshad Qadri",
              url: "https://arshadqadri.com/contact",
              description:
                "Get in touch with Arshad Qadri for freelance frontend development projects or job opportunities.",
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
                  position: 3,
                  name: "Contact",
                  item: "https://arshadqadri.com/contact",
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
                text="Contact"
                colorText="Me"
                desc="This is how you can reach me..."
              />
              <div className="contacts">
                <div className="row gy-3">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="w-100 contact">
                      <a href="mailto:arshadqadri321@gmail.com">
                        <span>Email : </span>&nbsp; arshadqadri321@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="w-100 contact">
                      <a href="tel:8007330423">
                        <span>Phone : </span>&nbsp; +918007330423
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="w-100 contact">
                      <a href="#">
                        <span>Address : </span>&nbsp; Prakshnagar, Kupwad road,
                        Sangli 416416.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MyMap />
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Contact;
