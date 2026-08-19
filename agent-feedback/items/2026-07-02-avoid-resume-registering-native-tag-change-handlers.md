---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/visitors/function.ts › canIgnoreRegister
---

# Avoid resume-registering native tag change handlers

`canIgnoreRegister` skips registration for plain `on*` handlers on native tags, but its `// TODO: all native tag functions should avoid registration but right now change handlers require it` still holds: every `valueChange=`/`checkedChange=` costs a registry id plus a registration statement in server output and a registry entry client-side. The registration is load-bearing today — the handler is serialized as a `ControlledHandler` scope prop (`html/attrs.ts`) that the shared typed resume effects (`_attr_input_checked_script` and friends in `dom/controllable.ts`) read on interaction before any re-render, and serializing a function requires registration. Removing it means restructuring controllable resume so a per-section registered effect rebuilds the handler closure from serialized state, the way `on*` handlers work; that touches the ~30 controllable fixtures.

Check: `pnpm run compile -o html -d` on `<let/v="a"/><input value:=v>` emits `_resume(_new_v => { v = _new_v; }, "<file>/valueChange", $scope0_id)`.
