---
"@marko/runtime-tags": patch
---

Fix a derived value computed only from closures inside a branch (`<if>`, `<for>`) rendering one update late when the same event also updated an input of the tag that consumes it.
