import { getAllProjects } from '@/sanity/lib/fetch'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import SectionTitle from '@/components/ui/SectionTitle'

export const revalidate = 60

export default async function ProyectosPage() {
  const projects = await getAllProjects()
  const cities = [...new Set(projects.map((p) => p.city))]

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Nuestros Proyectos"
            subtitle="Más de 45 años construyendo calidad de vida en todo Chile"
            light
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <ProjectsGrid projects={projects} cities={cities} />
        </div>
      </section>
    </>
  )
}
