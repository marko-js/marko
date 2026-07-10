---
"@marko/runtime-tags": patch
---

Fix an SSR crash (`TypeError: Cannot read properties of null (reading 'id')`) when a long string first serialized as a promise/stream/async-generator settled value was reused in a later flush. Such strings now claim their dedup binding eagerly, matching how object values on that path already behave.
