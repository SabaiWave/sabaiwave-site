import Link from "next/link";
import Image from "next/image";

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
 * Shared header component for pages with simple navigation.
 * For complex headers with mobile menus or conditional logic, implement inline.
 */
export function Header({ navLinks }: HeaderProps) {
  return (
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

      <nav className="flex items-center space-x-6 lg:space-x-8">
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
    </header>
  );
}
