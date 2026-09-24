---
type: dx
impact: high
effort: med
site: packages/runtime-tags/src/__tests__/main.test.ts › runSteps
---

# Let SSR tests exercise serialized input updates

The harness never renders a page with its input serialized, so every runtime
serialize guard for an input-derived value (`_serialize_if($scope0_reason, n)`)
is false in the `ssr` tests. A whole class of resume output is therefore
unreachable from fixtures: the html output can emit it, but no fixture can
make the server write it. The CSR half has the matching gap — a resumed root
exposes no update handle, so the runner passes no `onInput` and `runSteps`
breaks out of the step loop at the first input step.

What that hides, concretely: the `@__PURE__` annotation on `_closure_get` is
sound only while every pending resume register id the server can serialize also
has a static reference in the client graph. Across every shape the harness can
build — a `<let>` writer, a `<script>` writer, a two-way bind, a lazily loaded
module boundary, no writer at all — the writer's `_closure(…)` chain does
anchor it, and the optimized bundle keeps the registration whenever the server
ships the id. The one shape that cannot be built is the one that matters: an
input-derived closure under a `<try>` placeholder whose guard is truthy because
input is serialized, with no client writer anywhere. Until the harness can
render that, the claim in `translator/util/runtime.ts` is untested rather than
verified, and any report of a pending replay naming an unregistered id cannot
be reproduced or regression-tested here.

A direction: a `TestConfig` flag that marks input serialized for the SSR
render, plus a way to push new input into the resumed root so input steps apply
instead of ending the test. If the resume runtime deliberately has no
root-update handle, the flag alone still closes the serialization half.

Check: in `await-closure-custom-tag`, `html.bundle.js` emits
`_script($scope2_id, "c0", $sg__input_…)` but the optimized `writes.html` only
ever carries the let-gated `"c1"`; adding an input-update step to `steps` is
silently skipped by the `ssr` test.
