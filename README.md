## REM Portfolio

A production-ready Next.js portfolio built with the App Router, Tailwind CSS, Framer Motion, and live GitHub project showcases.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and update values:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SITE_URL`: your live site URL (for metadata, robots, sitemap)
- `GITHUB_TOKEN`: optional GitHub token to avoid API rate limits in production

## Run on your network (optional)

```bash
npm run dev -- --hostname 0.0.0.0
```

Then open the app from another device on the same network using your machine IP, for example:

```bash
http://192.168.1.5:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this folder to your GitHub repository.
2. Import the repository in Vercel.
3. Set environment variables in Vercel Project Settings:
	- `NEXT_PUBLIC_SITE_URL=https://hmj-portfolio.vercel.app`
	- `GITHUB_TOKEN=<your_token>` (optional but recommended)
4. Redeploy.

This project includes:
- `app/sitemap.ts` and `app/robots.ts` for SEO basics
- production metadata in `app/layout.tsx`
- server-side GitHub showcase API at `app/api/github-showcase/route.ts`

## Content

- Full repository data is stored in [data/github-projects.json](data/github-projects.json)
- Featured showcase is fetched from GitHub API via [app/api/github-showcase/route.ts](app/api/github-showcase/route.ts)
- Update portfolio copy in [app/page.tsx](app/page.tsx)
- Adjust theme and global effects in [app/globals.css](app/globals.css)
