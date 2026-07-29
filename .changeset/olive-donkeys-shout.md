---
"@marko/compiler": patch
---

Add a `persisted` config option for translators that compile a document meant to survive navigation. It splits the compile cache, since analysis is shared across outputs.
