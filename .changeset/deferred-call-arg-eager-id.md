---
"@marko/runtime-tags": patch
---

Reusing a value that was serialized as a deferred `Map`/`Set` member (e.g. a member of a circular collection) in a later stream flush no longer crashes the serializer.
