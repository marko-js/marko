---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/dom/catch.feat.ts › deferToPendingTry
---

# Release effects deferred on a `<try>` that completes inside a pending `<try>`

When a resumed `<try>`'s await counter completes, its hook queues `runPendingEffects` for the branch through `runEffects`, which passes that effect to `deferToPendingTry` like any other. With an ancestor `<try>` still pending it is deferred onto the branch's own scope, whose `PendingEffects` set already exists (it holds the effects waiting to be released), so the `||=` latch neither lists the scope on the ancestor's `PendingEffectScopes` nor hooks the ancestor's counter. Nothing ever runs that set, so every effect deferred on the inner try's own scope is dropped without an error (its handlers never attach). `createAwaitCounter` queues `runPendingEffects` the same way. Direction: run `runPendingEffects` without deferring it, since each effect it releases defers itself again.

Check: a fixture with `<let/value=0/><try><await|a|=resolveAfter(1, 3)><button onClick() { value++ }>${value}</button></await><try><await|b|=resolveAfter(2, 2)><button onClick() { value++ }>${value}</button></await><button onClick() { value++ }>${value}</button><@placeholder>inner</@placeholder></try><@placeholder>outer</@placeholder></try><await|c|=resolveAfter(3, 1)><button onClick() { value++ }>${value}</button></await>`, `skip_csr: true` and steps `[{}, flush, flush, flush, flush]` followed by a click on each button: the third button's click changes nothing in `render-ssr.md`.
