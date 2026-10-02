---
"@marko/runtime-tags": patch
---

Fix a handler inside an `<if>` or `<for>` throwing after resume when the branch's condition reads state assigned only by code that never runs in the browser. Such a branch's owner is now resumed from the payload, since the branch's own runtime is not in the page's bundle to link it by its marker.
