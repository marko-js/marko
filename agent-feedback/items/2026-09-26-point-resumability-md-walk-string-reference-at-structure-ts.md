---
type: unclear
impact: low
effort: low
site: packages/runtime-tags/RESUMABILITY.md › DOM association
---

# Point RESUMABILITY.md's walk-string reference at structure.ts

The "DOM association" list in `packages/runtime-tags/RESUMABILITY.md` says walk strings are built in `translator/util/walks.ts`, which does not exist; the translator builds them in `translator/util/structure.ts` (`resolveStructure`). A contributor following the architecture guide to the walk-string encoder lands on a missing file. Direction: replace `translator/util/walks.ts` with `translator/util/structure.ts` in that list.

Check: `ls packages/runtime-tags/src/translator/util/walks.ts` fails, while `grep -n "walks.ts" packages/runtime-tags/RESUMABILITY.md` matches.
