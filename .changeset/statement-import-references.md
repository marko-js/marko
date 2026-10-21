---
"@marko/compiler": patch
---

Strip the type imports of `static`, `server` and `client` statements where they are written, rather than moving every import of those statements out and back, which dropped what read them until the compiler crawled the template again.
