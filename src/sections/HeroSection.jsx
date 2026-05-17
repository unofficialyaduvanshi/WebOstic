import { I } from "../components/Icon";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitToWeb3Forms } from "../lib/web3forms";

const scrollToId = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function HeroSection() {
  const navigate = useNavigate();

  // audit web3forms state
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  });

  // handle change

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await submitToWeb3Forms({
      subject: "New Website Audit Request",
      formData,
    });

    setLoading(false);

    if (result.success) {
      setSuccess(true);

      // 🔥 GA4 EVENT TRACKING (ADD THIS HERE)
      window.gtag("event", "form_submit", {
        form_name: "home_audit_form",
      });

      setFormData({
        name: "",
        email: "",
        website: "",
      });
    } else {
      alert(result.message);
    }
  };

  //audit form state

  // const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-10">
      {/* Video BG */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover scale-110 animate-[heroZoom_20s_linear_infinite]"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0e1a] via-[#0d1229] to-[#0a1a2e]" />

        <div className="absolute -top-[10%] -left-[5%] h-[600px] w-[600px] rounded-full blur-[40px] opacity-70 bg-[radial-gradient(circle,rgba(29,140,248,0.22)_0%,transparent_70%)] animate-[float_8s_ease-in-out_infinite]" />

        <div className="absolute bottom-0 -right-[5%] h-[500px] w-[500px] rounded-full blur-[50px] opacity-70 bg-[radial-gradient(circle,rgba(0,212,255,0.14)_0%,transparent_70%)] animate-[float_10s_ease-in-out_infinite] [animation-direction:reverse]" />

        <div className="absolute top-[30%] right-[20%] h-[350px] w-[350px] rounded-full blur-[60px] opacity-70 bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] animate-[float_12s_ease-in-out_infinite]" />

        <div className="absolute inset-0 [background-image:linear-gradient(rgba(29,140,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(29,140,248,0.04)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-[#0b0e1a]" />

      {/* Content */}
      <div className="relative z-10 w-full pt-20 sm:pt-20">
        <div className="w-full px-4 md:px-6 lg:px-8">
          {/* Main Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-12">
            {/* LEFT SIDE */}
            <div className="w-full">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold tracking-wider uppercase text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                Web Agency · Available for Projects
              </div>

              <h1 className="mt-7 text-[clamp(2.2rem,6vw,4.6rem)] font-extrabold leading-[1.08] tracking-[-0.06em] text-white">
                We Build Modern <br />
                Websites That{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Power Your Growth
                </span>
              </h1>

              <p className="mt-2 max-w-xl text-[clamp(1rem,2vw,1.2rem)] text-slate-250">
                Webostic creates fast, secure, SEO-ready React websites and
                digital experiences designed to help startups and businesses
                grow faster.
              </p>

              <p className="text-sm text-gray-400 mt-4 max-w-lg">
                Trusted by 50+ startups and businesses across India. Fast
                delivery. Transparent pricing. Zero fluff.
              </p>

              {/* Buttons */}
              <div className="mt-5 grid max-[400px]:grid-cols-1 grid-cols-[1.15fr_0.95fr] gap-3 pt-2 sm:flex sm:flex-row sm:flex-nowrap">
                <button
                  onClick={() => navigate("/pricing")}
                  className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-3 py-3 text-[13px] sm:px-7 sm:text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110 hover:-translate-y-0.5"
                >
                  <span className="whitespace-nowrap">View Pricing</span>

                  <span className="shrink-0">
                    <I.Arrow size={18} />
                  </span>
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[13px] sm:px-7 sm:text-base font-semibold text-white transition hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <span className="whitespace-nowrap">Talk to Us</span>

                  <span className="shrink-0">
                    <I.Arrow size={18} />
                  </span>
                </button>
              </div>

              {/* Desktop Features */}
              <div className="hidden md:flex md:flex-nowrap md:justify-between gap-x-3 text-sm font-medium text-slate-300 mt-10">
                <span className="whitespace-nowrap">⚡ Fast Delivery</span>
                <span className="whitespace-nowrap">🛡️ Dedicated Support</span>
                <span className="whitespace-nowrap">🔍 SEO Ready</span>
                <span className="whitespace-nowrap">💰 No Hidden Charges</span>
                <span className="whitespace-nowrap">
                  🎁 Free 30-Day Support
                </span>
              </div>

              {/* Mobile Marquee */}
              <div className="md:hidden mt-10 overflow-hidden">
                <div className="flex w-max animate-marquee gap-8 text-[11px] sm:text-[13px] font-medium text-slate-300">
                  <span className="whitespace-nowrap">⚡ Fast Delivery</span>
                  <span className="whitespace-nowrap">
                    🛡️ Dedicated Support
                  </span>
                  <span className="whitespace-nowrap">🔍 SEO Ready</span>
                  <span className="whitespace-nowrap">
                    💰 No Hidden Charges
                  </span>
                  <span className="whitespace-nowrap">
                    🎁 Free 30-Day Support
                  </span>

                  {/* Duplicate for smooth loop */}
                  <span className="whitespace-nowrap">⚡ Fast Delivery</span>
                  <span className="whitespace-nowrap">
                    🛡️ Dedicated Support
                  </span>
                  <span className="whitespace-nowrap">🔍 SEO Ready</span>
                  <span className="whitespace-nowrap">
                    💰 No Hidden Charges
                  </span>
                  <span className="whitespace-nowrap">
                    🎁 Free 30-Day Support
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="relative w-full lg:mb-16 lg:pr-8 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[480px] rounded-3xl border border-sky-400/25 bg-sky-500/10 p-4 sm:p-6 lg:p-5 backdrop-blur-sm">
                {/* Top Content */}
                <div className=" text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-[11px] font-extrabold tracking-widest uppercase text-cyan-200">
                    Free Website Audit
                  </div>

                  <h3 className="mt-2 text-[clamp(1.3rem,2.5vw,1.9rem)] font-extrabold tracking-tight text-white">
                    Get a Free Website Audit
                  </h3>

                  <p className="mx-auto mt-2 mb-3 max-w-lg text-sm leading-relaxed text-slate-300">
                    We'll analyze your site's speed, SEO & conversions — for
                    free.
                  </p>
                </div>

                {/* Form / Success State */}
                {success ? (
                  <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                    {/* Success Icon */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-400/20 border border-sky-400/20 shadow-lg shadow-cyan-500/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:scale-105">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-cyan-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Heading */}
                    <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-white">
                      Audit Request Sent!
                    </h3>

                    {/* Text */}
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                      Thanks for contacting{" "}
                      <span className="font-bold text-cyan-300">WebOstic</span>.
                      We'll review your website and get back to you within{"  "}
                      <span className="font-bold text-cyan-300">24 hours</span>
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => setSuccess(false)}
                      className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white"
                    >
                      Send Another
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/30"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/30"
                        required
                      />
                    </div>

                    {/* Website URL */}
                    <div>
                      <input
                        type="text"
                        name="website"
                        placeholder="Website URL (Optional)"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-2.5 text-sm text-white outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/30"
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      // disabled={busy}
                      disabled={loading}
                      className="group inline-flex w-full mt-2 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-extrabold text-white transition hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-70 active:scale-95"
                    >
                      {loading ? "Submitting..." : "Claim Free Audit"}

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    {/* Bottom Text */}
                    <p className="mt-1 text-center text-xs text-slate-400">
                      ✓ 100% free. No credit card required.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
