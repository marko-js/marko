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

## Reject (or drop references for) duplicate `<return>` attributes — today they emit a module that references an undeclared signal

`packages/runtime-tags/src/translator/util/get-known-attr-values.ts` › `getKnownAttrValues` | 2026-07-23 | impact:med | effort:low

`getKnownAttrValues` folds a tag's `MarkoAttribute`s into a `Record<string,
t.Expression>`, so a repeated attribute silently keeps only the last value — but
the generic reference tracker has already created a binding for the dropped
expression. `core/return.ts` › `analyze` is the one consumer with no duplicate
guard (`core/let.ts:48` and `core/script.ts:78` both throw "Invalid duplicate
value attribute.", `core/await.ts` rejects extra attrs, and native tags warn +
`dropNodes(attr.value)` in `visitors/tag/native-tag.ts` `analyze.enter`), so it
calls `addSetupExpr(section, attrs.value)` for the surviving value only. The
dropped binding then has a read but no signal, and the DOM output emits
`$input($scope, input) { $input_a($scope, input.a); ... }` where `$input_a` is
never declared — a `ReferenceError` at first render in both debug and optimize,
with zero compile diagnostics (`meta.diagnostics` is `[]` under
`errorRecovery`). Fix by giving `<return>` the same duplicate check as
`<let>`/`<script>`, or by centralizing it: have `getKnownAttrValues` warn and
`dropNodes` the shadowed value so every core-tag consumer is covered. Re-verify:
compile `<return=input.a value=input.b/>` (or `<return value=input.a
value=input.b/>`, or the same with duplicate `valueChange=`) with `-o dom` and
grep the output for `$input_a` — it appears in `$input` but is never declared.

## Accept 3-character `on<Uppercase>` handlers in `isEventOrChangeHandler`; `onX` is rejected while `on-x` works

`packages/runtime-tags/src/translator/util/is-event-or-change-handler.ts` › `isEventOrChangeHandler` | 2026-07-23 | impact:low | effort:low

The regex `/^on[-A-Z][a-zA-Z0-9_$]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$/` requires at
least one character _after_ the `[-A-Z]`, so it rejects every 3-character
handler name `onA`…`onZ`, while the runtime's own `isEventHandler`
(`src/common/helpers.ts`, `/^on[A-Z-]/`) plus `getEventHandlerName`
(`name.slice(2).toLowerCase()`) accept them and map them to a single-letter
event. In `visitors/tag/native-tag.ts` `analyze.enter`,
`assertNativeAttrValueType` runs before the `isEventHandler` branch and bails
out early only for names `isEventOrChangeHandler` recognizes, so `<div onX() { …
}>` dies with the misleading compile error "The `onX` attribute cannot be a
function." even though the equivalent `<div on-x() { … }>` compiles to
`_on($scope["#div/0"], "x", …)`. Dropping the trailing `[a-zA-Z0-9_$]` from the
first alternative (and anchoring the alternation, e.g.
`/^(?:on[-A-Z]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$)/`) realigns the translator with
the runtime. Distinct from the existing dx.md entry about miscased event
attributes, which is about type-check messaging for `onKeydown` vs `onKeyDown`.
Re-verify: compile `<div onX() { console.log(1) }>hi</div>` — it fails today;
`<div on-x() { … }>` and `<div onXy() { … }>` both succeed.

The missing `^` on the second alternative is an independently reachable defect
in the same regex, which makes the anchoring half of the fix above load-bearing
rather than cosmetic: `[a-zA-Z_$][a-zA-Z0-9_$]*Change# Suspected Bugs

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

## Reject (or drop references for) duplicate `<return>` attributes — today they emit a module that references an undeclared signal

`packages/runtime-tags/src/translator/util/get-known-attr-values.ts` › `getKnownAttrValues` | 2026-07-23 | impact:med | effort:low

`getKnownAttrValues` folds a tag's `MarkoAttribute`s into a `Record<string,
t.Expression>`, so a repeated attribute silently keeps only the last value — but
the generic reference tracker has already created a binding for the dropped
expression. `core/return.ts` › `analyze` is the one consumer with no duplicate
guard (`core/let.ts:48` and `core/script.ts:78` both throw "Invalid duplicate
value attribute.", `core/await.ts` rejects extra attrs, and native tags warn +
`dropNodes(attr.value)` in `visitors/tag/native-tag.ts` `analyze.enter`), so it
calls `addSetupExpr(section, attrs.value)` for the surviving value only. The
dropped binding then has a read but no signal, and the DOM output emits
`$input($scope, input) { $input_a($scope, input.a); ... }` where `$input_a` is
never declared — a `ReferenceError` at first render in both debug and optimize,
with zero compile diagnostics (`meta.diagnostics` is `[]` under
`errorRecovery`). Fix by giving `<return>` the same duplicate check as
`<let>`/`<script>`, or by centralizing it: have `getKnownAttrValues` warn and
`dropNodes` the shadowed value so every core-tag consumer is covered. Re-verify:
compile `<return=input.a value=input.b/>` (or `<return value=input.a
value=input.b/>`, or the same with duplicate `valueChange=`) with `-o dom` and
grep the output for `$input_a` — it appears in `$input` but is never declared.

## Accept 3-character `on<Uppercase>` handlers in `isEventOrChangeHandler`; `onX` is rejected while `on-x` works

`packages/runtime-tags/src/translator/util/is-event-or-change-handler.ts` › `isEventOrChangeHandler` | 2026-07-23 | impact:low | effort:low

The regex `/^on[-A-Z][a-zA-Z0-9_$]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$/` requires at
least one character _after_ the `[-A-Z]`, so it rejects every 3-character
handler name `onA`…`onZ`, while the runtime's own `isEventHandler`
(`src/common/helpers.ts`, `/^on[A-Z-]/`) plus `getEventHandlerName`
(`name.slice(2).toLowerCase()`) accept them and map them to a single-letter
event. In `visitors/tag/native-tag.ts` `analyze.enter`,
`assertNativeAttrValueType` runs before the `isEventHandler` branch and bails
out early only for names `isEventOrChangeHandler` recognizes, so `<div onX() { …
}>` dies with the misleading compile error "The `onX` attribute cannot be a
function." even though the equivalent `<div on-x() { … }>` compiles to
`_on($scope["#div/0"], "x", …)`. Dropping the trailing `[a-zA-Z0-9_$]` from the
first alternative (and anchoring the alternation, e.g.
`/^(?:on[-A-Z]|[a-zA-Z_$][a-zA-Z0-9_$]*Change$)/`) realigns the translator with
the runtime. Distinct from the existing dx.md entry about miscased event
attributes, which is about type-check messaging for `onKeydown` vs `onKeyDown`.
matches any attribute
name merely _ending_ in `<word>Change`, including hyphenated HTML names that can
never be a Marko controllable pair. In `visitors/tag/native-tag.ts`
`analyze.enter` that makes `assertNativeHandlerAttr` fire on ordinary custom
attributes, so `<div data-exChange="x"/>` dies with "The `data-exChange` change
handler on a [native tag] must be a function or a falsey value" while the
equivalent `<div data-ex-change="x"/>` compiles; it also makes
`assertNativeAttrValueType` skip its function/object checks for such names, so
`<div data-exChange=(() => {})/>` compiles to `_attr("data-exChange",
_resume(() => {}, …))` — where the hyphenated spelling is correctly rejected —
and an optimized (non-`MARKO_DEBUG`) build then stringifies the closure's source
into the markup as ` data-exChange="(v) => { return v + 1 }"`. The unhyphenated
`fooChange` case is deliberate, since the runtime's `assertValidAttrValue`
(`src/common/errors.ts`) special-cases `/Change$/` to hint that a change handler
only applies with its matching controllable attribute, so the fix is the anchored
regex above plus limiting the native change-handler assertion to the four real
controllables. Re-verify: `pnpm run compile -o html -d` on `<div
data-exChange="x"/>` fails with the change-handler error and on `<div
data-exChange=(() => {})/>` succeeds, while `<div data-ex-change="x"/>` compiles
and `<div data-ex-change=(() => {})/>` fails with "The `data-ex-change` attribute
cannot be a function."

## Validate (or coerce) `from`/`step` in `forTo`/`forUntil`; a string `from` silently produces concatenated indices

`packages/runtime-tags/src/common/for.ts` › `forTo` | 2026-07-23 | impact:med | effort:low

`forTo`/`forUntil` guard only the upper bound (`assertValidRangeBound("to", to)`
/ `("until", until)`) and then compute `const start = from || 0` and `cb(start +
i * delta)`. The `steps` division coerces a non-numeric `from`, but `start + i *
delta` does not: a string `from` makes `+` string concatenation, so `<for|i|
from="2" to=5>` yields the indices `"20", "21", "22", "23"` instead of `2, 3, 4,
5` — wrong values and a wrong count, silently, in both runtimes and in
MARKO_DEBUG. An object `from` yields zero iterations with no diagnostic. This is
reachable from ordinary code because the translator passes the attribute
straight through (`_for_to(5, input.start, 1, …)`,
`packages/runtime-tags/src/translator/core/for.ts` `getForRuntimeArgs`) and the
core-tag metadata's `from: { type: "number" }` is autocomplete/LSP data, not a
compile-time check — so a range bound arriving as a query-string or JSON string
is unvalidated end to end. Either extend the debug guard to the other two bounds
(allowing nullish, since both default) or make the arithmetic coerce (`const
start = +from || 0`, one byte) so the numeric-string case is at least right.
Re-verify: `node -r ~ts -e 'const
{forTo}=require("<repo>/packages/runtime-tags/src/common/for.ts"); const o=[];
forTo(5,"2",1,v=>o.push(v)); console.log(o)'` — prints `[ '20', '21', '22', '23'
]` today.

## Give the HTML spread-attrs path the same MARKO_DEBUG attribute validation as the DOM path

`packages/runtime-tags/src/html/attrs.ts` › `_attrs` | 2026-07-23 | impact:med | effort:low

The two runtimes call the shared validators in
`packages/runtime-tags/src/common/errors.ts` from different places, so debug SSR
accepts spread attributes that debug CSR rejects — the error surfaces only on
the first client update of an already-rendered page. (1) HTML `_attrs` puts
`assertValidAttrName(name)` inside `if (name && !(isVoid(value) ||
skip.test(name) || …))`, while DOM `attrsInternal`
(`packages/runtime-tags/src/dom/dom.ts`) calls it for every key: `<div
...{className: null}/>` renders cleanly on the server but throws "`className` is
not a valid attribute, did you mean `class`?" in the browser, and the same holds
for `htmlFor`/`v-if`/`"bad name"` whenever the current value is void. (2) HTML
`_attrs_partial` filters `data` through `skip` before calling `_attrs`, so
`assertExclusiveAttrs` never sees the statically-authored attributes, while DOM
`_attrs_partial` checks `{...nextAttrs, ...skip}`: `<input checked=a
checkedChange=fn ...{checkedValue:1}/>` produces no server error yet emits two
conflicting controlled registrations, and the same input throws "The attributes
checkedChange, checkedValue, and checked are mutually exclusive." on the client.
Hoist `assertValidAttrName` above the void/skip guard in HTML `_attrs`, and call
`assertExclusiveAttrs({...data, ...skip})` in HTML `_attrs_partial`. Re-verify:
under `node -r ~ts`,
`require('.../src/html/attrs.ts')._attrs({className:null},'a',0,'div')` returns
`""` while `require('.../src/dom/dom.ts')._attrs({a: el},'a',{className:null})`
throws.

## Escape a carriage return in a `<textarea>` body so SSR and CSR agree

`packages/runtime-tags/src/html/attrs.ts` › `_textarea_value` | 2026-07-27 | impact:low | effort:low

`_textarea_value` writes the value as element text, and the HTML tokenizer
normalizes every CR and CRLF in text to a single LF, so a `\r` anywhere in the
value — not just at the start — is lost on SSR: `"a\rb"` and `"a\r\nb"` both
parse back as `"a\nb"`. CSR keeps them, since `_attr_input_value_default`
assigns `el.defaultValue` verbatim, so the two halves disagree and a controlled
`<textarea>` resumes with a value the server never rendered. Writing `\r` as
`&#13;` survives, because character references are decoded after newline
normalization. Weigh that against the bytes it costs every textarea, since a
lone CR in user input is rare. Re-verify: SSR-render `<textarea value=input.v/>`
with `v = "a\rb"` and parse the output — the value is `"a\nb"`.

## Don't emit the "no matching `<option>`" dev error when a controlled `<select>`'s options render asynchronously

`packages/runtime-tags/src/html/attrs.ts` › `_attr_select_value` | 2026-07-23 | impact:med | effort:med

The MARKO_DEBUG branch of `_attr_select_value` (attrs.ts:88-103) wraps `content`
in `withContext(kSelectedValueMatched, matched, …)` and then inspects
`matched.value` immediately after `content()` returns. When the select's body
contains an `<await>` on a real promise, `content()` returns as soon as `_await`
forks the chunk (`html/writer.ts` `_await`, async path) and the `<option>`s —
and therefore `_attr_option_value`'s `matched.value = true` — run in a later
chunk, so the check always sees `false` and logs `A controlled <select>'s value
has no matching <option>: <value>` even though the emitted HTML is correct and
does contain `<option value=b selected>`. Fetching a select's options
asynchronously is idiomatic, so this fires a false alarm on a correct page and
trains developers to ignore the warning (and it costs real debugging time
chasing a nonexistent mismatch). Fix by deferring the assertion until the
select's content has actually finished — e.g. run it from the boundary/chunk
completion rather than synchronously, or skip it when the content forked an
async chunk. Re-verify: server-render `<let/v="b"/><select
value:=v><await|opts|=input.opts><for|o| of=opts><option
value=o>${o}</option></for></await></select>` with MARKO_DEBUG and `input.opts =
Promise.resolve(["a","b","c"])` — `console.error` fires while the HTML shows
`<option value=b selected>`; passing the same array (or dropping the `<await>`)
is silent.

## Reconcile `<html-comment>` escaping: SSR writes a literal `&gt;` into comment data that CSR writes raw

`packages/runtime-tags/src/html/content.ts` › `_escape_comment` | 2026-07-23 | impact:med | effort:med

`_escape_comment` replaces every `>` with `&gt;`, but HTML comments are not
parsed for character references, so the server-rendered comment's data literally
contains `&gt;` while the DOM runtime writes the raw character (`dom/dom.ts`
`_text` assigns `node.data = _to_text(value)` with no comment escaping). For
`<html-comment>${"-->"}</html-comment>` the resumed/SSR document has
`comment.data === "--&gt;"` and a client-rendered document has `comment.data ===
"-->"` — anything that reads comments (a `NodeIterator` over `SHOW_COMMENT`, a
comment carrying JSON/config, edge-side markers) sees different content
depending on which runtime produced the page. The escaping is also broader than
needed: only `-->`, `--!>`, and a leading `>`/`->` can terminate a comment, so
`>` alone never needs escaping. Pick one behavior — either escape comment data
on the DOM side too (which also closes the client-side re-serialization hazard,
since `comment.data = "-->"` serializes to `<!---->-->`), or narrow SSR escaping
to the `--` sequences so both sides round-trip the author's text. Re-verify:
parse the committed `html-comment-placeholder` snapshot `<!----&gt;-->` in jsdom
(`data === "--&gt;"`) and compare against the fixture's own
`dom.bundle.debug.js`, which calls `_text($scope["#comment/0"],
`${_to_text("-->")}`)` (`data === "-->"`).

## Render a value-carrying dynamic `<select>`'s body through `_dynamic_tag` so it gets a resume branch like every other native dynamic tag

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-23 | impact:med | effort:med

In the string-renderer branch of the HTML `_dynamic_tag`, body content normally
recurses through `_dynamic_tag(branchId, accessor, renderContent, undefined, 0,
undefined, serializeReason)`, which emits `BranchStart`/`BranchEnd` markers and
registers `ConditionalRenderer:#<tag>/0` on the native branch scope. The
`renderer === "select" && ("value" in input || "valueChange" in input)` case
instead hands `renderContent` to `_attr_select_value`, which invokes it directly
via `withContext` — so the select's body gets no branch markers and no
`ConditionalRenderer` entry. The DOM runtime has no such special case:
`dom/control-flow.ts` `_dynamic_tag`'s string branch unconditionally does
`setConditionalRenderer(scope[childScopeAccessor], "#<tag>/0", content,
createAndSetupBranch)`, so the same template produces a different scope shape
under CSR than under SSR-resume, and `setConditionalRenderer`'s
`destroyBranch(prevBranch)` has no registered child branch to tear down when the
tag switches away from `select` (the body's section scope stays in the parent's
`ClosureScopes` set while its nodes are detached). Fix by keeping the
`_dynamic_tag` recursion and passing it as the content callback to
`_attr_select_value` (the `kSelectedValue` context is dynamically scoped, so it
still reaches the options). Re-verify: server-render
`<let/tag=input.tag/><let/n=0/><${tag} value="b"><option
value=a>A${n}</option><option value=b>B</option></>` for `tag="div"` and
`tag="select"` and diff the payloads.

The falsy half of the same guard is a second defect, so fix both together: the `renderer === "select"` call sits inside `} else if (renderContent) {` (`html/dynamic-tag.ts:86`, the select test at `:93`), and `_attrs`' `case "select"` only widens `skip` to drop `value`/`valueChange` from the markup — so a dynamic tag resolving to `"select"` with **no body** writes neither `ControlledType`/`ControlledHandler` nor the `_dynamicTagScript` resume registration. CSR has no such guard: `dom/control-flow.ts` › `_dynamic_tag` always passes `controllableRenders[tagName]` into `_attrs`, and `dom/controllable.ts` › `_controllable_select` only tests `"value" in nextAttrs || "valueChange" in nextAttrs`, so the same template is controlled after a client mount but uncontrolled after SSR resume until the dynamic tag next re-renders. The select call is the only controllable gated on having a body — `tag="input"`/`"textarea"` register correctly because their helpers run outside the guard, and a static bodyless `<select value:=v/>` registers because the translator always hands `_attr_select_value` a body closure — so hoisting the select case out of the `renderContent` guard and passing `renderContent` (possibly undefined) as its optional `content` argument fixes this half while the recursion above fixes the other. Re-verify: compile `<let/v="a"/><${input.tag} value:=v/>` with `pnpm run compile -o html -d` and server-render it twice — the `{"tag":"input"}` payload contains `"ControlledType:#input/0":2`, `"ControlledHandler:#input/0"` and `"_dynamicTagScript 2"`, the `{"tag":"select"}` payload contains none of them.

## Apply the `hasAttrAlias` guard in `_attrs_partial` so a `checkedValue` spread stops unchecking the box

`packages/runtime-tags/src/dom/dom.ts` › `_attrs_partial` | 2026-07-23 | impact:med | effort:low

`_attrs` guards its stale-attribute removal loop with `hasAttrAlias`
(dom.ts:181, helper at :203) so an `<input>` whose next attrs carry
`checkedValue` keeps its `checked` content attribute; `_attrs_partial`'s removal
loop (dom.ts:224-229) tests only `!skip[name] && !(nextAttrs && name in
nextAttrs)` and has no such guard. Because `defaultChecked` is the IDL
reflection of that attribute, `el.removeAttribute("checked")` drops
`defaultChecked` to `false` and (while the dirty flag is unset) `el.checked`
with it. `_attr_input_checked_default` then reads the already-cleared
`el.checked` as its `restoreValue` on the `scope[AccessorProp.Gen] < runId`
branch (controllable.ts:25-32) and writes it back, so an uncontrolled
`checkedValue` spread visibly unchecks a box whose state still selects it; the
controlled variant keeps `checked` correct but is left with `defaultChecked ===
false`, which corrupts `hasCheckboxChanged`/`handleFormReset`
(controllable.ts:512-535) so a form reset reverts to unchecked and reports the
item out of the bound list. Reachable from `<input ...attrs type="checkbox">`
(spread before a static attr), which compiles to `_attrs_partial($scope,
"#input/0", { checkedValue: … , value: … }, { type: 1 })`. Fix by reusing
`hasAttrAlias` in `_attrs_partial`'s loop exactly as `_attrs` does. Re-verify:
add a fixture like `<let/sel=["a"]/><input ...{ checkedValue: sel, value: "a" }
type="checkbox"><button onClick(){ sel = sel.slice() }>t</button>` and click
once — the box unchecks in `render.md` even though `sel` still contains `"a"`.

## Prefix `delegate`'s registration flag so event types named after Function properties register

`packages/runtime-tags/src/dom/event.ts` › `delegate` | 2026-07-23 | impact:low | effort:low

`delegate` memoizes its one-time `document.addEventListener` per (handler, type)
by writing the flag onto the handler function under the raw event type:
`(handler as any)[type] ||= (document.addEventListener(type, handler, true), 1)`
(event.ts:28-30). Any event type that collides with an own or inherited
`Function` property already reads truthy, so `||=` short-circuits and the
document listener is never installed — the handler silently never fires. `name`,
`length`, `constructor`, `toString`, `bind`, `call`, `apply`, and `prototype`
all hit this; `caller` and `arguments` are worse, because the runtime is
strict-mode ESM and the `Function.prototype.caller` accessor throws, so `<div
on-caller(){}>` raises a TypeError from inside `_on`. Custom event names come
straight from user markup (`on-<name>` on a native tag lowers to `_on(el,
"<name>", fn)`), so this is user-reachable and fails with no diagnostic. `_on`
already namespaces its own per-element slot as `"$" + type` (event.ts:21-25);
using the same `"$" + type` key inside `delegate` costs a few bytes and closes
the hole. Re-verify: `<div on-name(){ console.log("hi") }>x</div>`, then
dispatch `new CustomEvent("name", { bubbles: true })` on the div — nothing logs
today, and `on-click` in the same template works.

