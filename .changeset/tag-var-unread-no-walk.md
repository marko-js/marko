---
"@marko/runtime-tags": patch
---

Stop looking up an element or `<html-comment>` on the client when nothing reads its tag variable, and write an unread `<html-comment/c>` without the space a resumed one needs.
