import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const OffCanvas_Socials = () => {
  const nav_class =
    "text-gray-400 hover:scale-125 transition-all duration-300 block p-2";

  return (
    <div className="flex py-4 justify-evenly">
      <a className={`${nav_class} hover:text-blue-400`} href="#">
        <FaFacebookF />
      </a>
      <a className={`${nav_class} hover:text-green-400`} href="#">
        <FaWhatsapp />
      </a>
      <a className={`${nav_class} hover:text-red-400`} href="#">
        <FaInstagram />
      </a>
      <a className={`${nav_class} hover:text-white`} href="#">
        <FaTiktok />
      </a>
    </div>
  );
};

export default OffCanvas_Socials;
