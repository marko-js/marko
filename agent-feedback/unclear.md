# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document why side-effecting runtime factories are safely marked pure

`packages/runtime-tags/src/translator/util/runtime.ts:21` | 2026-07-02 | impact:low | effort:low

`pureDOMFunctions` includes `_template`, `_await_promise`, `_await_content`, `_load_template`, and `_load_setup`, yet those factories have observable side effects at call time: `_template` calls `_resume(id, renderer)` (`packages/runtime-tags/src/dom/template.ts:42`) and the await/load factories call `_enable_catch()`/`enableBranches()` latches. The annotations are sound only because of a non-obvious invariant: registration is needed exactly when the value can be referenced by a serialized register id, which requires the value to be reachable in the client module graph anyway, and the enable latches are re-triggered by whichever construct survives tree-shaking. Two independent reviews flagged these as possibly-unsound; a comment on `pureDOMFunctions` stating the invariant would prevent repeated re-derivation.
