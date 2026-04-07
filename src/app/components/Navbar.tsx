"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/practicas", label: "Practicas" },
  { href: "/sectores", label: "Sectores" },
  { href: "/insights", label: "Insights" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 z-50 flex justify-between items-center w-full px-6 md:px-8 py-4 bg-surface/90 backdrop-blur-md">
        <Link
          href="/"
          className="text-xl font-bold font-outfit bg-gradient-to-r from-primary-container to-[#b4b09b] bg-clip-text text-transparent"
        >
          Altius Lexia
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary border-b border-primary-container pb-1"
                  : "text-body-muted hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2 font-bold hover:brightness-110 transition-all text-sm"
          >
            Contacto
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center gap-2 text-body-muted"
            aria-label="Menu"
          >
            <span className="text-sm font-mono uppercase tracking-widest">
              Menu
            </span>
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-2xl font-outfit font-semibold transition-colors ${
              pathname === link.href ? "text-primary" : "text-body-muted hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contacto"
          onClick={() => setOpen(false)}
          className="mt-8 bg-primary-container text-on-primary-container px-10 py-4 font-bold text-sm tracking-widest"
        >
          AGENDAR CONSULTA
        </Link>
      </div>
    </>
  );
}
