// src/components/StarRow.jsx
import React from "react";
import { I } from "./Icon";

export default function StarRow({ n, size = 16 }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <I.Star
          key={i}
          size={size}
          style={{
            fill: i <= n ? "#fbbf24" : "transparent",
            color: i <= n ? "#fbbf24" : "var(--border)",
          }}
        />
      ))}
    </span>
  );
}
