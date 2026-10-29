# Project rules
- Keep homepage entry-scroll policy in a browser-safe helper; reset only fresh/reloaded home entries and retain per-history-entry restoration for back/forward navigation.
- Preserve intrinsic width/height on unconstrained editorial images to reserve their original aspect ratio before loading.
- Run the test suite with `bun test`, not `bunx vitest run`; the tests import `bun:test`, which vitest cannot resolve.