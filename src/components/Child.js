import React from "react";

const Child = ({ num, onNumClick }) => {
  return <span onClick={() => onNumClick(num.Title)}>{num.Title}</span>;
};

export default Child;
