---
"@marko/runtime-tags": patch
---

Fix static (server only) pages not linking their client side assets. Colocated style files (eg `template.style.css`), `<style>` blocks, and imports matching the `hydrateIncludeImports` option are now included in a page's client entry even when nothing in its template tree is interactive, so completely static routes are no longer rendered unstyled.
