---
type: perf
impact: high
effort: high
site: packages/runtime-tags/src/translator/util/known-tag.ts › knownTagTranslateHTML
---

# Let parameter reason groups select client registration anchors

Parameter reason groups (`contentSection.paramReasonGroups`, known-tag.ts:246-311) already narrow the HTML payload per known call site via `_set_serialize_reason`, but the child's DOM module emits every `_resume(registerId, fn)` as an unconditional top-level statement (`signals.ts` `writeRegisteredFns`, collected with no serialize-reason gate; `_resume` is intentionally not in `pureDOMFunctions`), so a caller that activates one group still retains the client behavior of all of them. Export pure values plus group-keyed registration anchors so known callers keep only active behavior, with stateful, circular, dynamic, and unknown callers conservatively retaining all groups. The anchor a caller emits must itself be a retained root: in an optimized page bundle every pure chain shakes away (see `fixtures/dynamic-tag-spread/__snapshots__/dom.bundle.js`, which keeps only non-pure statements), and a register id resume cannot resolve is not a no-op — `dom/resume.ts` pushes the missing value and calls it.

Check: on a fixture whose child has a group no caller activates: that group's registered functions should disappear from the dom bundle snapshot with html output and resume unchanged.

Implementation notes from a first attempt (abandoned — attribution plumbing is the whole cost):

1. Groups live on the child's `contentSection.paramReasonGroups` and are only created in `finalizeParamSerializeReasonGroups`, which runs _after_ `finalizeFunctionRegistry` — so classification cannot happen at registration time; it must be deferred to translate (`writeRegisteredFns`), storing the contributing `exprExtras` on each `RegisteredFnExtra` at registration.
2. Attribution: stamp param expr extras with `{ index }` in `finalizeKnownTags` (per group, via `mapParamReasonToExpr(knownExprs, group.reason)`, gated on `getSerializeReason(section, scopeBinding, group.id)`); a registered fn whose every triggering extra is stamped gets `groups: number[]` (union of indexes), anything unstamped stays eager.
3. Emission: grouped `_resume` calls move into exported registrars named `$register_g<index>_<section.id>` (deterministic per child compile); ungrouped stay eager. A fn in several groups clones its resume per registrar.
4. Caller cooperation is the hard part: inline custom-tag consumers can call registrars directly (same program), module consumers need import + call, and lazy-loaded children need the registrar to ride the load-signal boundary. All three consumer shapes must invoke registrars or resume crashes with "pushes the missing value and calls it". Until lazy-load transport is designed, gating must stay off — which is why this attempt stopped here.
