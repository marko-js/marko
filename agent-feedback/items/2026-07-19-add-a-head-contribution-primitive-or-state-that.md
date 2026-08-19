---
type: unclear
impact: med
effort: med
site: packages/runtime-tags/src/html/assets.ts › _flush_head
---

# Add a head-contribution primitive, or state that nested `<title>`/`<meta>`/`<link>` never hoist

The HTML runtime writes in source order with no head-relocation pass, so a component under `<main>` that emits `<title>`, `<meta name=description>` or `<link rel=canonical>` renders them in the body — duplicate titles and an inert canonical link. The only head hook is `_flush_head`, written at a literal `</head>` by native-tag.ts:719 when `linkAssets` is on; it flushes assets already collected and cannot pick up tags written later. (`_hoist` in html/writer.ts is scope-resume plumbing, not head hoisting.) The only answer today is prop-drilling meta up to the layout that owns `<head>` — unrelated to the `@marko/run` `+meta.json` finding, which is about typing heterogeneous meta across sibling routes, not where head tags land. Direction: a descendant-contributes-to-head primitive (cf. `<svelte:head>`, `@solidjs/meta`), or — since the website docs live in the separate markojs.com repo — at minimum an explicit no-hoisting note in `packages/runtime-tags/cheatsheet.md`.

Check: `pnpm run compile -o html -d` on `<html><head><title>Layout</title></head><body><main><title>Nested</title></main></body></html>` emits both titles in source order.
