import { getFeaturedProjects } from "@/sanity/lib/fetch";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function FeaturedProjects() {
  const featured = await getFeaturedProjects();

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Proyectos Destacados"
          subtitle="Conoce nuestros condominios con entrega inmediata en las principales ciudades de Chile"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white border-2 border-primary rounded-xl transition-all"
          >
            Ver Todos los Proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
