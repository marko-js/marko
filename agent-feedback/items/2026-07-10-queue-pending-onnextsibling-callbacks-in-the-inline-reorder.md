---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/inlined-runtimes.debug.ts › REORDER_RUNTIME_CODE
---

# Queue pending `onNextSibling` callbacks in the inline reorder runtime

`runtime.x` keeps a single `nextSibling`/`onNextSibling` pair. A `<t hidden>` swap callback pending on that element's next sibling is silently dropped if, while walking the `<t>`'s children, a placeholder-end comment (`!id`) hits the `runtime.l[id] && placeholders[id]` branch and reassigns the pair; the outer swap then never fires and the outer placeholder stays forever. This is reachable: for a `<try @placeholder>` nested before an async sibling, `html/writer.ts` › `Chunk.flushPlaceholder` writes the inner root `<t hidden M_=5>` ahead of the outer `<t hidden M_=3>` that carries the inner `!^5`/`!5` markers. Direction: have the writer emit a root `<t>` only after the HTML carrying its markers, so `runtime.l[id]` is always set when the root is walked and the `op == "!"` branch (the second writer of the pair) can go; otherwise queue the pending callbacks, weighed against inline-runtime bytes.

Check: a fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<try><@placeholder>outer loading</@placeholder><try><@placeholder>inner loading</@placeholder><await|x|=resolveAfter("inner", 1)><span>${x}</span></await></try><await|y|=resolveAfter("outer", 2)><div>${y}</div></await></try>`, `equivalent: false` and steps `[{}, flush, wait, flush, wait]`: every step of `render-ssr.md` still shows `outer loading`, while `render-csr.debug.md` ends with `<span>inner</span><div>outer</div>`; `writes.html` shows `<t hidden M_=5>` before the `<t hidden M_=3>` that contains `M_!5`.
