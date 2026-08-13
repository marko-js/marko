# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Make a params binding identifiable from `binding.type`

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's params binding comes from `trackParamsReferences`, but callers pass four different `BindingType`s: `param` (`define`, attribute-tag, dynamic-tag, `known-tag`), `input` (program), `derived` (`core/for.ts`, `core/await.ts`) and `local` (attribute-tag `<for>`). So "is this a param?" is answered by an identity walk — `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params` — instead of a type check. The heterogeneity is load-bearing: `BindingType` selects the `resolveBindingSources` branch, and `derived` routes `<for>`/`<await>` params through `resolveDerivedSources` so the item param's `Sources` reflect its loop/await source, driving serialize-reason scheduling and `scopeOffset`. Give params a uniform type or a dedicated marker and move that source transparency onto an explicit source-resolution input rather than the overloaded `derived`. Re-verify: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` still shows four distinct type args.

## Remove or fix the never-true `child.tagDef?.controlFlow` guard in the parser's empty-control-flow hoist

`packages/compiler/src/babel-plugin/parser.js` › `parseAttrTag` (the `isControlFlow` handling) | 2026-08-13 | impact:low | effort:low

The enclosing check reads `tagDef?.parseOptions?.controlFlow` (the property the taglib loader actually stores — `taglib/loader/loadTagFromProps.js` keeps `parseOptions` verbatim and nothing ever sets a bare `tagDef.controlFlow`), but the nested "move empty nested control flow into attributeTags" branch guards on `child.tagDef?.controlFlow`, which is always undefined, so that branch is unreachable. Either it should read `child.tagDef?.parseOptions?.controlFlow` (behavior change: empty nested control-flow tags would start hoisting) or the dead branch should be deleted. Found while adding `<for-await>` (which deliberately does not opt into `parseOptions.controlFlow`). Re-verify: `rg -n '\.controlFlow' packages/compiler/src` shows only the `parseOptions.controlFlow` reads plus this one bare access.
