---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/translate-attrs.ts › translateAttrs
---

# Leave attribute tags a known child never reads out of both outputs

`writeAttrsToSignals` skips an attribute tag whose name `getKnownFromPropTree` does not find, and analysis prunes that tag's reads, but `translateAttrs` still emits every static attribute tag and `addDynamicAttrTagStatements` every `<if>`/`<for>` group. An unread attribute tag that reads a pruned Binding throws a `ReferenceError` in SSR. An unread attribute tag with a body still gets its content Section's Closure signals in DOM output and its `_subscribe`/`ClosureScopes` writes in HTML. Direction: record unread attribute tags and groups in analyze so their content adds no closures, and skip them in `translateAttrs` and `addDynamicAttrTagStatements` with the same prop-tree test `writeAttrsToSignals` applies.

Check: with `tags/child.marko` `<span>${input.a}</span>`, `pnpm run compile -- -o html -d template.marko` on `<const/x=input.foo * 2/><child a=1><@junk foo=x/></child>` emits `junk: _attrTag({ foo: x })` with no `x` declared (a fixture with steps `[{ foo: 1 }]` throws `ReferenceError: x is not defined` in ssr). On `<let/n=1/><child a=1><@junk>${n}</@junk></child><button onClick() { n++ }>inc</button>` the dom output keeps `$junk_content__n` and `$n__closure`, and the html output writes `"ClosureScopes:n"`.
