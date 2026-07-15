---
"@marko/runtime-tags": patch
"marko": patch
---

Fix Marko 6 files in a mixed (interop) project being misclassified as Class API, and failing to compile, when their only distinguishing feature is the Tags-only `<show>` core tag. `<show>` is now recognized as a Tags API marker during feature detection.
