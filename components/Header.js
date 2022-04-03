import React from "react";

const Header = ({ text, colorText, desc }) => {
  return (
    <div className="header">
      <h1>
        {text} <span>{colorText}</span>
      </h1>
      <div className="text">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Header;
