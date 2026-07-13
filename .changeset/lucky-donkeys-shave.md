---
"@marko/compiler": minor
"@marko/runtime-tags": patch
"marko": patch
---

Import tags from installed packages by the name their taglib was resolved through, instead of by a realpath which for a virtual store (eg pnpm) is not importable.
