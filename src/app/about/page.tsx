import { aboutSections } from "@/data/about";
import { Header } from "@/components/Header";
import { flags } from "@/lib/flags";

export default function AboutPage() {
  // If SHOW_ABOUT is true, this page shouldn't be accessible since About is on homepage
  // But if someone directly navigates here, we'll show it
  const navLinks = [
    { href: "/", label: "Home" },
    ...(flags.SHOW_CONTACT ? [{ href: "/contact", label: "Contact" }] : []),
  ];

  return (
    <div className="min-h-screen">
      <Header navLinks={navLinks} />

      <main className="text-white px-6 sm:px-12 lg:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold">About Sabai Wave</h1>
        <p className="text-white/60 mt-3 max-w-2xl">
          A lean engineering partner for teams that want speed without
          sacrificing quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {aboutSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/8 hover:scale-105 active:scale-105 active:border-white/20 active:bg-white/8 transition-all duration-300"
            >
              <h2 className="text-lg font-semibold">{section.title}</h2>
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
      </div>
    </main>
    </div>
  );
}
