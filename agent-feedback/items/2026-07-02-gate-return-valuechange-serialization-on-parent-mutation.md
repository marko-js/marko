---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/core/return.ts › analyze
---

# Gate `<return valueChange>` serialization on parent mutation

`analyze` still carries `// TODO: this should be based on the parent actually mutating the tag variable.` above an unconditional `addReason(ensureSectionSlot(section, SlotKind.ReturnChangeHandler), ALWAYS)`, so `<return value=... valueChange=...>` always serializes the change accessor even when no parent ever assigns the tag variable. The `<let>` equivalent is already gated on `binding.assignments` (`core/let.ts`), but this one needs cross-template information: whether a parent mutates the tag variable is known only at the parent's compile (`mutatesTagVar` in `util/known-tag.ts`), so the reason has to flow through the param reason group protocol instead of a local check.

Check: `rg -n -F -A 2 "ensureSectionSlot(section, SlotKind.ReturnChangeHandler)" packages/runtime-tags/src/translator/core/return.ts` shows `ALWAYS` as the reason.
