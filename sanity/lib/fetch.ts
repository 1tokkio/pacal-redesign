import { client } from './client'
import {
  allProjectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
} from './queries'
import { projects as staticProjects } from '@/lib/projects'

export interface SanityProject {
  _id: string
  slug: string
  name: string
  type: string
  featured: boolean
  image: string | null
  priceFrom: number
  priceUnit: string
  program: string
  address: string
  city: string
  region: string
  phone: string
  description: string
  features: string[]
  gallery: string[]
}

// Convierte los proyectos estáticos al formato SanityProject para usarlos como fallback
const staticAsSanity: SanityProject[] = staticProjects.map((p) => ({
  _id: p.slug,
  slug: p.slug,
  name: p.name,
  type: p.type,
  featured: p.featured,
  image: null, // las imágenes locales no existen aún
  priceFrom: p.priceFrom,
  priceUnit: p.priceUnit,
  program: p.program,
  address: p.address,
  city: p.city,
  region: p.region,
  phone: p.phone,
  description: p.description,
  features: p.features,
  gallery: [],
}))

export async function getAllProjects(): Promise<SanityProject[]> {
  try {
    const result = await client.fetch<SanityProject[]>(allProjectsQuery)
    return result?.length ? result : staticAsSanity
  } catch {
    return staticAsSanity
  }
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  try {
    const result = await client.fetch<SanityProject[]>(featuredProjectsQuery)
    return result?.length ? result : staticAsSanity.filter((p) => p.featured)
  } catch {
    return staticAsSanity.filter((p) => p.featured)
  }
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  try {
    const result = await client.fetch<SanityProject>(projectBySlugQuery, { slug })
    return result ?? staticAsSanity.find((p) => p.slug === slug) ?? null
  } catch {
    return staticAsSanity.find((p) => p.slug === slug) ?? null
  }
}
