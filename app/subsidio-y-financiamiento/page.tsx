import { BadgeCheck, Calculator, FileText, HelpCircle, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Subsidio DS19",
    description:
      "El Decreto Supremo 19 permite acceder a viviendas de hasta 2.200 UF con subsidio estatal. Es uno de los programas habitacionales más utilizados en Chile.",
  },
  {
    icon: Calculator,
    title: "Ahorro Mínimo",
    description:
      "Se requiere un ahorro previo que puede partir desde 30 UF, dependiendo del tramo de subsidio al que postules.",
  },
  {
    icon: FileText,
    title: "Crédito Hipotecario",
    description:
      "Complementa tu subsidio con un crédito hipotecario. Te asesoramos con las principales instituciones financieras del país.",
  },
  {
    icon: HelpCircle,
    title: "Asesoría Completa",
    description:
      "Nuestro equipo te guía en todo el proceso: desde la postulación al subsidio hasta la firma de escritura y entrega de llaves.",
  },
];

const steps = [
  { step: "1", title: "Infórmate", desc: "Conoce los requisitos y montos del subsidio DS19." },
  { step: "2", title: "Ahorra", desc: "Junta el ahorro mínimo requerido en tu libreta." },
  { step: "3", title: "Postula", desc: "Postula al subsidio en las fechas de llamado SERVIU." },
  { step: "4", title: "Elige tu depto", desc: "Selecciona tu departamento en nuestros proyectos." },
  { step: "5", title: "Recibe tu hogar", desc: "Firma y recibe las llaves de tu nuevo hogar." },
];

export default function SubsidioPage() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Subsidio y Financiamiento"
            subtitle="Te ayudamos a acceder a tu vivienda propia con subsidio estatal y financiamiento accesible"
            light
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-main text-center mb-10">
            ¿Cómo funciona el proceso?
          </h2>
          <div className="space-y-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-text-main">{item.title}</h3>
                  <p className="text-sm text-text-muted mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/20"
            >
              Consultar por Subsidio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
