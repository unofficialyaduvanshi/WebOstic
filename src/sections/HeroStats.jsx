// src/components/HeroStats.jsx

import { useEffect, useState } from "react";
import { Award, Users, TrendingUp, Clock } from "lucide-react";

function CountUp({ end, duration = 2200, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function HeroStats() {
  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "Projects Delivered",
      icon: <Award size={18} />,
    },
    {
      value: 90,
      suffix: "%",
      label: "Client Retention Rate",
      icon: <Users size={18} />,
    },
    {
      value: 3,
      suffix: "x",
      label: "Avg. Traffic Growth",
      icon: <TrendingUp size={18} />,
    },
    {
      value: "5-7",
      suffix: "",
      label: "Days Avg. Delivery",
      icon: <Clock size={18} />,
      noCount: true,
    },
  ];

  return (
    // <div className="w-full flex justify-center px-4 sm:px-6 lg:px-4">
    <div className="w-full flex justify-center px-4 md:px-8  lg:px-8">
      <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
        {/* MOBILE = 2 columns | DESKTOP = 4 columns */}
        <div className="grid grid-cols-4">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`
  relative flex flex-col items-center justify-center
  min-w-[88px] sm:min-w-0
  px-1 py-3 sm:px-4 sm:py-7 text-center
  border-l border-white/10
  first:border-l-0
`}
            >
              {/* ICON */}

              <div className="mb-2 md:mb-4 flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/20">
                {s.icon}
              </div>

              {/* NUMBER */}

              <div className="font-extrabold text-blue-400 leading-none text-[15px] sm:text-[22px] md:text-[34px] lg:text-[42px]">
                {s.noCount ? (
                  s.value
                ) : (
                  <CountUp end={s.value} suffix={s.suffix} />
                )}
              </div>

              {/* LABEL */}

              <div className="mt-2 md:mt-3 text-white/60 font-medium text-[8px] sm:text-[11px] md:text-[14px] leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
