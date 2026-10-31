# Project rules
- Keep homepage entry-scroll policy in a browser-safe helper; reset only fresh/reloaded home entries and retain per-history-entry restoration for back/forward navigation.
- Preserve intrinsic width/height on unconstrained editorial images to reserve their original aspect ratio before loading.
- Run the test suite with `bun test`, not `bunx vitest run`; the tests import `bun:test`, which vitest cannot resolve.
- Keep numeric facility statistics in the browser-safe company facility counts module, with manufacturing plants and automotive service facilities separate, so shared statistics cannot count automotive service as manufacturing.
- Keep public SEO metadata and verified Organization data in a browser-safe shared module, with canonicals and social metadata on leaf routes only, to prevent conflicting root metadata.
- Render reveal content and image pixels visible before hydration; arm only offscreen reveals after observation is available, with a bounded fallback, so JavaScript failure cannot hide essential content.