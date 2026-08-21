---
type: dx
impact: med
effort: med
site: packages/compiler/src/babel-utils/parse.js › tryParse
---

# Translate Babel's `parseExpression()` messages before they reach a Marko diagnostic

`tryParse` hands `err.message` from `babelParseExpression` straight to `createParseError`, so Babel's internal API name and its framing become the entire Marko diagnostic for two ordinary mistakes. `<const/x=/* pre */ 1 /* post */>` reports `Unexpected parseExpression() input: The input is empty or contains only comments.` with the caret beside the `1` — describing the opposite of what is on the line, because the attribute value ends at the first `*/` and `1` is then scanned as the next attribute name, which is the fact worth saying. `<div class="a"id="b"/>` reports `Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`i\`.` when the fix is a space between two attributes. Both are reachable from valid-looking source and neither message mentions attributes at all. Classify the two Babel messages at this relay — the surrounding tag diagnostics already write in Marko's own vocabulary and link the docs.

Check: `pnpm run compile -- -o html -d` on `<const/x=/* pre */ 1 /* post */>` and on `<div class="a"id="b"/>` prints the two `Unexpected parseExpression() input:` messages above; expect one naming the comment that terminated the attribute value and one naming the missing whitespace between attributes, with no Babel API name in either.
