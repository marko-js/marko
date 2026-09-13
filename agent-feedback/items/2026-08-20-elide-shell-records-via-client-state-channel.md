---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/html/patch.ts › writeBranch
---

# Elide repeated shell records once a client-state channel exists

`writeBranch`/`writeLoop` re-ship the selected branch's full shell record in
every patch response that carries a partial for it, and boundary pairing
entries inside divergent render contexts (`isInResumedBranch`) re-ship their
content ids and records the same way, because `renderPatch(input)` receives
nothing about the client's snapshot. On a long-lived page this repeats each
branch's entire markup per response even though most clients hold it after
the first. The fix needs a request-side channel describing what the client
holds (acked shell ids or a snapshot summary); `sentShells` on `PatchState`
is the per-response prototype of that bookkeeping.

Check: render `persisted-branch-child-state` with two patch steps — the
same `<div class=counter>` shell record heads both frames in `patches.js`.
