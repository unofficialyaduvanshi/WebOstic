// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./styles/global.css"; // IMPORTANT: load your global styles

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const startApp = () => root.render(<App />);

if ("requestIdleCallback" in window) {
  requestIdleCallback(startApp);
} else {
  setTimeout(startApp, 1);
}
