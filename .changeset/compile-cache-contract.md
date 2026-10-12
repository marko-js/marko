---
"@marko/compiler": patch
---

A compile cache now checks only a cached template's own code and taglib files on each reuse, rather than every template it analyzed. Clear the cache (or pass a new one) whenever a file it compiled may have changed, as `@marko/vite` does on each hot update.
