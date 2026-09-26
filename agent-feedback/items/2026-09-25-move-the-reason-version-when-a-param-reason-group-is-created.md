---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/sections.ts › ensureParamReasonGroup
---

# Move the reason version when a param reason group is created

The reason loop in `finalizeReferences` repeats only while `getSerializeReasonsVersion()` moves, but `ensureParamReasonGroup` grows `section.paramReasonGroups` without moving it. `finalizeKnownTags` feeds only the groups that exist when `forEachSectionReverse` reaches the call-site section, so a group first created in a pass where no reason changes stays unfed at call sites visited earlier in that pass, and its guard bit is always 0. Latent today, since each group is created in a pass that also merges a new section reason; a dynamic section reason set before the loop (the no-prop branch of `addSerializeExpr`, which has no caller yet) would expose it. Direction: bump the version in `ensureParamReasonGroup` when it adds a group.

Check: `grep -n "reasonsVersion++" packages/runtime-tags/src/translator/util/serialize-reasons.ts` lists only `setSerializeReason` and `setPropSerializeReason`, and `ensureParamReasonGroup` adds a group without calling either.
