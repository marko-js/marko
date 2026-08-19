---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/persisted/admission.ts › assertSupportedPatch
---

# Validate attribute-tag bodies generically in persisted admission

`assertSupportedPatch`'s MarkoTag visitor returns early for any `@`-named tag so `<@catch>` under an admitted `<try>` doesn't hit the generic "unsupported tag" fallback; `<try>` then traverses its own attr tags for server reads. Attribute tags on other owners are still rejected at the owner (template children gate `attributeTags?.length`), so nothing leaks today, but a future owner that admits attr tags would silently skip validating their contents unless it re-traverses like `<try>` does. Validate attr-tag bodies generically (the placeholder/scriptlet visitors still visit them) or assert the parent is a core `<try>` in the early return.

Check: the `tagName[0] === "@"` early return in `assertSupportedPatch` and `<try>`'s `traverseFast` over `node.attributeTags`.
