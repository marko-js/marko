---
"@marko/runtime-tags": patch
---

Stop adding a template to the page's client bundle only because it registers a function the server writes while its input changes. The caller changing that input already bundles it, so a page whose input never changes on the client no longer ships it.
