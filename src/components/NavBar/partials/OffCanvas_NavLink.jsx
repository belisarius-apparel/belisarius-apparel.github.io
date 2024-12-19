import React from "react";

const OffCanvas_NavLink = ({ href = "", children }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-4 py-2 text-gray-400 transition-all duration-300 rounded-lg hover:text-white inter-medium hover:bg-slate-700 text-nowrap active:scale-95"
    >
      {children}
    </a>
  );
};

export default OffCanvas_NavLink;
