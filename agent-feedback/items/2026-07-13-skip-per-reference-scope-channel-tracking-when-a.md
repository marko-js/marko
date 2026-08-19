---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/html/serializer.ts › trackScope
---

# Skip per-reference scope channel tracking when a render uses no ready channels

Every scope written as a value runs `trackScope` — a `state.refs` probe plus either `trackChannel` or a `new Reference` in `newScopeReference` — before emitting `_(id)`, bookkeeping that exists only to keep `_(id)` channel-aware for independently lazy-loaded content; outside ready-gated content it is pure overhead, since `trackChannel` returns on its first line whenever `ref.channel?.readyId` is falsy. Note the gate is `readyId`, not the channel itself: the html `State` is the root channel and `flushSerializer` passes it to `stringifyScopes` on every scope flush, so "this render passed no channel" is never true, and only `writeWaitReady`'s child SerializeState carries a `readyId`. A per-flush guard is also unsafe — a scope first seen in a readyId-free flush can be referenced from a later gated one, and its `Reference.channel` feeds `trackChannel`'s parent walk. So gate on a serializer-lifetime "no channel with a readyId has ever reached `stringifyScopes`" flag and fall back permanently once one does; the rest of the scope-ref bookkeeping is safe to skip, since `writeScopesRoot` re-creates the Reference on demand and scope refs short-circuit in `ensureId` so their `flush`/`pos` are never read.

Check: with the cross-channel/lazy serializer tests plus a scope-reference-heavy benchmark.
