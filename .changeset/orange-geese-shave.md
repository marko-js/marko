---
"marko": patch
---

Fixes an issue where elements with "simple attributes" (those with a combination of class, style and id attributes) were not correctly removing the attribute value when a new value was false, null or undefined.
