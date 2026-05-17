import { useMemo, useState } from "react";
import FU from "../components/FU";
import { I } from "../components/Icon";
import { PROJECTS_ITEMS, PORT_CATS } from "../data/siteData";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const scrollToId = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function PortfolioSection() {
  const [active, setActive] = useState("All");

  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS_ITEMS;
    return PROJECTS_ITEMS.filter((p) => p.cat === active);
  }, [active]);

  return (
    <section id="projects" className="pt-28 pb-10 sm:pt-28 sm:pb-10">
      {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="w-full px-14"> */}
      <div className="w-full px-8 sm:px-6 lg:px-14">
        <FU className="text-center mb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7">
            Explore a selection of premium websites and applications we’ve
            designed and developed.
          </p>
        </FU>

        {/* Filter chips */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 overflow-x-auto pb-2">
          {PORT_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={[
                "whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition border",
                active === c
                  ? "border-transparent bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/20"
                  : "border-white/10 bg-transparent text-slate-300 hover:border-sky-400/40 hover:text-white",
              ].join(" ")}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <FU key={p.id} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-sky-400/30 hover:shadow-2xl hover:shadow-sky-500/10">
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-black">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.title}
                      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: `linear-gradient(${p.color})` }}
                    >
                      <span className="text-5xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                        {p.emoji}
                      </span>
                    </div>
                  )}

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span
                      className="rounded-md border border-cyan-400/20 bg-black/50 backdrop-blur-xl px-2.5 py-1 text-[11px] font-semibold text-cyan-100 tracking-wide

shadow-lg shadow-cyan-500/10"
                    >
                      {p.cat}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e1a]/95 via-[#0b0e1a]/30 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {p.live ? (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
            inline-flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-gradient-to-r
            from-sky-500
            to-cyan-400
            px-3
            py-2
            text-xs
            font-semibold
            text-white
          "
                        >
                          <I.Ext size={13} />
                          Live Demo
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollToId("contact")}
                          className="
            inline-flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-gradient-to-r
            from-sky-500
            to-cyan-400
            px-3
            py-2
            text-xs
            font-semibold
            text-white
          "
                        >
                          <I.Ext size={13} />
                          Live Demo
                        </button>
                      )}

                      <button
                        type="button"
                        className="
          inline-flex
          flex-1
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-white/20
          bg-white/5
          px-3
          py-2
          text-xs
          font-semibold
          text-white
        "
                      >
                        <I.Folder size={13} />
                        Case Study
                      </button>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FU>
          ))}
        </div>
      </div>

      {/* cta */}
      <div id="cta" className="relative overflow-hidden mt-10 py-3">
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
              Let’s Create Your Website
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-[clamp(1.3rem,3vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
              Want to be our next{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                successful Project?
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
              We are currently accepting new projects for this month.
            </p>

            {/* Buttons */}
            <div
              className="
                relative
                z-10
                mt-5
                pt-2
                flex
                flex-nowrap
                items-center
                justify-center
                gap-4
                md:gap-8
                overflow-x-auto
                overflow-y-visible
                pb-2
              
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
              {/* <button
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
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
