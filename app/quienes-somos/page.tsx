
"use client";

import { useState } from "react";
import { Target, Eye, Users, Clock, Building2, Award, MapPin, Handshake } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const tabs = [
  {
    id: "mision",
    label: "Misión",
    icon: Target,
    content: {
      title: "Nuestra Misión",
      sections: [
        {
          subtitle: "Con el Cliente",
          text: "Busca permanentemente la satisfacción del cliente, construyendo y vendiendo productos de calidad, ajustándose a sus requerimientos, en el marco de las normativas y leyes vigentes.",
        },
        {
          subtitle: "Con la Sociedad",
          text: "Piensa en el desarrollo del país, aportando nuevas tecnologías que permitan dar soluciones constructivas. Procura el cumplimiento de la normativa ambiental vigente.",
        },
        {
          subtitle: "Con el Personal",
          text: "Identifica y desarrolla las competencias del personal, capacitándolo, promoviendo un buen ambiente de trabajo, logrando conseguir la participación, el trabajo en equipo, el compromiso y la lealtad.",
        },
      ],
    },
  },
  {
    id: "vision",
    label: "Visión",
    icon: Eye,
    content: {
      title: "Nuestra Visión",
      sections: [
        {
          subtitle: "Liderazgo Nacional",
          text: "Ser la constructora e inmobiliaria líder en el desarrollo de viviendas sociales y económicas a nivel nacional, reconocida por su calidad, innovación y compromiso con las familias chilenas.",
        },
        {
          subtitle: "Crecimiento Sostenible",
          text: "Expandir nuestra presencia a lo largo de Chile, incorporando tecnologías sustentables y diseños que mejoren la calidad de vida de nuestros residentes.",
        },
      ],
    },
  },
  {
    id: "gente",
    label: "Nuestra Gente",
    icon: Users,
    content: {
      title: "Nuestra Gente",
      sections: [
        {
          subtitle: "Equipo Profesional",
          text: "Contamos con más de 500 colaboradores a nivel nacional, entre ingenieros, arquitectos, técnicos y administrativos comprometidos con la excelencia.",
        },
        {
          subtitle: "Cultura Organizacional",
          text: "Promovemos un ambiente de trabajo basado en el respeto, la colaboración y el desarrollo profesional continuo de cada miembro del equipo.",
        },
      ],
    },
  },
  {
    id: "historia",
    label: "Historia",
    icon: Clock,
    content: {
      title: "Nuestra Historia",
      sections: [
        {
          subtitle: "Los Inicios",
          text: "Fundada hace más de 45 años, Constructora Pacal comenzó como una pequeña empresa de construcción en Chile con la visión de entregar viviendas de calidad a precios accesibles.",
        },
        {
          subtitle: "Crecimiento y Expansión",
          text: "A lo largo de las décadas, hemos expandido nuestra presencia de Arica a Puerto Montt, consolidándonos como una de las constructoras más importantes del país en el segmento de vivienda social y económica.",
        },
        {
          subtitle: "Hoy",
          text: "Con más de 50 proyectos entregados y miles de familias satisfechas, seguimos construyendo calidad de vida, innovando en diseño y tecnología constructiva.",
        },
      ],
    },
  },
];

const highlights = [
  { icon: Building2, value: "50+", label: "Proyectos entregados" },
  { icon: Award, value: "45+", label: "Años de trayectoria" },
  { icon: MapPin, value: "10+", label: "Ciudades" },
  { icon: Handshake, value: "10.000+", label: "Familias" },
];

export default function QuienesSomosPage() {
  const [activeTab, setActiveTab] = useState("mision");
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            title="Quiénes Somos"
            subtitle="Más de 45 años construyendo calidad de vida de Arica a Puerto Montt"
            light
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="relative -mt-10 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <h.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-2xl font-bold text-primary">{h.value}</p>
                  <p className="text-sm text-text-muted">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-surface text-text-main hover:bg-primary/5 border border-gray-200"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-text-main mb-6">
              {activeContent.content.title}
            </h2>
            <div className="space-y-6">
              {activeContent.content.sections.map((section) => (
                <div key={section.subtitle}>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {section.subtitle}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
