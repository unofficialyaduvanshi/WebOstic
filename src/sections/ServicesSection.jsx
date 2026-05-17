import FU from "../components/FU";
import { I } from "../components/Icon";
import { SERVICES } from "../data/siteData";
import { useNavigate } from "react-router-dom";
import {
  Monitor,
  PenTool,
  BarChart3,
  ArrowRight,
  Check,
  Code2,
  Globe,
  Zap,
  Cpu,
  Rocket,
  Layers,
  Clock,
  Star,
  ShieldCheck,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  Award,
  Target,
} from "lucide-react";

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section
      // id="services"
      className="py-4 sm:py-8 bg-[#0f1320]/40"
    >
      {/* <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="w-full px-14"> */}
      <div className="w-full px-5 sm:px-6 lg:px-8">
        <FU className="text-center mb-14">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-white">
            What We Do{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <h2 className="text-[clamp(1.3rem,2.4vw,1.5rem)] font-extrabold tracking-tight text-white">
            Full-Service{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-slate-300 leading-7">
            Everything your business needs to dominate online. Web development,
            branding, and SEO expertly integrated under one roof.
          </p>
        </FU>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {SERVICES.map(({ Icon, title, desc, features }, i) => (
            <FU key={title} delay={i * 0.06}>
              {/* <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/10"> */}
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-sky-400/30 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_18px_50px_rgba(0,0,0,0.55),0_0_70px_rgba(56,189,248,0.18)] ">
                <div />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-300 mb-5">
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{desc}</p>
                <ul className="space-y-2 mt-4">
                  {features.map((f, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-sky-400 shrink-0"
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/pricing")}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:translate-x-1 hover:text-cyan-200"
                >
                  Learn more <I.Arrow size={14} className="mt-[3px]" />
                </button>
              </div>
            </FU>
          ))}
        </div>
      </div>
    </section>
  );
}
