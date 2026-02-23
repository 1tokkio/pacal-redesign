export interface Project {
  slug: string;
  name: string;
  type: string;
  priceFrom: number;
  priceUnit: string;
  program: string;
  address: string;
  city: string;
  region: string;
  phone: string;
  image: string;
  description: string;
  features: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "portal-azapa",
    name: "Portal Azapa",
    type: "Condominio",
    priceFrom: 1850,
    priceUnit: "UF",
    program: "DS19",
    address: "Avenida Las Torres con Pitrufquén",
    city: "Arica",
    region: "Arica y Parinacota",
    phone: "+56 9 68320567",
    image: "/images/portal-azapa.jpg",
    description: "Condominio moderno en el corazón de Arica, con áreas verdes, juegos infantiles y estacionamientos. Ubicación privilegiada cerca de servicios y comercio.",
    features: ["Áreas verdes", "Juegos infantiles", "Estacionamientos", "Sala multiuso", "Seguridad 24/7"],
    featured: true,
  },
  {
    slug: "portal-azapa-ii",
    name: "Portal Azapa II",
    type: "Condominio",
    priceFrom: 1850,
    priceUnit: "UF",
    program: "DS19",
    address: "Avenida Las Torres con Pitrufquén",
    city: "Arica",
    region: "Arica y Parinacota",
    phone: "+56 9 68320567",
    image: "/images/portal-azapa-2.jpg",
    description: "Segunda etapa del exitoso proyecto Portal Azapa. Nuevos departamentos con terminaciones de primera calidad y amplios espacios comunes.",
    features: ["Áreas verdes", "Juegos infantiles", "Estacionamientos", "Piscina", "Quincho"],
    featured: true,
  },
  {
    slug: "volcanes",
    name: "Volcanes",
    type: "Condominio",
    priceFrom: 2778,
    priceUnit: "UF",
    program: "",
    address: "Calle Pablo Neruda 1135",
    city: "Antofagasta",
    region: "Antofagasta",
    phone: "+56 9 94437672",
    image: "/images/volcanes.jpg",
    description: "Proyecto residencial en Antofagasta con vista a la cordillera. Departamentos amplios y luminosos con terminaciones premium.",
    features: ["Vista panorámica", "Estacionamientos", "Bodegas", "Áreas verdes", "Sala de eventos"],
    featured: true,
  },
  {
    slug: "los-fundadores",
    name: "Los Fundadores",
    type: "Condominio",
    priceFrom: 2150,
    priceUnit: "UF",
    program: "DS19",
    address: "Baquedano 401",
    city: "Coquimbo",
    region: "Coquimbo",
    phone: "+56 9 96627722",
    image: "/images/los-fundadores.jpg",
    description: "Condominio ubicado en el centro de Coquimbo, ideal para familias y como inversión. Acceso directo a transporte público y servicios.",
    features: ["Ubicación céntrica", "Áreas verdes", "Estacionamientos", "Juegos infantiles", "Conserjería"],
    featured: false,
  },
  {
    slug: "los-aromos",
    name: "Los Aromos",
    type: "Condominio",
    priceFrom: 2200,
    priceUnit: "UF",
    program: "DS19",
    address: "Calle Elsa Omon 884",
    city: "Ovalle",
    region: "Coquimbo",
    phone: "+56 9 96627722",
    image: "/images/los-aromos.jpg",
    description: "Proyecto habitacional en Ovalle con excelente conectividad. Departamentos diseñados para el confort de toda la familia.",
    features: ["Áreas verdes", "Estacionamientos", "Juegos infantiles", "Sala multiuso", "Bicicleteros"],
    featured: false,
  },
  {
    slug: "cumbres",
    name: "Cumbres",
    type: "Condominio",
    priceFrom: 2200,
    priceUnit: "UF",
    program: "DS19",
    address: "Cristobal Colón – Mafil",
    city: "Hualpén",
    region: "Biobío",
    phone: "+56 9 58166132",
    image: "/images/cumbres.jpg",
    description: "Condominio en Hualpén, región del Biobío. Entorno tranquilo con todos los servicios a minutos de distancia.",
    features: ["Áreas verdes", "Juegos infantiles", "Estacionamientos", "Ciclovías", "Áreas deportivas"],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getCities(): string[] {
  return [...new Set(projects.map((p) => p.city))];
}

export function getProjectsByCity(city: string): Project[] {
  return projects.filter((p) => p.city === city);
}
