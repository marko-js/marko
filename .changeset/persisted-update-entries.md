---
"@marko/runtime-tags": patch
"@marko/compiler": patch
---

Add persisted update-entry codegen: compiling with `persisted: "update"` and
dom output emits the template's `?update` module — compiled merge functions
that apply a persisted update-render patch to live scopes. Persisted dom
builds register the shared pieces (value/conditional signals, loop branch
content) through the resume registry; the new `dom/update` runtime helpers
(`_update_signal`, `_update_for`) resolve them by id. Part of the
experimental single-page server-first updates work; no effect on
non-persisted builds.

Value merges are emitted only for bindings that can actually serialize
(a reason-less binding -- eg a `<const>` of a module call under the
render-once contract -- never appears in a patch, so its merge line and
registration are skipped).
