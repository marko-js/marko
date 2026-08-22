---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › isBranchSectionChain
---

Persisted boundaries whose chain to the template root crosses a non-branch
content section (e.g. `<try>`/`<await>` inside a custom tag's body content)
have three remaining gaps beyond the now-always-resumed boundary marker
(pinned by `persisted-await-in-content`, debug-only):

1. Optimized resume of such an interactive boundary throws before any patch:
   an effect id in the resume effects string resolves to an unregistered
   value (`fn is not a function` in the catch-feat effects loop), so the
   whole page fails. Pre-existing (reproduces without any patch machinery);
   likely an optimize-mode register-id skew for content-of-content shapes.
2. A server value read inside `@placeholder` content re-renders with the
   patched value in debug but stays stale in optimize: no `patchFills`
   registration is retained for the read (the `PatchValue` entry soft-misses
   by design), and nothing couples the placeholder content's retention to
   its fill the way `_fill_join_subscribers` does for content scopes.
   Silent staleness — either retain a registration or fail admission until
   one exists.
3. A patch arriving while the boundary's initial stream is still pending
   rejects (safe: the construct's marker anchor has not streamed). Worth a
   pinning fixture once the harness can express mid-stream patches simply.

Check: `persisted-await-in-content` without `skip_optimize` fails ssr with
the TypeError in (1); swapping its placeholder to read `input.msg` and
diffing `render.md` vs `render.debug.md` shows (2).
