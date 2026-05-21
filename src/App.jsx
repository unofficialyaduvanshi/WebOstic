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

import React, { useEffect, lazy, Suspense } from "react";
import "./styles/global.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WAButton from "./components/WAButton";
import SitePlexusBackground from "./components/SitePlexusBackground";
import ScrollToTop from "./components/ScrollToTop";

// ❌ REMOVE normal imports of pages
// ✅ ADD lazy imports

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Sections (optional lazy - keep as is for safety)
import HeroSection from "./sections/HeroSection";
import TechSection from "./sections/TechSection";
import ServicesSection from "./sections/ServicesSection";
import TrustSection from "./sections/TrustSection";
import ProcessSection from "./sections/ProcessSection";
import ReviewsSection from "./sections/ReviewsSection";
import CTASection from "./sections/CTASection";
import HeroStats from "./sections/HeroStats";
import Industries from "./sections/Industries";
import Deliverables from "./sections/Deliverables";
import FAQ from "./sections/FAQ";

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
   LAYOUT (NO CHANGE)
========================= */
function Layout({ children }) {
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

      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>

      <Footer />
      <WAButton />
    </div>
  );
}

/* =========================
   HOME PAGE (NO CHANGE)
========================= */
function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroStats />
      <TechSection />
      <ServicesSection />
      <TrustSection />
      <Industries />
      <ProcessSection />
      <Deliverables />
      <ReviewsSection />
      <FAQ />
      <CTASection />
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

      {/* ✅ ADD Suspense here */}
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
