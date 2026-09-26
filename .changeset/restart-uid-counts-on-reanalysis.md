---
"@marko/runtime-tags": patch
---

Compile a template edited under a warm compile cache to the same output as a cold compile. Generated names and register ids no longer keep counting from the template's previous analysis (`$template2`, `…/inc2`), so a server and client whose caches saw different edits agree on register ids.
