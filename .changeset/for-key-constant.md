---
"@marko/runtime-tags": patch
---

A `<for by>` key (`row.id` with `by="id"`) is read as a constant within its branch, like an index key, since a branch is keyed by it. Its reads no longer create signals or per-branch state, a keyed selector comparison drops the key from its intersection, and resumed HTML no longer writes the key twice.
