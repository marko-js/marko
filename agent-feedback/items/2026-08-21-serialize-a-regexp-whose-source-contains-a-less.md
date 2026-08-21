---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeRegExp
---

# Serialize a `RegExp` whose source contains `<` without breaking regexp syntax

`writeRegExp` emits the source inside a regexp literal and `replaceUnsafeRegExpSourceChar` rewrites every `<` as `\x3C`. That escape stands for the character `<` but not for regexp _syntax_, so a named group or a lookbehind is destroyed: `/(?<name>a)/` ships as `/(?\x3Cname>a)/`, which the browser rejects with `SyntaxError: Invalid regular expression: Invalid group` while parsing the resume script — the whole `M._.r=[…]` payload fails to parse, nothing hydrates and no handler binds, on a page the server returned as a clean 200. `/(?<=a)b/` and `/(?<!a)b/` fail the same way, and every other `<` silently changes the round-tripped value, since `/a<b/` arrives with `.source === "a\\x3Cb"`. Emitting `new RegExp(<quoted source>, <flags>)` when the source contains `<` keeps `quote`'s existing script-safe escaping and restores the source exactly; `serializer.test.ts › regexp` covers `<` but has no group or lookbehind case to pin it.

Check: `new Serializer().stringifyScopes([[1, {}, { value: /(?<name>a)/ }]])` returns `_=>[1,{value:/(?\x3Cname>a)/}]` and `eval("/(?\\x3Cname>a)/")` throws `SyntaxError: Invalid regular expression: /(?\x3Cname>a)/: Invalid group`; expect a payload that evaluates back to a RegExp whose `.source` is `(?<name>a)`.
