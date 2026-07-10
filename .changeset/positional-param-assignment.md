---
"@marko/runtime-tags": patch
---

Fix assignments to a positional tag parameter (e.g. `<for|item|>` + `item = x` in a handler) generating code that referenced an undeclared binding, throwing `ReferenceError: $Change is not defined` during SSR. This is now a compile error pointing at the assignment, since a positional parameter has no object to carry a change handler.
