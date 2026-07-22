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

## Multiple-select change observer compares controlled value to DOM selection index-by-index

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_select_value_script` | 2026-07-14 | impact:low | effort:low

In `_attr_select_value`'s `MutationObserver` (fired when `<option>`s are added/removed), the decision to run `onChange` is `value.length !== el.selectedOptions.length || value.some((v, i) => v != el.selectedOptions[i].value)` (lines 352–353). `value` is `scope[ControlledValue]` in app-supplied order, while `el.selectedOptions` is always document order and selection is applied set-wise (`opt.selected = value.includes(opt.value)` in `setSelectValue`). So a set-equal but reordered controlled array (e.g. `value=["b","a"]` with options rendered `a,b`, both selected) flags a false mismatch on any option add/remove and fires `valueChange(getSelectValue(...))`, silently reordering the app model to document order with no user interaction. Native multi-select never preserves order (any real user change already document-orders the model), so impact is low — the only novel effect is a spurious change side-effect on unrelated option mutations, which stabilizes after one fire. Fix: compare as sets (length plus `every(v => selectedValues.has(v))`).

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

## `COMPAT_REGISTRY` caches `[id, scopeId]` for the module lifetime

`packages/runtime-tags/src/html/compat.ts` › `compat.toJSON` | 2026-07-13 | impact:med | effort:med

`toJSON`'s `COMPAT_REGISTRY` is a module-global `WeakMap` keyed by the registered
function, and the `_script(scopeId, SET_SCOPE_REGISTER_ID)` side-effect (line 79)
runs only on the first `toJSON()` for that function object, ever. For any
registered function reused across renders (a module-level/hoisted `renderBody`,
or a memoized handler), render #2 returns render #1's cached `scopeId` (per-render
scope counters reset via `new State`) and never re-emits the `SET_SCOPE`
registration, so its serialized reference points at a stale scope id and the
client `getRenderScopes(...)[id]` lookup misses → broken hydration / dead bridged
handler. Server-side the WeakMap persists across requests, so this is a
cross-request hazard. Fix: key the cache per-render/per-`State` rather than
module-globally.

## class→tags bridged render builds its head `Chunk` with null context

`packages/runtime-tags/src/html/compat.ts` › `compat.render` | 2026-07-13 | impact:med | effort:med

`compat.render` builds the bridged tags child's head `Chunk` with `context: null`
(the flagged TODO). With null context, inside the bridged subtree
`isInResumedBranch()` is false and `$chunk.context?.[kBranchId]`/`[kIsAsync]` are
undefined, so `_script` never calls `_resume_branch` and
`AccessorProp.ClosestBranchId` is never written. A Class component embedded under
an async/lazy Tags region (`tags(async) → class → tags(effect)`) then resumes its
effect with no closest-branch association, attaching it to the wrong branch or
none → hydration mismatch. Fix: thread the enclosing chunk's context into the
bridged head chunk.

## `_dynamic_tag` compares only the renderer id, conflating instances of the same content

`packages/runtime-tags/src/dom/control-flow.ts` › `_dynamic_tag` | 2026-07-14 | impact:high | effort:med

The dynamic-tag change checks compare `renderer?.[RendererProp.Id] || renderer` (`:535` for `_dynamic_tag`, `:647` for `_dynamic_tag_content`, plus the DOM `_attr_content`). `RendererProp.Id` is the template/section resume id, identical for every _instance_ of one content section — instances differ only by their `RendererProp.Owner` scope. So switching a dynamic tag between two instances of the same content — two `<attrs.content>` from two instances of one provider tag, or the list-detail `<${selected.content}/>` — is a silent no-op: no teardown or re-render, and closures stay subscribed to the old owner's scope. A control with two _distinct_ tag files behaves correctly, pinning the defect to the id-only comparison. Fix: compare `(id, owner)` — content renderer objects are recreated per render so identity alone over-fires, while the owner scope is stable per instance; the resume handshake must serialize a scope-registered renderer as its registered reference so the first post-resume update stays instance-aware.

## Initialize tag variables for dynamic native tags

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-15 | impact:med | effort:high

The string-renderer branch of HTML `_dynamic_tag` never assigns `result` (the inline TODO calls this out), and the DOM branch creates the element but never sends its getter through the branch's `AccessorProp.TagVariable` callback (`dom/control-flow.ts:547`). Verified by adding `<${input.show && "div"}/el/><script>el().textContent = "set"</script>` to the `dynamic-tag-var` fixture: both CSR and SSR-resume left the `<div>` empty because `el` was never initialized, so its dependent effect never ran. Static native tags instead create a registered `_el(...)` getter; the dynamic-native path needs the equivalent getter tied to the created/resumed branch element in both runtimes.

CSR is a runtime-only fix: push `() => childScope[AccessorProp.StartNode]` through the child scope's `TagVariable` callback right after the native branch is created in `dom/control-flow.ts`. SSR-resume is the hard part and needs the translator, not just the runtime. The native branch scope carries no state, so `_var`'s `writeScopePassive` `#TagVariable` slot is never serialized (the server fill contains only the parent scope); a dynamic _component_ tag var only resumes because its scope serializes anyway, carrying `{ "#TagVariable": _(1, "…/var") }`. So on resume there is no callback to invoke from the `BranchEndNativeTag` marker handler (`dom/resume.ts:232`). Runtime-only escapes don't exist: `_dynamic_tag` is never told a tag var is present (the compiler emits a separate `_var`), and forcing every tag var to serialize its scope actively regresses payload size for all of them. Delivering the getter across the dynamic boundary requires the compiler to serialize/reconstruct an element reference (a client-side `_el(id, accessor)` for the resumed branch element) — hence effort:high spanning compiler + runtime + serialization.

