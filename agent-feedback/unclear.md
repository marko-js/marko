# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

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

## Point the tag-variable self-reference error at a working alternative

`packages/runtime-tags/src/translator/util/references.ts` › `trackReferencesForBinding` | 2026-08-10 | impact:med | effort:low

The diagnostic ("`X` is the tag variable this tag declares, so its own attributes cannot read it") is precise about the constraint but silent on what to do instead, and the patterns that hit it are routine async plumbing: a `<const>` fetch helper that re-invokes itself for retry, or in-flight dedup with a queued rerun. Patterns that work, found by trial: hoist mutable coordination state into a plain-object `<const/mem={ inflight: false, queued: false }>` and convert the self-call into a drain loop (`do { … } while (mem.queued)`), or stash a rerun thunk on that object from a `<script>` (which may reference the tag variable). Naming either in the error text — or a short "self-referencing helpers" note in `packages/runtime-tags/cheatsheet.md` — would have saved a compile-fail/rewrite cycle in production use. Re-verify: compile `<const/f=() => f()>` and read the error.
