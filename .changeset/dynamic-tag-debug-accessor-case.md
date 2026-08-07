---
"@marko/runtime-tags": patch
---

Debug builds now resume event handlers on camelCase dynamic native tags (e.g. a dynamic `<linearGradient>` inside `<svg>`); the debug element accessor casing previously disagreed between server and resume, leaving handlers silently dead.
