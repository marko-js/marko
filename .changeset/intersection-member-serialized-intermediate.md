---
"@marko/runtime-tags": patch
---

A derived value that the server skipped because its intersection partner's changes recompute it is now serialized when a serialized value on that recompute path (such as `list.length`) can stop the recompute after resume. Previously a same-length update left it `undefined` and rendered the wrong branch.
