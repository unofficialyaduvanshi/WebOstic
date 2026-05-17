import FU from "../components/FU";
import { TRUST_ITEMS } from "../data/siteData";

export default function TrustSection() {
  return (
    <section id="trust" className="py-6 sm:py-8 bg-[#0f1320]/40">
      {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="w-full px-14"> */}
      <div className="w-full px-5 sm:px-6 lg:px-8">
        <FU className="text-center mb-10">
          <h2 className="text-[clamp(1.3rem,2.4vw,1.5rem)] font-extrabold tracking-tight text-white">
            WHY CHOOSE{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              US
            </span>
          </h2>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-white">
            Why Businesses{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Trust Webostic
            </span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7">
            We go beyond writing code we engineer business solutions. Our
            priority is delivering measurable ROI, exceptional speed, and
            future-proof scalability.
          </p>
        </FU>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map(({ Icon, title, desc }, i) => (
            <FU key={title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-2xl hover:shadow-sky-500/10">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{desc}</p>
              </div>
            </FU>
          ))}
        </div>
      </div>
    </section>
  );
}
