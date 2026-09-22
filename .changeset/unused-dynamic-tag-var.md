---
"@marko/runtime-tags": patch
---

A dynamic tag's variable that nothing reads or assigns no longer makes the tag resume, so it adds no resume data, markers or client code, and no longer makes an otherwise static page interactive.
