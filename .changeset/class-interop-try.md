---
"@marko/runtime-tags": patch
"marko": patch
---

Fix Tags API `<try>` content rendered with Class API components on the server. Tags API content inside a Class API component now stops rendering when a `<try>` around it catches, at any depth and even when it was still awaiting, instead of sending its data and effects for content that never arrived, and its effects wait for in-order content still streaming and drop with a `@catch`, like any content around them. A Class API component's init code no longer takes the page's out-of-order content with it, which lost a `@catch` sent after its body streamed and ran its effects early. On a Class API page, a Tags API `@catch` that waits on content of its own now shows, streamed after the markers it replaces even while a pending Class API `<await>` holds them back.
