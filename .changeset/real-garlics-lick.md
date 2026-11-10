---
"marko": patch
"@marko/runtime-tags": patch
---

The Class API interop layer loads from its own `@marko/runtime-tags/dom/compat.feat` and `@marko/runtime-tags/html/compat.feat` entries instead of the main `dom` and `html` entries, so only pages that mix in Class API components load it, and the server and development runtimes of a Tags-only app no longer include it. `marko` now depends on the exact `@marko/runtime-tags` version it ships with; an earlier `marko` cannot load this layer from a newer `@marko/runtime-tags`, so upgrade both together.
