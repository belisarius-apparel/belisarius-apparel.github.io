import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./layouts/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import { root_path } from "./config/constants";

const App = () => {
  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Routing */}
      <BrowserRouter>
        <Routes>
          <Route path={root_path} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
