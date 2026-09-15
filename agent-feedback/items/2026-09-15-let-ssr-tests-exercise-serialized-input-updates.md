---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/__tests__/main.test.ts › runSteps
---

# Let SSR tests exercise serialized input updates

The CSR path applies input-update steps through the instance `template.mount` returns, but a resumed root exposes no update handle, so the SSR runner passes no `onInput` and `runSteps` breaks out of the step loop at the first input step — and, the half that changes server output, the harness's SSR render never treats input as update-able, so the runtime serialize guards for input-derived values stay false. That hides a whole class of production resume bugs: marko-run renders pages with input serialized, making those guards truthy, so real apps write pending replay effects (and other input-gated resume data) that no fixture can ever cause the server to emit — the tree-shaken pending-closure registration fixed alongside the `await-closure-custom-tag` fixture crashed every optimized marko-run app on load, while the entire fixture corpus passed, because every fixture's pending closure was either anchored by a let's subscription chain or never serialized. A direction: render the SSR side the way marko-run does (a `TestConfig` flag that marks input serialized during the SSR render) and give the runner a way to push new input into the resumed root so input steps apply instead of ending the test; if the resume runtime deliberately has no root-update handle, the flag alone still closes the serialization gap.

Check: in any fixture that closes over an opaque input property across `<await>` under a `<try>` placeholder (e.g. `await-closure-custom-tag`), the optimized `writes.html` never contains the html output's input-gated pending effect id (`html.bundle.js` emits `_script($scope, "c0", $sg__input_…)` but `writes.html` only carries the let-gated `"c1"`), and adding an input-update step to `steps` is silently skipped by the `ssr` test.
