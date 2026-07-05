---
"@marko/runtime-tags": patch
---

Persisted-pages integration fixes from real-app validation: per-attr
serialize-reason groups so request-derived attr hole guards compile on tags
whose merged marker reason groups differently; a persisted spine reason on
custom-tag child scope links so pass-through root templates keep the patch
root on scope 1; update entries re-export `applyUpdate` and pair the live
root themselves (`getUpdateRoot`).
