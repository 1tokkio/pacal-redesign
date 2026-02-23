
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, FileText, Home, Key } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Explora",
    description: "Revisa nuestros proyectos y elige el que más se adapte a tus necesidades.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Cotiza",
    description: "Contáctanos para recibir toda la información de precios, subsidios y financiamiento.",
  },
  {
    icon: Home,
    step: "03",
    title: "Reserva",
    description: "Asegura tu departamento con una reserva. Te acompañamos en todo el proceso.",
  },
  {
    icon: Key,
    step: "04",
    title: "Recibe tu hogar",
    description: "Entrega inmediata en proyectos seleccionados. Tu nuevo hogar te espera.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Tu Camino al Hogar Propio"
          subtitle="Un proceso simple y transparente para que logres tu sueño"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Step number */}
              <span className="text-6xl font-black text-primary/5 absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                {step.step}
              </span>

              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-text-main">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-primary/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
