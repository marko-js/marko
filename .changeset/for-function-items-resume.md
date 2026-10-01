---
"@marko/runtime-tags": patch
---

Resume functions written in a `<for>` loop's items, such as `<for|fn| of=[() => 1]>` or `of=[{ f: () => n++ }]`, when the loop's content keeps one for the browser. They were never registered, so the page could not serialize them. A function reaching the items through a call (`of=[fn].concat(list)`) is still not registered.
