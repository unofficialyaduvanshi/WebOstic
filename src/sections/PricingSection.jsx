import { motion } from "framer-motion";
import { Sparkles, AlertCircle, Clock, Check } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import FU from "../components/FU";
import { I } from "../components/Icon";
import { useToast } from "../components/Toast";
import { PRICING_PLANS } from "../data/siteData";
import Counter from "../components/Counter";
import HeroStats from "./HeroStats";
import { useEffect } from "react";
import { useState } from "react";

import { submitToWeb3Forms } from "../lib/web3forms";

import { createPortal } from "react-dom";

import { PROJECT_PROCESS_STEPS } from "../data/siteData";
import { PROJECT_FAQ } from "../data/siteData";

const scrollToId = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

// for color theming of pricing cards
const colorMap = {
  blue: {
    badge: "bg-sky-500/10 text-sky-300 border border-sky-400/20",
    check: "text-sky-300",
    glow: "hover:shadow-sky-800/20",
  },

  orange: {
    badge: "bg-sky-500/10 text-sky-300 border border-sky-400/20",
    check: "text-sky-300",
    glow: "hover:shadow-sky-800/20",
  },

  purple: {
    badge: "bg-violet-500/10 text-violet-300 border border-violet-400/20",
    check: "text-violet-300",
    glow: "hover:shadow-violet-800/20",
  },

  green: {
    badge: "bg-emerald-300/10 text-emerald-300 border border-emerald-400/20",
    check: "text-emerald-300",
    glow: "hover:shadow-emerald-800/20",
  },

  teal: {
    badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-400/20",
    check: "text-cyan-300",
    glow: "hover:shadow-cyan-800/20",
  },

  gray: {
    badge: "bg-white/10 text-slate-300 border border-white/10",
    check: "text-slate-300",
    glow: "hover:shadow-white/5",
  },
};

