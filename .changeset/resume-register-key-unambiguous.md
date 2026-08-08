---
"@marko/runtime-tags": patch
---

Resume registration ids are now unambiguous; previously two same-named tag variables (e.g. two `<div/x>` element refs) or bindings with `_`-joined names could share one id, silently resolving to the wrong value after resume.
