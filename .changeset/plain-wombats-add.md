---
"@marko/runtime-tags": patch
---

Resume an `<if>` that is its element's only child from its end marker, instead of serialized branch and owner links, when the condition never changes on the client but another control flow tag in its template does, and drop the owner link of every branch whose marker carries it there.
