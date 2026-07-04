---
"@marko/runtime-tags": minor
---

Persisted updates can now construct fresh server-first subtrees — the
cross-route swap target of a run navigation — entirely from the patch:

- `<await>`/`<try>` boundaries always participate in update renders (the
  branch link is written even for static bodies — a fresh subtree's await
  is created detached and the link is what attaches it), and await promise
  computes are always skipped while a patch applies (the expression may
  live behind a `server import` even when the body is static).
- Fresh branches created during an apply skip request-derived closure
  renders (normal resume never serializes those raw owner values; the
  branch merge places the server-rendered holes instead), and flush their
  queued setup before the body merge fills — merged values would otherwise
  suppress equal-value signal invocations and with them client wiring the
  patch cannot deliver (`<let>` seeding, tag-var returns).
- Intersections no longer count promoted `$global` reads toward their
  fresh-render pending gate (nothing invokes the join for them), and
  payload effect entries execute for every scope created during the apply
  (boundary merges may advance the run window mid-apply).
