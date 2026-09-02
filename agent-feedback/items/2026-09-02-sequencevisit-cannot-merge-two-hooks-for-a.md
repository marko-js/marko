---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/interop/index.ts › sequenceVisit
---

# `sequenceVisit` cannot merge two hooks for a shared core tag

`sequenceVisit` runs two visit hooks in order, stopping if the first swaps the node. Its merge body is unreachable: it returns early unless both arguments are defined, and its only caller is `normalizeVisit`, which supplies a second hook only when a tag def's `migrate`/`transform` is an array of two or more. `mergeTagDef` runs over the `"<tag>"` keys of the merged Marko 5 and Marko 6 core taglibs, and no core tag carries more than one hook per key, so the loop never gets past its first entry.

Either a core tag needs two hooks on one key, or the merge is structure for a case the core taglibs do not produce and `normalizeVisit` can take the single hook directly.

Check: coverage over the full suite leaves `sequenceVisit`'s body (everything after the `!first || !second` guard) unhit, while the guard itself is covered.
