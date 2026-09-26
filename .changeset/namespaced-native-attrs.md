---
"@marko/runtime-tags": patch
---

Fix dynamic namespaced attributes such as `xlink:href` and `xml:lang` on native tags. Within SVG and MathML, the client runtime now sets them in their namespace, as the HTML parser does for server-rendered markup, so `<use xlink:href=href/>` works when the browser creates or re-adds it. A bound native attribute keeps its namespace prefix (`xlink:href:=value`) instead of reading the part after the colon as a refining function. Debug builds warn when a spread or dynamic tag sets one of these attributes, since that path sets it without its namespace.
