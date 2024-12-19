import React from "react";
import OffCanvas_NavLink from "./OffCanvas_NavLink";
import OffCanvas_DropDown from "./OffCanvas_Dropdown";
import OffCanvas_Socials from "./OffCanvas_Socials";
import navigations from "../../../lib/data/navigation.json";

// Icon Libraries
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

// Map library keys to their respective imports
const iconLibraries = {
  fa: FaIcons,
  fa6: Fa6Icons,
  io5: Io5Icons,
  gi: GiIcons,
  bi: BiIcons,
};

const OffCanvas_Menu = ({ offCanvasShow, offCanvasHandler, root_path }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={offCanvasHandler}
        className={`fixed inset-0 ${
          offCanvasShow ? " opacity-70" : "opacity-0 pointer-events-none"
        } bg-black z-30 transition-all duration-300`}
      >
        OffCanvas_Menu
      </div>

      {/* OffCanvas Menu */}
      <nav
        className={`fixed left-0 top-0 bottom-0 max-h-[100vh] shadow-lg overflow-hidden ${
          offCanvasShow ? "w-72 max-w-[100vw]" : "w-0 max-w-0"
        } transition-all duration-300 bg-slate-900 z-40 text-nowrap flex flex-col justify-between`}
      >
        <div className="flex flex-col gap-2 px-4 py-6 overflow-y-scroll scrollbar-none">
          <button
            onClick={offCanvasHandler}
            className="flex items-center gap-2 px-4 py-2 text-gray-400 transition-all duration-300 rounded-lg hover:text-white inter-medium hover:bg-slate-700 active:scale-95"
          >
            <FaIcons.FaArrowLeft /> Close Menu
          </button>
          <span className="block border-t border-gray-700 text-nowrap"></span>

          {/* Loop through navigation JSON - [Navigations] */}
          {navigations.navigations.map((navItem, index) => {
            const IconLibrary = iconLibraries[navItem.icon_library];
            const IconComponent = IconLibrary
              ? IconLibrary[navItem.icon]
              : null;

            if (!IconComponent) {
              console.error(
                `Icon not found for library "${navItem.icon_library}" and icon "${navItem.icon}"`
              );
              return null; // Skip rendering this item
            }

            if (navItem.type === "regular") {
              return (
                <OffCanvas_NavLink
                  key={index}
                  href={`${root_path}${navItem.action}`}
                >
                  <IconComponent /> {navItem.name}
                </OffCanvas_NavLink>
              );
            }

            if (navItem.type === "dropdown") {
              return (
                <OffCanvas_DropDown
                  key={index}
                  navigations={navItem.dropdown_links}
                >
                  <IconComponent /> {navItem.name}
                </OffCanvas_DropDown>
              );
            }

            return null; // Fallback for unknown types
          })}
          <span className="border border-gray-600"></span>
          {/* About Links */}
          {navigations.about_links.map((navItem, index) => {
            const IconLibrary = iconLibraries[navItem.icon_library];
            const IconComponent = IconLibrary
              ? IconLibrary[navItem.icon]
              : null;

            if (!IconComponent) {
              console.error(
                `Icon not found for library "${navItem.icon_library}" and icon "${navItem.icon}"`
              );
              return null; // Skip rendering this item
            }

            if (navItem.type === "regular") {
              return (
                <OffCanvas_NavLink
                  key={index}
                  href={`${root_path}${navItem.action}`}
                >
                  <IconComponent /> {navItem.name}
                </OffCanvas_NavLink>
              );
            }

            if (navItem.type === "dropdown") {
              return (
                <OffCanvas_DropDown
                  key={index}
                  navigations={navItem.dropdown_links}
                >
                  <IconComponent /> {navItem.name}
                </OffCanvas_DropDown>
              );
            }

            return null; // Fallback for unknown types
          })}
        </div>

        {/* Social Media */}
        <OffCanvas_Socials />
      </nav>
    </>
  );
};

export default OffCanvas_Menu;
