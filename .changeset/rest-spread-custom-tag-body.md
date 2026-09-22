---
"@marko/runtime-tags": patch
---

Fix html output crash (`Cannot read properties of null (reading 'isExpressionStatement')`) when a rest destructure declared inside a custom tag's body is spread onto a dynamic tag: hoisting the serialized rest alias now inserts before the statement in the owner section instead of the section root itself.
