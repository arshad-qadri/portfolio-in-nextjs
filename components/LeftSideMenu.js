import Image from "next/image";
import React from "react";

const LeftSideMenu = ({ toggle }) => {
  return (
    <>
      <div
        className={`left-side-menu menu ${!toggle && "left-side-menu-hide"}`}
      >
        <div className="profile">
          <Image
            src={"/assets/img/profile.jpg"}
            width={"250px"}
            height={"250px"}
            objectFit={"cover"}
            className="profile-img"
            alt="profile"
          />
        </div>
      </div>
    </>
  );
};

export default LeftSideMenu;
