# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document that text interpolation drops `NaN`/`0n` while attributes write them

`packages/runtime-tags/src/html/content.ts` › `_to_text` | 2026-07-18 | impact:low | effort:low

The same value coerces differently in text position and attribute position, and only the attribute rule is documented. Text uses `_to_text` = `val || val === 0 ? val + "" : ""` (`html/content.ts:10`, mirrored by `dom/dom.ts` for CSR), so `NaN` and `0n` are falsy and not `=== 0` and render as an empty string. Attributes use `_attr` → `isVoid` = `value == null || value === false` (`common/helpers.ts:137`), so `NaN`/`0n` are non-void and `nonVoidAttr` (`html/attrs.ts:442-455`) writes them — a `number` (including `NaN`) as `name=NaN` and a bigint `0n` as `name=0`. So `<div>${NaN} ${0n}</div>` renders empty text while `<div data-a=NaN data-b=0n/>` writes `data-a=NaN data-b=0`. The language reference at website `docs/reference/language.md:220-223` documents only the attribute rule and explicitly promises "`0`, `NaN`, and `""` will still be written", with no text-coercion note, so the two positions silently disagree for the non-zero falsy numerics. The text drop is intentional (the `content.ts:10` comment says `0n` is deliberately not special-cased for hot-path size), and even MARKO_DEBUG's `assertValidTextValue` (`common/errors.ts`) does not flag `NaN`/`0n`, so a blank price/quantity cell produced by bad numeric arithmetic is silent in dev too. Direction: add a text-coercion table near the dynamic-text section of the language reference and cross-link the attribute note at `:220-223`; optionally warn in DEBUG when a `NaN` `number` reaches a text position. Distinct from the existing `normalizeStrAttrValue` bugs.md entry, which concerns controlled-value selection, not text-vs-attribute rendering.

The same `0n`/`NaN` drop also occurs on the **style-object** surface, where the consequence is more insidious than empty text: `stringifyStyleObject` returns `value || value === 0 ? name + ":" + value : ""` (`packages/runtime-tags/src/common/helpers.ts:77`; the in-file comment at :75-76 confirms `0n` is deliberately not special-cased for hot-path size), so `<div style={ width: input.v }>` renders `width:0` for `0` but drops the `width` declaration entirely for `0n` or `NaN` — a missing CSS declaration / silent layout shift rather than a visibly-empty text node. Reached via `_attr_style` → `toDelimitedString(value, ";", stringifyStyleObject)` in both `html/attrs.ts` and `dom/dom.ts`; no warning even under `MARKO_DEBUG`. Extend the coercion-table doc note to cover style objects, and/or warn in DEBUG when a `NaN` reaches a style value.

---

## Document the client-only-init + localStorage-persist idiom (`<script>` effects run at dependency-init, not source order)

`packages/runtime-tags/src/dom/signals.ts` › `_script` | 2026-07-18 | impact:med | effort:low

The intuitive two-`<script>` pattern for restoring then persisting state through localStorage silently clobbers saved state. Given a restore script (`const s = localStorage.getItem('k'); if (s) board = JSON.parse(s)`, assign-only, first in source) followed by a persist script (`localStorage.setItem('k', JSON.stringify(board))`, which reads `board`, second in source), on mount the persist script runs before the restore script and writes the DEFAULT board to storage, destroying the previously-saved state; the restore then reads back the just-clobbered default, so state does not survive a reload — with no error or hydration-mismatch warning. This is correct fine-grained-reactivity behavior, not a bug: a state-reading `<script>` compiles as a downstream of its `<let>` signal, so `$setup` running `$board($scope, DEFAULT)` at the `<let>` position immediately queues the persist effect via `_script` → `queueEffect` (`dom/signals.ts:386-390`), while the assign-only restore script is a plain mount effect queued later at its own source position; `runEffects` (`dom/queue.ts`) runs them in queue order, so persist(read) precedes restore(assign). It is undocumented and surprising: no docs page mentions localStorage or `<script>` execution order, and `core-tag.md`'s `<script>` section (`:304`) says only that it runs "when the template has finished rendering", implying source order. The working idiom is `<lifecycle onMount(){ restore } onUpdate(){ persist } />` (onMount runs first with the pre-restore value, onUpdate persists after), but nothing points users there, and a `<let>` init expression cannot read localStorage because it also runs during SSR. Direction: a guide page on persisting state to localStorage recommending `<lifecycle>`, plus a note in the `<script>` reference that state reads run at dependency-init time; optionally a MARKO_DEBUG warning when a `<script>` both depends on state and writes storage before that state is initialized.

