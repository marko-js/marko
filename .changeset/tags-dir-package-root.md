---
"@marko/compiler": patch
"@marko/runtime-tags": patch
"marko": patch
---

Detect "template within a tags directory" from the taglib finder's discovered directories, so a package itself named `tags` can still contain Class API templates.
