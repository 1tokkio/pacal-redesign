# Pacal — Real Estate Portal

Corporate website and project catalog for Pacal, a Chilean real estate developer. Built as a freelance project with a headless CMS architecture, allowing the client to manage content independently after delivery.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styles | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| CMS | Sanity v3 (headless) |
| CMS Client | @sanity/client, @sanity/image-url |
| Deployment | Vercel |
| Studio | pacal.sanity.studio (independent project) |

## Features

- Server-rendered pages with Incremental Static Regeneration (ISR, 60s)
- Project catalog with filtering by type and subsidy program
- Detail page with image carousel (main image + gallery)
- Fallback to static data — the site works without Sanity being populated
- Commercial Units section with individual contact per unit
- Subsidy and Financing page covering DS49, DS1, DS19, and DS116
- FAQ section with interactive accordion
- Responsive design for mobile, tablet, and desktop
- WhatsApp contact links per project
- Per-page SEO metadata generated via the Next.js Metadata API
- Demo login page (no backend, UI only)

## Project Structure

```
pacal-redesign/
  app/                              # Pages using Next.js App Router
    page.tsx                        # Home
    login/page.tsx                  # Login (demo)
    proyectos/
      page.tsx                      # Project catalog
      [slug]/page.tsx               # Project detail with carousel
    locales-comerciales/
    subsidio-y-financiamiento/
    quienes-somos/
    contacto/
    salas-de-venta/
  components/
    home/                           # Hero, Featured Projects, Stats, CTA
    layout/                         # Navbar, Footer, LayoutShell
    projects/                       # ProjectCard, ProjectsGrid, ImageCarousel
    ui/                             # SectionTitle
  lib/
    projects.ts                     # Static fallback data (6 projects)
  public/
    images/                         # Logo and static assets
  sanity/
    lib/
      client.ts                     # Sanity client configuration
      fetch.ts                      # Data fetching with static fallback
      queries.ts                    # GROQ queries
    schemas/
      project.ts                    # Project document schema
```

## Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Both variables are required. They can be obtained from the Sanity dashboard at sanity.io/manage.

## Commands

```bash
# Install dependencies
npm install

# Development server (uses Webpack due to Turbopack incompatibility with Windows and jsdom)
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Lint
npm run lint
```

## Sanity Studio

The CMS studio is a separate project located at `../pacal-studio` and deployed independently at `pacal.sanity.studio`. To run it locally:

```bash
cd ../pacal-studio
npm install
npm run dev   # studio available at http://localhost:3333
```

## Content Management

The client accesses the studio at `pacal.sanity.studio` with their Sanity account. From there they can:

- Add, edit, or delete projects
- Upload a main image and multiple gallery images per project
- Set prices, location, subsidy program, and contact phone number
- Publish changes — the site revalidates automatically within 60 seconds

If no projects exist in Sanity, the site displays the static data defined in `lib/projects.ts`.

## Deployment

The site is deployed on Vercel connected to the `main` branch. Every push to `main` triggers an automatic deployment. The following environment variables must be configured in the Vercel dashboard under Project Settings > Environment Variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Technical Notes

- The `--webpack` flag in the dev script is intentional. Turbopack on Windows creates junction points to `jsdom` (a transitive dependency) that fail due to OS permission restrictions. The production build uses Next.js's standard bundler and is not affected.
- The `sanity/schemas/` directory is excluded from TypeScript compilation via `tsconfig.json` to avoid type conflicts with the Next.js build.
