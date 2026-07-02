---
"@marko/runtime-tags": patch
---

Hex escape `;` in dynamic `<style>` values so escaped values never contain a raw `;`, letting the client-side rule updater find a declaration's end with `indexOf` instead of an escape-aware character scan.
