// src/pages/About.jsx

import { motion } from "framer-motion";

import { Helmet } from "react-helmet-async";

import { Sparkles } from "lucide-react";

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden ">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-28 pb-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center"
            >
              {/* Small Tag */}
              <p
                className="
          relative
          z-10
          mx-auto
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-sky-400/20
          bg-sky-500/10
          px-5
          py-2.5
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.25em]
          text-cyan-200
          backdrop-blur-xl
        "
              >
                <Sparkles size={14} />
                About WebOstic
              </p>

              {/* Main Heading */}
              <h2 className="text-[clamp(1.4rem,3.5vw,2.5rem)] mt-5 font-extrabold tracking-tight text-white">
                Building Modern Websites{" "}
                {/* <span className="block text-cyan-400">That Grow Businesses</span> */}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  That Grow Businesses
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7">
                WebOstic is a modern web development and digital growth agency
                helping startups, creators, and businesses build fast,
                high-converting, and visually premium online experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="relative pb-14">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 shadow-[0_0_50px_rgba(6,182,212,0.08)]"
            >
              <div className="space-y-7 text-gray-300 leading-relaxed text-base md:text-lg">
                <p>
                  <strong className="text-white">WebOstic</strong> is a modern
                  web development agency focused on helping businesses create a
                  powerful digital presence through high-performance websites,
                  premium UI/UX design, and smart SEO strategies.
                </p>

                <p>
                  We believe that every brand deserves more than just a website.
                  It should be fast, responsive, visually modern, and built to
                  convert visitors into customers. That’s why every project we
                  create is carefully designed around performance, user
                  experience, and long-term growth.
                </p>

                <p>
                  Our technology stack is built around modern frameworks like{" "}
                  <strong className="text-cyan-400">React.js</strong>,{" "}
                  <strong className="text-cyan-400">Next.js</strong>, and modern
                  frontend systems that ensure your website loads fast, performs
                  smoothly, and ranks better on Google.
                </p>

                <p>
                  At WebOstic, we combine creativity with strategy. From custom
                  website development and responsive UI design to SEO
                  optimization and branding, we help businesses stand out in
                  competitive digital markets.
                </p>

                <p>
                  Whether you are a startup launching your first product, a
                  local business expanding online, or a growing company looking
                  to upgrade your digital presence, WebOstic delivers scalable
                  solutions tailored to your goals.
                </p>

                <p>
                  Our mission is simple — build modern digital experiences that
                  look premium, perform flawlessly, and help businesses grow
                  faster in the online world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative pb-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                {
                  number: "50+",
                  label: "Projects Completed",
                },
                {
                  number: "90%",
                  label: "Client Retention",
                },
                {
                  number: "100%",
                  label: "Responsive Designs",
                },
                {
                  number: "24/7",
                  label: "Support & Guidance",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300 hover:border-cyan-400/40"
                >
                  <h3 className="text-4xl font-extrabold text-cyan-400 mb-3">
                    {item.number}
                  </h3>

                  <p className="text-gray-300 text-sm tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
