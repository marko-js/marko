---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Report an HTML comment written inside a tag's attributes as its own compile error. Previously `<div <!-- note --> class="a">` either surfaced an unrelated "Unexpected types" parse error or, when the `<!--` landed after an attribute value, silently compiled into a mangled expression.
