---
"@marko/runtime-tags": patch
---

Run the production CommonJS runtime (`dist/html.js`, `dist/dom.js`) in strict mode. The build moved module-scope declarations above its `"use strict"` directive, so the directive was dropped.
