import React, { useState } from "react";
import NavBar_Fixed from "./partials/NavBar_Fixed";
import { root_path } from "../../config/constants";
import OffCanvas_Menu from "./partials/OffCanvas_Menu";

const NavBar = () => {
  // OffCanvasMenu Mechanism
  const [offCanvasShow, setOffCanvasShow] = useState(false);

  const offCanvasHandler = () => {
    setOffCanvasShow(!offCanvasShow);
  };

  // Button Class
  const button_class = "text-xl";

  return (
    <>
      {/* [STICK] */}
      <NavBar_Fixed
        button_class={button_class}
        root_path={root_path}
        offCanvasHandler={offCanvasHandler}
      />

      {/* OffCanvasMenu */}
      <OffCanvas_Menu
        offCanvasHandler={offCanvasHandler}
        offCanvasShow={offCanvasShow}
        root_path={root_path}
      />
    </>
  );
};

export default NavBar;
