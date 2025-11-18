---
"@marko/runtime-tags": patch
---

Avoid walking for comment markers when runtime is loaded, it should always be done by the inline script and was causing a race condition where a scope could be incorrectly duplicated.
