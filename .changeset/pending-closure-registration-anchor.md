---
"@marko/runtime-tags": patch
---

Stop pure-annotating `_closure_get` calls that carry a pending resume register id. The id is referenced by serialized resume data with no static import, so the registration side effect is the call's only anchor in the client graph; annotated, a bundler tree-shakes it and resuming a `<try>` placeholder boundary then crashes with `TypeError: <fn> is not a function` when the server replays the pending closure.
