import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../layouts/Footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
