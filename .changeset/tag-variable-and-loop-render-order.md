---
"@marko/runtime-tags": patch
---

Fix stale values when one update changes a tag variable and another value read with it. A dynamic tag's child, a child nested inside it, a remounted child, and a `<const>` derived from a child's variable now update every expression that reads them in the same update, rendering each once. Also fix `<for>` rows that kept a stale value after a row was prepended, and a `<for>` row reading a value derived from a tag variable outside the loop dropping its own update in production builds.
