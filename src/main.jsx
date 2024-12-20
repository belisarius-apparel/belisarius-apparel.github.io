// Modules Initializations
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { maintenance } from "./config/constants";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider

// CSS Files Initializations
import "./css/directives.css";
import "./css/styles.css";
import "./css/fonts.css";
import Maintenance from "./layouts/Maintenance/Maintenance";

// Rendering
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* Wrap with HelmetProvider */}
    <HelmetProvider>
      {/* Check if application is on maintenance [true:false] */}
      {maintenance ? (
        // Render The Maintenance Component and Stop Launching The Application
        <Maintenance />
      ) : (
        // Render The Application As Usual
        <App />
      )}
    </HelmetProvider>
  </React.StrictMode>
);
