---
type: perf
impact: high
effort: high
site: packages/runtime-tags/src/translator/util/known-tag.ts › knownTagTranslateHTML
---

# Let parameter reason groups select client registration anchors

Parameter reason groups (`contentSection.paramReasonGroups`, known-tag.ts:246-311) already narrow the HTML payload per known call site via `_set_serialize_reason`, but the child's DOM module emits every `_resume(registerId, fn)` as an unconditional top-level statement (`signals.ts` `writeRegisteredFns`, collected with no serialize-reason gate; `_resume` is intentionally not in `pureDOMFunctions`), so a caller that activates one group still retains the client behavior of all of them. Export pure values plus group-keyed registration anchors so known callers keep only active behavior, with stateful, circular, dynamic, and unknown callers conservatively retaining all groups. The anchor a caller emits must itself be a retained root: in an optimized page bundle every pure chain shakes away (see `fixtures/dynamic-tag-spread/__snapshots__/dom.bundle.js`, which keeps only non-pure statements), and a register id resume cannot resolve is not a no-op — `dom/resume.ts` pushes the missing value and calls it.

Check: on a fixture whose child has a group no caller activates: that group's registered functions should disappear from the dom bundle snapshot with html output and resume unchanged.
