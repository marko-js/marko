# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Pass the branch scope, not the fragment marker, to `setScopeNodes`

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js` › `renderAndMorph` | 2026-07-13 | impact:low | effort:low

After `host = rootNode.startNode`, `renderAndMorph` calls `domCompat.setScopeNodes(host, rootNode.startNode, rootNode.endNode)`, writing `#StartNode`/`#EndNode` onto the fragment's DOM marker (a self-assign plus an unused end ref) instead of onto the tags branch `scope`. Since `scope[#StartNode]` never becomes the fragment marker, the `rootNode = host.fragment` fast path can never fire for a resumed child and every re-render falls back to the `___componentLookup` / `___marko5Component.___rootNode` lookup. Correctness is unaffected, so this is a dead optimization plus a misleading invariant; passing `scope` restores it, but check destroy/move first, since the fragment markers sit inside the scope's original start/end range. Re-verify: on a second re-render of a server-rendered class child, `domCompat.getStartNode(scope).fragment` should be set.

## Extract one helper for the `attrTag`/`attrTags` merge duplicated in `known-tag.ts`

`packages/runtime-tags/src/translator/util/known-tag.ts` › `translateAttrTag` | 2026-07-23 | impact:low | effort:low

The rule "a repeated attribute tag folds into `attrTags(prev, next)`, a non-repeated one becomes `attrTag(props)`" is implemented four times. `translateAttrTag` and the `isAttributeTag(tag)` branch of `applyAttrObject` are near-verbatim ~35-line copies, including the `t.parenthesizedExpression` mutation trick, differing only in where `repeated` comes from and whether the result is returned or handed to `addStatement`. `translate-attrs.ts` › `translateAttrs` and `addDynamicAttrTagStatements` encode the same rule over `contentProperties` and over an attr-tag identifier assignment. One helper would collapse the two `known-tag.ts` copies and let the other two share the `repeated ? attrTags : attrTag` decision, so a future change cannot land on three of four sites. Re-verify: `rg -n '"attrTags"' packages/runtime-tags/src/translator` lists exactly those four sites.

## Normalize the local naming flagged by the terminology audit

`packages/runtime-tags/src/html/serializer.ts` › `State` | 2026-07-20 | impact:low | effort:low

Three rename-in-place inconsistencies remain. `html/serializer.ts` spreads one mechanism over `assigns`/`assigned`/`addAssignment` and calls its generation counter `flush` though it is only compared (`parent.flush === state.flush`); `translator/core/if.ts` destructures the same branches entry as `branchBodySection` and as `branchBody`; `dom/controllable.ts` mixes `syncControllableFormInput` with `Controlled*` accessor/type prefixes while CONTEXT.md canonicalizes "controllable". The `startBinding`/`startMark` near-homophones live in `translator/core/show.ts`, not `core/await.ts`. While in `dom/controllable.ts`, drop the truncated first line of the three-line comment above `observeOnce` — an editing leftover that half-restates the next sentence and pushes the block past the two-line cap. Re-verify by grepping those symbols and `grep -n -B3 "^function observeOnce" packages/runtime-tags/src/dom/controllable.ts`.

## Make a params binding identifiable from `binding.type`

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's params binding comes from `trackParamsReferences`, but callers pass four different `BindingType`s: `param` (`define`, attribute-tag, dynamic-tag, `known-tag`), `input` (program), `derived` (`core/for.ts`, `core/await.ts`) and `local` (attribute-tag `<for>`). So "is this a param?" is answered by an identity walk — `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params` — instead of a type check. The heterogeneity is load-bearing: `BindingType` selects the `resolveBindingSources` branch, and `derived` routes `<for>`/`<await>` params through `resolveDerivedSources` so the item param's `Sources` reflect its loop/await source, driving serialize-reason scheduling and `scopeOffset`. Give params a uniform type or a dedicated marker and move that source transparency onto an explicit source-resolution input rather than the overloaded `derived`. Re-verify: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` still shows four distinct type args.

## Share the await frame scheduler between `addAwaitCounter` and `_await_promise`

`packages/runtime-tags/src/dom/control-flow.ts` › `addAwaitCounter` | 2026-07-23 | impact:low | effort:med

`da6433e520` already factored the counter literal into `createAwaitCounter`, but the frame scheduler is still written twice: `if (!counter.i++) requestAnimationFrame(() => counter.i && runEffects(prepareEffects(() => queueRender(<scope>, …, -1))))` appears in `addAwaitCounter` (~~:280-307) and in the `else` arm of `_await_promise` (~~:139-165). Only the queued body (create and insert the placeholder branch vs. re-insert the await anchor, then `tempDetachBranch`) and the `queueRender` scope (`tryBranch` vs. `scope`) differ, so the `requestAnimationFrame`/`prepareEffects`/`queueRender` chain ships twice in every app using `<await>`. Extract a `scheduleFrame(counter, scope, onFrame)` helper alongside `createAwaitCounter`. Re-verify with the root `.sizes.json` and the `await-*`/`try-*` fixture `sizes.json` after the change.
