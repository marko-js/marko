---
"@marko/runtime-tags": patch
---

Share the await frame scheduler between `addAwaitCounter` and `_await_promise`, slightly shrinking dom bundles that use `<await>`.
