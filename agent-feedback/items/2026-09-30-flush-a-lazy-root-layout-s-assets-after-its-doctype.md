---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/assets.ts › withLoadAssets
---

# Flush a lazy root layout's assets after its doctype

`withLoadAssets` flushes every pending asset (the page entry's and its own) before rendering the lazy template, so a lazy template that opens with `<!doctype html>` streams `<script>`/`<link>` ahead of the doctype, which puts the document in quirks mode. A `@marko/run` patch build imports a root layout only some routes share with `load: "render"`, so such an app hits this on every document. On a patch page, `_flush_head_patch` could take these too if the reservation covered the whole first pass rather than starting at the head; a page with no head then needs its deferred trigger scripts written into its first flush, which `__flush__` (called once the flush's scripts are already joined) cannot do.

Check: a `patches: true` fixture whose `template.marko` renders `import Layout from "./layout.marko" with { load: "render" }` around a lazy page, with `layout.marko` opening `<!doctype html><html><head>`: `writes.html` begins with `<script async type=module src="layout.marko.load.mjs"></script>` before `<!doctype html>`.