## Provide or document a head-management primitive; nested `<title>`/`<meta>`/`<link>` render in `<body>` with no hoisting

`packages/runtime-tags/src/html/writer.ts` › `_hoist` | 2026-07-19 | impact:med | effort:med

A component nested under `<main>` that emits `<title>`, `<meta name=description>`, or `<link rel=canonical>` renders those tags inline in the `<body>`, not hoisted into `<head>` — producing an invalid document with duplicate `<title>`/`<meta>` elements and a canonical `<link>` stranded in the body where it is inert. Marko 6's HTML runtime writes tags in document/source order and has no head-relocation pass: the sole `_hoist`/`hoist` symbol in `html/writer.ts` (:180) is scope-reactivity plumbing (`_hoist_read_error`), unrelated to `<head>`. The only documented head idiom (`website/docs/reference/language.md:446-489`) is prop-drilling a `title` attribute up to the layout that owns the real `<head>`, which cannot express "this deeply nested widget sets the canonical/OG tag" and forces threading meta through every intermediate layer. Peer frameworks ship a component-scoped primitive (Svelte `<svelte:head>`, Next metadata API, SolidStart `@solidjs/meta`, Astro head slot). Either add such a primitive so a descendant can contribute to `<head>`, or document explicitly that Marko renders head tags in source order with no hoisting, that children must never emit `<head>` elements, and that dynamic/computed meta must be prop-drilled to (or passed via `$global`/`+meta.json` and read in) the root layout. Docs are low-effort; a real primitive is medium. Distinct from the run meta-union typing finding (that concerns typing heterogeneous `+meta.json` across sibling routes).

## Document + type how to supply route `$global` when render-testing or writing a Storybook story

`packages/runtime-tags/index.d.ts` › `TemplateInput` | 2026-07-19 | impact:med | effort:low

A tag that reads `$global.url.pathname` / `$global.data.user` (how `@marko/run` threads its `Context`) can be render-tested with `render(Tag, { $global: { url, data } })` and it works — but nothing tells you so, and nothing checks the shape. `Marko.TemplateInput<Input> = Input & { $global?: Marko.Global }` (`index.d.ts:29-32`) is the typed slot, and `render`/`mount` pull it out (`html/template.ts:44-52`, `dom/template.ts:54-56`), but it is typed only as bare `Marko.Global` (`[x: PropertyKey]: unknown`, `index.d.ts:16`), so a test's `$global` is not checked against the real route `Context`. `@marko/testing-library`'s `RenderOptions` exposes only `container` and its README never mentions `$global`, so authors defensively write `render(Tag, {…} as any)` (the cast is unnecessary — `mtc` is clean without it). For Storybook there is no typed slot at all: `Story<Input>.args` is `Input`, so route context has to be smuggled as an untyped `args.$global` (which then also shows up as a bogus Storybook control). Testing-library docs (and `@marko/run` docs) should show `render(Tmpl, { $global })` as the way to provide route context, and ideally `@marko/run` should export a `Context`-shaped test type (or augment `Marko.Global`) so `$global` in a test is checked against the real `Context`; Storybook needs a documented, typed way to attach `$global` per story. The generated `.marko-run/routes.d.ts` defines a per-file `Run.Context` but never augments `Marko.Global`, so in-component and in-test `$global` are both untyped against the real context — the discoverability gap is pure docs. Distinct from the run `ctx.search` typing entry.

## Index every public docs page in `llms.txt` and add a completeness check

`website/public/llms.txt` › `Reference` | 2026-07-19 | impact:med | effort:low

`public/llms.txt` is a hand-maintained static index with no generator, and three substantive on-disk pages are linked from none of its topic sections: `docs/reference/lazy-loading.md` (the entire `import ... with { load: "visible#hero" }` client code-splitting / deferred-hydration API, 177 lines), `docs/explanation/class-vs-tags-api.md` ("Tags API for Class API Developers", the flagship Marko 5→6 migration mental-model guide, 245 lines), and `docs/reference/supported-environments.md`. The only aggregate generator, `src/routes/docs/_llms/reference-full%2emd+handler.ts:5-18`, hardcodes a 9-page list that includes lazy-loading but omits supported-environments, so even the bundle llms.txt labels "Complete reference documentation" is itself incomplete, and class-vs-tags-api appears in no aggregate at all. Because llms.txt is an agent's primary topic index — the common pattern is "scan the index, fetch the matching `.md`" rather than pull the large reference-full bundle — an agent asked to add deferred client hydration scans the Reference links, finds no lazy-loading entry, and concludes the capability does not exist even though the doc fully specifies the `load` triggers; an agent porting a Marko 5 class app never discovers class-vs-tags-api.md and mis-migrates from memory. Add the three pages to their sections, add supported-environments to the reference-full list, and add a CI test asserting every `docs/**/*.md` slug appears in llms.txt so new pages cannot silently drop out of the index.

