---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › tagNotFoundError
---

# Raise the unresolvable-tag-name error during analyze; at translate its `<let>`/`<const>` hint is lost and only the first bad tag reports

`analyzeTagNameType`'s `else if (!childFile)` branch (`util/tag-name-type.ts`) reclassifies an unresolvable string tag name as `TagNameType.DynamicTag`, so `CustomTag.analyze.enter` never throws and the error surfaces instead from `getTagRelativePath` during `DynamicTag.translate.exit`. That costs two things. `tagNotFoundError`'s `tag.scope.hasBinding(tagName)` hint reads a scope translate has already rewritten, so `<let/thing="hi"/>` then `<thing/>` prints ``Did you mean `<img>`?`` instead of the PascalCase/dynamic-tag hint the reversed order still prints, and `<const/panel=input.content/>` + `<panel/>` degrades to ``Did you mean `<label>`?``. And the `reportAnalyzeError`/`analyzeFailed` batching in `visitors/tag/index.ts` is bypassed: two unknown tags report one error, while two `<let/x=x/>` circular references report together. Direction: detect the unresolvable string-literal tag name in `DynamicTag.analyze.enter` (export `tagNotFoundError`) so the diagnostic is built while the scope is intact and batched.

Check: compile those two pairs and count reported errors.
