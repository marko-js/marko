---
"@marko/runtime-tags": patch
"marko": patch
---

Replace the opaque `Cannot destructure property 'local' of undefined` crash with a clear compile-time diagnostic when a `load` import has no default specifier (e.g. `import "./foo.marko" with { load: "render" }` with nothing bound).
