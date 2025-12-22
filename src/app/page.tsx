"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { flags } from "@/lib/flags";
import { heroDetails } from "@/data/hero";
import { aboutSections } from "@/data/about";
import Image from "next/image";
import Link from "next/link";
import { LineShadowText } from "@/components/typography/LineShadowText";

const { SHOW_ABOUT, SHOW_CONTACT, SHOW_TRIAL_BADGE, ENABLE_ANIMATIONS } = flags;

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If About is on the homepage, allow scroll. Otherwise lock to one screen.
  const containerClass = SHOW_ABOUT
    ? "min-h-screen relative"
    : "h-screen overflow-hidden relative";

  // smooth-scroll to anchor when About is on-page (desktop + mobile)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.(
        'a[href="#about"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      e.preventDefault();
      setMobileMenuOpen(false);

      const el = document.getElementById("about");
      if (!el) return;

      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className={containerClass}>
      {/* Header Navigation */}
      <header className="relative z-50 flex items-center justify-between px-6 sm:px-12 lg:px-20 py-4">
        <Link href="/" className="flex items-center space-x-2" aria-label="Home">
          <Image
            src="/images/sbw-icon.png"
            alt="Logo"
            width={56}
            height={56}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
            priority
          />
          <span className="text-white/80 font-medium text-base sm:text-lg lg:text-xl">
            Sabai Wave
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* About: always visible; anchor if on-page, route if not */}
          {SHOW_ABOUT ? (
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
            >
              About us
            </a>
          ) : (
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
            >
              About us
            </Link>
          )}

          {SHOW_CONTACT && (
            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
            >
              Contact
            </Link>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            {SHOW_ABOUT ? (
              <a
                href="#about"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </a>
            ) : (
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </Link>
            )}

            {SHOW_CONTACT && (
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            )}
          </nav>
        </div>
      )}

      <main className="relative z-10">
        {/* HERO */}
        <section className="flex flex-col items-start justify-start sm:justify-center px-6 sm:px-12 lg:px-20 max-w-6xl pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
          {SHOW_TRIAL_BADGE && (
            <div className="mb-4 sm:mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2">
                <span className="text-white text-xs">
                  Try 14 days trial free
                </span>
              </div>
            </div>
          )}

          <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-balance">
            Modern IT Solutions for a Lean, Scalable{" "}
            <LineShadowText>Future</LineShadowText>
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-sm lg:text-xl mb-6 sm:mb-8 max-w-2xl text-pretty">
            {heroDetails.subheading}
          </p>

          <div className="flex items-center gap-3">
            {SHOW_CONTACT && (
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-semibold flex items-center gap-2 backdrop-blur-sm border border-teal-400/30 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                  Contact Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>
            )}

            {!SHOW_ABOUT && (
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-white/20 text-white/80 hover:text-white hover:bg-white/10 text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
                >
                  About Sabai Wave
                </Button>
              </Link>
            )}
          </div>
        </section>

        {/* About section with consistent spacing */}
        {SHOW_ABOUT && (
          <section
            id="about"
            className="px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto
                   pt-6 pb-16 sm:pb-20 scroll-mt-24"
          >
            <div className="mb-8">
              <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                About Sabai Wave
              </h2>
              <p className="text-white/60 mt-2 max-w-2xl">
                A lean engineering partner for teams that want speed without
                sacrificing quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
                >
                  <h3 className="text-white font-semibold text-lg">
                    {section.title}
                  </h3>
                  <p className="text-white/60 mt-2 text-sm leading-relaxed">
                    {section.description}
                  </p>

                  {section.bullets?.length ? (
                    <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc pl-5">
                      {section.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
