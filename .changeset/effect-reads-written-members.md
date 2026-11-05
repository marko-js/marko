---
"@marko/runtime-tags": patch
---

Fix a `<script>`, `<lifecycle>`, event handler or function passed to a child that reads several values computed from one source, such as `input.items.length` and a `<const>` computed from `input.items`: on a resumed page it recomputed the `<const>` from a source the server never wrote, throwing or reading `NaN`. It now reads the values the server wrote.
