---
"@marko/runtime-tags": patch
---

Dismiss an ancestor `<try>` `@placeholder` when a nested `<await>` rejects on the client. Previously the reject path zeroed the placeholder's pending counter without completing it, so the placeholder stayed shown forever while the `@catch` content rendered only into the detached tree.
