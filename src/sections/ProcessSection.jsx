import FU from "../components/FU";
import { PROCESS_STEPS } from "../data/siteData";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section id="process" className="py-8 sm:py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FU className="text-center mb-12">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-white">
              How We{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h2>
            <p className="mx-auto mt-1 max-w-3xl text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-slate-400">
              Our process is designed to make every stage clear, efficient, and
              stress-free - from planning to launch, with a strong focus on
              quality, speed, and seamless communication.
            </p>
          </FU>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 opacity-30 bg-gradient-to-b from-sky-500 to-cyan-300" />

          <div className="flex flex-col gap-8">
            {PROCESS_STEPS.map((s, i) => {
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
    </section>
  );
}
