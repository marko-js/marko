---
"marko": patch
---

Declare `he` as a dependency of `marko`. Its translator imports `he` directly but relied on the package being hoisted from a transitive dependency, which could fail to resolve under stricter installs.