## Treat a falsy-but-defined `<for by>` value as "no key" in the DOM runtime, matching SSR

`packages/runtime-tags/src/dom/control-flow.ts` › `_for_of` | 2026-07-23 | impact:med | effort:low

The DOM loops normalize `by` with an ES default parameter — `_for_of` uses
`([all, by = bySecondArg], cb)` and `_for_in`/`_for_to`/`_for_until` use `by =
byFirstArg` — which only substitutes for `undefined`. The HTML runtime instead
uses a truthiness check (`forOfBy`/`forInBy`/`forStepBy` in `src/html/for.ts`:
`return by ? ... : index`). So a `by` expression that evaluates to `false`,
`null`, or `0` renders fine on the server and then throws `TypeError: by is not
a function` on the client. This is reachable from idiomatic authoring — `by=cond
&& "id"` or `by=input.by` — because the translator gates on the _attribute's
presence_, not its runtime value (`if (forAttrs.by) loopArgs.push(forAttrs.by)`
in `translator/core/for.ts`), emitting `$for($scope, [$scope.input_items,
$scope.input_useKey && "id"])`. Fix by normalizing on truthiness in the four
`loop` wrappers (`by ||= bySecondArg` / `byFirstArg`) so falsy means index/name
keying exactly as SSR does; note `by=""` is a related hazard (DOM takes the
string branch and reads `item[""]`, producing duplicate keys) that the same
normalization fixes. Re-verify with a fixture `<for|item| of=input.items
by=input.useKey && "id">` and steps `[{items, useKey:true}, {items,
useKey:false}]`; today the second step throws in CSR while SSR renders both.

## Guard the tag-variable assignment in `_dynamic_tag` when the dynamic tag becomes falsy

`packages/runtime-tags/src/dom/control-flow.ts` › `_dynamic_tag` | 2026-07-23 | impact:med | effort:low

Inside `_dynamic_tag`'s change block, `setConditionalRenderer(...)` assigns
`scope[AccessorPrefix.BranchScopes + nodeAccessor] = newRenderer &&
createBranch(...)` — so when the new renderer is falsy the child scope becomes
`undefined`. The very next statement (control-flow.ts:551-554) then does
`scope[childScopeAccessor][AccessorProp.TagVariable] = (value) =>
getTagVar()(scope, value)` with no guard, throwing `TypeError: Cannot set
properties of undefined (setting '#TagVariable')`. This only fires when the tag
variable exists and the value transitions from rendered to falsy (the
initial-falsy case is skipped because the change check compares `undefined !==
undefined`), i.e. `<${input.tag}/el/>` going `"div"` →
`undefined`/`null`/`false`, which is the natural way to write an optional
dynamic tag with a ref. Wrap the assignment (`if (getTagVar &&
scope[childScopeAccessor])`) or move it inside the `normalizedRenderer` branch,
and decide whether the tag variable should be pushed `undefined` on teardown.
This is a different defect from the existing bugs.md entry "Initialize tag
variables for dynamic native tags" (which is about the getter never being
_supplied_ for a rendered native dynamic tag, at :547) — this one is a missing
null guard on the clear transition. Re-verify with a fixture
`<${input.tag}/el/>` plus `steps: [{tag:"div"}, {tag:undefined}]`; the second
CSR step throws today.

## Renumber alias bindings too, or stop using `Binding.id` as the `bindingUtil` identity tiebreak

`packages/runtime-tags/src/translator/util/references.ts` › `finalizeReferences` | 2026-07-23 | impact:med | effort:med

`bindingUtil` (references.ts:1603) treats `a.section.id - b.section.id || a.id -
b.id` as an identity comparison — `Sorted.add` skips an item whose compare is
`0`, and `find`/`has`/`findIndexSorted` return the first `0` match. That
requires `id` to be unique per section, but the final loop of
`finalizeReferences` (references.ts:1321, `binding.id = nextId++`) only
renumbers bindings reachable through `section.bindings`, which is populated with
`getCanonicalBinding(binding)` (references.ts:1052). A non-canonical binding — a
pure alias with `property === undefined` and `excludeProperties === undefined`,
e.g. the one `<const/b=a>` creates via `trackVarReferences` — is never in that
list, so it keeps its global creation-order id while its section-mates are
renumbered to dense per-section ids. These aliases genuinely do reach sorted
structures: an expression reading `b` resolves to `referencedBindings = b`, not
`a` (compiling `<let/a=1/><const/b=a/><let/c=2/><div>${b + c}</div>` emits the
intersection signal `$b__OR__c`). The collision then makes two distinct live
bindings indistinguishable to every post-analysis sorted operation, most
consequentially `dropReferencedBindings` (references.ts:1374), which runs after
renumbering via the `getReferenceFinalizers()` loop (references.ts:1364) and
rebuilds `expr.referencedBindings` with `bindingUtil.add` — a colliding pair
silently collapses to one binding, dropping a real dependency. I did not find a
fixture that currently miscompiles because of it, so this is a latent invariant
break rather than an observed wrong output; the fix is either to renumber alias
bindings alongside their canonical (or into a disjoint range) or to give
`Binding` a separate monotonic identity field for the comparator and keep `id`
purely as the accessor id. Re-verify: wrap `bindingUtil.compare` to collect
every binding it sees, compile
`packages/runtime-tags/src/__tests__/fixtures/param-destructure-default/template.marko`
with the tags translator, then group the collected bindings by `(section, id,
type===dom)` — section 1 id 6 holds both `$foo` (alias, `pruned === false`) and
`$bar`, and `bindingUtil.compare($foo, $bar)` returns `0`.

## Reset the scheduler's `isScheduled` guard without depending on `requestAnimationFrame`

`packages/runtime-tags/src/dom/schedule.ts` › `schedule` | 2026-07-23 | impact:med | effort:low

