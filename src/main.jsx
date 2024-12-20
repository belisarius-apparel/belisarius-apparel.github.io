// Modules Initializations
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS Files Initializations
import "./css/directives.css";
import "./css/styles.css";
import "./css/fonts.css";

// Rendering
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
