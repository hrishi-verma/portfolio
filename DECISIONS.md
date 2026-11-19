# Decisions

A log of the choices behind this site: what was decided, why, and what it means for future changes. Newest sections first.

Each entry notes where it comes from:
- **session**: decided in the Nov 19, 2026 working session (resume sync, bug sweep, docs cleanup)
- **git**: visible in commit history
- **code**: visible in the code but not recorded anywhere else, so the reason is inferred

---

## Content

### D1. The resume folder is the source of truth for site content
*session, 2026-11-19*

The site is kept in sync with `~/Hrishikesh Docs/Resume/latest/`, specifically the **Python:React** variant. It's the most general of the eight role-specific resumes and the one that covers the GenAI work (RAG, MCP, LLM APIs). Every variant shares the same jobs, dates and numbers. Only emphasis differs.

- `public/resume.pdf` is a copy of that PDF.
- Facts and metrics on the site come from the resume verbatim (condensed, never invented).
- When the resume changes, update the site in the same pass.

### D2. Positioning: full-stack software engineer with GenAI, not "student"
*session, 2026-11-19*

The MS ended May 2026 and the current role is Research Intern at the University of Utah. Hero, About, page title and search description now say "Software Engineer & Research Intern" / "full-stack software engineer, 3.5+ years, Python/Java backends, React/TypeScript frontends, GenAI". "Master's student" and "Senior Software Engineer specializing in distributed systems" were retired. GPA shown as 3.97.

### D3. Experience shows every current resume bullet
*session, 2026-11-19*

Research Intern (Utah, Jun 2026 to present) is first. The three Accenture roles carry all resume bullets (5 / 3 / 3), condensed to one line. Company is "Accenture" (not "Accenture Pvt. Ltd.") with real locations: Remote for Senior, Bangalore for the other two. The TechHub teaching entry stays even though it's off the resume, because teaching and mentoring are part of the story here.

### D4. Skills use the resume's seven categories
*session, 2026-11-19*

GenAI / ML, Languages, Frontend, Backend & APIs, Cloud & DevOps, Data & Messaging, Testing & Observability. Skills not on the current resume (Rust, Assembly, C, TensorFlow, Nginx, Elasticsearch, Jira) were dropped so the site never claims more than the resume.

### D5. Project list: resume projects first, portfolio-only projects kept
*session, 2026-11-19*

- Order: Loan Document RAG Assistant, Graph Compression, InsightHub, Collaborative Code Editor, then the rest.
- **Removed:** Sneaker Marketplace (dropped from every resume).
- **Kept although off the resume:** RaptorProject, Virtual Self-Driving Car, EchoesOfNature, Personal Portfolio, Auto-Web-vulnerability-detection. A portfolio can show more breadth than a one-page resume.
- RAG Assistant and Code Editor have no public repo, demo or thumbnail yet. They render a gradient placeholder card with the title instead of borrowing another project's image. Add `githubUrl` / `thumbnail` when they exist.

### D6. Achievements wording
*session, 2026-11-19*

"Cultural Fest Organizer" was retitled "Coding Competition Winner (Verve 2018 & 2019)" because the card describes winning the coding competition. Promotion card states the actual ladder (Associate SE, SE, Senior SE).

### D7. Research paper gets its own SEO-indexed page
*git, 2026-01-09*

`/research/autonomous-driving` has Google Scholar `citation_*` meta tags, a PDF in `public/papers/`, and a sitemap entry, so the paper can be found and cited on its own rather than only as a card.

**Open question:** the research card says 2024, but the citation metadata and citation text say May 2020. One of them needs correcting.

---

## Behavior and bug fixes

### D8. Theme state is read with `useSyncExternalStore`; the Provider always renders
*session, 2026-11-19*

The old `ThemeContext` rendered children without the Provider until mounted, then wrapped them in it. That changed the tree shape, so React threw away and remounted the entire page right after load. It also hid a separate hydration bug in the cursor.

Now the saved theme is read through `useSyncExternalStore`. The server snapshot is `'dark'`, so hydration matches, and then the saved theme applies. The Provider is always present. If `localStorage` is blocked, an in-memory fallback keeps the toggle working for the visit.

