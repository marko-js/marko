---
"@marko/runtime-tags": patch
---

Generic hole applier (option B, first slice): per-template update-merge
lines for text holes, unsafe-html holes, attr holes, and controllables are
replaced by one shared interpreter (`_update_scope`) that dispatches on
the typed patch keys (`UpdateHole:`/`UpdateHtml:`/`UpdateAttr:<name>:`),
recovering controllable semantics from the live element. Unsafe-html
holes move to their own key namespace (`UpdateHtml:`, "R" optimized) so
range replacement is distinguishable by key alone. Compiled update
entries keep only structural dispatch and signal-backed values; hole
mutations now apply in patch-key order within a frame (previously
template order -- same mutations, same settled DOM, one atomic apply).

Second slice (merge-less sections): a section whose entire merge reduces
to that single generic call no longer emits a wrapper function at all --
its `_update_content` registrations and template default export reference
the imported `_update_scope` interpreter directly.

Third slice (update-generic classification): a template proves at analyze
time that its whole `?update` module would be the bare interpreter --
single section, no effects or interactivity, no change handlers, no
dynamic/custom tags, no seed or value merges -- and flags
`domExports.updateGeneric` (the `setupEmpty` pattern). Parents then
dispatch such a child's patch scope through `_update_scope` directly
instead of importing its `?update` module, which is never built at all.
Both the `?update` and dom translations assert the proof and fail loudly
on analyze/translate drift.

Fourth slice (transitive classification): update renders serialize an
update-generic child's scope link under a typed patch key
(`UpdateChild:<accessor>`, "S" optimized; written by `_update_child` in
update renders only -- document resume keeps the plain link) and the
interpreter descends through it recursively, so the parent compiles no
dispatch line for that child at all. A template composing only
update-generic children therefore classifies update-generic itself:
server-only _trees_ drop their `?update` modules, not just leaves. The
child's flag is resolved once at the parent's analyze (a mid-analysis
circular child reads as non-generic on every pass), so the html
serialization, the update-merge record, and classification cannot drift
apart. Known tags with a tag variable or a lazy `load=` child keep
compiled dispatch and still disqualify.

Fragment-first builds (`persisted: "fragments"`, the compile mode
@marko/run sets for its persisted router): content a live page has never
rendered always arrives as a fragment frame, so `?persisted` entries stop
registering content renderers and dynamic-tag replay signals -- the
module-level side effects that pinned every composed template's
construction material (template/walks/setup and their child-import
chains) into navigation chunks for the fills-path cross-route swap.
Server-only render graphs now tree-shake out entirely. Same-route
structural updates are unchanged (loop branch content and conditional
replay signals still register; keyed additions and branch swaps stay
fills-path); a dynamic tag whose renderer changes without a fragment
entry fails the apply loudly (feeding the router's full-navigation
fallback) instead of silently keeping the stale branch, and the update
deserializer resolves intentionally-dropped registrations to undefined
instead of invoking them. Plain `persisted: true` builds keep today's
always-registered behavior.
