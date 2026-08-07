# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Warn under `MARKO_DEBUG` when `NaN`/`0n` vanish from text and style values

`packages/runtime-tags/src/html/content.ts` › `_to_text` | 2026-07-18 | impact:low | effort:low

Text and style-object values use `val || val === 0`, so `NaN` and `0n` render as nothing (`_to_text`/`_escape` in `html/content.ts`, `_to_text` in `dom/dom.ts`, `stringifyStyleObject` in `common/helpers.ts`), while attributes skip only `null`/`undefined`/`false` (`isVoid` → `nonVoidAttr`) and write `data-a=NaN`, `data-b=0`. A stray `NaN` therefore blanks a text node or drops an entire `width:` declaration with no signal: `assertValidTextValue` rejects only symbols and objects, so `MARKO_DEBUG` is silent too. Direction: warn in `MARKO_DEBUG` when `NaN` reaches a text or style value, alongside the existing camelCase-key warn in `stringifyStyleObject`. Distinct from the controlled-value selection path, where `normalizeStrAttrValue` (`html/attrs.ts`) already mirrors the DOM for `NaN`/`0n` — the drop survives only in text and style positions. The coercion-table half of this entry has been ported to the markojs.com website repo, which documents the drop rules for text and `style=`. Re-verify: `rg -n "val \|\| val === 0|value \|\| value === 0" packages/runtime-tags/src` beside `isVoid` in `common/helpers.ts`.

## Add a head-contribution primitive, or state that nested `<title>`/`<meta>`/`<link>` never hoist

`packages/runtime-tags/src/html/assets.ts` › `_flush_head` | 2026-07-19 | impact:med | effort:med

The HTML runtime writes in source order with no head-relocation pass, so a component under `<main>` that emits `<title>`, `<meta name=description>` or `<link rel=canonical>` renders them in the body — duplicate titles and an inert canonical link. The only head hook is `_flush_head`, written at a literal `</head>` by native-tag.ts:719 when `linkAssets` is on; it flushes assets already collected and cannot pick up tags written later. (`_hoist` in html/writer.ts is scope-resume plumbing, not head hoisting.) The only answer today is prop-drilling meta up to the layout that owns `<head>` — unrelated to the `@marko/run` `+meta.json` finding, which is about typing heterogeneous meta across sibling routes, not where head tags land. Direction: a descendant-contributes-to-head primitive (cf. `<svelte:head>`, `@solidjs/meta`), or — since the website docs live in the separate markojs.com repo — at minimum an explicit no-hoisting note in `packages/runtime-tags/cheatsheet.md`. Re-verify: `pnpm run compile -o html -d` on `<html><head><title>Layout</title></head><body><main><title>Nested</title></main></body></html>` emits both titles in source order.

## Consider renaming translator "signal", which clashes with the ecosystem meaning

`packages/runtime-tags/src/translator/util/signals.ts` › `getSignal` | 2026-07-20 | impact:med | effort:high

A `Signal` here is a compiled setup/update program keyed by setup, a binding, or an intersection — not a reactive value container, which is what contributors arriving from other frameworks assume. A rename ("update unit", "effect program") churns runtime helper names, every `callRuntime` site and every snapshot, so it can only ride a major refactor. Until then the `packages/runtime-tags/CONTEXT.md` Signal entry ("_Avoid_: observable, reactive value") is the mitigation. Re-verify: read that entry.

## Cover the `Marko.Global` augmentation path in the user-facing docs

`packages/runtime-tags/cheatsheet.md` › `TypeScript` | 2026-08-05 | impact:low | effort:low

`Marko.Global` carries `[x: PropertyKey]: unknown` (`packages/runtime-tags/index.d.ts`), so an unaugmented `$global` is unchecked and a render test or story can pass any shape. `declare global { namespace Marko { interface Global { data?: Run.Context } } }` restores checking, but only with OPTIONAL members — a required member makes `render({ $global: {} })` fail with TS2741 everywhere. That caveat is now documented on the `Global` interface itself in `index.d.ts`; what remains is whether the user-facing docs should carry it. It was cut from `cheatsheet.md` in PR #3745 to keep that file a dense syntax reference, so the remaining home is the markojs.com website repo rather than this one. Context, unverifiable in this repo: Storybook has no slot at all — `Story<Input>.args` is `Input`, so `$global` gets smuggled through `args` and surfaces as a bogus control. Distinct from the separate finding on typing `@marko/run`'s `ctx.search` — same `Run.Context`, different surface. Re-verify: `rg -n 'PropertyKey' packages/runtime-tags/index.d.ts` still shows the open index signature.

## Mark the `hot` `@marko/compiler` option as Marko 5 only, or implement it for Marko 6

`packages/compiler/src/config.js` › `config (default export)` (the `hot` key) | 2026-07-27 | impact:med | effort:low

`hot` ("bring in the hot module replacement runtime") is read only by the Marko 5 translator (`packages/runtime-class/src/translator`), so under `@marko/runtime-tags/translator` it is inert with no diagnostic — toggling it yields byte-identical `code` — and reads as current API. The sibling options from this finding (`writeVersionComment`, `ignoreUnrecognizedTags`, `hydrateInit`, `meta`) were annotated in `config.js`/`config.d.ts` in PR #3745; `hot` was deliberately left out because HMR is wanted for Marko 6, making it an unbuilt feature rather than legacy surface area, so labelling it "Marko 5 only" would be wrong. Either build it, or note that Marko 6 support is pending. Re-verify: `compileSync("<div>hi</div>", f, { translator, output: "html", cache: new Map(), hot: true })` against the same call with `hot: false` — equal `code` under the tags translator, differing `code` under `marko/translator`.
