---
"@marko/compiler": patch
---

Compile faster when Marko is the only Babel plugin (the `@marko/vite` default): the translated output is no longer re-crawled for scopes or walked by Babel's own pass when no later plugin reads it.
