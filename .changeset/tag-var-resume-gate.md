---
"@marko/runtime-tags": patch
---

Custom tag variables whose child scope is never serialized now emit a plain, tree-shakeable signal instead of an impure `_var_resume` registration, shrinking client bundles.
