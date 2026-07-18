# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## `Sorted.isSuperset` arithmetic is wrong but the current behavior is load-bearing

`packages/runtime-tags/src/translator/util/optional.ts:103` | 2026-07-03 | impact:med | effort:med

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

`packages/runtime-tags/src/dom/control-flow.ts:376` | 2026-07-10 | impact:med | effort:med

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

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts:37` | 2026-07-10 | impact:low | effort:med

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

`packages/runtime-tags/src/html/attrs.ts:516` | 2026-07-14 | impact:low | effort:low

`normalizeStrAttrValue` computes `(value && value !== true) || value === 0 ? value + "" : ""`, so `0n` (falsy, `0n === 0` is false), `NaN`, and `false` all normalize to `""`. The DOM counterpart used for the identical selection/checked computation, `normalizeStrProp` (`dom/controllable.ts`) → `normalizeAttrValue` (`dom/dom.ts`), returns `value + ""`, giving `"0"`/`"NaN"`/`"false"`. This normalizer feeds `normalizedValueMatches`, which decides `selected` for controlled `<select>`/`<option>` and `checked` for `<input type=checkbox|radio>`, so SSR and CSR can select different options/checkboxes for the same value. Example: a controlled `<select value=0n>` with `<option value=0>` and `<option value="">` — SSR marks the empty option selected, CSR marks the `value=0` option selected, a genuine hydration mismatch. Unlike ordinary text rendering, where the SSR and DOM helpers both deliberately render `0n` as empty, these controlled-value paths use different formulas and disagree. Latent (no fixture feeds these as controlled values today). Fix: make `normalizeStrAttrValue` agree with the DOM normalizer for non-void, non-`true` values.

## Multiple-select change observer compares controlled value to DOM selection index-by-index

`packages/runtime-tags/src/dom/controllable.ts:352` | 2026-07-14 | impact:low | effort:low

In `_attr_select_value`'s `MutationObserver` (fired when `<option>`s are added/removed), the decision to run `onChange` is `value.length !== el.selectedOptions.length || value.some((v, i) => v != el.selectedOptions[i].value)` (lines 352–353). `value` is `scope[ControlledValue]` in app-supplied order, while `el.selectedOptions` is always document order and selection is applied set-wise (`opt.selected = value.includes(opt.value)` in `setSelectValue`). So a set-equal but reordered controlled array (e.g. `value=["b","a"]` with options rendered `a,b`, both selected) flags a false mismatch on any option add/remove and fires `valueChange(getSelectValue(...))`, silently reordering the app model to document order with no user interaction. Native multi-select never preserves order (any real user change already document-orders the model), so impact is low — the only novel effect is a spurious change side-effect on unrelated option mutations, which stabilizes after one fire. Fix: compare as sets (length plus `every(v => selectedValues.has(v))`).

## Inert Class parent drops client resume for a stateful Tags-API descendant

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts:293` | 2026-07-13 | impact:high | effort:high

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

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js:73` | 2026-07-13 | impact:low | effort:low

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

`packages/runtime-tags/src/html/compat.ts:69` | 2026-07-13 | impact:med | effort:med

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

`packages/runtime-tags/src/html/compat.ts:116` | 2026-07-13 | impact:med | effort:med

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

`packages/runtime-tags/src/dom/control-flow.ts:535` | 2026-07-14 | impact:high | effort:med

The dynamic-tag change checks compare `renderer?.[RendererProp.Id] || renderer` (`:535` for `_dynamic_tag`, `:647` for `_dynamic_tag_content`, plus the DOM `_attr_content`). `RendererProp.Id` is the template/section resume id, identical for every _instance_ of one content section — instances differ only by their `RendererProp.Owner` scope. So switching a dynamic tag between two instances of the same content — two `<attrs.content>` from two instances of one provider tag, or the list-detail `<${selected.content}/>` — is a silent no-op: no teardown or re-render, and closures stay subscribed to the old owner's scope. A control with two _distinct_ tag files behaves correctly, pinning the defect to the id-only comparison. Fix: compare `(id, owner)` — content renderer objects are recreated per render so identity alone over-fires, while the owner scope is stable per instance; the resume handshake must serialize a scope-registered renderer as its registered reference so the first post-resume update stays instance-aware.

## Initialize tag variables for dynamic native tags

`packages/runtime-tags/src/html/dynamic-tag.ts:146` | 2026-07-15 | impact:med | effort:high

The string-renderer branch of HTML `_dynamic_tag` never assigns `result` (the inline TODO calls this out), and the DOM branch creates the element but never sends its getter through the branch's `AccessorProp.TagVariable` callback (`dom/control-flow.ts:547`). Verified by adding `<${input.show && "div"}/el/><script>el().textContent = "set"</script>` to the `dynamic-tag-var` fixture: both CSR and SSR-resume left the `<div>` empty because `el` was never initialized, so its dependent effect never ran. Static native tags instead create a registered `_el(...)` getter; the dynamic-native path needs the equivalent getter tied to the created/resumed branch element in both runtimes.

CSR is a runtime-only fix: push `() => childScope[AccessorProp.StartNode]` through the child scope's `TagVariable` callback right after the native branch is created in `dom/control-flow.ts`. SSR-resume is the hard part and needs the translator, not just the runtime. The native branch scope carries no state, so `_var`'s `writeScopePassive` `#TagVariable` slot is never serialized (the server fill contains only the parent scope); a dynamic _component_ tag var only resumes because its scope serializes anyway, carrying `{ "#TagVariable": _(1, "…/var") }`. So on resume there is no callback to invoke from the `BranchEndNativeTag` marker handler (`dom/resume.ts:232`). Runtime-only escapes don't exist: `_dynamic_tag` is never told a tag var is present (the compiler emits a separate `_var`), and forcing every tag var to serialize its scope actively regresses payload size for all of them. Delivering the getter across the dynamic boundary requires the compiler to serialize/reconstruct an element reference (a client-side `_el(id, accessor)` for the resumed branch element) — hence effort:high spanning compiler + runtime + serialization.

