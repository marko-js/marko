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

## SSR controlled-form value normalization diverges from DOM for `0n`/`NaN`/`false`, causing a hydration mismatch

`packages/runtime-tags/src/html/attrs.ts` › `normalizeStrAttrValue` | 2026-07-14 | impact:low | effort:low

`normalizeStrAttrValue` computes `(value && value !== true) || value === 0 ? value + "" : ""`, so `0n` (falsy, `0n === 0` is false), `NaN`, and `false` all normalize to `""`. The DOM counterpart used for the identical selection/checked computation, `normalizeStrProp` (`dom/controllable.ts`) → `normalizeAttrValue` (`dom/dom.ts`), returns `value + ""`, giving `"0"`/`"NaN"`/`"false"`. This normalizer feeds `normalizedValueMatches`, which decides `selected` for controlled `<select>`/`<option>` and `checked` for `<input type=checkbox|radio>`, so SSR and CSR can select different options/checkboxes for the same value. Example: a controlled `<select value=0n>` with `<option value=0>` and `<option value="">` — SSR marks the empty option selected, CSR marks the `value=0` option selected, a genuine hydration mismatch. Unlike ordinary text rendering, where the SSR and DOM helpers both deliberately render `0n` as empty, these controlled-value paths use different formulas and disagree. Latent (no fixture feeds these as controlled values today). Fix: make `normalizeStrAttrValue` agree with the DOM normalizer for non-void, non-`true` values.

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

## `analyzeExpressionTagName` const-follow has no cycle guard

`packages/runtime-tags/src/translator/util/tag-name-type.ts` › `analyzeExpressionTagName` | 2026-07-20 | impact:low | effort:low

Following a `<const>` tag's value pushes the bound expression with no visited
set, so mutually-referential `<const/a=b>` / `<const/b=a>` used as a tag name
loop forever during analysis. Guard the follow with a visited-tag set.
Verify: compile a template whose dynamic tag name resolves through two
`<const>` tags that reference each other.
