---
"@marko/runtime-tags": patch
---

Fix a `Cannot read properties of undefined (reading 'nodeType')` error on the first update after resume of a `<try>` whose `<@catch>` or `<@placeholder>` depends on client state while its content renders nothing interactive.