export default function PricingSection() {
  // form state
  const [loading, setLoading] = useState(false);

  const [pricingForm, setPricingForm] = useState({
    name: "",
    phone: "",
    email: "",

    message: "",
  });

  const handlePricingChange = (e) => {
    setPricingForm({
      ...pricingForm,
      [e.target.name]: e.target.value,
    });
  };

  const handlePricingSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await submitToWeb3Forms({
      subject: `Pricing Inquiry → ${selectedPlan?.name} (${selectedPlan?.price})`,
      formData: pricingForm,
    });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);

      // 🔥 GA4 (REAL CONVERSION TRACKING)
      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          form_name: "pricing_form",
          plan: selectedPlan?.name,
          value: selectedPlan?.price,
        });
      }

      setPricingForm({
        name: "",
        phone: "",
        email: "",

        message: "",
      });
    } else {
      alert(result.message);
    }
  };

  // etc
  const { show, Toaster } = useToast();
  const [openFaq, setOpenFaq] = useState(0);
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const set = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    setBusy(true);

    // fake loading
    setTimeout(() => {
      setBusy(false);

      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 10);
  };

  // popup form blur effect
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }

    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [showPopup]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-28">
        {/* Background Glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[140px]" />
          <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[160px]" />
        </div>

        <div className="relative z-10 ">
          <div className="w-full  px-5 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
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
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.25em]
          text-cyan-200
          backdrop-blur-xl
        "
              >
                <Sparkles size={14} />
                Transparent Pricing - No Hidden Fees
              </div>

              {/* Heading */}
              <h2 className="text-[clamp(1.4rem,3.5vw,2.5rem)] mt-5 font-extrabold tracking-tight text-white">
                Web Solutions Built For{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Real Results.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7 mb-5">
                Professional websites starting at{" "}
                <span className="font-bold text-white">₹2,999</span>. Delivered
                fast, built beautifully, and optimized for growth.
              </p>
            </motion.div>
          </div>
          {/* Stats */}
          <HeroStats />

          {/* Alert Box */}
          <div className=" px-5">
            <div
              className="
            mx-auto
            mt-5
            mb-5
            flex
            max-w-fit
  lg:whitespace-nowrap
            items-start
            gap-3
            rounded-2xl
            border
            border-amber-400/20
            bg-amber-500/[0.06]
            px-5
            py-4
            text-left
            backdrop-blur-xl
          "
            >
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0 text-amber-300"
              />

              <p className="text-sm leading-relaxed text-amber-100/80">
                <span className="font-bold text-amber-200">Note:</span> Domain &
                hosting are not included in any package. We help you set them up
                separately.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-4 sm:py-6 ">
        <div className="w-full px-5 sm:px-6 lg:px-8">
          <FU className="text-center mb-12">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-white">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>

            <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7">
              No hidden fees. Choose the plan that fits your needs and budget.
            </p>
          </FU>

          {/* new pricing card */}

          <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-3">
            {PRICING_PLANS.map((plan, i) => {
              const c = colorMap[plan.color];

              return (
                <FU key={plan.id} delay={i * 0.07}>
                  <div
                    className={[
                      `
        relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-white/10 bg-white/[0.04]
        backdrop-blur-xl transition-all duration-500
        hover:-translate-y-2 hover:shadow-2xl
        ${c.glow}
        `,
                      plan.isPopular
                        ? "bg-gradient-to-br from-sky-500/10 to-cyan-500/5 ring-1 ring-sky-400/20"
                        : "",
                    ].join(" ")}
                  >
                    {/* Popular Ribbon */}
                    {plan.isPopular && (
                      <div className="absolute right-32 top-0 z-20">
                        <div className="flex items-center gap-1 rounded-b-2xl bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white">
                          <Sparkles size={10} fill="currentColor" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Top */}
                    <div
                      className={`p-7 ${
                        plan.isPopular
                          ? "border-b border-white/10"
                          : "border-b border-white/5"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${c.badge}`}
                      >
                        <plan.icon size={22} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                        {plan.name}
                      </h3>

                      {/* Tagline */}
                      <p
                        className={`mt-2 text-xs font-bold uppercase tracking-[0.2em] ${
                          plan.isPopular ? "text-white/90" : "text-white/90"
                        }`}
                      >
                        {plan.tagline}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        {plan.desc}
                      </p>

                      {/* Price */}
                      <div className="mt-6 flex items-end gap-2">
                        <span
                          className={`text-5xl font-extrabold tracking-tight ${
                            plan.isPopular ? "text-sky-500" : "text-cyan-400"
                          }`}
                        >
                          {plan.price}
                        </span>

                        {plan.period && (
                          <span className="pb-1 text-sm text-slate-400">
                            / {plan.period}
                          </span>
                        )}
                      </div>

                      {/* Original Price */}
                      {plan.originalPrice && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-slate-500 line-through">
                            {plan.originalPrice}
                          </span>

                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-400/20">
                            Save 50%
                          </span>
                        </div>
                      )}

                      {/* Meta */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {plan.deliveryDays && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                            <Clock size={10} />
                            {plan.deliveryDays} day delivery
                          </span>
                        )}

                        {plan.revisions && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                            ↺ {plan.revisions} revisions
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-1 flex-col p-7">
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        What's Included
                      </p>

                      <ul className="space-y-3 mb-6">
                        {plan.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-0.5 rounded-full bg-white/5 p-1">
                              <Check
                                size={11}
                                strokeWidth={3}
                                className={c.check}
                              />
                            </div>

                            <span className="text-sm text-slate-200/90">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Not Included */}
                      {plan.notIncluded?.length > 0 && (
                        <div className="mt-5 mb-5 border-t border-dashed border-white/10 pt-5">
                          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Not Included
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {plan.notIncluded.map((item, idx) => (
                              <span
                                key={idx}
                                className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-400"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <button
                        onClick={() => {
                          setSelectedPlan(plan);
                          setShowPopup(true);
                        }}
                        className={[
                          `
mt-auto
inline-flex w-full items-center justify-center gap-2
rounded-2xl px-5 py-3 text-sm font-extrabold
transition-all duration-300
`,
                          plan.isPopular
                            ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white hover:brightness-110"
                            : "border border-white/10 bg-white/5 text-white hover:bg-cyan-500/90",
                        ].join(" ")}
                      >
                        {plan.cta}
                        <I.Arrow size={16} />
                      </button>
                    </div>
                  </div>
                </FU>
              );
            })}
          </div>
        </div>
        {/* Bottom Features */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4 px-8">
          {[
            {
              title: "Fast Delivery",
              desc: "Most projects go live in under a week. No long waitlists.",
              icon: "⚡",
            },

            {
              title: "No Hidden Fees",
              desc: "The price you see is what you pay. Zero surprises.",
              icon: "🛡️",
            },

            {
              title: "Free 30-Day Support",
              desc: "We stay with you after launch, not just before.",
              icon: "🤝",
            },

            {
              title: "90% Client Retention",
              desc: "Our clients come back because the results speak.",
              icon: "⭐",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
    group
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    p-6
    backdrop-blur-xl
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-sky-400/20
    hover:bg-sky-500/[0.04]
    hover:shadow-2xl
    hover:shadow-sky-500/10
  "
            >
              {/* Icon */}
              {/* Top Row */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className="
  flex
  h-9
  w-9
  shrink-0
  items-center
  justify-center
  rounded-2xl
  border
  border-cyan-400/20
  bg-cyan-500/10
  text-xl
"
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-2 text-sm leading-7 text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* pricing project process steps */}
        <div id="process" className="py-6 sm:py-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <FU className="text-center mb-12">
                <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-extrabold tracking-tight text-white">
                  How We{" "}
                  <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                    Works
                  </span>
                </h2>
                <p className="mx-auto mt-1 max-w-3xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-slate-400">
                  From Discovery to Launch: 4 Clear Steps
                </p>
              </FU>
            </motion.div>

            <div className="relative mx-auto max-w-4xl ">
              {/* Center line (desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 opacity-30 bg-gradient-to-b from-sky-500 to-cyan-300" />

              <div className="flex flex-col gap-8">
                {PROJECT_PROCESS_STEPS.map((s, i) => {
                  const isLeft = i % 2 === 0;

                  // ✅ one shared animation config for both desktop + mobile
                  const slide = {
                    initial: { opacity: 0, x: isLeft ? -30 : 30 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true, amount: 0.25 },
                    transition: {
                      duration: 0.55,
                      ease: "easeOut",
                      delay: i * 0.08,
                    },
                  };

                  return (
                    <FU key={s.num} delay={i * 0.07}>
                      <div className="relative">
                        {/* ✅ Desktop layout: slide left/right */}
                        <motion.div {...slide}>
                          <div
                            className={[
                              "hidden md:flex items-center",
                              isLeft ? "justify-start" : "justify-end",
                            ].join(" ")}
                          >
                            <div className="relative w-[calc(50%-2.75rem)]">
                              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10">
                                <div
                                  className={[
                                    "flex items-center gap-3 mb-3",
                                    isLeft ? "flex-row" : "flex-row-reverse",
                                  ].join(" ")}
                                >
                                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300">
                                    <s.Icon size={18} />
                                  </div>
                                  <span className="text-[12px] font-extrabold tracking-widest text-sky-300 uppercase">
                                    Step {s.num}
                                  </span>
                                </div>

                                <h3
                                  className={[
                                    "text-base font-bold text-white",
                                    isLeft ? "text-left" : "text-right",
                                  ].join(" ")}
                                >
                                  {s.title}
                                </h3>
                                <p
                                  className={[
                                    "mt-2 text-sm leading-7 text-slate-300",
                                    isLeft ? "text-left" : "text-right",
                                  ].join(" ")}
                                >
                                  {s.desc}
                                </p>
                              </div>

                              {/* Arrow to center */}
                              <div
                                className={[
                                  "absolute top-1/2 -translate-y-1/2 h-0 w-0 border-y-[10px] border-y-transparent",
                                  isLeft
                                    ? "right-[-12px] border-l-[12px] border-l-sky-500/20"
                                    : "left-[-12px] border-r-[12px] border-r-sky-500/20",
                                ].join(" ")}
                              />
                            </div>
                          </div>
                        </motion.div>

                        {/* Center dot (desktop) */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-extrabold flex items-center justify-center shadow-[0_0_0_6px_#0b0e1a,0_0_24px_rgba(29,140,248,0.45)]">
                            {s.num}
                          </div>
                        </div>

                        {/* ✅ Mobile layout: slide left/right */}
                        <motion.div {...slide} className="md:hidden">
                          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300">
                                <s.Icon size={18} />
                              </div>
                              <span className="text-[12px] font-extrabold tracking-widest text-sky-300 uppercase">
                                Step {s.num}
                              </span>
                            </div>

                            <h3 className="text-base font-bold text-white">
                              {s.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-300">
                              {s.desc}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </FU>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT FAQ SECTION */}
        <div className="relative overflow-hidden py-6">
          {/* Background */}
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
                Questions?{"  "}
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
              {PROJECT_FAQ.map((faq, index) => {
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

        {/* PRICING SERVICES CTA */}
        <div id="cta" className="relative overflow-hidden ">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                Ready to get started?
              </div>

              {/* Heading */}
              <h2 className="mt-4 text-[clamp(1.3rem,3vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
                Build Your Ideal{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Online Presence
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
          text-[clamp(0.8rem,2vw,1.1rem)]
          leading-relaxed
          text-slate-400
        "
              >
                Choose your plan, complete the form, and we'll deliver fast.
                Most projects launched in 5–7 days with full support.
              </p>

              {/* Buttons */}
              <div
                //         className="
                //     relative
                //     z-10
                //     mt-5
                //     pt-2
                //     flex
                //     flex-nowrap
                //     items-center
                //     justify-center
                //     gap-2
                //     md:gap-8
                //     overflow-x-auto
                //     overflow-y-visible
                //     pb-2

                // "

                className="relative z-10 mt-5 w-full flex justify-center px-4"
              >
                <div className="flex w-full max-w-[360px] items-center gap-3">
                  {/* Primary */}
                  <button
                    onClick={() => {
                      const businessPlan = PRICING_PLANS.find(
                        (p) => p.price === "₹4,999",
                      );

                      setSelectedPlan(businessPlan);
                      setShowPopup(true);
                      // 🔥 GA4 HERE
                      if (window.gtag) {
                        window.gtag("event", "pricing_cta_click", {
                          button: "get_started_today",
                          plan: businessPlan?.name,
                        });
                      }
                    }}
                    //         className="
                    //   group/btn
                    //   inline-flex
                    //   shrink-0
                    //   whitespace-nowrap
                    //   min-w-[160px]
                    //   items-center
                    //   justify-center
                    //   gap-2
                    //   rounded-2xl
                    //   bg-gradient-to-r
                    //   from-sky-500
                    //   to-cyan-400
                    //   px-3
                    //   sm:px-8
                    //   py-3
                    //   sm:py-4
                    //   text-[13px]
                    //   sm:text-[15px]
                    //   font-bold
                    //   text-white

                    //   transition-all
                    //   duration-300
                    //   hover:-translate-y-1
                    //   hover:brightness-110
                    // "

                    className="
        flex-1
        min-w-0
        overflow-hidden
        inline-flex items-center justify-center gap-1
        rounded-2xl
        bg-gradient-to-r from-sky-500 to-cyan-400
        px-6 py-3
        text-[12px] sm:text-[15px] font-bold text-white
        whitespace-nowrap
        transition-all
                       duration-300
                       hover:-translate-y-1
                       hover:brightness-110
      "
                  >
                    Get Started Today
                    <ArrowRight
                      size={18}
                      className=" shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                  {/* Secondary */}
                  <button
                    onClick={() => {
                      const customPlan = PRICING_PLANS.find(
                        (p) => p.id === "custom",
                      );

                      setSelectedPlan(customPlan);
                      setShowPopup(true);
                    }}
                    //         className="
                    //   inline-flex

                    //   shrink-0
                    //   whitespace-nowrap
                    //   min-w-[160px]
                    //   items-center
                    //   justify-center
                    //   rounded-2xl
                    //   border
                    //   border-white/10
                    //   bg-white/[0.04]
                    //  px-3
                    //   sm:px-8
                    //   py-3
                    //   sm:py-4
                    //   text-[13px]
                    //   sm:text-[15px]
                    //   font-bold
                    //   text-white
                    //   backdrop-blur-xl
                    //   transition-all
                    //   duration-300
                    //   hover:-translate-y-1
                    //   hover:border-sky-400/30
                    //   hover:bg-sky-500/[0.08]
                    //   hover:text-cyan-200
                    // "

                    className="
        flex-1
        min-w-0
        overflow-hidden
        inline-flex items-center justify-center
        rounded-2xl
        border border-white/10
        bg-white/5
        px-4 py-3
        text-[12px] sm:text-[15px] font-bold text-white
        whitespace-nowrap
          backdrop-blur-xl
                       transition-all
                       duration-300
                       hover:-translate-y-1
                       hover:border-sky-400/30
                       hover:bg-sky-500/[0.08]
                       hover:text-cyan-200
      "
                  >
                    Discuss Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* popup form */}

        {/* POPUP FORM MODAL */}
        {showPopup &&
          createPortal(
            <div
              className="
            popup-modal
      fixed inset-0 z-[9999999999]
      flex items-center justify-center
      bg-black/40
      backdrop-blur-sm
      
      px-4
    "
            >
              {/* Overlay close */}
              <div
                className="absolute inset-0"
                onClick={() => setShowPopup(false)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="
        relative z-10
        w-full max-w-[420px]
        rounded-3xl
        border border-sky-400/25
        bg-[#0f1320]/95
        p-5 sm:p-6
        shadow-2xl shadow-sky-500/10
        backdrop-blur-2xl
      "
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="
          absolute right-4 top-4
          flex h-9 w-9 items-center justify-center
          rounded-xl border border-white/10
          bg-white/5 text-white
          transition hover:bg-white/10
        "
                >
                  ✕
                </button>

                {/* Top */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-[11px] font-extrabold tracking-widest uppercase text-cyan-200">
                    Get Started
                  </div>

                  <h3 className="mt-3 text-[clamp(1.3rem,2.5vw,1.9rem)] font-extrabold tracking-tight text-white">
                    {selectedPlan?.name || "Get Started"}
                  </h3>

                  <p className="mx-auto mb-4 mt-2 max-w-lg text-sm leading-relaxed text-slate-300">
                    Starting at{" "}
                    <span className="font-bold text-cyan-300">
                      {selectedPlan?.price || "Custom"}
                    </span>
                  </p>
                </div>

                {/* Success State */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-8 text-center"
                  >
                    {/* Success Icon */}
                    <div
                      className="
        mx-auto
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        border
        border-emerald-400/20
        bg-emerald-500/10
        shadow-lg
        shadow-emerald-500/10
      "
                    >
                      <Check
                        size={38}
                        strokeWidth={3}
                        className="text-emerald-300"
                      />
                    </div>

                    {/* Heading */}
                    <h3 className="mt-6 text-3xl font-extrabold text-white">
                      Inquiry Sent!
                    </h3>

                    {/* Text */}
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-300">
                      Thanks for contacting us. Our team will reach out within{" "}
                      <span className="font-bold text-cyan-300">24 hours</span>{" "}
                      regarding your{" "}
                      <span className="font-bold text-white">
                        {selectedPlan?.name}
                      </span>{" "}
                      project.
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        setSubmitted(false);
                      }}
                      className="
        group
        mt-7
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-gradient-to-r
        from-sky-500
        to-cyan-400
        px-6
        py-3
        text-sm
        font-extrabold
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:brightness-110
        active:scale-95
      "
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  /* Form */
                  <form
                    onSubmit={handlePricingSubmit}
                    className="flex flex-col gap-3"
                  >
                    {/* Name */}
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={pricingForm.name}
                      onChange={handlePricingChange}
                      className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/30"
                      required
                    />

                    {/* Phone */}
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={pricingForm.phone}
                      onChange={handlePricingChange}
                      className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/30"
                      required
                    />

                    {/* Email */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={pricingForm.email}
                      onChange={handlePricingChange}
                      className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/30"
                      required
                    />

                    {/* Message */}
                    <textarea
                      placeholder="Tell us about your project"
                      name="message"
                      value={pricingForm.message}
                      onChange={handlePricingChange}
                      rows={4}
                      className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/30"
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110 disabled:opacity-70 active:scale-95"
                    >
                      {loading ? "Sending..." : "Send Inquiry"}

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    {/* Bottom */}
                    <p className="mt-1 text-center text-xs text-slate-400">
                      🔒 Your info is safe. We never spam.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>,
            document.body,
          )}

        <Toaster />
      </section>
    </>
  );
}
