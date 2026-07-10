---
"@marko/runtime-tags": patch
---

Skip serializing `<let>` values that still equal a static primitive default; the client rebuilds the default from the compiled output, so untouched state (e.g. per-row counters/flags in loops) no longer costs resume payload.
