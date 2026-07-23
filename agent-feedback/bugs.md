# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Server shell registry is process-global, so optimized shell ids collide across builds

`packages/runtime-tags/src/html/renderer-shells.ts` › `serverRenderers` | 2026-07-21 | impact:med | effort:high

Optimized shell ids are compact and build-local (`"a"`, `"a3"`), but
`serverRenderers` is a module-level map on the shared runtime. Two
independently built Marko applications hosted in one Node process register
into the same namespace, and last registration wins — a patch rendered for
build B can compose build A's template/walks, producing structurally wrong
construction programs that build-identity negotiation cannot catch (the
response is produced under the correct build). The maps also grow without
bound across uniquely-identified rebuilds. The memo-staleness and
transient-failure caching halves of this were fixed in place (registration now
invalidates `resolved`; failed resolutions are not cached), but the collision
needs a design: key or namespace the registry by build identity end-to-end
(shell ids are emitted by codegen and cross the wire, so this touches the
translator, the wire format, and negotiation), or scope the registry per
build/app instance instead of per process.

## `Sorted.isSuperset` arithmetic is wrong but the current behavior is load-bearing

`packages/runtime-tags/src/translator/util/optional.ts` › `Sorted.isSuperset` | 2026-07-03 | impact:med | effort:med

`isSuperset` walks `subset` from the top and rejects with
`supLen - found <= i`, which compares the remaining superset slots against `i`
(the count of _smaller_ elements) instead of `subLen - i` (the count still to
place). It returns `false` for many genuine superset relationships, including
two identical sorted arrays: `isSuperset([1,2,3],[1,2,3])` is `false`. The one caller,
`isSupersetSources` (`references.ts:2395`), gates intersection serialization at
`references.ts:1131`/`1145`. Naively correcting the arithmetic to
`supLen - found < subLen - i` makes `isSupersetSources` return `true` for
equal-source bindings, so both symmetric `addSerializeReason` calls are skipped
and neither binding in the intersection serializes — this under-serializes and
breaks resume (the `bound-attr-shapes` fixture throws `Unable to serialize
"ControlledHandler:#input/2"`). The current over-serializing behavior is
therefore relied upon for correctness. A real fix needs `isSupersetSources` to
use a strict/proper-superset test (equal sources must not prune each other)
_and_ the corrected arithmetic, then a full snapshot audit — out of scope for a
one-line change.

## Inline reorder runtime holds only one pending `onNextSibling` callback

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts` › `REORDER_RUNTIME_CODE` | 2026-07-10 | impact:low | effort:med

`runtime.x` keeps a single `nextSibling`/`onNextSibling` pair. A `<t hidden>`
swap callback pending at the element's next sibling is overwritten if, while
walking the `<t>`'s children, a placeholder-end comment (`!id`) matches the
"content arrived before its end marker" branch and re-assigns the pair — the
outer swap then never fires. Tracing current server emission orders suggests
this is unreachable today (catch/content `<t>`s and their end markers always
stream in an order where the earlier callback fires before the overwrite),
but it is one flush-ordering change away from a silent hydration freeze. A
queue (or firing the pending callback before re-assigning) would make the
inline runtime robust; weigh against inline-runtime byte cost.

## Inert Class parent drops client resume for a stateful Tags-API descendant

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `translate.exit` | 2026-07-13 | impact:high | effort:high

A Tags-API page that renders an inert Class-API component (no class block /
component-browser) which itself renders a stateful Tags-API grandchild produces
a dead (non-resuming) grandchild after SSR: clicking a `<button onClick>` in the
grandchild does nothing, in **both** debug and optimize. In optimize the class
boundary is additionally removed outright by the inert-child optimization here
(`!classHydration && !tagsSerializeReason` → `tag.remove()`), because
`getClassHydrationMode` (`packages/runtime-class/src/translator/index.js:714`)
only detects interactivity via `meta.component` and never inspects a Tags-API
child's `isInteractive` (which lives on `program.node.extra`, not
`metadata.marko`). But disabling that removal does **not** fix the dead button,
so the root cause is a deeper resume gap for stateful-tags-inside-inert-class,
not just the optimization. Repro (CSR works, SSR-resume dead): tags page
`// use tags` + `<class-wrapper/>`; `class-wrapper.marko` =
`<div><tags-counter/></div>` (no class block); `tags-counter.marko` =
`<let/n=0/><button onClick(){n++}>${n}</button>`. A fix likely needs the tags
translator to surface interactivity on `metadata.marko`, `getClassHydrationMode`
to return DESCENDANT for interactive tags children, and the boundary to actually
resume.

