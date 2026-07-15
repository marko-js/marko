# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## `Sorted.isSuperset` arithmetic is wrong but the current behavior is load-bearing

`src/translator/util/optional.ts:103` | 2026-07-03 | impact:med | effort:med

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

## `fromIter` drops a falsy first item

`packages/runtime-tags/src/translator/util/optional.ts:209` | 2026-07-13 | impact:low | effort:low

`fromIter` accumulates into `one` and branches on `else if (one)` (line 209), testing truthiness instead of presence. A first-yielded falsy item (`0`, `""`, `false`, `0n`) fails the test, so the second item overwrites it rather than promoting to `[one, item]`, silently discarding the first element. Its sibling `Opt` builders (`push`/`concat`/`filter`) all guard on `!== undefined`. Latent — no current caller feeds a falsy-first iterable — but the inconsistency is a trap. Fix with an explicit `let hasOne = false` flag (or a sentinel) so falsy items are handled like the other helpers.

## `getAllKnownPropNames` enumerates only one level of `rest`

`packages/runtime-tags/src/translator/util/binding-prop-tree.ts:121` | 2026-07-13 | impact:low | effort:low

`getAllKnownPropNames` collects `propTree.props` keys plus `propTree.rest?.props` keys, stopping after one `rest` level, while its siblings `getKnownFromPropTree` and `hasAllKnownProps` (same file) recurse the full `rest` chain. A prop at `rest.rest.props` is thus resolved as "known" by `getKnownFromPropTree` yet absent from the name set `known-tag.ts` builds as `remaining` (`new Set(getAllKnownPropNames(propTree))`, ~lines 494/1025), which tracks known props still to emit — a missing name means that prop is never wired from the spread. Currently unreachable: no fixture builds a 2-level rest chain (instrumenting the whole suite found none), so the fix is byte-identical on every fixture. Fix: `if (propTree.rest) keys.push(...getAllKnownPropNames(propTree.rest));`.

## `load` import with no default specifier crashes translate instead of a diagnostic

`packages/runtime-tags/src/translator/visitors/import-declaration.ts:108` | 2026-07-13 | impact:low | effort:low

The analyze pass validates that any _present_ specifiers are default specifiers (lines 91–97) but never requires one to exist, so a `load` import carrying zero specifiers passes analysis. Translate then does `node.specifiers.find(t.isImportDefaultSpecifier)!` (line 108); `.find` returns `undefined`, the `!`/destructure throws an opaque "Cannot destructure property 'local' of undefined" instead of a `buildCodeFrameError`. Fix: in the analyze block, after the specifier loop, throw a code-frame error when `!node.specifiers.some(t.isImportDefaultSpecifier)`.

## A top-level `return` in one `<script>` short-circuits sibling `<script>`/`<lifecycle>` effects

`packages/runtime-tags/src/translator/core/script.ts:128` | 2026-07-14 | impact:low | effort:low

The DOM path of `script.ts` `translate.exit` inlines a non-async, block-bodied `<script>` as bare statements (`inlineBody = hasDeclaration ? value.body : value.body.body`, line 128), then `addStatement("effect", section, referencedBindings, inlineBody)` (line 133). `addStatement`/`getSignal` key effect statements by the referenced-binding set identity, so multiple `<script>`/`<lifecycle>` tags in one section that reference nothing, or the same single binding, accumulate into ONE `signal.effect` array, emitted as a single `_script(id, (scope) => { ...all statements... })` arrow. A top-level `return` in an earlier inlined script therefore returns out of the whole shared arrow, silently skipping every following sibling's statements. Verified by compiling `<let/x=0/><script>if(!x) return; a(x)</script><script>b(x)</script>` for DOM: both bodies merge into one arrow where `b(x)` is skipped when `!x`, though the second script has no guard. This is a client-only quirk, not an SSR/CSR divergence (script effects are client-only; resume runs the same merged arrow). Fix: wrap each inlined block body in its own IIFE/arrow, or keep the block as a nested statement so `return` stays local.

## SSR controlled-form value normalization diverges from DOM for `0n`/`NaN`/`false`, causing a hydration mismatch

`packages/runtime-tags/src/html/attrs.ts:516` | 2026-07-14 | impact:low | effort:low

`normalizeStrAttrValue` computes `(value && value !== true) || value === 0 ? value + "" : ""`, so `0n` (falsy, `0n === 0` is false), `NaN`, and `false` all normalize to `""`. The DOM counterpart used for the identical selection/checked computation, `normalizeStrProp` (`dom/controllable.ts`) → `normalizeAttrValue` (`dom/dom.ts`), returns `value + ""`, giving `"0"`/`"NaN"`/`"false"`. This normalizer feeds `normalizedValueMatches`, which decides `selected` for controlled `<select>`/`<option>` and `checked` for `<input type=checkbox|radio>`, so SSR and CSR can select different options/checkboxes for the same value. Example: a controlled `<select value=0n>` with `<option value=0>` and `<option value="">` — SSR marks the empty option selected, CSR marks the `value=0` option selected, a genuine hydration mismatch. Distinct from the recorded text/escape-helper `0n` entry, which explicitly notes SSR and CSR _agree_; here the two paths use different formulas and disagree. Latent (no fixture feeds these as controlled values today). Fix: make `normalizeStrAttrValue` agree with the DOM normalizer for non-void, non-`true` values.

## Pseudo-class colon in a nested selector suppresses the interpolation-in-selector compile error

`packages/runtime-tags/src/translator/util/style-interpolation.ts:79` | 2026-07-14 | impact:low | effort:med

