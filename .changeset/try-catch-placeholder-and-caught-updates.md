---
"@marko/runtime-tags": patch
---

Fix `<try>` error handling in the browser. An error thrown while rendering a `@placeholder` that the browser creates is now caught by the same `<try>`'s `@catch`, as it is on the server, instead of escaping the update. A `<try>` that has caught in the browser stays caught when its `@catch` or `@placeholder` input changes: an error thrown by its `@catch` content now reaches the enclosing `<try>` instead of being caught again by the same `@catch`, and an empty `@catch` no longer renders the body again.