## `_dynamic_tag` compares only the renderer id, conflating instances of the same content

`packages/runtime-tags/src/dom/control-flow.ts` › `_dynamic_tag` | 2026-07-14 | impact:high | effort:med

The dynamic-tag change checks compare `renderer?.[RendererProp.Id] || renderer` (`:535` for `_dynamic_tag`, `:647` for `_dynamic_tag_content`, plus the DOM `_attr_content`). `RendererProp.Id` is the template/section resume id, identical for every _instance_ of one content section — instances differ only by their `RendererProp.Owner` scope. So switching a dynamic tag between two instances of the same content — two `<attrs.content>` from two instances of one provider tag, or the list-detail `<${selected.content}/>` — is a silent no-op: no teardown or re-render, and closures stay subscribed to the old owner's scope. A control with two _distinct_ tag files behaves correctly, pinning the defect to the id-only comparison. Fix: compare `(id, owner)` — content renderer objects are recreated per render so identity alone over-fires, while the owner scope is stable per instance; the resume handshake must serialize a scope-registered renderer as its registered reference so the first post-resume update stays instance-aware.

## An empty-bodied `<html-comment>` resumes as a text node instead of the comment

`packages/runtime-tags/src/dom/resume.ts:402` | 2026-07-14 | impact:med | effort:med

For an `<html-comment>${c}</html-comment>` whose body serializes empty, SSR writes `<!---->` immediately before the resume marker. The node-claim heuristic — `prev && (prev.nodeType < 8 /* COMMENT_NODE */ || (prev as Comment).data) ? prev : insertBefore(new Text())` — exists so an empty `<!>` separator is _not_ claimed (a fresh Text node is created instead), but it cannot distinguish an intentional empty comment: `prev` is a comment (`nodeType === 8`, so `< 8` is false) with empty `data` (falsy), so it builds a Text node as the binding rather than claiming the comment. After hydration, setting `c = "secret"` renders `secret` as visible text where a pure client render produces `<!--secret-->` — an SSR-resume vs CSR divergence. Fix: give the html-comment marker a dedicated resume symbol (e.g. `ResumeSymbol.NodeComment`) that claims the immediately-preceding sibling unconditionally, since the tag always writes its comment right before the marker.

## Runtime-valued dynamic tag renderers: only never-referenced (constructed/interop) renderers fall to the loud fallback

`packages/runtime-tags/src/dom/update-merges.ts` (`_update_dynamic`) | 2026-07-15 | impact:low | effort:med

The compile-time-referenced cases are closed. Eagerly imported candidates a
dynamic tag name reaches (conditional/logical/assignment/`<const>` chains)
link each `?persisted` entry from the parent's persisted entry
(`dynamic-tag.ts` `getDynamicTagImports` +
`persisted-update-dynamic-imported-child`), merge-less content sections
register a shared noop (`program/update.ts`), and templates whose default
escapes a module as a runtime value (attribute, spread, store, return,
object/array member) now register an escape-site loader: `dynamic-tag.ts`
`getEscapedTemplateImports` records the escapes at analyze,
`program/update.ts` emits `_update_loader(templateId, () =>
import("./child.marko?persisted"))` into the provider's persisted entry, and
`_update_dynamic` fires the loader once for an unregistered same-renderer
pair, parks, and drains when the entry registers
(`persisted-update-dynamic-escaped-renderer`); a rejected loader import
surfaces through the `patch(fail)` sink
(`persisted-update-dynamic-escaped-loader-failure`). Escape detection prefers
over-registration (a false positive costs one idle loader registration, never
a load). What remains, by design: a renderer never referenced as a
compile-time template value in any compiled `.marko` module — constructed at
runtime, interop-wrapped, or aggregated by a plain JS module the translator
never compiles (e.g. a lookup object in a `.js` registry re-exporting
templates) — has no escape site to register, so a renderer id with no
registration and no live match still fails loudly through `patch(fail)`
(`persisted-update-dynamic-unknown-renderer`) — defined behavior, recorded in
persisted-pages-scratch/designs/persisted-pages-architecture.md.

