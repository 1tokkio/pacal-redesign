import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Tag } from "lucide-react";
import type { SanityProject } from "@/sanity/lib/fetch";

interface ProjectCardProps {
  project: SanityProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
    >
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary">
                  {project.name.charAt(0)}
                </span>
              </div>
              <p className="text-xs text-text-muted">Imagen del proyecto</p>
            </div>
          </div>
        )}

        {/* Badge DS19 */}
        {project.program && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full z-10">
            <Tag className="w-3 h-3" />
            {project.program}
          </div>
        )}

        {/* Price badge */}
        <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm z-10">
          <span className="text-sm font-bold text-primary">
            Desde {project.priceFrom.toLocaleString("es-CL")} {project.priceUnit}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-wider">
              {project.type}
            </p>
            <h3 className="mt-1 text-lg font-bold text-text-main group-hover:text-primary transition-colors">
              {project.name}
            </h3>
          </div>
          <div className="mt-1 w-8 h-8 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-sm text-text-muted">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>
            {project.address}, {project.city}
          </span>
        </div>
      </div>
    </Link>
  );
}
