// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../data/siteData";
import { I } from "./Icon";
import { useNavigate, useLocation } from "react-router-dom";

const scrollToId = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const ignoreSpyRef = useRef(false);
  const unlockSpyTimeoutRef = useRef(null);

  const mobMenuRef = useRef(null);
  const mobTogRef = useRef(null);

  // navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (ignoreSpyRef.current || location.pathname !== "/") return;

        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { threshold: 0.35 },
    );

    NAV_ITEMS.forEach((n) => {
      const el = document.getElementById(n.id);

      if (el) {
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, [location.pathname]);

  // route active states
  useEffect(() => {
    if (location.pathname === "/portfolio") {
      setActive("projects");
    } else if (location.pathname === "/pricing") {
      setActive("services");
      // blog new
      // } else if (location.pathname === "/blog") {
      //   setActive("blog");
    } else if (location.pathname.startsWith("/blog")) {
      setActive("blog");
      // about
    } else if (location.pathname === "/about") {
      setActive("about");
      // old
    } else if (location.pathname === "/contact") {
      setActive("contact");
    } else if (location.pathname === "/") {
      setActive("home");
    }
  }, [location.pathname]);

  // mobile menu outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!open) return;

      const clickedInsideMenu = mobMenuRef.current?.contains(e.target);
      const clickedHamburger = mobTogRef.current?.contains(e.target);

      if (!clickedInsideMenu && !clickedHamburger) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [open]);

  const click = (id) => {
    ignoreSpyRef.current = true;

    if (unlockSpyTimeoutRef.current) {
      clearTimeout(unlockSpyTimeoutRef.current);
    }

    setActive(id);
    setOpen(false);

    // HOME
    if (id === "home") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 80);
    }

    // PROJECTS → PORTFOLIO
    else if (id === "projects") {
      navigate("/portfolio");
    }

    // SERVICES → PRICING
    else if (id === "services") {
      navigate("/pricing");
    }

    // CONTACT PAGE
    else if (id === "contact") {
      navigate("/contact");
    } else if (id === "about") {
      navigate("/about");
    }

    // BLOG PAGE
    else if (id === "blog") {
      navigate("/blog");
    }

    // NORMAL HOME SECTIONS
    else {
      if (location.pathname !== "/") {
        navigate("/");

        setTimeout(() => {
          scrollToId(id);
        }, 150);
      } else {
        scrollToId(id);
      }
    }

    unlockSpyTimeoutRef.current = setTimeout(() => {
      ignoreSpyRef.current = false;
    }, 900);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        width: "calc(100% - 24px)",
        maxWidth: "none",
        borderRadius: 50,
        background: scrolled ? "rgba(11,14,26,0.78)" : "rgba(11,14,26,0.55)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: scrolled
          ? "0 18px 60px rgba(0,0,0,.45)"
          : "0 10px 40px rgba(0,0,0,.30)",
        transition: "all .35s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 74,
          padding: "0 18px",
          position: "relative",
        }}
      >
        {/* LOGO */}
        <button
          onClick={() => click("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
            }}
          >
            <span className="grad-text">Web</span>
            <span style={{ color: "var(--fg)" }}>ostic</span>
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div
          className="desk-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              paddingBottom: 4,
              padding: "8px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
            }}
          >
            {NAV_ITEMS.map((n) => (
              <button
                key={n.id}
                onClick={() => click(n.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 12px",
                  fontSize: 14,
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 500,
                  borderRadius: 10,
                  color: active === n.id ? "var(--primary)" : "var(--fg2)",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>

        {/* HIRE BUTTON */}
        <button
          className="btn btn-primary btn-sm hire-btn"
          style={{
            marginLeft: 8,
            borderRadius: 20,
          }}
          onClick={() => click("contact")}
        >
          Hire Us
          <I.Arrow size={18} />
        </button>

        {/* MOBILE TOGGLE */}
        <button
          ref={mobTogRef}
          onClick={() => setOpen(!open)}
          className="mob-tog"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--fg)",
            display: "none",
            padding: 8,
          }}
        >
          {open ? <I.X size={22} /> : <I.Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobMenuRef}
        className={`mob-menu ${open ? "open" : ""}`}
        style={{
          background: "rgba(11,14,26,0.45)",
          borderBottomLeftRadius: 18,
          borderBottomRightRadius: 18,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "14px 14px 16px",
            gap: 4,
          }}
        >
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              onClick={() => click(n.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "11px 12px",
                fontSize: 15,
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 600,
                textAlign: "left",
                color: active === n.id ? "var(--primary)" : "var(--fg2)",
                borderRadius: 12,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {n.label}
            </button>
          ))}

          <button
            className="btn btn-primary"
            style={{
              marginTop: 8,
              transform: "translateY(-8px)",
              borderRadius: 25,
            }}
            onClick={() => click("contact")}
          >
            Hire Us <I.Arrow size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){

          .desk-nav{
            display:none!important;
          }

          .hire-btn{
            display:none!important;
          }

          .mob-tog{
            display:flex!important;
          }

        }
      `}</style>
    </nav>
  );
}
