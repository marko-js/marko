---
"marko": patch
"@marko/runtime-tags": patch
---

Class API content that a Tags template renders now updates in place on its Class parent's later rerenders, so Class components inside it keep their state, and it reads the real `out.global` in a production build. A Class template that takes no input also renders as a native tag's `content`, as a Tags template does.
