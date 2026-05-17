// src/components/Footer.jsx

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { I } from "./Icon";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: "Home", path: "/" },

    { name: "Services", path: "/pricing" },
    { name: "Projects", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/#reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    // HOME LINK
    if (path === "/") {
      if (location.pathname !== "/") {
        navigate("/");

        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 120);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      return;
    }

    // HASH LINKS
    if (path.includes("#")) {
      const [pathname, id] = path.split("#");

      if (location.pathname !== pathname) {
        navigate(pathname);

        setTimeout(() => {
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      } else {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // NORMAL ROUTES
      navigate(path);
    }
  };

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        background: "var(--bg2)",
        padding: "clamp(48px, 8vw, 80px) 0 28px",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/footer.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(8, 12, 20, 0.72) 18%,
              rgba(8, 12, 20, 0.48) 50%,
              rgba(8, 12, 20, 0.72) 82%,
              rgba(0, 0, 0, 0.9) 100%
            )
          `,
        }}
      />

      <div
        className="footer-wrap w-full max-w-none px-10"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Left */}
          <div>
            <span
              style={{
                fontSize: 22,
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                display: "block",
                marginBottom: 14,
              }}
            >
              <span className="grad-text">Web</span>
              <span style={{ color: "var(--fg)" }}>ostic</span>
            </span>

            <p
              style={{
                fontSize: 14,
                color: "var(--fg2)",
                lineHeight: 1.8,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              We build modern, fast, and visually stunning websites that help
              businesses grow and succeed in the digital world.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[I.Tw, I.Li, I.Ig, I.Gh].map((Ic, i) => (
                <a
                  key={i}
                  // href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "var(--card2)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--fg2)",
                    transition: "all .2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(29,140,248,.15)";
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.borderColor = "rgba(29,140,248,.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--card2)";
                    e.currentTarget.style.color = "var(--fg2)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <Ic size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--fg2)",
                marginBottom: 18,
              }}
            >
              Explore
            </h4>

            {quickLinks.map((l) => (
              <button
                key={l.name}
                onClick={() => handleNavigation(l.path)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "7px 0",
                  fontSize: 14,
                  color: "var(--fg2)",
                  transition: "color .2s",
                  textAlign: "left",
                  fontFamily: "'Inter',sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--fg2)")
                }
              >
                {l.name}
              </button>
            ))}
          </div>

          {/* What We Do */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--fg2)",
                marginBottom: 18,
              }}
            >
              What We Do
            </h4>

            {[
              "Web Development",
              "Mobile Apps",
              "UI/UX Design",
              "SEO Optimization",
            ].map((item) => (
              <button
                key={item}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "7px 0",
                  fontSize: 14,
                  color: "var(--fg2)",
                  transition: "color .2s",
                  textAlign: "left",
                  fontFamily: "'Inter',sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--fg2)")
                }
              >
                {item}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--fg2)",
                marginBottom: 18,
              }}
            >
              Contact
            </h4>

            <p
              style={{
                fontSize: 14,
                color: "var(--fg2)",
                marginBottom: 12,
              }}
            >
              📧 webostic.dev@gmail.com
            </p>

            {/* <p
              style={{
                fontSize: 14,
                color: "var(--fg2)",
                marginBottom: 20,
              }}
            >
              📱 +91 99999 99999
            </p> */}

            <button
              className="btn btn-primary btn-sm mt-4"
              onClick={() => navigate("/contact")}
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {/* LEFT */}
          <p style={{ fontSize: 13, color: "var(--fg2)" }}>
            © {new Date().getFullYear()} Webostic. All rights reserved.
          </p>

          {/* RIGHT */}
          <div style={{ display: "flex", gap: 18 }}>
            <button
              onClick={() => navigate("/privacy")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                color: "var(--fg2)",
                transition: "all .2s",
                fontFamily: "'Inter',sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg2)";
              }}
            >
              Privacy Policy
            </button>

            <button
              onClick={() => navigate("/terms")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                color: "var(--fg2)",
                transition: "all .2s",
                fontFamily: "'Inter',sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--fg2)";
              }}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrap{
          padding-left: clamp(16px, 4vw, 40px);
          padding-right: clamp(16px, 4vw, 40px);
        }

        @media (max-width: 1024px){
          .footer-grid{
            grid-template-columns: 1.5fr 1fr 1fr 1fr !important;
            gap: 28px !important;
          }
        }

        @media (max-width: 768px){
          .footer-grid{
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            margin-bottom: 32px !important;
          }

          .footer-bottom{
            flex-direction: column;
            align-items: flex-start !important;
          }
        }

        @media (max-width: 480px){
          .footer-wrap{
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </footer>
  );
}
