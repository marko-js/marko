---
"@marko/runtime-tags": patch
---

Fix `Map`/`Set` serialization silently dropping (Set) or corrupting (Map) a member that references an ancestor object — e.g. a back-reference or undirected-graph edge. Such members are now inserted after construction so the resumed collection is intact.