## Mark `Template.mount`'s required `node` param as required, not `Default: undefined`

`website/docs/reference/template.md` › `Template.mount(input, node, position?)` | 2026-07-19 | impact:low | effort:low

The `Template.mount(input, node, position?)` parameter table (template.md:76-80) lists a Default of `{}` for `input` and `"beforeend"` for `position` (both real defaults) but `undefined` for `node`, which reads as "node is optional and defaults to undefined". `node` is actually required: `packages/runtime-tags/index.d.ts:98-102` declares `mount(input, reference: Node, position?)` with `reference` non-optional, and `packages/runtime-tags/src/dom/template.ts:47-52` defaults only `input = {}` while `reference` has no default and is dereferenced unconditionally (`parentNode = reference as ParentNode`), so `template.mount(input)` is a type error and throws at runtime. The doc's own examples always pass a node (`template.mount({}, document.body)`), confirming node is mandatory. Agents treat parameter tables as the machine-readable contract: an agent building a client mount or test harness reads "node: Default undefined", writes `template.mount(input)` expecting a detached mount, and burns a debug cycle on the type mismatch — or, working from the rendered doc without a type-check, ships code that crashes on the undefined reference. Replace the `undefined` cell with "required" (or split required params from defaulted ones) so the table agrees with the `reference: Node` signature.

## Consider renaming `signal`, which clashes with the ecosystem meaning

`packages/runtime-tags/src/translator/util/signals.ts` › `signals` | 2026-07-20 | impact:med | effort:high

"Signal" in this codebase is a compiled setup/update program keyed by a binding or intersection — not a reactive value container, which is what most contributors will assume from other frameworks; alternatives if renamed: "effect program", "update unit", "work unit". Any rename is a broad churn (runtime helper names, `callRuntime` sites, snapshots), so it should ride a major refactor; until then the disclaimer in `packages/runtime-tags/CONTEXT.md` (Signal entry) is the mitigation. Re-verify by reading that entry.

## Key (or document) the `getOnlyChildParentTagName` memo on `branchSize` — the argument is ignored on every call after the first

`packages/runtime-tags/src/translator/util/is-only-child-in-parent.ts` › `getOnlyChildParentTagName` | 2026-07-23 | impact:low | effort:low

`getOnlyChildParentTagName(tag, branchSize = 1)` memoizes its answer in
`tag.node.extra[kOnlyChildInParent]` and returns the cached value before
`branchSize` is ever consulted, so the parameter only has an effect on the very
first call for a given tag node — and `node.extra` survives the
analyze→translate node cloning, so "first call" spans phases. The whole
`<if>`/`<else-if>`/`<else>` chain optimization depends on this: `core/if.ts`
`IfTag.analyze` is the only caller that passes the real branch count
(`getOptimizedOnlyChildNodeBinding(ifTag, ifTagSection, branches.length)`),
while `core/if.ts:117`/`:167`/`:296` and `core/for.ts`/`core/show.ts` all call
with the default `1` during translate and silently ride that cached answer. Any
future caller that touches an `<if>` tag before `IfTag.analyze` (a new
pre-analyze pass, a transform-phase visitor, a reordered core-tag registration)
would poison the memo with `branchSize === 1`, and every multi-branch chain
would quietly stop reusing its parent element as the marker node — an extra
`<!>` in the template string, an extra walk char, and an extra `#text` DOM
binding per chain, with no test naming the invariant. Either include
`branchSize` in the memo key (or assert it matches the cached computation) or
state the ordering contract in a comment on the function. Distinct from the
existing perf.md entry "Extend marker-elision optimizations to
await/try/html-comment", which is about adding the optimization elsewhere, not
about this memo's key. Re-verify: compile
`<div><if=input.x><p>a</p></if><else-if=input.y><i>c</i></else-if><else><b>b</b></else></div>`
with `-o dom -d` and confirm the marker is `_if("#div/0", …)` with `$template
=== "<div></div>"`; forcing `branchSize` to 1 turns it into `_if("#text/0", …)`
with `$template === "<div><!></div>"`, which is what the sibling case
`<div>z<if=input.x><p>a</p></if></div>` already produces.

