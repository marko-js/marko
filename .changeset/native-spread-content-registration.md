---
"@marko/runtime-tags": patch
---

Content rendered only through a native tag spread (`<div ...attrs>` with `attrs.content`, including attribute tag items spread in a `<for of>` or `<for in>`, forwarded to a child that spreads them, or spread into a custom tag that spreads its input) is no longer registered for resume, so its renderer, and anything only it keeps, tree-shakes out of the client bundle. Content spread directly also no longer writes the closures it would need to be rebuilt when nothing can rebuild it.
