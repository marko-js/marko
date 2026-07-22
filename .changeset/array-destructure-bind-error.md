---
"@marko/runtime-tags": patch
---

Give a cause-specific error when two-way binding (`value:=x`) to a value from array destructuring, explaining that it has no change handler and suggesting object destructuring or an explicit `Change` attribute, instead of the generic "Unable to bind to value."
