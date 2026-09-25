---
"@marko/runtime-tags": patch
---

Render a template or parameterized body that reaches a native tag's content through a spread or `content` attribute with an empty input, as `<${input.content}/>` does. The server previously called it with no input and the client never applied one.
