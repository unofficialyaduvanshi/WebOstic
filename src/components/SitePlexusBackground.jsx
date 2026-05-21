// // src/components/SitePlexusBackground.jsx
// import React, { useEffect, useRef, useState } from "react";

// export default function SitePlexusBackground() {
//   const wrapRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 767);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const wrap = wrapRef.current;
//     const canvas = canvasRef.current;
//     if (!wrap || !canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = 0;
//     let height = 0;
//     let dpr = 1;
//     let animationId = 0;
//     let resizeObserver = null;
//     let isPaused = false;

//     const CYAN = "64,224,255";
//     const WHITE = "255,255,255";

//     const pointer = {
//       x: -9999,
//       y: -9999,
//       active: false,
//     };

//     let particles = [];
//     let meteors = [];
//     let config = null;

//     let lastTime = 0;
//     const FPS = isMobile ? 30 : 35;
//     const FRAME_TIME = 1000 / FPS;

//     const rand = (min, max) => Math.random() * (max - min) + min;

//     const setCanvasSize = () => {
//       if (isMobile) {
//         width = window.innerWidth;
//         height = window.innerHeight;
//       } else {
//         const rect = wrap.getBoundingClientRect();
//         width = Math.max(1, Math.floor(rect.width));
//         height = Math.max(1, Math.floor(rect.height));
//       }

//       dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.2 : 1.4);

//       canvas.width = Math.floor(width * dpr);
//       canvas.height = Math.floor(height * dpr);
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;

//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };

//     const getConfig = () => {
//       const w = window.innerWidth;
//       const isTouch = window.matchMedia("(pointer: coarse)").matches;

//       if (w <= 767) {
//         return {
//           isTouch,
//           meteorMinVisible: 5,
//           meteorMaxVisible: 7,
//           meteorMinSpeed: 3.6,
//           meteorMaxSpeed: 5.8,
//           meteorLengthMin: 36,
//           meteorLengthMax: 78,
//           meteorThicknessMin: 0.9,
//           meteorThicknessMax: 1.7,
//           glowDots: 10,
//           heroHideHeight: Math.min(window.innerHeight * 0.25, 250),
//         };
//       }

//       if (w <= 1024) {
//         return {
//           isTouch,
//           count: 75,
//           linkDistance: 88,
//           grabDistance: 100,
//           speed: 0.28,
//           opacity: 0.16,
//           pushCount: 4,
//           minSize: 1.2,
//           maxSize: 2.8,
//         };
//       }

//       return {
//         isTouch,
//         count: 70,
//         linkDistance: 105,
//         grabDistance: 120,
//         speed: 0.34,
//         opacity: 0.18,
//         pushCount: 5,
//         minSize: 1.3,
//         maxSize: 3,
//       };
//     };

//     const createParticle = (x = rand(0, width), y = rand(0, height)) => {
//       const angle = Math.random() * Math.PI * 2;
//       const speed = rand(config.speed * 0.45, config.speed);

//       return {
//         x,
//         y,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         size: rand(config.minSize, config.maxSize),
//         alpha: rand(0.28, 0.5),
//       };
//     };

//     const buildParticles = () => {
//       config = getConfig();

//       const areaFactor =
//         window.innerWidth <= 767
//           ? 12000
//           : window.innerWidth <= 1024
//             ? 13000
//             : 14500;

//       const areaBasedCount = Math.floor((width * height) / areaFactor);
//       const finalCount = Math.max(
//         30,
//         Math.min(config.count, areaBasedCount + 18),
//       );

//       particles = Array.from({ length: finalCount }, () => createParticle());
//     };

//     const createMeteor = () => {
//       const fromLeft = Math.random() > 0.5;

//       if (fromLeft) {
//         return {
//           x: rand(-90, -20),
//           y: rand(0, height * 0.35),
//           vx: rand(config.meteorMinSpeed, config.meteorMaxSpeed),
//           vy: rand(config.meteorMinSpeed * 0.95, config.meteorMaxSpeed * 1.05),
//           len: rand(config.meteorLengthMin, config.meteorLengthMax),
//           thickness: rand(config.meteorThicknessMin, config.meteorThicknessMax),
//           alpha: rand(0.42, 0.78),
//           life: 1,
//           decay: rand(0.0022, 0.0042),
//         };
//       }

