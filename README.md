# Pacal — Real Estate Portal

Corporate website and project catalog for Pacal, a Chilean real estate developer. Built as a freelance project with a headless CMS architecture, enabling the client to manage content independently after delivery.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| CMS | Sanity v3 (headless) |
| CMS Client | @sanity/client, @sanity/image-url |
| Deployment | Vercel |
| Studio | pacal.sanity.studio (standalone) |

## Features

- Server-side rendered pages with incremental static regeneration (ISR, 60s)
- Project catalog with filtering by type and subsidy program
- Project detail page with image carousel (main image + gallery)
- Static data fallback — site works without Sanity being populated
- Locales Comerciales section with individual contact per unit
- Subsidio y Financiamiento page covering DS49, DS1, DS19 and DS116
- FAQ section with accordion interaction
- Responsive layout across mobile, tablet and desktop
- WhatsApp contact links per project
- SEO metadata generated per page via Next.js Metadata API

## Project Structure

```
pacal-redesign/
  app/                        # Next.js App Router pages
    page.tsx                  # Home
    proyectos/
      page.tsx                # Project catalog
      [slug]/page.tsx         # Project detail with carousel
    locales-comerciales/
    subsidio-y-financiamiento/
    quienes-somos/
    contacto/
    salas-de-venta/
  components/
    home/                     # Hero, Featured Projects, Stats, CTA
    layout/                   # Navbar, Footer
    projects/                 # ProjectCard, ProjectsGrid, ImageCarousel
    ui/                       # SectionTitle
  lib/
    projects.ts               # Static fallback data (6 projects)
  sanity/
    lib/
      client.ts               # Sanity client configuration
      fetch.ts                # Data fetching with static fallback
      queries.ts              # GROQ queries
    schemas/
      project.ts              # Project document schema
```

## Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Both variables are required. Get them from your Sanity project dashboard at sanity.io/manage.

## Commands

```bash
# Install dependencies
npm install

# Run development server (uses Webpack due to a Turbopack/Windows compatibility issue with jsdom)
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Lint
npm run lint
```

## Sanity Studio

The CMS studio is a separate project located at `../pacal-studio` and deployed independently to `pacal.sanity.studio`. To run it locally:

```bash
cd ../pacal-studio
npm install
npm run dev   # studio runs at http://localhost:3333
```

## Content Management

The client accesses the studio at `pacal.sanity.studio` with their Sanity account. From there they can:

- Add, edit or remove projects
- Upload a main image and multiple gallery images per project
- Set prices, location, subsidy program and contact phone number
- Publish changes — the site revalidates automatically within 60 seconds

If no projects exist in Sanity, the site falls back to the static data defined in `lib/projects.ts`.

## Deployment

The site is deployed on Vercel connected to the `main` branch. Every push to `main` triggers an automatic deployment. The following environment variables must be set in the Vercel dashboard under Project Settings > Environment Variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Notes

- The `--webpack` flag in the dev script is intentional. Turbopack on Windows creates junction points to `jsdom` (a transitive dependency) that fail due to OS permission restrictions. The production build uses the standard Next.js bundler and is not affected.
- The `sanity/schemas/` directory is excluded from TypeScript compilation via `tsconfig.json` to prevent type conflicts with the Next.js build.
