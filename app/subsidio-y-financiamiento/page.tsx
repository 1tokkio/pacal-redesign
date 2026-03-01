"use client";

import { useState } from "react";
import {
  BadgeCheck,
  CreditCard,
  Users,
  Home,
  ArrowRight,
  ChevronDown,
  PhoneCall,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

const subsidios = [
  {
    id: "ds49",
    badge: "DS49",
    badgeColor: "bg-green-100 text-green-800",
    title: "Subsidio DS49",
    subtitle: "Sector Vulnerable",
    description:
      "Diseñado para familias en situación de vulnerabilidad social que no tienen vivienda propia. Financia el 100% del valor de la vivienda.",
    details: [
      { label: "Ahorro mínimo requerido", value: "10 UF" },
      { label: "Valor máximo de vivienda", value: "Hasta 1.100 UF" },
      { label: "Financiamiento", value: "100% por el Estado" },
      { label: "Crédito hipotecario", value: "No requerido" },
    ],
    requisitos: [
      "No tener vivienda propia",
      "Pertenecer al 40% más vulnerable del RSH",
      "Contar con el ahorro mínimo de 10 UF",
      "No haber recibido subsidio habitacional antes",
    ],
    icon: Users,
  },
  {
    id: "ds1",
    badge: "DS1",
    badgeColor: "bg-blue-100 text-blue-800",
    title: "Subsidio DS1",
    subtitle: "Clase Media",
    description:
      "Para familias de clase media sin vivienda propia y con capacidad de ahorro. Combina ahorro familiar, aporte estatal y recursos propios o crédito hipotecario.",
    details: [
      { label: "Título I Tramo 1", value: "Hasta 1.100 UF (sin crédito)" },
      { label: "Título I Tramo 2", value: "Hasta 1.400 UF" },
      { label: "Título II", value: "Hasta 2.200 UF" },
      { label: "Ahorro mínimo", value: "Según tramo" },
    ],
    requisitos: [
      "No tener vivienda propia",
      "Pertenecer al 90% del Registro Social de Hogares",
      "Capacidad de ahorro demostrable",
      "Postular en períodos habilitados por SERVIU",
    ],
    icon: Home,
  },
  {
    id: "ds19",
    badge: "DS19",
    badgeColor: "bg-amber-100 text-amber-800",
    title: "Subsidio DS19",
    subtitle: "Integración Social",
    description:
      "Pacal es líder nacional en proyectos DS19, con la mayor variedad de opciones desde Arica hasta Puerto Montt. Permite acceder a viviendas de integración social con o sin crédito hipotecario.",
    details: [
      { label: "Sin crédito hipotecario", value: "Hasta 1.100 UF (regiones especiales 1.200 UF)" },
      { label: "Con DS1 Título I Tramo 2", value: "Hasta 1.400 UF" },
      { label: "Con DS1 Título II", value: "Hasta 2.200 UF" },
      { label: "Gastos operacionales", value: "100% cubiertos (sin crédito)" },
    ],
    requisitos: [
      "Contar con subsidio DS49 o DS1 vigente",
      "O pertenecer al 90% del RSH (sin subsidio previo)",
      "Seleccionar proyecto DS19 habilitado",
      "Complementar con crédito según tramo",
    ],
    icon: BadgeCheck,
  },
  {
    id: "ds116",
    badge: "DS116",
    badgeColor: "bg-purple-100 text-purple-800",
    title: "Subsidio DS116",
    subtitle: "Clase Media – Certificados Anteriores",
    description:
      "Dirigido a familias con certificado de subsidio expedido antes del 31 de diciembre de 2014, y a familias sin subsidio que cumplan los requisitos del programa.",
    details: [
      { label: "Público objetivo", value: "Clase media sin vivienda" },
      { label: "Certificados anteriores", value: "Hasta el 31/12/2014" },
      { label: "Más información", value: "MINVU / SERVIU regional" },
      { label: "Postulación", value: "En llamados habilitados" },
    ],
    requisitos: [
      "Tener certificado de subsidio emitido antes del 31/12/2014",
      "O ser familia sin subsidio que cumpla los requisitos",
      "No tener vivienda propia",
      "Consultar requisitos actualizados en SERVIU",
    ],
    icon: CreditCard,
  },
];

const financiamiento = [
  {
    title: "Pie en Cuotas",
    description:
      "Paga el pie de tu propiedad en cuotas cómodas mediante tarjeta de crédito. Disponible a través de Transbank en todas nuestras salas de venta y mediante Webpay en el Portal de Clientes.",
    icon: CreditCard,
  },
  {
    title: "Crédito Hipotecario",
    description:
      "Te asesoramos con las principales instituciones financieras del país para complementar tu subsidio con un crédito hipotecario a tu medida. Evaluamos tu situación sin compromiso.",
    icon: Home,
  },
];

const pasos = [
  { n: "1", title: "Infórmate", desc: "Conoce los programas de subsidio y cuál aplica a tu situación familiar." },
  { n: "2", title: "Ahorra", desc: "Junta el ahorro mínimo requerido en tu libreta o cuenta de ahorro." },
  { n: "3", title: "Postula", desc: "Postula al subsidio en las fechas habilitadas por SERVIU en tu región." },
  { n: "4", title: "Elige tu depto", desc: "Selecciona tu departamento entre los proyectos disponibles con tu subsidio." },
  { n: "5", title: "Firma y recibe", desc: "Firma la escritura y recibe las llaves de tu nuevo hogar." },
];

const faqs = [
  {
    q: "¿Qué es el Registro Social de Hogares (RSH) y cómo afecta mi postulación?",
    a: "El RSH es el sistema que el Estado usa para identificar a las familias según su situación socioeconómica. Determina a qué subsidio puedes postular: DS49 para el 40% más vulnerable, DS1 o DS19 para el 90%. Puedes consultar tu puntaje en registrosocial.gob.cl.",
  },
  {
    q: "¿Puedo postular a un subsidio si tengo deudas o DICOM?",
    a: "El subsidio habitacional lo otorga el Estado (SERVIU) y no revisa historial crediticio. Sin embargo, si necesitas complementar con crédito hipotecario, el banco sí evaluará tu comportamiento financiero. Te recomendamos regularizar deudas antes de postular al crédito.",
  },
  {
    q: "¿Cuánto tiempo demora el proceso desde que postulo hasta recibir mi departamento?",
    a: "El proceso completo puede tomar entre 6 y 18 meses dependiendo del estado del proyecto, la vigencia de tu subsidio y los trámites de crédito hipotecario. Proyectos con entrega inmediata pueden reducir este plazo significativamente.",
  },
  {
    q: "¿Puedo usar mi subsidio en cualquier proyecto de Pacal?",
    a: "No todos los proyectos están habilitados para todos los subsidios. Cada proyecto tiene aprobados ciertos programas (DS19, DS1, DS49, etc.). Puedes consultar a nuestros ejecutivos cuáles proyectos están disponibles para tu tipo de subsidio.",
  },
  {
    q: "¿Qué pasa si pierdo mi subsidio antes de escriturar?",
    a: "Los subsidios tienen vigencia limitada (generalmente 12 a 24 meses). Si el subsidio vence antes de la escrituración, deberás renovarlo o postular nuevamente. Por eso es importante elegir proyectos con fecha de entrega compatible con tu subsidio.",
  },
  {
    q: "¿Puedo pagar el pie en cuotas?",
    a: "Sí. Pacal ofrece la opción de pagar el pie en cuotas mediante tarjeta de crédito a través de Transbank en nuestras salas de venta, o vía Webpay en el Portal de Clientes. Consulta las condiciones disponibles con nuestros ejecutivos.",
  },
  {
    q: "¿Qué documentos necesito para postular?",
    a: "Generalmente se requiere: cédula de identidad vigente, liquidaciones de sueldo o acreditación de ingresos, libreta de ahorro con el monto mínimo, certificado del RSH y en algunos casos certificado de matrimonio o nacimiento de hijos. Los requisitos pueden variar según el subsidio.",
  },
  {
    q: "¿Puedo postular si trabajo de manera independiente o informal?",
    a: "Sí. Puedes acreditar ingresos mediante declaraciones de impuestos (Formulario 22 o 29), boletas de honorarios o declaración jurada ante notario. Consúltanos y te ayudamos a preparar la documentación.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-surface transition-colors"
      >
        <span className="font-semibold text-text-main text-sm">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-text-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function SubsidioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Subsidio y Financiamiento"
            subtitle="Te ayudamos a acceder a tu vivienda propia con subsidio estatal y financiamiento accesible"
            light
          />
        </div>
      </section>

      {/* Subsidios */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-text-main text-center mb-3">
            Programas de Subsidio
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-2xl mx-auto">
            Contamos con proyectos habilitados para todos los principales programas habitacionales del Estado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidios.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-1 ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                    <h3 className="font-bold text-text-main leading-tight">{s.title}</h3>
                    <p className="text-xs text-text-muted">{s.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-4">{s.description}</p>

                {/* Detalles */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {s.details.map((d) => (
                    <div key={d.label} className="flex justify-between items-center bg-surface rounded-lg px-3 py-2 text-sm">
                      <span className="text-text-muted">{d.label}</span>
                      <span className="font-semibold text-text-main text-right ml-2">{d.value}</span>
                    </div>
                  ))}
                </div>

                {/* Requisitos */}
                <div className="mt-auto">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Requisitos principales</p>
                  <ul className="space-y-1">
                    {s.requisitos.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-text-muted">
                        <span className="text-primary font-bold mt-0.5">·</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financiamiento adicional */}
      <section className="py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-text-main text-center mb-10">
            Opciones de Financiamiento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financiamiento.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-text-main text-center mb-10">
            ¿Cómo es el proceso?
          </h2>
          <div className="space-y-3">
            {pasos.map((p) => (
              <div key={p.n} className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {p.n}
                </div>
                <div>
                  <h3 className="font-bold text-text-main">{p.title}</h3>
                  <p className="text-sm text-text-muted mt-0.5">{p.desc}</p>
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

      {/* FAQ */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-main mb-3">
              Preguntas Frecuentes
            </h2>
            <p className="text-text-muted">
              Resolvemos las dudas más comunes sobre subsidios y financiamiento habitacional.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          {/* ¿Tienes más preguntas? */}
          <div className="mt-10 bg-primary rounded-2xl p-6 text-center text-white">
            <h3 className="text-lg font-bold mb-2">¿Tienes más preguntas?</h3>
            <p className="text-white/80 text-sm mb-5">
              Nuestros ejecutivos te asesoran sin costo ni compromiso en todo el proceso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Hablar con un ejecutivo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
