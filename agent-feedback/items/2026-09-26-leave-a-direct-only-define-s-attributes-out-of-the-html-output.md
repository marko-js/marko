---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/define.ts › translate.exit
---

# Leave a direct-only `<define>`'s attributes out of the HTML output

When every reference to a `<define>` tag variable renders it directly (`<Foo/>`), `analyze` drops every expression in the tag (`dropNodes(getAllTagReferenceNodes(tag.node))`) and the DOM side of `translate.exit` removes the tag, but the HTML side still calls `translateAttrs(tag)` and writes every attribute and attribute tag into the `const Foo = {...}` it renders from. A value read only there is pruned, so SSR throws a `ReferenceError`; an attribute tag with a body there also keeps its closures. Direction: in `analyze`'s direct-references branch, mark the define's attribute tags dropped the way `util/known-tag.ts › getAllAttrTagNodes` does, and have the HTML side emit only `content` whenever that branch applies (the DOM side's `allDirectReferences` test).

Check: `pnpm run compile -- -o html -d` on `<const/x=input.foo * 2/><define/Foo junk=x><@sub foo=x/>hi</define><Foo/>` emits `junk: x` and `sub: _attrTag({ foo: x })` with no `x` declared (a fixture with steps `[{ foo: 1 }]` throws `ReferenceError: x is not defined` in ssr), while `-o dom` emits neither.
