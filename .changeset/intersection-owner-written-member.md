---
"@marko/runtime-tags": patch
---

Fix a resumed `<define>` body or `<for>` row that combines a value of the template its parent always writes (such as `input.p1` a `<script>` also reads) with one of its own (a param or `<let>`): when its own value changed on the client, it threw reading the template's value, since the link to its owner scope was not written.
