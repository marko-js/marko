---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/patch.ts › applyPatch
---

Frames carry no sequence token and `DEFAULT_RENDER_ID` is a constant, so two
in-flight patch responses (rapid updates on a slow network, HTTP/2
reordering) can apply out of order; each frame re-ships full state, so
last-applied wins — which can be the stale response. Either serialize
application client-side per render (queue a frame until the prior one
settles, including deferred lazy waits in `src/dom/patch-ready.ts`) or
stamp frames with a monotonic id and drop stale ones explicitly.

Check: apply frame B (newer input) then frame A (older input) to the same
render — the page ends on A's values with no rejection.