## Explain the `doc` parameter's double duty in the debug walker runtime

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts` › `WALKER_RUNTIME_CODE` | 2026-07-23 | impact:low | effort:low

The whole point of the `.debug` half of the inlined-runtimes pair is that a
human can read what the minified string does, but the walker's central trick is
undocumented and reads as a bug. The default parameter `doc = document` is used
for `doc.createTreeWalker(doc, 129)` and stored as the runtime's `d` field, and
then the body immediately reassigns it: `doc = (self[runtimeId][renderId] = { …,
d: doc, … })`. From that point `doc` is the runtime object, which is why `w()`
calls `doc.x(...)` — a late-bound call so the reorder runtime's replacement of
`runtime.x` (see `REORDER_RUNTIME_CODE`, which assigns `runtime.x`) is picked
up, without re-indexing `self[runtimeId][renderId]` per node. A reader tracing
`doc.x` naturally expects `document.x`. The reorder half already carries the
precedent fix (`// repurpose "op" for callbacks ...carefully`); add the same
one-line intent comment here, or — since only exported member names must match
the minified file — give the debug version a separate `runtime` default
parameter so `doc` keeps meaning the document. Re-verify: read
`WALKER_RUNTIME_CODE` in inlined-runtimes.debug.ts and confirm `d: doc` is
evaluated before the `doc = (...)` assignment, so `d` holds the document while
every later `doc.` reference is the runtime object.

## Correct the `util/assert.ts` citation in AGENTS.md — `assertNoArgs`/`assertNoParams` live in `@marko/compiler/babel-utils`

`packages/runtime-tags/AGENTS.md` › `Translator` | 2026-07-23 | impact:low | effort:low

