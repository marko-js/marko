---
"@marko/runtime-tags": minor
---

Fresh branches created while a persisted update applies no longer evaluate
state-free request-derived computations (their values are the patch's
payload, and the computation may live behind a `server import`), and their
event/effect wiring now ships as payload data: update renders emit effect
entries, and the applier executes them only for scopes it freshly created
during the apply (matched scopes never replay — the no-double-bind rule is
enforced client-side). Persisted builds compile `<script>` effects through
`_script_update`, which skips setup-time queueing during applies so payload
entries are the single wiring source for fresh subtrees.