`schedule()` sets `isScheduled = 1` and queues `flushAndWaitFrame`, which
registers `requestAnimationFrame(triggerMacroTask)` and flushes once;
`isScheduled` is then cleared only inside the MessageChannel `onmessage` handler
that `triggerMacroTask` posts — and `triggerMacroTask` is reachable only from
that rAF callback. Browsers do not run rAF callbacks for a document that is not
rendered (hidden/background tab, `display:none` or fully offscreen iframe), so
after the very first microtask flush every later `schedule()` is a no-op and all
`<let>`-driven work (`dom/signals.ts:47`) stalls in `pendingRenders` — including
`<script>`/`<lifecycle>` effects doing non-visual work such as `document.title`
badges, analytics beacons, or websocket/SSE-driven state. In a hidden tab this
unblocks on refocus, but in a `display:none` iframe it never does;
`queueAsyncRender`'s direct `queueMicrotask(run)` means only the synchronous
state-write path is affected, which makes the failure look intermittent. Note
this is distinct from the deliberate MessageChannel contract documented in the
comment above `triggerMacroTask` (commit 2df3c969, "hosts lacking it must
polyfill"): here MessageChannel exists and rAF is the link that never fires, so
no polyfill helps. Direction: clear `isScheduled` from a path that always runs
(post the MessageChannel message from `flushAndWaitFrame` itself, or race the
rAF with a `setTimeout` fallback). Re-verify: stub
`globalThis.requestAnimationFrame` to record-but-never-invoke, then
`queueRender(scope, sig, 0, 'a'); schedule()` → flushes; a second and third
`queueRender(...)+schedule()` never run until the recorded rAF callbacks are
manually invoked.

## Default a nullish namespace in `parseHTML`: mounting into a DocumentFragment/ShadowRoot creates null-namespace elements

`packages/runtime-tags/src/dom/parse-html.ts` › `parseHTML` | 2026-07-23 | impact:med | effort:low

`parseHTML(html, ns)` builds its parser with `document.createElementNS(ns,
"template")`, and `ns` is derived from `(parentNode as Element).namespaceURI` in
`dom/renderer.ts` `createBranch`. A `DocumentFragment` or `ShadowRoot` has no
`namespaceURI`, so `undefined` reaches `createElementNS`, which coerces to
`null`; the parser is then a null-namespace `Element` (not an
`HTMLTemplateElement`, hence the `|| parser` fallback) and the HTML fragment
parser runs in foreign-content mode, creating every tag that is not on the
parser's HTML-breakout list in the null namespace. The result is that
`template.mount(input, shadowRoot)` and `template.mount(input,
documentFragment)` — the natural way to use Marko 6 inside a web component —
silently produce non-`HTMLElement`
`<section>`/`<main>`/`<button>`/`<a>`/`<input>`/`<label>` with no UA styles, no
form behavior and no `style`/`className`, while `<div>`/`<span>`/`<ul>` come out
fine, making the breakage partial and baffling. `dom/scope.ts`
`tempDetachBranch` already shims `fragment.namespaceURI` for exactly this
invariant, so the fix is to close the remaining hole: default a nullish `ns` (in
`parseHTML` and in `createCloneableHTML`'s `document.createElementNS(ns, "t")`)
to the XHTML namespace, or have `mount` resolve it from the ShadowRoot host /
`ownerDocument.documentElement`. Re-verify: install jsdom globals, then
`_template('t','<section>x</section>','').mount({},
document.createDocumentFragment())` — the child is `nodeName 'section'` with
`namespaceURI === null`, versus `SECTION` in `http://www.w3.org/1999/xhtml` when
mounted into `document.body`.

## Stop resolving the clone namespace from `document.body` in `compat.render`; SVG/MathML Tags content from a Class parent clones as HTML

`packages/runtime-tags/src/dom/compat.ts` › `compat.render` | 2026-07-23 | impact:med | effort:med

`compat.render` creates the Tags branch with `createAndSetupBranch(out.global,
renderer, renderer[RendererProp.Owner], document.body)`, and `createBranch`
derives the clone namespace from that parent node's `namespaceURI` — so every
Marko 6 template instantiated through the Marko 5 → Marko 6 client boundary is
cloned in the XHTML namespace regardless of where it will actually land. A Tags
template whose root is an SVG/MathML child element (`<circle>`, `<path>`, `<g>`,
`<use>` — i.e. a partial used inside a parent `<svg>`) therefore becomes an
`HTMLUnknownElement` and renders as nothing; the same template mounted normally
into an `<svg>` is correct, which pins the defect to the hardcoded
`document.body`. This only bites on the client-create path (pure CSR, or a Class
parent re-rendering that constructs a new Tags child) — SSR resume adopts
existing DOM and never clones. The insertion point genuinely is not known when
the Class runtime renders into a detached vdom, so the fix needs the namespace
threaded in from the caller (the `TagsCompat` renderer knows the morph host in
the re-render case) or the clone deferred until `morphdom` inserts; note
`dom/scope.ts` `tempDetachBranch` already establishes the "parent must carry a
correct `namespaceURI`" invariant via its DocumentFragment shim. Re-verify: with
jsdom globals installed, `compat.render({global:{runtimeId:'M',renderId:'_'}},
{}, _template('b','<circle cx="1"/>',''), [{}])` returns a `CIRCLE` in
`http://www.w3.org/1999/xhtml`, versus `circle` in `http://www.w3.org/2000/svg`
when the same template is `mount`ed into a real `<svg>`.

## Count the same unit on both sides of `resolveCursorPosition`'s alphanumeric scan; astral letters send the caret to the end

`packages/runtime-tags/src/dom/resolve-cursor-position.ts` › `resolveCursorPosition` | 2026-07-23 | impact:low | effort:low

The fallback scan measures `count = before.replace(R, "").length`, i.e. the
surviving alphanumerics in UTF-16 code units — an astral `\p{L}`/`\p{N}` code
point survives the strip and contributes 2 — but then walks `updatedValue` one
code unit at a time (`updatedValue[pos++].replace(R, "")`), and a lone surrogate
is `\p{Cs}`, so it is stripped and never decrements `count`. For values
containing astral letters or digits (CJK Ext-B such as 𠮷 U+20BB7, Adlam, Osage,
mathematical alphanumerics) `count` can never reach 0, the loop runs off the end
and the function returns `updatedValue.length`, so a controlled/masked `value:=`
input yanks the caret to the end on every keystroke that rewrites the middle of
the value. Emoji are unaffected because `\p{So}` is excluded on both sides; the
bug is specific to astral characters that _are_ letters/digits, and the same
mismatch can also return a position between surrogate halves. Fix by making both
sides use one unit — e.g. `count = [...before.replace(R, "")].length` plus
iterating `updatedValue` by code point (`for (const ch of updatedValue) { pos +=
ch.length; ... }`). Re-verify: `resolveCursorPosition("", 5, "(𠮷𠮸𠮹) x", "(𠮷)
𠮸𠮹y")` returns 10 (end of value) where 8 is correct, while the all-BMP
`resolveCursorPosition("", 5, "(5405) 810-9227", "(540) 581-0922")` returns 7.

## Make the hidden `<show>` wrapper legal in table/select insertion contexts; `<t hidden>` is foster-parented and the hidden content renders

`packages/runtime-tags/src/html/writer.ts` › `_show_start` | 2026-07-23 | impact:high | effort:med

`_show_start` writes a literal `<t hidden>` (and `_show_end` the matching
`</t>`) around a non-displayed `<show>` range, with the same wrapper emitted
statically at `translator/core/show.ts` (`writer.writeTo(tag)`<t hidden>``).
`<t>` is an unknown element, so the HTML parser's "in table"/"in table body"
insertion mode foster-parents it out of the table while its `<tr>` children are
still inserted into the table, and "in select" mode ignores the `<t>` token
entirely while keeping its `<option>` children — in both cases the content the
author asked to hide is rendered and interactive after SSR, and the
`BranchEndSingleNode` resume comment no longer bounds the nodes it names, so
resume/toggle is wrong too. This is a plain SSR/CSR divergence (CSR moves the
range into a detached fragment and correctly hides it), and it hits exactly the
usage the docs recommend — website `docs/reference/core-tag.md` `## <show>`
promotes `<show>` for form fields and bulky markup with no note about table or
select ancestors. Direction: the translator knows the static ancestor tag at the
`<show>` site, so pick a wrapper legal in that insertion context (or reject the
construct with a compile-time diagnostic as a cheap first step) instead of
always emitting `<t>`. Re-verify by adding a fixture
`<table><tbody><show=show><tr><td>row</td></tr></show></tbody></table>` with
`show=false` and running `pnpm test -- --grep "runtime-tags/translator
show-tag-in-table "`: `render.md` will show the row inside the table (visible)
and an empty `<t hidden>` before the table.

## Wrap reordered out-of-order content in a parser-context-legal container; table rows streamed after a `@placeholder` are destroyed

`packages/runtime-tags/src/html/writer.ts` › `Chunk.flushScript` | 2026-07-23 | impact:high | effort:high

When a reorder chunk flushes, `flushScript` appends `"<t hidden " +
state.commentPrefix + "=" + reorderId + ">" + reorderHTML + "</t>"` to the
stream, and the inline reorder runtime later splices it in with `replace = (id,
container) => runtime.l[id].replaceWith(...container.childNodes)`. `<t>` puts
the parser in the "in body" insertion mode, so any reordered payload made of
table-internal markup is discarded by the parser before the runtime ever sees
it: `<tr>`/`<td>` start tags are ignored and only their text survives, and the
runtime then splices bare text nodes into the `<tbody>` where the rows belonged.
This breaks the canonical async-table pattern (`<try>` with a `@placeholder` of
skeleton rows and an `<await>` that streams the real rows) with no error on
either side; the same wrapper is also foster-parented out of the table whenever
a flush boundary lands while the table element is still open. Direction: track
the parser insertion context at the reorder site (the translator knows the
static ancestor tag chain) and emit matching scaffolding around the payload —
e.g. `<table hidden><tbody>…</tbody></table>` — with the runtime extracting from
the corresponding depth, the approach React's Fizz writer uses for the same
problem. Re-verify by adding a fixture
`<table><tbody><tr><td>first</td></tr><try><@placeholder><tr><td>loading</td></tr></@placeholder><await=input.rows><tr><td>async
row</td></tr></await></try></tbody></table>` and running `pnpm test -- --grep
"runtime-tags/translator try-await-table-rows "`: `writes.html` will contain `<t
hidden M_=b><tr><td>async row</td></tr></t>` while `render.md` shows the row
reduced to a stray text node in the table.

## Track "a page already owns this $global" with a durable marker; `__flush__` is cleared at the first flush

`packages/runtime-tags/src/html/assets.ts` › `withPageAssets` | 2026-07-23 | impact:high | effort:med

`withPageAssets` decides "am I nested inside another page render?" with `if
(g.__flush__)` (assets.ts:95), but `Chunk.flushHTML` clears that same hook
(`$global.__flush__ = undefined`, `html/writer.ts:1537`) the moment the outer
page performs its first flush. Any page-entry template rendered after that point
— i.e. anywhere inside `<await>`/`<try>`/reordered content — therefore takes the
top-level branch instead: it re-arms `g.__flush__ = flush` and calls
`template(input)` directly, skipping `writeWaitReady(assetId, template, input)`.
Two consequences follow. (a) The nested page's `<link>`/`<script>` asset tags
are no longer written at the tag position; they get prepended to the entire next
flush's HTML, so they can land far from (and structurally invalid relative to)
the markup they belong to. (b) The nested page's resume data goes into the eager
`M._.r` queue rather than the ready-gated `M._.b[assetId]` bucket, so it
executes before that page's entry module has registered its ids —
`registeredValues[lastToken]` is `undefined` (`dom/resume.ts:316`) and
`runEffects` then calls `undefined(scope)` (`dom/queue.ts:125-129`). No fixture
covers this: `main.test.ts` renders exactly one page entry per fixture, so the
`g.__flush__` branch is never exercised at all. Fix direction: set a dedicated
symbol on `$global` in `withPageAssets` (never cleared) to mean "a page entry
already claimed this render", and keep `__flush__` purely as the one-shot
head/prefix injection hook; `_flush_head` (assets.ts:107) aliases the same state
and should be reconciled with it. Re-verify: render a `withPageAssets`-wrapped
template from inside an `_await` callback of another `withPageAssets`-wrapped
template and inspect the streamed chunks — the inner page's resume payload is
emitted as `M._.r=[…]` rather than `M._.b={innerAsset:[…]}`, and its asset tags
appear at the head of the chunk rather than at the tag position.

## Arm SSR lazy-load triggers against the finished document, not the flushed prefix

`packages/runtime-tags/src/html/assets.ts` › `writeTriggerScript` | 2026-07-23 | impact:med | effort:med

The inline trigger script emitted for a `with { load: "visible…" | "on-…" }`
import resolves its selector eagerly with `document.querySelector(sel) || l()` —
and `l()` is the "load now" callback. That script is written through
`writeScript`, so it lands at the end of the _current flush chunk_, not the end
of the document. Any flush boundary (i.e. any `<await>`/`<try>`/lazy content)
between the lazy tag and its selector target means the target has not streamed
yet, `querySelector` returns null, and the module is fetched immediately — the
trigger silently degrades to eager loading and the code-split is lost. This also
contradicts the reference docs, which promise `"If a trigger's selector does not
match any element on the page, the tag's JavaScript is loaded immediately (with
a warning in development)"`: the CSR implementation does warn (`dom/load.ts` ›
`getSelectorOrResolve`, `MARKO_DEBUG && console.warn(...)`), but the SSR string
built here has no `MARKO_DEBUG` branch at all, so on server-rendered pages — the
primary path, since a resumed lazy tag is driven only by this script — the
degradation is completely silent. Direction: make the trigger script retry once
the document is parsed (re-run `querySelector` on `DOMContentLoaded`, or observe
until the node appears) before falling back to `l()`, and gate a `console.warn`
on `MARKO_DEBUG` in the emitted string so dev builds surface the miss on SSR
too. Re-verify: render a page whose lazy tag with a `visible#footer` trigger
precedes an `<await>` whose body contains `<footer id=footer>` — the first
flushed chunk contains `…document.querySelector("#footer")||l()… ` while
`<footer id=footer>` only appears in the next chunk.

## Look up `debug.vars` with the raw accessor, not the escaped object key

`packages/runtime-tags/src/html/serializer.ts` › `throwUnserializable` | 2026-07-23 | impact:low | effort:low

`writeObjectProps` passes the _escaped_ key (`toObjectKey(key)`,
serializer.ts:1696) as the Reference accessor, but `throwUnserializable` uses
that accessor to index the translator-supplied debug map
(`debug.vars?.[ref.accessor]`, serializer.ts:1792), whose keys are the _raw_
accessors emitted by `writeHTMLResumeStatements` in
`packages/runtime-tags/src/translator/util/signals.ts`
(`toObjectProperty(getScopeAccessor(binding), ...)`). Any accessor that is not a
bare identifier — e.g. `#LoopKey`, which holds the user's `<for by=...>` key
expression and does appear in generated debug vars as `{ "#LoopKey": "2:17" }`
in `fixtures/basic-inert-collapsible-tree/__snapshots__/html.bundle.debug.js` —
never matches, so the per-variable source location and the `["item.id", loc]`
alias name are silently discarded, and the name is printed double-quoted because
`JSON.stringify` is applied to the already-quoted key. Fix by carrying the raw
key alongside the escaped one on `Reference` (or keying `debugVars` by
`toObjectKey(...)` in the translator). Re-verify: call `setDebugInfo(scope,
"template.marko", "3:1", { "#LoopKey": "3:11" })` and serialize `{ "#LoopKey":
class Foo {} }` for that scope — the abort message reads `Unable to serialize
"\"#LoopKey\"" in template.marko:3:1` instead of `... "#LoopKey" in
template.marko:3:11`.

`throwUnserializable` walks the accessor chain with `while (ref?.accessor)`, so it stops at the first `Reference` whose accessor is `null` — and `writeArrayArg` (Map/Set), `writeGenerator`, and `writeMaybeIterableProps` each create exactly that for the collection's backing array (`new Reference(ref, null, state.flush, …)`). Any unserializable value reached through a Map, Set, generator, or custom iterable therefore never reaches the scope `Reference` that carries `debug`, so a `<let/selected = new Set([new Thing()])/>` that is read from an event handler aborts the render with `Unable to serialize (reading [0])` — no variable name, no `.marko` path, no line — while the identical value in a plain array reports `Unable to serialize "selected" in template.marko:2:6 (reading [0])`. The index path that does survive is into the internal entries array, so a Map member prints `(reading [0][1])`, which names nothing in the user's source. A backing-array reference is an implementation detail rather than a real accessor, so the loop should skip null accessors and keep walking — `while (ref) { … if (ref.accessor) access = toAccess(ref.accessor) + access; ref = ref.parent; }`, consulting `debug` only when `ref.accessor` is set — which restores both the variable name and the file/line for these shapes. Re-verify from the repo root: `node -r ~ts -e 'const { Serializer, setDebugInfo } = require("./packages/runtime-tags/src/html/serializer.ts"); class Thing {} for (const [name, val] of [["array", [new Thing()]], ["Set", new Set([new Thing()])], ["Map", new Map([["k", new Thing()]])]]) { const scope = {}; setDebugInfo(scope, "page.marko", "2:6", { selected: ["selected", "2:6"] }); new Serializer().stringifyScopes([[1, scope, { selected: val }]], { signal: { aborted: false }, abort: (e) => console.log(name, "=>", e.message) }); }'` prints the full `"selected" in page.marko:2:6` message for the array and a bare `Unable to serialize (reading …)` for the Set and the Map.

## Disambiguate `buildResumeRegisterKey` — `_`-joined binding names collide and silently break resume

`packages/runtime-tags/src/translator/util/signals.ts` › `buildResumeRegisterKey` | 2026-07-23 | impact:med | effort:med

`buildResumeRegisterKey` (signals.ts:920) builds a resume id as `${section.id}`
plus `_${name}` per referenced binding, with no separator that binding names
cannot contain and no namespace per registration kind, so structurally different
registrations in one section can produce the identical key — and `getTemplateId`
hashes the key, so equal keys give equal ids in optimize too. Two verified
collisions: (a) an intersection `[a, b]` and a binding literally named `a_b`
both key `${section.id}_a_b`, so `writeSignals` emits two `_script(<same id>,
fn)` registrations and `writeHTMLResumeStatements` (signals.ts:1275) emits
`_script($scopeId, <same id>)` twice; (b) a section's content-renderer id
`getResumeRegisterId(section, "content")` (`visitors/program/dom.ts:112`,
`util/translate-attrs.ts:434`) collides with the effect id of a binding
literally named `content`, so `_content_resume` and `_script` register the same
key. Because `_resume` is `registeredValues[id] = obj` (`dom/resume.ts:464`) and
resume resolves effects by `registeredValues[lastToken]` (`dom/resume.ts:316`)
before `runEffects` invokes `fn(scope)` (`dom/queue.ts:125`), the later
registration wins: in (a) the `console.log(a, b)` effect never runs after SSR
and `console.log(a_b)` runs twice; in (b) the `<script>` effect is replaced by
`_content`'s `(owner) => Renderer` factory, which resume calls and discards, so
the effect silently never runs. CSR is unaffected (distinct function
references), so this only appears post-resume, and no fixture currently
exercises it (a scan of every committed `__snapshots__/dom.bundle*.js` for
repeated
`_script`/`_content_resume`/`_var_resume`/`_hoist_resume`/`_el`/`_resume` id
literals found zero duplicates). Fix by making the key unambiguous before
hashing — e.g. key on the binding/intersection numeric ids rather than `name`,
and give the string-keyed kinds (`"content"`) their own namespace segment — then
regenerate snapshots (every resume id changes) and add fixtures for both shapes.
Re-verify: compile `<let/a=1/><let/b=2/><let/a_b=3/><button
onClick(){a++;b++;a_b++}>x</button><script>{console.log(a,b)}</script><script>{console.log(a_b)}</script>`
with `npm run compile -- -o dom` and observe two `_script("<same hash>", …)`
registrations.

A third collision needs no exotic identifier at all: native element bindings are named after their tag, so two element refs on same-named tags in one section — `<div/a/><div/b/>` — both key `${section.id}_#div`. The DOM output emits `_el("…_0_#div", "#div/0")` followed by `_el("…_0_#div", "#div/1")`, and since `_resume` is `registeredValues[id] = obj` the second registration wins, while SSR serializes `<const/box = { a, b }/>` as `{box:{a:_(1,"…_0_#div"),b:_(1,"…_0_#div")}}` — so after resume `box.a` and `box.b` are the same getter and both read `b`'s element. CSR is unaffected (the two getters are distinct local consts), so this only shows up post-resume, as silently-wrong element references. That makes the defect reachable from ordinary authoring rather than from a binding literally named `a_b`, and reinforces keying on binding/intersection ids — which are already distinct for these two `#div` bindings — instead of `name`. Re-verify: `printf '<div/a/>\n<div/b/>\n<const/box = { a, b }/>\n<button onClick() { console.log(box.a(), box.b()); }>go</button>\n' > /tmp/refs.marko && pnpm run compile -o dom -d /tmp/refs.marko && grep -n '_el(' /tmp/refs.marko.js` prints two `_el(...)` calls whose first argument is the identical string.

## Apply `ToNumeric` when lowering `++`/`--` on a tag variable

`packages/runtime-tags/src/translator/util/signals.ts` › `replaceAssignedNode` | 2026-07-27 | impact:med | effort:med

The `UpdateExpression` case lowers `x++` to `$x(scope, scope.x + 1)` (postfix
subtracting 1 from the result), which is `x = x + 1` rather than JS's
`x = ToNumeric(x) + 1`. For `<let/x="5"/>` an `x++` therefore sets `x` to `"51"`
and yields `50`, instead of setting `6` and yielding `5`. A `<let>` holding a
bigint is worse: `1n + 1` throws `Cannot mix BigInt and other types`. Writing
the read as `+scope.x` fixes the string case but breaks bigint, since unary plus
throws on one, so the lowering needs a form that coerces the way `ToNumeric`
does — or the operators need rejecting on a tag variable whose type is not
known numeric. Re-verify: compile `<let/x="5"/><button onClick(){ x++ }>${x}</button>`
with `-o dom`; the handler emits `$x($scope, $scope.x + 1)`.

## Lower (or reject) `for (x of …)` / `for (x in …)` writes to a tag variable — they bypass the signal

`packages/runtime-tags/src/translator/util/signals.ts` › `replaceAssignedNode` | 2026-07-23 | impact:low | effort:med

`replaceAssignedNode` only rewrites `AssignmentExpression` and
`UpdateExpression`, so a `ForOfStatement`/`ForInStatement` whose `left` is a
bare tag variable falls through to `replaceBindingReadNode` →
`getReadReplacement`, which (because analysis never set `extra.assignment` for
that position — `getReadReplacement` returns early on `extra.assignment`,
references.ts ~:1962) rewrites it as a plain scope read. `<let/x="a"/>` with
`<button onClick(){ for (x of ["b","c"]) {} }>` compiles to `for ($scope.x of
["b", "c"]) {}`, which mutates the scope slot in place without calling the
`_let` signal, so `schedule()`/`queueRender` never fire (dom/signals.ts:43-49)
and the `_text` bound to `${x}` keeps showing the stale value while the scope
holds the new one — silent, with no compile diagnostic in either output mode
(`for (x in …)` behaves identically). The fix is either to mark for-of/for-in
loop targets as assignments during reference analysis and lower them through the
binding's assignment builder (bind a temp and call `$x(scope, tmp)` at the top
of the loop body), or to raise a compile error naming the unsupported construct.
Re-verify: `npm run compile -- -o dom -d f.marko` on `<let/x="a"/><button
onClick(){ for (x of ["b","c"]) {} }>s</button>${x}` emits `for ($scope.x of
["b", "c"]) {}` with no `$x(` call in the handler.

## Clear the tag-variable change handler when `<return valueChange>` evaluates falsy

`packages/runtime-tags/src/dom/signals.ts` › `_return_change` | 2026-07-23 | impact:med | effort:low

`_return_change(scope, changeHandler)` (signals.ts:360-367) only writes
`scope[AccessorProp.TagVariableChange]` when `changeHandler` is truthy, so a
handler can be installed but never revoked. The translator emits it as a
re-runnable render statement (`src/translator/core/return.ts` ›
`translate.dom.exit`, scheduled on
`attrs.valueChange.extra.referencedBindings`), so `<return=x
valueChange=input.canEdit && ((v)=>{x=v})/>` compiles to
`_const("input_canEdit", $scope => _return_change($scope, $scope.input_canEdit
&& $valueChange($scope)))` — when `canEdit` flips false the call re-runs with
`false` and the previous closure stays installed. The parent's `v = 42` then
silently mutates through the stale handler instead of raising the documented
readonly error, and the handler is a closure from an earlier render. This also
diverges from SSR, which serializes `valueChange || void 0` (`core/return.ts` ›
`translate.html.exit`), so a server render with the same falsy condition resumes
readonly. The sibling helper `_let_change` in the same file already assigns
unconditionally (`scope[valueChangeAccessor] = valueChange`); `_return_change`
should do the same. Re-verify: with `tags/child.marko` =
`<let/x=input.value/><return=x valueChange=input.canEdit && ((v)=>{x=v})/>` and
a parent `<let/canEdit=true/><child/v value=1 canEdit=canEdit/>` plus buttons
that toggle `canEdit` and assign `v = 42`, assigning after the toggle updates
the value instead of throwing `v is a readonly tag variable.`

## Key the renderer clone cache with a null-prototype map so `Object.prototype` member names cannot be templates

`packages/runtime-tags/src/dom/renderer.ts` › `_content (cloneCache)` | 2026-07-23 | impact:low | effort:low

`_content`'s clone closure memoizes parsed template HTML with `((cloneCache[ns]
||= {})[template] ||= createCloneableHTML(template, ns))(branch, walks)`
(renderer.ts:96-101, cache declared at :154). Because the inner cache is a plain
object literal and `template` is the section's raw static HTML, a section whose
entire static markup equals an `Object.prototype` member name resolves the
inherited property instead of a cache miss: `__proto__` yields
`Object.prototype` and throws `TypeError: cloneCache[ns][template] is not a
function`, while `constructor`/`toString` yield a callable that silently does
nothing, leaving `branch[AccessorProp.StartNode]`/`[EndNode]` undefined so the
later `insertChildNodes` throws `Failed to execute 'insertBefore' on 'Node':
parameter 1 is not of type 'Node'`. The trigger is exotic but reachable from
ordinary source: `<for|w| of=input.words>constructor</for>` compiles to
`_for_of(..., "constructor", "b")` -> `_content("", "constructor", ...)`. The
fix is one line — `Object.create(null)` (or a `Map`) for the per-namespace
cache; `parseHTML`'s `parsers` object in `src/dom/parse-html.ts` has the same
shape but is keyed by namespace URI, so it is safe today and worth a comment
rather than a change. Re-verify: compile `<div><for|w|
of=input.words>constructor</for></div>` for dom and mount it with `{ words:
["a"] }` — it throws before rendering, while the same template with body text
`x` renders fine.

## Key the bound-attribute change-handler cache by refining function, not just the binding

`packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts` › `getChangeHandler` | 2026-07-23 | impact:med | effort:low

`getChangeHandler` memoizes one change-handler node per binding in the
module-level `BINDING_CHANGE_HANDLER` WeakMap, keyed only on
`binding.identifier` (set at :243 / :273, read at :208), but the
refining-function shorthand (`value:parseFloat:=x`, i.e. `attr.modifier`) is
read per attribute at the top of the same function. So for an identifier-valued
`:=`, the FIRST usage's refining function is baked into a shared handler and
every later `:=` on that same identifier reuses it verbatim — its own modifier
is computed, validated, then silently discarded. `<let/value=0><input
value:parseInt:=value><input value:=value>` compiles both inputs to the same
`$scope.$valueChange` = `_new_value => $value($scope, parseInt(_new_value))`, so
the plain input wrongly parses; reversing the order drops `parseInt` entirely;
`value:parseInt:=` followed by `value:parseFloat:=` applies `parseInt` to both.
The documented desugaring (website `docs/reference/language.md`, "Refining
function") is per-usage, and the member-expression branch of the same function
correctly re-derives per attribute (no cache), so only the identifier branch is
affected. Fix direction: make the cache key `(binding.identifier,
modifier-name-or-none)` — e.g. a nested Map — so only genuinely identical
handlers dedupe, keeping the existing `bound-attr-repeated-let` dedupe intact.
Re-verify: compile `<let/value=0/><input type="number"
value:parseInt:=value/><input type="text" value:=value/>` with `pnpm run compile
-o dom -d <file>.marko` and confirm the second `_attr_input_value` no longer
receives a `parseInt`-wrapped handler.

## Preserve `computed`/`static` when lowering registered object and class methods in DOM output

`packages/runtime-tags/src/translator/util/signals.ts` › `replaceRegisteredFunctionNode` | 2026-07-23 | impact:med | effort:low

`util/signals.ts`'s `replaceRegisteredFunctionNode` (:1673, used for DOM output
via `replaceRenderNode` at :1466) rewrites a registered
`ObjectMethod`/`ClassMethod`/`ClassPrivateMethod` into a property with
`t.objectProperty(node.key, replacement)` / `t.classProperty(node.key,
replacement)` / `t.classPrivateProperty(node.key, replacement)`, dropping the
node's `computed` and `static` flags. Its twin in `visitors/program/html.ts`
(`replaceRegisteredFunctionNode`, :244) — the HTML-output copy of the same
switch — already forwards `node.computed` and `node.static`, so the two outputs
disagree. Two consequences, both reproduced: a computed key whose expression is
reactive lowers to a scope read and then fails Babel validation with a raw
internal `TypeError: Property key of ObjectProperty expected node to be of a
type [...] but instead got "MemberExpression"` (no Marko code frame); a computed
key that stays a valid key node miscompiles silently — `<const/handlers={
[key]() { n++ } }/>` emits `{ key: $handlers($scope) }` in DOM while HTML emits
`{ [key]: _resume(...) }`, so on the client `handlers[key]` is `undefined` and
`_on(el, "click", undefined)` wires nothing. Fix: forward the flags exactly as
the html.ts copy does (and consider collapsing the two near-duplicate
`replaceRegisteredFunctionNode`/`getRegisteredFnExpression` pairs onto one
shared node-shape helper so they cannot drift again). Re-verify: compile `static
const key = "bump";` + `<let/n=0/><const/handlers = { [key]() { n++ } }/><button
onClick=handlers[key]>${n}</button>` with `-o dom -d` and `-o html -d`; today
DOM prints `{ key: ... }` and HTML prints `{ [key]: ... }`.

## Two-way binding a computed-key destructured param emits a pattern property the analyzer always rejects

`packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts` › `getChangeHandlerFromObjectPattern` | 2026-07-23 | impact:low | effort:low

When a `:=` target resolves to an object-pattern property with `computed ===
true`, `getChangeHandlerFromObjectPattern` (:373-386) appends a synthetic
property whose key is `t.binaryExpression("+", parent.get("key").node,
t.stringLiteral("Change"))`. Analyze then runs
`createBindingsAndTrackReferences`
(`packages/runtime-tags/src/translator/util/references.ts`, ObjectPattern case)
which accepts only a non-computed `Identifier` key or a `StringLiteral` key and
otherwise throws "Only identifier and string literal keys are supported when
destructuring." — so this branch can never produce a compilable template. It is
reachable exactly for a computed _string-literal_ key (all other computed keys
are already rejected with or without the binding), and there the compile error
is attributed to the synthetic node, which has no `loc`, so the caret lands on
the `<define>` tag start and never mentions two-way binding: `<define/Wrap|{
["a"]: val }|><input value:=val/></define>` fails, while the identical
`<define>` without the bound attribute compiles fine. The same branch also
reuses `parent.get("key").node` without `t.cloneNode` (every other synthesized
expression in this file clones), putting one node in two AST positions. Fix
direction: either normalize a computed string-literal key to a plain key before
synthesizing the `…Change` property (and clone the key node), or throw an
explicit diagnostic in the style of the sibling array-pattern message ("Cannot
two-way bind to `a` because it comes from array destructuring…", :226).
Re-verify: compile `<let/n="x"/><define/Wrap|{ ["a"]: val }|><input
value:=val/></define><Wrap a=n aChange(v){ n = v }/>` and observe the
destructuring-key error pointing at the `<define>` tag; deleting `value:=val`
makes it compile.

## Flush pending HTML before the `<debug>`/`<log>` statement so SSR keeps the tag's source position

`packages/runtime-tags/src/translator/core/debug.ts` › `translate.exit` | 2026-07-23 | impact:low | effort:low

In `html` output `<debug>` inserts its `debugger;` with
`tag.insertBefore(statement)` (debug.ts:48-49) without first calling
`writer.flushBefore(tag)`, so the writer's buffered markup is emitted _after_
the statement and the debugger fires before any preceding content of the
template has been written or evaluated; `core/log.ts`'s `console.log` does the
identical thing. Every other statement-emitting core tag (`core/if.ts:122`,
`core/for.ts:210`, `core/await.ts:138`, `core/try.ts:102`, `core/return.ts:89`,
`core/define.ts:115`) calls `writer.flushBefore` first, and the `dom` output
keeps source order, so SSR and CSR disagree: for `<div>${bump()}</div>` /
`<log=n/>` / `<div>${bump()}</div>` the DOM `$setup` emits `_text(...bump());
console.log(n); _text(...bump())` while the HTML render emits `console.log(n);
_html(\`<div>${_escape(bump())}</div><div>${_escape(bump())}</div>\`)`. That
contradicts the reference docs, which say `<debug>`"will be executed once the
tag renders" and`<log>`"logs … on both server and client" (website`docs/reference/core-tag.md`, `<log>`/`<debug>`headings). Add`writer.flushBefore(tag)`in the`isOutputHTML()`branch of both tags before`insertBefore`; the existing `debug-tag`fixture never surfaces this because it
contains no markup between the`<debug>`tags, so a fixture with a`<log>`/`<debug>`between two elements should be added. Re-verify:`pnpm run
compile -- -o html -d`on`<div>a</div>`/`<log="x"/>`/`<div>b</div>`currently yields`console.log("x"); _html("<div>a</div><div>b</div>");`, versus
`-o dom` which keeps the call between the two text writes.

## Drop escaped placeholders that confidently render an empty string, so the DOM walk does not gain a step for a node that is never written

`packages/runtime-tags/src/translator/util/static-text.ts` › `isStaticText` | 2026-07-23 | impact:med | effort:low

`isStaticText` classifies an escaped `MarkoPlaceholder` as a static text node
with `confident && isNotVoid(computed)` — the _attribute_ void rule (`value !=
null && value !== false`, `common/helpers.ts`) — but the text actually emitted
is `_escape(computed)` (`html/content.ts` › `_escape`: `val ? escapeXMLStr(val +
"") : val === 0 ? "0" : ""`), which yields `""` for `""`, `NaN` and `0n`.
`visitors/placeholder.ts` uses the same mismatched rule to decide removal
(`analyze`/`translate.exit`: `if (confident && isVoid(computed))
return/remove`), so such a placeholder survives, writes nothing, and still calls
`walks.enterShallow(placeholder)` — emitting an `over` step for a DOM node that
does not exist. Every later walk step in that section is then off by one:
`<div>${""}${input.x}<b/><i/></div>` compiles to `$template =
"<div><!><b></b><i></i></div>"` with `$walks = /* next(1), over(1), replace,
out(1) */`, and the `replace` lands on `<b>` and destroys it — CSR mount renders
`<div><!---->HELLO<i></i></div>` instead of `<div>HELLO<b></b><i></i></div>`,
identically in debug and optimize; the variant
`<div>${""}<b/><i>${input.x}</i><u/></div>` instead throws `TypeError: Cannot
read properties of undefined (reading 'data')` from `_text` (`dom/dom.ts`) under
MARKO_DEBUG and silently renders nothing under optimize. `${0/0}` (NaN) and
`${0n}` reproduce it too; SSR is unaffected because resume is marker-driven
(`_el_resume`), so this only bites client render and branch re-creation. Fix:
replace the `isVoid`/`isNotVoid` tests in `isStaticText`, `isEmptyPlaceholder`
and the two `placeholder.ts` drop checks with the text-coercion emptiness rule
(`computed || computed === 0`) so these placeholders are removed outright —
output-identical, since they already emit the empty string. Re-verify: `pnpm run
compile -o dom -d x.marko` on `<div>${""}${input.x}<b/><i/></div>` and on the
same template
without `${""}`; the walk comments differ (`next(1), over(1), replace, out(1)`
vs `next(1), get, out(1)`) even though the DOM the two describe is the same
shape.

## Strip the `load` import attribute from HTML output — it is emitted verbatim and Node rejects it

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `translate.exit` | 2026-07-23 | impact:med | effort:low

In the `tagImport && loadImport` branch of `translate.exit`, the HTML path
rewrites `node.source.value = tagImport` and returns without removing the `load`
import attribute, so the server module keeps `import Child from "./child.marko"
with { load: "visible.hero" };`. `load` is not a host-recognized import
attribute: evaluating such a module in Node throws `TypeError
[ERR_IMPORT_ATTRIBUTE_UNSUPPORTED]: Import attribute "load" with value "render"
is not supported`. The DOM path never leaks it (it either `importDecl.remove()`s
or replaces the declaration with a `_load_template` const), so this is a
one-sided oversight, and it is masked today only because every supported server
pipeline bundles the `.marko` import away before Node sees it — an externalized
or unbundled server module fails at import time with an error that names nothing
Marko-related. Fix: clear `node.attributes` (or remove the `load` attribute
path) in the HTML branch, mirroring what the `!getMarkoOpts().linkAssets` path
in `analyze` already does with `loadAttrPath.remove()`. Re-verify: compile a
template containing `import Child from "./child.marko" with { load:
"visible.hero" }` with `linkAssets` configured and `output: "html"` and grep the
emitted code for `with {`; then run `node` on a module containing `import d from
"./dep.mjs" with { load: "render" };`.

## Diagnose (or honor) two lazy imports of the same template with different `load` triggers in one program

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `getOrCreateHtmlLoadWrapped` | 2026-07-23 | impact:low | effort:low

`getOrCreateHtmlLoadWrapped` caches its generated wrapper in a per-program map
keyed only by `readyId`, so when one template lazily imports the same `.marko`
file twice with different triggers, the second import silently reuses the first
wrapper — including the first import's trigger list — and all of its references
are rewritten to the first wrapper's name. The DOM half does not dedupe (each
import gets its own `_load_setup` with its own trigger), so server and client
disagree about when that asset should load. The runtime already treats this as
an invariant and warns about it (`html/assets.ts` › `addAsset` logs `The lazy
asset "…" is imported with different \`load\` triggers`under MARKO_DEBUG), but
the compile-time dedupe means the second trigger set never reaches`addAsset`,
so the warning cannot fire for a same-program conflict and the mis-compile is
completely silent. Fix direction: raise a `buildCodeFrameError`on the second
import when its`LoadImportConfig`differs from the cached one (the runtime
comment says an asset can only stream one trigger script, so erroring is the
honest behavior). Re-verify: compile a template with`import A from
"./child.marko" with { load: "render" }`and`import B from "./child.marko" with
{ load: "idle" }`, both used, with `output: "html"`— only`$A_withLoadAssets`
is generated and `<B/>` compiles to `$A_withLoadAssets({})`; the same file with
`output: "dom"`emits a separate`_load_idle_trigger()` for B.

