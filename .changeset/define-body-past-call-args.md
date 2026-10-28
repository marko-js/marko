---
"@marko/runtime-tags": patch
---

A `<define>` tag called with render arguments and a body no longer binds the body to one of the arguments' params: the input (body as `content`, attribute tags) belongs at the param after the arguments, so the tag now renders instead of throwing in the DOM or server compile.
