# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## `bigint` zero renders as empty string in text/escape helpers

`src/html/content.ts:26` | 2026-07-03 | impact:low | effort:low

Every text/escape helper special-cases numeric zero with `val === 0` so a
falsy-but-renderable `0` yields `"0"` (`_to_text` line 8, `_unescaped` 15,
`_escape` 26, `_escape_script` 38, `_escape_style` 49, `_escape_style_value`
56, `_escape_comment` 67). A `bigint` zero `0n` is falsy and `0n === 0` is
`false`, so `${0n}` renders `""` instead of `"0"` (a non-zero `bigint` such as
`5n` is truthy and renders fine). The DOM runtime `src/dom/dom.ts:48` shares the
pattern, so SSR and CSR agree — it is a consistent wrong value, not a hydration
mismatch. A correct fix must add `|| val === 0n` (loose `== 0` would make `""`
render as `"0"`) to all seven helpers plus `dom/dom.ts`.

Decided not worth fixing: interpolating a `bigint` directly into the DOM text
APIs is not something you would generally display to a user, so it does not
justify the measurable bundle growth across these hot helpers (bundle size is a
feature). Recorded for the record rather than as work to pick up.

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

## `??` tag-name expression drops its left operand, statically collapsing a dynamic tag to its fallback

`packages/runtime-tags/src/translator/util/tag-name-type.ts:106` | 2026-07-14 | impact:med | effort:low

`analyzeExpressionTagName` handles a `LogicalExpression` tag name by pushing the `left` operand only for `||` (lines 106–107); for `&&` and `??` it sets `nullable = true` and pushes only `right` (lines 108–112). That is correct for `&&` (its value is always the right side when truthy) but wrong for `??`: in `a ?? b` the value is the LEFT operand `a` when non-nullish, so `a` must drive the inferred type. When the right operand is a custom-tag import, inference sets `tagNameImported`/clears `tagNameDynamic` from `b` alone, hard-wiring the tag to `b`. Verified by compiling `<const/Comp=input.renderAs ?? DefaultComp/> <${Comp}/>` for DOM: `DefaultComp`'s `$template` is embedded into the walk and `input.renderAs ?? DefaultComp` is emitted as a dead expression, so `<${Comp}/>` always renders `DefaultComp` and `input.renderAs` is ignored — wrong output. The `||` form correctly compiles to a runtime `_dynamic_tag`; HTML output stays correct, making this a DOM-only wrong render and an SSR/CSR divergence. Fix: push `left` for `??` as well (only `&&` should omit it), and reconsider the unconditional `nullable = true` for `??` (`a ?? b` is only nullable when `b` is).

## Lone null/undefined/false spread on a controllable element crashes `_attrs` with a TypeError

`packages/runtime-tags/src/dom/dom.ts:265` | 2026-07-14 | impact:med | effort:low

`_attrs` guards its attribute-removal loop with `nextAttrs &&` (line 178) but calls `attrsInternal(scope, nodeAccessor, nextAttrs)` unconditionally (line 189). `attrsInternal`'s tag-specific switch probes attributes with the `in` operator without a null guard: `"checked" in nextAttrs` (line 265, INPUT), `"value" in nextAttrs` (298 SELECT / 309 TEXTAREA), `"open" in nextAttrs` (321 DETAILS/DIALOG). When `nextAttrs` is null/undefined the `in` operator throws `TypeError: Cannot use 'in' operator to search for 'checked' in null`, aborting the render. When a tag's only attribute is a single spread the compiler passes the raw value unwrapped — verified: `<input ...maybeNull>` emits `_attrs($scope, "#input/0", $scope.input_attrs)` — so a spread resolving to `null`/`undefined`/`false` reaches the switch directly. The same lone spread on a generic `<div>` renders fine (removal loop guarded; the final `for (const name in nextAttrs)` is a no-op on null), so behavior is inconsistent across tag types. Adding a second attribute wraps the spread in `{...}` (never null), so only a single lone spread is affected; `_attrs_partial` always builds a fresh `partial` object and is safe. Fix: default `nextAttrs` to `{}` in `attrsInternal`, or gate the switch on `nextAttrs &&`.

