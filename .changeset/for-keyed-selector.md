---
"@marko/runtime-tags": patch
---

Optimize the common "selected row" pattern: when a value from the loop's parent scope — a `<let>`, a `<const>`, or an `input` member — is compared for equality against a `<for>` loop's unique key (e.g. `class=(selected === row.id && "danger")`, `input.selected === row.id`, or `<if=selected === row.id>`), a change to that value now updates only the two affected rows (the one losing the key and the one gaining it) instead of re-running the binding for every row — turning an O(n) update into O(1). Detected automatically at compile time for `of`/`by`, `of` index, `in` name, and `to`/`until` range keys, including multiple such values per loop; no template changes required.
