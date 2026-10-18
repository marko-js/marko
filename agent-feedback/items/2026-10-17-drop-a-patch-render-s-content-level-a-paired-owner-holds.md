---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › getContentClosureValues
---

# Drop a patch render's content level that a paired owner already holds

A dynamic tag body's registration carries a level for each closure no fill writes, in a patch render as on the page (`getContentClosureValues`, the `$scope_page ? … : …` arm `getRegisteredLocals` builds). The client applies a level only where the owner lacks the key (`_content_resume`), and a paired owner holds every key its page render wrote, so a patch ships the value for nothing there. `patch-dynamic-tag-body-level-kept` sends `ub1: ["a0", 1, { h: 1 }]` for a returned state the live root already holds (as `2` once clicked). A patch render's level could leave out closures of owners the flush pairs, keeping those of owners it creates.

Check: `patch-dynamic-tag-body-level-kept/__snapshots__/patches.js`, the `{ h: 1 }` level; with the patch arm in `getRegisteredLocals` emptied, the fixture still renders as a fresh page and a client render do (only its snapshots change).