A live `@marko/run` app shows this manifests as a HARD SSR 500 in dev, not just an empty render: reading the ref (`<${shape}/mark .../>` then `<effect>{ mark().getBBox() }` or a `<script>` reader) makes the HTML `_dynamic_tag` return `undefined` for `mark`, which the compiler guards with `_assert_hoist(mark)` — throwing MARKO_DEBUG's misleading `Hoisted values must be functions, received type "undefined"` (`packages/runtime-tags/src/common/errors.ts:109-114`), with a stack pointing at compiled runtime rather than the user's tag-variable construct. Under optimize `_assert_hoist` is compiled out, so SSR instead succeeds but serializes `mark: undefined`, and on the client `_hoist("mark")()` throws "undefined is not a function" when the effect/script runs — a silent dev-vs-prod divergence. Beyond the full high-effort compiler+serialization fix already noted, a low-effort, independently-valuable improvement is a compile-time error/warning when a tag variable is placed on a dynamic tag that can resolve to a native tag name, so users get a source-level diagnostic instead of an internal assert (dev) or broken hydration (prod).

## Make conflicting load triggers for one shared asset deterministic

`packages/runtime-tags/src/html/assets.ts:135` | 2026-07-15 | impact:med | effort:med

`addAsset` deduplicates solely by asset id and silently ignores the triggers on every later registration. The existing `lazy-tag-shared-parent` shape proves separate parent modules can wrap the same child asset independently; if one imports it with `visible` and another with `idle`/an event, whichever parent renders first becomes the only trigger and the other condition can never load the shared module. Detect incompatible registrations before the first flush and combine their triggers, or emit a compile/debug error as the existing TODO suggests; do not let render order choose behavior.

## Restore controlled radio groups (`checkedValue:=`) to their default member on native form reset

`packages/runtime-tags/src/dom/controllable.ts:150` | 2026-07-18 | impact:med | effort:med

A two-way-bound radio group (`<input type=radio checkedValue:=priority>`) is left with no radio checked and its bound state set to `undefined` after a native `<button type=reset>` — the state key literally drops out of `JSON.stringify`. `handleFormReset` (`controllable.ts:504-519`) collects every element whose value differs from its default (evaluated on the pre-reset DOM, so both the user-selected radio and the SSR-default radio qualify) and, in a `requestAnimationFrame` after the browser applies the reset, replays each element's stored `input`-event onChange. When the previously-selected radio's onChange runs (`_attr_input_checkedValue_script`, `controllable.ts:141-174`), that radio is now unchecked, so `newValue = el.checked ? el.value : undefined` (`:148-152`) is `undefined`, and the radio-restore loop keys on the stale pre-reset `oldValue` via `oldValue === radio.value` (`:154-167`) rather than the group's post-reset `defaultChecked` member, re-applying the old selection over the native reset; `checkedValueChange(undefined)` (`:171`) then clobbers the bound state. The default radio's onChange runs next with an emptied `oldValue` and unchecks everything. The path is written for the single `input` event, where the firing radio is the newly-checked one so `el.checked` is reliably true; on `reset` it instead fires for the radio being un-checked and never consults `defaultChecked`. The single-checkbox path (`:169`) and the checkbox-group array path (`:148-149` `updateList`) reset correctly, matching the observed divergence (verified in headless Chromium against a production node build; only the radio group is wrong). Fix: on reset, derive the controlled value from the group's post-reset checked/`defaultChecked` member and do not override the native reset via the `oldValue`-keyed loop, or run one representative handler per radio group that reads the post-reset checked value. Distinct from the two existing controllable entries (SSR `0n`/`NaN`/`false` normalization at `html/attrs.ts:516`; multiple-select `MutationObserver` at `controllable.ts:352`) — neither concerns form reset of radio groups.

## Parse union type annotations (`T | null`) on `<let>`/`<const>` tag variables

`packages/compiler/src/babel-plugin/parser.js:366` | 2026-07-18 | impact:med | effort:low

