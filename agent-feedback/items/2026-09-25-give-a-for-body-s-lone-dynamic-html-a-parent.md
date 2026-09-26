---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › loop
---

# Give a `<for>` body's lone `$!{}` a parent before its params run

`loop` calls `params` on a new Branch before `insertBranchBefore`, and `dom/renderer.ts` › `createCloneableHTML` clones a single-node template (a body that is only `$!{…}` compiles to `" "`) with no parent. `dom/dom.ts` › `_html` then reads `scope[accessor].parentNode.namespaceURI` and throws `Cannot read properties of null (reading 'namespaceURI')`. So any `<for>` whose body is only `$!{}` of a loop param throws on its first client render, and after resume when a row is added. Direction: have the translator give a sole unescaped placeholder in a branch body a sibling, so the clone keeps its `<t>` parent, or have `loop` run a new Branch's params after inserting it; add a CSR fixture.

Check: fixture `<let/list=["<b>a</b>"]/><div><for|x| of=list>$!{x}</for></div><button onClick() { list = [...list, "<i>b</i>"] }>add</button>` with steps `[{}, click]`: the debug csr mode throws `TypeError: Cannot read properties of null (reading 'namespaceURI')` in `_html` called from `$for_content__x`, and the ssr modes throw the same on the click.
