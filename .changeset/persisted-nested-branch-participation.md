---
"@marko/runtime-tags": patch
---

Persisted update renders now dispatch branch merges through every nesting
level. Two gaps made request-derived content inside nested branches go
stale on persisted navigations (a docs sidebar's active link in nested
loops; filter chips in a conditional branch): non-immediate closures
(a `$global`-derived const read two or more sections up) compile to
subscription sets, which update renders never invoke — their
request-derived sources now make the enclosing branch participate in
update renders exactly like a direct closure's would — and a branch's
participation now propagates to its ancestor branches (update dispatch
descends parent merge → branch list → content merge, so an enclosing
branch must write its structural bookkeeping whenever any descendant
participates). The widening runs as a separate children-first analysis
pass gated on the persisted option; non-persisted output is untouched.

Participating loops/conditionals also now skip their own input invocation
while a patch applies (the same `updateGuard` await computes use): the
patch's branch list/outcome is authoritative, and a refs-less input (a
render-once module value, possibly behind a `server import`) invokes at
fresh-branch setup with no upstream guard — without the guard the setup's
undefined input reconciled away the branches the merge had just built
(a fresh-constructed nav's chip row vanished on cross-route
back-navigation).

Finally, a participating branch's params are patch-constructed, so params
whose loop expression carries no sources (a stable/render-once set — the
same `server import`ed nav list) now taint request-derived like a
`$global` read, flowed through aliases and everything derived from them:
param-only holes (link labels, hrefs) capture and merge, so
fresh-constructed branches render complete content instead of empty
param-derived holes. Matched-scope updates pay a few extra capture bytes
per stable branch; state-driven sets stay excluded throughout.
