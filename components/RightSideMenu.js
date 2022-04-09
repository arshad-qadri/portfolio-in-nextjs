import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const RightSideMenu = ({ toggle, setToggle }) => {
  const router = useRouter();
  const navItems = [
    {
      nav: "Home",
      link: "/",
    },
    {
      nav: "About me",
      link: "/about",
    },
    {
      nav: "My Work",
      link: "/mywork",
    },
    {
      nav: "How to reach me",
      link: "/contact",
    },
  ];
  return (
    <>
      <div
        className={`right-side-menu menu ${!toggle && "right-side-menu-hide"}`}
      >
        <div className="nav-menu">
          <ul>
            {navItems.map((item, ind) => (
              <li key={ind}>
                <Link href={item.link}>
                  <a
                    style={{
                      color: router.pathname === item.link ? "#eece1a" : "#fff",
                    }}
                    onClick={() => setToggle(false)}
                  >
                    {item.nav}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightSideMenu;
