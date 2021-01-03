import React from "react";
import logo from "../logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <img height="50" src={logo} />
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
