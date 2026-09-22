---
"@marko/runtime-tags": patch
---

A function or content a `<let>` starts with now registers exactly when the let serializes, including one that reaches it through a variable. Previously a function written in a `<let>` always registered, even when nothing serialized the let, and one arriving through a `<const>` (or content the let held) never did, so SSR threw `Unable to serialize` once the let serialized.
