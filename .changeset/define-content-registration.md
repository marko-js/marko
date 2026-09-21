---
"@marko/runtime-tags": patch
---

Content passed to a same-file `<define>` resolves its serialize reason through the call site, as content passed to a tag in another file already did, so static content no longer registers for resume (and bundles) just because the root scope has state.
