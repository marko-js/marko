---
"@marko/runtime-tags": patch
---

Fix an "Unable to serialize" server error when a `<define>` renders its content conditionally (including through another or the same `<define>`) and that content reads values from where it is called.

Fix a `_ is not a function` client error when a `<define>` with client-side setup is both rendered as a tag and passed as a dynamic tag value.
