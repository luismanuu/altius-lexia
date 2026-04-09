import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Legal Notice" },
  { href: "/practicas", label: "Sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/15 w-full px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <img src="/images/logo.webp" alt="Altius Lexia" className="h-6 w-auto" />
          <p className="text-sm font-outfit text-body-muted">
            &copy; 2024 Altius Lexia. Architectural Legal Systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-widest text-body-muted hover:text-primary-container transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
