# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Compat re-render writes scope nodes onto a DOM node instead of the branch scope

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js` › `renderAndMorph` | 2026-07-13 | impact:low | effort:low

In `renderAndMorph`, after `host = rootNode.startNode`, the call
`domCompat.setScopeNodes(host, rootNode.startNode, rootNode.endNode)` writes
`#StartNode`/`#EndNode` onto the fragment's DOM marker node (a self-assign plus
an unused end ref) rather than onto the tags branch **scope** — the argument was
almost certainly meant to be `scope`. Consequence: the `host.fragment` fast-path
at line 158 can never fire for a resumed child, so every re-render falls through
to the `___componentLookup` / `___marko5Component.___rootNode` lookup. Correctness
is unaffected (later renders reuse `___marko5Component.___rootNode`), so this is a
dead optimization + a confusing stale-node invariant; verify destroy/move
semantics before changing to `scope`.

## Represent metadata-only HTML effects without invalid AST sentinels

`packages/runtime-tags/src/translator/util/signals.ts` › `toReturnedFunction` | 2026-07-15 | impact:low | effort:low

`addHTMLEffectCall` deliberately passes `undefined as any` to `addStatement`, which pushes it into a `t.Statement[]`; `traverseReplace` and Babel generation happen to skip the falsy array member. The call exists to mark effect dependencies/side effects rather than to add executable syntax, but it violates the signal and Babel AST types and makes every downstream consumer tolerate an invalid node. Add an explicit metadata-only effect operation (or let `addStatement` accept an omitted statement without pushing it) and remove the cast/TODO.

---

## Pre-existing comments exceeding the two-line rule

`packages/compiler/src/config.js`, `packages/runtime-tags/src/**` | 2026-07-18 | impact:low | effort:med

A sweep for the two-line comment rule surfaced roughly ninety comment blocks
longer than two lines (config option JSDoc in `compiler/src/config.js`,
several `translator/util/references.ts` and `dom/resume.ts` blocks, and
commented-out `serializer.test.ts` cases). Condensing them is a standalone
cleanup. Verify: grep for comment runs of three or more consecutive `//`
lines under the cited paths.

## Normalize inconsistent local naming flagged by a terminology audit

`packages/runtime-tags/src/html/serializer.ts` › `State` | 2026-07-20 | impact:low | effort:low

A file-by-file terminology audit flagged several local naming inconsistencies that are too narrow for CONTEXT.md but worth normalizing when touching these files: `html/serializer.ts` uses `assigns`/`assigned`/`addAssignment` for one mechanism and names its generation counter `flush` (reads as an output flush; it is compared, not flushed — see `parent.flush === state.flush`); `translator/core/if.ts` destructures the same branches array as `branchBodySection` in one place and `branchBody` in another; `dom/controllable.ts` mixes `Controllable` (file, `syncControllableFormInput`) with `Controlled*` accessor/type prefixes for the same concept — CONTEXT.md now canonicalizes "controllable"; `translator/core/await.ts` pairs the near-homophones `startBinding` (a Binding) and `startMark` (a serialize-guard expression). Each is a rename-in-place with no behavior change; snapshots regenerate where identifiers leak into debug output. Re-verify by grepping the cited symbols.

## Normalize the params-binding `BindingType` so a param is identifiable by type

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's "params binding" is created by `trackParamsReferences`, but each caller passes a different `BindingType`: `<for>`/`<await>` use `derived` (`core/for.ts`, `core/await.ts`), `<define>`/attribute-tags/dynamic-tag/known-tag use `param`, program input uses `input`, and an attribute-tag `<for>` uses `local`. So "is this a param?" cannot be answered from `binding.type` and the codebase instead keys off identity — `root === root.section.params` (see `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params`). The heterogeneity is currently load-bearing, not accidental: `BindingType` selects the `resolveBindingSources` path, and `<for>`/`<await>` deliberately use `derived` so `resolveDerivedSources` makes the item param's `Sources` transparently reflect its loop/await source (`<for of=stateVal>` → `state` source; `<for of=input.list>` → `param` source), which drives serialize-reason scheduling (`isStateSerializeReason` vs `isReasonDynamic` in `serialize-reasons.ts`) and `scopeOffset` propagation (`getMaxOwnSourceOffset`). A naive `derived→param` flip severs the `setBindingDownstream` link (it goes dead before `resolveDerivedSources` runs), mis-scheduling serialization and losing scope offsets. The cleanup: give params a correct, uniform type (or a dedicated param marker on the binding) so `isParamBinding` reduces to a `binding.type` check, while moving the source-transparency of `<for>`/`<await>` params off the overloaded `derived` type onto an explicit source-resolution input. Verify current state: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` shows the four distinct `BindingType` args; `isParamBinding` in `references.ts` still uses the identity walk because no type distinguishes them.
