---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Decode character references in a static `<textarea>` body, so `<textarea>&lt;p&gt;</textarea>` renders `<p>` instead of the literal entity text.
