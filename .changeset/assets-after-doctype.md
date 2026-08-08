---
"@marko/runtime-tags": patch
---

Page asset tags are now emitted after a leading `<!doctype>`; a page entry without a literal `<head>` previously wrote them ahead of the doctype, silently putting the document in quirks mode.
