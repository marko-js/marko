---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/load.ts › insertLoaded
---

# Wait for in-flight stylesheets before inserting lazy content

Vite's `__vitePreload` marks a css dependency as `seen` before it inserts the
`<link>`, and only that first caller awaits the sheet's `load`; any later
`import()` naming the same css (a second import of the chunk, or another chunk
sharing the split css) resolves as soon as its javascript is available. A lazy
template inserted at that moment (`_load_template`, `_load_setup`) paints
unstyled until the sheet lands; a router that preloads a route's chunk on click
and then renders it is the common trigger. Present in vite 8.3.0 and its `main`
(`importAnalysisBuild.ts`, `preload`: `if (dep in seen) return`); no upstream
issue found. Options, in order: an upstream fix (keep the pending promise in
`seen` and return it to repeat callers), else gate the two lazy inserts on
`link[rel=stylesheet]` elements whose `sheet` is still null (count their
`load`/`error` events, no re-scan: jsdom never sets `sheet`) at about +20 B
brotli. A gate prototype and its guard fixture (`lazy-tag-pending-stylesheet`:
append a pending link, show the lazy child, assert nothing inserts until the
link's `load` fires) live in the reflog of this branch.

Check: a vite build whose entry does `import("./lazy.js")` twice 50ms apart,
`lazy.js` importing a css file, with css responses delayed 1s: the second
import resolves at ~70ms with `document.querySelector("link[rel=stylesheet]").sheet === null`,
the first at ~1s after the sheet loads.
