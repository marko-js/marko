---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/html/patch.ts › PatchState
---

`PatchState` sets `hasGlobals = true` ("the live page owns its serialized
globals; a frame never re-ships them"), but servers commonly vary `$global`
per request (locale, auth, feature flags). A patch re-renders with the new
globals — global-derived attr/text entries update — while anything the
client seeded from the old globals stays stale, so two related values can
silently diverge across a patch. The admission guard
(`src/translator/util/persisted/admission.ts`) blocks `$global` reads inside
client-owned structure but cannot see this cross-request skew. Decide a
policy: ship changed globals in frames, or reject/warn when a persisted
template's rendered output reads `$global`.

Check: template rendering `$global.x` into text; renderPatch with a
different `$global.x` updates the text while a `<let/y=$global.x/>`-seeded
value keeps the old one.
