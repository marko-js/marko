---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/__tests__/utils/track-mutations.ts › createMutationTracker
---

# Report errors a lazy module's resume throws in fixture renders

A lazy load entry calls `ready()` inside `import(…).then(…)`, so anything its resume throws (an effect, a registry id nothing registered) rejects a promise no one handles. That rejection never reaches the tracker's `unhandledrejection` listener, so the render snapshot reads as if the effect simply never ran. A resume bug in lazy content therefore shows up only as a quieter snapshot, or as a debug/optimize parity diff when module timing differs between the builds, never as the error itself. Surface rejections raised in the fixture's browser context during a step as render errors, as a thrown inline script already is.

Check: a fixture whose `template.marko` is `import Child from "./child.marko" with { load: "render" }` then `<Child/>`, with `child.marko` holding `<div/>` and `<script>throw new Error("x")</script>`, passes `pnpm run test:update` with a clean `render-ssr.md`; drop `with { load: "render" }` and it fails with `Error: x`.
