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

## Serializer: unserializable/circular Error `cause` emits invalid JS, killing the whole resume script

`packages/runtime-tags/src/html/serializer.ts:1209` | 2026-07-10 | impact:high | effort:low

`writeError` pushes `",{cause:"`, calls `writeProp`, and ignores its return
value; `writeAggregateError` (line 1222) shares the pattern for `errors`. When
the cause fails to write — a circular back-reference (`err.cause` pointing at
an object containing the error) or an unserializable class instance — nothing
lands between `{cause:` and `})`, producing `new Error("m",{cause:})`, a
SyntaxError that aborts the entire inline resume script. The circular case
does not even abort in MARKO_DEBUG. Repro: serialize
`{wrapper: {err}}` where `err = new Error("boom", {cause: wrapper})`. Fix:
check `writeProp`'s return and pop the `",{cause:"` chunk on failure.

## Serializer: values yielded by a sync generator register for dedup at a position inside the lazy body

`packages/runtime-tags/src/html/serializer.ts:1428` | 2026-07-10 | impact:high | effort:med

Unlike the `Symbol.iterator` path (`writeObjectProps` line 1540, whose comment
explains members "cannot be written there without breaking reference dedup"),
`writeGenerator` writes yield/return values directly inside the emitted
`(function*(){...})()` body, yet dedup still records that buffer position.
Same-flush reuse (`{gen: g, shared: x}` where `g` yields `x`) resumes `shared`
as `undefined` (the `_.a=` assignment only runs if the generator is iterated);
cross-flush reuse emits `_(1).gen.` — a SyntaxError that kills that flush's
resume script. No debug abort in either case. Fix: hoist yielded values into a
bound array outside the body like the Symbol.iterator path.

## Serializer: SSR crash on cross-flush reuse of a long string first written via the mutation path

`packages/runtime-tags/src/html/serializer.ts:1804` | 2026-07-10 | impact:high | effort:med

Strings above the dedup length written through `writeAssigned`/`writeCall`
(promise/ReadableStream/async-generator settle values) register in
`state.strs` with `parent: null` and, unlike objects on that path, get no
eager id. When a later flush reuses the string, `assignId`'s cross-flush
branch dereferences `cur.parent!.id` and throws `TypeError: Cannot read
properties of null (reading 'id')` from `stringifyScopes`, crashing the
render. Repro: `Promise.resolve(longString)` in flush 1, `{msg: longString}`
in flush 2. Fix: claim an eager id (or skip `strs` registration) for
null-parent strings in the mutation path.

## Serializer: dispatch on `val.constructor` lets an own `constructor` property corrupt or drop the value

`packages/runtime-tags/src/html/serializer.ts:834` | 2026-07-10 | impact:med | effort:low

`writeUnknownObject` switches on `val.constructor`, an own-property lookup.
JSON-shaped data with a `constructor` key misbehaves silently:
`{constructor: 1, x: 2}` drops the whole value; `{constructor: Date}`
serializes as `new Date(NaN)` (no debug abort); `{constructor: Map}` becomes
`new Map`; an array with an own `constructor` prop becomes `{}`. Fix: dispatch
on `Object.getPrototypeOf(val)` (making the null-proto case `case null`).

## Serializer: pure-digit object keys ≥ 2^53 round-trip to a different key

`packages/runtime-tags/src/html/serializer.ts:1689` | 2026-07-10 | impact:med | effort:low

`toObjectKey` emits digit-run keys bare, but bare numeric literal keys are
canonicalized by ToString(ToNumber(...)): `{9007199254740993:"v"}` resumes as
key `"9007199254740992"` and `{999999999999999999999:"v"}` as `"1e+21"` —
silent key corruption for 64-bit/snowflake IDs used as map keys. Verified
end-to-end: SSR renders the original key, hydration re-renders with the
corrupted one. Fix: emit bare only when `String(+name) === name`, else quote.
Caution: `translator/util/references.ts` imports `toAccess` (line 1715), which
shares the digit path, so key-encoding changes ripple into the translator.

## Serializer: `quote()` emits lone surrogates and NUL raw, corrupting them in transit

`packages/runtime-tags/src/html/serializer.ts:1727` | 2026-07-10 | impact:med | effort:low

