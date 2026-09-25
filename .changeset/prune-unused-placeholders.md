---
"@marko/runtime-tags": patch
---

A `<try>`'s `@placeholder` no longer ships in a production client bundle that has nothing able to wait in the browser: no `<await>` whose value changes or that the browser renders, and no lazy tag it renders or loads.
