# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document why side-effecting runtime factories are safely marked pure

`packages/runtime-tags/src/translator/util/runtime.ts:21` | 2026-07-02 | impact:low | effort:low

`pureDOMFunctions` includes `_template`, `_await_promise`, `_await_content`, `_load_template`, and `_load_setup`, yet those factories have observable side effects at call time: `_template` calls `_resume(id, renderer)` (`packages/runtime-tags/src/dom/template.ts:42`) and the await/load factories call `_enable_catch()`/`enableBranches()` latches. The annotations are sound only because of a non-obvious invariant: registration is needed exactly when the value can be referenced by a serialized register id, which requires the value to be reachable in the client module graph anyway, and the enable latches are re-triggered by whichever construct survives tree-shaking. Two independent reviews flagged these as possibly-unsound; a comment on `pureDOMFunctions` stating the invariant would prevent repeated re-derivation.

## `template.render` copies `$global` with an own-property spread — prototype members vanish

`packages/runtime-tags/src/html/template.ts` (`render`, ~line 44) normalizes
the caller's `$global` with `{ runtimeId, renderId, ...$global }`. An
own-enumerable spread silently drops anything a framework integration
defines on a class prototype: `@marko/run`'s context refactor
(rc.10 factory object → class) moved `params`/`search` getters and
`fetch`/`render`/`redirect`/`back` methods to the prototype, and every
template `$global.params` read became `undefined` with no error (fixed
downstream by making them own properties again). If the spread is
load-bearing (avoiding caller-object mutation), documenting "own enumerable
properties only" in the `$global` docs/types — or dev-warning when a
provided `$global` has enumerable prototype members — would have saved a
debugging cycle.
