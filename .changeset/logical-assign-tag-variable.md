---
"@marko/runtime-tags": patch
---

Fix `x ||= …`, `x &&= …` and `x ??= …` on a tag variable crashing the DOM compile with an internal Babel error, and skip the assignment entirely when the operator short circuits.
