'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import type { SanityProject } from '@/sanity/lib/fetch'

interface ProjectsGridProps {
  projects: SanityProject[]
  cities: string[]
}

export default function ProjectsGrid({ projects, cities }: ProjectsGridProps) {
  const [selectedCity, setSelectedCity] = useState('')

  const filtered = selectedCity
    ? projects.filter((p) => p.city === selectedCity)
    : projects

  return (
    <>
      <div className="mb-10">
        <p className="text-sm text-text-muted mb-3 font-medium">Filtrar por ciudad:</p>
        <ProjectFilter
          cities={cities}
          selectedCity={selectedCity}
          onSelect={setSelectedCity}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">
            No se encontraron proyectos en esta ciudad.
          </p>
        </div>
      )}
    </>
  )
}
