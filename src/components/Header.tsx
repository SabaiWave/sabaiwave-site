"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LogoWordmark } from "@/components/Logo";

type NavLink = {
  href: string;
  label: string;
};

interface HeaderProps {
  navLinks: NavLink[];
}

export function Header({ navLinks }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 sm:px-12 lg:px-20 py-5">
        <Link href="/" aria-label="Sabai Wave home">
          <LogoWordmark />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#8A8F98] hover:text-[#EDEDED] transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-[#8A8F98] hover:text-[#EDEDED] p-2 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      <div
        className={[
          "md:hidden absolute top-[72px] left-0 right-0 z-50",
          "bg-[#0B0D12] border-b border-[#20242C]",
          "transition-all duration-200 ease-out overflow-hidden",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <nav className="flex flex-col px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#8A8F98] hover:text-[#EDEDED] transition-colors text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
