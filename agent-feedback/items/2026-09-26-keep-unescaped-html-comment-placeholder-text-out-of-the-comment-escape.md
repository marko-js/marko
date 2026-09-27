---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › hoistStaticPlaceholderText
---

# Keep an `<html-comment>` `$!{}` placeholder's literal text out of the comment escape

`hoistStaticPlaceholderText` moves a placeholder's leading/trailing template-literal text into a neighbouring MarkoText whenever `_escape` leaves it unchanged, and `_escape` does not touch `>`. `core/html-comment.ts` writes MarkoText through `escapeCommentText` (`>` to `&gt;`) but an unescaped `$!{}` through `_unescaped`, so text moved out of a `$!{}` in `<html-comment>` gains an escape the placeholder never applied: the server writes `<!--a&gt; X-->` while the client's `_text` writes `a> X`, and the same value as `$!{"a> " + input.x}` (not a template literal, so never moved) writes `<!--a> X-->`. Skip the move for a `$!{}` inside `<html-comment>`, or also require the text to be unchanged by the comment escape, and pin it with a fixture that renders and then updates such a comment.

Check: `pnpm run compile -- -o html -d` on ``<html-comment>$!{`a> ${input.x}`}</html-comment>`` emits ``_html(`<!--a&gt; ${_unescaped(`${input.x}`)}-->…`)``, while `-o dom` emits ``_text($scope["#comment/0"], `a> ${_to_text(`${$scope.input_x}`)}`)``.
