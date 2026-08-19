---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/core/return.ts › analyze
---

# Gate `<return valueChange>` serialization on parent mutation

`analyze` still carries `// TODO: this should be based on the parent actually mutating the tag variable.` above an unconditional `addSerializeReason(section, true, getAccessorProp().TagVariableChange)`, so `<return value=... valueChange=...>` force-serializes the change accessor even when no parent ever assigns the tag variable. The `<let>` equivalent is already gated on `binding.assignmentSections` (`core/let.ts`), but this one needs cross-template information: whether a parent mutates the tag variable is known only at the parent's compile (`mutatesTagVar` in `util/known-tag.ts`), so the reason has to flow through the param serialize-reason group protocol instead of a local check.

Check: `rg -n "TagVariableChange" packages/runtime-tags/src/translator/core/return.ts`.
