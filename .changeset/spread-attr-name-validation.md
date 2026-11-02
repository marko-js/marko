---
"marko": patch
---

Skip spread attribute names containing whitespace, `/`, `=`, or quotes during SSR, matching Marko 6, so one key can no longer render as several attributes.