## Declare the element-getter `return=` in the `html-comment` / `html-script` / `html-style` type stubs

`packages/runtime-tags/tags/html-comment.d.marko` › `Input` | 2026-07-23 | impact:med | effort:low

`<html-comment/commentNode/>` exposes a getter for the Comment node —
`website/docs/reference/core-tag.md` › `## <html-comment>` documents it with a
worked example (`commentNode().parentNode.getBoundingClientRect()`) — and
`src/translator/core/html-comment.ts` › `analyze` implements it via
`trackDomVarReferences(tag, nodeBinding)`. But `tags/html-comment.d.marko` is
only `export interface Input {}` with no `return=` clause, so the stub
template's Return type is `void` (`@marko/language-tools` emits `return
Marko._.voidReturn` for a template with no `<return>` tag). Because the tag def
sets `types`, the language-tools script extractor routes it through the template
path and types the tag variable as `Marko._.returned(() => rendered)`, whose
signature is `<T>(rendered: () => T): T extends { return: { value: infer
Returned } } ? Returned : never` — with Return `void` that resolves to `never`,
so `commentNode()` fails type-check with TS2349 "This expression is not
callable. Type 'never' has no call signatures." `tags/html-script.d.marko` and
`tags/html-style.d.marko` have the identical gap (both compile to native
`<script>`/`<style>` through `getCanonicalTagName` in
`src/translator/visitors/tag/native-tag.ts` and accept a tag variable). Add a
`return=` to each stub the way `tags/id.d.marko` does with `return="" as string`
— e.g. `return=(null! as () => Comment)`, `() => HTMLScriptElement`, `() =>
HTMLStyleElement`. Re-verify: type-check `<html-comment/c>hi</html-comment>`
followed by `<const/x=c()/>`; with the stub unchanged the call is TS2349.

## Carry the Class-API compat boundary mode per call site instead of downgrading the whole program

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `pushCompatRegistration` | 2026-07-27 | impact:low | effort:med

`preserveBoundary` is a per-call-site decision (`!tagsSerializeReason && …`)
but `s(id, renderer, mode)` is emitted once per renderer, and
`boundaryModeByRenderer` in
`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js` is
keyed by renderer as well. The order-dependence this caused is fixed — a call
site that cannot preserve now drops the mode for the whole program, and
`register` keeps a plain `true` sticky across modules — but the fix is a
downgrade, so one updating call site costs every inert call site of that class
its split-component optimization. Carrying the mode on the per-call-site
`_dynamic_tag` invocation instead would keep both, at the cost of a parameter on
a helper every dynamic tag pays for; measure before taking it. Re-verify: the
`interop-mixed-boundary-split-tags-to-class` fixture emits `s(…, renderer)`
with no `"preserve"`, while `interop-self-interactive-split-tags-to-class`,
whose only call site is inert, still emits it.

## Enable branch machinery for spread `content=` branches; `_attr_content` creates branches without it

`packages/runtime-tags/src/dom/dom.ts` › `_attr_content` | 2026-07-23 | impact:low | effort:med

`_attr_content` (dom.ts:366, reached both from
`_attrs_content`/`_attrs_partial_content` — a native tag spread carrying
`content` — and directly for a plain static `content=` on a native tag
(native-tag.ts:963 render statement, `:568` for HTML)) creates a live branch via
`setConditionalRenderer(scope,
nodeAccessor, content, createAndSetupBranch)`, but it is the only client branch
creator that never reaches `enableBranches()`; `_if` (control-flow.ts:438),
`_show` (:470), `_dynamic_tag` (:534), `_dynamic_tag_content` (:647) and `loop`
(:788) all call it in their factory, and `<try>`/`<await>` get it through
`_enable_catch` (queue.ts:193). `enableBranches()` (resume.ts:67) does two
load-bearing things: it installs `skipDestroyedRenders()` (queue.ts:177), the
only guard that stops a queued render from running on a scope inside a destroyed
branch, and it sets `branchesEnabled`, which `initScope` (resume.ts:137) uses to
link a resumed scope's serialized `#ClosestBranchId` to its branch and which
gates branch-visit processing (resume.ts:401). A template whose only branch
construct is a spread `content=` therefore runs with all of that off. Because
the enable must happen at module eval (before resume processes visits), the fix
is a translator-emitted enable at every site that emits `_attr_content` — both
the `_attrs_content`/`_attrs_partial_content` spread sites and the plain
`content=` site — the same shape as the existing top-level
`_enable_catch()`/`_resume_dynamic_tag()` statements, not a call inside the
per-render helper; while there, note `_attr_content` is a near-verbatim
duplicate of `_dynamic_tag_content` (control-flow.ts:641: same renderer-id
compare, same `setConditionalRenderer`, same `subscribeToScopeSet`, same
`LocalClosures` loop), so routing one through the other fixes the gap and drops
one of two ~243/~279-minified-byte copies of the same algorithm. `compat.render`
(dom/compat.ts:133) calls `createAndSetupBranch` with the same omission.
Re-verify: compile `<define/Wrap|input|><div ...input/></define>` plus `<Wrap
class="x"><b>x</b></Wrap>` with `pnpm run compile -o dom -d <file>` — the import
list is `_attrs_content, _attrs_script, _text, _on, _script, _const,
_closure_get, _content, _closure, _let, _template`, containing no helper that
enables branches, yet `_attr_content` creates a `BranchScope` at mount.

## Align the spread `<input>` controllable ladders in HTML `_attrs` and DOM `attrsInternal`

`packages/runtime-tags/src/html/attrs.ts` › `_attrs` | 2026-07-23 | impact:med | effort:med

The two runtimes pick a spread `<input>`'s controllable with different
conditions: HTML `_attrs` (`html/attrs.ts:276-306`) branches on the _change
handler_ (`data.checkedChange` → `"checkedValue" in data ||
data.checkedValueChange` → `data.valueChange`), while DOM `attrsInternal`
(`dom/dom.ts:269-299`) branches on _key presence_ (`"checked" in nextAttrs ||
"checkedChange" in nextAttrs` → `"checkedValue" in … || "checkedValueChange" in
…` → `"value" in … || "valueChange" in …`). A spread carrying a bare `checked`
alongside a `value`/`valueChange` pair therefore takes different branches: SSR
falls to the value branch, writes ` value=x`, and serializes
`ControlledType.InputValue` plus the handler, while CSR takes the checked branch
whose `skip` is only `/^checked(?:Value)?(?:Change)?$/`, so `valueChange` falls
through to `_attr(el, "valueChange", fn)` — which throws "The `valueChange`
attribute cannot be a function…" under MARKO_DEBUG (`common/errors.ts:18-25`)
and, with MARKO_DEBUG stripped, stringifies the function into a
`valueChange="function …"` attribute while the two-way binding is silently lost.
`assertExclusiveAttrs` does not catch it (`{checked, value, valueChange}` yields
a single exclusive attr, so length is 1) and the translator's compile-time
`assertExclusiveAttrs(seen, …)` at `visitors/tag/native-tag.ts:197` only sees
static attributes, so nothing rejects the combination earlier. Pick one
canonical condition (or extract a single shared tag-name→controllable predicate
used by both runtimes) and add a spread fixture for the combination. Re-verify:
render `<input ...input.attrs>` with `input.attrs = { checked: false, value:
"x", valueChange(v) {} }` — SSR emits `<input value=x>` with a controlled scope,
while the same template mounted in CSR throws the change-handler error in debug
(and writes a `valueChange` attribute in optimize).

## Lowercase the dynamic native tag debug accessor so SSR resume matches `getDebugKey`

`packages/runtime-tags/src/dom/control-flow.ts` › `_dynamic_tag` | 2026-07-23 | impact:med | effort:low

Under `MARKO_DEBUG`, a dynamic native tag's element accessor is built from the
raw renderer string at four sites — `html/dynamic-tag.ts` › `_dynamic_tag` (`` `#${renderer}/0` ``, used for `_attrs`, the
`EventAttributes`/`ControlledHandler` lookups and the `BranchEndNativeTag`
marker), `dom/control-flow.ts` › `_dynamic_tag` (`` `#${normalizedRenderer}/0` ``), `createBranchWithTagNameOrRenderer`, and `dynamicTagScript` — but the
resume path stores the element under `getDebugKey(0, startVisit)`
(`dom/resume.ts` › `init`, inside `createVisitBranches`, ~l.228), and
`getDebugKey` (`dom/walker.ts`) lowercases via `` `#${(node as
Element).tagName.toLowerCase()}/${index}` ``. For any tag name that is not
already lowercase — notably SVG camelCase elements, whose `tagName` preserves
case (`linearGradient`, `clipPath`, `foreignObject`) — the two disagree: resume
writes `#lineargradient/0` while the client signal reads `#linearGradient/0`, so
`scope[accessor]` is `undefined` and `_attrs`/`_attrs_script` (`dom/dom.ts`)
dereference it (`el.attributes`, `_on(el, …)`) and throw on the first resumed
interaction or update. Production is unaffected (both sides use the constant
`"a"`), so this is a debug-only hard failure on an SSR-resumed `<svg><${tagName}
onClick(){}>`; the static-tag path already gets this right by lowercasing in the
translator (`translator/visitors/tag/native-tag.ts` `"#" +
tagName.toLowerCase()`, covered by the `svg-camelcase-accessors` fixture, whose
DOM bundle emits `$scope["#lineargradient/0"]`). Fix by applying
`.toLowerCase()` to the renderer string at all four `#${…}/0` construction sites
so they agree with `getDebugKey` and the translator convention. Re-verify: add a
fixture `<svg><${"linearGradient"} onClick(){ … }><stop offset="0%"/></></svg>`
with a click step and run it in debug SSR-resume mode — it throws inside
`_attrs_script` because `scope["#linearGradient/0"]` is undefined, while the
same template renders fine in CSR-only mode.

## Stop double-escaping character references in a static `<textarea>` body

`packages/runtime-tags/src/translator/core/textarea.ts` › `preAnalyze` | 2026-07-23 | impact:med | effort:med

`preAnalyze` folds a `<textarea>` body into a synthetic `value` attribute by
pushing each `MarkoText` child's raw source `child.value` into
`normalizeStringExpression`, so authored markup text becomes a JS string literal
that `_textarea_value` (`packages/runtime-tags/src/html/attrs.ts:133`,
`_escape(normalizeStrAttrValue(value))`) then escapes again. Character
references therefore double-escape: `<textarea>&lt;p&gt;hi&lt;/p&gt;</textarea>`
emits `&amp;lt;p&amp;gt;hi&amp;lt;/p&amp;gt;` and the user sees the literal text
`&lt;p&gt;hi&lt;/p&gt;`, while the identical body in `<title>` or `<div>` is
written through verbatim and renders `<p>hi</p>`. Because `<textarea>` is parsed
as a text-only tag, entities are the only way to author literal markup inside
it, so this makes the common "seed an editor with escaped HTML" case
unrepresentable, and it contradicts native-tag.md's "In HTML, `<textarea>` holds
its value inside its body". Both SSR and CSR agree with each other (the DOM path
passes the same literal to `_attr_textarea_value_default`), so only the
body-vs-attribute semantics are wrong; the fix is to decode character references
in `MarkoText` children before pushing them into `parts` — `he`'s `decode` is
already a `@marko/compiler` dependency and is used for exactly this by the Marko
5 translator (`packages/runtime-class/src/translator/text/index[vdom].js`).
Re-verify: compile `<textarea>a &amp; b</textarea>` with `-o html` and check the
emitted `_textarea_value("a &amp; b")`; at runtime it returns `"a &amp;amp; b"`,
where the correct output is `"a &amp; b"` (matching `<title>a &amp; b</title>`,
which compiles to raw static text).

Confirmed, and the effort is not low: the fix needs the static text decoded at
compile time (CSR needs it too, since `_attr_textarea_value_default` assigns the
literal to `el.defaultValue`), but `MarkoText.value` is raw source with no
decoded form, `htmljs-parser` exposes no decoder, and the only one in the tree is
`he` under `packages/compiler/node_modules` — unreachable from the translator and
100KB, currently tree-shaken out of the compiler bundle. Using it means a new
`babel-utils` export and that 100KB in the build-time bundle; weigh that against
how rare authoring entities in a `<textarea>` is. Re-verify: compile
`<textarea>&lt;p&gt;hi</textarea>` with `-o html`; the emitted literal is
`_textarea_value("&lt;p&gt;hi")`, which escapes to `&amp;lt;p&amp;gt;hi`.

## Custom tag with a tag variable evaluates its child render before attribute tag statements (TDZ crash)

`packages/runtime-tags/src/translator/util/known-tag.ts` › `knownTagTranslateHTML` | 2026-07-24 | impact:med | effort:med

For a custom tag with both a tag variable and attribute tags under control flow
(eg `<my-menu/menuEl><for|x| of=list><@item label=x/></for></my-menu>`), the
HTML output emits `let menuEl = _myMenu({ item: $item })` via `translateVar`'s
`tag.insertBefore` _before_ the `let $item; forOf(...)` statements produced by
`translateAttrs`, so the render call reads `$item` in its temporal dead zone
and SSR throws a ReferenceError. The DOM output has the same ordering problem.
The call needs to be sequenced after the attr-tag statements (as the
non-tag-variable path does by pushing the call onto `statements`).
Re-verify: compile the template above with `pnpm run compile -o html -d` and
observe the call precedes the `$item` declaration.

## Reject (or support) assignments to attribute tag `<for>` params inside event handlers

`packages/runtime-tags/src/translator/util/references.ts` › `trackAssignment` | 2026-07-24 | impact:low | effort:low

An assignment like `<@item onClick() { foo = "x" }>` where `foo` is an
attribute-tag `<for>` param (BindingType.local) is routed through the
change-handler assignment path, generating code that calls a nonexistent
change handler and throws at click time. Reads of such params in handlers now
work (see `referencedLocalBindingsInFunction`), which makes the silent write
failure more confusing by contrast. Since these loops re-run wholesale on
input change, assignment has no meaningful reactive semantics; a compile
error in `trackAssignment` when `binding.type === BindingType.local` would
be cheap and clear. Re-verify: compile the template above with
`pnpm run compile -o dom -d` and inspect the emitted assignment.

## Declare `pipe`, `catch` and `finally` on `RenderedTemplate`

`packages/runtime-tags/src/common/types.ts` › `RenderedTemplate` | 2026-07-27 | impact:med | effort:low

`RenderedTemplate` is `PromiseLike<string> & AsyncIterable<string> & { toReadable() }`, but `ServerRendered` in `html/template.ts` also implements `pipe`, `catch`, `finally` and a synchronous `toString`. `PromiseLike` supplies only `then`, so TypeScript rejects `result.catch(...)` and `result.finally(...)`, and `pipe` — the Node streaming entry point — is not on the type at all: `template.render(input).pipe(res)` fails to compile with TS2339 and callers have to cast. `__tests__/render-result.test.ts` carries a local `ServerResult` intersection for exactly this reason, and it should be deleted once the public type is widened. Widening is safe: the DOM build's `render` only throws (`dom/template.ts` line 35), so `RenderedTemplate` is only ever produced by the HTML build. Re-verify: `const r = template.render({}); r.pipe(process.stdout);` in a `.ts` file, then `pnpm run build:types`.

## A backslash-escaped quote in a `<style>` body swallows the rest of the file

`packages/runtime-tags/src/translator/core/style.ts` › `style` | 2026-07-27 | impact:low | effort:med

`<style>\n  .a\" { color: red }\n</style>` fails to compile with `EOF reached while parsing string expression`, and the caret points at the _next_ line's `<div class="a">` rather than the escape. The `"` is read as opening a string expression even though a backslash precedes it, so everything after it is consumed; `\'` inside a CSS string (`content: 'it\'s'`) fails the same way. Escaped quotes in selectors are legal CSS and are what utility frameworks emit for class names containing quotes, so this is a real if narrow miscompile, made worse by a diagnostic that names an unrelated line. A CSS unicode escape is unaffected (`content: "an \2014 escape"` compiles), which points at the quote-handling specifically rather than backslashes generally. Like the unenclosed-`>` entry above, the token rule lives in the external `htmljs-parser`, so the fix is likely honouring the backslash there or marking the `<style>` body as raw text. Re-verify: `pnpm run compile -o html -d <file>` on the snippet above.

## Resolve `<show>`'s client range at toggle time; an `<if>`/`<for>` body deletes the marker nodes it cached

`packages/runtime-tags/src/dom/control-flow.ts` › `_show` | 2026-07-27 | impact:high | effort:med

On a client render (`mount()`, no resume payload) `_show` derives its range once from the template's static shape and caches it in `scope[AccessorPrefix.BranchScopes + nodeAccessor]`: `parentNode.firstChild`/`lastChild` when the `<show>` is an only child, otherwise `scope[startNodeAccessor]` and `referenceNode.previousSibling`. The show signal runs before any control flow inside its body, and `_if`/`loop` then delete exactly those markers (both end with `referenceNode.remove()`), so the cached `StartNode`/`EndNode` are detached and the range silently degenerates — `removeChildNodes`/`toInsertNode` in `dom/dom.ts` stop at `endNode.nextSibling`, which is `null` for a detached node. Concretely, a sibling `<show>` wrapping an `<if>` removes everything from its start marker to the end of the parent on hide and then never restores (`referenceNode` is now parked in the same fragment, so `parentNode` recomputes to that fragment, `inDom` reads true, and the toggle is a no-op), while an only-child `<show>` wrapping a `<for>` never hides at all; nothing throws in either case, and the resumed SSR path stays correct because its range comes from the branch resume marks. Since the docs recommend `<show>` for exactly this kind of bulky, stateful content, stop caching the client-derived range and resolve it at each toggle (only child: current `firstChild`/`lastChild`; sibling: `scope[startNodeAccessor]` .. `referenceNode.previousSibling`) — accounting for a nested `<show>` toggled while its outer range is parked in a fragment, as `show-tag-nested` covers — or have the translator give `<show>` its own boundary markers the way `<for>`/`<if>` branch content already gets `<!>`. Re-verify: add a fixture whose `template.marko` is `<let/visible=true/><button id="t" onClick() { visible = !visible }>t</button><div id="c">x <show=visible><if=true><b>B</b></if></show> y</div>` with `steps` clicking `#t` twice, then run `pnpm run test:update -- --grep "runtime-tags/translator <name> "` — the `csr` test fails with `Snapshot conflict: "render.debug.md" was written with different content by two tests` (SSR removes and restores just the `<b>`; CSR's first click also eats the trailing `" y"` and its second click does nothing), while the identical fixture with a plain `<b>B</b>` body instead of the `<if>` updates cleanly.

## Catch effect errors in `runEffects` — a throwing `<script>` escapes `<try>`'s `@catch` and kills every effect queued behind it

`packages/runtime-tags/src/dom/queue.ts` › `runEffects` | 2026-07-27 | impact:med | effort:med

