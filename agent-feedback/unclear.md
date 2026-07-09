# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document why side-effecting runtime factories are safely marked pure

`packages/runtime-tags/src/translator/util/runtime.ts:21` | 2026-07-02 | impact:low | effort:low

`pureDOMFunctions` includes `_template`, `_await_promise`, `_await_content`, `_load_template`, and `_load_setup`, yet those factories have observable side effects at call time: `_template` calls `_resume(id, renderer)` (`packages/runtime-tags/src/dom/template.ts:42`) and the await/load factories call `_enable_catch()`/`enableBranches()` latches. The annotations are sound only because of a non-obvious invariant: registration is needed exactly when the value can be referenced by a serialized register id, which requires the value to be reachable in the client module graph anyway, and the enable latches are re-triggered by whichever construct survives tree-shaking. Two independent reviews flagged these as possibly-unsound; a comment on `pureDOMFunctions` stating the invariant would prevent repeated re-derivation.

## Nested same-template `<context>` providers need an intervening resumable branch

`packages/runtime-tags/src/dom/context.ts` (`_context_branch`) / `html/context.ts` | 2026-07-09 | impact:low | effort:high

Same-template provider instances nested through content that never resumes (no state/closures between them) collide on one branch scope and hit the debug "share the same branch" error, because the caller-side `kBranchSerializeReason` set for a mutable provider's section does not thread through the content/dynamic-tag runtime guard (`_serialize_guard($scope_reason, holeIndex)`) the way `<if>`/`<for>` read it directly. A static parent-side `addSerializeReason(section.parent, true, sectionAccessor.binding)` in `finalizeReferences` was tried and does not reach the child's hole reason. Real recursive components carry per-instance state (which resumes the branch and resolves this naturally -- see the `context-self` fixture), so the gap is narrow; closing it is the cross-template serialize-reason edge the persisted-pages reach analysis owns.

## `<context>` reserve reach analysis has two conservative escape hatches

`packages/runtime-tags/src/translator/core/context.ts` (`buildContextReserve`) | 2026-07-09 | impact:low | effort:high

Server-only context boxes serialize when a client-re-renderable region may consume them: `<if>`/`<for>` sites compile `_context_reserve(...ids)` from statically known subtree sets, and the html `_dynamic_tag`/`_attr_content` runtimes reserve every open box when a resumable hole actually renders. Two shapes fall through both nets and hit the `_context_read` debug error instead: (1) a consumer reached only through a dynamic renderer value (passed content/component) inside a branch that never rendered on the server, and (2) consumers inside mutually recursive templates (self-recursion resolves via the program exit fixed-point; mutual cycles contribute nothing). `<await>`/`<try>` bodies also emit no compiled reserve (their rendered content is covered by the runtime holes). Closing these needs consumption metadata carried on content/renderer values plus a cycle fixed-point across templates. Note also that client-side resolution is branch granular where the server is extent granular: an inner instance of a provider that shares a branch with trailing consumers of the outer instance resolves for them too (see `context-shadowing`, csr skipped) -- the documented rule, enforced by the debug same-branch guard where detectable, is to wrap each instance in its own control flow.
