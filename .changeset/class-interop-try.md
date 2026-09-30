---
"@marko/runtime-tags": patch
"marko": patch
---

Fix Tags API `<try>` content rendered with Class API components on the server: its `@catch` now shows, Tags API content inside a Class API component stops rendering and drops its effects when a `<try>` around it catches, at any depth, and its effects, along with the page's out-of-order content, wait for in-order content still streaming.
