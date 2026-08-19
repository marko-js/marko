---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/referenced-identifier.ts › analyze
---

# Warn when a client-reactive expression reads `$global`

After resume `$global` holds only `{runtimeId, renderId}` unless a key is enabled in `$global.serializedGlobals`, so any read that recomputes on the client silently becomes `undefined` rather than throwing. `<let/n=0><const/derived=$global.msg + "!" + n><div id=derived>${derived}</div>` plus a button that bumps `n` streams `hello!0`, hydrates unchanged, then renders `undefined!1` on the first click; adding `serializedGlobals: ["msg"]` restores `hello!1`. Nothing reports it — `meta.diagnostics` is `[]` in both outputs — and a non-reactive `${$global.msg}` on the line above stays correct forever, so the page looks half-working rather than broken. The condition is decidable exactly where `analyze` already calls `setReferencesScope` for `$global`: warn when the read's expression root also carries `referencedBindings`, i.e. the read feeds a DOM update signal instead of a first-render-only write — exempting `runtimeId` and `renderId`, which `dom/resume.ts`'s `initGlobal` seeds whatever the payload contains. `serializedGlobals` is a runtime value in both accepted shapes (`string[]` and `Record<string, boolean>`; see `getFilteredGlobals`), so the compiler can never tell which keys survive — this has to be a warning naming it, never an error.

Check: render that template with `$global = { msg: "hello" }`, resume it in jsdom, click, and read `#derived`.
