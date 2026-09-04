---
type: dx
impact: med
effort: low
site: packages/compiler/src/babel-utils/assert.js
---

# Name the tag in `babel-utils/assert.js` diagnostics

Every message in this file opens with the bare word `Tag` — `Tag does not support a variable.`, `Tag does not support the “to” attribute.`, `Tag does not support nested attribute tags.`, `Tag does not support parameters.` — so unrelated mistakes on unrelated tags produce byte-identical text and none of them names what the user typed. Its counterpart in the translator (`packages/runtime-tags/src/translator/util/assert.ts`) does the opposite, producing ``The [`<let>`](docs-url) tag does not support …``, so the two halves of the same diagnostic surface read as if they came from different products. Ten core tags route through the generic helpers, making this the common case rather than the exception. The tag's `NodePath` is already in hand at each throw site, so interpolating its name is local and keeps the file translator-agnostic — no doc links required.

Check: `pnpm run compile -- -o html -d <file>` on `<for/x |item| of=[1]>…</for>` and on `<if/x=true>…</if>` both report the identical `Tag does not support a variable.`
