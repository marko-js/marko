---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/tag-name-type.ts › analyzeExpressionTagName
---

# Add a value kind for known string literals so a tag name of known elements gets each element's handling

`KIND_STRING` says only "a non-empty string", so `<${input.small ? "h2" : "h1"}>` is a native dynamic tag that learns its element at run time: the DOM `_dynamic_tag` picks the namespace for `createElementNS` and spreads an input object built per render through `_attrs`/`_attrs_content` with `controllableSpreadHelpers[tagName]`, and the server's `_dynamic_tag` tests `voidElementsReg`, `textarea` and `select`. A list of the literal strings the value may be, held beside `templates` and dropped once any string is unknown, would let the translator give each known element its own facts (void, controllable `<select>`/`<textarea>`, SVG namespace) and static attributes, as a branch per element in place of the generic path. The kind is cheap, an `Opt` list; the per-element translation is the work.

Check: `pnpm run compile -- -o dom -d` on `<${input.small ? "h2" : "h1"} class="title">Hi</>` emits `_dynamic_tag("#text/0", …)` called with `input_small ? "h2" : "h1"` and `$_ => ({ class: "title" })`, where `<h1 class="title">Hi</h1>` compiles to `$template` alone.
