---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/translator/interop/index.ts › mergeTagDef
---

# Union the Marko 5 and 6 `types` stubs in the interop taglib merge — `<await>` and `<script>` type-check against the Marko 5 API inside Tags-API files

`mergeTagDef` special-cases only the hook keys and falls through to `value5 ?? value6`, so the Marko 5 `types` stub wins wherever both core taglibs declare one — today exactly `<await>` and `<script>`. Because `marko/translator` is the interop translator and `@marko/compiler`'s default, `@marko/language-tools` resolves those two to `marko/src/core-tags/core/await/index.d.marko` and `.../script.d.marko` even inside a Tags-API `tags/*.marko` file, so editors offer and silently accept `<@then>`/`<@catch>`/`client-reorder`/`timeout` and every html `<script>` attribute — all of which the Marko 6 translator rejects with a hard compile error — precisely in mid-migration projects. Direction: interop-specific stubs whose `Input` unions both APIs, selected when both sides declare `types`.

Check: `taglib.buildLookup(".../fixtures-interop/interop-basic-tags-to-class", "marko/translator").getTag("await").types` prints the Marko 5 path instead of `@marko/runtime-tags/tags/await.d.marko`.
