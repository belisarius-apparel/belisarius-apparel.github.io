// Modules Initializations
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { maintenance } from "./config/constants";

// CSS Files Initializations
import "./css/directives.css";
import "./css/styles.css";
import "./css/fonts.css";
import Maintenance from "./layouts/Maintenance/Maintenance";

// Rendering
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {maintenance ? (
      // Render Maintenance
      <Maintenance />
    ) : (
      // Run The Application
      <App />
    )}
  </React.StrictMode>
);
