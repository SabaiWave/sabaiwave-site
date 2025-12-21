import { ctaDetails } from "@/data/cta";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import { flags } from "@/lib/flags";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaDetails.heading}
            </h2>

            <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              {flags.SHOW_CTA_EMAIL_BUTTON && (
                <a
                  href="mailto:info@sabaiwave.com?subject=Project%20inquiry%20-%20Sabai%20Wave"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white text-black hover:opacity-90 transition"
                >
                  Email Us
                </a>
              )}

              {flags.SHOW_CTA_SECONDARY_BUTTON && (
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-white/30 text-white hover:border-white/60 transition"
                >
                  View Services
                </a>
              )}
            </div>

            <p className="mt-4 text-sm text-white/70">
              Or email us directly:{" "}
              <a
                className="underline hover:text-white"
                href="mailto:info@sabaiwave.com"
              >
                info@sabaiwave.com
              </a>
            </p>

            {flags.SHOW_STORE_BUTTONS && (
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
                <AppStoreButton />
                <PlayStoreButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
