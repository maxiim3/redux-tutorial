import React from "react";
import ReactDOM from "react-dom/client";
import App from "./scripts/App.jsx";
import "./styles/index.css";

const $root = document.getElementById("root");
const root = ReactDOM.createRoot($root);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
