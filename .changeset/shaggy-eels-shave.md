---
"@marko/runtime-tags": patch
---

Close the target stream when a render piped with `pipe()` aborts, so an aborted render no longer strands a transform sink such as gzip.