`_enable_catch` wraps `runRender` in a `try`/`catch` that routes errors to `renderCatch`, but the `runEffects` it installs alongside only filters destroyed/pending scopes and never catches, the base `runEffects` is a bare `for` loop, and `run()` calls it outside its own `try`/`finally`. An error thrown from a `<script>`/`<lifecycle>` effect inside a `<try>` therefore never reaches `@catch` — it escapes `mount()`, or surfaces as an uncaught error out of the scheduler microtask on an update — and it aborts the rest of the flush, so unrelated components whose effects were queued behind it silently never wire up (and the same truncation repeats every flush). That contradicts the `<try>` docs ("When a runtime error occurs in the content of the `<try>` … the content is replaced with the content of the `@catch`"), and nothing covers it: `try-effects-catch`, `try-effects-catch-state` and `try-effects-async` all throw from render expressions, never from an effect body. Direction: give the `_enable_catch` `runEffects` wrapper the same per-item `try { fn(scope) } catch (e) { renderCatch(scope, e) }` treatment `runRender` gets so one bad effect is contained to its own boundary; a fix must also settle sequencing, since `renderCatch`'s `caughtError.add(pendingEffects)` and the catch branch's own queued effects land in the fresh array `run()` already swapped in, which nothing flushes. Re-verify: compile `<try><for|item| of=["a","b","c"]><div id=item>${item}</div><script>{ globalThis.order.push(item); if (item === "a") throw new Error("boom") }</script></for><@catch|err|><div id="err">caught ${err.message}</div></@catch></try>` with `pnpm run compile -o dom -d t.marko` and `mount({}, document.body)` it in jsdom with `globalThis.order = []` — `mount()` itself throws `boom`, `order` is `["a"]` (the `b`/`c` effects never run), and no `#err` element is ever rendered.

## Delegate events from the element's root node again; nothing inside a ShadowRoot receives events or controlled-input updates

`packages/runtime-tags/src/dom/event.ts` › `delegate` | 2026-07-27 | impact:med | effort:low

`delegate` installs exactly one capture listener on `document` (`(handler as any)[type] ||= (document.addEventListener(type, handler, true), 1)`), replacing an earlier `createDelegator()` that registered per `node.getRootNode()` via a `Symbol`-keyed map on that root; the change was made for bundle size and never accounted for shadow trees. At the document level an event originating inside a shadow tree is retargeted to the host, so `handleDelegated`'s `ev.target` `parentNode` walk and `controllable.ts` `handleChange`'s `(ev.target as any)._` both see the host rather than the real element — every `on*` handler and every two-way-bound `<input>` inside a `ShadowRoot` is silently dead while the identical template in the light DOM works, and no `getRootNode()` call remains anywhere in the runtime (`syncControllableFormInput` now calls `delegate("input", …)`/`delegate("reset", …)` unnamed, and `setInputValue` reads `document.activeElement`). This is a different defect from `Default a nullish namespace in parseHTML: mounting into a DocumentFragment/ShadowRoot creates null-namespace elements`, which is about `createElementNS`, and from `Prefix delegate's registration flag so event types named after Function properties register`, which is about the memo key — this one is about _where_ the listener is installed. The two are coupled: moving the per-type flag into a map on the root removes the `(handler as any)[type]` keyspace entirely, so the per-root fix closes the `Function.prototype` collision as a side effect and the two should be fixed together rather than separately. Direction: restore the per-root delegator — `_on` already has the element and `syncControllableFormInput` has `el`, so both can pass a node, register on `node.getRootNode()`, and track the per-type flag in a map on the root instead of on the shared handler function. Re-verify: compile `<let/count=0/><button onClick(){ count++ }>count: ${count}</button>` for `dom`, mount it into a plain `<div>` appended to `host.attachShadow({ mode: "open" })` and into a light-DOM `<div>` (a plain wrapper `<div>` keeps the `parseHTML` namespace issue out of the picture), then dispatch `new MouseEvent("click", { bubbles: true, composed: true })` on each button — the light copy reads `count: 1` and the shadow copy stays `count: 0`.

## Write the dynamic `<style>` marker class with `setAttribute`; a `<style>` inside `<svg>` throws on client render

`packages/runtime-tags/src/dom/dom.ts` › `_style_shell` | 2026-07-27 | impact:med | effort:low

`_style_shell` tags the generated stylesheet with `element.className = id`, but `SVGElement.className` is a readonly `SVGAnimatedString`, so in the runtime's strict-mode ESM that assignment throws `TypeError: Cannot set property className of #<SVGElement> which has only a getter`. A `<style>` with any `${…}` value nested inside `<svg>` is legal Marko — `<let/c="red"/><svg><style>circle { fill: ${c}; }</style><circle cx=5 cy=5 r=4/></svg>` compiles to `_style_shell($scope, "#style/0")` in `$setup` — so every client-created render of such a template (a `mount`, or a branch an `<if>`/`<for>` creates on the client) dies before anything is inserted, while SSR and resume are fine because `html/attrs.ts` › `_style_html` emits the marker as markup (`<style class=ID>`) and `_style_rule_item` only ever rewrites `textContent`. The same construct outside an `<svg>` mounts cleanly, so the failure looks like "SVG breaks dynamic styles" rather than a property-vs-attribute mismatch, and no fixture covers it. Direction: write the marker with `element.setAttribute("class", id)` in `_style_shell` so both outputs set the same attribute regardless of namespace. Re-verify: with jsdom globals installed, parse `<svg><style></style></svg><style></style>` and call `_style_shell({ s: el, $global: { runtimeId: "M", renderId: "_" } }, "s")` for each `<style>` — the `http://www.w3.org/2000/svg` one throws the TypeError above while the XHTML one becomes `<style class="cM_0">.cM_0~*{}</style>`.

## Guard the empty class-object key: `class={ "": v }` renders nothing on the server and throws on the client

`packages/runtime-tags/src/dom/dom.ts` › `_attr_class_item` | 2026-07-27 | impact:low | effort:low

`_attr_class_item` lowers a class-object entry to `element.classList.toggle(name, !!value)`, which throws `SyntaxError: The token provided must not be empty` for an empty token. The translator only diverts _whitespace-bearing_ object keys away from the per-item helper — `trackDelimitedAttrObjectProperties` in `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` tests `!/\s/.test(keyEval.computed)` — and `""` passes that test, so `<div class={ "": count % 2 }>` compiles with `-o dom` to `_attr_class_item($scope["#div/0"], "", …)` and the first CSR render throws, taking the whole mount down (a scoped fixture run of that template fails its `csr` step with exactly that `SyntaxError`). SSR meanwhile emits `_attr_class({ "": count % 2 })`, which drops the key and renders cleanly, so the page only dies on hydrate or on the first update — a hard crash where either a compile error or a no-op belongs. Widening the guard to `!/^$|\s/.test(...)` routes the empty key into the whole-object `_attr_class` path, which already ignores it (`_attr_class({ "": true, foo: true })` yields `" class=foo"` on both runtimes); the style side needs no change, since `style.setProperty("", v)` is a silent no-op. Re-verify from the repo root: `node -r ~ts -e 'const {JSDOM}=require("jsdom"); global.document=new JSDOM("<div></div>").window.document; console.log(JSON.stringify(require("./packages/runtime-tags/src/html/attrs.ts")._attr_class({"":true}))); require("./packages/runtime-tags/src/dom/dom.ts")._attr_class_item(document.querySelector("div"), "", true)'` prints `""` for the SSR path and then throws on the DOM path.

## Re-check serialized `$global` values after the first flush; `flushSerializer` latches `hasGlobals` even when it emitted nothing

`packages/runtime-tags/src/html/writer.ts` › `flushSerializer` | 2026-07-27 | impact:med | effort:low

`flushSerializer` sets `state.hasGlobals = true` before it knows whether any global was actually emitted, so a render whose allow-listed `$global` keys are all still `undefined` at the first serializer flush permanently latches "globals already sent" and never re-checks. A value assigned to `$global` later in the render — e.g. from a `<const>` inside `<await>`/`<try>` content, the same shape the `basic-flush-here` fixture uses for `$global.__flush__` — is then dropped from the resume payload, so the client reads `undefined` where the server had a value. The divergence is streaming-only and silent: the same template awaited as a promise flushes once at the end and serializes the value correctly, so `pipe()` and `await` disagree on identical input. The sibling `flushSerializerGlobals` gets this right (`if (globals) { state.hasGlobals = true; … }`), and moving the assignment inside the `if (globals)` guard in `flushSerializer` fixes every case where a later flush still has scopes to write. It does not cover a global that first becomes defined after the last scope-carrying flush, because `flushSerializer` returns early when both `serializeState.flushScopes` and `serializer.pending()` are false — that case needs an explicit globals re-check on the final flush. Re-verify: SSR-render `<let/n=0/><button onClick(){n++}>${n}</button><await|v|=input.p><const/_=($global.late="LATE")/><let/m=v/><button onClick(){m++}>${m}</button></await>` with `$global.serializedGlobals=["late"]` and an `input.p` that resolves on a later tick; the concatenated `pipe()` chunks contain no `[0,{late:…}` entry, while `await`ing the same render emits `_=>[0,{late:"LATE"},{n:0},{m:5}]`.

## Isolate `flushTickQueue` callbacks; one render whose sink throws silently disables progressive streaming for every other concurrent render

`packages/runtime-tags/src/html/writer.ts` › `flushTickQueue` | 2026-07-27 | impact:med | effort:low

`queueTick`/`flushTickQueue` share one module-level `tickQueue` `Set` across every in-flight render in the process, and `flushTickQueue` runs `cb(true)` in a bare `for…of` with no error isolation. Those callbacks are `ServerRendered.#read`'s `onNext` (`html/template.ts`), which drives the consumer's sink — `stream.write`/`stream.flush?.()` in `pipe`, `stream.end()` on close — so one sink that throws aborts the loop and drops every remaining render's callback; because each victim already set its own `tick = false` before queueing and `#read` only re-arms under `else if (tick)` (and `offTick` is a no-op once `flushTickQueue` has cleared `tickQueue`), those renders never queue again and lose _all_ subsequent progressive flushes, emitting one combined chunk at completion. Concurrent renders are the normal case on a server, so a single misbehaving `pipe` target silently degrades streaming for unrelated pages with no error surfacing on the victims. Direction: wrap `cb(true)` in try/catch and rethrow asynchronously so a broken sink cannot take the shared queue down, and/or re-arm `tick` from a `finally` in `#read`. Re-verify: compile two SSR templates with `pnpm run compile -o html -d` — A = `<div>A-head</div>` plus one `<await>`, B = `<div>B-head</div>` plus three staggered `<await>`s — and `pipe` B to a logging sink; B alone writes four chunks (head, then one per await), but with A concurrently piped to `{ write() { throw new Error("boom"); }, end() {} }` B writes nothing until it completes and then emits a single combined chunk.

## Splice page assets after the doctype; a page entry with no literal `<head>` writes `<link>`/`<script>` ahead of `<!doctype html>` and the document parses in quirks mode

`packages/runtime-tags/src/html/assets.ts` › `flush` | 2026-07-27 | impact:med | effort:low

`flush` ends with `return result + html`, so when it runs as the `$global.__flush__` prefix hook installed by `withPageAssets` it blindly prepends the page's asset markup to whatever `Chunk.flushHTML` produced (`html/writer.ts` › `Chunk.flushHTML`). That fallback — documented as "at the end of `<head>` when rendered, otherwise before the first flush" — is only avoided when `_flush_head()` has already drained the queue, and the translator emits `_flush_head()` solely at the close of a _literal_ native `<head>` (`translator/visitors/tag/native-tag.ts` › the `tagName === "head" && getMarkoOpts().linkAssets` branch of `translate.html.exit`). A page entry that legally omits `<head>` (`<!doctype html><html><body>…`) compiles with no diagnostic and renders `<link …><script …><!doctype html>…`; an HTML parser ignores a DOCTYPE that follows content, so the doctype is dropped and the entire document silently renders in quirks mode. The fix can stay in the runtime: skip a leading `<!doctype …>` in `html` before splicing `result` in — assets placed after the doctype but before `<html>` are hoisted into the implicit `<head>` and the document stays no-quirks. This is a different defect from the entry "Track 'a page already owns this $global' with a durable marker; `__flush__` is cleared at the first flush", which is about *nested* page renders taking the wrong `withPageAssets` branch; here the top-level page entry takes the correct branch and the prepend itself is the bug. Re-verify: compile `<!doctype html><html><body><h1>hi</h1></body></html>` with `output: "html"` plus `linkAssets: { runtime, onAsset() {} }`, wrap the default export in ``withPageAssets(tmpl, (g, type, id) => type === "block" ? `<link href="/${id}.css" rel=stylesheet>`:`<script src="/${id}.js"></script>`, "entry")`` and render it — the string begins `<link href="/entry.css" rel=stylesheet><script src="/entry.js"></script><!doctype html>…`, and adding a `<head>` to the template moves both tags inside it.

## Give deferred Map/Set insert arguments an eager binding — reusing one in a later flush crashes `assignId` on a null parent

`packages/runtime-tags/src/html/serializer.ts` › `writeCallArg` | 2026-07-27 | impact:med | effort:low

When a `Map`/`Set` member references an ancestor, `deferCall` moves the remaining entries out of the constructor into post-construction `.set(...)`/`.add(...)` calls, and `writeAssigned` writes each argument through `writeCallArg` as `writeProp(state, val, null, "")` — no parent, no accessor. The `Reference` left in `state.refs` (or `state.strs`, for a >12-char string) therefore has neither an id nor an accessor path, so when that value is serialized again in a later flush `assignId` skips its `pos` fast path (`ref.flush !== state.flush`) and walks `const parent = cur.parent!`, which is `null`, throwing `TypeError: Cannot read properties of null (reading 'id')` (serializer.ts:2205) out of `stringifyScopes`; since `Boundary.flush` calls `stringifyScopes` unguarded, the stream dies on an internal stack trace rather than emitting a reference. Both sibling paths already get this right — `writeArrayArg` binds the backing array (`new Set(_.a=[…])`) precisely so constructor-path members stay reusable, and the channel-mutation branch of `writeAssigned` does `valueRef.id = mutation.valueId || nextRefAccess(state)` under the comment "Reused mutation values require eager bindings because they lack an accessor path" — so `writeCallArg` should claim the same eager id for any argument that lands in `state.refs`/`state.strs`. Re-verify: with `const root = {}, inner = new Set(); root.k0 = new Set([40, root, inner]);` and a single `Serializer`, `ser.stringifyScopes([[1, {}, { value: root }]], boundary)` emits `_=>(_([1,{value:_.b={k0:_.a=new Set([40])}}]),_.a.add(_.b),_.a.add(new Set),0)` and the follow-up `ser.stringifyScopes([[2, {}, { value: inner }]], boundary)` throws in `assignId`; the same holds for a Map key or value, for a long-string argument, and for any value nested inside a deferred argument (`root.s = new Set([root, { wrap: deep }])`, then flush `deep`). Reusing the value within the same flush is fine, so only cross-flush streaming is affected, and `src/__tests__/serializer.test.ts` covers each ingredient separately (`describe("collection members referencing an ancestor")`, `it("dedupe values across flushes")`) but never together.

## Preserve an Error's own enumerable properties through resume — only `message` and `cause` survive

`packages/runtime-tags/src/html/serializer.ts` › `writeError` | 2026-07-27 | impact:med | effort:med

`writeError` emits exactly `new <Ctor>(message[, {cause}])`, so every own enumerable property an application hung on an error — the `status`/`code`/`details` fields HTTP and Node errors carry, and an assigned `name` — is silently dropped on resume; `writeAggregateError` has the same gap. This is reachable from idiomatic source: `<try><@catch|err|><button onClick() { report(err) }>` compiles to `_scope($scope2_id, { err })` (the whole error, not a narrowed member read like `err.status`, which the translator does serialize correctly as its own slot), so the server renders `err.status === 404` while the resumed client handler reads `undefined`, with no diagnostic. Plain objects round-trip all own enumerable props and the serializer already works to preserve `cause` and relink `AggregateError.errors`, so error payloads are clearly meant to survive — extend both writers to append the remaining own enumerable props, reusing the existing deferred-assignment path (`addAssignment`) for circular ones and emitting nothing extra when there are none so an ordinary error costs no bytes. Worth deciding at the same time: an error subclass (`class HttpError extends Error {}`) misses the constructor dispatch entirely and is dropped from the payload rather than losing only its extras. Re-verify from the repo root: `node -r ~ts -e 'const {Serializer}=require("./packages/runtime-tags/src/html/serializer.ts");console.log(new Serializer().stringifyScopes([[1,{},{value:Object.assign(new Error("boom"),{status:404,name:"HttpError"})}]],{signal:{aborted:!1}}))'` prints `_=>[1,{value:new Error("boom")}]`.

## Preserve object key order when a circular property is deferred

`packages/runtime-tags/src/html/serializer.ts` › `writeObjectProps` | 2026-07-27 | impact:low | effort:med

When a property's value is circular, `writeReferenceOr` queues a deferred assignment and returns `false`, so `writeObjectProps` pops the already-pushed `key:` chunk and `writeAssigned` re-creates the property at the end of the payload — moving it to the end of the object's key order. Plain objects are the only container that does this: `writeArray` keeps the slot (the `,` separator is already emitted, so the hole survives and the assignment fills it in place), and `writeMap`/`writeSet` deliberately defer every later entry once one defers, with the comment "Once an entry must defer, every later entry defers too so insertion order is preserved" and matching tests in `__tests__/serializer.test.ts` ("preserves Map key order around a deferred entry", "preserves Set insertion order around a deferred member"). Key order is observable — `common/for.ts` › `forIn` is `for (const key in obj)`, so `<for|k,v| in=obj>` renders one order on the server and another after resume, and `Object.keys`/`JSON.stringify` diverge too: a fixture with `<let/graph=makeGraph()>` where `makeGraph` returns `{ title: "t", self: null, count: 3 }` with `root.self = root`, plus `<const/keys=n + ":" + Object.keys(graph).join(",")>` and a button doing `n++`, renders `0:title,self,count` and updates to `1:title,count,self` on resume while pure CSR keeps `title,self,count`, so its `render.debug.md` snapshots disagree between the ssr and csr runs. The cheap fix matching the array behavior is to leave an `undefined` placeholder (`key:$`, setting `state.wroteUndefined`) instead of popping the chunk when the failed write queued an assignment, so the later `_.a.self=_.a` overwrites in place; that needs `writeProp`'s boolean return to distinguish "deferred" from "elided" (an `undefined` or unserializable value must still be popped). Re-verify from the repo root: `node -r ~ts -e 'const {Serializer}=require("./packages/runtime-tags/src/html/serializer.ts");const o={title:"t",self:null,count:3};o.self=o;console.log(new Serializer().stringifyScopes([[1,{},{graph:o}]],{signal:{aborted:false}}))'` prints `_=>(_([1,{graph:_.a={title:"t",count:3}}]),_.a.self=_.a,0)` — `self` last instead of second.

## Escape a carriage return in an attribute value so SSR and CSR agree

`packages/runtime-tags/src/html/attrs.ts` › `attrAssignment` | 2026-07-27 | impact:low | effort:low

`attrAssignment` picks the quoting and escapes only `"`/`'`/`&`, but the HTML input-stream preprocessor normalizes every CR and CRLF inside an attribute value to a single LF, so a `\r` never survives SSR: `_attr("data-x", "a\rb")` and `"a\r\nb"` both parse back as `"a\nb"`, while CSR (`dom/dom.ts` › `_attr` → `setAttribute`) writes the `\r` verbatim. The two halves therefore disagree on every attribute — `_attr`, `_attrs`, `_attr_class`, and `_attr_style` all funnel through this escaper — and a controlled `<input value=…>` resumes with a `defaultValue` the server never rendered. Writing `\r` as `&#13;` survives, because character references are decoded after newline normalization; weigh that against the bytes it costs every attribute, since a lone CR in attribute data is rare. A U+0000 in the value is separately replaced with U+FFFD and is _not_ fixable by escaping (`&#0;` also decodes to U+FFFD), so the only option there is a MARKO_DEBUG warning. This is a different defect from the entry "Escape a carriage return in a `<textarea>` body so SSR and CSR agree", which concerns textarea _text_ content and the `_escape` path rather than the attribute-value escaper. Re-verify: under `node -r ~ts`, build `"<div" + _attr("data-x", "a\rb") + "></div>"` from `src/html/attrs.ts` and parse it with jsdom — `getAttribute("data-x")` is `"a\nb"`, while `el.setAttribute("data-x", "a\rb")` on a plain `<div>` keeps `"a\rb"`.

## Escape debug scope accessors that collide with `AccessorProp` — a binding named `_` overwrites the scope's owner pointer

`packages/runtime-tags/src/common/constants/accessor-prop.debug.ts` › `Owner` | 2026-07-27 | impact:med | effort:low

Every debug `AccessorProp` value is `#`-prefixed and therefore unreachable as a user identifier except `Owner`, which is `"_"` (a node one-liner over `accessor-prop.debug.ts` shows `Owner: "_"` and `Global: "$global"` are the only values that are valid identifiers), while `getScopeAccessor`/`getScopeAccessorLiteral` (`translator/util/references.ts`) use the raw binding name as the scope accessor whenever `optimize` is off — and `_let` strips its `/id` suffix back to that bare name. So the ignore-this-param idiom `<for|_, i| of=list>` — already used by the `for-serialize-key` and `lazy-tag-dynamic-unmount-before-load` fixtures — writes the loop item into `scope[AccessorProp.Owner]` and destroys the branch's owner pointer as soon as `_` is referenced from client code: `-o dom -d` emits `_const("_", $scope => _text($scope["#text/1"], $scope._))` beside `_for_closure("#text/0", $scope => _text($scope["#text/2"], $scope._.n))`, and `-o html -d` emits a literal duplicate object key, `_scope($scope1_id, { _, _: _scope_with_id($scope0_id) })`, so the item is silently dropped from the resume payload. Production output is unaffected because `decodeAccessor` only ever yields `[a-z][0-9a-z]*`, making this a dev-only failure with no compile-time diagnostic; the same hole exists for a binding named `$global`, which compiles to `_const("$global")` over `scope[AccessorProp.Global]`. Fix by `#`-prefixing the debug `Owner`/`Global` values (`getScopeExpression` in `translator/util/scope-read.ts` then needs a computed member instead of `t.identifier`), or by having `getScopeAccessor`/`getScopeAccessorLiteral` escape any binding whose debug accessor equals an `AccessorProp` value. Re-verify: compile `<let/n = 0/><for|_, i| of=["a", "b"]><div onClick() { n = n + 1; console.log(_) }>${_}:${n}</div></for>` with `pnpm run compile -o dom -d` and mount it with jsdom globals — it renders `<div>a:</div><div>b:</div>` instead of `a:0`/`b:0`, and a click throws `TypeError: Cannot create property 'n' on string 'a'`.

