// seo

// src/App.jsx
import React, { useEffect } from "react";
import "./styles/global.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WAButton from "./components/WAButton";
import SitePlexusBackground from "./components/SitePlexusBackground";
import ScrollToTop from "./components/ScrollToTop";

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

import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";

// import BlogWebostic from "./pages/BlogWebostic";
// import BlogPostWebostic from "./pages/BlogPostWebostic";

import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";

import About from "./pages/About";

import { initGA, trackPageView } from "./lib/analytics";

// ✅ ADD THIS
import useSEO from "./seo/useSEO";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// error page

import NotFound from "./pages/NotFound";

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
   SEO CONTROLLER (FIX)
========================= */
function SEOController() {
  useSEO(); // ✅ safe here inside Router
  return null;
}

/* =========================
   LAYOUT
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
   HOME PAGE
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
  useEffect(() => {
    document.documentElement.style.background = "#695681";
    document.body.style.background = "#695681";
  }, []);
  return (
    <BrowserRouter>
      {/* ✅ SEO FIX (ADDED ONLY THIS) */}
      <SEOController />

      {/* GA4 TRACKER */}
      <AnalyticsTracker />

      <ScrollToTop />

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

        {/* blog */}

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

        {/* Error Page */}

        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />

        {/* footer terms and policy  */}

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
      </Routes>
    </BrowserRouter>
  );
}
