---
"@marko/runtime-tags": patch
---

Dismiss a `<try>`'s `@placeholder` when the branch holding a pending `<await>` is destroyed. The resolve handler completed the await counter from inside a queued render, which is dropped once the branch is gone, so the boundary stayed on its placeholder for the life of the page.
