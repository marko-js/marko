---
type: cleanup
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/shell.ts › isShellExpressible
---

A patch that reveals a branch containing a lazy child rejects into
navigation today (the branch is shell-less: `structure.child` for a
`tagNameLoad` tag records no renderer ref, so `isShellExpressible` fails —
pinned by `persisted-lazy-tag-construct`). Full support needs a design:

- The branch shell should express with the lazy site's MARKER only (the
  client template shape) — the child's markup must never compose into the
  parent record.
- On construct, the site loads client-side (the dom module's
  `_load_setup`/`_load_template` machinery), which does NOT call `ready()`
  — so the frame's deferred ready-channel batch for the child must either
  be dropped in favor of the CSR render (the fills carry the same input) or
  the CSR load path must also drive the channel.
- A loader-delivery entry in the frame (the asset's defer html, injected by
  the patch-ready feature with client-side dedupe against loaded/failed
  channels) covers reveals when the trigger script never shipped. That
  injected-set dedupe is the natural seam for the upcoming client-known
  state channel (server elides loaders/records the client reports live).

Check: `persisted-lazy-tag-construct` expects rejection; delivery lands when
it can drop `expect_rejection` and show the click working after reveal.
