---
"@marko/runtime-tags": patch
---

Make the server runtime tree-shakable: `patchDynamicTag`, the generator prototype patch, and the serializer's well-known tables are no longer module-import side effects, so bundlers can drop unused SSR runtime (a bare static-page SSR bundle drops ~4.7 kB minified / ~1.6 kB brotli).
