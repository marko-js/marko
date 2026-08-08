---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a dynamic tag with a tag variable throwing when its value changes from rendered to falsy; the tag variable now also clears on teardown.
