---
"@marko/runtime-tags": patch
---

Register an event handler that only reads section params (a `<for>` item, an `<await>` value, a tag body param) once when its branch is created, instead of re-attaching it every time the param value changes. The handler reads the current param from its own scope slot when invoked, so re-registration was redundant work on each keyed-list or param update.
