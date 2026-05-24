import { notFound } from "next/navigation";
import Link from "next/link";
import { cases, getCaseBySlug } from "@/data/cases";
import WorkflowDemo from "@/components/WorkflowDemo";

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.tag} — Candice Wang`,
    description: c.subheadline,
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-10"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Work
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-5"
            style={{ backgroundColor: `${c.color}15`, color: c.color }}
          >
            {c.tag}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            {c.headline}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            {c.subheadline}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {c.metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-xl border border-[#1e1e2e] bg-[#0e0e1a] text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: c.color }}>
                {m.value}
              </div>
              <div className="text-xs text-slate-500 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Problem */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            The Problem
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">{c.problem}</p>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            The Solution
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">{c.solution}</p>
        </div>

        {/* Workflow Demo */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            Workflow in Action
          </h2>
          <WorkflowDemo steps={c.workflowSteps} accentColor={c.color} />
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {c.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg border border-[#1e1e2e] bg-[#0e0e1a] text-xs text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-14">
          <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            Client Feedback
          </h2>
          <div
            className="rounded-2xl p-7 border relative overflow-hidden"
            style={{ borderColor: `${c.color}25`, backgroundColor: c.accentBg }}
          >
            <div
              className="absolute top-4 left-6 text-6xl leading-none opacity-20 font-serif"
              style={{ color: c.color }}
            >
              &ldquo;
            </div>
            <p className="relative text-slate-200 leading-relaxed text-base italic mb-5 pt-4">
              {c.testimonial.quote}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: c.color }}
              >
                {c.testimonial.author[0]}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-200">{c.testimonial.author}</div>
                <div className="text-xs text-slate-500">{c.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-[#1e1e2e] bg-[#0e0e1a] p-8 text-center">
          <h3 className="text-xl font-bold mb-2">
            Want something like this for your business?
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Every system I build starts with understanding your specific workflow.
            Let&apos;s talk about what&apos;s slowing you down.
          </p>
          <a
            href="mailto:xmlwhl@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-medium transition-all hover:shadow-lg"
            style={{ backgroundColor: c.color }}
          >
            Get in touch — xmlwhl@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
}
