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

## CSR: rejected `<await>` under an ancestor `@placeholder` never dismisses the placeholder

`packages/runtime-tags/src/dom/control-flow.ts` › `renderCatch` | 2026-07-10 | impact:med | effort:med

In a pure client render of `<try @placeholder><await>…<try @catch><await=rejecting>…`,
when the inner await rejects, `_await_promise`'s reject handler zeroes the
ancestor placeholder's counter (`awaitCounter.i = 0`) without running the
counter's completion, and `renderCatch` only unwinds a `PlaceholderBranch` on
the try that owns the `@catch`. When the placeholder lives on an _ancestor_
try (the nearest-placeholder lookup in `_await_promise` attaches the counter
there), the detached content is never re-inserted and the page shows the
placeholder forever; the catch content renders only into the detached tree.
Observed in the `catch-reject-nested-in-await` fixture's `render-csr` snapshot
(final state stays `loading outer...`; SSR of the same template shows
`caught: ERROR!` plus the sibling `<div>`). A fix needs the reject path to
complete (not zero) the pending counter so `dismissPlaceholder`/pending
effects run, while keeping the forced-zero semantics for resumed reorder
records — those `c()` implementations do stream-node surgery that must not run
on rejection.

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

## Compat `___deserialize` override dereferences a possibly-undefined scope

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js` › `ComponentDef.___deserialize` | 2026-07-13 | impact:low | effort:low

The compat `ComponentDef.___deserialize` override does
`o[2] = domCompat.getScope(global, o[2]).m5i` with no null guard, but
`compat.getScope` returns `getRenderScopes($global)?.[scopeId]`, which is
legitimately `undefined` when the tags scope carrying `m5i` has not been resumed
yet. Every other consumer uses optional chaining; the sibling comment at line 38
even notes "a split parent may not be hydrated yet when the child resumes."
Under the normal init6-before-init5 ordering the tags scope is registered first,
so this is not hit today, but any streaming/out-of-order resume of a
class-in-tags child before its `writeSetScopeForComponent` scope would throw
`TypeError`. Defensive fix: `getScope(global, o[2])?.m5i`.

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

## Restore controlled radio groups (`checkedValue:=`) to their default member on native form reset

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_input_checkedValue_script` | 2026-07-18 | impact:med | effort:med

A two-way-bound radio group (`<input type=radio checkedValue:=priority>`) is left with no radio checked and its bound state set to `undefined` after a native `<button type=reset>` — the state key literally drops out of `JSON.stringify`. `handleFormReset` (`controllable.ts:504-519`) collects every element whose value differs from its default (evaluated on the pre-reset DOM, so both the user-selected radio and the SSR-default radio qualify) and, in a `requestAnimationFrame` after the browser applies the reset, replays each element's stored `input`-event onChange. When the previously-selected radio's onChange runs (`_attr_input_checkedValue_script`, `controllable.ts:141-174`), that radio is now unchecked, so `newValue = el.checked ? el.value : undefined` (`:148-152`) is `undefined`, and the radio-restore loop keys on the stale pre-reset `oldValue` via `oldValue === radio.value` (`:154-167`) rather than the group's post-reset `defaultChecked` member, re-applying the old selection over the native reset; `checkedValueChange(undefined)` (`:171`) then clobbers the bound state. The default radio's onChange runs next with an emptied `oldValue` and unchecks everything. The path is written for the single `input` event, where the firing radio is the newly-checked one so `el.checked` is reliably true; on `reset` it instead fires for the radio being un-checked and never consults `defaultChecked`. The single-checkbox path (`:169`) and the checkbox-group array path (`:148-149` `updateList`) reset correctly, matching the observed divergence (verified in headless Chromium against a production node build; only the radio group is wrong). Fix: on reset, derive the controlled value from the group's post-reset checked/`defaultChecked` member and do not override the native reset via the `oldValue`-keyed loop, or run one representative handler per radio group that reads the post-reset checked value. Distinct from the two existing controllable entries (SSR `0n`/`NaN`/`false` normalization at `html/attrs.ts:516`; multiple-select `MutationObserver` at `controllable.ts:352`) — neither concerns form reset of radio groups.

## Parse union type annotations (`T | null`) on `<let>`/`<const>` tag variables

`packages/compiler/src/babel-plugin/parser.js` › `onTagVar` | 2026-07-18 | impact:med | effort:low

A typed tag variable with a union annotation fails to compile: `<let/d: string | null = null>` throws `EOF reached while parsing expression` with the caret at the `|`, then the scanner consumes the rest of the file and cascades phantom errors (`Line has extra indentation`), with no hint that a type annotation is involved or that parentheses fix it. Typed tag vars are otherwise supported — `<let/d: string = ...>`, intersections `<let/d: string & Foo = ...>`, generics `<let/d: Array<string> = ...>`, and parenthesized unions `<let/d: (string | null) = ...>` all compile. The compiler's `onTagVar` (`parser.js:366`) only receives the var range after htmljs-parser has scanned it, and the scan errors first: in htmljs-parser (v5.12.1) the tag-var scanners `shouldTerminateHtmlTagVar`/`shouldTerminateConciseTagVar` treat `case 124` (`|`) as an unconditional terminator, whereas `case 60` (`<`) returns `!expression.inType` (which is why generics work) and `&` (char 38) is absent from the switch (which is why intersections work). Since `|` is never made type-aware, a union `|` ends the var early and the trailing `null = null>` no longer parses as a var. `T | null` / `T | undefined` are the most common TS unions, so this blocks an idiomatic pattern with a misleading error. The root token rule lives in the external `htmljs-parser` dependency (make `case 124` return `!expression.inType`, mirroring `case 60`); the on-disk consumer and natural triage home is `@marko/compiler`, which could alternatively pre-scan the type and emit a "wrap the union in parentheses" diagnostic instead of the EOF cascade.

## Recover a `<try>` boundary from `@catch` when its `<await>` gets a new promise

`packages/runtime-tags/src/dom/control-flow.ts` › `renderCatch` | 2026-07-18 | impact:high | effort:med

On the client, once an `<await>` promise rejects and `@catch` renders, assigning a new resolving promise to the awaited state never recovers the boundary: `renderCatch` destroys the `<try>` content branch — which held the only subscription to the awaited expression — and permanently swaps in the catch renderer, while `_try` (packages/runtime-tags/src/dom/control-flow.ts:355) only reinstalls content when no branch scope exists, so later updates run their side effects (the fetch fires) but the resolved value is silently dropped and the stale error stays with no warning. Repro: `<let/p=input.data><button onClick() { p = fetch("/api/x").then((r) => { if (!r.ok) throw new Error("fail"); return r.json(); }) }>retry</button><try><await|v|=p>${v}</await><@placeholder>...</@placeholder><@catch|e|>${e.message}</@catch></try>` — after one rejection, every retry requests but never renders. This contradicts packages/runtime-tags/cheatsheet.md:87 ("hand `<await>` a new promise and it shows the placeholder again, then the new result"), and no fixture covers reject-then-new-promise within one boundary (the async-reject-then-resolve-* fixtures use isolated boundaries). Either reset the boundary when awaited inputs change, or document a reset idiom — wrapping the `<try>` in a keyed `<for>` and bumping the key on retry works — since retry-after-error is the most common error-boundary UX.

