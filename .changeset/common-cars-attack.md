---
"@marko/compiler": patch
---

`t.markoPlaceholder(value)` escapes its value again when no `escape` argument is passed, and the other Marko node builders set an omitted optional field to `null`, as Babel's builders do.
