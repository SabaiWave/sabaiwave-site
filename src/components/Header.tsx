"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

interface HeaderProps {
  /**
   * Navigation links to display in the header.
   * Example: [{ href: "/", label: "Home" }, { href: "/about", label: "About us" }]
   */
  navLinks: NavLink[];
}

/**
 * Shared header component with mobile menu support.
 * Shows hamburger menu on mobile, full nav on desktop.
 */
export function Header({ navLinks }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 sm:px-12 lg:px-20 py-4">
        <Link href="/" className="flex items-center gap-0 group" aria-label="Home">
          <Image
            src="/images/sbw-icon.png"
            alt="Logo"
            width={56}
            height={56}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 group-hover:scale-105 transition-transform"
            priority
          />
          <span className="text-white/80 font-medium text-base sm:text-lg lg:text-xl group-hover:text-white transition-colors">
            Sabai Wave
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm lg:text-base"
            >
              {link.label}
            </Link>
          ))}
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