## Keep `</html>`/`</body>` in document order when the tag carries a resume marker

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `translate.exit` | 2026-07-18 | impact:med | effort:med

The HTML translator defers `</html>`/`</body>` to stream trailers only when `!markerSerializeReason`; when the tag itself needs a resume marker (any dynamic attribute, e.g. `<html lang=input.lang>` in a page with state), its end tag is baked inline in the `_html` template string while the unmarked sibling stays a trailer flushed at stream end. Repro: compile `<html lang=input.lang><head><title>t</title></head><body><let/n=0/><button onClick(){n++}>${n}</button></body></html>` with `output: "html"` and render — both debug and optimized output (marko 6.3.14) emit `...<button>0</button></html><script>…resume…</script></body>`, i.e. `</html>` closes immediately after the body content, before the resume scripts and `</body>`; hardcoding the attribute restores `</body></html>`. Browsers recover, but SSR serves invalid HTML for the very common localized-`<html lang>` pattern (an attribute derived from `$global` happens to avoid it since it gets no marker). The end tags of `html`/`body` should stay deferred (with the marker emitted alongside the trailer) or otherwise preserve document order even when marked.

## Honor union type annotations on tag variables in @marko/type-check instead of collapsing to the initializer's type

`packages/runtime-tags/tags/let.d.marko` › `Input` | 2026-07-18 | impact:med | effort:med

A parenthesized union annotation on a tag variable parses, compiles, and runs, but `mtc` (@marko/type-check 3.1.2) narrows the variable to the initializer's type instead of the declared union: `<let/e:(number | string) = 5>` then `e = "hi"` in a handler errors TS2322 "'string' is not assignable to type 'number'", and `<let/x:(number | undefined) = undefined>` types x as `undefined` so every later assignment errors. Non-union annotations ARE honored (`<let/d:string = 5>` correctly rejects the initializer), so the annotation isn't ignored wholesale — the union is re-inferred/intersected against the initializer, unlike plain TS `let e: number | string = 5` which keeps the union. This defeats the main reason to annotate a tag variable (widening beyond the initial value); the only working spelling today is casting the initializer, `<let/x=(undefined as number | undefined)>`. The `Input<T, K = T>` here is what the type extractor instantiates; the extraction logic itself lives in marko-js/language-tools (@marko/type-check), where the annotation should become the `T` type argument rather than an inference site combined with the value.

## Widen `<for by>`'s typed return to `string | number` so numeric keys type-check

`packages/runtime-tags/src/common/errors.ts` › `assertValidLoopKey` | 2026-07-19 | impact:med | effort:low

The runtime accepts a string OR number loop key — `assertValidLoopKey` throws only when `typeof key !== "string" && typeof key !== "number"` (`common/errors.ts:65`), the key is used directly as a `Map` key with no string coercion (`dom/control-flow.ts:811-816`), and the runtime `by` callback is typed `=> unknown` (`control-flow.ts:739`). But the type surface consumed by `mtc`/IDE narrows every `by` to `=> string`: in `@marko/language-tools` (2.6.4) `marko.internal.d.ts`, `forOfTag`/`forInTag`/`forToTag`/`forUntilTag` and the merged `forTag` type `by` as `((item, index) => string) | string`. So `by=(todo) => todo.id` where `id: number | string` fails `TS2322` ("Type 'number' is not assignable to type 'string'"), while the string-shorthand `by="id"` (which returns the same numeric key at runtime) type-checks — an internal inconsistency, since both yield a numeric runtime key and both render/hydrate correctly. The 5→6 migration guide recommends the failing spelling (`skills/marko-5-to-6-migration/api-mapping.md:26`, `by=(item) => item.id`), so porting the flagship TodoMVC (keys off a numeric `id`) hits a type error out of the box and forces `String(todo.id)`. The fix lives in the off-disk `marko-js/language-tools` d.ts (change the `=> string` returns to `=> PropertyKey` / `=> string | number`); the on-disk runtime authority for the contract is `common/errors.ts:65`. This mirrors the existing `bugs.md` language-tools entry that files a type-check bug under marko while noting the fix lives upstream — and is distinct from both union-annotation entries (those concern `<let>`/`<const>` annotations, not the built-in `<for by>` return type).

## Mount `<script>`/effect run order diverges between SSR-hydration and client-created branches

`packages/runtime-tags/src/translator/util/signals.ts` › `writeHTMLResumeStatements` | 2026-07-19 | impact:med | effort:med

The same component runs its mount effects in two different orders depending on render path, and neither matches source order. For a tag with `<let/x><let/y>` and three `<script>`s reading `x`, `y`, and both, an SSR-hydrated instance runs them `[e3, e2, e1]` (reverse source order) while a client-created instance (via an `<if>` toggle) runs them `[e1, e3, e2]`. Two independent, disagreeing code paths decide the order. HTML/SSR: `writeHTMLResumeStatements` iterates the section's signals in reverse — `for (let i = allSignals.length; i--;)` (`translator/util/signals.ts:1265`) — pushing `_script(scopeId, id)` calls in reverse signal order into the serialized resume `effects` string, which the client replays in-order at hydration (`html/writer.ts` `writeEffect`/`concatEffects`). DOM/CSR: compiled `$setup` runs signals forward, each `<script>` queued when its dependency signal fires via `_script`→`queueEffect` (`dom/signals.ts:386-390`) and run in push order by `runEffects` (`dom/queue.ts`), with intersections (`_or`, `dom/signals.ts:99`) firing when their last dep inits and thus reordering a both-deps effect between the single-dep ones. The reverse loop at `signals.ts:1265` is the direct cause of the SSR order being the reverse of the intra-section signal order and thus mismatching the DOM run order. The final rendered DOM is correct here (values equal at mount), so this only bites side-effect ORDER — but ordering-dependent mount effects (imperative init sequences, the documented restore-then-persist localStorage idiom) then behave differently on the two paths, silently. Distinct from the existing `unclear.md` localStorage entry (`dom/signals.ts:386`), which describes only the CSR dependency-init order and never notes that SSR-hydration order is the reverse. Fix: make the HTML emit order match the DOM signal-graph order (drop the reverse, or align both runtimes to one canonical order); if mount-effect order is deemed unspecified, document that the two paths differ.

