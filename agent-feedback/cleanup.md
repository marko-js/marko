# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Make a params binding identifiable from `binding.type`

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's params binding comes from `trackParamsReferences`, but callers pass four different `BindingType`s: `param` (`define`, attribute-tag, dynamic-tag, `known-tag`), `input` (program), `derived` (`core/for.ts`, `core/await.ts`) and `local` (attribute-tag `<for>`). So "is this a param?" is answered by an identity walk — `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params` — instead of a type check. The heterogeneity is load-bearing: `BindingType` selects the `resolveBindingSources` branch, and `derived` routes `<for>`/`<await>` params through `resolveDerivedSources` so the item param's `Sources` reflect its loop/await source, driving serialize-reason scheduling and `scopeOffset`. Give params a uniform type or a dedicated marker and move that source transparency onto an explicit source-resolution input rather than the overloaded `derived`. Re-verify: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` still shows four distinct type args.

## Admission skips every `@`-named attribute tag; only `<try>` re-validates its own

`packages/runtime-tags/src/translator/util/persisted/admission.ts` › the `tagName[0] === "@"` early return | 2026-08-12 | impact:low | effort:low

`assertSupportedPatch`'s MarkoTag visitor now returns early for any attribute tag so `<@catch>` under an admitted `<try>` doesn't hit the generic "unsupported tag" fallback; `<try>` then traverses its own attr tags for server reads. Attribute tags on OTHER owners are still rejected at the owner (template children gate `attributeTags?.length`), so nothing leaks today, but a future owner that admits attr tags would silently skip validating their contents unless it re-traverses like `<try>` does. Consider validating attr-tag bodies generically (they are still visited by the placeholder/scriptlet visitors) or asserting the parent is a core `<try>` in the early return. Re-verify: the `@` early return in `assertSupportedPatch` and `<try>`'s `traverseFast` over `node.attributeTags`.
