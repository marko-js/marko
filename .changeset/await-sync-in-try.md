---
"@marko/runtime-tags": patch
---

Render a non-promise `<await>` value synchronously even when the `<await>` is inside a `<try>`. Previously the browser runtime could only render it synchronously at the top level and deferred to the next tick inside a `<try>` (because the await value is resolved before its content branch is created); it now renders in the same pass.