`checkStyleInterpolations` treats any `:` seen inside a `{...}` block as a declaration-value colon (`case ":": if (blockDepth) valueColon = true;`, line 79). With CSS nesting, a nested selector's pseudo-class colon (`&:hover`, `:focus`) is also inside a block, so it wrongly sets `valueColon = true`. A `${...}` interpolation placed in that nested selector's prelude then captures `runAfterColon = true`, so the following `{` calls `endRun(true)` but the `!runAfterColon` guard is false and the intended `styleSelectorMsg` error is never thrown. Verified: `<style>.foo { &:hover ${x} { color: red } }</style>` compiles with no error and emits the interpolation as a dynamic `var(--…)` custom property in selector position (invalid CSS), whereas the top-level `.foo:hover ${x}` and colon-free nested `.foo { & ${x} { ... } }` both correctly throw. Fix needs to distinguish a declaration `prop: value` colon from a nested-selector prelude colon (e.g. lookahead to whether the clause ends in `{` vs `;`/`}`), hence medium effort.

## Multiple-select change observer compares controlled value to DOM selection index-by-index

`packages/runtime-tags/src/dom/controllable.ts:352` | 2026-07-14 | impact:low | effort:low

In `_attr_select_value`'s `MutationObserver` (fired when `<option>`s are added/removed), the decision to run `onChange` is `value.length !== el.selectedOptions.length || value.some((v, i) => v != el.selectedOptions[i].value)` (lines 352–353). `value` is `scope[ControlledValue]` in app-supplied order, while `el.selectedOptions` is always document order and selection is applied set-wise (`opt.selected = value.includes(opt.value)` in `setSelectValue`). So a set-equal but reordered controlled array (e.g. `value=["b","a"]` with options rendered `a,b`, both selected) flags a false mismatch on any option add/remove and fires `valueChange(getSelectValue(...))`, silently reordering the app model to document order with no user interaction. Native multi-select never preserves order (any real user change already document-orders the model), so impact is low — the only novel effect is a spurious change side-effect on unrelated option mutations, which stabilizes after one fire. Fix: compare as sets (length plus `every(v => selectedValues.has(v))`).

## `assertExclusiveAttrs` uses truthiness, missing conflicts when a controllable value attribute is falsy

`packages/runtime-tags/src/common/errors.ts:127` | 2026-07-14 | impact:low | effort:low

`assertExclusiveAttrs` detects the presence of the `checkedValue` and `checked` value-attributes by truthiness (`if (attrs.checkedValue)` line 127, `if (attrs.checked)` lines 130/135). Mutual exclusivity is a property of an attribute being present, not of its value, so a legitimate falsy value — a radio `checkedValue={0}` / `checkedValue=""`, or a controlled `checked={false}` — makes the branch skip, the conflicting `checked` is never pushed, and the "…are mutually exclusive" error is silently not thrown. The runtime treats these as presence elsewhere (`"checkedValue" in nextAttrs`, `dom/dom.ts:209`), confirming presence is the intended test. Only these two are affected: the sibling `checkedChange`/`checkedValueChange`/`valueChange` are handlers where a falsy value legitimately means absent (consistent with `assertHandlerIsFunction`), so those correctly stay truthiness checks. `MARKO_DEBUG`-only, so a missed dev/test assertion rather than a production fault. Fix: `"checkedValue" in attrs` and `"checked" in attrs`.

## `createProgramState` cache guard uses truthiness, would recompute a falsy stored value

`packages/runtime-tags/src/translator/util/state.ts:11` | 2026-07-14 | impact:low | effort:low

`createProgramState`'s getter caches with `let state = map.get(getProgram()); if (!state) { map.set(getProgram(), (state = init())); }`. The `if (!state)` truthiness test treats any falsy stored value (`0`, `""`, `false`, `0n`, `NaN`) as absent, so the next read re-runs `init()` and overwrites the caller's value with the init default. Its sibling `createSectionState` (same file) correctly uses `??=` (nullish) for exactly this reason. Latent: the only two falsy-valued program states coincidentally never observe it — `getNextBindingId` (init `() => 0`, `references.ts:197`) is always set to `id + 1 >= 1` before the next read, and `getHasAnalyzeErrors` (init `() => false`, `analyze-errors.ts:13`) only ever stores `true`. A future `createProgramState` whose setter stores a falsy value differing from init would silently recompute. Fix: a `map.has(getProgram())` presence check, or align with `createSectionState`'s nullish pattern.

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

## An empty-bodied `<html-comment>` resumes as a text node instead of the comment

`packages/runtime-tags/src/dom/resume.ts:402` | 2026-07-14 | impact:med | effort:med

For an `<html-comment>${c}</html-comment>` whose body serializes empty, SSR writes `<!---->` immediately before the resume marker. The node-claim heuristic — `prev && (prev.nodeType < 8 /* COMMENT_NODE */ || (prev as Comment).data) ? prev : insertBefore(new Text())` — exists so an empty `<!>` separator is _not_ claimed (a fresh Text node is created instead), but it cannot distinguish an intentional empty comment: `prev` is a comment (`nodeType === 8`, so `< 8` is false) with empty `data` (falsy), so it builds a Text node as the binding rather than claiming the comment. After hydration, setting `c = "secret"` renders `secret` as visible text where a pure client render produces `<!--secret-->` — an SSR-resume vs CSR divergence. Fix: give the html-comment marker a dedicated resume symbol (e.g. `ResumeSymbol.NodeComment`) that claims the immediately-preceding sibling unconditionally, since the tag always writes its comment right before the marker.