A live `@marko/run` app shows this manifests as a HARD SSR 500 in dev, not just an empty render: reading the ref (`<${shape}/mark .../>` then `<effect>{ mark().getBBox() }` or a `<script>` reader) makes the HTML `_dynamic_tag` return `undefined` for `mark`, which the compiler guards with `_assert_hoist(mark)` — throwing MARKO_DEBUG's misleading `Hoisted values must be functions, received type "undefined"` (`packages/runtime-tags/src/common/errors.ts:109-114`), with a stack pointing at compiled runtime rather than the user's tag-variable construct. Under optimize `_assert_hoist` is compiled out, so SSR instead succeeds but serializes `mark: undefined`, and on the client `_hoist("mark")()` throws "undefined is not a function" when the effect/script runs — a silent dev-vs-prod divergence. Beyond the full high-effort compiler+serialization fix already noted, a low-effort, independently-valuable improvement is a compile-time error/warning when a tag variable is placed on a dynamic tag that can resolve to a native tag name, so users get a source-level diagnostic instead of an internal assert (dev) or broken hydration (prod).

## Make conflicting load triggers for one shared asset deterministic

`packages/runtime-tags/src/html/assets.ts` › `flush` | 2026-07-15 | impact:med | effort:med

`addAsset` deduplicates solely by asset id and silently ignores the triggers on every later registration. The existing `lazy-tag-shared-parent` shape proves separate parent modules can wrap the same child asset independently; if one imports it with `visible` and another with `idle`/an event, whichever parent renders first becomes the only trigger and the other condition can never load the shared module. Detect incompatible registrations before the first flush and combine their triggers, or emit a compile/debug error as the existing TODO suggests; do not let render order choose behavior.

## Recover a `<try>` boundary from `@catch` when its `<await>` gets a new promise

`packages/runtime-tags/src/dom/control-flow.ts` › `renderCatch` | 2026-07-18 | impact:high | effort:med

