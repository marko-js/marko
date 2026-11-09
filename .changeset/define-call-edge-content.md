---
"@marko/runtime-tags": patch
---

Drop the range markers around content that starts or ends with a `<define>` call, such as a `<for>` row, an `<if>` branch or a template rendering a `<define>` declared above it: the client clones two fewer comment nodes per row (four for a template whose edge is a `<define>` call, rendered in a loop), and the server writes one fewer comment per row or branch.
