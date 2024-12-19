import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropDown_NavLink from "./DropDown_NavLink";

const OffCanvas_DropDown = ({ children, navigations = [] }) => {
  // DropDown Mechanism
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* DropDown Handler */}
      <button
        onClick={showHandler}
        href="#"
        className="flex items-center justify-between w-full gap-2 px-4 py-2 text-gray-400 transition-all duration-300 rounded-lg hover:text-white inter-medium hover:bg-slate-700"
      >
        <span className="flex items-center gap-2">{children}</span>
        <span
          className={`transitial-all duration-300 ${show ? "rotate-180" : ""}`}
        >
          <FaChevronDown />
        </span>
      </button>

      {/* DropDown Menu */}
      <div
        className={`px-8 transition-all flex flex-col gap-2 duration-700 ease-in-out ${
          show ? "max-h-96 mt-2 mb-4" : "mt-0 mb-0 max-h-0"
        }  overflow-hidden`}
      >
        {navigations &&
          navigations.map((item, index) => (
            // Navigation Link Loop
            <DropDown_NavLink key={index} href={item.href} name={item.name} />
          ))}
      </div>
    </div>
  );
};

export default OffCanvas_DropDown;
