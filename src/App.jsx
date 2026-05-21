// // seo

// import React, { useEffect } from "react";
// import "./styles/global.css";

// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import WAButton from "./components/WAButton";
// import SitePlexusBackground from "./components/SitePlexusBackground";
// import ScrollToTop from "./components/ScrollToTop";

// import HeroSection from "./sections/HeroSection";
// import TechSection from "./sections/TechSection";
// import ServicesSection from "./sections/ServicesSection";
// import TrustSection from "./sections/TrustSection";
// import ProcessSection from "./sections/ProcessSection";
// import ReviewsSection from "./sections/ReviewsSection";
// import CTASection from "./sections/CTASection";
// import HeroStats from "./sections/HeroStats";
// import Industries from "./sections/Industries";
// import Deliverables from "./sections/Deliverables";
// import FAQ from "./sections/FAQ";

// import PortfolioPage from "./pages/PortfolioPage";
// import PricingPage from "./pages/PricingPage";
// import ContactPage from "./pages/ContactPage";

// import BlogPost from "./pages/BlogPost";
// import Blog from "./pages/Blog";

// import About from "./pages/About";

// import { initGA, trackPageView } from "./lib/analytics";

// import useSEO from "./seo/useSEO";

// import Privacy from "./pages/Privacy";
// import Terms from "./pages/Terms";

// import NotFound from "./pages/NotFound";

// /* =========================
//    GA4 TRACKING COMPONENT
// ========================= */
// function AnalyticsTracker() {
//   const location = useLocation();

//   useEffect(() => {
//     initGA();
//   }, []);

//   useEffect(() => {
//     trackPageView(location.pathname);
//   }, [location]);

//   return null;
// }

// /* =========================
//    SEO CONTROLLER
// ========================= */
// function SEOController() {
//   useSEO();
//   return null;
// }

// /* =========================
//    LAYOUT (FIXED FLASH ISSUE)
// ========================= */
// function Layout({ children }) {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "var(--bg)", // ✅ restore design system
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* ✅ Instant background layer (prevents purple/gray flash) */}
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           background: "var(--bg)", // same as design
//           zIndex: -10,
//         }}
//       />

//       <Navbar />

//       {/* Background animation layer */}
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       >
//         <SitePlexusBackground />
//       </div>

//       {/* Content */}
//       <div style={{ position: "relative", zIndex: 2 }}>{children}</div>

//       <Footer />
//       <WAButton />
//     </div>
//   );
// }

// /* =========================
//    HOME PAGE
// ========================= */
// function HomePage() {
//   return (
//     <>
//       <HeroSection />
//       <HeroStats />
//       <TechSection />
//       <ServicesSection />
//       <TrustSection />
//       <Industries />
//       <ProcessSection />
//       <Deliverables />
//       <ReviewsSection />
//       <FAQ />
//       <CTASection />
//     </>
//   );
// }

// /* =========================
//    MAIN APP
// ========================= */
// export default function App() {
//   return (
//     <BrowserRouter>
//       <SEOController />
//       <AnalyticsTracker />
//       <ScrollToTop />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout>
//               <HomePage />
//             </Layout>
//           }
//         />

//         <Route
//           path="/portfolio"
//           element={
//             <Layout>
//               <PortfolioPage />
//             </Layout>
//           }
//         />

//         <Route
//           path="/blog"
//           element={
//             <Layout>
//               <Blog />
//             </Layout>
//           }
//         />

//         <Route
//           path="/blog/:id"
//           element={
//             <Layout>
//               <BlogPost />
//             </Layout>
//           }
//         />

//         <Route
//           path="/pricing"
//           element={
//             <Layout>
//               <PricingPage />
//             </Layout>
//           }
//         />

//         <Route
//           path="/about"
//           element={
//             <Layout>
//               <About />
//             </Layout>
//           }
//         />

//         <Route
//           path="/contact"
//           element={
//             <Layout>
//               <ContactPage />
//             </Layout>
//           }
//         />

//         <Route
//           path="/privacy"
//           element={
//             <Layout>
//               <Privacy />
//             </Layout>
//           }
//         />

//         <Route
//           path="/terms"
//           element={
//             <Layout>
//               <Terms />
//             </Layout>
//           }
//         />

//         <Route
//           path="*"
//           element={
//             <Layout>
//               <NotFound />
//             </Layout>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// seo

import React, { useEffect, lazy, Suspense, useState } from "react";
import "./styles/global.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WAButton from "./components/WAButton";
import SitePlexusBackground from "./components/SitePlexusBackground";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Lazy load pages
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ✅ Lazy load BELOW-FOLD sections (IMPORTANT NOW)
const TechSection = lazy(() => import("./sections/TechSection"));
const ServicesSection = lazy(() => import("./sections/ServicesSection"));
const TrustSection = lazy(() => import("./sections/TrustSection"));
const Industries = lazy(() => import("./sections/Industries"));
const ProcessSection = lazy(() => import("./sections/ProcessSection"));
const Deliverables = lazy(() => import("./sections/Deliverables"));
const ReviewsSection = lazy(() => import("./sections/ReviewsSection"));
const FAQ = lazy(() => import("./sections/FAQ"));
const CTASection = lazy(() => import("./sections/CTASection"));

// ✅ Keep above-the-fold sections normal
import HeroSection from "./sections/HeroSection";
import HeroStats from "./sections/HeroStats";

import { initGA, trackPageView } from "./lib/analytics";
import useSEO from "./seo/useSEO";

/* =========================
   GA4 TRACKING COMPONENT
========================= */
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

/* =========================
   SEO CONTROLLER
========================= */
function SEOController() {
  useSEO();
  return null;
}

/* =========================
   LAYOUT
========================= */
function Layout({ children }) {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBg(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--bg)",
          zIndex: -10,
        }}
      />

      <Navbar />

      {/* ✅ Delayed background */}
      {showBg && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <SitePlexusBackground />
        </div>
      )}

      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>

      <Footer />
      <WAButton />
    </div>
  );
}

/* =========================
   HOME PAGE
========================= */
function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroStats />

      {/* ✅ Lazy loaded sections */}
      <Suspense fallback={null}>
        <TechSection />
        <ServicesSection />
        <TrustSection />
        <Industries />
        <ProcessSection />
        <Deliverables />
        <ReviewsSection />
        <FAQ />
        <CTASection />
      </Suspense>
    </>
  );
}

/* =========================
   MAIN APP
========================= */
export default function App() {
  return (
    <BrowserRouter>
      <SEOController />
      <AnalyticsTracker />
      <ScrollToTop />

      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg)",
              color: "#fff",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/portfolio"
            element={
              <Layout>
                <PortfolioPage />
              </Layout>
            }
          />

          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />

          <Route
            path="/blog/:id"
            element={
              <Layout>
                <BlogPost />
              </Layout>
            }
          />

          <Route
            path="/pricing"
            element={
              <Layout>
                <PricingPage />
              </Layout>
            }
          />

          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />

          <Route
            path="/privacy"
            element={
              <Layout>
                <Privacy />
              </Layout>
            }
          />

          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />

          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
