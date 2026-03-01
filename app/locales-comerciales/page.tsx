import { MapPin, Phone, Store, Tag, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locales Comerciales",
  description: "Espacios comerciales disponibles para arriendo y venta en los proyectos de Constructora Pacal. Tu negocio ya tiene lugar.",
};

const locales = [
  {
    name: "Las Tinajas de Machalí",
    size: "20 m²",
    rent: "12 UF/mes",
    sale: "1.350 UF",
    address: "Arturo Prat 693, Machalí",
    phone: "+56 9 97575956",
    tags: ["Arriendo", "Venta"],
  },
  {
    name: "Lomas de Colchagua",
    size: "9 m²",
    rent: "6.45 UF/mes",
    sale: "400 UF",
    address: "Ramón Sanfurgo S/N, Santa Cruz",
    phone: "+56 9 97575956",
    tags: ["Arriendo", "Venta"],
  },
  {
    name: "Puerta Bosquemar I y II",
    size: "28 m²",
    rent: "14 UF/mes",
    sale: "1.300 UF",
    address: "Costa Tenglo S/N esq. Pirena, Puerto Montt",
    phone: "+56 9 64943878",
    tags: ["Arriendo", "Venta"],
  },
  {
    name: "Los Fundadores (Strip Center)",
    size: null,
    rent: "Desde 25 UF/mes",
    sale: null,
    address: "Juan Antonio Río 404, Coquimbo",
    phone: "+56 9 96813501",
    tags: ["Arriendo", "Strip Center"],
  },
];

const ventajas = [
  "Alta visibilidad peatonal",
  "Flujo residencial garantizado",
  "Estacionamientos disponibles",
  "Espacios modernos",
  "Ubicaciones estratégicas",
  "Ciudades de alto crecimiento",
];

export default function LocalesComercialesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Locales Comerciales"
            subtitle="Tu negocio ya tiene lugar — espacios comerciales disponibles para arriendo y venta en nuestros proyectos"
            light
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-main mb-4">
                Espacios pensados para tu negocio
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Nuestros condominios incluyen locales comerciales estratégicamente ubicados en las
                primeras plantas, con alto tráfico de residentes y visibilidad desde la calle. Ideales
                para emprendedores y negocios que buscan crecer en comunidades habitacionales consolidadas.
              </p>
              <p className="text-text-muted leading-relaxed">
                Contamos con 45 años de experiencia construyendo desde Arica hasta Puerto Montt, lo
                que nos permite ofrecer ubicaciones en ciudades con alto potencial comercial.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {ventajas.map((v) => (
                <div key={v} className="flex items-center gap-2.5 bg-surface rounded-xl p-3.5">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                    <Store className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-text-main">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locales disponibles */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-text-main text-center mb-10">
            Locales Disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locales.map((local) => (
              <div
                key={local.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {local.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-text-main mb-1">{local.name}</h3>

                <div className="flex items-center gap-1.5 text-sm text-text-muted mb-4">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{local.address}</span>
                </div>

                {/* Precios */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {local.size && (
                    <div className="bg-surface rounded-xl p-3 text-center">
                      <p className="text-xs text-text-muted mb-0.5">Superficie</p>
                      <p className="font-bold text-text-main">{local.size}</p>
                    </div>
                  )}
                  <div className="bg-surface rounded-xl p-3 text-center">
                    <p className="text-xs text-text-muted mb-0.5">Arriendo</p>
                    <p className="font-bold text-primary">{local.rent}</p>
                  </div>
                  {local.sale && (
                    <div className="bg-surface rounded-xl p-3 text-center">
                      <p className="text-xs text-text-muted mb-0.5">Venta</p>
                      <p className="font-bold text-primary">{local.sale}</p>
                    </div>
                  )}
                </div>

                <a
                  href={`https://wa.me/${local.phone.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-main mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-text-muted mb-8">
            Contáctanos y te informamos sobre nuevas disponibilidades en otros proyectos a lo largo de Chile.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-colors"
          >
            Solicitar Información
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