//       return {
//         x: rand(width + 20, width + 90),
//         y: rand(0, height * 0.35),
//         vx: rand(-config.meteorMaxSpeed, -config.meteorMinSpeed),
//         vy: rand(config.meteorMinSpeed * 0.95, config.meteorMaxSpeed * 1.05),
//         len: rand(config.meteorLengthMin, config.meteorLengthMax),
//         thickness: rand(config.meteorThicknessMin, config.meteorThicknessMax),
//         alpha: rand(0.42, 0.78),
//         life: 1,
//         decay: rand(0.0022, 0.0042),
//       };
//     };

//     const buildMeteors = () => {
//       config = getConfig();
//       const initialCount = rand(
//         config.meteorMinVisible,
//         config.meteorMaxVisible + 1,
//       );
//       meteors = Array.from({ length: Math.floor(initialCount) }, () =>
//         createMeteor(),
//       );
//     };

//     const drawParticle = (p) => {
//       ctx.beginPath();
//       ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//       ctx.fillStyle = `rgba(${CYAN},${p.alpha})`;
//       ctx.fill();
//     };

//     const drawLine = (x1, y1, x2, y2, alpha, color = WHITE) => {
//       ctx.beginPath();
//       ctx.moveTo(x1, y1);
//       ctx.lineTo(x2, y2);
//       ctx.strokeStyle = `rgba(${color},${alpha})`;
//       ctx.lineWidth = 1;
//       ctx.stroke();
//     };

//     const drawMeteor = (m) => {
//       const angle = Math.atan2(m.vy, m.vx);
//       const tailX = m.x - Math.cos(angle) * m.len;
//       const tailY = m.y - Math.sin(angle) * m.len;

//       ctx.save();

//       const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
//       grad.addColorStop(0, `rgba(${CYAN}, ${m.alpha})`);
//       grad.addColorStop(0.3, `rgba(${CYAN}, ${m.alpha * 0.55})`);
//       grad.addColorStop(1, `rgba(${CYAN}, 0)`);

//       ctx.beginPath();
//       ctx.moveTo(m.x, m.y);
//       ctx.lineTo(tailX, tailY);
//       ctx.strokeStyle = grad;
//       ctx.lineWidth = m.thickness;
//       ctx.lineCap = "round";
//       ctx.shadowBlur = 7;
//       ctx.shadowColor = `rgba(${CYAN},0.7)`;
//       ctx.stroke();

//       ctx.beginPath();
//       ctx.arc(m.x, m.y, m.thickness * 0.85, 0, Math.PI * 2);
//       ctx.fillStyle = `rgba(${WHITE}, ${Math.min(1, m.alpha)})`;
//       ctx.shadowBlur = 8;
//       ctx.shadowColor = `rgba(${CYAN},0.9)`;
//       ctx.fill();

//       ctx.restore();
//     };

//     const drawMobileGlowDots = () => {
//       for (let i = 0; i < config.glowDots; i++) {
//         const x = ((i * 97) % width) + rand(-10, 10);
//         const y = ((i * 53) % height) + rand(-10, 10);
//         const r = rand(0.4, 1.2);

//         ctx.beginPath();
//         ctx.arc(x, y, r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${CYAN},0.1)`;
//         ctx.fill();
//       }
//     };

//     const ensureMeteorCount = () => {
//       while (meteors.length < config.meteorMinVisible) {
//         meteors.push(createMeteor());
//       }

//       if (meteors.length > config.meteorMaxVisible) {
//         meteors.splice(config.meteorMaxVisible);
//       }
//     };

//     const updateMobileScene = () => {
//       ctx.clearRect(0, 0, width, height);

//       // const scrollY = window.scrollY || window.pageYOffset || 0;
//       // const isHomePage = window.location.pathname === "/";

