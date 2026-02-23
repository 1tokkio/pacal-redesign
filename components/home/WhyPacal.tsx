
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Handshake, Hammer } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: Shield,
    title: "Respaldo y Confianza",
    description:
      "Más de 45 años de trayectoria en el mercado inmobiliario chileno con proyectos exitosos.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description:
      "Materiales de primera calidad y terminaciones premium en cada uno de nuestros proyectos.",
  },
  {
    icon: Handshake,
    title: "Compromiso con el Cliente",
    description:
      "Acompañamiento personalizado desde la cotización hasta la entrega de tu departamento.",
  },
  {
    icon: Hammer,
    title: "Innovación Constructiva",
    description:
      "Tecnología de punta y diseño moderno adaptado a las necesidades de las familias chilenas.",
  },
];

export default function WhyPacal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-surface px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="¿Por qué elegir Pacal?"
          subtitle="Conoce lo que nos diferencia como constructora líder en Chile"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary flex items-center justify-center transition-colors">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-text-main">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
