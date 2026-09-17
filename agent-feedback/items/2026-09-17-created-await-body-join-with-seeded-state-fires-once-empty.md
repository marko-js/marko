---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/signals.ts › _or
---

# Let a created await body's join see state its owner seeds later in the flush

A patch that creates a page scope applies the page's `PatchSetup` seeds after the partial has created the page's `<try>`/`<await>` bodies. In a created `<await>` body, a read joining owner state with the await value (`${Math.min(count, limit)}` where `limit` derives from the awaited value) runs its closure init before the seed lands, arriving at the `_or` with `undefined`; the await value's arrival fires the join once with that value; the seed's later dispatch skips a scope of the creation run (`_closure` only queues scopes from earlier runs), so the hole keeps the empty text and no later write reaches it. The same read outside an intersection (`${count}` alone in the same body) renders, since its init runs after the seeds. Either apply a created scope's seeds before its children, or let the creation-run dispatch count as the join's arrival.

Check: in `patch-app-chain-draft`, change the await body's `<span class="limit">of ${limit}</span>` to `${Math.min(page, limit)} of ${limit}`; the entry step (`page: 0` → `page: 1`) fails "A patch left the page unlike a fresh render" with the span's first text empty.