//       // const shouldHideForHero = isHomePage && scrollY < config.heroHideHeight;

//       // if (shouldHideForHero) return;

//       ensureMeteorCount();
//       drawMobileGlowDots();

//       for (let i = 0; i < meteors.length; i++) {
//         const m = meteors[i];

//         m.x += m.vx;
//         m.y += m.vy;
//         m.life -= m.decay;

//         drawMeteor(m);

//         const out =
//           m.y > height + 120 || m.x < -160 || m.x > width + 160 || m.life <= 0;

//         if (out) {
//           meteors[i] = createMeteor();
//         }
//       }
//     };

//     const updateDesktopScene = () => {
//       ctx.clearRect(0, 0, width, height);

//       const linkDistanceSq = config.linkDistance * config.linkDistance;
//       const grabDistanceSq = config.grabDistance * config.grabDistance;

//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < -20) p.x = width + 20;
//         if (p.x > width + 20) p.x = -20;
//         if (p.y < -20) p.y = height + 20;
//         if (p.y > height + 20) p.y = -20;

//         drawParticle(p);

//         for (let j = i + 1; j < particles.length; j++) {
//           const q = particles[j];
//           const dx = p.x - q.x;
//           const dy = p.y - q.y;
//           const distSq = dx * dx + dy * dy;

//           if (distSq < linkDistanceSq) {
//             const dist = Math.sqrt(distSq);
//             const alpha = (1 - dist / config.linkDistance) * config.opacity;
//             drawLine(p.x, p.y, q.x, q.y, alpha, WHITE);
//           }
//         }

//         if (!config.isTouch && pointer.active) {
//           const dx = p.x - pointer.x;
//           const dy = p.y - pointer.y;
//           const distSq = dx * dx + dy * dy;

//           if (distSq < grabDistanceSq) {
//             const dist = Math.sqrt(distSq);
//             const alpha = (1 - dist / config.grabDistance) * 0.65;
//             drawLine(p.x, p.y, pointer.x, pointer.y, alpha, CYAN);
//           }
//         }
//       }
//     };

//     const animate = (time = 0) => {
//       if (isPaused) {
//         animationId = requestAnimationFrame(animate);
//         return;
//       }

//       const delta = time - lastTime;

//       if (delta >= FRAME_TIME) {
//         lastTime = time;

