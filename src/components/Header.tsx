'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from "next/image";
import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";
import { flags } from "@/lib/flags";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!flags.SHOW_HEADER) return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  // Section → flag mapping
  const sectionVisibility: Record<string, boolean> = {
    Pricing: flags.SHOW_PRICING,
    Testimonials: flags.SHOW_TESTIMONIALS,
    FAQ: flags.SHOW_FAQ,
    Stats: flags.SHOW_STATS,
  };

  const visibleMenuItems = menuItems.filter(
    (item) => sectionVisibility[item.text] !== false
  );

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Logo */}
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

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {visibleMenuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-foreground-accent transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}

            {flags.SHOW_CTA && (
              <li>
                <Link
                  href="#cta"
                  className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
                >
                  Start a Conversation
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-primary text-black rounded-full w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <HiOutlineXMark /> : <HiBars3 />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <Transition show={isOpen}>
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {visibleMenuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  onClick={toggleMenu}
                  className="block text-foreground"
                >
                  {item.text}
                </Link>
              </li>
            ))}

            {flags.SHOW_CTA && (
              <li>
                <Link
                  href="#cta"
                  onClick={toggleMenu}
                  className="bg-primary px-5 py-2 rounded-full w-fit block"
                >
                  Get Started
                </Link>
              </li>
            )}
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
