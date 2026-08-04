# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document the `Marko.Global` augmentation path so `$global` in tests is type-checked

`packages/runtime-tags/index.d.ts` › `TemplateInput` | 2026-07-19 | impact:low | effort:low

`TemplateInput<Input> = Input & { $global?: Global }` is the only typed slot for `$global`, and both `html/template.ts` `render` and `dom/template.ts` `mount` destructure it - but `Marko.Global` carries `[x: PropertyKey]: unknown` (index.d.ts:16), so a render test or story can pass any shape and nothing checks it against the route `Context` the component reads. `Marko.Global` is an interface in `declare global`, so `declare global { namespace Marko { interface Global { data?: Run.Context } } }` does restore checking (verified: a wrong-typed member errors TS2322) - but only with OPTIONAL members; a required member makes `render({ $global: {} })` error TS2741 everywhere. Direction: document that merge in `index.d.ts` and the `## TypeScript` section of `cheatsheet.md` (which currently covers only Input/Body/AttrTag), including the optional-member caveat, so `@marko/run` can type route context. Context, unverifiable in this repo: Storybook has no slot at all - `Story<Input>.args` is `Input`, so `$global` gets smuggled through `args` and surfaces as a bogus control. Distinct from the separate finding on typing `@marko/run`'s `ctx.search` - same `Run.Context`, different surface, so fixing one does not cover the other. Re-verify: `rg -n 'PropertyKey' packages/runtime-tags/index.d.ts` still shows the open index signature at :16.

## Make the `getOnlyChildParentTagName` memo order-independent — `branchSize` is ignored after the first call

`packages/runtime-tags/src/translator/util/is-only-child-in-parent.ts` › `getOnlyChildParentTagName` | 2026-07-23 | impact:low | effort:low

The cached `tag.node.extra[kOnlyChildInParent]` is returned before `branchSize` is read, so only the first call per node decides the answer — in practice `IfTag.analyze`, the sole caller passing `branches.length`, since `core/if.ts` translate, `core/for.ts` and `core/show.ts` pass the default `1` and ride the cache across the analyze→translate clone. Any new pass touching an `<if>` before `IfTag.analyze` poisons the memo with `1`, silently costing every multi-branch chain its parent-element marker (an extra `<!>`, walk char and `#text` binding). Nothing catches that: every multi-branch fixture snapshot uses `_if("#text/…")`. Pass the real branch count at the `core/if.ts` translate sites too — keying the memo on `branchSize` alone would break them, since they pass `1` — and add a chain-as-only-child fixture. Distinct from the won't-fix entry "Extend only-child marker elision to `<await>`/`<try>`", which spreads the optimization to more tags rather than fixing this memo's key. Re-verify: compile `<div><if=input.x><p>a</p></if><else-if=input.y><i>c</i></else-if><else><b>b</b></else></div>` with `-o dom -d`; today it yields `_if("#div/0", …)` with `$template === "<div></div>"`.

