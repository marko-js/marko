# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Extract one helper for the `attrTag`/`attrTags` merge duplicated in `known-tag.ts`

`packages/runtime-tags/src/translator/util/known-tag.ts` › `translateAttrTag` | 2026-07-23 | impact:low | effort:low

The rule "a repeated attribute tag folds into `attrTags(prev, next)`, a non-repeated one becomes `attrTag(props)`" is implemented four times. `translateAttrTag` and the `isAttributeTag(tag)` branch of `applyAttrObject` are near-verbatim ~35-line copies, including the `t.parenthesizedExpression` mutation trick, differing only in where `repeated` comes from and whether the result is returned or handed to `addStatement`. `translate-attrs.ts` › `translateAttrs` and `addDynamicAttrTagStatements` encode the same rule over `contentProperties` and over an attr-tag identifier assignment. One helper would collapse the two `known-tag.ts` copies and let the other two share the `repeated ? attrTags : attrTag` decision, so a future change cannot land on three of four sites. Re-verify: `rg -n '"attrTags"' packages/runtime-tags/src/translator` lists exactly those four sites.

## Make a params binding identifiable from `binding.type`

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's params binding comes from `trackParamsReferences`, but callers pass four different `BindingType`s: `param` (`define`, attribute-tag, dynamic-tag, `known-tag`), `input` (program), `derived` (`core/for.ts`, `core/await.ts`) and `local` (attribute-tag `<for>`). So "is this a param?" is answered by an identity walk — `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params` — instead of a type check. The heterogeneity is load-bearing: `BindingType` selects the `resolveBindingSources` branch, and `derived` routes `<for>`/`<await>` params through `resolveDerivedSources` so the item param's `Sources` reflect its loop/await source, driving serialize-reason scheduling and `scopeOffset`. Give params a uniform type or a dedicated marker and move that source transparency onto an explicit source-resolution input rather than the overloaded `derived`. Re-verify: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` still shows four distinct type args.

## Share the await frame scheduler between `addAwaitCounter` and `_await_promise`

`packages/runtime-tags/src/dom/control-flow.ts` › `addAwaitCounter` | 2026-07-23 | impact:low | effort:med

`da6433e520` already factored the counter literal into `createAwaitCounter`, but the frame scheduler is still written twice: `if (!counter.i++) requestAnimationFrame(() => counter.i && runEffects(prepareEffects(() => queueRender(<scope>, …, -1))))` appears in `addAwaitCounter` (~~:280-307) and in the `else` arm of `_await_promise` (~~:139-165). Only the queued body (create and insert the placeholder branch vs. re-insert the await anchor, then `tempDetachBranch`) and the `queueRender` scope (`tryBranch` vs. `scope`) differ, so the `requestAnimationFrame`/`prepareEffects`/`queueRender` chain ships twice in every app using `<await>`. Extract a `scheduleFrame(counter, scope, onFrame)` helper alongside `createAwaitCounter`. Re-verify with the root `.sizes.json` and the `await-*`/`try-*` fixture `sizes.json` after the change.
