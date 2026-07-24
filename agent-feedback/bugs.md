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

## Stop `attrTag`/`attrTags` from mutating a user object when an attribute tag's attrs are a lone spread

`packages/runtime-tags/src/common/attr-tag.ts` › `attrTag` | 2026-07-23 | impact:high | effort:med

`attrTag(attrs)` mutates its argument in place (`attrs[Symbol.iterator] =
attrTagIterator; attrs[rest] = empty`), and `attrTags` then writes sibling attr
tags into `first[rest]`. That is safe only while the argument is a
compiler-built object literal — but `propsToExpression`
(`packages/runtime-tags/src/translator/util/translate-attrs.ts`) returns the
spread argument itself when the property list is a single `SpreadElement`, so
`<@item ...obj/>` compiles to `attrTag(obj)` on the user's own binding.
Consequences on a plain `<let>`/`input` object: it silently gains
`Symbol.iterator` plus the internal `Symbol(Attribute Tag)` (both copied by
`{...obj}`), `[...obj]` starts yielding the object and its attr-tag siblings,
`Object.freeze`d objects throw `TypeError: Cannot add property
Symbol(Symbol.iterator), object is not extensible` at render, and the HTML
serializer's `writeMaybeIterableProps` switches the object to its iterable form,
dragging an unrelated sibling attr tag's data into the resume payload. The
`<for|row| of=input.rows><my-tag><@item ...row/></my-tag></for>` shape mutates
every row of the caller's data. Fix at the translator: give the four
`attrTag`/`attrTags` call sites (`translate-attrs.ts` ~105/113/208/221 and
`packages/runtime-tags/src/translator/util/known-tag.ts` ~940/947/999/1006) a
variant of `propsToExpression` that always emits `t.objectExpression(props)`, so
the runtime always receives a fresh object; `propsToExpression`'s unwrapping
stays correct for ordinary tag input. No fixture covers a lone-spread attribute
tag today (`grep -rn '<@' packages/runtime-tags/src/__tests__/fixtures
--include=template.marko | grep '\.\.\.'` returns nothing), so add one.
Re-verify: compile `<let/obj={label:'a'}/><my-tag><@item ...obj/></my-tag>` and
confirm the output contains `_attrTag($scope.obj)` rather than
`_attrTag({...})`.

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

## Compensate for the HTML parser dropping a `<textarea>`'s leading newline in `_textarea_value`

`packages/runtime-tags/src/html/attrs.ts` › `_textarea_value` | 2026-07-23 | impact:med | effort:low

`_textarea_value` (attrs.ts:133) writes the textarea's value straight into the
element body as `_escape(normalizeStrAttrValue(value))`, so a value beginning
with a newline serializes as `<textarea>\nhello</textarea>`. The HTML tokenizer
discards the first newline after a `<textarea>` start tag, so the browser parses
that back as `"hello"` — the leading blank line is silently lost on every SSR
render, while CSR keeps it (`dom.ts:42` aliases `_attr_textarea_value` to
`_attr_input_value`, whose `_attr_input_value_default` in `dom/controllable.ts`
assigns `el.defaultValue = value` verbatim). It affects all three authoring
forms (`value=`, `value:=`, and a `${}` body), and for the controlled form it
also corrupts resume: `_attr_input_value_script` seeds
`AccessorPrefix.ControlledValue` from `el.defaultValue`, so the client's
controlled value starts one character behind the server's. Fix as React does —
have `_textarea_value` prepend a `\n` when the escaped string starts with `\n`
or `\r` (all of `\n`, `\r\n`, `\r` leads lose the newline). Re-verify:
SSR-render `<textarea value=input.v/>` with `v = "\nhello"`, confirm the emitted
HTML is `<textarea>\nhello</textarea>`, parse it with jsdom and observe
`el.value === "hello"`, versus `el.defaultValue = "\nhello"` giving `el.value
=== "\nhello"` on the client.

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

## Stop `attrsInternal` from clearing controlled slots the spread does not own

`packages/runtime-tags/src/dom/dom.ts` › `attrsInternal` | 2026-07-23 | impact:high | effort:low

`attrsInternal` unconditionally resets `scope[AccessorPrefix.ControlledType +
nodeAccessor] = ControlledType.None` and `scope[AccessorPrefix.ControlledHandler

- nodeAccessor] = 0`(dom.ts:264-265) before its tag switch, on the assumption
that the spread owns the element's controllable. That is false for`_attrs_partial`(dom.ts:215): it filters every name present in`skip`out of`partial`, so when the controllable is declared as a static attribute alongside
a spread (`<input ...rest value:=v/>`, which compiles to `_attrs_partial($scope,
"#input/3", $scope.rest, { value: 1, valueChange: 1 })`), the switch never
re-installs the handler and the reset wins. `_attr_input_value_script`/`_attr_input_checked*_script`/`_attr_select_value_script`in`dom/controllable.ts`all read the handler lazily out of that slot at
interaction time, so the two-way binding is silently dead: typing into the input
never calls`valueChange`, the state never updates, and the element is left
holding the un-reverted user value. It fires on every CSR mount whose spread
signal is ordered after the controllable's signal, and after any client re-run
of the spread signal following SSR resume; the binding only revives if the
controllable's own signal happens to re-run. The HTML runtime's `_attrs`never
clears these slots, so this is a DOM-only asymmetry. Fix by giving`attrsInternal`a way to know the controllable is skipped (e.g.`_attrs_partial`suppressing the reset when the tag's controllable props appear in`skip`, or
passing `skip`through). Re-verify: in`src/**tests**/fixtures/controllable-partial-spread`, add `<span>${v}</span>` to
`template.marko` and change `config.steps` to `[{}, typeBound]` (dropping the
`click` step, which currently masks the bug by re-running `$v`and reinstalling
the handler) —`v`stays`"a"`while the input shows`"typed"`.

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

