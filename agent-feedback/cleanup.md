# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Dedupe the branch resume/serialize scaffolding shared by `<if>` and branch-mode `<show>`

`packages/runtime-tags/src/translator/core/show.ts:404` | 2026-07-09 | impact:low | effort:med

`translateShowBranchHtmlExit` is the third copy of the branch-end recipe that also lives in `core/if.ts` (html exit) and the inline `<show>` html exit: `skipParentEnd` + `kSkipEndTag`, the `statefulSerializeArg`/`markerSerializeArg` pair, and the trailing `parentEndTag`/`singleNode` args. Likewise `html/writer.ts` `_show_branch` repeats `_if`'s prologue (resumeMarker computation, `BranchStart` mark, `withBranchId`, the no-marker `writeScope` fallback) and only differs in how "rendered" is detected. A change to the branch resume protocol now has three translator sites and two writer sites to keep in sync. Extract a shared guard-args helper (translator) and a shared branch-prologue helper (writer) next time either changes.

## Sibling effect-cleanup order differs between client-rendered and resumed branches

`packages/runtime-tags/src/dom/scope.ts:104` | 2026-07-09 | impact:low | effort:med

`resetBranchEffects` and `destroyNestedScopes` iterate `AbortScopes`/`BranchScopes` sets in insertion order, which differs between a client-rendered branch and the same branch after SSR + resume (resume registers scopes in a different order). Observable as `onDestroy`/`$signal` cleanup order across siblings (surfaced writing a `<for>` + `<show>` fixture, which had to be reduced to one item to snapshot identically across csr/resume). If deterministic cleanup order ever becomes part of the contract, both walks need an order normalization; until then fixtures must avoid order-sensitive assertions across siblings.
