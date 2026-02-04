---
"@marko/runtime-tags": patch
"marko": patch
---

Fix issue with multiple native tag event handler aliases being passed to an element via a spread. Eg `<button ...input onClick() {...}>` where `input` contains `on-click` as a attribute.
