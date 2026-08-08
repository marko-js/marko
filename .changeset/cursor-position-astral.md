---
"@marko/runtime-tags": patch
---

Caret restoration in controlled inputs now handles astral letters and digits (CJK Extension B, math alphanumerics, ...); previously the cursor jumped to the end of the value on edits near them.
