import Link from "next/link";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  empresa: [
    { href: "/quienes-somos", label: "Quiénes Somos" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/locales-comerciales", label: "Locales Comerciales" },
  ],
  servicios: [
    { href: "/salas-de-venta", label: "Salas de Venta" },
    { href: "/subsidio-y-financiamiento", label: "Subsidio y Financiamiento" },
    { href: "/contacto", label: "Contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Presentación empresa */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold tracking-tight">PACAL</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Más de 45 años construyendo calidad de vida de Arica a Puerto Montt.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm font-bold"
              >
                f
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm font-bold"
              >
                ig
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors text-sm font-bold"
              >
                X
              </a>
            </div>
          </div>

          {/* Links - Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>Presencia de Arica a Puerto Montt</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <span>+56 9 68320567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <span>contacto@pacal.cl</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Constructora Pacal. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Imágenes y textos son de carácter referencial e ilustrativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
