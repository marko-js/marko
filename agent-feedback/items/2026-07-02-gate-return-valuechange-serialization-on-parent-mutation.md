---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/core/return.ts › analyze
---

# Gate `<return valueChange>` serialization on parent mutation

`analyze` still carries `// TODO: this should be based on the parent actually mutating the tag variable.` above an unconditional `addReason(ensureSectionSlot(section, SlotKind.ReturnChangeHandler), ALWAYS)`, so every instance of a controllable tag serializes its change handler (about 12 bytes) and, through the handler's `isEffect` mark, every value the handler closes over, even when no caller assigns the tag variable. Only the caller's compile knows whether it assigns (`isTagVarAssigned` in `util/known-tag.ts`), so the child's guard needs a reason the call site decides; param reason groups are the only such channel, and they are keyed by param bindings, so a fix needs a caller-decided reason that is not a param (a group member or slot reason the call site sets when it assigns), not a synthetic param binding (one created with `createBinding` joins `getBindings()`, `section.bindings` and name-collision renaming, and needs special cases in `addKnownTagReasons`). Gating the handler on its own sources is unsound: a caller can assign right after resume whether or not they change. `isEffect` must also be split: its `always` function reason both makes the handler's reads `always` (`finalizeReferences` › `readsValuesOnResume`) and makes the template a client bundle root (`finalizeRegistrations` › `isInteractive`); the reads should follow the handler's reason, while the template must keep shipping, since a dynamic tag rendering it from input writes the handler under `ALL_GROUPS` with no other bundle importing it.

Check: `rg -n -F -A 2 "ensureSectionSlot(section, SlotKind.ReturnChangeHandler)" packages/runtime-tags/src/translator/core/return.ts` shows `ALWAYS` as the reason; `pnpm run compile -- -o html` a child `<const/offset=input.offset/><let/x=1/><span>${x}</span><return=x valueChange(v) { x = v + offset }/>` writes the handler and `offset` unguarded.
