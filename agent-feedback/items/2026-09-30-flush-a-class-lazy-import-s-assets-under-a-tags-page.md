---
type: bug
impact: med
effort: med
site: packages/runtime-class/src/runtime/helpers/load-tag.js › withLoadAssets
---

# Flush a class template's lazy import assets when a Tags API page renders it

`load-tag.js` keeps its own module-level `assetFlush`, set only by the class API `withPageAssets`. When a Tags API page renders a class template that does `import X from "<x>" with { load: "render" }`, nothing sets it and SSR throws `TypeError: assetFlush is not a function`. A Tags template lazily importing a class tag is already a clear compile error; this nesting is neither rejected nor supported. Route it through the Tags page's asset flushing, or reject it with a clear error.

Check: a `fixtures-interop` fixture with Tags `template.marko` `<let/n=0/><class-widget/>` and `components/class-widget.marko` `import Child from "<child>" with { load: "render" }` / `class {}` / `<Child value=42/>`: the ssr test throws `assetFlush is not a function`.
