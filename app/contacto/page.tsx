
"use client";

import { useState } from "react";
import { Send, Phone, MapPin, Mail, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const offices = [
  { city: "Arica", phone: "+56 9 68320567" },
  { city: "Antofagasta", phone: "+56 9 94437672" },
  { city: "Coquimbo", phone: "+56 9 96627722" },
  { city: "Ovalle", phone: "+56 9 96627722" },
  { city: "Hualpén", phone: "+56 9 58166132" },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Contacto"
            subtitle="Te apoyamos en lo que necesites. Escríbenos y un ejecutivo se pondrá en contacto contigo."
            light
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-text-main mb-6">
                Envíanos un mensaje
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Mensaje enviado
                  </h3>
                  <p className="text-green-700">
                    Gracias por contactarnos. Un ejecutivo se comunicará contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-main mb-1.5">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-main mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="juan@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-main mb-1.5">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-main mb-1.5">
                        Proyecto de interés
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) =>
                          setFormData({ ...formData, project: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Seleccionar...</option>
                        <option value="portal-azapa">Portal Azapa</option>
                        <option value="portal-azapa-ii">Portal Azapa II</option>
                        <option value="volcanes">Volcanes</option>
                        <option value="los-fundadores">Los Fundadores</option>
                        <option value="los-aromos">Los Aromos</option>
                        <option value="cumbres">Cumbres</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1.5">
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/20"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-text-main mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-text-muted">contacto@pacal.cl</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-muted">
                      Presencia de Arica a Puerto Montt
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp por ciudad */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-text-main mb-4">
                  WhatsApp por Ciudad
                </h3>
                <div className="space-y-2">
                  {offices.map((office) => (
                    <a
                      key={office.city}
                      href={`https://wa.me/${office.phone.replace(/\s/g, "").replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-green-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-main">
                            {office.city}
                          </p>
                          <p className="text-xs text-text-muted">
                            {office.phone}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-green-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