//         if (isMobile) {
//           updateMobileScene();
//         } else {
//           updateDesktopScene();
//         }
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     const init = () => {
//       setCanvasSize();

//       if (isMobile) {
//         buildMeteors();
//       } else {
//         buildParticles();
//       }

//       cancelAnimationFrame(animationId);
//       lastTime = 0;
//       animate();
//     };

//     const handleMouseMove = (e) => {
//       if (isMobile || config?.isTouch) return;

//       const rect = wrap.getBoundingClientRect();
//       const inside =
//         e.clientX >= rect.left &&
//         e.clientX <= rect.right &&
//         e.clientY >= rect.top &&
//         e.clientY <= rect.bottom;

//       if (!inside) {
//         pointer.active = false;
//         return;
//       }

//       pointer.x = e.clientX - rect.left;
//       pointer.y = e.clientY - rect.top;
//       pointer.active = true;
//     };

//     const handleMouseLeaveWindow = () => {
//       pointer.active = false;
//       pointer.x = -9999;
//       pointer.y = -9999;
//     };

//     const spawnParticlesAt = (clientX, clientY) => {
//       if (isMobile) return;

//       const rect = wrap.getBoundingClientRect();
//       const inside =
//         clientX >= rect.left &&
//         clientX <= rect.right &&
//         clientY >= rect.top &&
//         clientY <= rect.bottom;

//       if (!inside) return;

//       const x = clientX - rect.left;
//       const y = clientY - rect.top;

//       for (let i = 0; i < config.pushCount; i++) {
//         particles.push(createParticle(x, y));
//       }

//       const maxParticles = Math.max(config.count, 50);
//       if (particles.length > maxParticles + 30) {
//         particles.splice(0, particles.length - (maxParticles + 30));
//       }
//     };

//     const handlePointerDown = (e) => {
//       spawnParticlesAt(e.clientX, e.clientY);
//     };

//     const handleTouchStart = () => {};

//     const handleVisibility = () => {
//       isPaused = document.hidden;
//     };

//     init();

//     resizeObserver = new ResizeObserver(() => {
//       init();
//     });

//     resizeObserver.observe(wrap);
//     window.addEventListener("resize", init);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeaveWindow);
//     window.addEventListener("pointerdown", handlePointerDown);
//     window.addEventListener("touchstart", handleTouchStart, { passive: true });
//     document.addEventListener("visibilitychange", handleVisibility);

//     return () => {
//       cancelAnimationFrame(animationId);
//       resizeObserver?.disconnect();
//       window.removeEventListener("resize", init);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeaveWindow);
//       window.removeEventListener("pointerdown", handlePointerDown);
//       window.removeEventListener("touchstart", handleTouchStart);
//       document.removeEventListener("visibilitychange", handleVisibility);
//     };
//   }, [isMobile]);

//   return (
//     <div
//       ref={wrapRef}
//       aria-hidden="true"
//       style={{
//         position: isMobile ? "fixed" : "absolute",
//         inset: 0,
//         zIndex: isMobile ? 3 : 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           display: "block",
//           width: "100%",
//           height: "100%",
//         }}
//       />
//     </div>
//   );
// }

// without particle in mobile

// src/components/SitePlexusBackground.jsx
import React, { useEffect, useRef, useState } from "react";

export default function SitePlexusBackground() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // 🔥 STOP EVERYTHING on mobile
    if (isMobile) return;

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = 0;
    let resizeObserver = null;
    let isPaused = false;

    const CYAN = "64,224,255";
    const WHITE = "255,255,255";

    const pointer = {
      x: -9999,
      y: -9999,
      active: false,
    };

    let particles = [];
    let config = null;

    let lastTime = 0;
    const FPS = 35;
    const FRAME_TIME = 1000 / FPS;

    const rand = (min, max) => Math.random() * (max - min) + min;

    const setCanvasSize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      dpr = Math.min(window.devicePixelRatio || 1, 1.4);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getConfig = () => {
      return {
        count: 70,
        linkDistance: 105,
        grabDistance: 120,
        speed: 0.34,
        opacity: 0.18,
        pushCount: 5,
        minSize: 1.3,
        maxSize: 3,
      };
    };

    const createParticle = (x = rand(0, width), y = rand(0, height)) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = rand(config.speed * 0.45, config.speed);

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: rand(config.minSize, config.maxSize),
        alpha: rand(0.28, 0.5),
      };
    };

    const buildParticles = () => {
      config = getConfig();

      particles = Array.from({ length: config.count }, () => createParticle());
    };

    const drawParticle = (p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CYAN},${p.alpha})`;
      ctx.fill();
    };

    const drawLine = (x1, y1, x2, y2, alpha) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(${WHITE},${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const updateScene = () => {
      ctx.clearRect(0, 0, width, height);

      const linkDistanceSq = config.linkDistance * config.linkDistance;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        drawParticle(p);

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < linkDistanceSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / config.linkDistance) * config.opacity;
            drawLine(p.x, p.y, q.x, q.y, alpha);
          }
        }
      }
    };

    const animate = (time = 0) => {
      if (isPaused) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const delta = time - lastTime;

      if (delta >= FRAME_TIME) {
        lastTime = time;
        updateScene();
      }

      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      setCanvasSize();
      buildParticles();
      cancelAnimationFrame(animationId);
      lastTime = 0;
      animate();
    };

    const handleVisibility = () => {
      isPaused = document.hidden;
    };

    init();

    resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(wrap);

    window.addEventListener("resize", init);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", init);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [isMobile]);

  // 🔥 REMOVE ENTIRE COMPONENT ON MOBILE
  if (isMobile) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
