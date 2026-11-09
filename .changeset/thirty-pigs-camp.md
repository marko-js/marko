---
"@marko/runtime-tags": patch
---

Write a native tag's object literal spread (`<div ...{ id: "x", onClick() {} }>`) as the attributes it names, so static ones join the markup and the tag no longer resumes for the spread alone.
