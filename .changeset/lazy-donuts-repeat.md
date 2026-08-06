---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a `Cannot read properties of undefined (reading 'serializeState')` crash when a Class-API page serializes a component whose event handler was bridged from a Tags-API ancestor.
