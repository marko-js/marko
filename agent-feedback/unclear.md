# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document why side-effecting runtime factories are safely marked pure

`packages/runtime-tags/src/translator/util/runtime.ts:21` | 2026-07-02 | impact:low | effort:low

`pureDOMFunctions` includes `_template`, `_await_promise`, `_await_content`, `_load_template`, and `_load_setup`, yet those factories have observable side effects at call time: `_template` calls `_resume(id, renderer)` (`packages/runtime-tags/src/dom/template.ts:42`) and the await/load factories call `_enable_catch()`/`enableBranches()` latches. The annotations are sound only because of a non-obvious invariant: registration is needed exactly when the value can be referenced by a serialized register id, which requires the value to be reachable in the client module graph anyway, and the enable latches are re-triggered by whichever construct survives tree-shaking. Two independent reviews flagged these as possibly-unsound; a comment on `pureDOMFunctions` stating the invariant would prevent repeated re-derivation.

## Dynamic style values inside `<for>`/`<if>` are undocumented but load-bearing

`src/translator/core/style.ts:113` | 2026-07-09 | impact:low | effort:low

A `<style>` with `${...}` interpolations placed inside a `<for>` body gives
each iteration its own values (the emitted `<style class=sN>.sN~*{--x:v}`
shell precedes that iteration's siblings, and the latest preceding stylesheet
wins the tie), which is exactly what per-item styling wants — verified live
with 24 loop iterations resolving 24 distinct values. Nothing in the styling
docs says the feature composes with control flow, and two real traps sit next
to it: the emitted style ELEMENTS interleave with the loop's content, so
`nth-child` selectors over the siblings silently skip half their targets (use
`nth-of-type`), and any higher-specificity rule using the `animation:`
shorthand resets an interpolated `animation-delay` because the shorthand
implicitly sets delay to `0s`. A docs example of a dynamic style in a loop,
plus a note about element interleaving, would have saved the debugging session.

## Repeated attribute tags look like arrays but are not — indexing silently yields undefined

`packages/runtime-tags/src/translator/util/translate-attrs.ts:98` | 2026-07-11 | impact:med | effort:low

`input.item` for repeated `<@item>` tags is the first tag object with a `[Symbol.iterator]`, so `<for of=input.item>` works — but `input.item.length` and `input.item[i]` are `undefined` with no warning, and that exact mistake (indexing into `input.tab` to pick the active tab, or `.length`-guarding it) recurred across independently LLM-generated components even when documentation showing the `[...input.tab || []]` spread idiom was provided in-context. The language reference documents iteration but never states the negative ("not an array; numeric indexing does not work"). A doc callout plus a MARKO_DEBUG-time hint when a `Marko.AttrTag` receives a numeric-index/`length` read (e.g. a dev-only Proxy) would catch the most common misread of the attribute-tag model.
