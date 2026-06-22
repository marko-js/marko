---
"@marko/runtime-tags": patch
---

Render a `<await>` tag synchronously when its value is not a promise, instead of crashing with `value.then is not a function`. This matches the server runtime, which already renders non-promise values synchronously.
