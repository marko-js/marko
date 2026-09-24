---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › addReadToExpression
---

# Skip a `$global` read inside an expression analysis already dropped

When an analyze hook calls `dropNodes` on an expression before the `$global` identifier inside it is visited, `addReadToExpression` later records the read on the already-`pruned` expression, so the global binding survives pruning and the server output declares a dead `const $global = _$global()`. Known tags drop what the child never reads: `<child foo=$global.foo/>`, `<child ...$global/>`, `<child($global.foo)/>`, `<child content=$global.x/>`, `<@item foo=$global.foo/>`, and `<Foo a=$global.a/>` into a `<define>` whose body ignores `a`. Native tags drop a repeated attribute (`<div class=$global.a class="b"/>`) and a `content` attribute beside a body (`<div content=$global.a>body</div>`), and `<for|x| of=$global.items></for>` with an empty body drops its references too. A `<const>` binding passed the same way is dropped, because its reads were tracked before the drop. Not recording a read whose canonical expression is already pruned would let the declaration go.

Check: with `tags/child.marko` as `<div>child</div>`, `pnpm run compile -- -o html -d template.marko` on `<child foo=$global.foo/>` or `<div class=$global.a class="b"/>` emits a `const $global = _$global();` that nothing reads.
