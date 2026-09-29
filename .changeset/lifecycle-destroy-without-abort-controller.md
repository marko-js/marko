---
"@marko/runtime-tags": patch
---

Register a `<lifecycle>` tag's `onDestroy` without creating an `AbortController` for it. An error thrown from `onDestroy` now escapes the update, as one thrown from `onMount` or `onUpdate` does, instead of being reported from an abort event.
