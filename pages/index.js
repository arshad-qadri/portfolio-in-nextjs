import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Loader from "../components/Loader";
import ReactTypedComponent from "../components/ReactTyped";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [load, setLoad] = useState(true);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  useEffect(() => {
    setLoad(false);
  }, []);

  return (
    <>
      <Head>
        {/* <!-- Meta Title --> */}
        <title>Arshad Qadri | React & Next.js Developer Portfolio</title>

        {/* <!-- Meta Title --> */}
        <meta
          name="title"
          content="Arshad Qadri | React & Next.js Developer Portfolio"
        />
        {/* <!-- Meta Description --> */}
        <meta
          name="description"
          content="Hi, I'm Arshad Qadri — a passionate React and Next.js developer with 3.5 years of experience in building fast, responsive web applications. Check out my portfolio!"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Arshad Qadri | Frontend Developer Portfolio",
              url: "https://arshadqadri.com/",
              description:
                "Welcome to the official portfolio of Arshad Qadri — a frontend developer experienced in React.js, Next.js, and modern web technologies.",
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: "Arshad Qadri",
              },
            }),
          }}
        />
      </Head>

      {!load ? (
        <div className="home">
          <Image
            src={"/assets/img/bg.jpg"}
            loader={myLoader}
            layout={"fill"}
            objectFit={"cover"}
            alt={"bacground"}
          />
          <div className="leftside">
            <div className="left-container">
              <div>
                <div className="devider">
                  <Link href="https://www.linkedin.com/in/arshad-qadri/">
                    <a target="_blank" className="linkedin-icon" rel="referrer">
                      <FaLinkedin size={30} color="#fff" />
                    </a>
                  </Link>
                  <Link href="https://github.com/arshad-qadri">
                    <a target="_blank" className="github-icon" rel="referrer">
                      <FaGithubSquare size={30} color="#fff" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="">
                <h1>
                  Arshad <span className="lastname">Qadri</span>
                </h1>
                <div className="text">
                  <ReactTypedComponent />
                </div>
                <div className="btn-grp">
                  <a
                    href="/assets/resume/Arshad-React-Resume.pdf"
                    className="download-button"
                    download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
