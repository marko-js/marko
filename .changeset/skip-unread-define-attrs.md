---
"@marko/runtime-tags": patch
---

Fix a `ReferenceError` on the server when a `<define>` tag that is only ever rendered directly (`<Foo/>`), or never used, has attributes reading a variable nothing else reads. The server no longer evaluates those attributes, matching the browser, so an attribute with a side effect no longer runs only on the server.
