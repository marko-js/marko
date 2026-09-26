---
"@marko/runtime-tags": patch
---

Report a compile error for elements the client creates directly in an HTML integration point (`<foreignObject>`, an SVG `<title>` or `<desc>`, or a MathML `<mi>`, `<mo>`, `<mn>`, `<ms>` or `<mtext>`): control flow holding elements, a dynamic or lazy tag, or `$!{}`. The client created those elements as SVG or MathML while the page parser makes them HTML, so for instance an `<input>` in a `<foreignObject>` rendered nothing. Wrapping the content in an HTML element such as a `<div>` makes it work.
