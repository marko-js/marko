---
"@marko/runtime-tags": patch
---

Compile `<for by>` selector comparisons without an intersection. When a keyed list body compares the loop key to an owner value (e.g. `class=(selected === row.id && "danger")`), the key is stable per branch, so the comparison now depends only on the owner value and compiles to a plain for-selector closure instead of an `_or` intersection — smaller output, no per-row intersection coordination, and the comparison no longer re-runs when unrelated row data changes.