## Tags→Class event bridge lowercases camelCase handler names, silently dropping multi-word custom events

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js` › `TagsCompat` | 2026-07-19 | impact:high | effort:med

A Tags-API parent cannot receive a Class-API child's multi-word custom event through the idiomatic camelCase handler attribute. The tags→class bridge derives the Marko-5 custom-event name from the attribute with `key[2] === "-" ? key.slice(3) : key.slice(2).toLowerCase()` (`tags-compat/runtime-html.js:193` for SSR serialization, `runtime-dom.js:197` for CSR re-render). For camelCase it lowercases the whole tail and never re-inserts separators, so `onValueChanged` → `valuechanged`; for kebab it preserves the dashes, so `on-value-changed` → `value-changed`. `Component.emit(eventType)` does an exact-string lookup `customEvents[eventType]` (`runtime-class/src/runtime/components/Component.js:220`), and idiomatic class code emits kebab (`this.emit("value-changed")`), so the camelCase-derived `valuechanged` key never matches and the listener silently never fires (confirmed by executing the installed marko5 `Component`: bridged `valuechanged` vs `emit("value-changed")` → no match; bridged `value-changed` → match). The same class component works when consumed by a Class-API parent (`on-value-changed`), so the bug is boundary-specific. This is a different code path from the harmless native miscased-event nicety in `dx.md` (`common/helpers.ts:133`, where single-token DOM event names mean the casing is irrelevant) and from the compat event-resolver perf entry (`perf.md`) — here the consequence is a semantic mismatch against the class `emit()` convention causing silent callback loss. The interop guide's "Limitations" never documents event/callback naming. Fix: canonicalize camelCase to the same kebab form the class API emits (insert `-` before each uppercase, then lowercase) so `onValueChanged` and `on-value-changed` both map to `value-changed`. (Same ~10-line block as the non-function `on*` drop below, but a distinct root and fix.)

## Tags→Class bridge silently drops any non-function attribute whose name matches `/^on[-A-Z]/`

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js` › `TagsCompat` | 2026-07-19 | impact:med | effort:low

A non-event attribute that merely starts with `on`+uppercase/`-` never reaches a Class-API child's `input` when the child is rendered by a Tags-API parent. `runtime-html.js:190-200` (and `runtime-dom.js:194-202`) filter every input key with `/^on[-A-Z]/.test(key)`; the inner `if (typeof value === "function")` (:191) routes function handlers to `customEvents`, but has no `else`, so a matching non-function value is neither routed to `customEvents` nor added to `input` — it is silently discarded. So `<class-child onLabel="hello" .../>` where the child reads `input.onLabel` gets `undefined`, while a sibling `otherProp="keep"` passes through fine. The regex is over-broad: it intercepts anything of shape `on[A-Z-]` regardless of value type, stripping props like `onLabel`, `onValue`, or a camelCase callback the child consumes via `this.input.onSelect`. The same attribute behaves correctly under a Class-API parent. Fix: add an `else` that passes non-function `on*` values through to `input`, or narrow the interception to function values only. Distinct sibling of the camelCase event-name bug above (same code block, different symptom and fix); not covered by any existing interop entry.

## Surface a "cannot resolve tag" diagnostic in mtc for unresolved custom tags instead of typing them as untyped dynamic tags

`packages/compiler/src/babel-utils/tags.js` › `resolveTagImport` | 2026-07-19 | impact:high | effort:med

