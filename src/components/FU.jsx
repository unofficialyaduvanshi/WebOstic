// src/components/FU.jsx
import { useEffect, useRef, useState } from "react";

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold },
    );

    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);

  return [ref, v];
};

export default function FU({
  children,
  delay = 0,
  className = "",
  style = {},
}) {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(24px)",
        transition: `opacity .65s ${delay}s ease, transform .65s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
