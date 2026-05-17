// src/sections/Industries.jsx

import {
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building2,
  Utensils,
  Rocket,
  Shirt,
  BriefcaseBusiness,
  Plane,
} from "lucide-react";

const industries = [
  {
    title: "E-Commerce & Retail",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare & Clinics",
    icon: HeartPulse,
  },
  {
    title: "Education & EdTech",
    icon: GraduationCap,
  },
  {
    title: "Real Estate",
    icon: Building2,
  },
  {
    title: "SaaS & Tech Startups",
    icon: Rocket,
    active: true,
  },
  {
    title: "Restaurants & Food",
    icon: Utensils,
  },
  {
    title: "Fashion & Lifestyle",
    icon: Shirt,
  },
  {
    title: "Finance & Consulting",
    icon: BriefcaseBusiness,
  },
  {
    title: "Travel & Hospitality",
    icon: Plane,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden py-8">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Left Glow */}
        <div className="absolute left-0 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-sky-500/20 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute right-0 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Industries
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-[clamp(1.5rem,3vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
            We Work With Every Industry
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-slate-400">
            Whether you're a local business, a startup, or an enterprise - we
            have the expertise to deliver results in your niche.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-16">
          {/* Mobile View */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className={`
            group
            relative
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            border
            px-4
            py-5
            min-w-0
            text-center
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            active:-translate-y-1

            ${
              item.active
                ? `
                  border-sky-400/60
                  bg-sky-500/10
                  text-cyan-300
                  shadow-[0_0_40px_rgba(14,165,233,0.18)]
                `
                : `
                  border-white/10
                  bg-white/[0.03]
                  text-white/90
                   hover:border-sky-400/40
        hover:bg-sky-500/10
        hover:text-cyan-200
        hover:shadow-[0_0_30px_rgba(14,165,233,0.18)]
                `
            }
          `}
                >
                  <Icon
                    size={16}
                    className={`
                        shrink-0
                        transition-colors
                    duration-300
      ${item.active ? "text-sky-300" : "text-sky-400 group-hover:text-cyan-300"}
    `}
                  />

                  {/* <span className="text-[14px] font-semibold leading-none whitespace-nowrap"> */}
                  <span className="text-[11px] xs:text-[12px] sm:text-[14px] font-semibold leading-none truncate">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop View */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-5 sm:gap-4">
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className={`
            group
            relative
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            px-7
            py-4
            text-[15px]
            sm:text-[17px]
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1

            ${
              item.active
                ? `
                  border-sky-400/60
                  bg-sky-500/10
                  text-cyan-300
                  shadow-[0_0_40px_rgba(14,165,233,0.35)]
                `
                : `
                  border-white/10
                  bg-white/[0.03]
                  text-white/90
                  hover:border-sky-400/40
                  hover:bg-sky-500/10
                  hover:text-cyan-200
                  hover:shadow-[0_0_30px_rgba(14,165,233,0.18)]
                `
            }
          `}
                >
                  <Icon
                    size={22}
                    className={`
              transition-colors duration-300
              ${
                item.active
                  ? "text-sky-300"
                  : "text-sky-400 group-hover:text-cyan-300"
              }
            `}
                  />

                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
