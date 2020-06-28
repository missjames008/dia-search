import React from "react";
import fast_logo from "../fast_logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <img height="50" src={fast_logo} />
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
