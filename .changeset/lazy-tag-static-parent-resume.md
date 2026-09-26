---
"@marko/runtime-tags": patch
---

Fix a `Cannot read properties of undefined (reading 'parentNode')` error in optimized builds when a lazily loaded tag (`import ... with { load }`) that renders a `<try>`, `<await>`, or other control flow is imported by a template with no client code of its own. The page entry now keeps that content's resume markers until its module loads.
