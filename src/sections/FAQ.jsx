// src/sections/FAQ.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How much does a website cost in India?",
    answer:
      "At Webostic, our website packages start from ₹4,999 for landing pages and go up to ₹50,000+ for full business websites with custom features. We offer affordable pricing without compromising on quality — no hidden charges, no surprises.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most of our projects are delivered within 5–7 working days. Complex websites with custom integrations may take 2–3 weeks. We always give you a clear timeline before starting and stick to it.",
  },
  {
    question: "Do you offer SEO with website development?",
    answer:
      "Yes! Every website we build is SEO-optimized by default — including fast load times, proper meta tags, structured data, mobile responsiveness, and Core Web Vitals optimization.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Absolutely. All our websites are 100% mobile-responsive and tested on multiple devices and screen sizes.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we specialize in website redesigns. Whether your current site is slow, outdated, or not converting visitors, we can rebuild it with modern design, faster performance, and better SEO.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily build with React.js, Next.js, Tailwind CSS, Node.js, and modern scalable technologies.",
  },
  {
    question: "Do you provide support after the website is launched?",
    answer:
      "Yes, we provide free post-launch support for 30 days along with affordable maintenance plans.",
  },
  {
    question: "Can you help improve my existing website's Google ranking?",
    answer:
      "Yes! Our SEO services include technical SEO fixes, keyword research, content optimization, and complete website audits.",
  },
];

function FAQItem({ faq, open, setOpen, index }) {
  const isOpen = open === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-400/30
        hover:bg-sky-500/[0.05]
        hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)]
      "
    >
      <button
        onClick={() => setOpen(isOpen ? null : index)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-5
          sm:px-7
          text-left
        "
      >
        <h3 className="text-[15px] sm:text-[17px] font-semibold text-white">
          {faq.question}
        </h3>

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-sky-400/15
            bg-sky-500/10
            text-cyan-300
            transition-all
            duration-300
            group-hover:border-sky-400/30
            group-hover:bg-sky-500/20
          "
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 sm:px-7 sm:pb-7">
          <p className="text-[15px] leading-relaxed text-slate-400">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden pt-6 pb-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            FAQ
          </div>

          <h2 className="mt-6 text-[clamp(1.5rem,3vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[clamp(1rem,2vw,1.15rem)]
              leading-relaxed
              text-slate-400
            "
          >
            Everything you need to know before starting your project with
            WebOstic.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
