---
"@marko/runtime-tags": patch
---

Create HTML elements for content the client renders inside `<foreignObject>`, SVG `<desc>`/`<title>`, and MathML `<mi>`/`<mo>`/`<mn>`/`<ms>`/`<mtext>`, matching what the browser parses from server rendered HTML. Previously an `<if>`, `<for>`, dynamic tag, lazily loaded tag, or `$!{}` there created SVG or MathML elements, so an `<input>` inside a `<foreignObject>` rendered nothing. In development, a string dynamic tag name that the HTML parser names differently (such as `"Button"` or `"clippath"`) now logs a warning, since the client would otherwise create a different element than the server rendered HTML.
