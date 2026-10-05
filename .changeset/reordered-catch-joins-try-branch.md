---
"@marko/runtime-tags": patch
---

Resume a `@catch` that streams after its `<try>`'s body inside the `<try>`'s branch, so removing the content around the `<try>` also stops the catch's effects and closures. It used to stream under an id the client could not tie to any branch, leaving the removed catch running. Content streamed after a `@placeholder` body's reorder is also no longer adopted into its `<try>` when the page's client script runs late, which froze the page once the `<try>` was removed.
