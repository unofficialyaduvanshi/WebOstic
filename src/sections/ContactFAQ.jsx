import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Why WebOstic ?",
      answer:
        "Webostic: Where Speed Meets Excellence. Tired of slow agencies? We launch premium sites in 5–7 days, optimized for SEO and growth — trusted by 50+ businesses.",
    },
    {
      question: "How long does a website take?",
      answer:
        "Typically, our projects range from 1 to 2 weeks for standard informational sites, and 4 to 5 weeks for complex e-commerce or custom builds. We emphasize quality over speed.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We work in milestones. If you aren't happy with the design phase, we fix it before moving to code. You only pay for the next stage when you are happy with the current one.",
    },
  ];

  return (
    <div className="relative overflow-hidden py-8 font-inherit">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            FAQ
          </div>

          <h2 className="mt-6 text-[clamp(1.5rem,3vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
            Questions?{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,2vw,1.15rem)] leading-relaxed text-slate-400">
            If you don't see your question here, just reach out - we respond
            within a few hours.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
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
                  onClick={() => setOpenFaq(isOpen ? null : index)}
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
          })}
        </div>
      </div>
    </div>
  );
}
