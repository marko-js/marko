---
"@marko/runtime-tags": patch
---

A function `<const>` that is only ever called (from event handlers, or by a child tag that only calls it) is now created once instead of on every change to what it reads, and one only called or attached as an event handler is built by the browser instead of sent in the resume data. The same applies to function inputs of tags declared with `<define>`. A child tag that calls a function input while evaluating an attribute, such as `onClick=getHandler()`, now updates when that input changes.
