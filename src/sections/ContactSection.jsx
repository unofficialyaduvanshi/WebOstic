import { useEffect, useState } from "react";
import FU from "../components/FU";
import { I } from "../components/Icon";
import { useToast } from "../components/Toast";
import { WA_NUMBER } from "../data/siteData";
import ContactFAQ from "./ContactFAQ";

import { submitToWeb3Forms } from "../lib/web3forms";

import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  //form data

  const [loading, setLoading] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    Project_Details: "",
  });

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await submitToWeb3Forms({
      subject: "New Contact Form Message",
      formData: contactForm,
    });

    setLoading(false);

    if (result.success) {
      setSent(true);

      // 🔥 GA4 EVENT TRACKING (ADD THIS)
      window.gtag("event", "form_submit", {
        form_name: "contact_form",
        service: contactForm.service,
        budget: contactForm.budget,
      });

      setContactForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        Project_Details: "",
      });
    } else {
      alert(result.message);
    }
  };

  // old form state
  const { show, Toaster } = useToast();

  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   service: "",
  //   budget: "",
  //   message: "",
  //   plan: "",
  // });

  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  // const [busy, setBusy] = useState(false);

  // const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  // Load selected plan
  // useEffect(() => {
  //   const saved = localStorage.getItem("webostic_plan");
  //   if (saved) set("plan", saved);

  //   const sync = () => {
  //     const p = localStorage.getItem("webostic_plan");
  //     if (p) set("plan", p);
  //   };

  //   window.addEventListener("storage", sync);
  //   window.addEventListener("webostic_plan_updated", sync);
  //   return () => {
  //     window.removeEventListener("storage", sync);
  //     window.removeEventListener("webostic_plan_updated", sync);
  //   };
  // }, []);

  const validate = () => {
    const e = {};
    if (!contactForm.name.trim()) e.name = "Name is required";
    if (!contactForm.email.trim() || !/\S+@\S+\.\S+/.test(contactForm.email))
      e.email = "Valid email required";
    if (
      !contactForm.Project_Details.trim() ||
      contactForm.Project_Details.trim().length < 20
    )
      e.Project_Details = "Please describe your project (20+ chars)";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length) return;

    setBusy(true);
    setTimeout(() => {
      setSent(true);
      setBusy(false);
      localStorage.removeItem("webostic_plan");
      show("✅ Message sent! We’ll reply within 24 hours.");
    }, 10);
  };

  const openWA = () => {
    const msg = `Hi Webostic! My name is ${contactForm.name || "..."} and I'd like to discuss a project.`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const info = [
    { Icon: I.Mail, label: "Email Us", val: "hello@webostic.com" },
    { Icon: I.Phone, label: "Call / WA", val: "+91 99999 99999" },
    { Icon: I.Map, label: "Location", val: "Remote — Worldwide" },
  ];

  return (
    <section id="contact" className="pt-28 sm:pt-28">
      {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="w-full px-14"> */}
      <div className="w-full px-5 sm:px-6 lg:px-14">
        <FU className="text-center mb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-white">
            Contact{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Webostic
            </span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7">
            Ready to start? Drop us a message and we'll get back within 24
            hours.
          </p>
        </FU>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.6fr] items-start">
          {/* Left */}
          <FU className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
              <h3 className="text-lg font-extrabold text-white">Let's Talk</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Whether you have a project ready or just exploring options,
                we're happy to chat — no pressure.
              </p>

              <div className="mt-6 space-y-4">
                {info.map(({ Icon, label, val }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold tracking-widest uppercase text-slate-400">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-white">{val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs text-slate-300">
                  ✅ Fast replies · Free consultation · Clear pricing
                </p>
              </div>
            </div>
          </FU>

          {/* Right form */}
          <FU delay={0.08}>
            <div className="rounded-3xl border border-sky-400/25 bg-sky-500/10 p-7 sm:p-9 backdrop-blur-xl">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in duration-500">
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
                    Message Sent!
                  </h3>

                  {/* Text */}
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                    Thanks for contacting{" "}
                    <span className="font-bold text-cyan-300">WebOstic</span>.
                    We'll review your project and get back to you within{" "}
                    <span className="font-bold text-cyan-300">24 hours</span>.
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        budget: "",
                        Project_Details: "",
                        // plan: "",
                      });
                    }}
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
                <form
                  onSubmit={handleContactSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-2 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        placeholder="Your name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        maxLength={100}
                      />
                      {errs.name && (
                        <p className="mt-1 text-xs text-red-300">{errs.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-2 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        placeholder="you@email.com"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        maxLength={200}
                      />
                      {errs.email && (
                        <p className="mt-1 text-xs text-red-300">
                          {errs.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Phone (optional)
                      </label>
                      <input
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-2 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        placeholder="+91 ..."
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleContactChange}
                        maxLength={20}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-2 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        name="service"
                        value={contactForm.service}
                        onChange={handleContactChange}
                      >
                        <option value="">Select service...</option>
                        <option>Website Development</option>
                        <option>3D Website</option>
                        <option>UI/UX Design</option>
                        <option>Logo & Branding</option>
                        <option>SEO & Performance</option>
                        <option>E-Commerce</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-2  py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        name="budget"
                        value={contactForm.budget}
                        onChange={handleContactChange}
                      >
                        <option value="">Select budget...</option>
                        <option>₹2,999</option>
                        <option>₹3,999</option>
                        <option>₹4,999</option>
                        <option>₹10,999</option>
                        <option>₹19,999</option>
                        <option>₹24,999</option>
                      </select>
                    </div>

                    {/* <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Selected Plan
                      </label>
                      <input
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        placeholder="Auto-filled from pricing"
                        value={form.plan}
                        onChange={(e) => set("plan", e.target.value)}
                      />
                    </div> */}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      className="w-full min-h-[140px] resize-y rounded-xl border border-white/10 bg-[#141828] px-2 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                      placeholder="Describe your project, goals, and timeline..."
                      value={contactForm.Project_Details}
                      name="Project_Details"
                      onChange={handleContactChange}
                      maxLength={1200}
                    />
                    {errs.Project_Details && (
                      <p className="mt-1 text-xs text-red-300">
                        {errs.Project_Details}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-extrabold text-white hover:brightness-110 disabled:opacity-70"
                    >
                      {loading ? "Sending..." : "Send Message"}{" "}
                      <I.Send size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={openWA}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-400/25 bg-sky-400/10 px-5 py-3 text-sm font-extrabold text-sky-200 hover:bg-sky-400/15"
                    >
                      <I.WA size={18} /> WhatsApp
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-400">
                    🔒 We never share your information. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </FU>
        </div>
      </div>
      <ContactFAQ />
      <Toaster />
    </section>
  );
}
