---
"@marko/compiler": patch
---

Escape text content in `output: "source"` and `"migrate"` with htmljs-parser's `escapeText`, so a literal `\${text}` no longer comes back as a live placeholder, and stop inserting a space between adjacent text nodes, which rendered as an extra space.
