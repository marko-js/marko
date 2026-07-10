---
"@marko/runtime-tags": patch
---

Fix hydration never completing when an `<await>` inside streamed content is dropped by a `<try>` catch. Reorder markers whose content can no longer render now flush as empty reorders so client counters settle.
