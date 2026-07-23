# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

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

## Initialize tag variables for dynamic native tags

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-15 | impact:med | effort:high

The string-renderer branch of HTML `_dynamic_tag` never assigns `result` (the inline TODO calls this out), and the DOM branch creates the element but never sends its getter through the branch's `AccessorProp.TagVariable` callback (`dom/control-flow.ts:547`). Verified by adding `<${input.show && "div"}/el/><script>el().textContent = "set"</script>` to the `dynamic-tag-var` fixture: both CSR and SSR-resume left the `<div>` empty because `el` was never initialized, so its dependent effect never ran. Static native tags instead create a registered `_el(...)` getter; the dynamic-native path needs the equivalent getter tied to the created/resumed branch element in both runtimes.

CSR is a runtime-only fix: push `() => childScope[AccessorProp.StartNode]` through the child scope's `TagVariable` callback right after the native branch is created in `dom/control-flow.ts`. SSR-resume is the hard part and needs the translator, not just the runtime. The native branch scope carries no state, so `_var`'s `writeScopePassive` `#TagVariable` slot is never serialized (the server fill contains only the parent scope); a dynamic _component_ tag var only resumes because its scope serializes anyway, carrying `{ "#TagVariable": _(1, "…/var") }`. So on resume there is no callback to invoke from the `BranchEndNativeTag` marker handler (`dom/resume.ts:232`). Runtime-only escapes don't exist: `_dynamic_tag` is never told a tag var is present (the compiler emits a separate `_var`), and forcing every tag var to serialize its scope actively regresses payload size for all of them. Delivering the getter across the dynamic boundary requires the compiler to serialize/reconstruct an element reference (a client-side `_el(id, accessor)` for the resumed branch element) — hence effort:high spanning compiler + runtime + serialization.

A live `@marko/run` app shows this manifests as a HARD SSR 500 in dev, not just an empty render: reading the ref (`<${shape}/mark .../>` then `<effect>{ mark().getBBox() }` or a `<script>` reader) makes the HTML `_dynamic_tag` return `undefined` for `mark`, which the compiler guards with `_assert_hoist(mark)` — throwing MARKO_DEBUG's misleading `Hoisted values must be functions, received type "undefined"` (`packages/runtime-tags/src/common/errors.ts:109-114`), with a stack pointing at compiled runtime rather than the user's tag-variable construct. Under optimize `_assert_hoist` is compiled out, so SSR instead succeeds but serializes `mark: undefined`, and on the client `_hoist("mark")()` throws "undefined is not a function" when the effect/script runs — a silent dev-vs-prod divergence. Beyond the full high-effort compiler+serialization fix already noted, a low-effort, independently-valuable improvement is a compile-time error/warning when a tag variable is placed on a dynamic tag that can resolve to a native tag name, so users get a source-level diagnostic instead of an internal assert (dev) or broken hydration (prod).

## Document-side lazy load entries float rejections and leave the ready channel silent

`packages/runtime-tags/src/translator/visitors/program/index.ts` › `translate` (`isLoadEntry` branch) | 2026-07-16 | impact:low | effort:low

The generated `.load.mjs` entry is `load().then(() => ready(id))` with no
rejection handler, so a chunk that fails to load from the initial document
(deploy skew) surfaces only as an unhandled promise rejection and the
module's ready id never resolves. The lazy tag's own render path recovers
(`_load_setup`/`_load_template` route their `load()` failures to
`renderCatch`), but the document-side loader stays noisy and inert. Add a
`.catch` that reports through a defined channel (or retries). Verify: reject
the dynamic import in a generated load entry and watch for the unhandled
rejection with the ready id never firing.

## writeMap/writeSet silently drop or corrupt any Map/Set member that directly references an ancestor object, because the member's fill is deferred to post-construction extras that never reach the already-built collection

`packages/runtime-tags/src/html/serializer.ts` › `writeMap` | 2026-07-21 | impact:high | effort:high

In `packages/runtime-tags/src/html/serializer.ts`, `writeMap` (l.989) and `writeSet` (l.1068) eagerly patch a member into the constructor IIFE (`a[i]=m` / `i[i]=s`, before `forEach`/`reduce`) ONLY when the member is `=== val`, the container itself (l.1003-1010/1037-1044/1079-1082). A member that is `===` an _ancestor_ higher in the write tree is not caught, so it takes writeReferenceOr's circular path (l.624-629): it becomes a hole in the backing array and its fill is queued on `state.assigned`, which `writeAssigned` (l.470-483) emits as `_.a[i]=<id>` extras AFTER the payload body. Because `new Set(items)` / `new Map(entries)` / the `reduce` copy members at construction time, that post-hoc backing-array patch never reaches the built collection, so the member is silently lost (Set: `size` short by one) or corrupted (Map: entry present but its ancestor key or value resolves to `undefined`) with no throw and no MARKO_DEBUG warning. This affects natural resume shapes where a serialized Set/Map holds an object that is itself an ancestor on the walk — undirected graph adjacency (the A↔B back-edge is dropped), `set.add(ownerObject)` back-references, or ancestor Map keys/values — while the wrapper case (`{nested: container}`) already works because the fresh member is added by reference and only its property is patched later. NOTE (verified 2026-07-21): the tempting "force the eager-IIFE form" fix does NOT work — the container-self `=== val` patch only works because it targets the in-scope IIFE var (`m`/`s`), whereas an ancestor's fill must reference the ancestor's id (`_.a`), which is assigned only when the enclosing `_.a={…}` literal finishes, i.e. AFTER the nested Map/Set IIFE has already evaluated, so it reads `undefined` (a `((s,i)=>(i[0]=_.a,…))(new Set,[0])` inside `_.a={…set:…}` deserializes with the member still `undefined`). The correct fix gives the collection its own id and defers the ancestor member's INSERTION as a post-construction method call — `_.setId.add(_.ancestorId)` / `_.mapId.set(<k>,<v>)` emitted after all ids are assigned — a new deferred-method-call path in `writeAssigned` (adjacent to the existing channel-mutation `_.x.f(arg)` emit at l.515-538) that serializes the non-ancestor key/value side via `writeProp`; this is closer to effort:high than med. Re-verify with the serializer harness: round-trip `parent` where `const parent={name:'p'}; const s=new Set(); s.add(parent); parent.set=s;` and assert `rt.set.size===1 && rt.set.has(rt)` — today it yields payload `...set:new Set(_.a=[])}}),_.a[0]=_.b,0)` with `size===0`; the undirected-graph and ancestor Map key/value variants fail the same way.
