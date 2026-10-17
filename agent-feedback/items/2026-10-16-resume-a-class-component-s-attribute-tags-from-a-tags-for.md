---
type: bug
impact: med
effort: med
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js › TagsCompat
---

# Resume a class component's attribute tags from a tags `<for>`

A tags template that passes a class component attribute tags built by a `<for>` (`<class-list><for|label| of=labels><@item><em>${label}</em></@item></for></class-list>`, where `class-list` loops `input.item` and renders `<${item.renderBody}/>`) server-renders every item, but once the page resumes the class component's list is empty. Static `@item` tags resume fine (`fixtures-interop/interop-attr-tags-tags-to-class`), so the loss is specific to the `<for>`: its items reach the payload as an `attrTags` chain with a generator rest, each `renderBody` registered through `_content_resume` with its loop values. Find which side drops them on hydrate (the class component's deserialized `input.item`, or `TagsCompat` resolving each `renderBody`) and render them.

Check: in `packages/runtime-tags/src/__tests__/fixtures-interop/interop-attr-tags-for-tags-to-class/test.ts`, replace `skip_ssr: true` with `equivalent: false` and run `pnpm run test:update -- --grep "translator-interop interop-attr-tags-for-tags-to-class "`: `writes.debug.html` has both items, `render-ssr.debug.md` shows `<ul id="list"/>`.
