import React from "react";
import { GoDotFill } from "react-icons/go";

const DropDown_NavLink = ({ href = "#", name = "" }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-white hover:scale-105"
    >
      <GoDotFill />
      {name}
    </a>
  );
};

export default DropDown_NavLink;
