"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#what-we-build", label: "What we build" },
];

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) return;

    setState("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0D12]">
      <Header navLinks={navLinks} />

      <main className="flex-1 px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
        <div className="max-w-xl">
          <h1
            className="text-[#EDEDED] font-bold leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            Let&apos;s talk
          </h1>
          <p className="text-[#8A8F98] text-lg mb-10 text-pretty">
            Tell me what you&apos;re working on. I&apos;ll get back to you within one business day.
          </p>

          {/* Email */}
          <div className="mb-10">
            <p className="text-[#8A8F98] text-sm mb-1">Or email directly</p>
            <a
              href="mailto:info@sabaiwave.com"
              className="text-[#2DD4BF] hover:text-[#EDEDED] transition-colors font-medium"
            >
              info@sabaiwave.com
            </a>
          </div>

          {/* Form */}
          {!FORMSPREE_ID ? (
            <p className="text-[#8A8F98] text-sm border border-[#20242C] rounded-lg p-4">
              Contact form not configured.{" "}
              <a href="mailto:info@sabaiwave.com" className="text-[#2DD4BF] hover:underline">
                Email us directly.
              </a>
            </p>
          ) : state === "success" ? (
            <div className="border border-[#2DD4BF]/30 bg-[#2DD4BF]/5 rounded-lg p-6">
              <p className="text-[#EDEDED] font-medium mb-1">Message sent.</p>
              <p className="text-[#8A8F98] text-sm">I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#8A8F98] text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full bg-[#13161C] border border-[#20242C] rounded-lg px-4 py-3 text-[#EDEDED] placeholder-[#8A8F98]/50 text-sm focus:outline-none focus:border-[#2DD4BF] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#8A8F98] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full bg-[#13161C] border border-[#20242C] rounded-lg px-4 py-3 text-[#EDEDED] placeholder-[#8A8F98]/50 text-sm focus:outline-none focus:border-[#2DD4BF] transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#8A8F98] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#13161C] border border-[#20242C] rounded-lg px-4 py-3 text-[#EDEDED] placeholder-[#8A8F98]/50 text-sm focus:outline-none focus:border-[#2DD4BF] transition-colors resize-none"
                  placeholder="What are you working on?"
                />
              </div>

              {state === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Try emailing{" "}
                  <a href="mailto:info@sabaiwave.com" className="underline">
                    info@sabaiwave.com
                  </a>{" "}
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex items-center gap-2 bg-[#2DD4BF] text-[#0B0D12] font-semibold px-7 py-3 rounded-lg text-sm hover:bg-[#22B8A6] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
              >
                {state === "submitting" ? "Sending…" : "Send message"}
                {state !== "submitting" && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                )}
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
