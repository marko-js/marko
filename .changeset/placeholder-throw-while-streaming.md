---
"@marko/runtime-tags": patch
---

Fix a `@placeholder` that throws while the page streams. The stream no longer ends early, an outer `@placeholder` no longer stays on the page forever, the server no longer crashes with `Cannot read properties of null (reading 'next')`, and the effects of the `<try>` body it replaces no longer run. A `@placeholder` inside a caught `<try>` body no longer renders.