## Document-side lazy load entries float rejections and leave the ready channel silent

`packages/runtime-tags/src/translator/visitors/program/index.ts:222` | 2026-07-16 | impact:low | effort:low

The generated `.load.mjs` entry (both persisted and not) is
`load().then(() => ready(id))` / `Promise.all([...]).then(() => readyPersisted(id))`
with no rejection handler, so a chunk that fails to load from the initial
document (deploy skew) surfaces only as an unhandled promise rejection and the
module's ready id never resolves. The lazy tag's own render path recovers
(`_load_setup`/`_load_template` route their load() failures to `renderCatch`),
and persisted navigations now re-trigger the load through `_load_ready`, whose
failure reaches the transport sink — but the document-side loader itself stays
noisy and inert. Consider a `.catch` that at least reports through a defined
channel (or retries), mirroring `_load_ready`'s handling.

## Initialize tag variables for dynamic native tags

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-15 | impact:med | effort:high

The string-renderer branch of HTML `_dynamic_tag` never assigns `result` (the inline TODO calls this out), and the DOM branch creates the element but never sends its getter through the branch's `AccessorProp.TagVariable` callback (`dom/control-flow.ts:547`). Verified by adding `<${input.show && "div"}/el/><script>el().textContent = "set"</script>` to the `dynamic-tag-var` fixture: both CSR and SSR-resume left the `<div>` empty because `el` was never initialized, so its dependent effect never ran. Static native tags instead create a registered `_el(...)` getter; the dynamic-native path needs the equivalent getter tied to the created/resumed branch element in both runtimes.

CSR is a runtime-only fix: push `() => childScope[AccessorProp.StartNode]` through the child scope's `TagVariable` callback right after the native branch is created in `dom/control-flow.ts`. SSR-resume is the hard part and needs the translator, not just the runtime. The native branch scope carries no state, so `_var`'s `writeScopePassive` `#TagVariable` slot is never serialized (the server fill contains only the parent scope); a dynamic _component_ tag var only resumes because its scope serializes anyway, carrying `{ "#TagVariable": _(1, "…/var") }`. So on resume there is no callback to invoke from the `BranchEndNativeTag` marker handler (`dom/resume.ts:232`). Runtime-only escapes don't exist: `_dynamic_tag` is never told a tag var is present (the compiler emits a separate `_var`), and forcing every tag var to serialize its scope actively regresses payload size for all of them. Delivering the getter across the dynamic boundary requires the compiler to serialize/reconstruct an element reference (a client-side `_el(id, accessor)` for the resumed branch element) — hence effort:high spanning compiler + runtime + serialization.

A live `@marko/run` app shows this manifests as a HARD SSR 500 in dev, not just an empty render: reading the ref (`<${shape}/mark .../>` then `<effect>{ mark().getBBox() }` or a `<script>` reader) makes the HTML `_dynamic_tag` return `undefined` for `mark`, which the compiler guards with `_assert_hoist(mark)` — throwing MARKO_DEBUG's misleading `Hoisted values must be functions, received type "undefined"` (`packages/runtime-tags/src/common/errors.ts:109-114`), with a stack pointing at compiled runtime rather than the user's tag-variable construct. Under optimize `_assert_hoist` is compiled out, so SSR instead succeeds but serializes `mark: undefined`, and on the client `_hoist("mark")()` throws "undefined is not a function" when the effect/script runs — a silent dev-vs-prod divergence. Beyond the full high-effort compiler+serialization fix already noted, a low-effort, independently-valuable improvement is a compile-time error/warning when a tag variable is placed on a dynamic tag that can resolve to a native tag name, so users get a source-level diagnostic instead of an internal assert (dev) or broken hydration (prod).

