---
"@marko/runtime-tags": patch
---

Fix a function that reads a tag variable declared below it without calling it (such as `() => later`) compiling without its scope and throwing `$scope is not defined` when called.
