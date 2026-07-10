---
"@marko/runtime-tags": patch
---

Fix resume claiming the wrong node for stateful text that serializes empty directly after an element or comment sibling (`<div><span>s</span>${text}</div>` with empty text bound updates to a `.data` expando on the span, and a preceding `<html-comment>`'s content was overwritten). Such placeholders now emit the same protective `<!>` separator used between sibling text.
