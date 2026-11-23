---
"@marko/runtime-tags": patch
---

Drop the stubs of debug-only helpers from the optimized runtime: only the debug runtime exports the helpers that debug output alone calls.
