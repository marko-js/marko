---
"@marko/compiler": patch
---

Propagate package identity through `taglib-imports` so tags from a nested imported taglib resolve by their package name instead of a realpath (eg pnpm's virtual store) that may not be importable.
