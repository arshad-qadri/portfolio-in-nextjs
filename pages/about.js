import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Footer from "../layouts/Footer";

const About = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false);
  }, []);
  const jobs = [
    {
      workshop: "7Seasol",
      designation: "Front-End Developer",
      text: "August 2021 to February 2022 (7 months)\nWorked as a React and Front-End Developer, responsible for building responsive UIs and maintaining web applications using modern front-end technologies like React and Nextjs",
    },
    {
      workshop: "Explarity Solution Pvt Ltd",
      designation: "Front-End Developer",
      text: "March 2022 to August 2024 (2 years 6 months)\nHandled complete project development from scratch to production. Integrated RESTful APIs, implemented complex functionalities, and optimized the application for SEO. Worked extensively with React.js & Next.js and other modern tools.",
    },
    {
      workshop: "Technizoit",
      designation: "Fullstack Developer",
      text: "September 2024 to October 2024 (2 months)\nWorked as a Fullstack Developer using React.js for frontend and Node.js with Express for backend. Handled databases like MongoDB and MySQL.",
    },
    {
      workshop: "Neosoft",
      designation: "Software Engineer",
      text: "Currently working as a React Developer, focusing on building scalable front-end applications and improving UI/UX performance using modern web technologies.",
    },
  ].reverse();

  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <Head>
        {/* <!-- Meta Title --> */}
        <title>About Me | Arshad Qadri - Frontend Developer in Mumbai</title>

        {/* <!-- Meta Title --> */}
        <meta
          name="title"
          content="About Me | Arshad Qadri - Frontend Developer in Mumbai"
        />
        {/* <!-- Meta Description --> */}
        <meta
          name="description"
          content="I'm Arshad Qadri, a frontend developer specializing in React.js and Next.js. Learn more about my journey, education, skills, and development experience."
        />
        <meta
          name="keywords"
          content="Arshad Qadri, About Arshad, Frontend Developer Profile, React Developer Experience, Next.js Developer India, Software Engineer, Web Developer Resume"
        />
        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arshadqadri.com/about" />
        <meta
          property="og:title"
          content="About Arshad Qadri | React Developer in Pune"
        />
        <meta
          property="og:description"
          content="Learn about Arshad Qadri’s experience, education, and frontend development journey."
        />
        <meta
          property="og:image"
          content="https://arshadqadri.com/profile.jpg"
        />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://arshadqadri.com/about" />
        <meta
          name="twitter:title"
          content="About Arshad Qadri | React Developer in Pune"
        />
        <meta
          name="twitter:description"
          content="Learn about Arshad Qadri’s experience, education, and frontend development journey."
        />
        <meta
          name="twitter:image"
          content="https://arshadqadri.com/profile.jpg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "About Arshad Qadri",
              url: "https://arshadqadri.com/about",
              description:
                "Learn more about Arshad Qadri, a frontend developer with 3.5 years of experience specializing in React and Next.js.",
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
                  name: "About",
                  item: "https://arshadqadri.com/about",
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
                text="About"
                colorText="Me"
                desc="Let me tell you a few things..."
              />
              <div className="details">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-start">
                    <div className="profile">
                      <Image
                        src={"/assets/img/profile2.jfif"}
                        loader={myLoader}
                        width={"250px"}
                        height={"250px"}
                        objectFit={"cover"}
                        className="profile-img"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="detail-text">
                      <h5>BIO</h5>

                      <p>
                        I&rsquo;m Arshad Qadri, a dedicated React developer with
                        over 3.5 years of experience and a BCA degree from
                        Shivaji University, Kolhapur (2020). I specialize in
                        building fast, responsive, and SEO-friendly web
                        applications using React.js, Next.js, JavaScript, and
                        TypeScript. My skill set includes HTML, CSS, Bootstrap,
                        Tailwind CSS, Chakra UI, and Reactstrap for UI
                        development, along with Redux for efficient state
                        management. I also have backend experience using
                        Node.js, Express, and working with databases like
                        MongoDB and MySQL. Passionate about clean code,
                        performance, and user experience, I enjoy contributing
                        to modern web projects that solve real-world problems.
                      </p>

                      <p>
                        Thank you for considering my profile. I look forward to
                        the prospect of collaborating on exciting projects.
                      </p>
                    </div>
                  </div>
                  <div className="row gy-4 mx-0 mb-5">
                    {jobs.map((item, ind) => (
                      <div className="col-lg-6 col-sm-12" key={ind}>
                        <div className="job-info">
                          <h3>{item.workshop}</h3>
                          <h5> {item.designation} </h5>
                          <p
                            dangerouslySetInnerHTML={{ __html: `${item.text}` }}
                          ></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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

export default About;
