---
"@marko/runtime-tags": patch
---

Stream less and faster. Resume data now serializes only when a flush is sent, so each flush carries one larger batch instead of one per settled `<await>`, and server render time no longer grows with the square of the number of `<try>` tags or of `<await>`s pending out of order.
