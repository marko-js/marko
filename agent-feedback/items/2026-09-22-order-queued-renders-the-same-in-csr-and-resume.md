---
type: bug
impact: low
effort: high
site: packages/runtime-tags/src/dom/queue.ts › queueRender
---

# Order queued renders the same whether a scope was resumed or created on the client

`queueRender` orders renders by `scopeId * 1e6 + signalKey`. SSR hands out scope ids in document order (`_scope_id()` as each section renders), while the client numbers scopes in creation order: walk-time child scopes first, then branches in the order the `$setup` and then `$input` signals first run them. When sibling scopes created in the same render get queued closure work in one run (`_if_closure`, `_for_closure`, `_closure`), resume and CSR apply the mutations, and queue effects, in different orders, so `<script>` order across the siblings differs and fixtures fail the render.md parity check. A fix needs a mode-independent sibling order, such as document-order keys for scopes created in their owner's first client render; keying only `_if_closure`/`_for_closure` renders by owner leaves `_closure` subscribers divergent.

Check: a fixture whose `template.marko` is

```marko
<let/n=0/>
<button onClick() { n++ }>${n}</button>
<if=input.show>
  <span>${n}</span>
</if>
<for|i| of=[n]>
  <b>${n}</b>
</for>
```

with steps `[{ show: true }, (d) => d.querySelector("button").click()]` fails `pnpm run test:update -- --grep "runtime-tags/translator <name> "` with `Snapshot conflict: "render.debug.md"`; with `equivalent: false`, resume logs the `span` update before the `b` update and CSR logs the reverse.