Two escaping gaps in `quote`: (1) an unpaired surrogate (e.g. an emoji split
by `.slice`) is emitted raw and becomes U+FFFD when the chunk is UTF-8 encoded
by `res.write` — the client resumes a replacement character
(`JSON.stringify` has escaped these since ES2019 well-formed stringify); (2)
U+0000 is emitted raw into the inline `<script>`, where the HTML tokenizer's
script-data state replaces it with U+FFFD (verified via jsdom parse;
`serializer.test.ts:69` currently bakes the raw-NUL output in as expected).
Fix: escape unpaired surrogate code units as `\uXXXX` and NUL as `\x00`.

## Serializer: partially-consumed sync generator resumes as an async generator

`packages/runtime-tags/src/html/serializer.ts:1429` | 2026-07-10 | impact:low | effort:low

The "touched" branch of `writeGenerator` emits `(async function*(){}())` for a
sync generator that has had `next()` called — apparently copy-pasted from
`writeAsyncGenerator`. The resumed value has no `Symbol.iterator`, so
`for..of`/spread that worked server-side throws client-side. Fix: emit the
sync form.

## Serializer: `-0` round-trips as `+0`

`packages/runtime-tags/src/html/serializer.ts:749` | 2026-07-10 | impact:low | effort:low

`writeNumber` stringifies with `val + ""`, so `-0` becomes `0` even though the
serializer otherwise preserves NaN/±Infinity (unlike JSON). Typed-array float
elements share this stringification (unverified there). Fix:
`Object.is(val, -0) ? "-0" : val + ""`.

## Serializer (optimized mode): Set/Map silently gain a phantom `undefined` member when an element is unserializable

`packages/runtime-tags/src/html/serializer.ts:1428` | 2026-07-10 | impact:low | effort:med

In production mode an unserializable Set member serializes as a hole —
`new Set(_.a=[,2])` — so the client set reports `has(undefined) === true`, a
distinguishable corruption (objects merely drop the prop). Debug mode aborts
first, so this only manifests in optimized builds. Worth aligning the two
modes (drop the member entirely) when touching the generator/iterable paths.

## RegExp attribute values render differently on SSR vs CSR

`packages/runtime-tags/src/dom/dom.ts:456` | 2026-07-10 | impact:med | effort:low

SSR's `nonVoidAttr` (`packages/runtime-tags/src/html/attrs.ts:453`)
special-cases `RegExp` and writes `.source` (`pattern="^a+$"`), but the DOM
runtime's `normalizeAttrValue` just stringifies, yielding the slash-delimited
form (`pattern="/^a+$/"`, which breaks constraint validation). The first
post-hydration update corrupts an SSR-rendered attribute:
`UPDATE: input[pattern] "^a+$" => "/^b+$/"`. Fix: add the RegExp → `.source`
case to `normalizeAttrValue`; `normalizeStrProp` in controllable.ts inherits
it.

## Resumed named-radio group unchecks entirely when the change handler rejects the change

`packages/runtime-tags/src/dom/controllable.ts:131` | 2026-07-10 | impact:high | effort:med

On resume, `_attr_input_checkedValue_script` assigns `ControlledValue` only to
the element that was `defaultChecked`; the revert loop (line 153) then uses
the clicked radio's `ControlledValue` (`undefined`) as the group's old value
and sets `radio.checked = undefined === radio.value` on every member — the
whole group unchecks. Repro: SSR two named radios bound to `checkedValue`
with a change handler that doesn't write back (the controlled "reject"
pattern), click the unchecked one: live DOM shows `a:false b:false` where CSR
correctly reverts to `a:true b:false`. Any handler that re-renders the inputs
masks the bug. Fix: fall back to `defaultChecked` when the old value is
`undefined`, or serialize the normalized `checkedValue` in
`writeControlledScope`.

## `<select value=...>` never selects an `<option>` without a `value` attribute on SSR

`packages/runtime-tags/src/html/attrs.ts:42` | 2026-07-10 | impact:med | effort:med

An option's implicit value is its text content, and the CSR path matches it
(`dom/controllable.ts:254` compares `opt.value`), but SSR only marks
`selected` from the option's `value` attribute hook — a valueless `<option>b</option>`
inside `<select value="b">` is never matched, the browser default (first
option) wins, and resume adopts the SSR DOM as truth, so hydration never
corrects it. With `valueChange` present, debug SSR also logs a spurious "no
matching `<option>`" error. Fix: match at option end-tag time using buffered
text, or error on valueless options inside a value-bound select.

