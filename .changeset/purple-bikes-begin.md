---
"@marko/runtime-tags": patch
---

Fix issue where variables from pruned server/client statements were becoming implicit globals (now injects local undefined variables).
