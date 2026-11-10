---
"@marko/runtime-tags": patch
---

Fix lazily loaded tags nested in other lazily loaded tags staying inert on resume: one whose module loads before its parent's and renders content, a template or a function the parent passes it, and lazily loaded tags that import each other and each read a value the other passes.
