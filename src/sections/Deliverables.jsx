// src/sections/Deliverables.jsx

import {
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  BarChart3,
  Target,
  Code2,
  Globe,
  Clock3,
} from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Fast Load Times",
    desc: "Under 3-second load speed, optimized for Core Web Vitals.",
  },
  {
    icon: Search,
    title: "On-Page SEO Setup",
    desc: "Meta tags, structured data, sitemaps, and robots.txt configured.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Fully responsive across all devices and screen sizes.",
  },
  {
    icon: ShieldCheck,
    title: "SSL & Security",
    desc: "HTTPS enabled, secure headers, and basic security hardening.",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    desc: "Google Analytics and Search Console connected and configured.",
  },
  {
    icon: Target,
    title: "Conversion Optimized",
    desc: "Clear CTAs, lead forms, and layouts designed to convert visitors.",
  },
  {
    icon: Code2,
    title: "Clean, Maintainable Code",
    desc: "Well-structured code you or any developer can easily update.",
  },
  {
    icon: Globe,
    title: "Domain & Hosting Help",
    desc: "We guide you through domain setup and recommend reliable hosts.",
  },
  {
    icon: Clock3,
    title: "30-Day Post-Launch Support",
    desc: "We're with you after launch — fixing bugs and answering questions.",
  },
];

export default function Deliverables() {
  return (
    <section id="deliverables" className="relative overflow-hidden py-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow 1 */}
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-sky-500/10 blur-[120px]" />

        {/* Glow 2 */}
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Glow 3 */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Deliverables
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-[clamp(1.5rem,3vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
            Everything Delivered{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Nothing Hidden
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-slate-400">
            When you work with Webostic, you get a transparent experience,
            high-quality execution, and a clear understanding of every step from
            start to finish.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  sm:p-7
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-sky-400/30
                  hover:bg-sky-500/[0.06]
                  hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl" />
                </div>

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-sky-400/15
                      bg-sky-500/10
                      text-cyan-300
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-sky-400/30
                      group-hover:bg-sky-500/20
                    "
                  >
                    <Icon size={26} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[1.15rem] font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
