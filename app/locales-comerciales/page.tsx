import { Store, MapPin, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

export default function LocalesComercialesPage() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Locales Comerciales"
            subtitle="Espacios comerciales disponibles en nuestros proyectos habitacionales"
            light
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 lg:p-16">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
              <Store className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-main mb-4">
              Oportunidades Comerciales
            </h2>
            <p className="text-text-muted leading-relaxed max-w-2xl mx-auto mb-4">
              Nuestros condominios incluyen locales comerciales estratégicamente
              ubicados en las primeras plantas, ideales para emprendedores y
              negocios que buscan alta afluencia de público residencial.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Alta visibilidad", "Flujo residencial garantizado", "Estacionamientos", "Espacios modernos"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-sm text-text-main"
                  >
                    <MapPin className="w-3 h-3 text-primary" />
                    {item}
                  </span>
                )
              )}
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-colors"
            >
              Solicitar Información
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