## Accept the written-out `value=` attribute on `<if>`/`<else-if>`/`<show>` — only the `=` shorthand compiles

`packages/runtime-tags/src/translator/core/if.ts` › `assertHasValueAttribute` | 2026-07-27 | impact:low | effort:low

`assertHasValueAttribute` (if.ts:551) and its twin in `core/show.ts` (reached from `assertValidShow`) require `t.isMarkoAttribute(valueAttr) && valueAttr.default`, so `<if value=cond>`, `<else-if value=cond>` and `<show value=cond>` are rejected even though the language reference defines `<my-tag=1/>` as sugar for `<my-tag value=1/>` and the parser emits the identical attribute (`name: "value"`), differing only in the `default` flag (`packages/compiler/src/babel-plugin/parser.js` › `onAttrName`). Every other core tag accepts both spellings — `core/let.ts`, `core/const.ts`, `core/log.ts`, `core/debug.ts` and `core/id.ts` test `attr.default || attr.name === "value"`, `core/await.ts` and `core/return.ts` test the name — and the resulting diagnostic is self-contradictory, saying the tag "requires a `value=` attribute" while the caret sits on source that has one. Relax both asserts to `attr.name === "value"` the way `<await>` does; note that `flattenTextOnlyConditional` in the same file makes the same `.default` test, so it needs the same treatment or the text-only chain optimization silently stops applying to the written-out form (with the shorthand, `<div><if=input.x>a</if><else>b</else></div>` compiles to `$template = "<div> </div>"` with no `_if` call). The `error-if-no-default-value`/`error-elseif-no-default-value` fixtures only cover a _missing_ value (`<if>Hello World</if>`), so nothing pins the current rejection. Re-verify: `pnpm run compile -o html -d` on a file containing `<div><if value=input.x>a</if></div>` fails with "requires a [`value=` attribute]" (likewise `<else-if value=…>` and `<show value=…>`), while `<div><if=input.x>a</if></div><const/y value=input.a/><await|v| value=input.p>${v}</await>` compiles.

## Make `<let>`'s `value` optional in `tags/let.d.marko`; the valueless `<let/x/>` compiles but fails type-check

`packages/runtime-tags/tags/let.d.marko` › `Input` | 2026-07-27 | impact:med | effort:low

`tags/let.d.marko` › `Input` declares `value: T` as required, but `src/translator/core/let.ts` › `analyze` only ever requires the tag variable and `translate.exit` falls back to `t.markoAttribute("value", t.identifier("undefined"))`, so `<let/x/>` compiles fine and emits `let x = undefined;` — unlike `<const>`, whose `analyze` really does throw "requires a `value=` attribute", which is why `tags/const.d.marko` correctly keeps `value` required. The valueless form is a first-class idiom used by eight in-repo fixtures (`let-undefined-until-dom`, `assign-to-owner-closure`, `assignment-before-tag-var`, `embed-control-flow-boundary`, `expression-statement-tag-var-assignment`, `for-by-use-index`, `known-define-tag-empty-section-closure`, `html-comment-var/tags/parent-el.marko`), yet every editor and `mtc` check of it hard-fails with TS2345 "Argument of type '{}' is not assignable to parameter of type 'Directives & Input<unknown, unknown>'. Property 'value' is missing…", which reads as if the tag were misused rather than as a stub gap. Mark it `value?: T`, but pair that with `return=(input.value as T)`: adding only the `?` widens `return=input.value` to `T | undefined` and regresses every valued `<let>` (`<let/n=0/>` followed by `${n.toFixed(2)}` then reports TS18048 "'n' is possibly 'undefined'"), while the cast keeps inference intact (`<let/n=0/>` + `n.toUpperCase()` still errors TS2339). This is a different defect from the entry "Declare the element-getter `return=` in the `html-comment` / `html-script` / `html-style` type stubs", which is about a missing `return=` collapsing the tag variable's type to `never`, not about an attribute wrongly marked required. Re-verify: point a Marko 6 project's `node_modules/@marko/runtime-tags` at this package and run `mtc` on `<let/x/>` + `<div>${x}</div>` — TS2345 at the `<let>` today, clean with `value?: T` plus `return=(input.value as T)` — while `pnpm run compile -o html -d tmp.marko` on the same source succeeds either way.

## Create a native-tag binding when `content=` evaluates confidently; today `<div content=undefined/>` aborts the DOM compile with an internal error

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `analyze.enter` | 2026-07-27 | impact:med | effort:low

`analyze.enter` creates the `kNativeTagBinding` only when `node.var || hasDynamicAttributes || hasEventHandlers || textPlaceholders || injectNonce || isDynamicControllable(...)` (:225-232), and a `content=` value that Babel evaluates confidently trips none of them — `content` is not an event handler, so it reaches the `!evaluate(attr.value).confident` test (:182) which leaves `hasDynamicAttributes` false. `getUsedAttrs` still records any non-`meta` `content` as `staticContentAttr` (:1203) and `translate.dom.enter` unconditionally emits `_attr_content(scope, visitAccessor, value)` for it, so with no referenced bindings that statement lands in `$setup` and contradicts the `setupEmpty` proof set at `visitors/program/index.ts:111`: a file containing only `<div content=undefined/>` aborts the dom compile in both debug and optimize with `Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it. Please open an issue with a reproduction.` (thrown at `visitors/program/dom.ts:176`), while `-o html` compiles fine — so SSR-only checks pass and only the client build breaks. `content=undefined` is the documented way to clear content and is used by the repo's own fixtures (`fixtures/native-tag-spread-content/tags/my-div.marko`, `fixtures/spread-to-known-content/template.marko`), but always alongside a spread, which is why no test covers the plain form; when the template happens to have other setup work the compile succeeds instead and emits `_attr_content($scope, void 0, undefined)`, whose `undefined` node accessor reads and writes stray `"…undefined"` scope keys rather than the tag's. Fix by adding a non-`meta` `content` attribute to the binding gate so `visitAccessor` exists, or by dropping a confidently void `content` value in `analyze.enter` the way the body-wins case already calls `dropNodes(attr.value)` (:140-147) and rejecting a confidently non-renderer one with a real diagnostic. This reaches the same error string as the unreferenced-`<define>` defect fixed in `5e7e830aa1`, but through a different root cause — that one was `core/define.ts` translating a tag the analysis had already dropped, this one is the native-tag binding gate — and it is distinct from `SSR silently drops content= on void and text-only native tags…` (`translate.html.enter`, whose repro uses only dynamic values, which bind fine). Re-verify: `pnpm run compile -o dom -d` on a file containing exactly `<div content=undefined/>` throws the internal error while `-o html -d` on the same file emits `_attr_content(void 0, $scope0_id, undefined, 0)`; prefixing that file with `<let/n=0/><button onClick(){ n++ }>go</button>` makes the dom compile succeed and emit `_attr_content($scope, void 0, undefined);` in `$setup`.

## Reject a `<style>` interpolation inside an unquoted `url()` — the emitted `url(var(--…))` silently invalidates the whole declaration

`packages/runtime-tags/src/translator/util/style-interpolation.ts` › `checkStyleInterpolations` | 2026-07-27 | impact:med | effort:low

`checkStyleInterpolations` rejects a `${...}` in a selector, an at-rule prelude, a property name, a quoted string, and glued to a unit, but not inside an unquoted `url(...)`, which fails just as hard: `url(` followed by a non-quote is tokenized as a raw `<url-token>` that ends at the first `)`, so the substituted `var(--…)` is never resolved and the leftover `)` makes the declaration invalid. `<style>\n.a { background: url(${x}); }\n</style>` compiles with no diagnostic and extracts `.a { background: url(var(--M_…)); }`, for which Chromium computes `background-image: none` — the rule is dropped with no compile-time or runtime signal, and `url(a.png?v=${x})` behaves the same. The docs at <https://markojs.com/docs/reference/core-tag#style> list only selectors, at-rule preludes, property names and quoted strings as illegal positions, so an author has no way to discover this; note `@import url(${x})` happens to be caught as a prelude, but a declaration-level `url(${x})` and a nested `image-set(url(${x}) 1x)` are not. The function already tracks `groupDepth` for `(`/`[`, so the fix is to record whether a group was opened by a `url` ident and throw a message in the `styleStringMsg` family, pointing at moving the whole `url(...)` into the interpolated value (`background: ${x}` with `x = "url(a.png)"` resolves correctly) or at `html-style`. Re-verify: `pnpm run compile -o html -d` on `<let/x="a.png"/>` plus `<style>\n.a { background: url(${x}); }\n</style>` succeeds, while the same file with `.a::after { content: "${x}"; }` fails with the "is not substituted inside a quoted CSS string" error.

## Ignore `MarkoComment` children in `assertNoBodyContent` — a comment-only `<attrs>`/`<effect>` body is a hard compile error

`packages/runtime-tags/src/translator/util/assert.ts` › `assertNoBodyContent` | 2026-07-27 | impact:low | effort:low

`assertNoBodyContent` tests `tag.node.body.body.length` raw, but Marko comments survive in `body.body` until `visitors/comment.ts` › `translate.exit` calls `comment.remove()`, so a body holding nothing but a comment is a hard compile error: `<attrs/{ a }><!-- todo --></attrs>` and `<effect() { … }><!-- todo --></effect>` both fail with "The `<attrs>` tag does not support body content." even though the tag renders nothing and the same tag with an empty or whitespace-only body compiles. Those two are the only reachable callers — the other seven (`const`, `let`, `id`, `return`, `log`, `debug`, `lifecycle`) set `parseOptions.openTagOnly` so the parser rejects the close tag first with `The closing "let" tag was not expected`, `<script>` sets `parseOptions.text` so its body is parsed as JS, and concise-mode `//` / `/* */` comments are dropped by the parser — so only HTML-style comments on these two (deprecated, migrate-phase) tags trip it. `translator/util/is-only-child-in-parent.ts` › `getOnlyChildParentTagName` already filters `node.type !== "MarkoComment"` for exactly this kind of body-length test; `tag.node.body.body.some((child) => child.type !== "MarkoComment")` here matches it. This is a different defect from the entry "SSR silently drops `content=` on void and text-only native tags, and on any tag whose body is only Marko comments", which is about `visitors/tag/native-tag.ts` silently discarding a `content=` attribute; this one is the shared assert helper raising a wrong error that stops the build outright. Re-verify: `pnpm run compile -o html -d` on a file containing `<effect() { console.log(1) }>`, then an indented `<!-- todo -->`, then `</effect>` prints "does not support body content", while deleting only the comment line compiles and writes the `.marko.js`.

## Use the cooked value, not `raw`, for a single-quasi template-literal tag name

`packages/runtime-tags/src/translator/util/get-tag-name.ts` › `getTagName` | 2026-07-27 | impact:low | effort:low