On the client, once an `<await>` promise rejects and `@catch` renders, assigning a new resolving promise to the awaited state never recovers the boundary: `renderCatch` destroys the `<try>` content branch — which held the only subscription to the awaited expression — and permanently swaps in the catch renderer, while `_try` (packages/runtime-tags/src/dom/control-flow.ts:355) only reinstalls content when no branch scope exists, so later updates run their side effects (the fetch fires) but the resolved value is silently dropped and the stale error stays with no warning. Repro: `<let/p=input.data><button onClick() { p = fetch("/api/x").then((r) => { if (!r.ok) throw new Error("fail"); return r.json(); }) }>retry</button><try><await|v|=p>${v}</await><@placeholder>...</@placeholder><@catch|e|>${e.message}</@catch></try>` — after one rejection, every retry requests but never renders. This contradicts packages/runtime-tags/cheatsheet.md:87 ("hand `<await>` a new promise and it shows the placeholder again, then the new result"), and no fixture covers reject-then-new-promise within one boundary (the async-reject-then-resolve-* fixtures use isolated boundaries). Either reset the boundary when awaited inputs change, or document a reset idiom — wrapping the `<try>` in a keyed `<for>` and bumping the key on retry works — since retry-after-error is the most common error-boundary UX.

## Honor union type annotations on tag variables in @marko/type-check instead of collapsing to the initializer's type

`packages/runtime-tags/tags/let.d.marko` › `Input` | 2026-07-18 | impact:med | effort:med

A parenthesized union annotation on a tag variable parses, compiles, and runs, but `mtc` (@marko/type-check 3.1.2) narrows the variable to the initializer's type instead of the declared union: `<let/e:(number | string) = 5>` then `e = "hi"` in a handler errors TS2322 "'string' is not assignable to type 'number'", and `<let/x:(number | undefined) = undefined>` types x as `undefined` so every later assignment errors. Non-union annotations ARE honored (`<let/d:string = 5>` correctly rejects the initializer), so the annotation isn't ignored wholesale — the union is re-inferred/intersected against the initializer, unlike plain TS `let e: number | string = 5` which keeps the union. This defeats the main reason to annotate a tag variable (widening beyond the initial value); the only working spelling today is casting the initializer, `<let/x=(undefined as number | undefined)>`. The `Input<T, K = T>` here is what the type extractor instantiates; the extraction logic itself lives in marko-js/language-tools (@marko/type-check), where the annotation should become the `T` type argument rather than an inference site combined with the value.

## Widen `<for by>`'s typed return to `string | number` so numeric keys type-check

`packages/runtime-tags/src/common/errors.ts` › `assertValidLoopKey` | 2026-07-19 | impact:med | effort:low

The runtime accepts a string OR number loop key — `assertValidLoopKey` throws only when `typeof key !== "string" && typeof key !== "number"` (`common/errors.ts:65`), the key is used directly as a `Map` key with no string coercion (`dom/control-flow.ts:811-816`), and the runtime `by` callback is typed `=> unknown` (`control-flow.ts:739`). But the type surface consumed by `mtc`/IDE narrows every `by` to `=> string`: in `@marko/language-tools` (2.6.4) `marko.internal.d.ts`, `forOfTag`/`forInTag`/`forToTag`/`forUntilTag` and the merged `forTag` type `by` as `((item, index) => string) | string`. So `by=(todo) => todo.id` where `id: number | string` fails `TS2322` ("Type 'number' is not assignable to type 'string'"), while the string-shorthand `by="id"` (which returns the same numeric key at runtime) type-checks — an internal inconsistency, since both yield a numeric runtime key and both render/hydrate correctly. The 5→6 migration guide recommends the failing spelling (`skills/marko-5-to-6-migration/api-mapping.md:26`, `by=(item) => item.id`), so porting the flagship TodoMVC (keys off a numeric `id`) hits a type error out of the box and forces `String(todo.id)`. The fix lives in the off-disk `marko-js/language-tools` d.ts (change the `=> string` returns to `=> PropertyKey` / `=> string | number`); the on-disk runtime authority for the contract is `common/errors.ts:65`. This mirrors the existing `bugs.md` language-tools entry that files a type-check bug under marko while noting the fix lives upstream — and is distinct from both union-annotation entries (those concern `<let>`/`<const>` annotations, not the built-in `<for by>` return type).

