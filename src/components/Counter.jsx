import { useEffect, useState } from "react";

export default function Counter({ to, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to);

    if (isNaN(end)) return;

    const duration = 1200;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
