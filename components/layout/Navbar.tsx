
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Building2 } from "lucide-react";

const navLinks = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/salas-de-venta", label: "Salas de Venta" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/locales-comerciales", label: "Locales Comerciales" },
  { href: "/pvc-sernac-pacal", label: "PVC SERNAC-PACAL" },
  { href: "/subsidio-y-financiamiento", label: "Subsidio y Financiamiento" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <span className="text-xl font-bold text-primary tracking-tight">PACAL</span>
              <span className="hidden sm:block text-[10px] text-text-muted leading-none -mt-0.5">
                Construyendo Calidad de Vida
              </span>
            </div>
          </Link>

          {/* Navegación */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-main hover:text-primary transition-colors rounded-lg hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Escritorio CTA */}
          <Link
            href="/contacto"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-light text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
          >
            Cotizar
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="Menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-text-main hover:text-primary hover:bg-surface rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-2 text-center px-5 py-3 bg-accent hover:bg-accent-light text-white font-semibold text-sm rounded-lg transition-colors"
              >
                Cotizar Ahora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
