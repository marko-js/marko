---
"@marko/runtime-tags": patch
---

Speed up keyed `<for>` reconciliation: build the old-scope key map with a plain loop, mark reused scopes instead of deleting each match from the map, and keep the loop's DOM calls in helpers so its optimized code survives a CPU profiler starting.
