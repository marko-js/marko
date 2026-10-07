---
"@marko/runtime-tags": patch
---

Fix an embedded render (`$global.renderId`) throwing on the client when a `<try>` body streams behind its `@placeholder`: the render was treated as removed while its body was held back, so the next streamed chunk found no runtime.
