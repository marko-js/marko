---
"@marko/runtime-tags": patch
---

Ship an LLM-optimized syntax reference (`llms.md`) inside the published `marko` package. Coding agents almost never discover an unadvertised file in node_modules (1/44 in controlled testing), so `@marko/vite` points compile errors at it; with that pointer the sheet is read by 41/44 weak agents and lifts their repair success from 5/44 to 27/44.
