---
"@marko/runtime-tags": patch
"marko": patch
---

Write a Class API lazy tag's assets through the Tags API writer when it renders within Tags content. It used to write every pending asset inline, the page's entry script included, so a Tags `@catch` that replaced that content left the page unable to hydrate, and the lazy module could be lost for other instances of the tag.
