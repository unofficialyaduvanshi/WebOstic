// src/components/Toast.jsx
import { useCallback, useState } from "react";

export function useToast() {
  const [list, setList] = useState([]);

  const show = useCallback((msg, type = "ok") => {
    const id = Date.now();
    setList((p) => [...p, { id, msg, type }]);
    setTimeout(() => setList((p) => p.filter((t) => t.id !== id)), 3500);
  }, []);

  const Toaster = () => (
    <div
      style={{
        position: "fixed",
        bottom: 80,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        pointerEvents: "none",
      }}
    >
      {list.map((t) => (
        <div key={t.id} className={`toast ${t.type === "err" ? "err" : ""}`}>
          {t.msg}
        </div>
      ))}
    </div>
  );

  return { show, Toaster };
}
