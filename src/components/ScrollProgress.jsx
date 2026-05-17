import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [w, setW] = useState(0);

  useEffect(() => {
    const fn = () => {
      const d = document.documentElement;
      const max = d.scrollHeight - d.clientHeight;
      const pct = max > 0 ? (d.scrollTop / max) * 100 : 0;
      setW(Math.round(pct));
    };

    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return <div className="scroll-prog" style={{ width: `${w}%` }} />;
}
