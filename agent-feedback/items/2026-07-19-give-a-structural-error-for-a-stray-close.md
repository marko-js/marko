---
type: dx
impact: low
effort: med
site: packages/compiler/src/babel-plugin/parser.js › onError
---

# Give a structural error for a stray close tag / unwrapped text on a concise line

`onError` relays htmljs-parser's raw `part.message` into `buildCodeFrameError` with no post-classification, so a concise line of bare text plus a stray close tag reports a JS-tokenizer internal that never mentions tags: `hello</div>` → "Unterminated regular expression." at column 8, `Read more or/and less` → "Invalid attribute name.", `Click here</a> to continue` → "Attribute cannot contain type parameters unless it is a shorthand method". The identical mistake in HTML mode is diagnosed correctly (`<div>hi</span>` names the mismatched closing tag). Detect the concise `<identifier>`-scanned-as-tag followed by a `/`-started expression and remap it to a tag/text structural message before rethrowing. Wants a post-classification layer in this parser adapter.

Check: by compiling those three one-line templates.