A custom tag that fails to resolve (a component referenced by kebab tag name with no `import`, or a typo'd tag name) is a hard build error but produces ZERO diagnostics under `mtc` — the type-check tool agents are told to run. Reproduced in a real @marko/run scaffold: Marko 6 auto-discovers only `tags/` dirs (`runtime-tags` sets `tagDiscoveryDirs = ["tags"]` at `packages/runtime-tags/src/translator/index.ts:40`), so `src/components/*.marko` is NOT auto-registered — `<user-card name="X" age="alsoWrong" bogus=true/>` (no import) and the typo `<char-cont max="wrong" nope=1/>` both pass `mtc` with exit 0, while `npm run compile -o html` / `marko-run build` throw `Unable to find entry point for custom tag <user-card>` (`resolveTagImport` at `tags.js:353`; `tagNotFoundError` at `packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts:411`). The identical wrong attr on a RESOLVED tag correctly errors TS2322 (verified against `<char-count max="notanumber">`), proving tag resolution — not the attribute — is the gate: language-tools lowers an unresolvable tag to `renderDynamicTag(...)` whose input is `Record<string, unknown>`, so every attribute and callback param goes unchecked. This is the worst shape for an agent whose deterministic verify loop is `mtc`: it creates a component, references it by tag (natural for anyone used to auto-registering `components/` dirs), sees a clean type-check, and ships wrong props or a misspelled tag; the build then fails with an "entry point" error that looks unrelated to the type loop. Direction: have @marko/language-tools emit a distinct "cannot resolve tag `<x>`" diagnostic mirroring the compiler instead of degrading to an untyped dynamic tag. The fix lives in off-disk `marko-js/language-tools`; the on-disk authority is `tags.js:353` / `custom-tag.ts:411`, matching the existing bugs.md precedent of filing language-tools type-check gaps under marko. Distinct from the run dx.md route-types entries (missing `Run` global / stale `routes.d.ts`), which concern generated route types, not custom-tag resolution.

## Fix the for-by-two TypeScript example — `by` is the loop key, not the step increment

`docs/reference/typescript.md` › `Typing Tag Parameters` | 2026-07-19 | impact:med | effort:low

The one docs example meant to teach typed tag parameters ships a pattern that fails its own type-checker and mis-renders. `docs/reference/typescript.md:175` (file `for-by-two.marko`) is `<for|i| from=0 to=input.to by=2>`, but on a ranged `<for from to>` the increment attribute is `step`; `by` is the hydration KEY, typed `(index: number) => string` (`node_modules/@marko/language-tools/marko.internal.d.ts:243`). Running `mtc` on `<for|i| from=0 to=10 by=2>` errors TS2322 "Type 'number' is not assignable to type '(index: number) => string'", whereas `step=2` type-checks clean (both verified). It also mis-renders: `<for from=0 to=6 by=2>` compiles to `_forTo(6, 0, 1, …)` (verified compiled output — `by` is dropped, `step` defaults to 1 in `getBaseArgsInForTag` at `packages/runtime-tags/src/translator/core/for.ts:611`), so it iterates 0,1,2,3,4,5,6, while `step=2` yields 0,2,4,6. An agent porting a stepped loop copies this official typed example verbatim, hits a TS error it cannot resolve without already knowing `by != step`, and if it casts past the error gets silently wrong output. Fix: change `by=2` to `step=2` in the example. Distinct from the existing bugs.md `<for by>` entry (widen the numeric-KEY return type for `by=(item)=>item.id`), which is about the key return type, not the by-vs-step confusion in this docs example.

## Reset the reactive scheduler's `isScheduled` flag on failure so a missing `MessageChannel` cannot permanently wedge updates

`packages/runtime-tags/src/dom/schedule.ts` › `triggerMacroTask` | 2026-07-19 | impact:med | effort:low

In a DOM environment lacking a usable `MessageChannel`, the reactive scheduler applies the FIRST update and then silently drops every later one. `schedule()` sets `isScheduled = 1` (`dom/schedule.ts:17`), and the flag is reset to `0` in exactly one place — the `channel.port1.onmessage` handler (`:36`) — reachable only if `new MessageChannel()` (`:34`) succeeds. When `MessageChannel` is absent, `:34` throws inside the `requestAnimationFrame` callback `triggerMacroTask`, the handler is never installed, `isScheduled` stays `1` forever, and every subsequent `schedule()` short-circuits at `:7`. The first update still lands because `flushAndWaitFrame` runs `run()` synchronously (`:28`), and `run()`→`runRenders()` (`dom/queue.ts:83-95,131-167`) applies the queued renders without touching the channel — the channel is only the next-frame reset. That asymmetry is the trap for agentic workflows: a one-click smoke test goes green (false confidence) while a two-step interaction test fails with no test-visible error — the throw surfaces only as a jsdom window `error` event — so an agent cannot tell whether its component logic or its harness is at fault. It bites hand-rolled jsdom and jest+jsdom harnesses (which historically ship no `MessageChannel`, the same gap React 18's scheduler hit), the exact throwaway setups agents reach for to self-verify. Reset the flag in a `finally` (or degrade to `setTimeout`/`queueMicrotask` for the macrotask boundary) plus add a `MARKO_DEBUG` assert naming the missing `MessageChannel`, turning a silent misattributed wedge into a deterministic, self-explaining failure fixable from the error string alone.

## An empty-bodied `<html-comment>` resumes as a text node instead of the comment

`packages/runtime-tags/src/dom/resume.ts` › `init` | 2026-07-14 | impact:med | effort:med

For an `<html-comment>${c}</html-comment>` whose body serializes empty, SSR
writes `<!---->` immediately before the resume marker, and the node-claim
heuristic in the `ResumeSymbol.Node` visit (`prev.nodeType < 8 || prev.data`)
refuses the empty comment and binds a fresh Text instead; it exists to skip
empty `<!>` separators and cannot tell an intentional empty comment apart.
After hydration, updating the body renders visible text where a pure client
render produces `<!--...-->`. Fix direction: a dedicated resume symbol for
html-comment markers that claims the preceding sibling unconditionally.
Verify: SSR + resume an empty-bodied `<html-comment>`, set its body, and
compare the DOM with a client-side render.

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

## Key `serializeReasonCache` on the `properties` flavor; it currently returns cross-flavor reasons

`packages/runtime-tags/src/translator/util/references.ts` › `getAllSerializeReasonsForBinding` | 2026-07-20 | impact:med | effort:med

`serializeReasonCache` is keyed only on the `Binding` (references.ts:2560/2600), but the value cached there depends on the `properties` argument: the upstream-alias contribution is merged only when `properties !== true` (2568) and same-section aliases are recursed with that same `properties` (2591). Two distinct flavors reach the same binding within one compilation — `getAllSerializeReasonsForExtra` always queries with `true` (2543) while `getSectionRegisterReasons` queries with `downstreamBinding.properties` (sections.ts:332-334), which is always a non-`true` `"content"`-suffixed list (set-tag-sections-downstream.ts) — and a cache hit skips the whole compute block, so whichever flavor runs first poisons the other. For a binding with an `upstreamAlias` (or properties-dependent aliases), a `true`-first order drops the upstream-alias reason from a later properties query (potential under-serialization / resume gap), while a non-`true`-first order over-includes it in a later `true` query (bytes that are not needed). Fix by adding the flavor to the cache key (e.g. `[binding, properties === true]`) or by memoizing only the properties-independent portion (base reason + reads) and recomputing the upstream-alias/alias terms per call. Re-verify: add the flavor bit to the key and run `npm run test:parallel`; any serialize/resume snapshot diff proves the memo was returning a value computed for a different `properties`.

## Advance the positional-arg index unconditionally in the tag-params analyze loop so a pruned earlier param does not desync later args

`packages/runtime-tags/src/translator/util/known-tag.ts` › `analyzeParams` | 2026-07-20 | impact:med | effort:low

The positional-argument loop in the params analyze path advances `i` only inside the used-arg branch (`known[i++]`, known-tag.ts:452) and `continue`s past it when `propTree.props[i]` is falsy (445), while the DOM counterpart `writeParamsToSignals` increments `i` unconditionally every iteration (878). Params are keyed by positional index (`trackParamsReferences` stores each as `i + ""`, references.ts:424) and a pruned/unused param becomes an `undefined` hole in `props.props` (binding-prop-tree.ts:41, `getBindingPropTree(alias)!`). So when a non-final positional param is unused, analyze's `i` freezes on the hole: every following argument re-reads the same undefined slot and its reference nodes are dropped, yet DOM still emits a per-param signal call for that arg — a client-only crash plus a missing reactive update while SSR renders fine. Verified by compiling `<let/x=1/><define/MyTag|a,b,c|><div>${b}|${c}</div></define><MyTag(1,"Hello",x)/>` with `npm run compile -- -o dom`: the DOM `$setup` emits `$MyTag_content__c($scope["#childScope/0"], x)` with a bare, undeclared `x` (ReferenceError at init) and never re-runs `c` when `x` changes; making param `a` used makes both symptoms disappear. Fix: move the `i++` out of the branch to mirror `writeParamsToSignals`. Only locally-invoked `<define>` bodies reach this multi-arg path (custom tags are limited to one arg by `assertAttributesOrSingleArg`).

## Drop a failed `<try>` body's already-written scopes from the resume payload on catch

`packages/runtime-tags/src/html/writer.ts` › `tryCatch` | 2026-07-20 | impact:med | effort:med

When a `<try>` body throws (sync or async) and `@catch` replaces its DOM, every scope the body wrote before failing still ships in the SSR resume payload as a dead fill. `tryCatch`/`tryPlaceholder` render the body via `chunk.fork(...)`, and `fork` shares the parent `serializeState` (writer.ts:1147), so each scope `writeScope` records lands in `$chunk.serializeState.writeScopes` (625/636) — the parent's map. The catch/abort path clears the discarded chunks' `html`/`scripts`/`effects`/`lastEffect` (the sync branch at 898-902 clears nothing; the async cleanup at 931-938) but never removes those scope entries, so `flushSerializer` (1553/1578) serializes them. This is wasted payload proportional to the body's rendered-before-failure scope tree (a `<try>` guarding a failing subtree is a normal path, not exceptional), and any leaked scope that serialized a registry reference also retains that client implementation. `writeWaitReady` already shows the fix: render the try body into its own isolated `serializeState` (`writeScopes: {}`, 736-742) and merge into the parent only on success, so the abort path can drop the body's scopes wholesale. Re-verify: SSR-render (dev) `<try><Child/>${(()=>{throw new Error("BOOM")})()}<@catch|e|>caught ${e.message}</@catch></try>` where `Child` is `<let/n=100/><button>c${n}</button>`; the payload's scope array contains `{n:100}` for a scope id that has no resume marker in the emitted DOM.

## Align the debug DOM accessor for camelCase SVG/MathML elements so dev-mode render/hydrate does not crash

`packages/runtime-tags/src/dom/walker.ts` › `getDebugKey` | 2026-07-20 | impact:med | effort:low

In MARKO_DEBUG builds `getDebugKey` stores every element under `#${node.tagName.toLowerCase()}/${index}` (walker.ts:139), but the compiler keys the same node by its source-case tag name: the DOM binding is `"#" + getCanonicalTagName(tag)` (native-tag.ts:214), `getCanonicalTagName`/`getTagName` preserve source case, and the debug accessor is emitted verbatim as `` `${name}/${id}` `` (references.ts:1803/1823). For HTML this agrees (an uppercase `tagName` lowercases back to the lowercase source), but foreign-namespace elements are case-sensitive: an SVG `<linearGradient>` has `tagName === "linearGradient"`, so the walker writes `#lineargradient/0` while generated code reads `$scope["#linearGradient/0"]` — undefined, and the subsequent `_attr(undefined, ...)`/`_on(undefined, ...)` throws. This breaks dev-mode CSR mount and resume for any camelCase SVG/MathML element (linearGradient, radialGradient, clipPath, feGaussianBlur, textPath, …) that carries a var, dynamic attribute, or event handler; optimize builds use numeric accessors and are unaffected, which is likely why no fixture catches it. Make the two debug-key producers agree — e.g. lowercase the compiler's debug binding name too — since prod is unaffected and debug keys only need to match on both sides. Re-verify: compile `<svg><linearGradient id=n/></svg>` with a `<let/n>` binding via `-o dom -d` and confirm the generated `_attr($scope["#linearGradient/0"], …)` cannot resolve the node the walker stored under `#lineargradient/0`.

## Route RegExp source through the payload's script-safe escaping; NUL and lone surrogates are emitted raw

`packages/runtime-tags/src/html/serializer.ts` › `writeRegExp` | 2026-07-20 | impact:low | effort:low

`writeRegExp` emits `/` + source + `/` + flags and only rewrites `<` (via `unsafeRegExpSourceReg`/`replaceUnsafeRegExpSourceChar`, serializer.ts:948-950); every other character of `RegExp.source` goes into the `<script>` payload verbatim. `RegExp.source` escapes only line terminators and `/`, so a NUL or a lone surrogate in the pattern survives raw (`new RegExp("a\0b").source` keeps charCode 0; a lone 0xD800 stays 0xD800). The payload is embedded directly into a `<script>` with no further escaping, so a raw NUL is folded to U+FFFD by the HTML script-data tokenizer and a lone surrogate is unencodable in UTF-8 — both silently corrupt the resumed regex (an SSR/CSR mismatch). The file's own `quote`/`unsafeQuoteReg` already escapes `\0` and `\ud800-\udfff` for strings; run regex source through the same escaping set rather than only `<`. Re-verify: `assertStringify(new RegExp("a\ud800b"), …)` in the serializer harness and observe a raw lone surrogate between the slashes, unlike the string path which emits `\ud800`.

## Read the Error/TypedArray constructor name from the matched prototype, not the own-shadowable `val.constructor`

`packages/runtime-tags/src/html/serializer.ts` › `writeError` | 2026-07-20 | impact:low | effort:low

`writeUnknownObject` deliberately dispatches on `proto?.constructor` and its "own constructor property" tests establish that an own `constructor` property must not influence output, but `writeError` builds `"new " + val.constructor.name + "("` (serializer.ts:1208) and `writeTypedArray` builds `"new " + val.constructor.name` (1173, 1184) — reading the own-shadowable `val.constructor` and emitting `.name` unquoted. An Error or TypedArray carrying an own `constructor = {name: …}` therefore injects an arbitrary unquoted token into the payload (`val.constructor.name` returns the own name, not the prototype's), producing broken or injectable JS. The natural-data risk is low (JSON.parse yields plain objects, not Error/TypedArray instances), so this is primarily a hardening/consistency gap with the rest of the file; fix by using the constructor already matched in the switch or reading `Object.getPrototypeOf(val).constructor.name`. Re-verify: `assertStringify(Object.defineProperty(new TypeError("x"), "constructor", {value:{name:"INJ"}}), …)` emits `new INJ(...)` instead of `new TypeError(...)`.

## Dedup a Request/Response's headers against an already-serialized Headers instead of re-emitting inline and clobbering its ref

`packages/runtime-tags/src/html/serializer.ts` › `writeRequest` | 2026-07-20 | impact:low | effort:med

`writeRequest` (and `writeResponse`) always serialize `val.headers` inline via `stringEntriesToHeadersInit` and then unconditionally `state.refs.set(val.headers, new Reference(ref, "headers", …))` (serializer.ts:1318-1319, 1380-1381). When the same Headers object was already serialized standalone (it already has a Reference), this both fails to dedup (the headers data is emitted twice) and overwrites the prior ref, so referential identity is lost. `{a: req.headers, b: req}` serializes `a` as its own `new Headers({…})` and then re-emits the headers inline inside the Request, so on resume `a !== b.headers` even though originally `a === req.headers`; the reverse order `{b: req, a: req.headers}` works and is the only order the existing `headers` test covers. Guard the `state.refs.set` (set only when absent) and emit `headers:<deduped ref>` when `state.refs.has(val.headers)`. Re-verify: `assertStringify({a: req.headers, b: req}, …)` with `const req = new Request("https://x/", {headers:{a:"1"}, method:"POST"})` emits a standalone `new Headers({a:"1"})` plus a second inline `{a:"1"}`, and the deserialized `a !== b.headers`.

## Route a failed lazy input-signal chunk to the `@catch` boundary instead of swallowing it and hanging the branch

`packages/runtime-tags/src/dom/load.ts` › `insertLoaded` | 2026-07-20 | impact:low | effort:low

`insertLoaded` collects the pending input-signal chunk promises from `branch[AccessorProp.Load]` and gates the branch's `Setup`, value application, `insert()` (which runs `insertBranchBefore`/`marker.remove()`/`awaitCounter.c()`, load.ts:112-116), all behind `if (!--remaining)` (load.ts:126), decrementing `remaining` only on fulfillment; the per-promise rejection arm is `() => 0` (load.ts:137). The compiled output of a lazy tag with inputs proves the input chunk is a separate dynamic import from the setup chunk (`_load_signal(() => import("./v:child.marko.input_value.mjs"))` vs `_load_setup(..., () => import("./v:child.marko.setup.mjs"))`, e.g. `lazy-tag-attrs-update` `dom.bundle.debug.js:13-14`), so the input chunk can reject on its own (transient network failure, a dependency only it pulls in) after the setup chunk already resolved and `insertLoaded` ran. When it does, `remaining` never reaches 0: the branch is cloned into its scope but never inserted, `awaitCounter.c()` never runs so an ancestor `<try>@placeholder` stays shown forever, `renderCatch` is never queued so `@catch` never fires, and even the input values whose chunks loaded are dropped — the exact partial-failure the `<try>` boundary exists to handle. This is asymmetric with the setup/template chunk path, which routes failures through `loadFailed` → `queueAsyncRender(scope, renderCatch, error)` (load.ts:55/98/146-154); the existing `lazy-tag-load-error` fixture can't catch it because its child-module top-level `throw` (`dom.bundle.debug.js:5`) fails BOTH chunks, letting the handled setup failure drive the catch first. Fix: replace the `() => 0` at load.ts:137 with `loadFailed(branch, awaitCounter)` (both are in scope on the value-collecting path) so a failed input chunk drives the same boundary, ideally guarding so multiple rejections don't queue `renderCatch` more than once; the related collect path in `_load_signal` (load.ts:171-174) similarly leaves the input `pending` with no handler until `insertLoaded` runs, so a setup-failure-before-insert turns an input-chunk rejection into an unhandled rejection — same root. Distinct from the document-side `.load.mjs` load-entry that floats its own rejection (`program/index.ts`): this is the client render path, where the input-signal chunk, unlike `_load_setup`/`_load_template`, never reaches a boundary. Re-verify: compile `lazy-tag-attrs-update`'s `<Child value=value/>` under a `<try>` with `@placeholder`/`@catch`, then resolve the `v:child.marko.setup.mjs` import but reject the `v:child.marko.input_value.mjs` import, and observe the child never appears, the placeholder never dismisses, and `@catch` never renders.

## Give writeTriggerScript's shared load-trigger loader a block body so it always returns undefined and multi-trigger missing-selector fallbacks stop throwing

`packages/runtime-tags/src/html/assets.ts` › `writeTriggerScript` | 2026-07-20 | impact:low | effort:low

`writeTriggerScript` (assets.ts:165-169) emits a shared loader `l=$=>d||p.after(new Range().createContextualFragment(d=h))` (166) and joins multiple triggers into one `{expr;expr}` block that all share it. `l` returns `undefined` only on its first call — while `d` is falsy it evaluates `p.after(...)` (which returns undefined) and sets `d=h` — but every later call short-circuits `d||…` and returns the truthy html string `h`. The `visible` and `on-*` guards assume the missing-selector fallback is falsy: `(e=>e&&new IntersectionObserver(…).observe(e))(document.querySelector(sel)||l())` (154-156) and `(e=>e?.addEventListener(type,l,{once:1}))(document.querySelector(sel)||l())` (162). The compiler fully supports 2+ `|`-separated triggers per asset (fixture `lazy-tag-multi-trigger-attrs-update` uses `load: "visible body|on-mouseover body"`), so when two of them take the fallback — e.g. `load: "visible .a | on-click .b"` with neither `.a` nor `.b` present — the first `l()` loads the asset and skips its guard, but the second returns `h`, running `observe(h)` / `h?.addEventListener(...)` and throwing a `TypeError` that aborts the rest of the block (the asset still loads via the first fallback, so the net effect is a console error plus skipped redundant triggers). Give `l` a block body — `l=$=>{d||p.after(new Range().createContextualFragment(d=h))}` — so every fallback path yields undefined and the guards skip consistently. Re-verify: for `load: "visible .a | on-click .b"` with both selectors absent, call the emitted `l` twice — the first returns undefined (fragment inserted once), the second returns the truthy `h`, so the `on-click` guard evaluates `h?.addEventListener(...)` and throws `TypeError`; the block-body form returns undefined both times and the guards skip.

## Preserve tag-name case in `_escape_style` by capturing the slice, matching `_escape_script`

`packages/runtime-tags/src/html/content.ts` › `_escape_style` | 2026-07-20 | impact:low | effort:low

`escapeStyleStr` (`html/content.ts:46-47`) rewrites any `</style` match to the hard-coded lowercase literal `\3C/style`, so mixed-case input like `</STYLE>` becomes `\3C/style>`; once the browser decodes the `\3C` CSS escape to `<`, the emitted string value is the lowercased `</style>` rather than the author's `</STYLE>`, changing rendered output for a `content:` string, a custom-property value, or a `url(...)` inside `<style>` text (the escaper the translator selects for style raw text at native-tag.ts:1458). The sibling `_escape_script` deliberately preserves case by capturing the tag in a group and substituting `\x3C$1` — its test is even titled "preserving case" (html-content.test.ts:118-124) — and there is no functional reason style should differ, since both escapes only need to break up the raw-text end-tag sequence, which `\3C…` already does regardless of case. The `html-style-injection` fixture already captures the defect, rendering `content: '\3C/style>'` for the input `</STYLE>` (writes.html). Fix by capturing the slice, `str.replace(/<(\/style)/gi, "\\3C$1")`, which keeps the security guarantee (the replacement still starts with a backslash, so the HTML tokenizer never sees `</style`; verified the fixed output contains no `</style`) while preserving case, then update the html-content.test.ts:95-100 assertion and regenerate the html-style-injection snapshots. Re-verify: `helpers._escape_style("foo </STYLE> bar")` returns `"foo \\3C/style> bar"` (lowercased) while `helpers._escape_script("foo </SCRIPT> bar")` returns `"foo \\x3C/SCRIPT> bar"` (case preserved).

## Route the dynamic-tag fallback body through HTML `_dynamic_tag`'s `content` argument in the positional-args branch so a null tag renders the body like DOM does

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `translate.exit` | 2026-07-20 | impact:med | effort:med

The `hasTagArgs` branch of the HTML dynamic-tag codegen hardcodes `_dynamic_tag`'s position-5 `content` parameter to `t.numericLiteral(0)` (dynamic-tag.ts:427) and folds the fallback body into the args array as a trailing `{content}` property (398-401). At render time the HTML runtime's null-renderer branch is `else if (content) return content()` (html/dynamic-tag.ts:172-173), which sees `content === 0` and renders nothing, while the DOM signal unconditionally passes the body section as `getContent` (dynamic-tag.ts:522) and renders `normalizedRenderer || getContent(scope)` (dom/control-flow.ts:542). So `<${Tag}(1, 2)>Fallback Body</>` with `Tag` null emits nothing on the server but renders `Fallback Body` on the client — a hydration mismatch (the same hardcoded `0` also drops the body on the string-renderer-with-args path, which DOM renders as element content). The non-args branch already handles this by passing the content as the separate `content` param (406); mirror that for `hasTagArgs` by routing the content thunk through position-5 while keeping `{content}` in the args array for the truthy-renderer path, exactly how the DOM side passes it both ways. Re-verify: add a fixture `import Tag from './tags/custom-tag.marko'` + `<let/x=null/><${x}(1, 2)>Fallback Body</><button onClick(){ x = x ? null : Tag }/>` with `steps: [{}]` and run `UPDATE_EXPECTATIONS=1 npx mocha --grep 'runtime-tags/translator <fixture> '` — the harness reports a `render.debug.md` snapshot conflict because ssr writes `<button />` while csr writes `Fallback Body\n<button />`.

## A `<textarea>`'s initial value is coerced as text on SSR (`_escape`) but as an attribute on CSR (`_attr_input_value_default`/`normalizeAttrValue`), so `true`/`NaN`/`0n` produce an SSR/CSR hydration mismatch

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_input_value_default` | 2026-07-21 | impact:low | effort:low

The HTML translator renders a textarea's initial value via `_escape(value)` (text coercion, html/attrs.ts:123), while the DOM translator routes it through `_attr_textarea_value_default` — the dom.ts:43 alias of `_attr_input_value_default` — which sets `el.defaultValue = normalizeAttrValue(value) || ""` (attribute coercion, controllable.ts:185). For `true` (SSR "true" vs CSR ""), `NaN` (SSR "" vs CSR "NaN"), and `0n` (SSR "" vs CSR "0") the two disagree, so a client-rendered or client-navigated page shows a different textarea value than SSR of the same template and data (e.g. `<textarea value=computeTotal()>` where the arithmetic yields NaN renders empty on the server but "NaN" on the client). `<input>` is unaffected because both its HTML and DOM paths use attribute coercion; only textarea mixes text (HTML) with attribute (DOM) because it aliases the input helper for bundle size. This is distinct from the recorded textarea leading-newline preAnalyze entry (a whitespace fix that never touches value coercion) and from the text-vs-attribute docs note (which frames cross-position coercion as intentional and states text position is consistent across SSR/CSR — the opposite of this same-element mismatch). Fix: give textarea a dedicated DOM default that normalizes with `_to_text` (text) rather than aliasing the input attribute-value helper, so CSR matches `_escape`. Re-verify: compile `<textarea value=v/>` with `-o html` (yields `_escape(v)`) and `-o dom` (yields `_attr_textarea_value_default` = `_attr_input_value_default` -> `normalizeAttrValue(v)||""`), then evaluate both over {true, NaN, 0n} to get "true"/""/"" on SSR versus ""/"NaN"/"0" on CSR.

## A value-controlled `<select>` whose runtime `value` is `undefined` selects a different `<option>` under SSR than under CSR whenever a `value=""` option is present: HTML's `selectedValue !== undefined` guard force-skips all selection (browser then auto-picks the first option) while DOM normalizes `undefined` to `""` and selects the empty-value option.

`packages/runtime-tags/src/html/attrs.ts` › `_attr_option_value` | 2026-07-21 | impact:med | effort:med

HTML `_attr_option_value` (attrs.ts:42-58) marks an option `selected` only when `getContext(kSelectedValue) !== undefined`, and `getContext` (writer.ts:59-61) returns `undefined` for an explicitly-`undefined` controlled select value — indistinguishable from "no controlled select" — so no option is marked and the browser auto-selects the first, whereas DOM `_attr_select_value_default` (controllable.ts:269-299) computes `normalizeStrProp(undefined) === ""` and sets `defaultSelected` on any `value=""` option. I reproduced this with a throwaway `equivalent:false` fixture `<select value=input.sel>` + options `a`/`b`/`""` and input `{}`: `render-ssr.debug.md` selects `A` (and `writes.debug.html` emits no `selected` attribute) while `render-csr.debug.md` selects the empty `None` option. A `value=null` control does NOT diverge — SSR emits `<option value selected>None` and both paths select `None` — isolating the cause to the `!== undefined` guard rather than value stringification. This is a genuine SSR-vs-DOM correctness divergence distinct from the recorded multiple-select MutationObserver (bugs.md:61) and radio-reset (bugs.md:157) entries; a fix must pick one canonical meaning for an `undefined`/void controlled select value and apply it on both runtimes (e.g. make HTML distinguish "no context" from "context holds undefined", or make DOM treat an undefined select value as force-no-selection). Re-verify: create fixtures `<select value=input.sel>` with an `<option value="">` and `equivalent:false`, run `npm run test:update -- --grep "runtime-tags/translator <name> "`, then diff `render-ssr.debug.md` against `render-csr.debug.md` for input `{}` (diverges: A vs None) versus input `{sel:null}` (identical: None).

## A locally-invoked `<define>` with a positional rest param silently drops every rest argument on the client (CSR) while SSR renders them, producing a hydration divergence.

`packages/runtime-tags/src/translator/util/known-tag.ts` › `writeParamsToSignals` | 2026-07-21 | impact:med | effort:low

A `<define/MyTag|a, ...rest|>` invoked locally with extra positional args (`<MyTag(x, "two", "three")/>`) renders correctly under SSR but loses all rest arguments on the client. In `writeParamsToSignals` (known-tag.ts:808-811) the whole-params array branch is taken only when `!propTree.props` or an arg is a `SpreadElement`; a positional rest yields a propTree with both `.props` (the named `a`) and `.rest`, so a plain call falls into the per-arg loop (850-879), which wires only args with a matching `propTree.props[i]` and never consults `propTree.rest` — the trailing args that belong to the rest are skipped, and `analyzeParams` (425/445) `dropNodes` them identically. The HTML path passes every arg positionally (`MyTag.content(x, "two", "three")`, dynamic-tag.ts getArgs), so SSR feeds `(a, ...rest)` correctly and the `$MyTag_content__$params`/`$MyTag_content__rest` handlers are emitted but left dead on the client. This is distinct from the recorded unused-middle-param `i++` desync (bugs.md:264): the rest positions have no `props[i]` regardless of `i` and `writeParamsToSignals` already increments unconditionally, so that fix does nothing here; the fix is to add `|| propTree.rest` to the branch condition at 808 and 425 so a positional rest routes to the already-correct array-passing/merged path, then audit the define snapshots. Re-verify: compile `<let/x=1/><define/MyTag|a,...rest|><div>${a}|${JSON.stringify(rest)}</div></define><MyTag(x,"two","three")/><button onClick(){x++}>${x}</button>` and render it — SSR shows `<div>1|["two","three"]</div>` while CSR shows `<div>1|</div>`, and the DOM output calls only `$MyTag_content__a` with `$scope.x`, leaving `$MyTag_content__$params` and `$MyTag_content__rest` uncalled.

## Reactive object-`style` values are string-concatenated raw on SSR (`stringifyStyleObject`) but validated via `el.style.setProperty` on CSR, so values containing `;`/`!important`/otherwise-invalid CSS render server-only, causing an SSR/CSR divergence and a server-only CSS-injection surface for the ubiquitous `<div style={ prop: value }/>` pattern.

`packages/runtime-tags/src/common/helpers.ts` › `stringifyStyleObject` | 2026-07-21 | impact:med | effort:med

For an object-`style` attribute with a single dynamic property (`<div style={ color: input.color }/>`), the translator emits divergent code per runtime (native-tag.ts:799-829): CSR gets `_attr_style_item($div, "color", value)` → `el.style.setProperty("color", _to_text(value))` (dom/dom.ts:118-124), which silently rejects any value setProperty deems invalid (containing `;`, `!important`, or non-parseable), while SSR gets `_attr_style({ color: value })` → `stringifyStyleObject` (common/helpers.ts:77) which concatenates `name + ":" + value` with only HTML-attribute quoting from `attrAssignment`, no CSS-value escaping. So the same template renders differently on server vs client, and a dynamic value drawn from user data becomes a server-only CSS-injection vector: `input.color = "red;background:url(//evil/?leak)"` breaks out of the `color:` declaration on SSR but is dropped by setProperty on CSR, so it never surfaces in client-only testing. Fix by escaping the value in `stringifyStyleObject` with the `escapeStyleValue` helper two functions below (common/helpers.ts:80), which hex-escapes `;{}<>` so SSR drops the value as one invalid declaration matching setProperty's rejection; `_escape_style_value` (html/content.ts:54) already applies `escapeStyleValue` elsewhere, making the object-attribute path the outlier. Weigh the hot-path size note at helpers.ts:75-76 and regenerate style snapshots. Re-verify: `require` the real helpers under jsdom and compare — `_attr_style({color:"red;background:blue"})` returns `" style=color:red;background:blue"` (two declarations) while `_attr_style_item(el,"color","red;background:blue")` leaves `el.style.cssText === ""`.

## writeMap/writeSet silently drop or corrupt any Map/Set member that directly references an ancestor object, because the member's fill is deferred to post-construction extras that never reach the already-built collection

`packages/runtime-tags/src/html/serializer.ts` › `writeMap` | 2026-07-21 | impact:high | effort:med

In `packages/runtime-tags/src/html/serializer.ts`, `writeMap` (l.989) and `writeSet` (l.1068) eagerly patch a member into the constructor IIFE (`a[i]=m` / `i[i]=s`, before `forEach`/`reduce`) ONLY when the member is `=== val`, the container itself (l.1003-1010/1037-1044/1079-1082). A member that is `===` an _ancestor_ higher in the write tree is not caught, so it takes writeReferenceOr's circular path (l.624-629): it becomes a hole in the backing array and its fill is queued on `state.assigned`, which `writeAssigned` (l.470-483) emits as `_.a[i]=<id>` extras AFTER the payload body. Because `new Set(items)` / `new Map(entries)` / the `reduce` copy members at construction time, that post-hoc backing-array patch never reaches the built collection, so the member is silently lost (Set: `size` short by one) or corrupted (Map: entry present but its ancestor key or value resolves to `undefined`) with no throw and no MARKO_DEBUG warning. This affects natural resume shapes where a serialized Set/Map holds an object that is itself an ancestor on the walk — undirected graph adjacency (the A↔B back-edge is dropped), `set.add(ownerObject)` back-references, or ancestor Map keys/values — while the wrapper case (`{nested: container}`) already works because the fresh member is added by reference and only its property is patched later; fix by forcing the eager-IIFE form for these paths and routing an ancestor member's fill through the pre-`forEach`/`reduce` body (as `=== val` already does) instead of the deferred `state.assigned` extras. Re-verify with the serializer harness: round-trip `parent` where `const parent={name:'p'}; const s=new Set(); s.add(parent); parent.set=s;` and assert `rt.set.size===1 && rt.set.has(rt)` — today it yields payload `...set:new Set(_.a=[])}}),_.a[0]=_.b,0)` with `size===0`; the undirected-graph and ancestor Map key/value variants fail the same way.

## Read RegExp source/flags via the prototype getters in writeRegExp so an own-shadowed `source` cannot break out of the emitted `/.../` literal

`packages/runtime-tags/src/html/serializer.ts` › `writeRegExp` | 2026-07-21 | impact:low | effort:low

`writeRegExp` (packages/runtime-tags/src/html/serializer.ts:951-962) reads `const { source } = val` and `val.flags` directly off the instance and splices them into a raw `"/"+source+"/"+flags` literal. Both are `RegExp.prototype` accessor getters, so an own data property (`Object.defineProperty(re,'source',{value})`) shadows them and returns arbitrary un-escaped text — including `/`, which closes the literal and injects expression-position code into the resume `<script>` (verified: `re.source` returns the own value while the prototype getter still returns the real source, and dispatch still reaches `writeRegExp` because the switch at serializer.ts:839 keys on `Object.getPrototypeOf(val).constructor`, which own props do not affect). Realism is low — a shadowed-source RegExp is not produced by normal data flow or JSON.parse — matching the recorded serializer siblings. This is distinct from the recorded `writeRegExp` NUL/surrogate entry, whose fix (string-escaping the source) does not escape `/` and so leaves this breakout open, and from the `writeError`/`writeTypedArray` `constructor.name` entry (different symbol and property; `writeRegExp` reads no `constructor`). Fix: read `source`/`flags` through the prototype getter (`Reflect.apply(Object.getOwnPropertyDescriptor(RegExp.prototype,'source').get, val, [])`) or reconstruct via a trusted `RegExp` so the engine performs literal-safe escaping, then keep the existing `<`/NUL/surrogate escaping on top. Re-verify: in the serializer harness, define an own `source` of `a/,x:((globalThis.__PWNED=1)),y:/b` on a `/x/` and serialize it — the payload is `_=>[1,{value:/a/,x:((globalThis.__PWNED=1)),y:/b/}]`, and evaluating that payload sets `globalThis.__PWNED`.

## writeAggregateError passes the errors array as the AggregateError constructor's first argument, but `new AggregateError(arr)` copies arr into a fresh own `errors` slot — so a shared errors array loses referential identity on resume and an array with deferred/circular members silently drops those members.

`packages/runtime-tags/src/html/serializer.ts` › `writeAggregateError` | 2026-07-21 | impact:med | effort:med

`writeAggregateError` (packages/runtime-tags/src/html/serializer.ts:1224) emits `new AggregateError(<errors>,message)` by handing `val.errors` to `writeProp` as the constructor argument (l.1230), only falling back to the post-construction `.errors=` deferred form when `writeProp` returns false — which happens exclusively for a self-circular errors array. But `new AggregateError(arr).errors !== arr`: the engine copies arr into a fresh writable own slot (verified), so whenever the errors array instead gets a dedup id or carries a deferred member, the constructor copies the wrong/incomplete array. Reproduced through the serializer harness: (a) `{agg, allErrors: agg.errors}` serializes to `new AggregateError(_.a=[…],"batch failed")` with `allErrors:_.a` and round-trips with `agg.errors !== _.a` (identity lost); (b) `state={agg}; agg.errors=[state]` serializes to `new AggregateError(_.b=[],…)` then `_.b[0]=_.a`, and the fill lands on `_.b` rather than the copied `agg.errors`, so `agg.errors.length` round-trips 0 instead of 1 (silent data loss). The existing "errors array referenced" test only checks deep-subset (misses the identity break) and "circular errors" only exercises the working arr-first `.errors=` form, so neither guards this. Fix: mirror the circular fallback — construct `new AggregateError([],message)` and apply `agg.errors=<arr>` as a deferred assignment whenever the array is given an id (shared) or has deferred members, since `errors` is a writable own data property the existing circular test already relies on. Re-verify with two harness round-trips: serialize `{agg, allErrors: agg.errors}` for `agg=new AggregateError([new Error("a")],"m")` and assert deserialized `allErrors === agg.errors`; and serialize `state` for `const agg=new AggregateError([],"failed"), state={agg}; agg.errors=[state]` and assert deserialized `agg.errors.length === 1` — both fail today.
