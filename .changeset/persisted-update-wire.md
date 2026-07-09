---
"@marko/runtime-tags": patch
---

Persisted update renders now deliver the bytes goal: mixed
(stateful + request-derived) reasons keep their request bits in guards
(`1 | <dynamic>`), so real page shapes (`<if>/<else>` with interactive
content) emit branch outcomes, links, and hole values; dynamic tags
(layout `<${input.content}/>`) serialize their branch link under the
persisted spine and merges dispatch registered content merges by renderer
id; and update responses suppress all static HTML, emitting a
newline-delimited stream of serializer frames (bare fill arrays) instead of
a document.
