---
"@marko/runtime-tags": patch
---

Fix a rest or renamed destructured value declared inside an attribute tag under `<if>` or `<for>` never being declared in the server output, which threw a ReferenceError when the template serialized it.
