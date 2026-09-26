---
type: unclear
impact: low
effort: low
site: packages/runtime-tags/src/dom/walker.ts › walk
---

# Restate the walker's walk-string laws with current walk codes

The "Laws of the walks string" comment above `walk` is written in terms of `Before` and `After` actions (for example "Before* Get* After* || Before* Replace"), but `common/constants/walk-code.ts` defines only Get, Replace, BeginChild, BeginChildWithVar, DynamicTagWithVar, EndChild and the Next/Over/Out/Multiplier ranges. Anyone checking a walk string or a `translator/util/structure.ts` change against these laws reasons from codes that no longer exist. Direction: restate the laws with the current codes, or drop the ones that no longer apply.

Check: `grep -n "Before\|After" packages/runtime-tags/src/dom/walker.ts packages/runtime-tags/src/common/constants/walk-code.ts` matches only the walker comment.
