---
"@marko/runtime-tags": patch
---

Fix attribute tag variable names leaking from an HTML compile into a later DOM compile of the same file, which made output order-dependent and could shadow a generated binding or fail the build with `Duplicate declaration`.
