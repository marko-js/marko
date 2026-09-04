---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/assets.ts › addAsset
---

The SSR lazy loader injects `<script async type=module src="….load.mjs">`
with no `onerror`, so a chunk that fails to load is invisible to the page
runtime. `readyFailed()` (`src/dom/resume.ts`) settles pending deferred
patches only on runtime-managed dynamic-import failures
(`loadFailed` in `src/dom/load.ts`); a failed SSR loader script leaves a
deferred `applyPatch` promise (`src/dom/patch-ready.feat.ts` › `pendingReady`)
pending forever, so the caller never falls back to navigation — and the
lazy subtree stays inert with no `@catch` either. Needs an error protocol on
the emitted loader script (e.g. an `onerror` that reaches `readyFailed`),
plus test-harness support: `reject_load` on an SSR `.load.mjs` currently
makes `runAsyncScripts` itself throw (`Promise.all(imports)` in
`src/__tests__/utils/create-browser.ts`), so the scenario cannot be
fixtured.

Check: fixture like `persisted-lazy-tag-pending` with
`reject_load: ["child"]` and `expect_rejection: true` — today it times out
instead of rejecting the patch.
