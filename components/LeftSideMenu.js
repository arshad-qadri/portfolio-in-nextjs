import Image from 'next/image';
import React from 'react'

const LeftSideMenu = ({ toggle }) => {
  return (
    <>
      <div
        className="left-side-menu menu"
        style={{ bottom: !toggle ? "-100%" : "0" }}
      >
        <div className="profile">
          <Image
            src={"https://i.postimg.cc/9MV9VG86/IMG-20211101-WA0009.jpg"}
            width={"250px"}
            height={"250px"}
            objectFit={"cover"}
            className="profile-img"
            alt='profile'
          />
        </div>
      </div>
    </>
  );
};

export default LeftSideMenu