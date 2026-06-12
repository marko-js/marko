---
"marko": patch
"@marko/runtime-tags": patch
"@marko/compiler": patch
---

Add version APIs for tooling: `@marko/compiler` now exports its `version`, translators export theirs, and `getRuntimeVersion(translator)` returns the resolved translator's version.
