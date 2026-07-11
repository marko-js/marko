---
"@marko/runtime-tags": patch
---

Keying a `<for>` by its own loop parameter (`<for|city| of=cities by=city>`) is now a guided compile error suggesting the property-string and function forms (`by="id"` / `by=(city) => key`), instead of dying at render time with a bare undefined-variable error — the `by=` expression is evaluated before the loop runs, so the loop parameter is not in scope there.
