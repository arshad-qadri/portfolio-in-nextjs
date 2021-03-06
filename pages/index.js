import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <Image src={"/assets/img/bg.jpg"} layout={"fill"} objectFit={"cover"} alt={"bacground"}/>
        <div className="leftside">
          <h1>
            Arshad <span>Qadri</span>
          </h1>
          <div className="text">
            <p>MERN Stack Developer, Frontend Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}
