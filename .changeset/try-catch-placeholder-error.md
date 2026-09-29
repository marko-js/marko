---
"@marko/runtime-tags": patch
---

Fix `<try>` error handling in the browser. An error thrown while rendering a `@placeholder` that the browser creates is now caught by the same `<try>`'s `@catch`, as it is on the server, instead of escaping the update.
