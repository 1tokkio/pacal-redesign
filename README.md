# Pacal — Portal Inmobiliario

Sitio web corporativo y catálogo de proyectos para Pacal, desarrolladora inmobiliaria chilena. Construido como proyecto freelance con arquitectura headless CMS, permitiendo al cliente gestionar el contenido de forma independiente tras la entrega.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| CMS | Sanity v3 (headless) |
| Cliente CMS | @sanity/client, @sanity/image-url |
| Despliegue | Vercel |
| Studio | pacal.sanity.studio (proyecto independiente) |

## Funcionalidades

- Páginas renderizadas en servidor con regeneración estática incremental (ISR, 60s)
- Catálogo de proyectos con filtrado por tipo y programa de subsidio
- Página de detalle con carrusel de imágenes (imagen principal + galería)
- Fallback a datos estáticos — el sitio funciona sin que Sanity esté poblado
- Sección de Locales Comerciales con contacto individual por unidad
- Página de Subsidio y Financiamiento con DS49, DS1, DS19 y DS116
- Sección de preguntas frecuentes con acordeón interactivo
- Diseño responsive para móvil, tablet y escritorio
- Links de contacto por WhatsApp por proyecto
- Metadata SEO generada por página mediante la API Metadata de Next.js
- Página de login de demostración (sin backend, solo UI)

## Estructura del proyecto

```
pacal-redesign/
  app/                              # Páginas con App Router de Next.js
    page.tsx                        # Inicio
    login/page.tsx                  # Login (demostración)
    proyectos/
      page.tsx                      # Catálogo de proyectos
      [slug]/page.tsx               # Detalle del proyecto con carrusel
    locales-comerciales/
    subsidio-y-financiamiento/
    quienes-somos/
    contacto/
    salas-de-venta/
  components/
    home/                           # Hero, Proyectos Destacados, Stats, CTA
    layout/                         # Navbar, Footer, LayoutShell
    projects/                       # ProjectCard, ProjectsGrid, ImageCarousel
    ui/                             # SectionTitle
  lib/
    projects.ts                     # Datos estáticos de respaldo (6 proyectos)
  public/
    images/                         # Logo y recursos estáticos
  sanity/
    lib/
      client.ts                     # Configuración del cliente Sanity
      fetch.ts                      # Fetching de datos con fallback estático
      queries.ts                    # Consultas GROQ
    schemas/
      project.ts                    # Esquema del documento proyecto
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Ambas variables son obligatorias. Se obtienen desde el dashboard de Sanity en sanity.io/manage.

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (usa Webpack por incompatibilidad de Turbopack con Windows y jsdom)
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción en local
npm start

# Lint
npm run lint
```

## Sanity Studio

El studio CMS es un proyecto separado ubicado en `../pacal-studio` y desplegado de forma independiente en `pacal.sanity.studio`. Para ejecutarlo en local:

```bash
cd ../pacal-studio
npm install
npm run dev   # studio disponible en http://localhost:3333
```

## Gestión de contenido

El cliente accede al studio en `pacal.sanity.studio` con su cuenta de Sanity. Desde ahí puede:

- Agregar, editar o eliminar proyectos
- Subir imagen principal y múltiples imágenes de galería por proyecto
- Definir precios, ubicación, programa de subsidio y teléfono de contacto
- Publicar cambios — el sitio se revalida automáticamente en máximo 60 segundos

Si no existen proyectos en Sanity, el sitio muestra los datos estáticos definidos en `lib/projects.ts`.

## Despliegue

El sitio está desplegado en Vercel conectado a la rama `main`. Cada push a `main` dispara un despliegue automático. Las siguientes variables de entorno deben configurarse en el dashboard de Vercel en Configuración del Proyecto > Variables de Entorno:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Notas técnicas

- El flag `--webpack` en el script de desarrollo es intencional. Turbopack en Windows genera junction points hacia `jsdom` (dependencia transitiva) que fallan por restricciones de permisos del sistema operativo. El build de producción usa el bundler estándar de Next.js y no se ve afectado.
- El directorio `sanity/schemas/` está excluido de la compilación de TypeScript mediante `tsconfig.json` para evitar conflictos de tipos con el build de Next.js.
