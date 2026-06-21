---
"@marko/runtime-tags": patch
---

Fix the SSR serializer emitting an own `__proto__` data property as a prototype setter. A plain object with an own `__proto__` key (e.g. produced by `JSON.parse`) was serialized as `{__proto__: value}`, which on deserialization sets the object's prototype instead of creating an own property — dropping the data and mutating the prototype. Such keys are now emitted as a computed key (`{["__proto__"]: value}`) so they round-trip as normal own properties.
