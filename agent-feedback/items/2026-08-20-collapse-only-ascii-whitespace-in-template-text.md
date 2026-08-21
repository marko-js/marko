---
type: bug
impact: med
effort: low
site: packages/compiler/src/babel-plugin/parser.js › onText
---

# Collapse only ASCII whitespace in template text, not every codepoint JS calls `\s`

`onText` normalizes a text node with `value.replace(/\s+/g, " ")`, and JavaScript's `\s` covers U+00A0, U+2028, U+2029 and U+FEFF — none of which HTML collapses. A non-breaking space typed in body text is emitted as a plain `0x20`, so it wraps like an ordinary space; a stray U+FEFF becomes a visible space. The same characters written in an attribute value are preserved (`<div title="a<NBSP>b">` keeps `\xA0`), and U+200B in text survives, so the rule is neither "strip invisibles" nor "pass through" — it is an accident of the character class. Narrow the collapse (and the surrounding `^\s+`/`\s+$` trims) to the ASCII whitespace HTML itself collapses, `[ \t\n\r\f]`, so the indentation rule the docs describe keeps working while an author-typed codepoint survives.

Check: `pnpm run compile -- -o html -d` on `<div>a<NBSP>b</div>` emits `_html("<div>a b</div>")` with a `0x20` — `grep -c $'\xc2\xa0'` on the output is 0; expect the NBSP (and U+2028/U+2029/U+FEFF) to survive, as they already do inside an attribute value.