`analyzeTagNameType` classifies a single-quasi `TemplateLiteral` tag name as `TagNameType.NativeTag` — a supported form, covered by the `native-tag-name` fixture — but `getTagName` returns `quasis[0].value.raw`, so escape sequences in the name are never decoded and reach the emitted markup verbatim. A file whose only line is ``<${`h\x31`}>hi</>`` compiles to `$template = "<!><h\\x31>hi</h\\x31><!>"` in DOM output and `_html("<h\\x31>hi</h\\x31>")` in HTML output — an element name containing a literal backslash, with no diagnostic — and the same happens for the escapes a template literal _requires_, so a backtick escaped as ``\` `` inside the name is emitted as a backslash-backtick pair rather than a backtick. Reading `quasis[0].value.cooked` is the whole fix: `cooked` is always populated on this path because an invalid escape in an untagged template literal is already a hard compile error ("Invalid escape sequence in template."), so no `?? raw` fallback is needed. The trigger is exotic — escapes in tag names are rare — but it is a silent miscompile of otherwise-supported syntax, and the only consumer that reads the value as markup is the native-tag emitter (`visitors/tag/native-tag.ts`), since `isCoreTag` needs a resolvable `getTagDef` and the attribute-tag lookups key on `@`-prefixed string names. Re-verify: write ``<${`h\x31`}>hi</>`` as the only line of a `.marko` file, run `pnpm run compile -o dom -d` on it, and read the `$template` constant — it says `<h\x31>` where it should say `<h1>`.

## Emit real load machinery (or a compile error) when a Tags-API parent lazily imports a Class-API child — the DOM output references an undeclared identifier

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `translate.exit` | 2026-07-27 | impact:med | effort:med

`analyzeTagName` (`translator/util/tag-name-type.ts`) downgrades a custom tag whose child template is Class API to `TagNameType.DynamicTag`, but leaves the `extra.tagNameLoad` that `analyzeExpressionTagName` already attached, so `translate.exit`'s DOM branch still sees `allKnownTagReferences` and deletes the whole `import Child from "./child.marko" with { load: … }` declaration — while the compat dynamic-tag path that actually translates the tag never reads `tagNameLoad` and emits a plain `_dynamic_tag($scope, Child, …)`. The emitted module is left with `Child` as a free identifier, so `$setup` throws `ReferenceError: Child is not defined` at first render (or the bundler fails to resolve it) with zero compile diagnostics. Declaring the import by hand would not help either: compiling that Class child with `entry: "load"` routes through the Marko 5 program visitor and emits `import "./child.marko"; init();` instead of the `ready(<readyId>)` call the lazy runtime waits on, and every `fixtures-interop/lazy-class-child*` fixture uses a Class parent, so the Tags→Class lazy boundary has no coverage at all. Either route `tagNameLoad` through the compat dynamic-tag path (Marko 5's own `loadTag` helper already backs the Class-parent direction) or raise a `buildCodeFrameError` in `analyze` when a `load` import resolves to a Class-API template. This is a different defect from the entry `Strip the `load` import attribute from HTML output — it is emitted verbatim and Node rejects it`, which is the HTML branch of the same function leaking `with { load: … }` into the server module rather than the DOM branch dropping the declaration outright. Re-verify: compile `parent.marko` = `import Child from "./child.marko" with { load: "render" }` + `<Child value=1/>` against `child.marko` = `class { onMount() {} }` + `<div>${input.value}</div>` with `{ output: "dom", linkAssets: { runtime: "asset-runtime", onAsset() {} }, translator: "marko/translator" }` — the only `Child` in the emitted module is the bare argument to `$dynamicTag`, and parsing the output with Babel puts `Child` in the Program scope's `globals`; swapping in a Tags-API child leaves `globals` empty.

## Bound `getTagsDir` at the package root — an ancestor directory named `tags` makes every Class API template in the project fail to compile

`packages/runtime-tags/src/translator/interop/feature-detection.ts` › `getTagsDir` | 2026-07-27 | impact:med | effort:low

`getTagsDir` scans the whole absolute filename right-to-left for a path segment named `tags` (stopping only at a nearer `components`) with no upper bound, so it matches directories the taglib finder never registered: `packages/compiler/src/taglib/finder/index.js` › `find` deliberately stops its own upward walk at the nearest package root (`rootPkg.__dirname`, else `markoModules.cwd`). When the two disagree, `isTagsAPI` records the synthetic `Template file within a tags directory` feature and any Class API construct in the file then throws `Cannot mix Tags API and Class API features in the same file`, so a monorepo package named `tags` — or a checkout that merely lives under a `tags/` folder — cannot compile a single Marko 5 template, with no workaround but renaming the directory. That the directory is not a real tag directory is easy to show in the same tree: a `<hello/>` referencing `<root>/tags/hello.marko` from `<root>/tags/app/src/` fails with `Unable to find entry point for custom tag`, yet `<root>/tags/app/src/page.marko` is still reported as being "within a tags directory". Bound the scan at the same package-root boundary `find` uses, or better, have the lookup expose the tag-discovery dirs it actually registered so detection stops string-matching absolute paths; while there, give the synthetic feature a real location, since the aggregate error currently prints an empty code frame for it (visible in `fixtures-interop/error-class-tags-dir/__snapshots__/error-compile-html.txt`). Re-verify: `mkdir -p /tmp/t/packages/tags/src`, write `{"name":"a","version":"1.0.0"}` to `/tmp/t/packages/tags/package.json` and `class {}` + `<h1>hi</h1>` to `/tmp/t/packages/tags/src/page.marko`, then `pnpm run compile -t class -o html -d /tmp/t/packages/tags/src/page.marko` fails with the mixing error, while renaming `packages/tags` to `packages/tag` compiles the identical file.

## Restore the enclosing whitespace-preservation state when a preserve-whitespace tag closes — a `<textarea>` inside `<pre>` collapses the rest of the `<pre>`

`packages/compiler/src/babel-plugin/parser.js` › `parseMarko (the `preservingWhitespaceUntil` slot)` | 2026-07-27 | impact:low | effort:low

`preservingWhitespaceUntil` is a single slot: `onOpenTagName` overwrites it with the current tag node whenever that tag's `parseOptions.preserveWhitespace` is set (`:341`), and `onCloseTagEnd` clears it to `undefined` when the node closes (`:585`) instead of restoring whatever it held before. `<pre>`, `<textarea>`, `<script>` and `<style>` are exactly the four tags carrying `preserveWhitespace` in `src/taglib/marko-html.json`, and the last three nest legally inside `<pre>`, so `<pre>A   B` / an indented `<textarea>t</textarea>` / `C   D` / `</pre>` emits the text before the nested tag verbatim but collapses everything after it to ` C D` — silent whitespace corruption inside a `white-space: pre` element with no diagnostic, on the Marko 5 (`-t class`) translator as well since the damage happens in the shared parser. The same slot is seeded with the file-wide `htmlParseOptions.preserveWhitespace` flag (`:54-55`), so under that option the first `<pre>`/`<script>`/`<style>`/`<textarea>` in a file turns preservation off for everything that follows. Fix by saving the previous value — on the tag node, or in a small stack — in `onOpenTagName` and restoring it in `onCloseTagEnd` rather than assigning `undefined`. Re-verify: `pnpm run compile -o html -d` on a file containing `<pre>A   B`, an indented `<textarea>t</textarea>`, `C   D`, `</pre>` emits ``_html(`<pre>A   B\n  <textarea>${_textarea_value("t")}</textarea> C D</pre>`)``, while replacing only the `<textarea>` with a `<span>` emits `_html("<pre>A   B\n  <span>t</span>\nC   D\n</pre>")`.

## Pass the attribute value's end offset when parsing it — a bad attribute value swallows the rest of the file

`packages/compiler/src/babel-plugin/parser.js` › `onAttrValue` | 2026-07-27 | impact:med | effort:low

`onAttrValue` and `onAttrSpread` call `parseExpression(file, raw, part.value.start)` without the `sourceEnd` argument that every other handler in the same adapter passes (`onPlaceholder`, `onScriptlet`, `onTagVar`, `onTagParams`, `onTagArgs`, `onAttrMethod` all pass `value.start, value.end`). When that parse fails, `createParseError` in `packages/compiler/src/babel-utils/parse.js` computes `source: file.code.slice(start, undefined)` — the whole remainder of the file — and `getLocRange`'s `findLoc(lineIndexes, line, undefined)` returns an end position whose `column` is missing on line 1 and `NaN` on any later line, leaving `node.end` undefined. Two consequences follow: `output:"source"` and `output:"migrate"` print `MarkoParseError` as `this.token(node.source)` via the generator patch, so everything after the bad attribute is emitted twice (a formatter or codemod writing its output back doubles the file — and `output:"source"` returns before the parse-error check in `babel-plugin/index.js`, so this happens without `errorRecovery` too); and `getBoundedRange` discards Babel's real error location whenever it lands past the bogus end line, so a multi-line attribute value reports "Unexpected token" at the value's opening paren instead of the offending token, while the identical mistake inside `${…}` (which does pass `value.end`) reports exactly. Fix: pass `part.value.end` at both call sites, and in `withWrappedAttrValueHint`'s probe. Re-verify from the repo root: `node -r ~ts -e 'const {compileSync}=require("./packages/compiler/src/index.js");const t={translate:{},taglibs:[],tagDiscoveryDirs:[]};const o={output:"source",errorRecovery:true,translator:t};console.log(compileSync("<div foo=(1+)>hi</div>\n<span>tail</span>","x.marko",o).code);console.log("--- control ---");console.log(compileSync("<div>${1+}</div>\n<span>tail</span>","x.marko",o).code)'` prints the whole template twice, while the `${1+}` control round-trips once.

## Use the trimmed length, not `rawValue.length`, for a text node's end offset in `onText`

`packages/compiler/src/babel-plugin/parser.js` › `onText` | 2026-07-27 | impact:med | effort:low

The deferred `onNext` closure inside `onText` re-locates a trimmed text node with `withLoc(node, { start: trimmedStart, end: trimmedStart + rawValue.length })` where `trimmedStart = part.start + rawValue.indexOf(value)` — the start is advanced past the removed leading whitespace but the length is still the untrimmed `rawValue.length`, so the end overshoots by exactly the number of leading characters trimmed. Every text node preceded by a newline plus indentation (i.e. normal formatting) is affected: `<div>\n    hello\n</div>` produces a `MarkoText` whose `value` is `"hello"` but whose `loc` spans `"hello\n</div"`, and across `packages/runtime-tags/src/__tests__/fixtures` 147 of 1171 `MarkoText` nodes carry a `loc` whose source extent does not correspond to their value (102 templates). That corrupts every consumer of text-node ranges — editor tooling, codemods, and the source maps emitted for `output: "source"` / `"migrate"`, where a deeply indented trailing text node pushes the end past EOF: `<div>\n` + 20 spaces + `hello</div>\n` compiled with `output: "source", sourceMaps: true` decodes to an original position of line 3 column 14 on a zero-length line 3, which disappears when the indentation is removed. The fix is `end: trimmedStart + value.length`, symmetric with the start. Re-verify from the repo root: `node -r ~ts -e 'const {compileSync}=require("./packages/compiler/src/index.js");const src="<div>\n    hello\n</div>";const {ast}=compileSync(src,process.cwd()+"/x.marko",{output:"source",ast:true,translator:{translate:{},taglibs:[],tagDiscoveryDirs:[]}});const n=ast.program.body[0].body.body[0];const L=src.split("\n"),off=p=>L.slice(0,p.line-1).reduce((a,l)=>a+l.length+1,0)+p.column;console.log(JSON.stringify(n.value),JSON.stringify(n.loc),JSON.stringify(src.slice(off(n.loc.start),off(n.loc.end))));'` prints `"hello" {"start":{"line":2,"column":4},"end":{"line":3,"column":5}} "hello\n</div"` instead of an end at line 2 column 9 covering `"hello"`.

## Stop reindenting `<pre>`/`<textarea>`/`<style>` bodies when re-printing `.marko` source

`patches/@babel__generator@7.29.7.patch` › `MarkoTag` | 2026-07-27 | impact:med | effort:med

The `.marko` source printer used by `output: "source"`/`"migrate"` pretty-prints every non-void tag body with `this.newline(1); this.indent(); this.print(node); this.dedent();` plus a trailing `newline(1)`, guarded only by `voidElements`, `svgElements`, the concise `style { … }` `rawValue` form and the `script value=() => {}` body override — nothing consults the whitespace-preserving tags that `packages/compiler/src/taglib/marko-html.json` declares via `parse-options.preserveWhitespace` (`pre`, `script`, `style`, `textarea`). Since those bodies render verbatim, re-printing silently changes what users see and is not a fixed point: `<pre>\nHello\n  World\n</pre>` becomes `<pre>\n  \nHello\n  World\n\n</pre>` after one pass and gains another indented blank line and another trailing newline on every subsequent pass, and `<textarea>abc</textarea>` compiles from `_textarea_value("abc")` to `_textarea_value("  abc\n")` after a round trip. This matters because `packages/runtime-class/bin/markoc.js` `--migrate` rewrites each `.marko` in place (`var outPath = args.migrate ? path : path + ".js"`), so a single codemod run corrupts rendered content — the shipped fixtures `packages/runtime-class/test/render/fixtures/{whitespace-pre,whitespace-textarea}/template.marko` both break on pass one, and the committed migrate snapshots under `packages/runtime-class/test/translator/fixtures/{textarea-tag,white-space-test}/snapshots/generated-expected.marko` already bake the injected whitespace in. Fix by adding a `preserveWhitespaceElements` set next to the existing `voidElements`/`svgElements` sets in the patched generator and, for those tags, emitting the body between the tags with no `newline`/`indent`/`dedent` (the concise `style { … }` branch is the shape to copy); regenerating the patch also requires refreshing those two snapshots. Re-verify from the repo root: `node -r ~ts -e 'const {compileSync}=require("./packages/compiler/src/index.js");const f=process.cwd()+"/packages/runtime-tags/src/probe.marko";const T="./packages/runtime-tags/src/translator/index.ts";let s="<pre>\nHello\n  World\n</pre>\n";console.log(JSON.stringify(s));for(let i=0;i<2;i++)console.log(JSON.stringify(s=compileSync(s,f,{output:"source",translator:T}).code));'` prints `"<pre>\n  \nHello\n  World\n\n</pre>"` then `"<pre>\n  \n  \nHello\n  World\n\n\n</pre>"`, and recompiling each with `output: "html"` emits a correspondingly different `<pre>…</pre>` literal.

## Merge instead of replace the attribute a `"@x <x>"` shorthand already declared — `required`, `default-value` and `autocomplete` are silently discarded

`packages/compiler/src/taglib/loader/loadTagFromProps.js` › `TagLoader["*"]` | 2026-07-27 | impact:med | effort:low

The `<`-branch of the shorthand handler unconditionally runs `tag.addAttribute(loadAttributeFromProps(nestedTag.targetProperty, { type: "object" }, …))` for every non-repeated nested tag, and `Tag.addAttribute` assigns straight into `this.attributes[attr.name]`, so on a combined key like `"@label <label>"` the bare `{type:"object"}` overwrites the attribute the `@`-half just built from the author's own props — `type`, `description`, `required`, `default-value`, `deprecated`, `preserve-name` and `autocomplete` are all thrown away, as is the `attrProps.type = "expression"` default the handler sets a few lines earlier (which therefore only survives for `[]`-repeated nested tags). This is not just editor metadata: `required` and `default-value` are compile-time behavior in `packages/runtime-class/src/translator/tag/util.js`, so a tag declaring `"@label <label>": {"type":"string","default-value":"L","required":true}` emits no `label` property and raises no "attribute is required" error, while the identical declaration written as plain `"@label"` does both — and Marko's own core taglib hits this, with `<await>`'s `"@then <then>"`/`"@catch <catch>"`/`"@placeholder <placeholder>"` (`packages/runtime-class/src/translator/taglib/core/index.js`) reduced to `{type:"object"}` with their `autocomplete` entries gone. Four lines up, `nestedTag.targetProperty = attrProps.targetProperty || nestedTagTargetProperty` reads only the camelCase key and overwrites whatever `loadTagFromProps` already resolved, so the dashed `"target-property"` spelling that the longhand `nested-tags` form accepts (pinned by `packages/runtime-class/test/taglib-loader/fixtures/repeated-nested-tag`) is silently dropped in shorthand and the target property falls back to the nested tag name. Direction: only synthesize the `{type:"object"}` attribute when the `@`-half did not already declare one (or merge just the type into the existing attribute), and take the target property from the already-loaded `nestedTag` rather than the raw `attrProps` key; note that `fixtures/shorthand-attrs-and-tags` passes today only because its declaration is `"@label <label>": "object"`, so the clobber is invisible there. Re-verify: `node -r ~ts -e 'const t=require("@marko/compiler").taglib.buildLookup("packages/runtime-class/test","marko/translator").getTag("await");console.log(JSON.stringify(t.attributes.then),!!t.attributes.name.autocomplete)'` prints a `then` attribute of type `object` with no `autocomplete` followed by `true` for the sibling `@name`.

The same handler corrupts its own input, which is a second way the shorthand loses attributes. It partitions a key's definition into `attrProps`/`tagProps` by `delete value[k]`-ing every recognized property out of the object it was handed, using "whatever is left" as the unsupported-property check (`isObjectEmpty(value)`). When one key declares more than one nested tag — `"@panels <panel> <pane>"` — the parts loop calls `loadTagFromProps(nestedTag, tagProps, …)` once per `<…>` part with the _same_ `tagProps`, so the first recursion strips the shared `@attr`/`<tag>` sub-objects and every nested tag after the first gets bare definitions with no `type`, `description`, `enum`, `required` or `default-value`. With `"@label": {"type":"string","default-value":"DEF"}` the Marko 5 translator emits `_marko_repeatable_attr_tag("panels", { "label": "DEF" })` for `<@panel/>` but `_marko_repeatable_attr_tag("panels", {})` for `<@pane/>`. The mutation also corrupts any props object loaded twice, which `taglib.register(id, props)` and the translator contract's `taglibs: [[id, props]]` both make possible since module-level JSON imports are require-cached — masked today only by the `loadedTranslatorsTaglibs` memo that `clearCaches()` never resets. Partition out of a shallow copy of `value`, or record consumed keys in a `Set` and derive the leftover list from that. Re-verify: `node -r ~ts -e 'const {taglib}=require("@marko/compiler");const l=taglib._loader;const t=l.loadTaglibFromProps(l.createTaglib("/x/marko.json"),{"<t>":{"@a <p> <q>":{"@label":{type:"string",description:"d"}}}});for(const n in t.tags.t.nestedTags)console.log(n,JSON.stringify(t.tags.t.nestedTags[n].attributes.label.type));'` prints `p "string"` then `q null`.

## Key the taglib finder cache on the tag-discovery dirs — the first translator to compile a directory silently picks the runtime for every later one

`packages/compiler/src/taglib/finder/index.js` › `find` | 2026-07-27 | impact:med | effort:low

`find(dirname, registeredTaglibs, tagDiscoveryDirs)` stores its result as `findCache[dirname]` and returns it verbatim on every later call, but both the walk it performs and the metadata it caches depend on the two arguments the key ignores: `tagDiscoveryDirs` is `["tags"]` for `@marko/runtime-tags/translator` and `["tags", "components"]` for the interop `marko/translator` (`packages/runtime-tags/src/translator/interop/index.ts`), and `registeredTaglibs` carries the calling translator's own core taglibs. In any process that compiles with both translators — the language server over a mixed Marko 5/6 workspace, a codemod or test harness — whichever one reaches a directory first freezes that directory's taglibs and its `exclusiveTagDiscoveryDirs` for the other. The damage is silent rather than an error: `exclusiveTagDiscoveryDirs` feeds `isTagsAPI` (`packages/runtime-tags/src/translator/interop/feature-detection.ts`), so a Class API template compiled through `marko/translator` after any Marko 6 compile in the same tree emits Marko 6 codegen against `@marko/runtime-tags/debug/html` instead of `marko/src/runtime/html/index.js`, with no diagnostic; in the same setup a `components/`-only tag also stops resolving, with `Unable to find entry point for custom tag`, and in the opposite order a Marko 6 template silently gains `components/` tags its `["tags"]` discovery should never see. Fold `tagDiscoveryDirs` and the registered-taglib set identity into the cache key (this is independent of the `getTagsDir` boundary entry, which is a filename string scan in feature-detection.ts and reproduces under a single translator). Re-verify from the repo root: create `/tmp/mfx` with `package.json` `{"name":"x","version":"1.0.0"}`, `tags/my-tag.marko` and `components/my-comp.marko`, then in two fresh processes compile `<div/>` at `/tmp/mfx/b.marko` with `translator:"marko/translator"` — alone the output requires `marko/src/runtime/html/index.js`, but preceded by a `compileSync("<my-tag/>", "/tmp/mfx/a.marko", {translator:"@marko/runtime-tags/translator"})` it requires `@marko/runtime-tags`; inserting only `require("@marko/compiler").taglib._finder.clearCache()` between the two compiles restores the Marko 5 output byte for byte.

## Clear the memoized per-translator taglib list in `taglib.clearCaches()` — a taglib added by `register()` after the first `buildLookup` is invisible forever

`packages/compiler/src/taglib/index.js` › `clearCaches` | 2026-07-27 | impact:med | effort:low

`buildLookup` memoizes the whole `registeredTaglibs.concat(translator taglibs)` array per translator object in the module-level `loadedTranslatorsTaglibs` Map, but `clearCaches()` resets only `loader`, `finder` and `lookupCache` — nothing reaches that Map. A taglib installed through the public `taglib.register(id, props)` (declared in `packages/compiler/index.d.ts` alongside `clearCaches`) is therefore dropped for every translator that has already been used, permanently, so the behavior is order-dependent: register before the first compile and the tag resolves, register after it and every later compile fails with `Unable to find entry point for custom tag` even though `register()` returned successfully and the documented cache clear was called. This is a regression rather than intent — `9dc4d07d1b` ("fix: support manually registered taglibs") deliberately kept `registeredTaglibs.concat(...)` outside the memo, and `4fc38e8001` moved it inside while adding the `onError` hook. Clear `loadedTranslatorsTaglibs` in `clearCaches` and invalidate it from `register`, or move the `registeredTaglibs` half back out of the memo so only the translator's own loaded taglibs are cached. Re-verify from the repo root: `d=$(mktemp -d); printf '{"name":"x"}' > "$d/package.json"; printf '<b>late</b>' > "$d/late.marko"; D="$d" node -r ~ts -e 'const{taglib}=require("@marko/compiler"),T="@marko/runtime-tags/translator",D=process.env.D;const has=t=>!!taglib.buildLookup(D,t).getTag("late-tag");console.log("before:",has(T));taglib.register("late",{"<late-tag>":{template:D+"/late.marko"}});taglib.clearCaches();console.log("after register+clearCaches:",has(T));taglib.clearCaches();console.log("memo bypassed:",has({...require(T)}));'; rm -rf "$d"` prints `false / false / true` — the third line uses a content-identical but distinct translator object, whose absence from the Map is the only reason the same registration becomes visible.

## Restore the dead `.js` preference in the tag-directory file scan — a sibling `index.css` is picked as the renderer

`packages/compiler/src/taglib/loader/scanTagsDir.js` › `getPath` | 2026-07-27 | impact:med | effort:low

`getFileMap` keys each basename by extension _including the leading dot_ (`fileMap["index"][".js"]`), but `getPath`'s preference guard reads `if (file.js) return file[".js"]` — `file.js` is never assigned, so that branch is unreachable and resolution falls through to `for (let key in file) return file[key]`, returning whichever extension `readdirSync` happened to list first. This governs every extensionless entry in `searchFiles` (`renderer`, `index`, `migrate`, `transform`, `translate`, `parse`, `node-factory`, `code-generator`), so a Marko 5 tag directory holding `index.js` or `renderer.js` beside a same-basename sibling picks its renderer by filesystem order, and where entries come back sorted `.css` sorts before `.js` and the stylesheet wins: `<foo/>` against `components/foo/{index.js,index.css}` compiles silently to `require("./components/foo/index.css")` as the component renderer, which only fails much later at bundle or render time. Templates are unaffected because `searchFiles`' `.marko`/`.html` names are matched by full filename through `fileMap[name].__path`, so this is confined to JS-renderer tag dirs. Fix by reading `file[".js"]`, and replace the `for...in` fall-through with an explicit extension-preference list so resolution stops depending on `readdirSync` order at all. Re-verify from the repo root: create a temp dir with `package.json`, `components/foo/index.js` (a `module.exports = { renderer(){} }`), `components/foo/index.css` and `page.marko` containing `<foo/>`, then `compileSync(src, "<d>/page.marko", { output: "html", translator: "marko/translator", modules: "cjs" })` emits `require("./components/foo/index.css")`; deleting `index.css` makes the same compile emit `require("./components/foo/index.js")`.

The layout that hits it ships in this repo: `packages/runtime-class/test/render/fixtures/include-component/components/my-component/index.js` is exactly the `index.js`-renderer shape, so adding a sibling `index.css` to such a directory is enough. A shorter repro than the `compileSync` one above: `mkdir -p /tmp/tl/components/my-widget`, write a `module.exports = { renderer(input, out) { out.write("<b>hi</b>"); } }` to `index.js` and any CSS to `index.css`, put `<my-widget/>` in `/tmp/tl/page.marko`, then `pnpm run compile -t class -o html -d /tmp/tl/page.marko` and grep the output for `my-widget/index` — it names the `.css`, and removing the `.css` makes the identical source name the `.js`.

## Reject arguments-plus-body on custom tags — `assertAttributesOrArgs` tests `node.body.length` on a `MarkoTagBody`, so `<my-tag(x)>body</my-tag>` silently drops the body

`packages/compiler/src/babel-utils/assert.js` › `assertAttributesOrArgs` | 2026-07-27 | impact:med | effort:low

`assertAttributesOrArgs` guards with `args.length && (node.attributes.length > 0 || node.body.length)`, but `MarkoTag.body` is a `MarkoTagBody` node whose children live in `.body.body` — `.body.length` is always `undefined`, so the "or body present" half of the condition is permanently dead and only the attributes half ever fires (`assertNoParams` two functions up already reads `path.node.body.params`, confirming the node shape). On the custom-tag path this is silent content loss: `runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `analyze.enter` calls `assertAttributesOrSingleArg`, and a single argument replaces the whole input object so `input.content` can never be delivered, yet `<my-tag("a")>hi</my-tag>` compiles to `_myTag("a");` with the body discarded and no diagnostic, while the same tag written `<my-tag("a") class="b">hi</my-tag>` correctly fails with "Tag does not support arguments when attributes or body present."; the `<define>`/tag-var form behaves the same, emitting `MyTag.content(1)` for `<MyTag(1)>hi</MyTag>`. The obvious one-word repair to `node.body.body.length` is wrong — `assertAttributesOrArgs` is also the dynamic-tag guard (`visitors/tag/dynamic-tag.ts` › `analyze.enter`), and `runtime-tags/src/__tests__/fixtures/dynamic-tag-args-null-fallback/template.marko` (`<${x}(1, 2)>Fallback Body</>`) deliberately pairs arguments with a body as the null fallback, with `__snapshots__/render.md` rendering `Fallback Body`. Since `assertAttributesOrSingleArg` has exactly one caller (`custom-tag.ts`) and `assertAttributesOrArgs` exactly one (`dynamic-tag.ts`), move the body check into `assertAttributesOrSingleArg` — rejecting `node.body.body.some((child) => child.type !== "MarkoComment")`, matching `translator/util/is-only-child-in-parent.ts` › `getOnlyChildParentTagName` — and leave the shared helper attribute-only, then add the missing error fixture beside `fixtures/custom-tag-args-and-attributes-error`. Re-verify from the repo root: `d=$(mktemp -d); printf '{"<my-tag>":{"template":"./my-tag.marko"}}' > "$d/marko.json"; printf '<div>child: <${input.content}/></div>\n' > "$d/my-tag.marko"; printf '<my-tag("a")>hi</my-tag>\n' > "$d/t.marko"; pnpm run compile -o html -d "$d/t.marko"` writes a file whose only tag call is `_myTag("a");` with `hi` nowhere in it, while adding ` class="b"` to that tag makes the same command fail with the arguments-when-attributes-or-body error.

## Invalidate a cached template when one of its analyzed child templates changes — the mtime check only walks `watchFiles`, which never lists them

`packages/compiler/src/babel-plugin/index.js` › `getMarkoFile` | 2026-07-27 | impact:high | effort:low

`getMarkoFile` caches the parse→migrate→transform→analyze file per `(translator, templateId)` and invalidates it only when the template's own content hash changes or when a path in `metadata.marko.watchFiles` has a newer mtime — but `watchFiles` is populated exclusively from taglib `marko.json` files and taglib/translator plugin paths, never from the child `.marko` templates that analysis actually read. Those children are recorded separately in `metadata.marko.analyzedTags` (`packages/compiler/src/babel-utils/tags.js` › `resolveMarkoFile`), which the invalidation loop ignores, so after a child is edited an untouched parent is served from cache with stale analysis while the translate stage re-reads the child through the child's own, correctly invalidated entry. The mismatch either hard-fails the build (`Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it`) or — worse — silently miscompiles: a parent consuming a tag variable whose child `<return>` changed from a constant to a signal keeps emitting HTML with no `_var`, `_el_resume`, or `_scope` marks, so the page server-renders and then never resumes, with no diagnostic. Any process that reuses a cache across edits is affected, which is exactly what the mtime loop exists to support, and that includes the process-lifetime default `globalConfig.cache` used by `@marko/compiler/register` and by repeated `compile[Sync]` calls that pass no `cache`; the only escape today is discarding the entire cache. Fold `analyzedTags` into the same mtime check (or push analyzed child paths onto `watchFiles`), noting the check has to be transitive since a parent's `analyzedTags` lists only its direct children. Re-verify: write `parent.marko` = `import Child from "./child.marko";` + `--` + `<Child/val/>` + `<div>${val}</div>` and `child.marko` = `<return=1/>`, `compileSync` the parent with `{ output: "html", translator: "@marko/runtime-tags/translator", cache }` (its `meta.watchFiles` is `[]` while `meta.analyzedTags` lists the child), overwrite `child.marko` with `<let/x=1/>` + `<button onClick() { x++ }/>` + `<return=x/>`, then compile the identical parent source again with the same `cache` — the emitted code is byte-identical to the first compile and contains no `_el_resume`, while passing a fresh `new Map()` emits both `_var` and `_el_resume`.

The same ~20-line validity block has a second gap on the key side: `stripTypes(file)` runs _inside_ the cached parse→migrate→transform→analyze region but is folded into neither the key nor the hash — unlike `optimize`, which `getTemplateId` (`babel-utils/tags.js`) mixes into the id. Two compiles of one template with opposite `stripTypes` in a single process therefore return the same file, and the second gets output built under the first's setting, so `const x: number = 1` survives into an `output: "html"` JS module that is a syntax error for every consumer not running TypeScript. Reaching it needs an explicit override, but that is a documented mode (`markoc --no-strip-types`, `runtime-class/docs/compiler.md` › `stripTypes`) and `config.js` hands every compile the same process-global `cache`. Hash `stripTypes` into the key alongside the template id, or store it on the entry and invalidate on mismatch the way `contentHash` already does. Note that `output` is **not** safe to leave out of the key either — see the `getAttrTagIdentifier` entry, where a preceding `html` compile changes the `dom` output's bytes. Re-verify: `node -r ~ts -e 'const {compileSync}=require("./packages/compiler/src/index.js");const src="static const x: number = 1;\n<div>${x}</div>\n";const fn=require("path").resolve("packages/runtime-tags/src/tmp-strip.marko");const c=new Map();compileSync(src,fn,{output:"html",cache:c,stripTypes:false});const g=(o)=>/const x[^;]*/.exec(compileSync(src,fn,o).code)[0];console.log("shared:",g({output:"html",cache:c,stripTypes:true}),"| fresh:",g({output:"html",cache:new Map(),stripTypes:true}));'` prints `shared: const x: number = 1 | fresh: const x = 1`.

