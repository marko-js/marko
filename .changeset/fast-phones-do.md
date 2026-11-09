---
"@marko/runtime-tags": patch
---

A `<define>` param that every call passes as a constant no longer makes the server send what only that param's changes would read, such as a closure value or the `<define>` itself, a function nothing would send is no longer registered for resume, and a rest nothing would send is declared in the branch that renders it instead of outside it.
