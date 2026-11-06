---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/for.ts › analyze
---

# Name a range `<for>`'s `by` parameter the same in both errors

On a `<for to>` or `<for until>`, the `key=` redirect suggests "Use `by=(num) => key`", but the string-`by` rejection suggests "use a `by=(index) => ...` function". The callback gets the range value (`forTo`/`forUntil` in `common/for.ts` pass `start + i * delta`), not an index, and the core-tag docs call it `num` (`<for|num| to=5>`). So the second message gets the parameter wrong. Use `by=(num) => ...` there. No fixture snapshot pins either range-form message (`error-for-key-attribute` and `error-for-in-string-by` cover `of` and `in`).

Check: `pnpm run compile -- -o dom` on `<for|n| to=3 by="id">${n}</for>` reports "use a `by=(index) => ...` function for `<for to>`"; on `<for|n| to=3 key=n>${n}</for>` it reports "Use `by=(num) => key`".
