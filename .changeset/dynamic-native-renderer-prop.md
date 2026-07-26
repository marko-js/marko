---
"@marko/runtime-tags": patch
---

Stop writing a dynamic native tag's renderer name into the resume payload in production. Only the debug accessor reads it, so optimized pages paid `R:"<tagname>"` per instance for a field nothing consumes.