## Fix `_await_promise` crashing when its `<await>` branch has not been created yet

`packages/runtime-tags/src/dom/control-flow.ts` › `_await_promise` | 2026-07-23 | impact:high | effort:med

`_await_promise`'s returned signal reads `let awaitCounter =
tryBranch[AccessorProp.AwaitCounter]` (control-flow.ts:91) where `tryBranch =
tryPlaceholder || awaitBranch` and `awaitBranch =
scope[AccessorPrefix.BranchScopes + nodeAccessor]`. That branch is created by
`_await_content`, and the runtime already anticipates running before it — the
non-promise fast path at :64-81 stashes a `resolve` closure on
`scope[promiseAccessor]` precisely for the "branch not created yet" case — but
the promise path does not, so with no enclosing `<try placeholder>` both
operands are `undefined` and it throws `TypeError: Cannot read properties of
undefined (reading '#AwaitCounter')`. Two ordinary shapes hit this on the
client: (a) `<for|item| of=items><await|v| =item.p>` — `loop` calls
`createAndSetupBranch` (which only _queues_ setup via `setupBranch` →
`queueRender(branch, setup, -1)`) and then invokes `params?.(branch, args)`
synchronously at control-flow.ts:842, so the params chain containing
`_await_promise` runs before `_await_content`; and (b) any `<if>`/`<for>` body
whose awaited value is an outer closure, where the translator emits
`$if_content__setup = $scope => { $if_content__input_p._($scope);
$await_content($scope); }` — the closure feeding `_await_promise` is emitted
_before_ `_await_content`. Because case (a) is structural in `loop` (params
always precede queued setup), a runtime-side fix is needed regardless of
translator emission order: mirror the sync path by deferring the whole promise
handshake (stash a resolver on `scope[promiseAccessor]` and let `_await_content`
drive it) or make branch creation lazy/idempotent so `_await_promise` can
materialize it. Re-verify by adding a fixture `template.marko` of `<for|item|
of=input.items><await|v| =item.p><div>${v}</div></await></for>` with `steps:
[{items:[{p:resolveAfter(1)}]}, wait]` and running its CSR step; today it throws
at control-flow.ts:91 instead of rendering.

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

## Flush queued cleanup effects when a scope is destroyed outside a render, so `destroy()` runs `<lifecycle> onDestroy` and aborts `$signal`

`packages/runtime-tags/src/dom/abort-signal.ts` › `$signalReset` | 2026-07-23 | impact:high | effort:low

`$signalReset` does not abort its `AbortController` directly — it defers via
`queueEffect(ctrl, abort)` (abort-signal.ts:7) into the module-level
`pendingEffects` array in `dom/queue.ts`, which is only drained by
`run()`/`prepareEffects`. That is fine for destroys that happen inside a render,
but three destroy entry points run outside one and never flush:
`MountedTemplate.destroy()` in `dom/template.ts` › `mount`
(`removeAndDestroyBranch(branch)` at template.ts:147), `initEmbedded`'s
MutationObserver in `dom/resume.ts` (`destroyScope(scopes[id])` at
resume.ts:90), and `compat.runComponentDestroy` in `dom/compat.ts:84`. Because
`<lifecycle>` wires teardown through the same channel — `_lifecycle` ends with
`$signal(scope, accessor).onabort = () => thisObj.onDestroy?.()`
(`dom/dom.ts:494`) — destroying a mounted template removes the DOM but never
runs `onDestroy` and never aborts in-flight `$signal` fetches; the stranded
`(abort, ctrl)` pair then fires at an arbitrary later time if any unrelated
`run()` ever happens, or never at all in an otherwise idle host. This leaks
timers/subscriptions/observers for every embedder that mounts and unmounts Marko
6 imperatively (micro-frontends, testing-library cleanup, Class-API interop).
Fix direction: have `destroyScope`/`destroyBranch` (or each out-of-render
destroy site) run the effects it queues, e.g. wrap the destroy in
`runEffects(prepareEffects(() => removeAndDestroyBranch(branch)))`, or make
`$signalReset` abort synchronously when `rendering` is falsy. Re-verify: in
jsdom, build `_script('t_0', $s => _lifecycle($s, {
onMount(){log.push('mount')}, onDestroy(){log.push('destroy')} }))` under a
`_let`, `_template(...).mount({}, document.body, 'afterbegin')`, then call
`instance.destroy()` — `log` is `["mount"]` and `pendingEffects.length` is 2; a
subsequent bare `queue.run()` turns it into `["mount","destroy"]`.

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

## Clear the pending `resolve`/`reject` in the async iterator so a slow consumer does not silently lose stream chunks

`packages/runtime-tags/src/html/template.ts` › `ServerRendered[Symbol.asyncIterator]` | 2026-07-23 | impact:high | effort:low

The `onWrite` callback passed to `#read` is `(html) => { value += html; if
(resolve) { resolve({ value, done }); value = ""; } }`, but `resolve`/`reject`
(assigned by the inner `exec` executor) are never cleared once their promise
settles. A stale `resolve` is therefore still truthy on the next flush: calling
it is a no-op on the already-settled promise, yet `value = ""` still runs and
discards the buffered HTML. Because `#read` gates flushes on `queueTick`
(setImmediate), any `for await` body that takes longer than one tick loses every
chunk written while it was busy; worse, `onClose` also hits the stale `resolve`,
so `done` flips to true and the iterator ends normally — the caller gets a
truncated document with a 200 and no error. `toReadable()`/`pipe()` are
unaffected because they push unconditionally, so the loss is specific to the
documented `for await (const chunk of template.render(...))` API. Fix: capture
the settler into a local, null out `resolve`/`reject` before invoking it, and
add a fixture/unit test that consumes a multi-`<await>` render with an
artificial per-chunk delay. Re-verify with `node -r ~ts` on a script that
renders a template with four staggered `_await`s and consumes it via `for await`
with `await new Promise(r=>setTimeout(r,60))` in the loop body: today it yields
only the first chunk, and should yield the same joined HTML as a zero-delay
consumer.

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

