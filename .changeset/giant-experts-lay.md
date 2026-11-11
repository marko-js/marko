---
"@marko/runtime-tags": patch
---

Run the params of content that no tag calls (a native tag's content, a falsy-named dynamic tag's body, a `<try>` placeholder) with no arguments on the client, as the server renders it, so values derived from absent params render.
