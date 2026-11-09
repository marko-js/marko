---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/common/helpers.ts › normalizeDynamicRenderer
---

# Tell data carrying the renderer id key from a renderer without the compat layer

`normalizeDynamicRenderer` takes any object with `RendererProp.Id` for a renderer, and that key is `id` in a debug build and `a` in an optimized one, so on a page without the compat layer data with that key, which a dynamic tag otherwise renders body-only (`<${navigator}>x</>`), crashes in one build and renders in the other. The compat layer already tells them apart (`dom/compat.ts` › `compat.isRenderer` checks the clone, `html/compat.ts` › `compat.isRenderer` that it is a function), but doing so in the base runtime costs every page with a dynamic tag or native spread about +28 min / +14 brotli. Look for a renderer mark data cannot carry that costs no more than the id read, rather than adding that check.

Check: a `fixtures` fixture `<${input.tag}><span>body</span></>` with steps `[{ tag: { id: "x" } }]` fails its debug `ssr` and `csr` runs instead of rendering the body.
