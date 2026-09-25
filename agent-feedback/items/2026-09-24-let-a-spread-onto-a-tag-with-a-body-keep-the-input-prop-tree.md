---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/binding-prop-tree.ts › getBindingPropTree
---

# Let a spread onto a native tag with its own body keep `input`'s prop tree

`<div ...input><${input.content}/></div>` ships the general `_dynamic_tag` (plus `createBranchWithTagNameOrRenderer`, `dynamicTagScript`, `controllableRenders`) even under a known parent that passes a plain body. `getBindingPropTree` builds no props when `binding.reads.size` is non-zero, and the spread is a whole read of `input`, so `content` never gets a `directContentExport` and the parent calls `$input` with the full object. Wherever native-tag codegen's `canHaveAttrContent` is false (an explicit body, text-only, void, or a static `content=`) it emits `_attrs` rather than `_attrs_content`, and `attrsInternal` writes `content` as an attribute only on `<meta>`, so off `<meta>` the spread reads `input` minus `content`. Model that read as a rest alias excluding `content`, as `<const/{ content, ...rest }=input><div ...rest><${content}/></div>` already does, and the parent binds `_dynamic_tag_content` directly. The serialization half of the same fact is `2026-09-23-leave-content-out-of-a-value-only-spread-onto-tags-with-a-body.md`; the nested-section blocker for the direct export is `2026-07-02-let-a-nested-section-content-passthrough-use-the.md`.

Check: fixture `native-tag-spread-content-explicit` emits `_dynamic_tag("#text/1")` in `dom.bundle.debug.js` and its `sizes.json` total is 8930 min, against 8096 for `native-tag-spread-content-implicit` (`<div ...input/>`); rewriting its `tags/child.marko` to the destructured form above emits `$content_direct = _dynamic_tag_content(...)`, called from the parent, at 7895 min.
