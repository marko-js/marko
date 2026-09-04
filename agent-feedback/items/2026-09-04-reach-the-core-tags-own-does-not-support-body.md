---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/assert.ts › assertNoBodyContent
---

# Reach the core tags' own "does not support body content" message

`assertNoBodyContent` builds a message that names the tag and links its docs — ``The [`<let>`](https://markojs.com/docs/reference/core-tag#let) tag does not support body content.`` — but it can never fire for the seven core tags that also set `openTagOnly: true` (`let`, `const`, `id`, `log`, `debug`, `lifecycle`, `return`). The parser rejects the body first, with `Line has extra indentation at the beginning` for an indented body or `The closing "let" tag was not expected` for an inline one; neither names the tag or the rule, and the first actively misdirects toward whitespace. Giving a tag a body is the natural HTML instinct, so this is the message users actually hit and the good one is dead code. Either drop `openTagOnly` for these tags so the translator's assertion runs, or have the parser's `openTagOnly` rejection carry the tag name and say it takes no body.

Check: `pnpm run compile -- -o html -d <file>` on a file containing `<let/x=1>`, an indented `hello`, and `</let>` reports `Line has extra indentation at the beginning`; substituting `<id>`, `<log>`, `<debug>`, `<const>`, `<lifecycle>` or `<return>` gives the same message, and none reaches `assertNoBodyContent`.