## Style-object values containing `;` inject extra declarations on SSR that CSR can never remove

`packages/runtime-tags/src/common/helpers.ts:60` | 2026-07-10 | impact:med | effort:low

`stringifyStyleObject` does not escape values, so `style={color: c}` with
`c = "red;background:blue"` SSRs as two live declarations, while CSR's
`setProperty("color", c)` is invalid CSS and silently dropped — and after
hydration the granular updater only manages `color`, so the injected
`background:blue` persists forever. The `<style>`-tag path already guarantees
escaping via `escapeStyleValue` (relied on by `_style_rule_item`). Fix: apply
the same guarantee (or reject `;`/`}`) in `stringifyStyleObject`.

## Resume claims the wrong node for stateful text that SSRs empty after an element or comment sibling

`packages/runtime-tags/src/translator/visitors/placeholder.ts:230` | 2026-07-10 | impact:high | effort:med

`analyzeSiblingText` only emits the protective `<!>` separator when the
preceding content is Text/Placeholder/Dynamic; `ContentType.Tag` and
`ContentType.Comment` (`translator/util/sections.ts:298`/`278`) yield
`SiblingText.None`, so nothing separates the marker from the previous node
when the text value SSRs empty. The resume runtime
(`src/dom/resume.ts:401`) then claims the _previous element_ as the text node
(`<div><span>s</span>${b}</div>` with `b=""`: post-hydration updates mutate a
`.data` expando on the span — no visible change ever) or writes into a
preceding `<html-comment>`'s data (`<!--hi-->` becomes `<!--B-->`). CSR is
correct in both cases. Fix: treat Tag/Comment predecessors as needing the
separator, or give text placeholders a resume symbol that only accepts
`nodeType === 3`.

## `<html-comment>` that SSRs empty resumes as a new text node — comment content becomes visible text

`packages/runtime-tags/src/dom/resume.ts:401` | 2026-07-10 | impact:high | effort:med

For an `<html-comment>${c}</html-comment>` whose body serializes empty, SSR
writes `<!---->` + marker, and resume's empty-comment heuristic (meant for
`<!>` separators) creates a fresh Text node as the binding instead of the
comment. After hydration, setting `c="secret"` renders `secret` as visible
text (`UPDATE: div::text "" => "secret"`); CSR correctly produces
`<!--secret-->`. `translator/core/html-comment.ts:107` already carries a TODO
("make the marker node the same as the comment node") pointing at the fix.