**Implication:** don't reintroduce `mounted` flags or early returns that change the component tree between server and client.

### D9. Touch devices keep the native cursor, decided after hydration
*session, 2026-11-19*

`CustomCursor` used to return early on touch devices before a second `useEffect`. That breaks the Rules of Hooks and causes a server/client mismatch on phones. It now detects touch with `useSyncExternalStore` (server: false), runs both effects unconditionally with an `isTouch` guard, and returns `null` last. The redundant `<style jsx global>` block was removed because it produced mismatched `jsx-*` class names. The effect already injects the `cursor: none` rule.

### D10. Clip horizontal overflow at the page level
*session, 2026-11-19*

Framer Motion slide-in variants start elements offset sideways. On a 390px phone, the contact form sat about 34px past the edge until animated, so the page could scroll sideways. `main` now has `overflow-x-clip`. `clip` rather than `hidden` so it doesn't create a scroll container or break sticky positioning.

### D11. Light mode keeps white text on solid accent buttons
*session, 2026-11-19*

Light mode remaps `.text-white` to dark text globally (see D15). That made blue, green and purple buttons dark-on-color. `globals.css` exempts `bg-blue-600`, `bg-green-600` and `bg-purple-600` combined with `text-white`. New solid-color buttons in other colors must be added to that rule. Placeholder project cards also use a stronger gradient so their white title reads on the light background.

### D12. Formspree requests ask for JSON
*session, 2026-11-19*

The contact form sends `Accept: application/json`, as Formspree's AJAX docs require, so failures come back as errors instead of a redirect that could look like success.

### D13. Footer year and lint are kept current automatically
*session, 2026-11-19*

The footer renders `new Date().getFullYear()` instead of a hard-coded year. Lint was taken to zero errors and zero warnings (MusicPlayer init flag moved from state to a ref, ref cleanup fixed in `useScrollAnimation`, unescaped quotes, unused variables). Keep `npm run lint` clean; it's the main automated check.

### D14. Ambient music per theme, autoplay may be blocked
*git, 2026-01-05; code*

Dark theme plays `dark-ambient.mp3`, light plays `light-lofi.mp3`, switching tracks on theme change only if music was playing. It tries to autoplay. Browsers usually block that until interaction, which is expected and logged, not an error.

---

## Design

### D15. Dark-first styling with light mode as CSS overrides
*git, 2026-01-04; code*

Components are written with dark-theme Tailwind classes. Light mode is a `.light` class on `<html>` plus overrides in `globals.css` that remap common classes to CSS variables. This let light mode be added without touching every component. The cost is that every new class used for color may need a light override, so check both themes after visual changes. Dark is the default, and there's deliberately no system-preference detection.

### D16. Canvas hero art instead of DOM shapes; PNG clouds
*git, 2026-01-02 to 2026-01-05*

The background (stars, moon, shooting stars in dark; sun and clouds in light) is drawn on a canvas for smooth animation without hundreds of DOM nodes. Clouds switched from drawn ellipses to a PNG sprite (`public/images/cloud.png`) because it looks more natural.

### D17. Custom star cursor without a trail
*git, 2026-01-04 to 2026-01-07*

A star-shaped cursor that scales on interactive elements. The trailing animation was removed as distracting and expensive. See D9 for touch handling.

### D18. Tilt cards and scroll-in animations
*git, 2026-01-02 and 2026-01-04*

`TiltCard` adds a subtle 3D tilt on hover across sections. Sections animate in once when scrolled into view, using shared Framer Motion variants in `hooks/useScrollAnimation.ts`.

### D19. Plus Jakarta Sans via `next/font`
*git, 2026-01-13; code*

Self-hosted through `next/font/google`, so there's no layout shift or third-party font request at runtime.

### D20. Project media: thumbnails or click-to-play YouTube
*git, 2026-01-07 and 2026-01-11*

Cards show a local thumbnail, or for video projects a YouTube thumbnail that swaps to the embedded player on click. The iframe only loads when the visitor asks for it.

