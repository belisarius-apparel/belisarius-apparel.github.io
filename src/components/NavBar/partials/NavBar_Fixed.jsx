import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Logo_Horizontal from "../../Logo/Logo_Horizontal";

const NavBar_Fixed = ({ button_class, root_path, offCanvasHandler }) => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 md:static ">
      <div className="flex justify-between p-4 text-white md:text-black md:px-11">
        {/* Start */}
        <div className="flex items-center">
          <button className={button_class} onClick={offCanvasHandler}>
            <CiMenuFries />
          </button>
        </div>
        {/* Center */}
        <div>
          <a href={root_path}>
            <Logo_Horizontal
              className="w-60 fill-white md:fill-black"
              width="380"
              height="65"
              vw="630"
              vy="280"
              x="0"
              y="40"
            />
          </a>
        </div>
        {/* End */}
        <div className="flex items-center">
          <button className={button_class}>
            <CiSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar_Fixed;