## SSR out-of-order placeholder replacement never destroys placeholder scopes, so `$signal` abort cleanup never runs

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts:37` | 2026-07-10 | impact:med | effort:med

The inline reorder runtime's `replace()` swaps DOM with raw `replaceWith` and
resume never registers the placeholder content as a destroyable branch, so
when awaited content streams in, placeholder scopes are dropped without
teardown — `$signal.onabort` handlers, interval cleanup, and
closure-subscriber unsubscribe calls never fire (zombie scopes stay retained).
The CSR path does this correctly via `dismissPlaceholder` →
`removeAndDestroyBranch` (`src/dom/control-flow.ts:331`). Fix: track the
resumed placeholder's branch scope and run `destroyBranch` when the reorder
counter completes.

## `_dynamic_tag` conflates different renderer instances that share a content id

`packages/runtime-tags/src/dom/control-flow.ts:532` | 2026-07-10 | impact:high | effort:med

The change check compares `normalizedRenderer?.[RendererProp.Id] ||
normalizedRenderer`, but the id is the template/section resume id — identical
for every _instance_ of the same content section with different
`RendererProp.Owner` scopes (same defect at line 645, `_dynamic_tag_content`).
Switching a dynamic tag between two instances of the same content (e.g. two
`<define/content>`s from two instances of one provider tag, or the list-detail
pattern `<${selectedRow.content}/>`) is a silent no-op: no teardown/re-render,
and closures stay subscribed to the old owner's scope, so subsequent state
updates never propagate. A control fixture with distinct tag files (distinct
ids) behaves correctly, pinning the defect to the id comparison. The id
comparison exists so resumed scopes (renderer serialized as id string) match
fresh client renderers; the fix must compare owner as well, falling back to
identity when owners differ.

## Assignment to a positional `<for>`/`<await>` param generates code referencing an undeclared `$Change`

`packages/runtime-tags/src/translator/util/references.ts:575` | 2026-07-10 | impact:high | effort:low

`trackAssignment` synthesizes a `<property>Change` binding for any binding
with `upstreamAlias` + `property` — the destructured-object controllable
machinery — but a positional param's property is `"0"`, yielding a `"0Change"`
lookup that can never exist. `<for|item| of=list>` + `item = x` in a handler
makes the HTML translator emit `writeScope(..., { $Change }, ...)` with
`$Change` a free identifier: SSR throws `ReferenceError: $Change is not
defined` on first render, no interaction needed (DOM handler throws TypeError
on click). Fix: only synthesize change bindings for object-destructured
properties and report a readonly-assignment compile error otherwise.

## `<define>` with destructured tag var plus body crashes CSR with `$define_content is not defined`

`packages/runtime-tags/src/translator/core/define.ts:62` | 2026-07-10 | impact:med | effort:med

The body-content renderer is only declared via the identifier-var
direct-reference path (translate at line 124), but `translateAttrs`
unconditionally emits `content: $define_content($scope)` in the props
expression. `<define/{ value } value=2><div>body</div></define>` compiles but
CSR mount throws `ReferenceError: $define_content is not defined`; SSR works
(content inlined). Also reproduces with an identifier var whose only extra
reference is an assignment. The analyze block carries a "TODO: support
destructure". Fix: emit the renderer whenever a body section exists and the
content prop is emitted, or compile-error per the TODO.

## Static `-->` inside `<html-comment>` is written unescaped, breaking SSR markup and crashing CSR

`packages/runtime-tags/src/translator/core/html-comment.ts:109` | 2026-07-10 | impact:med | effort:low

Placeholder content is escaped via `_escape_comment` (line 113), but static
text is written raw in both targets. `<html-comment>a --> b</html-comment>`
SSRs as `<!--a --> b-->` (comment closes early, ` b-->` becomes visible text)
and the CSR template string parses into extra nodes so the walks lose alignment —
`TypeError: Cannot read properties of undefined (reading 'data')` in `_text`.
Fix: apply `_escape_comment`'s transform to static content at compile time.

## Duplicate `value` attribute on `<let>` splits analysis from codegen — CSR ReferenceError

`packages/runtime-tags/src/translator/core/let.ts:42` | 2026-07-10 | impact:med | effort:low

Analyze tracks references from the _last_ `value` attribute while translate
(line 126) emits the _first_: `<let/x=input.a value=input.b/>` wires
reactivity to `input.b` but generates code calling `$input_a(...)`, which is
never declared — CSR mount throws `ReferenceError: $input_a is not defined`
(SSR passes). `<script>` already rejects this shape ("Invalid duplicate value
attribute."); `<let>` should too.

## Assignments to `<id>` and `<define>` tag vars compile to silent no-ops

`packages/runtime-tags/src/translator/core/id.ts:1` | 2026-07-10 | impact:low | effort:low

`<const>` validates var mutations (`const.ts:71`), but `<id>`/`<define>` vars
fall through to `translator/util/signals.ts:1562`, which replaces the
assignment with its bare RHS: `onClick() { x = "changed" }` against
`<id/x/>` emits the literal statement `"changed";` — the assignment is
discarded with no compile or runtime error while sibling updates in the same
handler proceed. Generalize the const.ts readonly check to other derived
binding tags.

## `<textarea value=X>body</textarea>` silently drops the author's `value` attribute

`packages/runtime-tags/src/translator/core/textarea.ts:5` | 2026-07-10 | impact:low | effort:low

`preAnalyze` appends a second `value` attribute synthesized from the body
without checking for an existing one, and last-wins: `value=input.v` vanishes
from both bundles with no diagnostic. Should be a compile error for
conflicting value attribute + body content, mirroring `<script>`'s duplicate
check.

## Spread attrs can render function values as literal attribute source in debug with no warning

`packages/runtime-tags/src/common/errors.ts:16` | 2026-07-10 | impact:low | effort:low

`assertValidAttrValue` whitelists any attr name matching `/^on/i` or
`/Change$/`, so a spread like `{checked, valueChange}` on a plain input (a
non-controllable combination — CSR takes the `checked` branch whose skip
regex doesn't cover `valueChange`) sets a literal lowercased
`valueChange="(v) => ..."` DOM attribute containing function source, with no
debug warning. Names like `once` hit the same hole via `/^on/i`. Tighten the
whitelist to names the runtime actually consumes as handlers, and warn on
function values that will be stringified.

## Attribute escaping misses semicolon-less character references, so round-tripped attr values decode differently

`packages/runtime-tags/src/html/attrs.ts:463` | 2026-07-10 | impact:med | effort:med

`singleQuoteAttrReplacements`/`doubleQuoteAttrReplacements` only escape `&`
when followed by `#?\w+;` — i.e. a fully-formed, semicolon-terminated
reference. But HTML parsers also decode semicolon-less numeric references
(`&#38x` → `&x`) and, in attribute values, legacy named references when the
next char is not `=` or alphanumeric (`x &amp y` → `x & y`, trailing
`AT&amp` → `AT&`). A jsdom round-trip sweep found 11/29 such values whose
parsed attribute differs from the authored string, so SSR output and a CSR
`setAttribute` of the same value disagree. `src/__tests__/html-attrs.test.ts:32`
currently asserts the buggy output for one case. Fix direction: escape `&`
whenever it begins anything that could parse as a reference (or simply always
escape `&` inside quoted values — measure size/perf first).

