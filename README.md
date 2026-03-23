# Personal Website

A portfolio website for Viktor Berg built with Next.js, TypeScript, Tailwind CSS v4, and Motion.

## Current structure

- `app/` contains the pages for home, about, projects, and contact
- `components/` contains the navbar, hero, age display, and animated background
- `lib/site-content.ts` contains the placeholder portfolio content that will be replaced later

## Local development

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Environment variables

No real secrets should be committed to the repository.

- Keep local values in `.env.local`
- Keep `.env.example` as documentation only
- Add production secrets later through GitHub Secrets or the deployment platform

## Quality checks

- `npm run lint`
- `npm run build`

## Content to replace later

The current content is intentionally placeholder content. The next content pass should replace:

- project names, descriptions, and categories
- contact details
- active work / current focus
- completed work and archived projects
- individual project detail pages with timeline and deeper descriptions
