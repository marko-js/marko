---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/persisted/admission.ts › assertDeliverableInClientOwned
---

Frames re-ship changed `$global` values (`_persisted_reason` root entry +
`patchGlobalsEntry`), and `$global`-DERIVED bindings now deliver as fills
(reactive, change-detected — pinned by `persisted-global-derived-fill`,
`persisted-async-catch-global-derived`, `persisted-branch-client-handler-global`,
`persisted-child-global-derived`). The remaining skew surface is DIRECT
`$global` reads rendered inside client-owned structure: the live bag updates,
but nothing re-renders a view whose only dependency is a global (globals are
not reactive), so the view lags until an unrelated state change re-renders
it. Admission still rejects those reads (`extra?.globalBindings` in
`assertDeliverableInClientOwned`). Either make direct global reads reactive
(dispatch render joins from `patchGlobalsEntry`'s change marks, mirroring
what `patch-effect` does for effects) or keep the rejection and document it.

Check: relax the `globalBindings` rejection and render `${$global.x}` inside
a stateful branch — a patch changing `x` leaves the text stale until the
next state-driven re-render.
