---
"@marko/runtime-tags": patch
---

Fix the published `./tags-html` subpath export, which was dropped from the production `exports` map, breaking Marko 5's global HTML/SVG type declarations for consumers.
