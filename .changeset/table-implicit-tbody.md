---
"@marko/runtime-tags": patch
---

Write out the `<tbody>` a browser adds around table rows written directly in a `<table>`, so a client render no longer throws or updates the wrong element when those rows have dynamic content or attributes, and rows a `<for>` or `<if>` renders directly in a `<table>` get the same `<tbody>` on client and server renders.
