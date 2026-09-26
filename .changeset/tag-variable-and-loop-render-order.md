---
"@marko/runtime-tags": patch
---

Fix stale values when one update changes both a tag variable and another value read in the same expression. An expression reading a dynamic tag's variable, a `<define>` tag's variable, or a tag variable returned from input now shows the child's latest value, including when the dynamic tag switches to a new child in that same update. Also fix `<for>` rows that kept a stale value when a click changed both the row's own state and a value read by every row after a row was prepended. Debug builds now log an error when a render queued again in the same update would be dropped.
