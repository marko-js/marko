---
"@marko/compiler": patch
"marko": patch
"@marko/runtime-tags": patch
"@marko/translator-interop-class-tags": patch
---

Move translator loading logic back into shared utility. Moving this out caused a regression for tools that call `getRuntimeEntryFiles` or `taglib.buildLookup` directly.