## Refresh unaffected checkedValue members' controlled value on the first patch

`packages/runtime-tags/src/dom/update-merges.ts` (`_update_input_checkedValue`) | 2026-07-17 | impact:low | effort:low

The gated checkedValue assert refreshes `ControlledValue:<accessor>` only when
it asserts. Its first-ever patch falls back to comparing this member's
`defaultChecked` against the captured list, so a navigation whose changed list
does not change THIS member's checked state (e.g. `["a","b"]` -> `["a","c"]`
seen from the member with value `"a"`) skips the assert and leaves that
member's resumed `ControlledValue` stale until some later capture differs.
A change handler firing on that member before then computes `updateList`
against the pre-navigation list ( `["b"]` instead of `["c"]` above). Later
navigations are safe: the skip still records the applied capture
(`PatchApplied:`/`S` key), so subsequent comparisons use it. Fix idea: on the
first patch, also treat a missing record with a present `ControlledValue`
whose normalized form differs from the capture as changed.

## Ecommerce demo "wrong product id after navigation": root-caused as constructed-content const elision (fixed)

`packages/runtime-tags/src/__tests__/fixtures/persisted-update-construct-eager-form` | 2026-07-23 | impact:med | effort:low

Resolved chain: the demo's bad submit came from the cross-route SWAP case,
not the matched same-route case the earlier applier fixture modeled. When an
effect (the form's `onSubmit`) closes over a `<const>` that feeds an input
`value=`, the attr render routes through the registered `_const_persisted`
signal instead of a `PatchAttr:` hole; on a patch-constructed subtree the
adopted scope already holds the equal serialized value, so the old guard
elided the initial render and the input submitted "" (which then poisoned
the cart server-side). Fixed by broadening `_const_persisted`'s fresh-scope
condition to apply-time dispatch (`updating && Gen >= updatingGen`), pinned
by the `persisted-update-construct-eager-form` fixture (the exact
product-actions shape) and `validate:csp`'s form-seed check in the ecommerce
app. Remove this entry once that commit lands.

## writeMap/writeSet silently drop or corrupt any Map/Set member that directly references an ancestor object, because the member's fill is deferred to post-construction extras that never reach the already-built collection

`packages/runtime-tags/src/html/serializer.ts` › `writeMap` | 2026-07-21 | impact:high | effort:high

In `packages/runtime-tags/src/html/serializer.ts`, `writeMap` (l.989) and `writeSet` (l.1068) eagerly patch a member into the constructor IIFE (`a[i]=m` / `i[i]=s`, before `forEach`/`reduce`) ONLY when the member is `=== val`, the container itself (l.1003-1010/1037-1044/1079-1082). A member that is `===` an _ancestor_ higher in the write tree is not caught, so it takes writeReferenceOr's circular path (l.624-629): it becomes a hole in the backing array and its fill is queued on `state.assigned`, which `writeAssigned` (l.470-483) emits as `_.a[i]=<id>` extras AFTER the payload body. Because `new Set(items)` / `new Map(entries)` / the `reduce` copy members at construction time, that post-hoc backing-array patch never reaches the built collection, so the member is silently lost (Set: `size` short by one) or corrupted (Map: entry present but its ancestor key or value resolves to `undefined`) with no throw and no MARKO_DEBUG warning. This affects natural resume shapes where a serialized Set/Map holds an object that is itself an ancestor on the walk — undirected graph adjacency (the A↔B back-edge is dropped), `set.add(ownerObject)` back-references, or ancestor Map keys/values — while the wrapper case (`{nested: container}`) already works because the fresh member is added by reference and only its property is patched later. NOTE (verified 2026-07-21): the tempting "force the eager-IIFE form" fix does NOT work — the container-self `=== val` patch only works because it targets the in-scope IIFE var (`m`/`s`), whereas an ancestor's fill must reference the ancestor's id (`_.a`), which is assigned only when the enclosing `_.a={…}` literal finishes, i.e. AFTER the nested Map/Set IIFE has already evaluated, so it reads `undefined` (a `((s,i)=>(i[0]=_.a,…))(new Set,[0])` inside `_.a={…set:…}` deserializes with the member still `undefined`). The correct fix gives the collection its own id and defers the ancestor member's INSERTION as a post-construction method call — `_.setId.add(_.ancestorId)` / `_.mapId.set(<k>,<v>)` emitted after all ids are assigned — a new deferred-method-call path in `writeAssigned` (adjacent to the existing channel-mutation `_.x.f(arg)` emit at l.515-538) that serializes the non-ancestor key/value side via `writeProp`; this is closer to effort:high than med. Re-verify with the serializer harness: round-trip `parent` where `const parent={name:'p'}; const s=new Set(); s.add(parent); parent.set=s;` and assert `rt.set.size===1 && rt.set.has(rt)` — today it yields payload `...set:new Set(_.a=[])}}),_.a[0]=_.b,0)` with `size===0`; the undirected-graph and ancestor Map key/value variants fail the same way.

## Constructed content only initial-renders leaf channels: `_or` joins and setup-wired var chains never fire

`packages/runtime-tags/src/dom/signals.ts` › `_or` | 2026-07-23 | impact:high | effort:high

A patch-constructed subtree runs no setup (`getShellRenderer` constructs
with setup `0`), so its signal graph is driven solely by the update fn's
patch dispatches. Leaf channels now render (let/const signals force their
fresh-scope render; `_update_scopes` holes and effect entries were already
per-channel exact), but graph-shaped delivery has no channel at all: an
`_or` join primes its pending count on the one side a seed dispatches and
stalls forever, and a child template's `<return>` -> parent tag-var linkage
(`_var(scope, childKey, signal)`) exists only in setup, so it is never
wired. Verified in `persisted-update-fresh-page`: the cross-route hop back
to the cart view constructs the subtree with `nav.tags` filled but neither
branch of the seed-conditioned `<if=!entries.length>` rendered (the `_or`
joining `list`/`products` was observed priming once and never running), and
no later update heals it. This is the structural remainder of the
constructed-content seeding family: each channel has grown its own
freshness carve-out, and the missing ones cannot be patched the same way —
the compiled construct pass (persisted-pages-scratch
`designs/constructed-content-render-paths.md`) owns joins, var/Owner
wiring, and the serialization lattice; do not add another carve-out.
Re-verify via that fixture's final Update block in `render-ssr.md` (cart
table missing), plus the skipped fixtures
`persisted-update-construct-child-owner.skip` and
`persisted-update-construct-env-default.skip`.

## Persisted mutation POSTs that fail (4xx/5xx) leave the optimistic write unaudited

`packages/runtime-tags/src/dom/update-merges.ts` › `patch` | 2026-07-23 | impact:med | effort:med

The ecommerce hardening closed the trigger (malformed cart adds now 400
before render; a cart entry whose product no longer resolves renders as a
dropped row instead of crashing), but the general edge remains unverified:
when a persisted mutation POST yields a non-patch response (a 4xx like the
new validation reject, or a genuine 500 mid patch render), what happens to
the optimistic client write that preceded it (the header-badge bump) is not
covered by any fixture or validate suite — the earlier field report was an
empty diff applied as a 200 patch, i.e. the optimistic guess silently stood.
Audit the router's non-2xx mutation path and add a validate check that a
failed mutation either reverts or surfaces the failure. Re-verify by POSTing
`_action=add` with an empty `productId` from a live page and watching the
header count.
