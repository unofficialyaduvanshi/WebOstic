import { useMemo, useState } from "react";
import FU from "../components/FU";
import { I } from "../components/Icon";
import { useToast } from "../components/Toast";
import StarRow from "../components/StarRow";
import { SAMPLE_REVIEWS } from "../data/siteData";

import { useEffect } from "react";

import { supabase } from "../lib/supabase";

export default function ReviewsSection() {
  const { show, Toaster } = useToast();

  const [sent, setSent] = useState(false);

  const [reviews, setReviews] = useState(SAMPLE_REVIEWS);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("approved", true) // new line
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Fetch reviews error:", error.message);
      return;
    }

    const userReviews = data || [];

    // merge SAMPLE + USER reviews safely (avoid duplicates)
    const merged = [
      ...SAMPLE_REVIEWS,
      ...userReviews.filter(
        (r) =>
          !SAMPLE_REVIEWS.some((s) => s.name === r.name && s.text === r.text),
      ),
    ];

    setReviews(merged);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const [form, setForm] = useState({ name: "", role: "", rating: 0, text: "" });
  const [hover, setHover] = useState(0);
  const [errs, setErrs] = useState({});
  const [busy, setBusy] = useState(false);

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.rating) e.rating = "Please select a rating";
    if (form.text.trim().length < 15) e.text = "Write at least 15 characters";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();

    const e = validate();
    setErrs(e);
    if (Object.keys(e).length) return;

    setBusy(true);

    const { error } = await supabase.from("reviews").insert([
      {
        name: form.name.trim(),
        role: form.role.trim() || "Client",
        rating: form.rating,
        text: form.text.trim(),
      },
    ]);

    setBusy(false);

    if (error) {
      show("❌ Failed to submit review");
      console.log(error);
      return;
    }

    setForm({ name: "", role: "", rating: 0, text: "" });
    setHover(0);
    setErrs({});

    fetchReviews();

    setSent(true);

    show("🎉 Thank you! Your review has been published.");

    setForm({ name: "", role: "", rating: 0, text: "" });
    setHover(0);
    setErrs({});

    fetchReviews(); // refresh list

    show("🎉 Thank you! Your review has been published.");
  };

  const initials = useMemo(
    () => (name) => (name?.[0] || "?").toUpperCase(),
    [],
  );

  return (
    <section id="reviews" className="py-6 sm:py-6">
      <div className="w-full px-5 sm:px-6 lg:px-14">
        <FU className="text-center mb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-white">
            What People{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7">
            Real feedback from clients who trusted Webostic with their digital
            presence.
          </p>
        </FU>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {reviews.map((r, i) => (
            <FU key={`${r.name}-${i}`} delay={(i % 3) * 0.06}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-2xl hover:shadow-sky-500/10">
                <div className="mb-4 flex items-start justify-between">
                  <StarRow n={r.rating} />
                  <span className="text-[11px] italic text-slate-400">
                    {r.role}
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-200/80 italic">
                  “{r.text}”
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-extrabold">
                    {initials(r.name)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.role}</p>
                  </div>
                </div>
              </div>
            </FU>
          ))}
        </div>

        {/* Form */}
        <FU>
          <div className="mx-auto max-w-2xl rounded-3xl border border-sky-400/25 bg-sky-500/10 p-7 sm:p-10 backdrop-blur-xl">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-400/20 border border-sky-400/20">
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

                <h3 className="mt-6 text-3xl font-extrabold text-white">
                  Review Submitted!
                </h3>

                <p className="mt-3 text-sm text-slate-300">
                  Thanks for sharing your feedback about Webostic.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-300 hover:bg-cyan-400/10 hover:text-white"
                >
                  Write Another Review <I.Send size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-[11px] font-extrabold tracking-widest uppercase text-cyan-200">
                    Share Your Experience
                  </div>
                  <h3 className="mt-4 text-[clamp(1.2rem,2.5vw,1.6rem)] font-extrabold text-white tracking-tight">
                    Leave Us a Review
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Worked with us? We'd love your honest feedback.
                  </p>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-4">
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Rating *
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          type="button"
                          className="p-1"
                          onMouseEnter={() => setHover(n)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => set("rating", n)}
                          aria-label={`Rate ${n} stars`}
                        >
                          <I.Star
                            size={28}
                            style={{
                              fill:
                                n <= (hover || form.rating)
                                  ? "#fbbf24"
                                  : "transparent",
                              color:
                                n <= (hover || form.rating)
                                  ? "#fbbf24"
                                  : "rgba(255,255,255,0.18)",
                            }}
                          />
                        </button>
                      ))}
                    </div>
                    {errs.rating && (
                      <p className="mt-1 text-xs text-red-300">{errs.rating}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        placeholder="e.g. Sarah Johnson"
                        value={form.name}
                        maxLength={80}
                        onChange={(e) => set("name", e.target.value)}
                      />
                      {errs.name && (
                        <p className="mt-1 text-xs text-red-300">{errs.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Your Role
                      </label>
                      <input
                        className="w-full rounded-xl border border-white/10 bg-[#141828] px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                        placeholder="e.g. Startup Founder"
                        value={form.role}
                        maxLength={80}
                        onChange={(e) => set("role", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Your Review *
                    </label>
                    <textarea
                      className="w-full min-h-[120px] resize-y rounded-xl border border-white/10 bg-[#141828] px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-sky-500/30"
                      placeholder="Tell others about your experience with Webostic..."
                      value={form.text}
                      maxLength={600}
                      onChange={(e) => set("text", e.target.value)}
                    />
                    {errs.text && (
                      <p className="mt-1 text-xs text-red-300">{errs.text}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-extrabold text-white hover:brightness-110 disabled:opacity-70"
                  >
                    {busy ? "Submitting..." : "Submit Review"}{" "}
                    <I.Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </FU>
      </div>

      <Toaster />
    </section>
  );
}
