import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css"; // IMPORTANT: load your global styles

// ✅ FIX: Prevent initial flash BEFORE React loads
const bg = "#695681";

document.documentElement.style.background = bg;
document.body.style.background = bg;
document.getElementById("root")?.style &&
  (document.getElementById("root").style.background = bg);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
