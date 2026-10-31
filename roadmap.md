# Final QA

- [x] Add server-side permanent redirects for the ten specified legacy paths, handle both slash forms, and verify HTTP status and destination without publishing. All 20 variants return HTTP 301 locally; four representative destination pages return 200 with JavaScript disabled; unrelated paths remain 404. Twenty-three Bun tests, targeted lint and formatting passed; full lint passed with the existing router warning; automatic build/TypeScript reports build OK. Published edge/custom-domain behaviour awaits authorised publication and domain connection.

- [x] Refine typography, proofreading, restrained motion, accessibility and image reliability without redesigning or changing supplied assets.
- [x] Implement canonical metadata, verified Organization data, absolute sitemap and robots for www.venusgroup.co.in.
- [x] Run regression tests, targeted/full lint, automatic build checks and seven-width browser QA, including contact mock submissions and history restoration. Eleven Bun tests passed; targeted lint and formatting passed; full lint passed with one existing router warning after excluding generator-owned files and caches (initial attempt timed out). Automatic build/TypeScript checks report build OK. All 42 public route/width combinations passed; sitemap/robots, 404, no-JS visibility, reduced motion and contact mock states passed.
- [x] Inspect domain setup and report safe cutover requirements without publishing or changing DNS. Project is unpublished; www.venusgroup.co.in is unmanaged here, with no Lovable ownership records available. No publication or DNS action taken.
- [x] Replace the two About "OUR STORY" photographs with the sharper supplied originals; verify both load at their true size, stay aligned and responsive, and that no slide artifacts remain.
- [x] Correct manufacturing counts to five, separate Venus Auto as an automotive service facility, and verify counts, grouping, images, and responsive behavior without publishing. Seven Bun tests, targeted lint and preview build checks passed; browser checks passed at 320/390/768/1280px. Whole-project lint was attempted but timed out.
- [x] Replace the HPDC Production Plant photo in Infrastructure Manufacturing Units with the newly supplied building photo; verify it displays correctly at phone and desktop widths.
- [x] Remove the "Precision CNC Machining" photo box from Infrastructure; keep the stats row and six Manufacturing Units cards unchanged.
- [x] Replace the Solidus text fallback in the Industries customer grid with the official Solidus Hi-Tech Products logo; verify it loads and stays legible at phone and desktop widths.
- [x] Add the two story photographs below the "OUR STORY" paragraphs on About; strip the slide frame, cut-off text and graphic overlap, then verify both display aligned and responsive.
- [x] Replace the five Manufacturing Units photos (Progressive Tools, Plastic Injection, Press Parts, HPDC Production, Venus Auto) with the newly supplied images; verify each card shows the right photo at phone and desktop widths.
- [x] Replace the two Industries award photos with the supplied enhanced images; even out the two award cards and verify both display uncropped and responsive.
- [x] Remove the "Our Facility" photo section from the homepage; keep the charcoal hero and About section unchanged.
- [x] Restore the charcoal homepage hero and place the existing factory photo separately beneath it; validate responsive framing and unchanged scrolling.
- [x] Fix homepage refresh restoration and photo framing/contrast.
- [x] Apply confirmed animation, mobile menu, image sizing, and stale-copy fixes.
- [x] Validate six routes, navigation, history, images, and contact validation; report limits.
- [x] Make the Venus Auto card match the other plant cards: one grid cell, photo + name + location + phone only; no subtitle or service list.

Remaining launch dependencies: domain owner must complete connection/ownership setup and approve publication before cutover; exact Lovable DNS requirements are not available yet. Production HTTPS and social-image URLs must be checked after the authorised cutover. Physical iPhone Safari/Android checks, real-user Core Web Vitals and actual EmailJS delivery remain unverified; submissions were intercepted without sending mail. The existing router fast-refresh lint warning remains. Preserve existing solar statistics pending owner confirmation: the 2019 installation is 300 kVA; Infrastructure currently shows 350 kVA, which may refer to a later total. No manual production build was run; automatic build/TypeScript checks were used as required by the environment.
