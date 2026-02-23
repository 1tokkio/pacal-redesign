import { client } from './client'
import {
  allProjectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
} from './queries'

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

export async function getAllProjects(): Promise<SanityProject[]> {
  return client.fetch(allProjectsQuery)
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  return client.fetch(featuredProjectsQuery)
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(projectBySlugQuery, { slug })
}
