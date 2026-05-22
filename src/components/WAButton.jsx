// // src/components/WAButton.jsx
// import React from "react";
// import { WA_NUMBER } from "../data/siteData";
// import { I } from "./Icon";

// export default function WAButton() {
//   return (
//     <a
//       href={`https://wa.me/${WA_NUMBER}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="wa-btn aWaPop"
//       aria-label="Chat on WhatsApp"
//     >
//       <span className="wa-tooltip">Chat on WhatsApp</span>
//       <I.WA size={26} />
//     </a>
//   );
// }

// src/components/WAButton.jsx
import React from "react";
import { WA_NUMBER } from "../data/siteData";
import { I } from "./Icon";

export default function WAButton() {
  const message =
    "Hello Webostic team, I’m looking to build a professional website for my business. Kindly share your available packages, pricing details, and development process.";

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn aWaPop"
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-tooltip">Chat on WhatsApp</span>
      <I.WA size={26} />
    </a>
  );
}
