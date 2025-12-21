import Link from 'next/link';
import React from "react";
import Image from "next/image";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { flags } from "@/lib/flags";

const Footer: React.FC = () => {
  if (!flags.SHOW_FOOTER) return null;

  // Map footer link text → feature flag
  const sectionVisibility: Record<string, boolean> = {
    Pricing: flags.SHOW_PRICING,
    Testimonials: flags.SHOW_TESTIMONIALS,
    FAQ: flags.SHOW_FAQ,
    Stats: flags.SHOW_STATS,
  };

  const visibleQuickLinks = footerDetails.quickLinks.filter(
    (link) => sectionVisibility[link.text] !== false
  );

  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/sbw-icon.png"
              alt="Sabai Wave logo"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
            <span className="manrope text-xl font-semibold text-foreground">
              {siteDetails.siteName}
            </span>
          </Link>

          <p className="mt-3.5 text-foreground-accent">
            {footerDetails.subheading}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-foreground-accent">
            {visibleQuickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Phone: {footerDetails.telephone}
            </a>
          )}
        </div>
      </div>

      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
