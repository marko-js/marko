---
"@marko/runtime-tags": patch
---

Hold DOM updates until a commit point at the end of each render pass when the app uses client-side `<await>` or lazy tags. New conditional/dynamic-tag branches are fully populated before being attached, and branch swaps remove the outgoing content before inserting the incoming content. Rendered output and the sequence of DOM writes are unchanged; apps without client async pay no size or behavior cost. This is groundwork for async transitions.
