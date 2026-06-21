import { footerConfig } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-[#20242C] bg-[#13161C]">
      <div className="px-6 sm:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <a
          href={`mailto:${footerConfig.email}`}
          className="text-[#8A8F98] hover:text-[#2DD4BF] transition-colors text-sm font-medium"
        >
          {footerConfig.email}
        </a>

        {footerConfig.social.length > 0 && (
          <nav className="flex items-center gap-4" aria-label="Social links">
            {footerConfig.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8F98] hover:text-[#EDEDED] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <p className="text-[#8A8F98] text-sm">{footerConfig.copyright}</p>
      </div>
    </footer>
  );
}
