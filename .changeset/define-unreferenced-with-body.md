---
"@marko/runtime-tags": patch
---

Fix a DOM compile of a template containing a `<define>` with body content whose tag variable is never referenced failing with `Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it.`