## Mount `<script>`/effect run order diverges between SSR-hydration and client-created branches

`packages/runtime-tags/src/translator/util/signals.ts` › `writeHTMLResumeStatements` | 2026-07-19 | impact:med | effort:med

The same component runs its mount effects in two different orders depending on render path, and neither matches source order. For a tag with `<let/x><let/y>` and three `<script>`s reading `x`, `y`, and both, an SSR-hydrated instance runs them `[e3, e2, e1]` (reverse source order) while a client-created instance (via an `<if>` toggle) runs them `[e1, e3, e2]`. Two independent, disagreeing code paths decide the order. HTML/SSR: `writeHTMLResumeStatements` iterates the section's signals in reverse — `for (let i = allSignals.length; i--;)` (`translator/util/signals.ts:1265`) — pushing `_script(scopeId, id)` calls in reverse signal order into the serialized resume `effects` string, which the client replays in-order at hydration (`html/writer.ts` `writeEffect`/`concatEffects`). DOM/CSR: compiled `$setup` runs signals forward, each `<script>` queued when its dependency signal fires via `_script`→`queueEffect` (`dom/signals.ts:386-390`) and run in push order by `runEffects` (`dom/queue.ts`), with intersections (`_or`, `dom/signals.ts:99`) firing when their last dep inits and thus reordering a both-deps effect between the single-dep ones. The reverse loop at `signals.ts:1265` is the direct cause of the SSR order being the reverse of the intra-section signal order and thus mismatching the DOM run order. The final rendered DOM is correct here (values equal at mount), so this only bites side-effect ORDER — but ordering-dependent mount effects (imperative init sequences, the documented restore-then-persist localStorage idiom) then behave differently on the two paths, silently. Distinct from the existing `unclear.md` localStorage entry (`dom/signals.ts:386`), which describes only the CSR dependency-init order and never notes that SSR-hydration order is the reverse. Fix: make the HTML emit order match the DOM signal-graph order (drop the reverse, or align both runtimes to one canonical order); if mount-effect order is deemed unspecified, document that the two paths differ.

## Surface a "cannot resolve tag" diagnostic in mtc for unresolved custom tags instead of typing them as untyped dynamic tags

`packages/compiler/src/babel-utils/tags.js` › `resolveTagImport` | 2026-07-19 | impact:high | effort:med

