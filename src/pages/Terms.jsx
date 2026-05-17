// src/pages/Terms.jsx

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | WebOstic</title>
        <meta
          name="description"
          content="Read WebOstic Terms & Conditions to understand the rules and responsibilities."
        />
        <link rel="canonical" href="https://webostic.in/terms" />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        {/* Hero */}
        <section className="relative pt-10 pb-10">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cyan-200">
                <Sparkles size={14} />
                Terms & Conditions
              </p>

              <h1 className="mt-5 text-3xl md:text-4xl font-extrabold text-white">
                Clear Rules,{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Transparent Work
                </span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-5">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 backdrop-blur-xl"
            >
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <h2 className="text-white text-xl font-bold">1. Services</h2>
                <p>We provide web development, design, and SEO services.</p>

                <h2 className="text-white text-xl font-bold">2. Payments</h2>
                <p>Advance payments may be required before starting.</p>

                <h2 className="text-white text-xl font-bold">3. Delivery</h2>
                <p>Timelines depend on project scope and revisions.</p>

                <h2 className="text-white text-xl font-bold">4. Revisions</h2>
                <p>Limited revisions included. Extra changes may cost.</p>

                <h2 className="text-white text-xl font-bold">
                  5. Client Responsibility
                </h2>
                <p>Clients must provide accurate content and feedback.</p>

                <h2 className="text-white text-xl font-bold">6. Ownership</h2>
                <p>Ownership transfers after full payment.</p>
              </div>
            </motion.div>
          </div>
          {/* Back Button */}
          <div className="max-w-6xl mx-auto px-6 pt-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm transition-all duration-300 hover:text-cyan-300 hover:gap-3"
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
