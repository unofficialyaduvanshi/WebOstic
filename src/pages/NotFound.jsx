import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import "./error404.scss";
import { Helmet } from "react-helmet-async";

export default function Error404() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const parallax = new Parallax(sceneRef.current);

    return () => {
      parallax.disable();
    };
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>404 - Page Not Found | WebOstic</title>

        <meta
          name="description"
          content="The page you are looking for does not exist or has been moved. Go back to WebOstic homepage to continue browsing services and content."
        />

        {/* Prevent indexing */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Canonical fallback */}
        <link rel="canonical" href="https://www.webostic.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found | WebOstic" />
        <meta
          property="og:description"
          content="This page doesn’t exist. Return to WebOstic homepage for web development services and content."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webostic.in/404" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 - Page Not Found | WebOstic" />
        <meta
          name="twitter:description"
          content="Page not found. Go back to homepage."
        />
      </Helmet>
      <section className="wrapper md:pt-16">
        <div className="container">
          {/* PARALLAX SCENE */}
          <div
            id="scene"
            className="scene"
            data-hover-only="false"
            ref={sceneRef}
          >
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.6">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.4">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.5">
              404
            </p>
            <p className="p404" data-depth="0.1">
              404
            </p>
          </div>

          {/* TEXT */}
          <div className="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage.
              </p>
              <button onClick={() => (window.location.href = "/")}>Home</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
