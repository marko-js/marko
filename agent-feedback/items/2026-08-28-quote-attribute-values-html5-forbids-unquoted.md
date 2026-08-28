---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/attrs.ts › needsQuotedAttr
---

# Quote attribute values containing `=`, `<` or a backtick

`needsQuotedAttr` is `/["'>\s]|&[#a-zA-Z]|\/$/g`, so `attrAssignment` emits bare three of the characters the HTML tokenizer forbids in an unquoted attribute value: `=`, `<` and a backtick. `_attr("x", "a=b")` returns `" x=a=b"` and a base64 value returns `" x=PZVjsYOHMjExNZ+eRTHa5w=="`, and parse5 reports `unexpected-character-in-unquoted-attribute-value` once per offending character, so every document emitting a query string, a data URI or a base64 value is non-conforming to a spec-conformant validator even though the recovered DOM is correct. The same helper serializes static attributes at compile time and the inline resume script's nonce: `packages/runtime-tags/src/html/writer.ts › State` builds `nonceAttr = " nonce" + attrAssignment($global.cspNonce)`, so one page can carry both `nonce=PZVjsYOHMjExNZ+eRTHa5w==` from the runtime and the quoted `nonce="..."` that `@marko/vite` injects for its own tags. The fix is the regex plus a re-snapshot; note that adding `=` also feeds the quote-choice branch below it (`value[needsQuotedAttr.lastIndex - 1] === '"'`), so `a=b"c` would newly take the double-quoted arm and escape the `"` as `&#34;`, still correct but less compact. Nothing pins the current behaviour: `packages/runtime-tags/src/__tests__/html-attrs.test.ts` asserts `>`, both quotes, whitespace, `&` and a trailing `/`, and never these three.

```js
// q.tmp.mjs, in the repo root (a bare "parse5" specifier does not resolve here)
import { parse } from "./node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/index.js";
import { _attr } from "./packages/runtime-tags/src/html/attrs.ts";
for (const v of ["a=b", "a<b", "a`b", "PZVjsYOHMjExNZ+eRTHa5w==", "a>b"]) {
  const html = "<div" + _attr("data-x", v) + "></div>";
  const errs = [];
  parse(html, { onParseError: (e) => errs.push(e.code) });
  console.log(JSON.stringify(html), errs);
}
```

Check: `node -r ~ts ./q.tmp.mjs` prints `"<div data-x=a=b></div>" [ 'unexpected-character-in-unquoted-attribute-value', 'missing-doctype' ]`, the same single tokenizer error for `a<b` and the backtick value, two of it for `PZVjsYOHMjExNZ+eRTHa5w==`, and `"<div data-x=\"a>b\"></div>"` with none. Runtime form: render any template with `$global.cspNonce = "PZVjsYOHMjExNZ+eRTHa5w=="` and read the inline resume tag, `<script nonce=PZVjsYOHMjExNZ+eRTHa5w==>`.
