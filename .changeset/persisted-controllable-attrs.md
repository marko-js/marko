---
"@marko/runtime-tags": minor
---

Controllable attrs (`value` on input/select/textarea, `checked`, `open`)
now ride persisted updates. They render through the controllable helpers
rather than plain attr writes, so their update capture wraps the helper's
value argument server-side and the compiled merge replays it through the
helper's `_default` variant against the live scope — the variant that owns
default-vs-live value semantics: an interactive input's typed value
survives, hidden/button-like inputs track the attribute, selects
re-default their options. Previously these values went silently stale on
matched scopes and rendered empty in fresh subtrees (a hidden
`value=input.id` in a PRG form posted the previous page's id).
`_attr_input_value_default` also no longer restores the stale attribute on
inputs whose `value` IDL reflects the content attribute (hidden, buttons,
checkbox/radio) — there is no user-owned live value to preserve on those.
Bound (`:=`) controllables are client state and are untouched by patches,
as before. `checkedValue` (two interdependent values) and controllables
reached through spreads are not captured yet.
