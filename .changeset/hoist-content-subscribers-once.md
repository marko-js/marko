---
"@marko/runtime-tags": patch
---

Server output now creates one subscriber set for a content body that several sibling branches hoist tag variables through, instead of one per branch, all but the last of which were never written.
