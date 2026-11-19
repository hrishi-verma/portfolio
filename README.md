# Hrishikesh Verma — Portfolio

Personal portfolio site, live at **[hrishikeshverma.com](https://hrishikeshverma.com)**.

Single-page Next.js app (hero, about, skills, experience, projects, research, achievements, contact) plus a standalone research paper page at `/research/autonomous-driving`. Dark theme by default with a light theme toggle, an animated canvas background, theme-matched ambient music, and a custom star cursor.

Why things are built the way they are is recorded in [DECISIONS.md](DECISIONS.md).

## Stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19, React Compiler enabled |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Animation | Framer Motion (scroll-in variants), canvas for the hero background |
| Icons | lucide-react, react-icons |
| Contact form | Formspree (`https://formspree.io/f/mykzjdpw`) |
| Hosting | Vercel, auto-deploys `main` to hrishikeshverma.com |

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
```

Checks to run before pushing (there is no unit test suite):

```bash
npm run lint       # ESLint, should report 0 problems
npx tsc --noEmit   # type check
npm run build      # production build, all 7 routes should prerender as static
```

## Deploy

Push to `main` on [github.com/hrishi-verma/portfolio](https://github.com/hrishi-verma/portfolio). Vercel builds and deploys automatically, so there is nothing else to run. The custom domain is configured in the Vercel project settings.

## Project structure

```
app/
  layout.tsx                    SEO metadata, fonts, global providers and chrome (cursor, background, navbar, status)
  page.tsx                      Home page: stacks the section components in order
  globals.css                   Tailwind import, theme variables, light-mode overrides, keyframes
  research/autonomous-driving/  Research paper page with Google Scholar citation meta tags
  sitemap.ts, robots.ts         Generated sitemap.xml and robots.txt
components/
  Hero, About, Skills, Experience, Projects, Research, Achievements, Contact   Page sections
  Navbar.tsx                    Section links, resume button, theme toggle, music toggle
  HeroArt.tsx                   Canvas background: stars, moon and shooting stars (dark), sun and clouds (light)
  CustomCursor.tsx              Star cursor; disabled on touch devices
  MusicPlayer.tsx               Ambient track per theme
  SystemStatus.tsx              Online indicator and ping latency badge
  TiltCard.tsx, Tooltip.tsx     Shared UI pieces
contexts/ThemeContext.tsx       Theme state (dark default, saved in localStorage)
hooks/useScrollAnimation.ts     Framer Motion variants shared by sections
public/
  resume.pdf                    The "Resume" / "Download Resume" file
  thumbnails/                   Project card images
  papers/                       Research paper PDF
  audio/                        dark-ambient.mp3, light-lofi.mp3
  images/cloud.png              Light-theme cloud sprite
```

## Updating content

All content is plain data inside the components, so most updates are a single-file edit.

| To change | Edit |
|---|---|
| Hero tagline and subtitle | `components/Hero.tsx` |
| Bio and stat cards (GPA, years, mentored) | `components/About.tsx` |
| Jobs | `experiences` array in `components/Experience.tsx` |
| Skill categories | `skillCategories` in `components/Skills.tsx` |
| Projects | `projects` array in `components/Projects.tsx` |
| Research card | `components/Research.tsx`; full page in `app/research/autonomous-driving/page.tsx` |
| Achievements | `components/Achievements.tsx` |
| Email and social links | `components/Hero.tsx`, `components/Contact.tsx` |
| Page title and search description | `metadata` in `app/layout.tsx` |
| Resume download | replace `public/resume.pdf` |

**Source of truth for content:** the resumes in `~/Hrishikesh Docs/Resume/latest/`. The site follows the Python:React variant. When the resume changes, update the site to match, and copy that PDF to `public/resume.pdf`.

**Adding a project:** add an object to `projects` with `title`, `description`, `tech`, `highlights`, and optionally `githubUrl`, `liveUrl`, `thumbnail` (a file in `public/thumbnails/`) or `video` (a YouTube embed URL like `https://www.youtube.com/embed/<id>`, shown as a click-to-play player). Without a thumbnail or video, the card shows a gradient block with the project title.

## Theming notes

- Colors are written with dark-theme Tailwind classes (`text-white`, `bg-gray-800`, ...). Light mode is done by overrides in `globals.css` under `.light`, which remap those classes to the `--text-*` / `--bg-*` variables.
- Because `.light .text-white` turns white text dark, solid accent buttons need an exemption. `globals.css` keeps white text on `bg-blue-600`, `bg-green-600` and `bg-purple-600`. If you add a solid button in another color, add it to that rule.
- Check both themes and a phone-width viewport after any visual change.

## Troubleshooting

| Problem | Fix |
|---|---|
| Styles don't update in dev, or new CSS rules are missing | Stop the server, `rm -rf .next`, `npm run dev`. Turbopack's cache can go stale, especially after running `npm run build` while the dev server is up. |
| Port 3000 in use | `npm run dev -- -p 3001` |
| Hydration warning mentioning `data-sharkid` or other unknown attributes | Caused by a browser extension (password manager) editing form fields. Not a site bug; check in a clean profile. |
| "Autoplay blocked" in the console | Expected. Browsers block audio until the visitor interacts; the music toggle starts it. |
