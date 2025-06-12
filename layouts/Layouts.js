import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import LeftSideMenu from "../components/LeftSideMenu";
import RightSideMenu from "../components/RightSideMenu";

const Layouts = ({ children }) => {
  const [toggle, setToggle] = useState(false);

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
