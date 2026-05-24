import Link from "next/link";
import { cases } from "@/data/cases";

export const metadata = {
  title: "Work — Candice Wang",
  description: "AI workflow automation case studies — real systems, real business results.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Systems that changed how businesses operate.
          </h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Every project below was built to solve a real business problem —
            not to demonstrate technology. The results speak for themselves.
          </p>
        </div>

        {/* Case grid */}
        <div className="space-y-6">
          {cases.map((c, i) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="group block p-7 md:p-8 rounded-2xl border border-[#1e1e2e] bg-[#0e0e1a] hover:border-white/15 transition-all hover:-translate-y-0.5"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Index */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl border border-[#1e1e2e] text-slate-600 text-sm font-mono flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${c.color}15`, color: c.color }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-200 group-hover:text-white transition-colors mb-2 leading-snug">
                    {c.headline}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-2xl">
                    {c.subheadline}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6 mb-5">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-bold" style={{ color: c.color }}>
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-1.5">
                    {c.techStack.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs border border-[#1e1e2e] text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                    {c.techStack.length > 6 && (
                      <span className="px-2 py-0.5 rounded text-xs border border-[#1e1e2e] text-slate-600">
                        +{c.techStack.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center self-center text-slate-700 group-hover:text-slate-400 transition-all group-hover:translate-x-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-6">
            Have a workflow problem I haven&apos;t listed here?
          </p>
          <a
            href="mailto:xmlwhl@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Tell me about your project
          </a>
        </div>
      </div>
    </div>
  );
}
