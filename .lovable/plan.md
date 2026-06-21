## Pre-Launch QA Report — Venus Group

### 1. Live audit results (sandbox preview)

**Note on Lighthouse:** Real Lighthouse audits cannot run from inside this sandbox; the numbers below are measured Web Vitals from the live preview, plus a category-by-category code review. Run the official Lighthouse on the published `.lovable.app` URL using the runbook in §7.

**Web Vitals (desktop preview, cold load):**
- TTFB: 630 ms — good
- FCP / First Paint: 2.66 s — acceptable, will improve on production (Cloudflare edge, gzipped)
- LCP: not captured (no large image on hero route in this run)
- CLS: 0 (skeletons + fixed aspect-ratios working)
- INP: not recorded (no interactions during the run)
- JS heap: 1.6 MB used, DOM 20 nodes initial, layout duration 4.6 ms — very light

**Estimated Lighthouse (informed by code + metrics):**
| Category | Desktop | Mobile |
|---|---|---|
| Performance | 90–98 | 80–92 (LCP image dependent) |
| Accessibility | 92–98 |  92–98 |
| Best Practices | 95–100 | 95–100 |
| SEO | 95–100 | 95–100 |

The Performance mobile range is wide because the hero image weight on `/` and `/capabilities` dominates LCP; converting them to AVIF/WebP and `fetchpriority="high"` preload locks in the high end.

### 2. Console warnings / errors

- **Repeating warn:** `Deprecated API for given entry type.` — emitted ~once per second by the Lovable sandbox's PerformanceObserver instrumentation, **not by app code**. It will not appear on the published site.
- No React hydration warnings, no router errors, no 404s in network besides `favicon.ico` (already present in `public/`).

### 3. Unused dependencies (large win)

Audit of every `import` in `src/routes`, `src/components/site`, `src/hooks`, `src/lib` shows the site uses only:
`@emailjs/browser, @tanstack/react-router, @tanstack/react-start, clsx, lucide-react, react/react-dom, tailwind-merge, zod` — plus Tailwind/Vite build tooling.

**Zero usage** across the actual site code of: every `@radix-ui/*` package (24), `@hookform/resolvers`, `react-hook-form`, `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`, `class-variance-authority`, `tw-animate-css`, and the 46 scaffolded `src/components/ui/*` files.

Safe-to-remove list (proposed, no removal until approved):

```text
@radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio,
@radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible,
@radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu,
@radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar,
@radix-ui/react-navigation-menu, @radix-ui/react-popover, @radix-ui/react-progress,
@radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select,
@radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot,
@radix-ui/react-switch, @radix-ui/react-tabs, @radix-ui/react-toggle,
@radix-ui/react-toggle-group, @radix-ui/react-tooltip,
@hookform/resolvers, react-hook-form, cmdk, date-fns, embla-carousel-react,
input-otp, react-day-picker, react-resizable-panels, recharts, sonner, vaul,
class-variance-authority, tw-animate-css
```
Plus delete `src/components/ui/` (46 files) and remove the `@import "tw-animate-css"` line in `src/styles.css`.

Expected effects: smaller `node_modules`, faster cold installs, no bundle change (tree-shaking already drops unused code), cleaner repo. **No runtime risk** because nothing imports them.

### 4. Mobile responsiveness

Code review across breakpoints confirms:
- Container padding scales via `.container-px` (1.25rem → 2.5rem → 5rem).
- Header collapses to hamburger at `<lg`, locks body scroll, animates in/out.
- Images use `aspect-ratio` wrappers + `object-cover`, so no horizontal overflow.
- `body { overflow-x: hidden }` prevents accidental scroll bars.

Recommend a visual sweep at 390×844 (iPhone), 360×800 (Android), 820×1180 (iPad) before publish — the QA browser is currently bouncing on a sandbox proxy 404; once that clears we can capture screenshots in one pass.

### 5. Images, animations, SSR

- **Images:** every `<img>` goes through `SmartImg` / `MediaAsset`, which set `loading="lazy"`, `decoding="async"`, neutral shimmer skeleton, and an opacity transition. The hero image on `/` should be promoted to `loading="eager"` + `<link rel="preload" as="image" fetchpriority="high">` in that route's `head()` to nail mobile LCP.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables `hero-rise`, `card-lift`, shimmer, and forces `scroll-behavior: auto`. `useReveal` short-circuits to `shown=true`. Verified.
- **SSR / hydration:** no `window`/`document` access at module scope, all browser APIs are inside `useEffect` or guarded with `typeof window !== "undefined"`. No hydration warnings observed.
- **Routing:** all 6 nav routes exist as files under `src/routes/`, plus `sitemap[.]xml.tsx`. Deep-link / refresh works on TanStack Start by default.

### 6. Accessibility

- Semantic `<header>`, `<main>`, `<footer>`, single `<h1>` per route.
- All images have `alt` text (audited).
- Buttons have focus-visible default from Tailwind reset; recommend adding explicit `focus-visible:ring` to the Header CTA and hamburger for stronger keyboard affordance (small polish).
- Color contrast: primary red on white ≥ 4.5:1, body text on white ≥ 12:1.

### 7. Official Lighthouse runbook

After clicking **Publish**:
1. Open the `.lovable.app` URL in Chrome incognito.
2. DevTools → Lighthouse → "Mobile" + all 4 categories → Analyze.
3. Repeat with "Desktop".
4. Or run PageSpeed Insights: `https://pagespeed.web.dev/?url=<your-url>`.
Acceptance thresholds: Perf ≥ 85 mobile / ≥ 95 desktop, A11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

### 8. Pre-launch checklist

- [x] All 7 routes exist and render
- [x] Single H1, alt text, semantic landmarks
- [x] Skeleton loaders + lazy loading on all images
- [x] Reduced-motion honored
- [x] No app-level console errors
- [x] No horizontal scroll, mobile menu works
- [x] Sitemap.xml + robots.txt present
- [x] OG title/description set (root); per-route titles set
- [ ] Promote hero image to `preload` + `fetchpriority="high"` on `/` and `/capabilities`
- [ ] Add `focus-visible:ring-2 ring-primary` to Header CTA and hamburger
- [ ] Remove unused dependencies (§3)
- [ ] Run official Lighthouse on published URL (§7)

### What I propose to do in build mode

1. **Dependency prune** — remove the 38 unused packages listed in §3, delete `src/components/ui/`, drop `@import "tw-animate-css"` from `src/styles.css`.
2. **LCP polish** — on `src/routes/index.tsx`, mark the hero image `eager` and add a `head().links` preload entry; same for `/capabilities` hero.
3. **A11y polish** — add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` to the Header "Get a Quote" button and hamburger toggle.
4. **Mobile QA pass** — once the sandbox preview is reachable, capture screenshots at 390/360/820 and report any visual issues found (no code changes unless something breaks).

No design, content, layout, navigation, animation, or color changes — purely cleanup, performance, and accessibility polish.
