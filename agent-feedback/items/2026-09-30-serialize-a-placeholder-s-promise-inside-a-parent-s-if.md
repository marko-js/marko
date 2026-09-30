---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/serializer.ts › writeProp
---

# Serialize a placeholder's promise when its template renders inside a parent's `<if>`

`try-placeholder-promise-settles-after-sibling-catch` holds a pending promise in a `<const>` of a `<try>`'s `@placeholder`, read by a `<script>`. Rendered as a page, as a child, or inside a parent's `<for>`, `<try>`, tag body or `<define>`, the server serializes it; rendered as a child inside a parent's `<if>`, SSR throws `Unable to serialize "promise" in …/template.marko:8:12`. Whatever the `<if>` branch changes about the scope that owns the placeholder (its serialize reasons or the flush that writes it), a component's resumability must not depend on the branch its parent renders it in. Found by the `MARKO_TEST_WRAPPERS` sweep.

Check: remove `skip_wrapped` from `fixtures/try/try-placeholder-promise-settles-after-sibling-catch/test.ts` and run `MARKO_TEST_WRAPPERS=1 pnpm test -- --grep "runtime-tags/translator try try-placeholder-promise-settles-after-sibling-catch "`; only `wrapped in <if>` fails, with the serialize error.