## Emit a circular generator return value lazily instead of a deferred assignment that produces invalid JS

`packages/runtime-tags/src/html/serializer.ts` › `writeGenerator` | 2026-07-23 | impact:high | effort:med

`writeGenerator` serializes a generator's return value with `writeProp(state,
returnValue, ref, "")` (serializer.ts:1627) — an empty accessor, because the
return value has no property path off the generator. When that value is
already-referenced and circular relative to the generator (it is the generator
itself, or any ancestor on the write tree), `writeReferenceOr` takes the
deferred-assignment branch and builds `accessId(state, parent) + toAccess("")`.
`toAccess("")` (serializer.ts:1941) reads `accessor[0]` as `undefined` and falls
through to the `"." + accessor` branch, yielding a bare `"."`, so the extras
section emits `_.b.=_.a` — a SyntaxError. Because the whole flush is written as
one `<script>` (`M._.r=[...]` in html/writer.ts), the parse failure kills the
entire page's resume payload, not just that value, and nothing warns even under
MARKO_DEBUG. Since the generator body is lazily evaluated, the fix is to emit
the circular return inside the body (`(function*(a){yield*a;return _.a})([1])`)
rather than as an eager argument plus a post-hoc assignment; failing that,
detect the empty accessor and abort loudly. Re-verify: serialize `const obj =
{}; function* g(){ yield 1; return obj; } obj.g = g();` through
`Serializer#stringifyScopes([[1, {}, { value: obj }]], boundary)` and `eval` the
result — it currently throws `SyntaxError: Unexpected token '='`.

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

## Lower `||=` / `&&=` / `??=` on a tag variable — they crash the DOM translator with an internal Babel error

`packages/runtime-tags/src/translator/util/signals.ts` › `replaceAssignedNode` | 2026-07-23 | impact:med | effort:low

