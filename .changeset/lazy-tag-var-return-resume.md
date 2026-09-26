---
"@marko/runtime-tags": patch
---

Return a lazily loaded tag's tag variable during server rendering, and resume it in the browser. Its value, and values beside the tag that hold it (destructured, aliased, or built from it), are sent with the tag's lazy module, so the parent can call it once that module loads, and later values the tag returns reach the parent. A value from lazily loaded content that would be serialized outside of it now reports an error in development and is left out in production, since the browser may not have loaded its module yet.
