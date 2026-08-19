---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Derive await/try branch scope owners without serializing `_`

State-driven `<if>`/`<for>` branches link their owner from resume markers (`setSectionOwnerResumedByMarker`, called only from `core/if.ts` and `core/for.ts`), but `<await>`/`<try>` branches still serialize `_: _scope_with_id(parentScopeId)`. Two blockers remain: their branch machinery tree-shakes out of resume bundles while closures into the content still fire (the `await-tag` fixture's optimized `dom.bundle.js` drops `_await_promise`, so `enableBranches` never runs and `dom/resume.ts` only retains branch visits), and reordered content pushes scope data and closure subscriptions a flush earlier than its markers, so a mid-stream state update can read the owner before it could be linked. Solving both likely needs an explicit branches-enable flag in the resume payload plus deferring subscriptions to marker processing.

Check: `rg -n "_scope_with_id" packages/runtime-tags/src/__tests__/fixtures/await-tag/__snapshots__/html.bundle.js`.