In `replaceAssignedNode`'s `AssignmentExpression` → `Identifier` case, a
compound assignment is lowered with `t.binaryExpression(node.operator.slice(0,
-1) as t.BinaryExpression["operator"], …)` (signals.ts ~:1564). For the logical
assignment operators the sliced operator is `||`, `&&` or `??`, which are
`LogicalExpression` operators, not binary ones — the `as` cast hides this from
TypeScript and Babel's validator throws `Property operator expected value to be
one of ["+","-",…] but got "||"` with no code frame, from inside `writeSignals`
→ `traverseReplace`. So `<let/x=1/><button onClick(){ x ||= 5 }>` is a hard
build failure for any Marko 6 app: `-o html` compiles fine (the handler body is
registered, not serialized) and only `-o dom` dies, so the error surfaces as an
opaque internal TypeError rather than a source-level diagnostic. Fix by emitting
`t.logicalExpression` for `||`/`&&`/`??` (and ideally preserving short-circuit
assignment semantics — the current shape would call the setter unconditionally,
which matters for a `<let>` with `valueChange`, whose `_let_change` invokes the
parent's change handler on every call). Separately, the `UpdateExpression` case
just above lowers `x++` to `$x(scope, scope.x + 1) - 1`, which is `x = x + 1`
rather than JS's `ToNumeric(x) + 1`: for `<let/x="5"/>` an `x++` sets `x` to
`"51"` and yields `50` instead of setting `6` and yielding `5`, and for a bigint
`<let>` it throws "Cannot mix BigInt and other types". Re-verify: `npm run
compile -- -o dom -d f.marko` on `<let/x=1/><button onClick(){ x ??= 5
}>x</button>${x}` throws the Babel operator TypeError; the same file with `x +=
5` compiles.

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

## Make `assertIsDeepSubset` compare Map/Set/Headers/Date contents instead of only the constructor name

`packages/runtime-tags/src/__tests__/serializer.test.ts` › `assertIsDeepSubset` | 2026-07-23 | impact:high | effort:low

`assertIsDeepSubset` is the round-trip correctness gate behind every
`assertStringify` call in serializer.test.ts, but after the constructor-name
check it walks `Reflect.ownKeys(subset)` — which is `[]` for `Map`, `Set`,
`Date`, `URL`, `URLSearchParams`, `Headers`, `FormData`, `ArrayBuffer`,
`Promise`, `Request` and `Response`, because their state is internal. Its `case
Symbol.iterator:` arm never fires for those types either (their iterator lives
on the prototype, not as an own key; it only fires for the
plain-object-with-own-iterator attr-tag shape exercised by the `Symbol.iterator
inline` tests), so for every built-in the deep check silently degenerates to
"same constructor name". That is exactly the hole the already-filed
`writeMap`/`writeSet` ancestor-reference data-loss bug slipped through: the
payload string still looks plausible, so the string assertion passes, and the
value check accepts a `Set` that round-tripped to `size === 0`. Fix by
dispatching on the classified constructor — compare
`[...map]`/`[...set]`/`[...headers]`/`[...formData]`/`[...searchParams]`
entrywise and `+date`/`String(url)` for the opaque scalars — before falling back
to the own-key walk. Re-verify: `assertIsDeepSubset(new Set(), new Set(["a"]))`
currently returns without throwing, and round-tripping `const parent={name:'p'};
const s=new Set(); s.add(parent); parent.set=s;` through
`Serializer#stringifyScopes` yields a value whose `set.size` is 0 while
`assertIsDeepSubset(result, parent)` still passes.

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
value:parseInt:=value/><input type="text" value:=value/>` with `node -r ~ts
scripts/inspect-compiled-output.ts -o dom -d -t <abs path to
packages/runtime-tags/src/translator/index.ts> <file>.marko` and confirm the
second `_attr_input_value` no longer receives a `parseInt`-wrapped handler.

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

## Emit every statement parsed from an `<import>`/`<export>` tag, not just the first

`packages/runtime-tags/src/translator/core/import.ts` › `parse` | 2026-07-23 | impact:med | effort:low

`parse` replaces the tag with `parseStatements(tag.hub.file, node.rawValue!,
node.start!, node.end!)[0]` (import.ts:7) and discards every statement after the
first; `packages/runtime-tags/src/translator/core/export.ts` › `parse` (:7) is
byte-identical in this respect. `rawValue` is the whole raw open tag, so one
source line can legitimately parse to several statements: a template beginning
`import { a } from "./a"; import { b } from "./b"` compiles to a module
containing only the first import while the body still references `b`, yielding
generated code with a free identifier and no compile error, warning, or
`meta.diagnostics` entry — the failure surfaces later as a render-time
`ReferenceError` (or an unresolved global after bundling). `export const p = 1;
export const q = 2` drops `q` the same way. The sibling statement tags already
handle this correctly: `core/static.ts`, `core/server.ts`, and `core/client.ts`
keep the full `parseStatements` result and wrap it in a `markoScriptlet`, so the
fix is either `tag.replaceWithMultiple(parseStatements(...))` or a
`buildCodeFrameError` when more than one statement comes back. Re-verify:
compile a template whose first line is `import { a } from "./a"; import { b }
from "./b"` followed by `<div>${a} ${b}</div>` and confirm the output contains
only `import { a } from "./a";` while the render body still escapes a bare `b`.

## Stop the DOM compile from failing with an internal error on an unreferenced `<define>` that has body content

`packages/runtime-tags/src/translator/core/define.ts` › `analyze` | 2026-07-23 | impact:med | effort:low

A `<define>` with body content whose tag variable is never referenced aborts the
`dom` compile with `Marko internal error: analysis marked this template's setup
export as empty but translation produced statements for it. Please open an issue
with a reproduction.` (thrown at `visitors/program/dom.ts:170-177`), while the
same template compiles fine for `html` — so SSR-only checks pass and only the
client build breaks, with an error that tells the user to file an issue. Cause:
in `analyze`, when `babelBinding.referencePaths` is empty the loop never runs,
`allDirectReferences` stays `true`, and the `if (allDirectReferences)` branch
(define.ts:86-94) returns early, skipping `setBindingDownstream(varBinding,
tagExtra)`; that call is the only thing that eventually reaches
`finalizeReferences`' `addSetupStatement(expr.section)`
(`util/references.ts:918-926`), because `core/define.ts` never calls
`addSetupExpr`/`addSetupStatement` itself (contrast `core/await.ts:124`).
`translate.exit` nevertheless still runs `addValue(section, …,
initValue(tag.get("var").node!.extra!.binding!)!, propsToExpression(...))`
(define.ts:172-177), which lands in the setup signal and contradicts the
`setupEmpty` proof. The fix should make an unreferenced `<define>` emit nothing
at all (the same shape as the existing `!varBinding` and
`allDirectReferences`+refs paths, both of which drop the tag) rather than merely
recording a setup statement — note that when the template has other setup work
the current code compiles but emits dead `(/* Foo */{});` in `$setup`.
Re-verify: `pnpm run compile -- -o dom` on a file containing exactly
`<define/Foo>content</define>` and `<div>hi</div>` throws the internal error in
both debug and optimize, while `-o html` succeeds; adding `<let/n=0/>` plus a
`<button onClick(){n++}>` to the same file makes it compile and emit the dead
`{}` instead.

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

## Handle array-form tag `migrate` hooks in the interop taglib merge — `<attrs>`/`<effect>` crash every interop compile

`packages/runtime-tags/src/translator/interop/index.ts` › `mergeTagDef` | 2026-07-23 | impact:high | effort:low

`mergeTagDef` routes a tag definition's `migrate` key through
`mergeVisit(normalizeVisit(value5), normalizeVisit(value6))`, but
`normalizeVisit` only recognises a function or a `{enter,exit}`/`{default}`
object. `translator/core/attrs.ts` and `translator/core/effect.ts` declare
`migrate: [fn]` — an array, which the compiler's taglib loader natively supports
(`loadTagFromProps.migrate` recurses over arrays) — so
`getVisitorEnter`/`getVisitorExit` both see `undefined` and `mergeVisit` returns
`undefined`. `mergeObjects` still writes the key, so the merged `marko-core`
taglib ends up with `"<attrs>".migrate === undefined`; the loader then pushes `{
hook: undefined }` and `addMigrators`
(`packages/compiler/src/babel-plugin/plugins/migrate.js:49`) dereferences
`migrator.hook.default`, throwing `TypeError: Cannot read properties of
undefined (reading 'default')` with no filename, line, or code frame. Every
compile through `marko/translator` of a template containing `<attrs>` or
`<effect>` fails this way, including inside a `tags/` directory, while the
identical template compiles under `@marko/runtime-tags/translator` and merely
emits the deprecation diagnostic that would have auto-rewritten it; `<attrs>`
still appears in 10+ `src/__tests__/fixtures/` templates but in zero
`fixtures-interop/` ones, which is why it is untested. Fix
`normalizeVisit`/`mergeVisit` to flatten array-form hooks and make
`mergeObjects` omit keys whose merged value is `undefined` so a dropped hook can
never reach the loader as a null hook, then add a `fixtures-interop/` fixture.
Re-verify: `node -r ~ts -e 'const
core=require("./packages/runtime-class/src/translator.js").taglibs.find(([id])=>id==="marko-core")[1];console.log("migrate"
in core["<attrs>"], core["<attrs>"].migrate)'` prints `true undefined`, and
compiling a template whose body is `<attrs/{ a }/>\n<div>${a}</div>` with
`marko/translator` throws the TypeError above.

