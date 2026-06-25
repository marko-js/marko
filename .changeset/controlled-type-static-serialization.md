---
"marko": patch
"@marko/runtime-tags": patch
---

Skip serializing the controlled `type` for statically-typed controllable form fields, since it is only read back on resume by the spread attribute path. Shrinks the resume payload with no behavior change.
