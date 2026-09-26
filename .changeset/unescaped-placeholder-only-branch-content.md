---
"@marko/runtime-tags": patch
---

Fix a `Cannot read properties of null (reading 'namespaceURI')` error when a `<for>` body is only an unescaped placeholder of a loop parameter (`<for|html| of=list>$!{html}</for>`). It threw on the first client render, and after resume whenever a row was added.
