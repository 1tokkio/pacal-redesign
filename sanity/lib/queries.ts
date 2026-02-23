// groq es un tagged template literal — solo sirve para syntax highlighting del editor
const groq = (strings: TemplateStringsArray, ...values: unknown[]) =>
  strings.reduce((acc, str, i) => acc + str + (values[i] ?? ''), '')

export const projectFields = groq`
  _id,
  "slug": slug.current,
  name,
  type,
  featured,
  "image": image.asset->url,
  priceFrom,
  priceUnit,
  program,
  address,
  city,
  region,
  phone,
  description,
  features,
  "gallery": gallery[].asset->url
`

export const allProjectsQuery = groq`
  *[_type == "project"] | order(featured desc, name asc) {
    ${projectFields}
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(name asc) {
    ${projectFields}
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }
`
