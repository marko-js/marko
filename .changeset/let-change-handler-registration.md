---
"@marko/runtime-tags": patch
---

A function that reaches a change handler through a variable, such as a `<const>` or a parent's input (`<let/x:=input.value/>`, `<input value:=input.value/>`), is now registered for resume. Previously the handler was serialized without its function being registered, so SSR threw `Unable to serialize` in development and dropped the handler in production.
