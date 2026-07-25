---
"@marko/runtime-tags": patch
---

Emit one walk step for a run of static text split by a sibling that renders nothing. Adjacent static text merges into a single DOM text node even when a `<const>`, `<let>`, `<script>`, `<lifecycle>`, scriptlet, or import sits between the two runs, but each run still claimed its own step, so every accessor after that point in the section was off by one sibling. A client render then bound to the wrong node, which surfaced as a `TypeError` on the first event handler attach rather than as visibly wrong output.
