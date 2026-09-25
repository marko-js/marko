---
type: dx
impact: med
effort: low
site: packages/compiler/package.json › htmljs-parser
---

# Name the attribute mistake behind a comment-only or glued attribute value

Three ordinary attribute mistakes reach Babel as one whole value and come back as generic expression errors that never mention attributes. `<div class=/* todo */></div>` reports `Expected an expression, but found only whitespace or comments.` without naming `class`; `<const/x=/* pre */ 1>` reports the same, because the value ends at the whitespace after the comment and `1` becomes the next attribute name; and `<div class="a"id="b"/>` reports ``Expected a single expression, but found `i` after it.`` when the fix is a space before `id`. htmljs-parser knows at the point a value ends that it holds only comments or runs into the next attribute's name, so it should report these (and continue a value past its leading comments); then bump it in `@marko/compiler` and regenerate the `error-attr-value-only-comment` and `error-attr-value-missing-whitespace` fixtures, which pin the generic wording until then.

Check: `pnpm run compile -- -o html -d` on each of the three templates above prints the generic message quoted for it; expect `<const/x=/* pre */ 1>` to compile, and the other two to name the comment-only `class` value and the missing whitespace before `id`.
