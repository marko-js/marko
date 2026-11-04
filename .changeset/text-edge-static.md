---
"@marko/runtime-tags": patch
---

Fix resumed text leading passed content, a loop row or a branch that the server wrote right after other text with no marker between them, which merged the two text nodes so a client update overwrote the text before it (`${input.label}<${input.content}/>` with content `${count}`).
