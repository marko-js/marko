---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/translate-attrs.ts › translateForAttrTag
---

# Keep an attribute-tag `<for>` from re-iterating a one-shot collection

In DOM output an attribute-tag `<for>` group is rebuilt inside one Signal over every Binding the group reads (an `_or` over the `of=` value and, say, a `<let>` read in an attribute), so any of those changing iterates `of=` again. A one-shot iterable such as a generator object is exhausted on the second pass and every attribute tag it produced disappears, while a body `<for>` over the same value re-iterates only when the value changes. Direction: when the group reads more than its collection, iterate `of=` once per collection change (a derived array the group reads), or state in the `<for>` reference and the cheatsheet that an attribute-tag loop's `of=` must be re-iterable.

Check: fixture `tags/child.marko` `<for|item| of=input.item ?? []><span>${item.v}:${item.n}</span></for>`, `template.marko` `static function* gen() { yield 1; yield 2; }` + `<let/n=1/>` + `<const/it=gen()/>` + `<child><for|x| of=it><@item v=x n=n/></for></child>` + `<button onClick() { n++ }>inc</button>`, `skip_ssr: true`, steps `[{}, click]`: `render.debug.md` renders `1:1` and `2:1`, then the click logs `REMOVE: span` twice.
