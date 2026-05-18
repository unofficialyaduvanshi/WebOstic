// src/sections/CTASection.jsx

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const scrollToId = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section id="cta" className="relative overflow-hidden py-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow Left */}
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[120px]" />

        {/* Glow Right */}
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-6 lg:px-8">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.5 }}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-sky-400/20
            bg-white/[0.03]
            pt-5
            px-3
            pb-4
            
            
            text-center
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-sky-400/30
            hover:bg-sky-500/[0.05]
            hover:shadow-[0_25px_80px_rgba(14,165,233,0.15)]
          "
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[100px]" />
          </div>

          {/* Badge */}
          <div
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
              text-[11px]
              font-extrabold
              uppercase
              tracking-[0.25em]
              text-cyan-200
              backdrop-blur-xl
            "
          >
            <Sparkles size={14} />
            Let’s Create Together
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-[clamp(1.3rem,3vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              relative
              z-10
              mx-auto
              mt-3
              max-w-2xl
              text-[clamp(0.8rem,2vw,1rem)]
              leading-relaxed
              text-slate-400
            "
          >
            Have an idea or project in mind? Let Webostic turn it into a
            powerful digital experience that drives real business results.
          </p>

          {/* Buttons */}
          <div
            // className="
            //     relative
            //     z-10
            //     mt-5
            //     pt-2
            //     flex
            //     flex-nowrap
            //     items-center
            //     justify-center
            //     gap-4
            //     md:gap-8
            //     overflow-x-auto
            //     overflow-y-visible
            //     pb-2

            // "

            className="
    relative
    z-10
    mt-5
    pt-2
    flex
    flex-row
    items-center
    justify-center
    gap-2
    sm:gap-6
    w-full
    px-2
  "
          >
            {/* Primary */}
            <button
              onClick={() => navigate("/contact")}
              className="
                group/btn
                inline-flex
                shrink-0 
                whitespace-nowrap
                min-w-[160px]
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-sky-500
                to-cyan-400
                px-4
                sm:px-8
                py-3
                sm:py-4
                text-[13px]
                sm:text-[15px]
                font-bold
                text-white
               
                transition-all
                duration-300
                hover:-translate-y-1
                hover:brightness-110
              "
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>
            {/* Secondary */}
            <button
              onClick={() => navigate("/pricing")}
              className="
                inline-flex
                
                shrink-0 
                whitespace-nowrap
                min-w-[160px]
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
               px-4
                sm:px-8
                py-3
                sm:py-4
                text-[13px]
                sm:text-[15px]
                font-bold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-400/30
                hover:bg-sky-500/[0.08]
                hover:text-cyan-200
              "
            >
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
