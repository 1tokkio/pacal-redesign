import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  ArrowLeft,
  Tag,
  CheckCircle2,
} from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/sanity/lib/fetch";
import ImageCarousel from "@/components/projects/ImageCarousel";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.type} ${project.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  // Combine main image + gallery into a single array for the carousel
  const allImages: string[] = [
    ...(project.image ? [project.image] : []),
    ...(project.gallery ?? []),
  ];

  return (
    <>
      {/* Back nav */}
      <div className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Proyectos
          </Link>
        </div>
      </div>

      {/* Image Carousel — full width */}
      <ImageCarousel images={allImages} projectName={project.name} />

      {/* Project header */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-start gap-3 mb-3">
            {project.program && (
              <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-accent text-white text-sm font-bold rounded-full">
                <Tag className="w-3.5 h-3.5" />
                Proyecto {project.program}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main mb-2">
            {project.type} {project.name}
          </h1>
          <div className="flex items-center gap-2 text-text-muted">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>
              {project.address}, {project.city}, {project.region}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-main mb-4">
                Sobre este proyecto
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Features */}
              <h3 className="text-xl font-bold text-text-main mt-10 mb-4">
                Características
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-3 bg-surface rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-text-main">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-text-muted">Desde</p>
                  <p className="text-3xl font-bold text-primary">
                    {project.priceFrom.toLocaleString("es-CL")}{" "}
                    <span className="text-lg">{project.priceUnit}</span>
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-text-muted shrink-0" />
                    <span className="text-text-main">
                      {project.city}, {project.region}
                    </span>
                  </div>
                  {project.program && (
                    <div className="flex items-center gap-3 text-sm">
                      <Tag className="w-4 h-4 text-text-muted shrink-0" />
                      <span className="text-text-main">
                        Programa {project.program}
                      </span>
                    </div>
                  )}
                </div>

                {project.phone && (
                  <a
                    href={`https://wa.me/${project.phone.replace(/\s/g, "").replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </a>
                )}

                <Link
                  href="/contacto"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 mt-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-colors"
                >
                  Solicitar Información
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
