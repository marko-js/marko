---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/dom/patch-boundary.feat.ts › attachDetachedAwait
---

# A patch-reattached await body's join never gets its await-side value at all

Superseding this item's original analysis (kept below): live instrumentation traces through a
reproduction (`packages/runtime-tags/src/__tests__/fixtures/patch-await-join-created-scope.skip`,
disabled since it doesn't yet have a fix) show the real mechanism is more fundamental than a
same-run dispatch skip.

A join like `${Math.min(page, limit)} of ${limit}` (where `page` is `<draft>`-owned and `limit`
derives from the `<await>` value) compiles to an `_or(id, fn)` that needs exactly two arrivals:
one from `_closure_get("page", ...)` (registered as the await body's `Setup`), and one from
inside the `<const>`'s own `_const("limit", fn)` call — which is only ever invoked as part of
the await's promise-resolution chain (`_await_promise`'s setup callback, itself driven by
`$await_content__total`/`$await_content__$params`).

When a patch reattaches an already-resolved await body from scratch
(`attachDetachedAwait` in `patch-boundary.feat.ts`), that promise-resolution chain never runs —
the body is inserted directly from patch data instead. Only `renderer[Setup]` (the "page" side)
runs; `limit`'s own text node is written as a plain, direct `PatchKey.Text` patch, and
`scope.limit` itself is **never assigned** at all (confirmed by dumping the live scope's own keys
at this point — `limit` is absent). So the join's second arrival can never come, and there is no
value on the client to compute it from even if it could — `limit`'s raw value was never sent to
the client, only its already-rendered text.

A minimal client-side fix that fires the join early on a single "creating" arrival was tried and
does not work: there is no `limit` value on the scope to compute with, regardless of whether it
runs before or after the child partial applies. A real fix needs one of:

- A compiler change marking `limit` (or the join) as a patch-fill binding, so its value is
  serialized/replayable for scopes created this way (the codebase has `_fill_join`/
  `isPatchFillBinding` machinery for this shape of problem, but it isn't applied here).
- A runtime change so `attachDetachedAwait` also replays the await's value/params chain (not
  just `renderer[Setup]`) — nontrivial since that chain is template-specific codegen, not
  something exposed generically on the `renderer` object today.

Check: `packages/runtime-tags/src/__tests__/fixtures/patch-await-join-created-scope.skip` (rename
off `.skip` once a fix lands) — `optimize > ssr` fails via `assertPatchedLikeFresh`, rendering
`<span class="limit"> of 9</span>` instead of `<span class="limit">1 of 9</span>`.

---

## Original analysis (see above for the confirmed root cause)

A patch that creates a page scope applies the page's `PatchSetup` seeds after the partial has created the page's `<try>`/`<await>` bodies. In a created `<await>` body, a read joining owner state with the await value (`${Math.min(count, limit)}` where `limit` derives from the awaited value) runs its closure init before the seed lands, arriving at the `_or` with `undefined`; the await value's arrival fires the join once with that value; the seed's later dispatch skips a scope of the creation run (`_closure` only queues scopes from earlier runs), so the hole keeps the empty text and no later write reaches it. The same read outside an intersection (`${count}` alone in the same body) renders, since its init runs after the seeds. Either apply a created scope's seeds before its children, or let the creation-run dispatch count as the join's arrival.

Check: in `patch-app-chain-draft`, change the await body's `<span class="limit">of ${limit}</span>` to `${Math.min(page, limit)} of ${limit}`; the entry step (`page: 0` → `page: 1`) fails "A patch left the page unlike a fresh render" with the span's first text empty.
