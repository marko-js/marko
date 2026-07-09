---
"@marko/runtime-tags": patch
---

Fragment frames (phase 1 of persisted pages at scale): update renders with
`$global.persistedFragment` deliver the first content hop's branch as
resumable HTML instead of serializing it for client-side construction from
registered renderer graphs. The server captures the hop branch's markup
(values baked in, resume markers included) and emits it on the update
frame as a `[anchorScopeId, accessor, markerPrefix, html]` entry while
scope data still rides the ordinary fills; the client applier inserts the
markup at the hop's anchor, walks its markers binding DOM refs onto the
patch scopes (which join the live scope tree directly), and runs the
subtree's effects. Applying a fragment is a resume, not a merge: matched
scopes above the hop keep fine-grained fills, later same-route updates
fill the fragment-built subtree fine-grained, and a later navigation swaps
it out cleanly.

Async content inside a fragment follows the streamed-document model
behind `<try>` placeholder boundaries: the fragment ships the placeholder
(bracketed as the try branch's placeholder branch), and when the boundary
body resolves its markup flushes as its own boundary-body entry the
applier swaps in where the placeholder sits, running the body's effects.
Capture is a chunk property assembled by the ordinary flush machinery (in
an update render nothing else writes html), so forks and streaming just
work; a bare await (or a catch-only async boundary) inside a fragment
errors the render for the router's fallback ladder. Update-delivered
closures no longer re-execute while a patch applies (their rendered holes
are the payload and the owner value may be server-only): `_closure_get`
renders are `_updating()`-guarded, subscription registration unchanged.

Fragment entries also carry the ids of every scope the fragment
serialized, so dom-less scopes (state and tag-variable wiring only, which
markers can never reach) get stamped into the live tree -- their effects
run and their handlers see `$global`. Tag-variable wiring serializes for
fragment subtrees exactly as it does for documents (fragments are
resumes; no setup runs to wire it client-side), and the update applier
skips loop dispatches whose branch list is already live (a fragment's
self-dispatch -- reconciling a keyless positional loop against itself
rebuilt its branches) while normalizing bare single-branch lists.

Fragment mode also narrows seed-mode serialization to where fresh
construction happens (the fragment's chunks and fills-path structural
branch renders): matched scopes' state seeds and resume-only wiring were
dead bytes the client discarded.

Text/html hole values in update payloads moved to their own patch-key
namespace (`UpdateHole:<accessor>`, mirroring `UpdateAttr:`): hole keys no
longer share the node-accessor namespace, so fragment subtrees -- where
patch and live scopes are one object -- never collide hole values with
walker-bound node refs, and update merges dispatch uniformly into
fragment-built subtrees (the path later frames, e.g. async boundary
bodies, will use).
