import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white px-6 sm:px-12 lg:px-20 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold">Contact</h1>
        <p className="text-white/60 mt-3">
          The fastest way to reach me is email.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <div className="text-white/80 text-sm">Email</div>
          <div className="mt-2">
            <a
              className="text-white underline underline-offset-4 hover:text-white/90"
              href="mailto:info@sabaiwave.com"
            >
              info@sabaiwave.com
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href="/about"
              className="text-white/80 hover:text-white underline underline-offset-4"
            >
              Learn more about how we work →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
