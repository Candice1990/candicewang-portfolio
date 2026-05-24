export const metadata = {
  title: "Contact — Candice Wang",
  description: "Get in touch to discuss your AI automation project.",
};

const faqs = [
  {
    q: "What kinds of projects do you take on?",
    a: "I specialize in AI agent workflows and business automation — anything from sales pipeline automation and CRM integrations to internal knowledge systems and e-commerce operations. If your team is doing repetitive work that follows a pattern, it's likely automatable.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most systems go from scoping to a working MVP in 2–4 weeks. More complex multi-agent workflows or enterprise integrations typically take 4–8 weeks. I focus on getting something working in your hands quickly, then iterating.",
  },
  {
    q: "Do I need to know anything technical to work with you?",
    a: "Not at all. I translate business problems into technical solutions — you describe the outcome you want, I figure out how to build it. You'll always know what's being built and why, without needing to understand the code.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A clear description of the current manual process you want to automate, what systems or tools are involved (CRM, email, spreadsheets, etc.), and what success looks like. We start with a scoping call and go from there.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Tell me what&apos;s slowing your business down.
          </h1>
          <p className="text-slate-400 leading-relaxed text-lg">
            I respond to every message personally. If what you&apos;re dealing with can be
            automated, I&apos;ll tell you how — and give you an honest estimate of
            what it would take.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 mb-20">
          {/* Contact card */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-[#1e1e2e] bg-[#0e0e1a] p-8">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  C
                </div>
                <div>
                  <div className="font-semibold text-slate-200">Candice Wang</div>
                  <div className="text-sm text-slate-500">AI Workflow Automation Engineer</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs text-green-400">Available for new projects</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:xmlwhl@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1e1e2e] hover:border-indigo-500/40 hover:bg-white/[0.02] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-sm flex-shrink-0">
                    ✉️
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      xmlwhl@gmail.com
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1e1e2e] hover:border-indigo-500/40 hover:bg-white/[0.02] transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 text-sm flex-shrink-0">
                    💼
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 mb-0.5">Upwork</div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      View my profile
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1e1e2e]">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Best way to reach me: email with a brief description of what you&apos;re
                  trying to automate. I typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* What to include */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-slate-300 mb-4">
              Helpful to include in your message
            </h3>
            <div className="space-y-3">
              {[
                "What manual process is taking too much time",
                "What tools or systems are involved",
                "Roughly how often the work happens",
                "What success would look like",
                "Your rough timeline and budget range",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="w-5 h-5 rounded-full border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl border border-[#1e1e2e] bg-[#0e0e1a]">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
