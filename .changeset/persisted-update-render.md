---
"@marko/runtime-tags": patch
---

Add the update-render writer mode for persisted pages: rendering with
`$global.persisted = "update"` emits a patch payload instead of a document —
request-derived values (including computed hole values captured via the new
`_hole_value` helper in persisted builds), explicit conditional outcomes,
branch lists with loop keys and owner refs, with effects suppressed for
matched scopes. Initial and non-persisted renders are byte-identical to
before.