A custom tag that fails to resolve (a component referenced by kebab tag name with no `import`, or a typo'd tag name) is a hard build error but produces ZERO diagnostics under `mtc` — the type-check tool agents are told to run. Reproduced in a real @marko/run scaffold: Marko 6 auto-discovers only `tags/` dirs (`runtime-tags` sets `tagDiscoveryDirs = ["tags"]` at `packages/runtime-tags/src/translator/index.ts:40`), so `src/components/*.marko` is NOT auto-registered — `<user-card name="X" age="alsoWrong" bogus=true/>` (no import) and the typo `<char-cont max="wrong" nope=1/>` both pass `mtc` with exit 0, while `npm run compile -o html` / `marko-run build` throw `Unable to find entry point for custom tag <user-card>` (`resolveTagImport` at `tags.js:353`; `tagNotFoundError` at `packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts:411`). The identical wrong attr on a RESOLVED tag correctly errors TS2322 (verified against `<char-count max="notanumber">`), proving tag resolution — not the attribute — is the gate: language-tools lowers an unresolvable tag to `renderDynamicTag(...)` whose input is `Record<string, unknown>`, so every attribute and callback param goes unchecked. This is the worst shape for an agent whose deterministic verify loop is `mtc`: it creates a component, references it by tag (natural for anyone used to auto-registering `components/` dirs), sees a clean type-check, and ships wrong props or a misspelled tag; the build then fails with an "entry point" error that looks unrelated to the type loop. Direction: have @marko/language-tools emit a distinct "cannot resolve tag `<x>`" diagnostic mirroring the compiler instead of degrading to an untyped dynamic tag. The fix lives in off-disk `marko-js/language-tools`; the on-disk authority is `tags.js:353` / `custom-tag.ts:411`, matching the existing bugs.md precedent of filing language-tools type-check gaps under marko. Distinct from the run dx.md route-types entries (missing `Run` global / stale `routes.d.ts`), which concern generated route types, not custom-tag resolution.

## Reset the reactive scheduler's `isScheduled` flag on failure so a missing `MessageChannel` cannot permanently wedge updates

`packages/runtime-tags/src/dom/schedule.ts` › `triggerMacroTask` | 2026-07-19 | impact:med | effort:low

In a DOM environment lacking a usable `MessageChannel`, the reactive scheduler applies the FIRST update and then silently drops every later one. `schedule()` sets `isScheduled = 1` (`dom/schedule.ts:17`), and the flag is reset to `0` in exactly one place — the `channel.port1.onmessage` handler (`:36`) — reachable only if `new MessageChannel()` (`:34`) succeeds. When `MessageChannel` is absent, `:34` throws inside the `requestAnimationFrame` callback `triggerMacroTask`, the handler is never installed, `isScheduled` stays `1` forever, and every subsequent `schedule()` short-circuits at `:7`. The first update still lands because `flushAndWaitFrame` runs `run()` synchronously (`:28`), and `run()`→`runRenders()` (`dom/queue.ts:83-95,131-167`) applies the queued renders without touching the channel — the channel is only the next-frame reset. That asymmetry is the trap for agentic workflows: a one-click smoke test goes green (false confidence) while a two-step interaction test fails with no test-visible error — the throw surfaces only as a jsdom window `error` event — so an agent cannot tell whether its component logic or its harness is at fault. It bites hand-rolled jsdom and jest+jsdom harnesses (which historically ship no `MessageChannel`, the same gap React 18's scheduler hit), the exact throwaway setups agents reach for to self-verify. Reset the flag in a `finally` (or degrade to `setTimeout`/`queueMicrotask` for the macrotask boundary) plus add a `MARKO_DEBUG` assert naming the missing `MessageChannel`, turning a silent misattributed wedge into a deterministic, self-explaining failure fixable from the error string alone.

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

## Dedup a Request/Response's headers against an already-serialized Headers instead of re-emitting inline and clobbering its ref

`packages/runtime-tags/src/html/serializer.ts` › `writeRequest` | 2026-07-20 | impact:low | effort:med

`writeRequest` (and `writeResponse`) always serialize `val.headers` inline via `stringEntriesToHeadersInit` and then unconditionally `state.refs.set(val.headers, new Reference(ref, "headers", …))` (serializer.ts:1318-1319, 1380-1381). When the same Headers object was already serialized standalone (it already has a Reference), this both fails to dedup (the headers data is emitted twice) and overwrites the prior ref, so referential identity is lost. `{a: req.headers, b: req}` serializes `a` as its own `new Headers({…})` and then re-emits the headers inline inside the Request, so on resume `a !== b.headers` even though originally `a === req.headers`; the reverse order `{b: req, a: req.headers}` works and is the only order the existing `headers` test covers. Guard the `state.refs.set` (set only when absent) and emit `headers:<deduped ref>` when `state.refs.has(val.headers)`. Re-verify: `assertStringify({a: req.headers, b: req}, …)` with `const req = new Request("https://x/", {headers:{a:"1"}, method:"POST"})` emits a standalone `new Headers({a:"1"})` plus a second inline `{a:"1"}`, and the deserialized `a !== b.headers`.

## Route a failed lazy input-signal chunk to the `@catch` boundary instead of swallowing it and hanging the branch

`packages/runtime-tags/src/dom/load.ts` › `insertLoaded` | 2026-07-20 | impact:low | effort:low

`insertLoaded` collects the pending input-signal chunk promises from `branch[AccessorProp.Load]` and gates the branch's `Setup`, value application, `insert()` (which runs `insertBranchBefore`/`marker.remove()`/`awaitCounter.c()`, load.ts:112-116), all behind `if (!--remaining)` (load.ts:126), decrementing `remaining` only on fulfillment; the per-promise rejection arm is `() => 0` (load.ts:137). The compiled output of a lazy tag with inputs proves the input chunk is a separate dynamic import from the setup chunk (`_load_signal(() => import("./v:child.marko.input_value.mjs"))` vs `_load_setup(..., () => import("./v:child.marko.setup.mjs"))`, e.g. `lazy-tag-attrs-update` `dom.bundle.debug.js:13-14`), so the input chunk can reject on its own (transient network failure, a dependency only it pulls in) after the setup chunk already resolved and `insertLoaded` ran. When it does, `remaining` never reaches 0: the branch is cloned into its scope but never inserted, `awaitCounter.c()` never runs so an ancestor `<try>@placeholder` stays shown forever, `renderCatch` is never queued so `@catch` never fires, and even the input values whose chunks loaded are dropped — the exact partial-failure the `<try>` boundary exists to handle. This is asymmetric with the setup/template chunk path, which routes failures through `loadFailed` → `queueAsyncRender(scope, renderCatch, error)` (load.ts:55/98/146-154); the existing `lazy-tag-load-error` fixture can't catch it because its child-module top-level `throw` (`dom.bundle.debug.js:5`) fails BOTH chunks, letting the handled setup failure drive the catch first. Fix: replace the `() => 0` at load.ts:137 with `loadFailed(branch, awaitCounter)` (both are in scope on the value-collecting path) so a failed input chunk drives the same boundary, ideally guarding so multiple rejections don't queue `renderCatch` more than once; the related collect path in `_load_signal` (load.ts:171-174) similarly leaves the input `pending` with no handler until `insertLoaded` runs, so a setup-failure-before-insert turns an input-chunk rejection into an unhandled rejection — same root. Distinct from the document-side `.load.mjs` load-entry that floats its own rejection (`program/index.ts`): this is the client render path, where the input-signal chunk, unlike `_load_setup`/`_load_template`, never reaches a boundary. Re-verify: compile `lazy-tag-attrs-update`'s `<Child value=value/>` under a `<try>` with `@placeholder`/`@catch`, then resolve the `v:child.marko.setup.mjs` import but reject the `v:child.marko.input_value.mjs` import, and observe the child never appears, the placeholder never dismisses, and `@catch` never renders.

## Give writeTriggerScript's shared load-trigger loader a block body so it always returns undefined and multi-trigger missing-selector fallbacks stop throwing

`packages/runtime-tags/src/html/assets.ts` › `writeTriggerScript` | 2026-07-20 | impact:low | effort:low

`writeTriggerScript` (assets.ts:165-169) emits a shared loader `l=$=>d||p.after(new Range().createContextualFragment(d=h))` (166) and joins multiple triggers into one `{expr;expr}` block that all share it. `l` returns `undefined` only on its first call — while `d` is falsy it evaluates `p.after(...)` (which returns undefined) and sets `d=h` — but every later call short-circuits `d||…` and returns the truthy html string `h`. The `visible` and `on-*` guards assume the missing-selector fallback is falsy: `(e=>e&&new IntersectionObserver(…).observe(e))(document.querySelector(sel)||l())` (154-156) and `(e=>e?.addEventListener(type,l,{once:1}))(document.querySelector(sel)||l())` (162). The compiler fully supports 2+ `|`-separated triggers per asset (fixture `lazy-tag-multi-trigger-attrs-update` uses `load: "visible body|on-mouseover body"`), so when two of them take the fallback — e.g. `load: "visible .a | on-click .b"` with neither `.a` nor `.b` present — the first `l()` loads the asset and skips its guard, but the second returns `h`, running `observe(h)` / `h?.addEventListener(...)` and throwing a `TypeError` that aborts the rest of the block (the asset still loads via the first fallback, so the net effect is a console error plus skipped redundant triggers). Give `l` a block body — `l=$=>{d||p.after(new Range().createContextualFragment(d=h))}` — so every fallback path yields undefined and the guards skip consistently. Re-verify: for `load: "visible .a | on-click .b"` with both selectors absent, call the emitted `l` twice — the first returns undefined (fragment inserted once), the second returns the truthy `h`, so the `on-click` guard evaluates `h?.addEventListener(...)` and throws `TypeError`; the block-body form returns undefined both times and the guards skip.

## Reactive object-`style` values are string-concatenated raw on SSR (`stringifyStyleObject`) but validated via `el.style.setProperty` on CSR, so values containing `;`/`!important`/otherwise-invalid CSS render server-only, causing an SSR/CSR divergence and a server-only CSS-injection surface for the ubiquitous `<div style={ prop: value }/>` pattern.

`packages/runtime-tags/src/common/helpers.ts` › `stringifyStyleObject` | 2026-07-21 | impact:med | effort:med

For an object-`style` attribute with a single dynamic property (`<div style={ color: input.color }/>`), the translator emits divergent code per runtime (native-tag.ts:799-829): CSR gets `_attr_style_item($div, "color", value)` → `el.style.setProperty("color", _to_text(value))` (dom/dom.ts:118-124), which silently rejects any value setProperty deems invalid (containing `;`, `!important`, or non-parseable), while SSR gets `_attr_style({ color: value })` → `stringifyStyleObject` (common/helpers.ts:77) which concatenates `name + ":" + value` with only HTML-attribute quoting from `attrAssignment`, no CSS-value escaping. So the same template renders differently on server vs client, and a dynamic value drawn from user data becomes a server-only CSS-injection vector: `input.color = "red;background:url(//evil/?leak)"` breaks out of the `color:` declaration on SSR but is dropped by setProperty on CSR, so it never surfaces in client-only testing. Fix by escaping the value in `stringifyStyleObject` with the `escapeStyleValue` helper two functions below (common/helpers.ts:80), which hex-escapes `;{}<>` so SSR drops the value as one invalid declaration matching setProperty's rejection; `_escape_style_value` (html/content.ts:54) already applies `escapeStyleValue` elsewhere, making the object-attribute path the outlier. Weigh the hot-path size note at helpers.ts:75-76 and regenerate style snapshots. Re-verify: `require` the real helpers under jsdom and compare — `_attr_style({color:"red;background:blue"})` returns `" style=color:red;background:blue"` (two declarations) while `_attr_style_item(el,"color","red;background:blue")` leaves `el.style.cssText === ""`.

## writeMap/writeSet silently drop or corrupt any Map/Set member that directly references an ancestor object, because the member's fill is deferred to post-construction extras that never reach the already-built collection

`packages/runtime-tags/src/html/serializer.ts` › `writeMap` | 2026-07-21 | impact:high | effort:high

In `packages/runtime-tags/src/html/serializer.ts`, `writeMap` (l.989) and `writeSet` (l.1068) eagerly patch a member into the constructor IIFE (`a[i]=m` / `i[i]=s`, before `forEach`/`reduce`) ONLY when the member is `=== val`, the container itself (l.1003-1010/1037-1044/1079-1082). A member that is `===` an _ancestor_ higher in the write tree is not caught, so it takes writeReferenceOr's circular path (l.624-629): it becomes a hole in the backing array and its fill is queued on `state.assigned`, which `writeAssigned` (l.470-483) emits as `_.a[i]=<id>` extras AFTER the payload body. Because `new Set(items)` / `new Map(entries)` / the `reduce` copy members at construction time, that post-hoc backing-array patch never reaches the built collection, so the member is silently lost (Set: `size` short by one) or corrupted (Map: entry present but its ancestor key or value resolves to `undefined`) with no throw and no MARKO_DEBUG warning. This affects natural resume shapes where a serialized Set/Map holds an object that is itself an ancestor on the walk — undirected graph adjacency (the A↔B back-edge is dropped), `set.add(ownerObject)` back-references, or ancestor Map keys/values — while the wrapper case (`{nested: container}`) already works because the fresh member is added by reference and only its property is patched later. NOTE (verified 2026-07-21): the tempting "force the eager-IIFE form" fix does NOT work — the container-self `=== val` patch only works because it targets the in-scope IIFE var (`m`/`s`), whereas an ancestor's fill must reference the ancestor's id (`_.a`), which is assigned only when the enclosing `_.a={…}` literal finishes, i.e. AFTER the nested Map/Set IIFE has already evaluated, so it reads `undefined` (a `((s,i)=>(i[0]=_.a,…))(new Set,[0])` inside `_.a={…set:…}` deserializes with the member still `undefined`). The correct fix gives the collection its own id and defers the ancestor member's INSERTION as a post-construction method call — `_.setId.add(_.ancestorId)` / `_.mapId.set(<k>,<v>)` emitted after all ids are assigned — a new deferred-method-call path in `writeAssigned` (adjacent to the existing channel-mutation `_.x.f(arg)` emit at l.515-538) that serializes the non-ancestor key/value side via `writeProp`; this is closer to effort:high than med. Re-verify with the serializer harness: round-trip `parent` where `const parent={name:'p'}; const s=new Set(); s.add(parent); parent.set=s;` and assert `rt.set.size===1 && rt.set.has(rt)` — today it yields payload `...set:new Set(_.a=[])}}),_.a[0]=_.b,0)` with `size===0`; the undirected-graph and ancestor Map key/value variants fail the same way.

## writeAggregateError passes the errors array as the AggregateError constructor's first argument, but `new AggregateError(arr)` copies arr into a fresh own `errors` slot — so a shared errors array loses referential identity on resume and an array with deferred/circular members silently drops those members.

`packages/runtime-tags/src/html/serializer.ts` › `writeAggregateError` | 2026-07-21 | impact:med | effort:med

`writeAggregateError` (packages/runtime-tags/src/html/serializer.ts:1224) emits `new AggregateError(<errors>,message)` by handing `val.errors` to `writeProp` as the constructor argument (l.1230), only falling back to the post-construction `.errors=` deferred form when `writeProp` returns false — which happens exclusively for a self-circular errors array. But `new AggregateError(arr).errors !== arr`: the engine copies arr into a fresh writable own slot (verified), so whenever the errors array instead gets a dedup id or carries a deferred member, the constructor copies the wrong/incomplete array. Reproduced through the serializer harness: (a) `{agg, allErrors: agg.errors}` serializes to `new AggregateError(_.a=[…],"batch failed")` with `allErrors:_.a` and round-trips with `agg.errors !== _.a` (identity lost); (b) `state={agg}; agg.errors=[state]` serializes to `new AggregateError(_.b=[],…)` then `_.b[0]=_.a`, and the fill lands on `_.b` rather than the copied `agg.errors`, so `agg.errors.length` round-trips 0 instead of 1 (silent data loss). The existing "errors array referenced" test only checks deep-subset (misses the identity break) and "circular errors" only exercises the working arr-first `.errors=` form, so neither guards this. Fix: mirror the circular fallback — construct `new AggregateError([],message)` and apply `agg.errors=<arr>` as a deferred assignment whenever the array is given an id (shared) or has deferred members, since `errors` is a writable own data property the existing circular test already relies on. Re-verify with two harness round-trips: serialize `{agg, allErrors: agg.errors}` for `agg=new AggregateError([new Error("a")],"m")` and assert deserialized `allErrors === agg.errors`; and serialize `state` for `const agg=new AggregateError([],"failed"), state={agg}; agg.errors=[state]` and assert deserialized `agg.errors.length === 1` — both fail today.
