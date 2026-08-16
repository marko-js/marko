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

## Cheatsheet: controllable child APIs, debounced inputs, and lifecycle `this` init

`packages/runtime-tags/cheatsheet.md` › Golden rules / Client-side effects | 2026-08-13 | impact:med | effort:low

Three patterns apps hit that the cheatsheet does not spell out: (1) **Custom controllable props** mirror natives — `value` + `valueChange` and parent `value:=x` (not ad-hoc `onChange`); show a tiny child `<let/value:=input.value>` example under rule 7. (2) **Debounced field that stays controllable** — hold uncommitted text in `pending`, display with `<const/draft=((pending ?? value) || "")>`, commit by assigning `value` and clearing `pending`; do not sync draft from value in a `<script>` (violates rule 4). (3) **`<lifecycle>` return object** — do not read `this.<attr>` inside the object literal returned from `onMount` (collapses attr types); set fields after the object is created. Re-verify by adding those three short examples and confirming an agent following only the cheatsheet no longer reaches for effect-style draft sync or `onChange` naming.

## Cheatsheet: prefer method-shorthand handlers when assigning `<let>` state

`packages/runtime-tags/cheatsheet.md` › Golden rules §6 Events | 2026-08-13 | impact:med | effort:low

`onKeyDown((e) => { paletteOpen = !paletteOpen })` type-checks as TS2588 ("Cannot assign to 'paletteOpen' because it is a constant") under `mtc`, while the method form `onKeyDown(e) { paletteOpen = !paletteOpen }` is fine. Rule 6 already lists both shapes but does not warn that arrow/function values can freeze tag state bindings for writes. Apps converting `window.addEventListener` to Marko `on*` hit this immediately. Direction: one line under rule 6 — prefer method shorthand when the body assigns `<let>`/`:=` state; use `onX=cond && handler` only when the handler is a predeclared `<const>` or a no-assign filter. Re-verify: compile a tag with `<let/open=false>` and both handler forms; only the arrow form should error on `open = true`.

## Cheatsheet: `static type` for module-level type aliases in `.marko`

`packages/runtime-tags/cheatsheet.md` › Golden rules §10 / TypeScript | 2026-08-13 | impact:low | effort:low

Rule 10 covers `static const` / `static function` so bare `function` is not parsed as a custom tag, but it does not mention type aliases. A root-level `type Row = …` in a `.marko` file fails the typecheck (`TS1005 ')' expected` and cascade parse errors); the working form is `static type Row = TreeRow<TreeFile>`. Agents fall back to inlining long generics on every `<const>` helper. Direction: extend rule 10 (and the common-mistakes table row for module-level values) with `static type Alias = …` next to `static const` / `static function`. Re-verify: `mtc` a tag with bare `type X = string` (fails) vs `static type X = string` used on a `<const>` param (passes).

## Cheatsheet: assign controllable bindings (skip `input.*Change` calls)

`packages/runtime-tags/cheatsheet.md` › Golden rules §7 controllable | 2026-08-13 | impact:med | effort:low

Controllable props document `value:=x` at the **call site**, but child tags often still write `input.openChange?.(false)`. Assignment on a controllable binding fires `*Change`:

```marko
<let/open:=input.open>
<button onClick() { open = false }>
```

Same for report-only pairs (`state`/`stateChange`). Prefer this over `input.openChange?.(false)`.

Runtime also supports `<const/{ open }=input>` (see `assign-destructured` fixtures). Under `@marko/type-check` in app tags that use `export interface Input { … }`, that destructure currently type-errors as `Property 'open' does not exist on type '{ value: Input; }'` while `<let/open:=input.open>` typechecks — either fix the `input` type for pattern bindings or document `:=` as the typed form. Re-verify: `mtc` both forms on a tag with `export interface Input { open?: boolean; openChange?: (v: boolean) => void }`.

## Cheatsheet: `client import` is undefined during SSR render

`packages/runtime-tags/cheatsheet.md` › imports / SSR | 2026-08-13 | impact:high | effort:low

`client import { fn } from "./x"` deliberately omits the binding from the server bundle. Any **render-time** call (`<const/x=fn()>`, attribute expressions, `<if=fn()>`, top-level `<script>` that runs while streaming) therefore throws `TypeError: fn is not a function` on the server — often inside `<try>`/`@catch` or an out-of-order `<await>` stream, so the HTML still ships a placeholder plus a hidden error fragment rather than an obvious build failure.

Pure helpers used while painting SSR HTML (`phaseOf`, `makeFileFilter`, `fuzzy`, `pushSupported` that already guards `typeof window`, etc.) must be ordinary `import`. Reserve `client import` for browser-only modules (DOM, `window`, xterm, WebSocket) and invoke those only from `lifecycle` / event handlers.

Direction: one cheatsheet rule + a common-mistakes row: "render path → normal import; browser-only side effects → `client import` + client-only entrypoints". Ideal follow-up: translator warning when a `client import` binding is referenced from a server-evaluated expression section. Re-verify: Tags-API page with `<try><await|…|>…` that SSRs a child calling `client import { phaseOf }`; server HTML catch/stream shows `phaseOf is not a function`; switch to `import { phaseOf }` and the SSR tree paints.

## Cheatsheet: `<show>` always joins the resume tree; function consts must not

`docs` / tags cheatsheet › `<show>` / `<const>` | 2026-08-13 | impact:med | effort:low

`<show>` always renders its body (hidden → `<t hidden>`) so the branch can resume without shipping the body's template; `<if>` mounts and destroys. Agents treating `<show>` as a free "display:none" for heavy client-only panes (diff, tabs) discover only after SSR that derived function-valued `<const>`s were serialized as holes and throw `is not a function` on first open. Cheatsheet should state: use `<if>` when the subtree should not exist until needed; use `<show>` only when keep-alive + resume of already-rendered DOM is required; never store a function in a `<const>` that SSRs — call pure helpers inside an expression that produces a serializable result (`items.filter(makeFilter(q))`) or keep the helper call inside handlers/lifecycle. Re-verify: an agent following only the cheatsheet picks `<if>` for a first-paint-closed review pane and does not leave `const/match=makeFilter(...)` on a shown/hidden SSR branch.

## Cheatsheet: do not read `$global` inside a promise `.then`

`packages/runtime-tags` › `$global` / html writer `$chunk` | 2026-08-13 | impact:high | effort:low

`$global` is backed by the current render chunk (`$chunk.boundary…`). Capturing `$global.data.somePromise.then(() => $global.data.other)` looks fine during the render that creates the promise, but when the promise settles the chunk is gone and the read throws `Cannot read properties of undefined (reading 'boundary')` — often only visible as a streamed `<try>` `@catch` full-page error. Snap sync fields into locals before chaining, or fold them in the handler with values already closed over. Re-verify: SSR a page that does `($global.data.slow as Promise<T>).then(() => $global.data.fast)` under `<try>/<await>` and observe the catch; fix by `const fast = $global.data.fast` before `.then`.
