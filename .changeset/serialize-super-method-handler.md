---
"@marko/runtime-tags": patch
---

A method that reads `super` now stays inside the object or class it was written in instead of being hoisted into a registered function. `super` only exists inside a method, so the module level `function` the compiler emitted could not even parse, and the whole client bundle died before it ran. Marko reports the value where a `<const>`/`<let>` ships it to the browser, the same way it already reports a private class method.
