---
"@marko/compiler": patch
---

Advance a file's compile stage to `translate` as soon as its analysis completes, so a translator can tell a template loaded mid-analysis (an import cycle) from one that finished.