A typed tag variable with a union annotation fails to compile: `<let/d: string | null = null>` throws `EOF reached while parsing expression` with the caret at the `|`, then the scanner consumes the rest of the file and cascades phantom errors (`Line has extra indentation`), with no hint that a type annotation is involved or that parentheses fix it. Typed tag vars are otherwise supported — `<let/d: string = ...>`, intersections `<let/d: string & Foo = ...>`, generics `<let/d: Array<string> = ...>`, and parenthesized unions `<let/d: (string | null) = ...>` all compile. The compiler's `onTagVar` (`parser.js:366`) only receives the var range after htmljs-parser has scanned it, and the scan errors first: in htmljs-parser (v5.12.1) the tag-var scanners `shouldTerminateHtmlTagVar`/`shouldTerminateConciseTagVar` treat `case 124` (`|`) as an unconditional terminator, whereas `case 60` (`<`) returns `!expression.inType` (which is why generics work) and `&` (char 38) is absent from the switch (which is why intersections work). Since `|` is never made type-aware, a union `|` ends the var early and the trailing `null = null>` no longer parses as a var. `T | null` / `T | undefined` are the most common TS unions, so this blocks an idiomatic pattern with a misleading error. The root token rule lives in the external `htmljs-parser` dependency (make `case 124` return `!expression.inType`, mirroring `case 60`); the on-disk consumer and natural triage home is `@marko/compiler`, which could alternatively pre-scan the type and emit a "wrap the union in parentheses" diagnostic instead of the EOF cascade.

## Recover a `<try>` boundary from `@catch` when its `<await>` gets a new promise

`packages/runtime-tags/src/dom/control-flow.ts:394` | 2026-07-18 | impact:high | effort:med

On the client, once an `<await>` promise rejects and `@catch` renders, assigning a new resolving promise to the awaited state never recovers the boundary: `renderCatch` destroys the `<try>` content branch — which held the only subscription to the awaited expression — and permanently swaps in the catch renderer, while `_try` (packages/runtime-tags/src/dom/control-flow.ts:355) only reinstalls content when no branch scope exists, so later updates run their side effects (the fetch fires) but the resolved value is silently dropped and the stale error stays with no warning. Repro: `<let/p=input.data><button onClick() { p = fetch("/api/x").then((r) => { if (!r.ok) throw new Error("fail"); return r.json(); }) }>retry</button><try><await|v|=p>${v}</await><@placeholder>...</@placeholder><@catch|e|>${e.message}</@catch></try>` — after one rejection, every retry requests but never renders. This contradicts packages/runtime-tags/cheatsheet.md:87 ("hand `<await>` a new promise and it shows the placeholder again, then the new result"), and no fixture covers reject-then-new-promise within one boundary (the async-reject-then-resolve-* fixtures use isolated boundaries). Either reset the boundary when awaited inputs change, or document a reset idiom — wrapping the `<try>` in a keyed `<for>` and bumping the key on retry works — since retry-after-error is the most common error-boundary UX.

## Keep `</html>`/`</body>` in document order when the tag carries a resume marker

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:616` | 2026-07-18 | impact:med | effort:med

The HTML translator defers `</html>`/`</body>` to stream trailers only when `!markerSerializeReason`; when the tag itself needs a resume marker (any dynamic attribute, e.g. `<html lang=input.lang>` in a page with state), its end tag is baked inline in the `_html` template string while the unmarked sibling stays a trailer flushed at stream end. Repro: compile `<html lang=input.lang><head><title>t</title></head><body><let/n=0/><button onClick(){n++}>${n}</button></body></html>` with `output: "html"` and render — both debug and optimized output (marko 6.3.14) emit `...<button>0</button></html><script>…resume…</script></body>`, i.e. `</html>` closes immediately after the body content, before the resume scripts and `</body>`; hardcoding the attribute restores `</body></html>`. Browsers recover, but SSR serves invalid HTML for the very common localized-`<html lang>` pattern (an attribute derived from `$global` happens to avoid it since it gets no marker). The end tags of `html`/`body` should stay deferred (with the marker emitted alongside the trailer) or otherwise preserve document order even when marked.

## Honor union type annotations on tag variables in @marko/type-check instead of collapsing to the initializer's type

`packages/runtime-tags/tags/let.d.marko:3` | 2026-07-18 | impact:med | effort:med

A parenthesized union annotation on a tag variable parses, compiles, and runs, but `mtc` (@marko/type-check 3.1.2) narrows the variable to the initializer's type instead of the declared union: `<let/e:(number | string) = 5>` then `e = "hi"` in a handler errors TS2322 "'string' is not assignable to type 'number'", and `<let/x:(number | undefined) = undefined>` types x as `undefined` so every later assignment errors. Non-union annotations ARE honored (`<let/d:string = 5>` correctly rejects the initializer), so the annotation isn't ignored wholesale — the union is re-inferred/intersected against the initializer, unlike plain TS `let e: number | string = 5` which keeps the union. This defeats the main reason to annotate a tag variable (widening beyond the initial value); the only working spelling today is casting the initializer, `<let/x=(undefined as number | undefined)>`. The `Input<T, K = T>` here is what the type extractor instantiates; the extraction logic itself lives in marko-js/language-tools (@marko/type-check), where the annotation should become the `T` type argument rather than an inference site combined with the value.