## Forward `restOffset` wherever an array rest's binding is re-created — nested and aliased array rests compile to wrong DOM reads

`packages/runtime-tags/src/translator/util/references.ts` › `createBindingsAndTrackReferences` | 2026-07-27 | impact:med | effort:med

`restOffset` — the index shift that makes an array rest read `source[i + offset]` — is assigned only in the `Identifier` case of `createBindingsAndTrackReferences`, so every path that re-creates a rest's binding silently loses it: the `ObjectPattern`/`ArrayPattern` cases reuse `upstreamAlias` verbatim when `property === undefined` (discarding the caller's `excludeProperties` too), and `trackVarReferences` forwards `excludeProperties` but not `restOffset`. A nested array rest over `[1,2,3]` — `<const/[first, ...[second, third]] = arr/>` — compiles in DOM to `$second($scope, $scope.first)` and `$third($scope, $scope.arr[1])`, rendering `1|1|2`, while `-o html` emits the source pattern unchanged and renders `1|2|3`; the same shape in tag params, `<for|a, ...[b, c]| of=list>`, maps `b` to `$params[0]` and `c` to `$scope["#LoopKey"]`. Aliasing a rest through a tag variable — `<const/[a, ...rest] = arr/>` then `<const/copy = rest/>` — makes `getSignalFn` (`translator/util/signals.ts`) take its object-rest branch and materialize `copy` as `(({0: $temp, ...copy}) => …)($scope.arr)`, i.e. the plain object `{1:2,2:3}`, so `copy[0]` is `undefined` and `copy.length` compiles to `$scope.arr.length`; both cases are SSR/CSR divergence with no compile diagnostic, even though the docs advertise full JS destructuring for tag variables and params. Direct use of a rest (`<for|x| of=rest>`, `rest.join()`) and object rests are unaffected, which localizes the defect to `restOffset` propagation. Direction: give `Binding.restOffset` the same forwarding treatment `excludeProperties` already gets — set it in the `ObjectPattern`/`ArrayPattern` cases, stop reusing `upstreamAlias` as the pattern binding when the caller supplied `excludeProperties`/`restOffset`, and thread it through `trackVarReferences` — so `trackReference`'s shift branch and `getSignalFn`'s array-vs-object rest choice both key off a correct value. Re-verify: compile `<let/arr = [1, 2, 3]/>` + `<const/[first, ...[second, third]] = arr/>` + `<div>${first}|${second}|${third}</div>` with `npm run compile -- -o dom -d file.marko` — the emitted `$second` signal body is `_text($scope["#text/1"], $scope.first)` — while `-o html` emits `const [first, ...[second, third]] = arr;`.

## Emit one `<!>` for a lazily-loaded custom tag; the surplus marker puts every later walk step in the section off by one

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `translateDOM` | 2026-07-27 | impact:high | effort:low

The `isLoad` branch of `translateDOM` writes its own `` write`<!>` `` immediately before `walks.visit(tag, WalkCode.Replace)`, but `visit` (`translator/util/walks.ts`) already writes a `<!>` for any non-`Get` code, so a lazy custom tag contributes two comment nodes to its section's template while the following `walks.enterShallow(tag)` accounts for exactly one (`over(1)`) — and only the first is ever consumed, since `_load_setup`/`insertLoaded` (`dom/load.ts`) use the single `Replace`-created `#text` node as the insertion anchor and remove it. Every walk step after a lazy tag in the same section is therefore off by one: `<let/value=0/><Child value=value/><button onClick(){value++}>Inc</button>` with `Child` imported `with { load: "idle" }` compiles to `$template = "<!><!><!><button>Inc</button>"`, `$walks = "b%/&b b"` and `_on($scope["#button/2"], …)`, yet the walker assigns slot 2 to a comment, so the handler binds to `undefined` under MARKO_DEBUG and to a comment node under `optimize` (a silently dead button). With an element ancestor it is destructive rather than dead — `<div><Child value=value/><button onClick(){value++}>Inc ${value}</button></div>` walks `D%/&b Db%m`, the trailing `replace` lands on the `<button>` itself, and a client render produces `<div><!----></div>`. SSR/resume is unaffected (the child renders inline and resume is marker-driven), and nothing in `__tests__/fixtures/lazy-*` catches it because every lazy fixture puts its lazy tags last or followed only by other comment markers, where the surplus marker is harmlessly reused as the next lazy tag's anchor; this is the mirror of the entry "Drop escaped placeholders that confidently render an empty string, so the DOM walk does not gain a step for a node that is never written", which is a step without a node in `static-text.ts`/`placeholder.ts`, whereas this is a node without a step. Fix: delete the `` write`<!>` `` line so lazy tags use the same balanced `visit` + `enterShallow` pair as `dynamic-tag.ts`, `core/if.ts` and `core/try.ts`; the walk string is derived from steps and does not change. Re-verify: compile that first template for `dom` with `linkAssets: true` and a `resolveVirtualDependency` stub, then run `packages/runtime-tags/src/dom/walker.ts` › `walk` over the emitted `$template`/`$walks` in jsdom — `Object.keys(scope)` is `#text/0, #childScope/1, #comment/2` against emitted code that reads `$scope["#button/2"]`, and re-walking the same walk string over the template with one `<!>` removed gives `#text/0, #childScope/1, #button/2`.

## Don't defer a reference just because it already has queued assignments — Map/Set members are silently dropped and a generator return emits unparsable JS

`packages/runtime-tags/src/html/serializer.ts` › `writeReferenceOr` | 2026-07-27 | impact:high | effort:med

`writeReferenceOr` short-circuits on `if (ref.assigns)` before it reaches the `isCircular` test, so once a value has a single deferred assignment queued (one `a.next = b; b.prev = a` cycle is enough), _every_ later occurrence of it in that flush becomes a post-fill assignment instead of the inline `_.a` reference it already has a binding for. Two containers are built eagerly and never see the fill: `writeMap`/`writeSet` construct from a bound array via `writeArrayArg`, so the trailing `_.d[1]=_.a` patches the backing array after `new Map(...)`/`new Set(...)` already copied it — the entry resumes with `undefined` and the Set resumes without the member — and `writeGenerator`'s non-held return branch calls `writeProp(state, returnValue, ref, "")`, whose empty accessor makes `toAccess` emit `_.b.=_.a`, a `SyntaxError` that stops the entire inline resume script from parsing so nothing on the page hydrates. Both are reachable from ordinary source with no diagnostic: `<let/graph=(() => { const a = { id: 1 }, b = { id: 2 }; a.next = b; b.prev = a; return { current: a, byId: new Map([[1, a], [2, b]]) }; })()/>` closed over by an `onClick` renders `new Map(_.c=[_.d=[1,],[2,_.b]])` into the page, and after resume `graph.byId.get(1)` is `undefined` where the server saw the node. The direction that works is to delete the `ref.assigns` short-circuit and fall through to `isCircular` — the value's `_.a=` binding is emitted at its own, earlier buffer position, so an inline reference is safe, and the genuine ordering hazard is exactly what `isCircular` already covers; failing that, Map/Set members must route through `deferCall` and the generator return through a holder the way `heldReturn` does. This is a different defect from the `writeObjectProps` key-order entry, which concerns the circular branch and is fixed inside the object writer, and from the `writeCallArg` entry, which is the `deferCall` argument path across flushes. Re-verify from the repo root: `node -r ~ts -e 'const {Serializer}=require("./packages/runtime-tags/src/html/serializer.ts");const b={signal:{aborted:false}};const a={id:1},c={id:2};a.next=c;c.prev=a;console.log(new Serializer().stringifyScopes([[1,{},{current:a,byId:new Map([[1,a],[2,c]])}]],b));const x={};x.self=x;function*g(){yield 1;return x}console.log(new Serializer().stringifyScopes([[1,{},{x,g:g()}]],b))'` prints `_=>(_([1,{current:_.a={id:1,next:_.b={id:2}},byId:new Map(_.c=[_.d=[1,],[2,_.b]])}]),_.b.prev=_.d[1]=_.a,0)` and `_=>(_([1,{x:_.a={},g:_.b=(function*(a,r){yield*a;return r})([1],)}]),_.a.self=_.b.=_.a,0)`; disabling the `ref.assigns` branch in a copy of the file makes both correct and still leaves `src/__tests__/serializer.test.ts` at 271 passing, so no test covers it.

## Hand the raw `value` to `_attr_input_value`'s default helper; a void value writes `value=""` where SSR writes no attribute

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_input_value` | 2026-07-27 | impact:med | effort:low

`_attr_input_value` computes `normalizedValue = normalizeAttrValue(value) || ""` and hands that string to `setDefault`, but the attribute-backed defaults it dispatches to — `_attr_input_value_attribute_default`, and the attribute arm of `_attr_input_value_dynamic_default` — write it through `_attr(el, "value", …)`, which only removes the attribute for `undefined`. So an `undefined`/`null`/`false` `value` renders `value=""` on the client while `html/attrs.ts` › `_attr_input_value` returns `""` and emits no attribute at all; on a checkbox or radio that leaves `el.value` as `""` in CSR and the spec default `"on"` in SSR, so the form submits a different value depending on which half rendered it. It is reached by the idiomatic two-way shorthand — `<input type="hidden" value:=v/>` and `<input type="checkbox" value:=v/>` compile to `_attr_input_value(…, _attr_input_value_attribute_default)` via `getDOMControllableDefaultHelper` in `translator/visitors/tag/native-tag.ts` — and by an uncontrolled spread whose value later goes void (`<input ...{type:"checkbox", value:v}/>` updated from `"x"` to `undefined` leaves `value=""` instead of removing it; the spread's first render escapes only because `_attrs` claims the controllable before `type` is applied, so the dynamic default still sees `type === "text"`). The sibling `_attr_input_checkedValue_default` already passes the raw `value` to `_attr`, and `_attr_input_value_default` re-normalizes with its own `|| ""`, so passing `value` rather than `normalizedValue` to `setDefault` fixes every arm with no other change; nothing covers this today — `grep -rl _attr_input_value_attribute_default packages/runtime-tags/src/__tests__` returns no files. Re-verify from the repo root: `node -r ~ts -e 'const {JSDOM}=require("jsdom");const w=new JSDOM("<input type=checkbox>").window;globalThis.document=w.document;const c=require("./packages/runtime-tags/src/dom/controllable.ts");const h=require("./packages/runtime-tags/src/html/attrs.ts");const el=w.document.querySelector("input");c._attr_input_value({"#i":el},"#i",undefined,()=>{},c._attr_input_value_attribute_default);console.log("CSR",el.outerHTML,JSON.stringify(el.value));console.log("SSR",JSON.stringify(h._attr("value",undefined)))'` prints `CSR <input type="checkbox" value=""> ""` against an empty SSR string.

## Re-apply a controlled `<select>`'s value when its options arrive, instead of adopting the browser's fallback selection and overwriting app state

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_select_value_script` | 2026-07-27 | impact:high | effort:low

The `observeOnce({ childList: true, subtree: true })` callback treats any divergence between the live select and the controlled value as a user change and calls `onChange`, which reports `getSelectValue(el)` back through `valueChange`. When a controlled `<select>`'s options arrive after the initial render — fetched options, a lazily loaded chunk, a `<for>` over data that resolves later — the browser's "ask for a reset" auto-selects the first option the instant they are inserted, so the observer hands the app that first option and silently replaces the value it asked for; the element is left showing the wrong option too, since `setSelectValue(el, oldValue)` inside `onChange` runs against the stale controlled value and then the re-render follows the overwritten state. Preselecting a saved value over asynchronously loaded options is idiomatic, so this loses state on a page that is otherwise correct, with no error after mount. Fix inside the callback: capture the browser's fallback via `getSelectValue(el)` first, then re-apply the controlled value with `setSelectValue`, and fall through to `onChange` (reporting the captured fallback) only when the value still did not take — `el.selectedIndex < 0` for a single select, `el.selectedOptions.length !== value.length` for `multiple`. Both the ordering and the `selectedIndex` test are load-bearing: re-applying before capturing, or re-comparing `el.value` afterwards, changes what fixture `src/__tests__/fixtures/controllable-select-mutated-option` reports when its last option is removed and re-added (controlled value `""`, `el.value` `""`, but `selectedIndex === -1`), which must still report the re-added option. Re-verify: compile `<let/value="b"/><let/opts=[]/><select value:=value><for|o| of=opts><option value=o>${o}</option></for></select><div id="result">${value}</div><button id="go" onClick(){ opts = ["a","b","c"] }>go</button>` with `pnpm run compile -o dom -d`, mount it under jsdom globals, click `#go` and read after a macrotask — `#result` and `select.value` are both `"a"` instead of `"b"`, while disconnecting the scope's `MutationObserver` right after `mount` leaves `#result` at `"b"`.

## Mint `<id>`'s fallback once per scope — a nullish `value=` re-generates the id on every DOM update

`packages/runtime-tags/src/translator/core/id.ts` › `translate.exit` | 2026-07-27 | impact:med | effort:med

`<id/x=value>` folds the fallback into the derived signal itself — `translate.exit` emits `value || _id($scope)` for DOM — and `_id` (`packages/runtime-tags/src/dom/signals.ts`) just bumps a per-`$global` counter, so a nullish `value` mints a brand-new id every time that signal recomputes, while the valueless `<id/x/>` calls `_id($scope)` once from `$setup` and HTML output evaluates `input.id || _id()` once per render. This is the pattern `cheatsheet.md` recommends for reusable tags (`<id/x=input.id>` "reuses a caller's"), so any such tag whose caller omits the id gets an identifier that silently changes on every update, never matches the server-rendered one after resume, and grows the counter without bound; references to that id from outside the same signal (CSS `#id`, `aria-*` set elsewhere, focus/anchor targets, third-party widgets) go stale even though the in-template `for=`/`id=` pair re-renders together. Fix by minting the fallback once per scope the way the no-value path already does — store it at setup and have the derived signal read that slot — leaving the HTML branch of `translate.exit` alone; keep `||` rather than `??`, since `packages/runtime-tags/tags/id.d.marko` types `value` as `string | null | false` and the `false` case is meant to fall through. No fixture covers the `value=` form (`src/__tests__/fixtures/id-tag` uses only `<id/x/>`), so a fixture with an input step would pin this. Re-verify: compile `<id/x=input.id>` + `<div id=x>${input.n}</div>` with `pnpm run compile -o dom -d` — it emits `export const $input_id = ($scope, input_id) => $x($scope, input_id || _id($scope))` — then mount it with jsdom globals and call `update({ id: undefined, n })` twice: the div renders `id="cM_0"`, then `id="cM_1"`, then `id="cM_2"`, whereas the same template written `<id/x/>` stays `cM_0`.

## Extend `<for>`'s `by=` loop-param check past bare identifiers — `by=item.id` compiles to a render-time ReferenceError

`packages/runtime-tags/src/translator/core/for.ts` › `analyze` | 2026-07-27 | impact:med | effort:low

`analyze` rejects a `by=` value that keys off a loop parameter, but the guard is `byAttr?.type === "Identifier" && !tag.scope.getBinding(...)`, so it only fires for a bare `by=item` (the case locked by fixture `src/__tests__/fixtures/error-for-by-param` and by the "`by=item` using the loop variable" row in `cheatsheet.md`). The far more likely React/Vue spelling `by=item.id` is a MemberExpression and slips through, as does `by=`k${item.id}``, and since `by=` is emitted as an argument *outside* the iteration callback the output references an undeclared binding in both targets — HTML emits `_for_of(input.items, item => {…}, item.id, …)` and DOM emits `export const $input_items = ($scope, input_items) => $for($scope, [input_items, item.id])`. Both compile clean and then throw at first render, so the mistake surfaces as a 500 or a broken client bundle instead of the code frame the translator already knows how to produce. Widen the guard to walk the whole `by=` expression for any identifier that resolves only to `tag.node.body.params` (never `tag.scope`, so a module-scope `item` keeps working) and reuse the existing message; extend `error-for-by-param` with the member-expression form. Re-verify from the repo root: `D=$(mktemp -d ./tmp-forby-XXXXXX); printf '<for|item| of=input.items by=item.id>\n <div>${item.name}</div>\n</for>\n' > "$D/t.marko"; pnpm run compile -o html -d "$D/t.marko"; node -r ~ts --input-type=module -e "const m = await import('./$D/t.marko.js'); try { await m.default.render({items:[{id:1,name:'a'}]}).toString(); } catch (e) { console.log(e.name + ': ' + e.message); }"; rm -rf "$D"`compiles without error and prints`ReferenceError: item is not defined`, while the same template with `by=item` fails the compile.

## Scope `getAttrTagIdentifier`'s uid memo to the current translate — a preceding HTML compile leaks the attribute tag's name into the DOM output and shadows a signal

`packages/runtime-tags/src/translator/util/nested-attribute-tags.ts` › `getAttrTagIdentifier` | 2026-07-27 | impact:high | effort:low

`getAttrTagIdentifier` memoizes its translate-time `generateUid` result in the module-level `attrTagToIdentifierLookup` WeakMap, keyed by the `AttrTagMeta` that `analyzeAttributeTags` stored on `tag.node.extra.attributeTags` — but that meta object survives the per-output AST clone, because `t.cloneNode(file.ast, true)` in `packages/compiler/src/babel-plugin/index.js` › `parserOverride` deep-clones nodes while only shallow-copying `extra`, so a name minted during the HTML translate is handed straight back to a later DOM translate of the same file. `generateUid` deliberately copies its counter map at translate ("Translate for DOM does not impact translate HTML"); this memo defeats that, so the DOM run reuses the HTML-only name without consuming a DOM counter and then mints the same name again for something else. Since `packages/compiler/src/config.js` creates one module-level `cache: new Map()` shared by every compile in the process, the SSR-then-CSR order is the default path — the checked-in `known-tag-attr-tags-rest` DOM snapshot already carries the poisoned `let $cond`, where a DOM-only compile emits `let $cond2`. The damage is usually silent rather than loud: an attribute tag whose name matches a signal in the same section (`<const/derived = cond ? 1 : 2/>` beside `<if=cond><@derived a=1/></if><else><@derived a=2/></else>`) compiles cleanly but emits `let $derived` shadowing the module-level `const $derived` signal, so the generated `$derived($scope, …)` call throws `TypeError: $derived is not a function` in the browser; an attribute tag literally named `<@scope>` instead aborts the DOM build with Babel's `Duplicate declaration "$scope"`. Fix by keying the memo to the current translate instead of to analyze-owned state — a `WeakMap<t.BabelFile, Map<AttrTagMeta, string>>` in the shape of `generate-uid.ts`'s `countsForFile`. Re-verify with the `<@derived>` template above: `compileFileSync` it to `dom` with a fresh `cache` Map and again to `dom` through a Map that already served an `html` compile — the first emits `let $derived2` and its `$setup` runs against a stub runtime, the second emits `let $derived` and its `$setup` throws `$derived is not a function`.

The leak also makes both outputs order-dependent byte-for-byte, so the same source compiles to different bytes depending on whether an `html` compile preceded the `dom` one in the process — which defeats any content-hash caching layered on top of the compiler.

## Match `undefined` in `shallowClone`'s constructor switch — the `case null:` arm is dead and a null-prototype metadata value aborts the compile

`packages/compiler/src/babel-plugin/index.js` › `shallowClone` | 2026-07-27 | impact:low | effort:low

`shallowClone` is the only channel carrying `metadata.marko` from the cached analyze file into each output's translate metadata, and it dispatches on `v.constructor`; the `case null:` arm sitting beside `case Object:` is dead, because a prototype-less object has `constructor === undefined`, not `null`. So an `Object.create(null)` value — the idiomatic prototype-less lookup map, used freely elsewhere in the tree (`runtime-tags/src/translator/util/binding-prop-tree.ts`, `visitors/tag/native-tag.ts`) — falls through to `default` and aborts the compile with `TypeError: Cannot read properties of undefined (reading 'name')` thrown out of `Ctor.name`, instead of being spread-cloned as the arm plainly intends; the arm has been there since the switch was written, so the intent is not in question, and the `default` case cannot even name the type it rejected. Fix is two tokens plus a guard: `case undefined:` in place of `case null:`, and `Ctor?.name ?? "null prototype object"` in the `default` message so the fallback still reports something useful. Do **not** widen the surrounding `for (const key in data)` loop to `Reflect.ownKeys` while here: skipping symbol keys is load-bearing, since the compiler uses symbol-keyed metadata for per-source scratch that must not cross the analyze→translate boundary (`babel-utils/imports.js` `IMPORTS_KEY` holds NodePaths into the analyze file's AST, which `parserOverride` clones per output; also `taglib.js` `SEEN_TAGS_KEY` and `loc.js` line indexes), and `babel-utils/tags.js` states the rule inline — `const MACRO_NAMES_KEY = "__marko_macro_names__"; // must be a string literal since it is used across compiler stages.` Re-verify from the repo root: `node -r ~ts -e 'const c=require("./packages/compiler/src/index.js");const mk=v=>({taglibs:[],tagDiscoveryDirs:[],analyze:{Program:{enter(p){p.hub.file.metadata.marko.custom=v()}}},translate:{Program:{exit(p){console.log("cloned:",p.hub.file.metadata.marko.custom);p.node.body.length=0}}}});for(const[l,v]of[["Object.create(null)",()=>Object.create(null)],["{}",()=>({})]]){try{c.compileSync("<div/>","/tmp/x.marko",{output:"html",translator:mk(v),cache:new Map(),optimize:false})}catch(e){console.log(l,"->",e.message.split("\n")[0])}}'` prints `Object.create(null) -> /tmp/x.marko: Cannot read properties of undefined (reading 'name')` for the first value and `cloned: {}` for the second.
