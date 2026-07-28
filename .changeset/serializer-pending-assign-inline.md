---
"@marko/runtime-tags": patch
---

Fix serializing a repeated reference to a value that already has a deferred cycle assignment: Map/Set members resumed as missing and a generator return emitted unparsable output.
