import Image from "next/image";
import React from "react";

const LeftSideMenu = ({ toggle }) => {
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div
        className={`left-side-menu menu ${!toggle && "left-side-menu-hide"}`}
      >
        <div className="profile">
          <Image
            src={"/assets/img/profile2.jfif"}
            width={"250px"}
            height={"250px"}
            objectFit={"cover"}
            className="profile-img"
            alt="profile"
            loader={myLoader}
          />
        </div>
      </div>
    </>
  );
};

export default LeftSideMenu;