## Native-tag attributes named after `Object.prototype` members are silently dropped

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:133` | 2026-07-14 | impact:low | effort:low

The duplicate-attribute map `seen` is a plain object literal (`const seen: Record<string, t.MarkoAttribute> = {}`, lines 119 and 1068), so it inherits `Object.prototype`. The dedup checks `if (seen[attr.name])` (analyze, line 133) and `!(seen[attr.name] || ...)` (`getUsedAttrs`, line 1098) therefore report an attribute as already-seen on its FIRST occurrence whenever its name collides with a prototype member — `toString`, `valueOf`, `hasOwnProperty`, `constructor`, `isPrototypeOf`, `toLocaleString`, `propertyIsEnumerable`, `__proto__`. Analyze drops the value's references and `continue`s (also skipping `assertValidNativeAttrName`); `getUsedAttrs` omits the attribute from generated output. Verified: `<div title="c" toString="a">hi</div>` compiles to `_html("<div title=c>hi</div>")` for HTML (and identically drops it for DOM). `__proto__` is worse — `seen[attr.name] = attr` (line 139) writes through the prototype instead of adding a key. Fix: use `Object.create(null)`, a `Map`, or `Object.hasOwn(seen, attr.name)`.

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

## `bigint` zero in a style object is dropped by `stringifyStyleObject`

`packages/runtime-tags/src/common/helpers.ts:61` | 2026-07-14 | impact:low | effort:low

`stringifyStyleObject` emits `name + ":" + value` when `value || value === 0`, special-casing numeric zero so `style={ width: 0 }` renders `width:0`. A `bigint` zero (`0n`) is falsy and `0n === 0` is strictly `false`, so `style={ order: 0n }` returns `""` and the declaration is silently dropped — inconsistent with the `Number` `0` case (had it passed the guard, `"order:" + 0n` is `"order:0"`). This is the style-object analog of the recorded text/escape-helper `0n` issue, in a distinct function; both the SSR caller (`html/attrs.ts:38`) and DOM caller (`dom/dom.ts:102`) pass the raw user value through. Rare in practice (bigint style values are unusual); recorded for completeness. A correct fix adds `|| value === 0n` (loose `== 0` would also let `""` through).

## `assertExclusiveAttrs` uses truthiness, missing conflicts when a controllable value attribute is falsy

`packages/runtime-tags/src/common/errors.ts:127` | 2026-07-14 | impact:low | effort:low

`assertExclusiveAttrs` detects the presence of the `checkedValue` and `checked` value-attributes by truthiness (`if (attrs.checkedValue)` line 127, `if (attrs.checked)` lines 130/135). Mutual exclusivity is a property of an attribute being present, not of its value, so a legitimate falsy value — a radio `checkedValue={0}` / `checkedValue=""`, or a controlled `checked={false}` — makes the branch skip, the conflicting `checked` is never pushed, and the "…are mutually exclusive" error is silently not thrown. The runtime treats these as presence elsewhere (`"checkedValue" in nextAttrs`, `dom/dom.ts:209`), confirming presence is the intended test. Only these two are affected: the sibling `checkedChange`/`checkedValueChange`/`valueChange` are handlers where a falsy value legitimately means absent (consistent with `assertHandlerIsFunction`), so those correctly stay truthiness checks. `MARKO_DEBUG`-only, so a missed dev/test assertion rather than a production fault. Fix: `"checkedValue" in attrs` and `"checked" in attrs`.

## Negative zero serializes as `"0"`, losing its sign on resume

`packages/runtime-tags/src/html/serializer.ts:751` | 2026-07-14 | impact:low | effort:low

`writeNumber` emits `val + ""` for every number, and `(-0) + ""` is `"0"`, so a serialized `-0` resumes on the client as `+0`. `Object.is(-0, +0)` is `false` and `1 / -0 === -Infinity` vs `1 / +0 === +Infinity`, so any scope binding, mutation value, attr-tag value, or array/Map/Set member equal to `-0` comes back sign-flipped; every other number form (`NaN`, `Infinity`, `1e21`, negative `bigint` values) round-trips. Latent — `-0` never originates from Marko-generated code or the runtime, only from user data equal to `-0`, and no fixture exercises it. Fix: `Object.is(val, -0) ? "-0" : val + ""`.

## `createProgramState` cache guard uses truthiness, would recompute a falsy stored value

`packages/runtime-tags/src/translator/util/state.ts:11` | 2026-07-14 | impact:low | effort:low

`createProgramState`'s getter caches with `let state = map.get(getProgram()); if (!state) { map.set(getProgram(), (state = init())); }`. The `if (!state)` truthiness test treats any falsy stored value (`0`, `""`, `false`, `0n`, `NaN`) as absent, so the next read re-runs `init()` and overwrites the caller's value with the init default. Its sibling `createSectionState` (same file) correctly uses `??=` (nullish) for exactly this reason. Latent: the only two falsy-valued program states coincidentally never observe it — `getNextBindingId` (init `() => 0`, `references.ts:197`) is always set to `id + 1 >= 1` before the next read, and `getHasAnalyzeErrors` (init `() => false`, `analyze-errors.ts:13`) only ever stores `true`. A future `createProgramState` whose setter stores a falsy value differing from init would silently recompute. Fix: a `map.has(getProgram())` presence check, or align with `createSectionState`'s nullish pattern.
