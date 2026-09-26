---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/common/helpers.ts › escapeStyleValue
---

# Escape `&` in style and script interpolations inside `<svg>`/`<math>`

Inside `<svg>`/`<math>` a `<style>`/`<script>` body is parsed as markup, so character references in it decode on the server, while the client writes the same text through `textContent` or the CSSOM. `escapeStyleValue` (behind `_escape_style_value`, which core `<style>` interpolations use) hex-escapes `<`, `;` and `{` but not `&`, so `url(/i.png?a=1&copy=2)` renders `©=2` in SSR, and `&#125` decodes to a `}` that ends the rule. `_escape_style`/`_escape_script` (`html-style`/`html-script`) rewrite only closing sequences, so `red&amp;` renders `red&` on the server and `red&amp;` on the client. Direction: hex-escape `&` as `\26 ` in `escapeStyleValue`, and have the translator use `_escape` for `html-style`/`html-script` interpolations whose parent namespace is SVG or MathML; add fixtures.

Check: fixture `<svg><style>.a { background: ${input.u}; }</style><rect class="a"/></svg>` + newline + `<svg><html-style>.b{color:${input.c}}</html-style></svg>` with `equivalent: false`, `skip_parity: true` (debug and optimized CSS variable names differ in the inline `<style>`) and `steps: [{ u: "url(/i.png?a=1&copy=2)", c: "red&amp;" }]`: `render-ssr.debug.md` shows `url(/i.png?a=1©=2)` and `.b{color:red&}`, `render-csr.debug.md` shows `&copy=2` and `red&amp;`.
