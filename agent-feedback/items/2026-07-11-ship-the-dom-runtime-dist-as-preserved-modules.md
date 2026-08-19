---
type: perf
impact: med
effort: low
site: packages/runtime-tags/scripts/bundle.mts
---

# Ship the dom runtime dist as preserved modules for file-granular chunking

`bundle.mts` writes the dom runtime as a single `dist/dom.mjs`, so an application bundler hosts the whole runtime in the first chunk that needs any of it. Emitting preserved modules behind a `dom.mjs` re-export facade lets app bundlers chunk the runtime at file granularity — which is what makes the module-hosting splits land for published consumers, not just src-linked dev. `scripts/sizes.mts` must then classify the whole dist directory as runtime, since `runtimePath` (the facade) stops being the only runtime module id. Depends on the runtime being analyzably pure for unused files to actually drop.

Check: by bundling a fixture against the new dist and confirming unreferenced runtime files leave the entry chunk.
