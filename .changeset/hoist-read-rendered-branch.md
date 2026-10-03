---
"@marko/runtime-tags": patch
---

Fix a tag variable hoisted out of one branch of an `<if>`/`<else>` chain reading the other branch when its own is not rendered. Calling it returned whatever the rendered branch held in the same place, such as one of its elements in an optimized build, and iterating it yielded that value; it now returns `undefined` and yields nothing.
