---
"@marko/runtime-tags": patch
---

A `<lifecycle>` re-runs `onUpdate` when a value its non-function attributes or `onUpdate` itself reads changes. A value read only inside a function the tag hands to the runtime (`onMount`, `onDestroy`, or a method reached through `this`) no longer re-runs it: re-running cannot re-invoke that function, and the closure reads the value where it lives when it runs.
