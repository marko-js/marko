---
"marko": patch
"@marko/runtime-tags": patch
"@marko/compiler": patch
---

Revert a recent change to preserve parenthesized expressions in the compiler.
This caused a regression through some analysis which did not account for parenthesized expressions.
