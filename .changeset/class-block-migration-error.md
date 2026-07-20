---
"@marko/runtime-tags": patch
---

Report a clear migration error for a removed `class {}` component block. A Marko 5 `class { … }` block compiled with the tags API previously surfaced htmljs-parser's generic `Invalid attribute name.` with the caret on the class body, giving no hint that the class-component API was involved. The tags translator now recognizes `class` as a removed core tag and reports `class {} component blocks are no longer supported. Use <let> and <const> tags for state.` with the caret on `class`. Class-API (Marko 5) compilation is unaffected.
