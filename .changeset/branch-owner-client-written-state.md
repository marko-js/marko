---
"@marko/runtime-tags": patch
---

Fix a handler inside an `<if>` or `<for>` throwing after resume when the branch's condition reads state that only code the client never runs assigns. The branch's owner is now resumed from the payload, since that page's bundle has no branch visiting to link it by its marker.
