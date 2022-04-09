import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import LeftSideMenu from "../components/LeftSideMenu";
import RightSideMenu from "../components/RightSideMenu";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="main">
        <div className="toggler" onClick={() => setToggle(!toggle)}>
          {!toggle ? <FaBars /> : <RiCloseLine />}
        </div>
        <LeftSideMenu toggle={toggle} />
        <RightSideMenu toggle={toggle} setToggle={setToggle} />
        {children}
      </div>
      {/* {router.pathname !== "/" &&
      <Footer />
      } */}
    </>
  );
};

export default Layouts;
