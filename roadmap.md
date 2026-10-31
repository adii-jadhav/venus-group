# Final QA

- [ ] Refine typography, proofreading, restrained motion, accessibility and image reliability without redesigning or changing supplied assets.
- [ ] Implement canonical metadata, verified Organization data, absolute sitemap and robots for www.venusgroup.co.in.
- [ ] Run regression tests, targeted/full lint, automatic build checks and seven-width browser QA, including contact mock submissions and history restoration.
- [ ] Inspect domain setup and report safe cutover requirements without publishing or changing DNS.
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

Remaining manual checks: physical iPhone Safari/Android devices, published production runtime, and actual EmailJS delivery (browser submission was intercepted, not sent). Existing unrelated lint formatting errors remain in Footer, SectionHeading, and MCP routes; the existing router fast-refresh warning also remains.
