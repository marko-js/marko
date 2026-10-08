---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Serialize no subscriber set a patch page never subscribes to

On a patch page, a dynamic closure whose every subscriber is gated off by `_unfilled_if` (a patch fills or writes each read, and the client is not upstream) still writes its `ClosureScopes` set into the owner scope as `new Set`, since page-render scope writes ride the root reason. No scope ever joins the set and the client bundle shakes the closure signal that would read it, so each such closure costs payload bytes on every page render. Gating the owner's `ClosureScopes` write on the subscribers' ownership does not work: each `_subscribe` gate (`_unfilled_if`) is evaluated in its subscriber's render context, where `inUnpatched()` can hold while it does not at the owner, and bodies that render later (async boundaries) join after the owner's scope is written. The set has to ship once a scope joins it, which is a serializer-side decision (write the set by reference only when its first member is added).

Check: `packages/runtime-tags/src/__tests__/fixtures/patch-bind-source-per-frame/__snapshots__/writes.html` writes `k: new Set` and `l: new Set` in the page scope, while no later flush adds a scope to either.