## Classify `<html-script>`/`<html-style>` as Tags-API markers in interop feature detection

`packages/runtime-tags/src/translator/interop/feature-detection.ts` › `getFeatureTypeFromCoreTagName` | 2026-07-23 | impact:med | effort:low

`getFeatureTypeFromCoreTagName` enumerates the core tag names that identify a
file as Class API or Tags API, but four Marko 6-only core tags registered in
`translator/core/index.ts` appear in neither list: `<html-script>`,
`<html-style>`, `<attrs>` and `<effect>` (the Marko 5 core taglib,
`packages/runtime-class/src/translator/taglib/core/index.js`, defines none of
them). A template outside a `tags/` directory — any file in a Marko 5 project,
e.g. under `components/` or a route folder — whose only Marko 6 marker is
`<html-style>` therefore falls through to `FeatureType.Class` and is translated
by the Marko 5 translator, which has no such tag: the emitted server code
contains a literal `out.w("<html-style>")`, so the stylesheet silently renders
as an unknown element with no error, warning, or diagnostic in any mode.
`<html-script>` behaves identically; `<attrs>`/`<effect>` crash first for an
unrelated reason (separate entry). Both are current, documented core tags
(website `docs/reference/core-tag.md` § `<html-script>` & `<html-style>`), so
add them to the `FeatureType.Tags` case — or better, derive the two lists from
the difference between the runtime-tags and runtime-class core taglibs so a
future Marko 6-only tag cannot be forgotten. Re-verify: compile a template whose
entire body is `<html-style>\n .a { color: red }\n</html-style>` from a
directory that is not under `tags/`, using `marko/translator`; `meta.api` is
`class` and the output contains `out.w("<html-style>")`, whereas prepending
`<!-- use tags -->` flips `meta.api` to `tags` and emits
`<style${_attr_nonce()}>`.

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
compile -o dom -d -t <abs>/packages/runtime-tags/src/translator/index.ts
x.marko` on `<div>${""}${input.x}<b/><i/></div>` and on the same template
without `${""}`; the walk comments differ (`next(1), over(1), replace, out(1)`
vs `next(1), get, out(1)`) even though the DOM the two describe is the same
shape.

## Skip non-rendering siblings in `getPrevStaticSibling` so a split static-text run emits one walk step, not two

`packages/runtime-tags/src/translator/util/static-text.ts` › `getPrevStaticSibling` | 2026-07-23 | impact:high | effort:low

Adjacent static text merges into a single DOM text node in the generated
template string even when a sibling that renders nothing sits between the two
runs (`<const>`, `<let>`, `<script>`, `<lifecycle>`, `<effect>`, a top-level
`static` scriptlet, an `import`/`export`). But `getPrevStaticSibling` only walks
past `MarkoComment` and confidently-void placeholders, so
`isStaticText(getPrevStaticSibling(...))` is false for the second run and
neither `visitors/text.ts` (analyze, `kSharedText`) nor
`visitors/placeholder.ts` (analyze, `isStaticText(node)` branch) defers its walk
step — each run calls `walks.enterShallow`, producing `over(2)` for one text
node. Every accessor claimed after that point in the section is off by one
sibling, so DOM refs and event bindings attach to the wrong node (silently in
optimize, where accessors are numeric). Fix direction: make the skip predicate
"emits no DOM node" — `getNodeContentType(prev, "endType") === null` from
`util/sections.ts` already returns null for scriptlets, comments, import/export
and every non-rendering core tag (`placeholder.ts`'s own `analyzeSiblingText`
already uses it and is therefore correct) — while keeping the existing
void-placeholder skip. Re-verify: compile `<let/n=1/>` + `<div>` Hello /
`<const/m=n*2/>` / World / `<button onClick(){ n = n + m }>click</button>` /
`<span>${n}</span>` `</div>` with `node -r ~ts
scripts/inspect-compiled-output.ts -o dom -d x.marko`; `$walks` is `next(1),
over(2), get, over(1), next(1), get, out(2)` while deleting only the `<const>`
line yields a byte-identical `$template` with `over(1)`.

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

## Strip `$global` from the input `MountedTemplate.update` forwards to the input signal

`packages/runtime-tags/src/dom/template.ts` › `mount (the returned object's `update`)` | 2026-07-23 | impact:med | effort:low

`packages/runtime-tags/index.d.ts` declares `Marko.MountedTemplate.update(input:
Marko.TemplateInput<Input>): void`, and `Marko.TemplateInput<Input> = Input & {
$global?: Marko.Global }`, so the public type explicitly invites
`instance.update({ ...input, $global })`. `mount` in `src/dom/template.ts`
destructures `$global` out before invoking the input signal (`({ $global,
...input } = input)` then `args?.(branch, input)`), but the returned
`update(newInput)` passes the object through verbatim to `args(branch,
newInput)`. `$global` is therefore neither applied (the branch's
`AccessorProp.Global` is fixed by `createBranch` at mount time) nor removed, so
it leaks into `input`: for any template that spreads or rests its input — `<div
...input/>` compiles to `_attrs_content($scope, "#div/0", $scope.input)` —
`attrsInternal` in `src/dom/dom.ts` walks every own key, throwing `Invalid
attribute name: "$global"` from `assertValidAttrName` under `MARKO_DEBUG` and,
with debug stripped, falling through to `_attr(el, "$global", value)` so the
element renders a literal `$global="[object Object]"` attribute. Fix by
destructuring `$global` in `update` exactly as `mount` does (or by narrowing the
declared parameter to `Input`, matching `website/docs/reference/template.md` ›
`instance.update(input)`, which never mentions `$global`). This is distinct from
the existing unclear.md entry about typing `$global` for render tests/Storybook,
which concerns `Marko.Global` being unchecked against a route `Context`.
Re-verify: mount `<div ...input/>` with `template.mount({class:"a"},
document.body, "afterbegin")` (renders `<div class="a">`), then call
`instance.update({class:"b", $global:{renderId:"x"}})` and observe the `Invalid
attribute name: "$global"` throw.

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

## Key the Class-API compat registration by boundary mode; the first call site's `preserve` decision currently wins for every other use of that component

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `pushCompatRegistration` | 2026-07-23 | impact:high | effort:med

`pushCompatRegistration(key, statement)` (dynamic-tag.ts:95) dedupes on
`classFile.metadata.marko.id`, but the statement it guards is NOT call-site
invariant: `preserveBoundary` (`:335`) is `!tagsSerializeReason &&
(classHydration === Descendant || (Self && hasComponentBrowser))`, and
`tagsSerializeReason = getSerializeReason(tagSection, nodeBinding)` differs per
tag. So when one template renders the same Class-API component at an inert call
site (emits `s(id, Cmp, "preserve")`) and at a call site the Tags side can
update (emits `s(id, Cmp)`), only the first-translated registration is emitted
and BOTH call sites get that mode. This is not cosmetic: `register(id, renderer,
boundaryMode)` does `boundaryModeByRenderer.set(renderer, boundaryMode || true)`
(packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js:239),
and `beginComponent` maps `"preserve"` to `isSplitComponent = true`, skipping
`componentDef.___flags |= FLAG_WILL_RERENDER_IN_BROWSER`
(packages/runtime-class/src/node_modules/@internal/components-beginComponent/index.js:42-70)
— visible on the wire as the missing `"f": 1` in the `$MC` payload (compare
`fixtures-interop/interop-reactive-split-tags-to-class/__snapshots__/writes.html`,
which has it, with
`interop-self-interactive-split-tags-to-class/__snapshots__/writes.html`, which
does not). A stateful call site that inherits `"preserve"` is therefore
serialized as a component that will never re-render in the browser, while in the
opposite source order the inert call site loses its preserve optimization;
because `boundaryModeByRenderer` is a per-renderer Map, the same clobbering
happens across templates in one process (last module evaluated wins). Fix
direction: move the boundary mode off the module-level `s()` registration onto
the per-call-site `_dynamic_tag` invocation. Merely keying the dedupe on the
mode and emitting both registration forms does not work — `boundaryModeByRenderer`
is keyed by renderer, so the second `s()` call just overwrites the first.
Re-verify: copy
`fixtures-interop/interop-self-interactive-split-tags-to-class/components/split-counter`
next to two templates that differ only in statement order — `<let/n=0/><button
onClick(){n++}>${n}</button><split-counter/><split-counter count=n/>` vs. the
two `split-counter` lines swapped — compile both with `-o html` using the
interop translator and diff the `s(...)` line: one emits `"preserve"`, the other
does not.

## SSR silently drops `content=` on void and text-only native tags, and on any tag whose body is only Marko comments

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `translate.html.enter` | 2026-07-23 | impact:med | effort:low

The native-tag `content=` attribute has two silent-drop paths. (1) In the HTML
translate `enter`, the write-close chain tests `if (isOpenOnly || isTextOnly)
write`>`` before `else if (staticContentAttr)` (native-tag.ts:560-579), so
`content` is never rendered for a void (`openTagOnly`) or text-only tag; the DOM
`enter` has no such guard and emits `_attr_content` unconditionally (:956-972),
so `<textarea content=input.x/>` and `<input content=input.y>` compile to
`_attr_content($scope, "#textarea/0", input_x)` for CSR but to plain
`<textarea></textarea><input>` with no `_attr_content` for SSR — a CSR/SSR
divergence with no diagnostic (`<div content=input.z/>` in the same file does
emit `_attr_content` in both). (2) The analyze guard `attr.name === "content" &&
tag.node.body.body.length` (:132-142, mirrored in `getUsedAttrs` at :1166)
counts `MarkoComment` nodes as body content, so `<div content=input.x><!-- note
--></div>` renders an empty `<div>` in both outputs — the comment is stripped
and the content attribute was dropped because of it.
`translator/util/is-only-child-in-parent.ts` already filters `node.type !==
"MarkoComment"` for exactly this kind of body-length test, so the same filter
belongs here. For (1), either handle `content` consistently or raise a compile
error saying `content` is not supported on void/text-only elements. Re-verify:
`pnpm run compile -o dom -d` and `-o html -d` on a file containing `<div
content=input.z/><textarea content=input.x/><input content=input.y>` and diff
which tags get `_attr_content`; then compile `<div content=input.x><!-- hi
--></div>` and observe `<div></div>` with no `_attr_content` in either output.

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
class="x"><b>x</b></Wrap>` with `node -r ~ts scripts/inspect-compiled-output.ts
-o dom -d -t packages/runtime-tags/src/translator/index.ts <file>` — the import
list is `_attrs_content, _attrs_script, _text, _on, _script, _const,
_closure_get, _content, _closure, _let, _template`, containing no helper that
enables branches, yet `_attr_content` creates a `BranchScope` at mount.

## Reject `await` in a template expression instead of emitting a JavaScript SyntaxError

`packages/runtime-tags/src/translator/core/const.ts` › `default export › analyze` | 2026-07-23 | impact:high | effort:low

`<const/x=await fetch("/a")/>` compiles with no error, no warning and no
`meta.diagnostics` entry, but the generated module is not valid JavaScript: the
dom target emits `export function $setup($scope) { $x($scope, await
fetch("/a")); }` and the html target emits `_template(id, input => { const x =
await fetch("/a"); ... })` — `await` inside a non-async function. `node --check`
on either output reports `SyntaxError: Unexpected reserved word`, so the failure
surfaces at bundler/parse time against generated code with nothing tying it back
to the template line. The same holds for `<let/x=await p/>`, a text placeholder
`${await p}`, and an attribute value `<div title=await p>` (all four verified,
html target). The translator already has the exact predicate needed: `<script>`
marks its generated arrow async via `traverseContains(bodyStatements,
isAwaitExpression)` (`core/script.ts:44-50`), and `isAwaitExpression`
(`core/script.ts:161-177`) returns `skip` for nested function/method bodies, so
the legitimate `async` method inside a `<const>` object literal (fixture
`const-async-method-handler`) would still pass. Reuse it from the
value-expression analyze paths (`core/const.ts`, `core/let.ts`, the
placeholder/attribute visitors) and throw `buildCodeFrameError` pointing at the
`<await>` tag, in the `core/if.ts` style. Re-verify: write `<const/x=await
fetch("/a")/><div>${x}</div>`, run `pnpm run compile -- -o html -d file.marko`,
rename the emitted `file.marko.js` to `.mjs` and run `node --check` — it fails
with `Unexpected reserved word` on the `await`.

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

## Validate dynamic native tag names in production, not only under MARKO_DEBUG

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-23 | impact:high | effort:low

The string-renderer branch of HTML `_dynamic_tag` guards the tag name with `if
(MARKO_DEBUG) { assertValidTagName(renderer); }` and then interpolates it raw
into markup: `_html(`<${renderer}${_attrs(input, …, renderer)}>`)` and later
`_html(`</${renderer}>`)`, where `_html` is the unescaped writer
(`html/writer.ts` › `_html` → `$chunk.writeHTML`). There is no ungated fallback
guard, unlike the spread-attribute path in `html/attrs.ts`›`_attrs`, which
keeps an always-on `skip = /[\s/>"'=]/`name filter with`assertValidAttrName`layered on top only in debug. So`<${input.tag}/>` with `input.tag = 'div
onload=alert(1)'` throws a clear error in dev but emits `<div onload=alert(1)>`
from a production SSR build — the absence of the gated check changes behavior,
not just the message. The client half diverges too: `dom/control-flow.ts` ›
`createBranchWithTagNameOrRenderer` reaches `document.createElementNS(ns,
tagNameOrRenderer)`, which throws `InvalidCharacterError` in every build, so the
same value fails loudly on CSR and injects silently on SSR. Give `_dynamic_tag`
an ungated structural check on the tag name (a small always-on regex mirroring
the `_attrs` `skip` pattern, with the descriptive `assertValidTagName` message
still gated) so SSR and CSR agree and production cannot emit attacker-shaped
markup. Re-verify: render a template with a runtime-valued dynamic tag
(`<${input.tag}/>`fed`"div onload=alert(1)"`) through the optimize fixture
mode and inspect `writes.html`for the injected`onload`; the identical CSR run
throws `InvalidCharacterError`from`createElementNS`.

## Decrement the `<try>` await counter when a pending `<await>`'s branch is destroyed; the `@placeholder` sticks forever

`packages/runtime-tags/src/dom/control-flow.ts` › `addAwaitCounter` | 2026-07-23 | impact:high | effort:med

The counter created by `addAwaitCounter` only dismisses a `<try>`'s
`@placeholder` when its `c()` runs, and `_await_promise`'s _resolve_ handler
calls `awaitCounter.c()` from **inside** the callback passed to
`queueAsyncRender` (control-flow.ts:186). `skipDestroyedRenders`
(`packages/runtime-tags/src/dom/queue.ts`) drops any queued render whose
`scope[AccessorProp.ClosestBranch][AccessorProp.Gen] === 0`, so if the branch
containing the pending `<await>` is destroyed while the enclosing `<try>`
survives — e.g. an `<if>`/`<for>` inside the `<try>` that stops rendering the
item — the render never runs, the counter never reaches 0, `dismissPlaceholder`
never fires, and the boundary is stuck on `loading…` permanently (a later
re-mount just increments the counter again, so it never recovers). The reject
handler already avoids this by calling `awaitCounter.c()` outside the queued
render (:214), which is the asymmetry to fix: detect the destroyed closest
branch in the resolve handler (or register pending awaits on the branch so
`destroyNestedScopes` settles them) before deciding to skip. `dom/load.ts` ›
`insertLoaded` has the same shape (`awaitCounter?.c()` inside a
`queueAsyncRender` callback), so lazy tags under a `<try>` `@placeholder` are
worth checking with the same repro. Re-verify: client-mount
`<let/show=1/><try><@placeholder>loading...</@placeholder><if=show><await|v|=input.p><span>${v}</span></await></if></try><button
onClick(){show=0}>hide</button>`, click the button while `input.p` is pending,
then resolve it — the DOM stays `loading...` forever, while the identical run
without the click resolves to `<span>VALUE</span>`.

## Escape `<html-script>`/`<html-style>` interpolations as markup inside `<svg>`/`<math>`, where they are not raw text

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `getTextOnlyEscapeHelper` | 2026-07-23 | impact:high | effort:med

In HTML foreign content — anything inside `<svg>`/`<math>` that is not an HTML
integration point (`foreignObject`, `desc`, `title`, `annotation-xml`) —
`<style>` and `<script>` are NOT raw-text elements: the tokenizer parses their
children as markup and decodes character references. `getTextOnlyEscapeHelper`
(native-tag.ts:1476) nevertheless always maps `style`/`script` to
`_escape_style` (`/<(\/style)/gi`) and `_escape_script` (`/<(\/?script|!--)/gi`)
in `packages/runtime-tags/src/html/content.ts`, both of which leave a bare `<`
untouched, so `<svg><html-style>.bar{fill:${input.color}}</html-style></svg>`
rendered with `input.color = '<img src=x onerror=alert(1)>'` streams that markup
verbatim and the browser builds a live HTML `<img onerror>` element (same for
`<html-script>` under `<svg>`). This is a server-side XSS on the SSR path only —
the DOM output routes the same body through `_text_content`, which cannot
execute markup — and one interpolation is enough, no adjacency trick required.
The translator has no namespace tracking at all today (`rg -i svg
packages/runtime-tags/src --include=*.ts` matches only `dom/control-flow.ts`),
so the fix is to have `getTextOnlyEscapeHelper` (or its caller, the `isTextOnly`
loop in the html `translate.exit`, native-tag.ts:664-670) return `_escape` when
the tag has a foreign-content ancestor — `_escape` escapes `<` and `&`, which is
exactly how foreign content is parsed — or, if ancestor analysis is unreliable
under dynamic tags, reject `<html-script>`/`<html-style>` inside
`<svg>`/`<math>` at compile time. Re-verify: render that template with the
payload above and feed the HTML to parse5
(`node_modules/.pnpm/parse5@8.0.1/.../parse5/dist/index.js` `parseFragment`);
the tree today contains `img` in the `http://www.w3.org/1999/xhtml` namespace
carrying `onerror=alert(1)`, and must contain only `svg > style` text after the
fix.

## Escape `<script>`/`<style>` raw-text bodies once per element, not once per interpolation

`packages/runtime-tags/src/html/content.ts` › `_escape_script` | 2026-07-23 | impact:high | effort:med

`_escape_script` (content.ts:36) and `_escape_style` (content.ts:47) neutralize
multi-character tokens (`</script`, `<script`, `<!--`, `</style`), but the html
`translate.exit` for text-only native tags in
`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` (the
`isTextOnly` loop, ~:664-670) applies them per placeholder, so a token that
straddles two adjacent interpolations is never seen by either call.
`<html-script>${a}${b}${c}</html-script>` with `a='<'`, `b='/script>'`, `c='<img
src=x onerror=alert(1)>'` emits `<script></script><img src=x
onerror=alert(1)></script>` — a real breakout — and
`<html-style>${a}${b}</html-style>` with `a='<'`, `b='/style><img src=x
onerror=alert(1)>'` breaks out identically; the same value passed as a single
expression (`${a+b+c}`) is escaped correctly to `\x3C/script>`. Static template
text ending in `<` immediately before a placeholder has the same straddle.
`_escape` (used for `<title>`/`<textarea>`) and `_escape_comment` are
single-character escapers and are immune, which is why only the script/style
helpers are affected. Fix direction: build one expression for the whole
text-only body (as `bodyToTextLiteral` in
`translator/util/body-to-text-literal.ts` already does for the DOM path) and
wrap that single expression in `getTextOnlyEscapeHelper(tagName)`, so the
concatenation — including static text boundaries — is escaped as one string.
Re-verify: render `<html-script>${a}${b}${c}</html-script>` with those three
values and parse the output with parse5 `parseFragment`; today the tree contains
`img` with `onerror`, and after the fix it must contain only `script`.

## Stop double-escaping character references in a static `<textarea>` body

`packages/runtime-tags/src/translator/core/textarea.ts` › `preAnalyze` | 2026-07-23 | impact:med | effort:low

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
