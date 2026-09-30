---
"marko": patch
---

Stop bundling a template imported `with { load }` into the page's hydrate entry when its importer does not render in the browser (a server only or split component), which loaded it eagerly and ignored its load trigger.