## `_escape_script` does not neutralize `<!--` + `<script`, letting SSR content after an inline script be swallowed

`packages/runtime-tags/src/html/content.ts:29` | 2026-07-10 | impact:high | effort:low

`unsafeScriptReg` only rewrites `</script`. Per the HTML spec's script-data
double-escaped states, a script body containing `<!--` followed by `<script`
makes the tokenizer treat the next real `</script>` as text, so everything
after the Marko-emitted script tag — the rest of the page — is consumed into
the script element. Repro: interpolate the string `"<!--<script>"` into a
`<script>` body followed by a sibling `<div>`; parsing the SSR output yields
a document containing only content before the script, while CSR renders the
sibling `<div>` — the SSR/CSR equivalence check fails. Fix: also escape
`<script` (and `<!--`) in script content, with the same hex-escape treatment
`</script` already gets.

## `_escape_comment` encodes `>` as `&gt;` but comment data is never decoded, so SSR and CSR comment text diverge

`packages/runtime-tags/src/html/content.ts:59` | 2026-07-10 | impact:low | effort:med

Character references are not decoded inside comments, so SSR-parsed
`<!--a &gt; b-->` has literal `.data === "a &gt; b"` while CSR sets
`"a > b"` — `<html-comment>${dynamic}</html-comment>` produces different
comment data per render mode, visible to any code reading `.data` (and the
node itself via devtools). The escaping also fails its own purpose selectively:
`>` alone cannot close a comment; the dangerous sequences are `-->`, `--!>`,
and a leading `>`/`->`. A correct approach escapes only those sequences using
a scheme the client can reverse (or accepts documented lossiness). Currently
masked in snapshots by the `render.md` printer bug recorded in `dx.md`.

## User comments starting with the resume-marker prefix are treated as runtime ops, silently breaking hydration

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts:24` | 2026-07-10 | impact:med | effort:med

The resume walker claims any comment whose data merely starts with the
runtime prefix: `!op.indexOf(prefix)` at
`src/html/inlined-runtimes.debug.ts:24` (same logic in the prod pair). A user
`<html-comment>` whose text begins with the active prefix (e.g. `M_` with the
default runtime id in optimize mode) is registered into `lookup` and can
shadow or corrupt real marker ids. Repro: a template with an
`<html-comment>` whose text starts with the marker prefix, next to a stateful
counter button — SSR+resume leaves the click handler dead (count stays 0)
while pure CSR increments; silent hydration breakage.
Fix direction: make the walker require a well-formed marker (prefix followed
by a known op char and digits) or escape user comment data that collides.

## `<for to=X step=S>` excludes the documented-inclusive endpoint for fractional steps

`packages/runtime-tags/src/common/for.ts:32` | 2026-07-10 | impact:low | effort:low

The tag's own autocomplete metadata says `to` "Iterates up to the provided
number (inclusive)" (`src/translator/core/for.ts:392`), but `forTo` computes
`steps = (to - start) / delta` and loops `i <= steps`, so any fractional step
whose division lands just under an integer drops the endpoint:
`from=0 to=0.3 step=0.1` gives `steps = 2.9999999999999996` and yields
`0, 0.1, 0.2` — no `0.3`. Integer steps are unaffected. Fix by comparing with
an epsilon (`i <= steps + 1e-9`) or by iterating while
`start + i * delta <= to + delta * 1e-9`.
