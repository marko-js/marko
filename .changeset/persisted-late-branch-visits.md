---
"@marko/runtime-tags": patch
---

Resume no longer drops branch visits when the module that enables
branches executes after a flush's walk (module ordering, lazy chunks,
persisted update entries): the visits are retained and reprocessed when
`enableBranches` fires, so loops/conditionals in resumed content stay
reconcilable — previously an optimize-mode persisted update could crash
reconciling a resumed request-derived loop whose anchor never hydrated.
