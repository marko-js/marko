---
"@marko/runtime-tags": patch
---

Stop emitting a resume branch start marker for an `<if>` that renders no branch, or a dynamic tag that resolves to nothing. The stray marker shifted an enclosing branch's range, so after resume that branch's content was left in the DOM instead of being removed or was duplicated when re-rendered.
