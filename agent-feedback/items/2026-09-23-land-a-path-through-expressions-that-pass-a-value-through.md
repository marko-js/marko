---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › getDownstreamPath
---

# Land a path through expressions that pass a value through

`getDownstreamPath` keeps a path only when the link's expression is exactly the asked binding (`isReferenceTo` on `extra.read`), and a native spread skips `content` only for bindings in `spreadFrom`, so `||`, `??`, ternary branches, sequence tails, and `!`/`as` wrappers take the whole value: `<for|item| of=(input.item || [])>` and `<button ...(input.item ?? {})/>` register the body. The value of such an expression is one of its operands as is, so each operand's path lands unchanged, and a ternary's test is only a test read. Recording on the expression the bindings its value may be as is (the shape of `spreadFrom`, merged the same way) would generalize both checks. Extend `NodeExtra.spreadFrom` (the bindings an expression holds as is) rather than adding a parallel field, and give any new term a `CONTEXT.md` entry first.

Check: `template.marko` `<let/count=0><child><@item onClick() { count++ }>One ${count}</@item></child>` with `tags/child.marko` `<for|item| of=(input.item || [])><button ...item/></for>` or `<button ...(input.item ?? {})/>`: `pnpm run compile -- -o html -d template.marko` emits `_content_resume(` for the body.
