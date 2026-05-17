import React, { useEffect, useMemo, useRef, useState } from "react";
import FU from "../components/FU";
import { SKILLS } from "../data/siteData";

/* desktop triangle spacing */
const X_JITTER = [-8, 4, -6, 7, -4, 5, -7, 3, -5, 6];
const Y_JITTER = [0, 5, -4, 6, -3, 4, -5, 2, -2, 3];

/* build reverse triangle rows */
function buildInvertedRows(total) {
  const rows = [];
  let next = 3;
  let remaining = total;

  while (remaining > 0) {
    const take = Math.min(next, remaining);
    rows.push(take);
    remaining -= take;
    next += 1;
  }

  if (rows.length > 1 && rows[rows.length - 1] < 3) {
    let extra = rows.pop();
    let i = rows.length - 1;

    while (extra > 0) {
      rows[i] += 1;
      extra -= 1;
      i = i > 0 ? i - 1 : rows.length - 1;
    }
  }

  return rows.reverse();
}

/* build desktop positions */
function buildReverseTriangleLayout(skills) {
  const rows = buildInvertedRows(skills.length);
  const laidOut = [];
  let index = 0;

  rows.forEach((count, rowIndex) => {
    const span = count <= 1 ? 0 : Math.min(11.25, 82 / (count - 1));
    const start = 50 - (span * (count - 1)) / 2;
    const baseTop = 8 + rowIndex * 13.2;

    for (let colIndex = 0; colIndex < count; colIndex++) {
      if (index >= skills.length) break;

      const x = start + colIndex * span;
      const xJ = X_JITTER[(rowIndex * 3 + colIndex) % X_JITTER.length];
      const yJ = Y_JITTER[(rowIndex * 4 + colIndex) % Y_JITTER.length];

      laidOut.push({
        ...skills[index],
        left: `calc(${x}% + ${xJ}px)`,
        top: `calc(${baseTop}% + ${yJ}px)`,
        revealDelay: `${index * 0.05}s`,
        floatDuration: `${6.8 + ((index + rowIndex) % 4) * 0.9}s`,
        floatDelay: `-${((index + colIndex) % 5) * 0.6}s`,
      });

      index++;
    }
  });

  return laidOut;
}

/* build 3 rows for mobile/tablet */
function buildMovingRows(skills) {
  const rows = [[], [], []];

  skills.forEach((skill, index) => {
    rows[index % 3].push(skill);
  });

  return rows;
}

function SkillCard({ s }) {
  const Icon = s.icon;

  return (
    <div className="tech-marquee-item">
      <div
        className="glass glow-card"
        style={{
          borderRadius: "var(--radius-lg)",
          padding: "24px 16px",
          textAlign: "center",
          cursor: "default",
          minWidth: "140px",
        }}
      >
        <div
          className="tech-marquee-icon"
          style={{
            fontSize: 34,
            marginBottom: 12,
            transition: "transform .3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            minHeight: 42,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.15)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {Icon ? <Icon color={s.color} size={34} /> : s.icon}
        </div>

        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'Space Grotesk',sans-serif",
          }}
        >
          {s.name}
        </p>
      </div>
    </div>
  );
}

export default function TechSection() {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1024 : true,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [pausedRow, setPausedRow] = useState(null);

  const techItems = useMemo(() => buildReverseTriangleLayout(SKILLS), []);
  const mobileRows = useMemo(() => buildMovingRows(SKILLS), []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1025px)");

    const updateView = () => {
      setIsDesktop(media.matches);
    };

    updateView();

    if (media.addEventListener) {
      media.addEventListener("change", updateView);
      return () => media.removeEventListener("change", updateView);
    } else {
      media.addListener(updateView);
      return () => media.removeListener(updateView);
    }
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setIsVisible(false);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <section id="tech" className="section">
        <div className="w-full px-0">
          <FU className="sh mb-6 md:mb-6 ">
            <h2>
              Technologies We <span className="grad-text">Work With</span>
            </h2>
            <p className="px-2">
              We leverage cutting-edge tools and frameworks to deliver
              exceptional digital experiences.
            </p>
          </FU>

          <div className="tech-marquee-mobile-wrap">
            {mobileRows.map((row, rowIndex) => {
              const repeatedRow = [...row, ...row, ...row, ...row];
              const directionClass =
                rowIndex === 1
                  ? "tech-marquee-right-to-left"
                  : "tech-marquee-left-to-right";

              return (
                <div
                  key={rowIndex}
                  className={`tech-marquee-row ${
                    pausedRow === rowIndex ? "is-paused" : ""
                  }`}
                  onTouchStart={() => setPausedRow(rowIndex)}
                  onTouchEnd={() => setPausedRow(null)}
                  onTouchCancel={() => setPausedRow(null)}
                >
                  <div className={`tech-marquee-track ${directionClass}`}>
                    {repeatedRow.map((s, i) => (
                      <SkillCard key={`${s.name}-${rowIndex}-${i}`} s={s} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="tech"
      ref={sectionRef}
      className={`section tech-cosmic-section ${isVisible ? "tech-visible" : ""}`}
    >
      <div className="w-full px-8 sm:px-6 lg:px-14 ">
        <FU className="sh">
          <h2>
            Technologies We <span className="grad-text">Work With</span>
          </h2>
          <p>
            We leverage cutting-edge tools and frameworks to deliver exceptional
            digital experiences.
          </p>
        </FU>

        <div className="tech-triangle-shell">
          <div className="tech-core-glow" />

          <div className="tech-triangle-stage">
            {techItems.map((s) => {
              const Icon = s.icon;

              return (
                <div
                  key={s.name}
                  className="tech-node"
                  style={{
                    "--node-left": s.left,
                    "--node-top": s.top,
                    "--reveal-delay": s.revealDelay,
                  }}
                >
                  <div
                    className="tech-node-float"
                    style={{
                      "--float-duration": s.floatDuration,
                      "--float-delay": s.floatDelay,
                    }}
                  >
                    <div className="tech-node-card">
                      <div className="tech-node-icon">
                        {Icon ? <Icon color={s.color} size={31} /> : s.icon}
                      </div>

                      <p className="tech-node-label">{s.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
