import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <span className="text-sm text-slate-500">Candice Wang — AI Workflow Automation</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/work" className="hover:text-slate-300 transition-colors">Work</Link>
          <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          <a href="mailto:xmlwhl@gmail.com" className="hover:text-slate-300 transition-colors">
            xmlwhl@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
