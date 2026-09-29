---
"@marko/runtime-tags": patch
---

Fix stale values when one update changes both a tag variable and another value read in the same expression. An expression reading a dynamic tag's variable, a `<define>` tag's variable, or a child's variable returned from its input now shows the child's latest value, including when the dynamic tag switches to a new child in that same update or was remounted after `<for>` rows that read it. In production builds, a `<for>` row reading a value derived from a tag variable outside the loop no longer drops its own update made in the same click. Also fix `<for>` rows that kept a stale value after a row was prepended, when one update changed both the row's own state and a value every row reads.