## Name the `doc`-becomes-runtime trick in the debug walker runtime

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts` › `WALKER_RUNTIME_CODE` | 2026-07-23 | impact:low | effort:low

The debug half of the pair exists to be readable, yet its central trick is unexplained and reads as a bug: `doc = document` builds the TreeWalker and is captured as the runtime's `d` field, then `doc = (self[runtimeId][renderId] = {…})` rebinds `doc` to the runtime object, which is why `w()`'s `doc.x(...)` is a late-bound call that picks up `REORDER_RUNTIME_CODE`'s `runtime.x` replacement. A reader tracing `doc.x` expects `document.x`. Add the one-line intent comment (the reorder half already sets the precedent) or give the debug version its own `runtime` parameter, since only exported member names must match `inlined-runtimes.ts`. Re-verify: confirm `d: doc` is evaluated before `doc` is reassigned, so `d` holds the document while every later `doc.` is the runtime.

## Fix the two wrong citations in the runtime-tags AGENTS.md Translator section

`packages/runtime-tags/AGENTS.md` › `Translator` | 2026-07-23 | impact:low | effort:low

The validation bullet credits `util/assert.ts` with `assertNoArgs`/`assertNoParams`, which it does not export (it has `assertNoSpreadAttrs`, `assertNoTagVarMutation`, `assertNoBodyContent`); those two plus `assertNoVar`/`assertAllowedAttributes` come from `@marko/compiler/babel-utils` (`packages/compiler/src/babel-utils/assert.js`), as `core/if.ts`, `core/debug.ts` and `core/return.ts` show. The next bullet says `util/known-tag.ts` "holds native HTML tag/attribute metadata"; it holds none — it exports `knownTagAnalyze`/`knownTagTranslateHTML`/`knownTagTranslateDOM`/`finalizeKnownTags` (custom and dynamic tag input contracts) and is imported only by `custom-tag.ts`, `dynamic-tag.ts` and `references.ts`, so an agent sent there for native-element work lands in the wrong subsystem. Reword both: split local from babel-utils assert helpers, and point native-element work at `visitors/tag/native-tag.ts` (plus `common/helpers.ts`, `util/is-non-html-text.ts`). Re-verify: `grep -n '^export' packages/runtime-tags/src/translator/util/assert.ts` and `rg -l 'known-tag' packages/runtime-tags/src`.

## Document the `diagnostics.md` and error snapshots plus the missing `TestConfig` keys

`packages/runtime-tags/AGENTS.md` › `Testing › Fixture anatomy` | 2026-07-23 | impact:med | effort:low

The anatomy block lists four snapshot kinds (`dom.bundle`, `html.bundle`, `render`, `writes`) but not `diagnostics.md` (debug-only `meta.diagnostics` snapshot, 19 fixtures today), `error-compile-{html,dom}[.debug].txt`, or `{ssr,csr}.error[.debug].txt` — so adding or dropping a recoverable/deprecation diagnostic fails a test the docs never name, and "read the generated snapshots" never points at it. The `TestConfig` summary also omits `error_dom`/`error_html` (41 fixtures), `embedded`, `load_order`, `reject_load` and `fix_guide`, and the stated "~800 fixtures" is 964 dirs. Add the missing snapshot kinds and config keys. Re-verify: `find packages/runtime-tags/src/__tests__/fixtures -path '*__snapshots__*' -type f | sed 's#.*/##' | sort -u` against the block, and `TestConfig` in `main.test.ts`.

## Say "following siblings" in the dynamic `<style>` placement warning

`packages/runtime-tags/src/translator/core/style.ts` › `checkDynamicStylePlacement` | 2026-07-23 | impact:med | effort:low

A dynamic `<style>` renders as `.ID~*{--M_x:value}` (`html/attrs.ts` › `_style_html`, mirrored by `dom/dom.ts` › `_style_shell`), so the custom properties reach only the style element's _following siblings_ and their descendants — never its own parent or a different subtree. The warning's "only apply to elements rendered after it, so the content before this tag will not receive them" reads as document order, and `checkDynamicStylePlacement` only scans `getAllPrevSiblings()`, so `<div class=panel><style>.panel{--accent:${input.accent}}</style>…>` — where the styled element is the parent — is silent. Reword the label to "subsequent siblings of the `<style>` tag and their descendants". Re-verify: compile `<header><style>.badge{color:${input.c}}</style></header><span class=badge>New</span>` with `errorRecovery: true` — `meta.diagnostics` is empty and `_style_html` sits inside `<header>`.

## Document the four states of `Scope[AccessorProp.Gen]`

`packages/runtime-tags/src/common/types.ts` › `Scope` | 2026-07-23 | impact:med | effort:low

`[AccessorProp.Gen]: number` is declared bare and read four ways: `0` destroyed (`dom/scope.ts` › `destroyNestedScopes`; tested by `queue.ts` › `skipDestroyedRenders`), `1` resumed from SSR (`dom/resume.ts` › `initScope`, viable only because `runId` starts at 2), `=== runId` created during this run (decides whether `_let`/`_or`/`controllable.ts` write in place or queue a render), and `> 0 && < runId` live from an earlier run (`_for_closure`, `runLiveBranch`). Nothing says so — no comment on the member, no CONTEXT.md glossary entry, and RESUMABILITY.md covers only the `runId` boundary — so tracing why a `<let>` write does not re-render means reconstructing the state machine from ~20 call sites. Add a two-line comment plus a **Generation** entry in CONTEXT.md's DOM runtime section. Re-verify: `rg -n "AccessorProp.Gen" packages/runtime-tags/src --glob '!**/__tests__/**'` lists the sites with no explanation on any.

## Point the accessor-lockstep guidance at `src/common/constants/*[.debug].ts`

`packages/runtime-tags/AGENTS.md` › `Runtime conventions` | 2026-07-27 | impact:low | effort:low

The `.debug.ts`-pairs bullet, the Gotchas line and CONTEXT.md's `Accessor` entry all say to keep `accessor.ts` / `accessor.debug.ts` in lockstep, but since the const-module refactor both files are member-less barrels; the members live in seven `.debug`-paired modules under `src/common/constants/`, and the Layout table's `src/common/` row never names `constants/`. Nothing enforces parity: each module's `Value` is `typeof import("./<itself>")` and `translator/util/get-accessor-char.ts` › `getAccessorProp` casts `as any`, so a member added to one half type-checks and surfaces as `undefined` only in an optimize build. Retarget the three mentions, fix "the other pair" (there are nine `.debug.ts` files), and consider a parity assertion over the seven pairs. Re-verify: `grep -c '^export const' packages/runtime-tags/src/common/accessor.ts` prints 0 while `constants/accessor-prop.ts` prints 28.

## Cover `static` for module-level values and helpers in cheatsheet.md

`packages/runtime-tags/cheatsheet.md` › `Golden rules` | 2026-07-27 | impact:med | effort:low

The shipped LLM syntax reference contains zero occurrences of `static`, though it is a core tag (`translator/core/static.ts`) and the exact fix `core/let.ts` and `core/const.ts` name in their tag-variable errors. Module-level helpers are worse: a template starting with `function fmt(n) { … }` fails with ``Unable to find entry point for custom tag `<function>` `` and no diagnostic mentions `static`. The only adjacent guidance, the DON'T row `$ const y = x * 2;` → `<const/y=x * 2>`, steers never-changing values into per-instance signals — `<const/LIMIT=10>` emits a `$LIMIT` signal plus a `$setup` call where `static const LIMIT = 10;` emits a module-scope const. Add a golden rule plus a DON'T row for module-level values and helpers. Distinct from the entry "Document the resume-payload cost of per-item custom tags", which is anchored to the same heading but is about resume-payload size; both additions land in the same `Golden rules` list. Re-verify: `grep -c static packages/runtime-tags/cheatsheet.md` prints 0, and the `function fmt` template fails to compile until `static` is prefixed.

## Mark the five `@marko/compiler` options only the Marko 5 translator implements

`packages/compiler/src/config.js` › `config (default export)` | 2026-07-27 | impact:med | effort:low

`writeVersionComment`, `ignoreUnrecognizedTags`, `hydrateInit`, `hot` and `meta` are documented as plain compiler options, but the only readers are in the Marko 5 translator (`packages/runtime-class/src/translator/index.js`, `tag/{custom-tag,native-tag,index}.js`, `util/{add-dependencies,load-import}.js`). Under `@marko/runtime-tags/translator` all five are inert with no diagnostic: toggling `writeVersionComment`/`hot`/`meta` yields byte-identical `code`, `hydrateInit` likewise at `output: "hydrate"`, and `ignoreUnrecognizedTags: true` still hard-fails `<unknown-thing/>`. Since Marko 6 is primary and `config.d.ts` flags only `meta`, the other four read as current API. Add a "Marko 5 (class API) translator only" line to each JSDoc block in `config.js` and to the matching `config.d.ts` fields, following the note already on `output`. Re-verify: `compileSync("<div>hi</div>", f, {translator, output:"html", cache:new Map(), [opt]:true|false})` gives equal `code` under the tags translator and differing `code` under `marko/translator`.

## Fix the compiler AGENTS.md stage bullet: no `translator.migrate`, no taglib visitors in analyze

`packages/compiler/AGENTS.md` › `Map` | 2026-07-27 | impact:low | effort:low

The `src/babel-plugin/` bullet says "Each stage merges visitors from taglibs + the translator", but only `transform` and `translate` do. `getMarkoFile` builds `rootMigrators` from taglib migrators plus the compiler's own `migrate` and never reads `translator.migrate` (no translator exports one, matching the Translator-contract section right below); analyze runs `traverseAll(file, translator.analyze)` alone, and a taglib-level `analyze` prop is a hard load error, "Invalid option: analyze". Reword per stage: migrate = taglib migrators + compiler `migrate`; transform = taglib transformers + compiler `transform` + optional `translator.transform`; analyze = `translator.analyze` only; translate = taglib `translate` (skipped for `output: "hydrate"`) + `translator.translate`. Re-verify with `compileSync` and an inline translator whose every hook logs `p.hub.file.___compileStage`: `translator.migrate` never fires and no taglib visitor runs during analyze.

## Warn under `MARKO_DEBUG` when `NaN`/`0n` vanish from text and style values

`packages/runtime-tags/src/html/content.ts` › `_to_text` | 2026-07-18 | impact:low | effort:low

Text and style-object values use `val || val === 0`, so `NaN` and `0n` render as nothing (`_to_text`/`_escape` in `html/content.ts`, `_to_text` in `dom/dom.ts`, `stringifyStyleObject` in `common/helpers.ts`), while attributes skip only `null`/`undefined`/`false` (`isVoid` → `nonVoidAttr`) and write `data-a=NaN`, `data-b=0`. A stray `NaN` therefore blanks a text node or drops an entire `width:` declaration with no signal: `assertValidTextValue` rejects only symbols and objects, so `MARKO_DEBUG` is silent too. Direction: warn in `MARKO_DEBUG` when `NaN` reaches a text or style value, alongside the existing camelCase-key warn in `stringifyStyleObject`. Distinct from the controlled-value selection path, where `normalizeStrAttrValue` (`html/attrs.ts`) already mirrors the DOM for `NaN`/`0n` — the drop survives only in text and style positions. The coercion-table half of this entry has been ported to the markojs.com website repo, which documents the drop rules for text and `style=`. Re-verify: `rg -n "val \|\| val === 0|value \|\| value === 0" packages/runtime-tags/src` beside `isVoid` in `common/helpers.ts`.

## Add a head-contribution primitive, or state that nested `<title>`/`<meta>`/`<link>` never hoist

`packages/runtime-tags/src/html/assets.ts` › `_flush_head` | 2026-07-19 | impact:med | effort:med

The HTML runtime writes in source order with no head-relocation pass, so a component under `<main>` that emits `<title>`, `<meta name=description>` or `<link rel=canonical>` renders them in the body — duplicate titles and an inert canonical link. The only head hook is `_flush_head`, written at a literal `</head>` by native-tag.ts:719 when `linkAssets` is on; it flushes assets already collected and cannot pick up tags written later. (`_hoist` in html/writer.ts is scope-resume plumbing, not head hoisting.) The only answer today is prop-drilling meta up to the layout that owns `<head>` — unrelated to the `@marko/run` `+meta.json` finding, which is about typing heterogeneous meta across sibling routes, not where head tags land. Direction: a descendant-contributes-to-head primitive (cf. `<svelte:head>`, `@solidjs/meta`), or — since the website docs live in the separate markojs.com repo — at minimum an explicit no-hoisting note in `packages/runtime-tags/cheatsheet.md`. Re-verify: `pnpm run compile -o html -d` on `<html><head><title>Layout</title></head><body><main><title>Nested</title></main></body></html>` emits both titles in source order.

## Consider renaming translator "signal", which clashes with the ecosystem meaning

`packages/runtime-tags/src/translator/util/signals.ts` › `getSignal` | 2026-07-20 | impact:med | effort:high

A `Signal` here is a compiled setup/update program keyed by setup, a binding, or an intersection — not a reactive value container, which is what contributors arriving from other frameworks assume. A rename ("update unit", "effect program") churns runtime helper names, every `callRuntime` site and every snapshot, so it can only ride a major refactor. Until then the `packages/runtime-tags/CONTEXT.md` Signal entry ("_Avoid_: observable, reactive value") is the mitigation. Re-verify: read that entry.

## Name the `<let>`-as-a-formula failure mode in cheatsheet.md

`packages/runtime-tags/cheatsheet.md` › `Golden rules` (rule 4, derived values) | 2026-08-03 | impact:med | effort:low

Rule 4 states the positive rule (`<const>` auto-recomputes) but never says what the wrong choice does, and `<let>` is the JavaScript-habit default for "a variable": its value attribute is an INITIAL value, so `<let/sum=a + b>` freezes at the first render. The wrong choice is silent in both directions — the SSR HTML is byte-correct, and because an uncontrolled `<let>` marks its binding as not driving anything downstream, the text nodes it feeds are emitted without `_el_resume`, so the browser-side write lands on an unresumed node as a no-op with no error or warning. Add the failure mode to rule 4 and a DON'T row (`<let/n=a + b>` for a value you never assign → `<const/n=a + b>`); a `<let>` that is never assigned and whose initializer reads reactive state is provably a frozen `<const>`, so it is also a candidate diagnostic in `translator/core/let.ts`. Re-verify: compile `<let/a=1><const/b=2><let/sum=a + b><button onClick() { a++ }>inc</button><p>${sum}</p>` with `pnpm run compile -o html -d` and note the `<p>` text has no `_el_resume` marker, which it does when `sum` is a `<const>`.
