---
"@marko/runtime-tags": patch
---

Stop shipping trailing walk exit codes on content and branch renderers. `_content` strips them before walking, so they were only ever bytes on the wire — 29 walks in the test fixtures drop out entirely.