---

## Platform and build

### D21. Next.js App Router with React 19 and the React Compiler
*git, 2025-11-28; code*

Started from Create Next App. `reactCompiler: true` in `next.config.ts` handles memoization automatically. All routes are static (prerendered), so the site has no server runtime cost.

### D22. Tailwind CSS v4, configured in CSS
*git, 2025-11-28*

Uses `@import "tailwindcss"` and `@theme` in `globals.css` with the `@tailwindcss/postcss` plugin. There is no `tailwind.config.js`. Don't follow v3 setup guides.

### D23. Node 20+, no explicit lightningcss, Next upgraded for CVE-2025-66478
*git, 2026-01-02*

`engines.node >= 20` is enforced. The explicit `lightningcss` dependency was removed because its platform-specific binaries broke installs; Tailwind brings what it needs. Next.js was upgraded to patch CVE-2025-66478. Keep Next on a patched release.

### D23a. Security updates: patch within the major, override pinned transitive deps
*session, 2026-11-19*

`npm audit` showed 18 vulnerabilities (1 critical in Next.js). Fixed with: Next 16.1.1 → 16.4.6 (plus matching `eslint-config-next`), React / React DOM 19.2.0 → 19.3.1 (kept pinned exactly), `npm audit fix` without `--force`, and an npm `overrides` entry forcing `postcss-selector-parser` to `^6.1.5`. That last one is needed because `@tailwindcss/typography` pins a vulnerable exact version, and npm's suggested fix was to *downgrade* the plugin. Result: 0 vulnerabilities, no visual changes. Verified against the live site's research page.

Major upgrades with no security reason (framer-motion 14, lucide-react 1.x, ESLint 10, TypeScript 7, @types/node 26) were deliberately left for a separate pass. Remove the override once typography ships a fixed dependency. The newer `eslint-config-next` added a stricter hooks rule, and `SystemStatus` was moved to `useSyncExternalStore` to satisfy it.

**Practical exposure was low:** the site is fully static on Vercel and uses no Server Actions, middleware or self-hosted image optimizer. Most advisories were build-time tooling.

### D24. Hosted on Vercel at hrishikeshverma.com, deploy by pushing `main`
*git, 2026-01-07; verified 2026-11-19*

Vercel was picked for zero-config Next.js hosting and automatic deploys. The custom domain `hrishikeshverma.com` is served by Vercel. The site is not on GitHub Pages: `hrishi-verma.github.io/` returns 404, and the old Portfolio "Live Demo" link was fixed to the real domain (session). `sitemap.ts`, `robots.ts` and `metadataBase` all use `https://hrishikeshverma.com`.

### D25. Contact form uses Formspree, no backend
*code*

Keeps the site fully static: the form posts straight to Formspree, which emails submissions.

### D26. No unit test suite; quality gate is lint, types, build and a browser pass
*session, 2026-11-19*

The site is mostly static content, so the checks are `npm run lint`, `npx tsc --noEmit`, `npm run build`, and a manual browser check covering both themes, phone width, links and console. Adding Playwright smoke tests (page loads, no console errors, no horizontal overflow, links resolve) is the natural next step if the site grows.

---

## Documentation

### D27. Docs consolidated into README.md and DECISIONS.md
*session, 2026-11-19*

The repo had ten setup-era docs (CSS_SETUP, CUSTOMIZATION, DEPLOYMENT, DEPLOY_NOW, DESIGN_REFERENCE, TEST_STYLES, TROUBLESHOOTING, WHAT_TO_EXPECT, COMMANDS.txt, setup-github.sh), plus three more in the parent folder (GETTING_STARTED, PORTFOLIO_COMPLETE, READY_TO_DEPLOY). Most described the November 2025 first draft: 4 projects, dark-only, Inter font, "deploy to Vercel" steps, a different machine's paths. `setup-github.sh` would auto-commit and replace the `origin` remote, which is unsafe now that the repo is set up.

What was still accurate (stack, structure, content editing, theming, troubleshooting) moved into `README.md`. The reasons behind choices live here. The old files remain in git history.