The Translator section says "Validate early with `assertNoArgs` /
`assertNoParams` / `assertNoSpreadAttrs` (`util/assert.ts`)", but
`packages/runtime-tags/src/translator/util/assert.ts` exports only
`assertNoSpreadAttrs`, `assertNoTagVarMutation`, and `assertNoBodyContent`.
`assertNoArgs`/`assertNoParams` are defined in
`packages/compiler/src/babel-utils/assert.js` and are imported by core tags from
`@marko/compiler/babel-utils` (see `core/if.ts`, `core/debug.ts`,
`core/return.ts`), alongside siblings the doc never names (`assertNoVar`,
`assertNoAttributeTags`, `assertAllowedAttributes`, `diagnosticDeprecate`). So
the one pointer an agent has for tag validation names two symbols that are not
in the cited file and omits the two local helpers that are. Reword to "local
helpers `assertNoSpreadAttrs`/`assertNoTagVarMutation`/`assertNoBodyContent`
(`util/assert.ts`), plus
`assertNoArgs`/`assertNoParams`/`assertNoVar`/`assertAllowedAttributes` from
`@marko/compiler/babel-utils`". Re-verify: `grep -n '^export'
packages/runtime-tags/src/translator/util/assert.ts` lists three names, none of
them `assertNoArgs`/`assertNoParams`.

## Document the fixture `diagnostics.md` snapshot and the missing `TestConfig` options in the Testing section

`packages/runtime-tags/AGENTS.md` › `Testing › Fixture anatomy` | 2026-07-23 | impact:med | effort:low

The fixture-anatomy block lists four snapshot kinds (`dom.bundle`,
`html.bundle`, `render`, `writes`) and a `TestConfig` summary, and both are out
of date with `main.test.ts`. Missing entirely is the `diagnostics` test, which
snapshots the html build's `meta.diagnostics` into
`__snapshots__/diagnostics.md` (debug mode only, 19 fixtures have one today) and
asserts it like any other snapshot — so a change that adds or removes a
recoverable/deprecation diagnostic fails a test the docs never mention, and the
AGENTS.md instruction to "read the generated snapshots as part of your change"
never points at it. Also undocumented: the error snapshots
`error-compile-{html,dom}[.debug].txt` and `{ssr,csr}.error[.debug].txt`, and
the config options `error_dom`/`error_html` (used by 41 fixtures), `embedded`,
`load_order`, `reject_load`, and `fix_guide`; the stated "~800 fixtures" is now
906 directories. Add `diagnostics.md` and the error-snapshot filenames to the
anatomy block and extend the `TestConfig` list. Re-verify: `find
packages/runtime-tags/src/__tests__/fixtures -path '*__snapshots__*' -type f |
sed 's#.*/##' | sort | uniq -c` shows `diagnostics.md`, `error-compile-*.txt`
and `*.error*.txt` alongside the four documented kinds, and `TestConfig` in
`main.test.ts` lists the extra keys.

## Say "following siblings" — dynamic `<style>` values silently miss any target that is not a sibling of the tag

`packages/runtime-tags/src/translator/core/style.ts` › `checkDynamicStylePlacement` | 2026-07-23 | impact:med | effort:low

A dynamic `<style>` renders as `<style class=ID>.ID~*{--M_x:value}</style>`
(`html/attrs.ts` › `_style_html`, mirrored by `dom/dom.ts` › `_style_shell`), so
the custom properties reach only the _subsequent siblings_ of the `<style>`
element and their descendants. Both the compile-time warning in
`checkDynamicStylePlacement` ("only apply to elements rendered after it, so the
content before this tag will not receive them") and the website reference
(`website/docs/reference/core-tag.md`, "### Dynamic Values" NOTE: "Dynamic
values only apply to elements rendered after the `<style>` tag") describe this
as document order, which is wrong for anything outside the `<style>`'s own
parent: the tag's parent element, and any element rendered later but in a
shallower or different subtree, get nothing — with no diagnostic, because
`checkDynamicStylePlacement` only scans `tag.getAllPrevSiblings()`. Authors hit
this when scoping styles to a component root (`<div
class=panel><style>.panel{--accent:${input.accent}}</style>…`) or when the
`<style>` sits inside a header/wrapper while the styled element follows outside
it. Direction: reword the warning label and the docs NOTE to "subsequent
siblings of the `<style>` tag and their descendants", and consider extending
`checkDynamicStylePlacement` to also warn when a dynamic `<style>` has no
renderable following siblings at all (today the most-broken shape is the
quietest). Re-verify: compile
`<header><style>.badge{color:${input.c}}</style></header><span
class="badge">New</span>` with `errorRecovery: true` — `meta.diagnostics` is
empty and the emitted `_style_html(...)` sits inside `<header>`, so `.ID~*` can
never match the `<span>`; moving the `<style>` after the `<span>` instead
produces the existing "content before this tag" warning.

## Document `Scope[AccessorProp.Gen]`'s four states; one numeric slot means destroyed, resumed, this-run, and earlier-run

`packages/runtime-tags/src/common/types.ts` › `Scope` | 2026-07-23 | impact:med | effort:low

`Scope[AccessorProp.Gen]` (debug name `#Gen`, declared bare as
`[AccessorProp.Gen]: number` in `common/types.ts:23`) is read four different
ways across the DOM runtime with no comment on the declaration, no `accessor.ts`
note, and no CONTEXT.md glossary entry: `0` means destroyed (`dom/scope.ts` ›
`destroyNestedScopes` sets it; `dom/queue.ts` › `skipDestroyedRenders` and
`_enable_catch` test `?.[Gen] !== 0`), `1` means resumed from SSR
(`dom/resume.ts:135` in `initScope`, viable only because `queue.ts` starts
`runId` at 2), `=== runId` means "created/rendered during the current run" and
is the branch that decides whether `_let` assigns in place or schedules a render
(`dom/signals.ts:39-49`), whether `_or` counts intersection arrivals or queues
(`dom/signals.ts:103-121`), and whether `controllable.ts` reads the live DOM
value or the bound one (nine sites, e.g. `:27`, `:193`, `:281`, `:442`), and `>
0 && < runId` means "live scope from an earlier run" (`dom/signals.ts` ›
`_for_closure` and `runLiveBranch`). RESUMABILITY.md mentions only "`runId` as
the generation boundary (resumed scopes start at 1; normal client work at 2)"
and never says `Gen` doubles as the destroyed flag, so a reader tracing why a
`<let>` write does not re-render has to reconstruct the state machine from nine
call sites. Add a **Generation** entry to CONTEXT.md's "DOM runtime" section and
a two-line comment on the `Scope[AccessorProp.Gen]` member enumerating the four
states (0 destroyed / 1 resumed / `runId` created this run / in-between live
from a previous run). Re-verify: `rg -n "AccessorProp.Gen"
packages/runtime-tags/src --glob '!**/__tests__/**'` lists the sites and shows
no explanatory comment on any of them.
