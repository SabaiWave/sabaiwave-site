import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { heroDetails } from "@/data/hero";
import { whatWeBuildItems } from "@/data/whatWeBuild";

const navLinks = [
  { href: "#what-we-build", label: "What we build" },
  { href: "/contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col flex-1">
        <Header navLinks={navLinks} />

        <main className="flex-1">
          {/* ── Hero ── */}
          <section className="px-6 sm:px-12 lg:px-20 pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 max-w-5xl">
            <h1
              className="text-[#EDEDED] font-bold leading-[1.05] tracking-tight text-balance mb-6"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
            >
              We build software.{" "}
              <span className="gradient-text">You build the future.</span>
            </h1>

            <p className="text-[#8A8F98] text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 text-pretty">
              {heroDetails.subheading}
            </p>

            <Link
              href={heroDetails.primaryCta.href}
              className="inline-flex items-center gap-1.5 bg-[#2DD4BF] text-[#0B0D12] font-semibold px-7 py-3 rounded-lg text-base hover:bg-[#22B8A6] hover:shadow-[0_0_24px_rgba(45,212,191,0.35)] transition-all duration-200 group"
            >
              {heroDetails.primaryCta.label}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </section>

          {/* ── What We Build ── */}
          <section
            id="what-we-build"
            className="px-6 sm:px-12 lg:px-20 pb-24 sm:pb-32 scroll-mt-24"
          >
            <div className="max-w-5xl">
              <h2
                className="text-[#EDEDED] font-semibold mb-10 text-balance"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                What we build
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#20242C] rounded-xl overflow-hidden border border-[#20242C]">
                {whatWeBuildItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="bg-[#0B0D12] hover:bg-[#13161C] transition-colors duration-200 p-8 flex gap-5"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Icon
                          className="w-5 h-5 text-[#2DD4BF]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-[#EDEDED] font-medium text-base mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#8A8F98] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
