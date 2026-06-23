---
"@marko/runtime-tags": patch
"marko": patch
---

Keep a presentational Class API child that a Tags API component renders with only static input server-only: it renders to static HTML and is dropped from the browser bundle (along with the Class API runtime and compat layer it would otherwise pull in).
