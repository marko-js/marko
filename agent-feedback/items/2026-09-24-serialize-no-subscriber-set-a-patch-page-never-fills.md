---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Serialize no subscriber set a patch page never subscribes to

On a patch page, a dynamic closure whose every subscriber is gated off by `_unfilled_if` (a patch fills or writes each read, and the client is not upstream) still writes its `ClosureScopes` set into the owner scope as `new Set`, since page-render scope writes ride the root reason. No scope ever joins the set and the client bundle shakes the closure signal that would read it, so each such closure costs payload bytes on every page render. Gate the `ClosureScopes` write on the same ownership as its subscribers, or skip the set when every subscriber section gates it.

Check: `packages/runtime-tags/src/__tests__/fixtures/patch-bind-source-per-frame/__snapshots__/writes.html` writes `k: new Set` and `l: new Set` in the page scope, while no later flush adds a scope to either.
