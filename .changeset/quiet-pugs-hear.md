---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a `Cannot read properties of undefined (reading 'serializeState')` crash when a Class-API component rendering Tags-API content is rendered directly — through `renderToString` or `@marko/testing-library` — rather than as a page with `<init-components>`.
