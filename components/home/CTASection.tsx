import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          ¿Listo para encontrar tu{" "}
          <span className="text-accent">nuevo hogar</span>?
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Contáctanos hoy y un ejecutivo te asesorará sin compromiso. Entrega
          inmediata disponible.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/25 text-base"
          >
            Cotizar Ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+56968320567"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur-sm border border-white/20 text-base"
          >
            <Phone className="w-5 h-5" />
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
