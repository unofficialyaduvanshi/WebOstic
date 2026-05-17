import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seoConfig } from "./seoConfig";

export default function useSEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const seo = seoConfig[path];

    if (!seo) return;

    // ✅ Title
    document.title = seo.title;

    // ✅ Helper function
    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }

      el.setAttribute("content", content);
    };

    // ✅ Basic Meta
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords || "");
    // ✅ Robots control (ADD THIS)
    if (seo.noIndex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      setMeta("robots", "index, follow");
    }

    // ✅ Open Graph
    setMeta("og:title", seo.ogTitle || seo.title, "property");
    setMeta("og:description", seo.ogDescription || seo.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `https://webostic.in${path}`, "property");

    // ✅ Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);

    // ✅ Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `https://webostic.in${path}`);

    // ✅ JSON-LD (CLEAN UPDATE)
    const oldScript = document.getElementById("json-ld");
    if (oldScript) oldScript.remove();

    if (seo.schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "json-ld";
      script.textContent = JSON.stringify(seo.schema);
      document.head.appendChild(script);
    }
  }, [location]);
}
