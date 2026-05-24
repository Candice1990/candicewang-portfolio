import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Candice Wang — AI Workflow Automation",
  description:
    "I build AI agent systems and workflow automations that eliminate manual work and drive measurable business results. 15+ systems delivered.",
  openGraph: {
    title: "Candice Wang — AI Workflow Automation",
    description: "AI agents & automation that move your business forward.",
    url: "https://candicewang.info",
    siteName: "Candice Wang",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#06060e] text-slate-100">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
