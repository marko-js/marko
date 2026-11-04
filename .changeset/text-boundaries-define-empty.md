---
"@marko/runtime-tags": patch
---

Fix text beside a `<define>` call merging with text at the edge of its body, which left the client updating or reading the wrong text node, and a placeholder that renders nothing (`${false}`) at the edge of a loop row, a branch or passed content making the client lose track of that content's first or last node.
