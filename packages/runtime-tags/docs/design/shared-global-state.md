# Shared reactive global state ("let-global")

**Status:** proposal / runtime prototype
**Prototype:** `src/dom/signals.ts` (`_let_global`), `src/html/writer.ts`
(`_let_global`), tests in `src/__tests__/let-global.test.ts`
**Case study:** the `marko-idle` example app's userland
[`<let-global>`](https://github.com/DylanPiercey/marko-idle) tag

## Problem

Marko 6 has no way to share a reactive value between scopes that are not in an
ancestor/descendant relationship in one template tree. Every existing
cross-boundary mechanism is structural: tag variables and `<return>` wire a
child to its parent (`_var`/`_return`), and closures wire a reader to the
owner scope that holds the value (`_closure*`/`subscribeToScopeSet`). The docs'
"hoist state to a common ancestor" guidance stops working at boundaries the
author does not control — most prominently @marko/run's layout↔page boundary,
where the layout renders `<${input.content}/>` and cannot pass bindings to the
page.

The marko-idle app needed exactly this (a battle sim on the page writes HP that
the layout's header displays, plus a shared clock read by dozens of leaf
components) and built a userland `<let-global>`: a `<let>` + `<return
valueChange>` per instance, synced through a module-level `Map<key,
Set<callback>>` over `$global[key]`. Getting it _correct_ required discovering,
the hard way:

1. **The generation guard.** A signal write during a render flush to a scope
   outside the current generation is **silently discarded** (`_let`'s
   `if (rendering)` branch, `src/dom/signals.ts`). A synchronous cross-scope
   fan-out therefore drops updates; the userland tag must defer fan-out to a
   microtask.
2. **Serialization.** `$global` values only reach the client via
   `serializedGlobals`; the app originally patched the router's middleware to
   allow-list every key. (The hardened tag now republishes each hydrated
   instance's serialized value onto the client `$global` instead, which covers
   every key with at least one server-rendered instance.)
3. **Render-root isolation.** Client `$global` is per render root
   (per `renderId`); a module-level registry silently spans roots.

None of this is discoverable; each mistake manifests as a silently stale or
wrong value. That a careful author needed three debugging sessions to build a
correct 90-line tag is the case for doing _something_ in core. What exactly is
the open question this document addresses.

## What the usage data actually says

Auditing the app's eleven `<let-global>` binding sites:

| Keys                                   | Sites                                | What it actually needed                                                 |
| -------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------- |
| `levelups`                             | 2 (both in the layout)               | Nothing — hoistable to a plain `<let>` today                            |
| `combatHp/MaxHp/Bounty/Brews`, `ended` | layout ↔ page/tags                   | Layout→page data flow (a @marko/run boundary gap, not a reactivity gap) |
| `now` (300ms clock)                    | 8 declarations, ~dozens of instances | Genuine broadcast state                                                 |

The honest reading: **most "global state" demand is actually boundary-blocked
hoistable state**, and the residue that genuinely wants a shared cell is
broadcast-shaped (clocks, session, theme, connection status, viewport) — many
readers, one or few writers.

## Prototype (runtime layer)

The prototype in this branch implements the runtime layer both surfaces below
would share, mirroring proven machinery:

- **DOM:** `_let_global(key, fn)` — a cell anchored on the `$global` object
  (per render root, `WeakMap`-keyed like `_id`'s `tagIdsByGlobal`). Backing
  store is `$global[key]` itself. Subscription is idempotent per scope with
  abort-signal cleanup (mirrors `subscribeToScopeSet`); writes dedupe by
  identity and fan out through `queueRender` per subscriber (mirrors
  `_closure`), so they coalesce with the current batch, are ordered by scope
  id, and — unlike any userland implementation — **cannot be dropped by the
  generation guard and need no microtask hop**. A write from inside a flush
  drains in that same flush.
- **HTML:** `_let_global(key, value)` — seeds `$global[key]` (first writer
  wins) and opts the key into `serializedGlobals`, _replacing_ rather than
  mutating the object (it commonly arrives shared across requests, e.g.
  @marko/run assigns one module-level default to every request context). The
  value serializes **once** as scope 0, not per instance. Debug builds throw if
  the key registers after globals have already flushed to the stream.

Unit tests cover: multi-scope fan-out, same-value dedup, write-during-flush
delivery (the case userland cannot express), abort cleanup on destroyed
scopes, and render-root isolation.

What the prototype deliberately leaves out: translator support (a core tag or
compiler transform emitting these calls), the hydration wiring for resumed
instances (which would ride the effect channel like `_script`, or a serialized
subscriber set like `_subscribe`), and typing.

## Is a `<let-global>` core tag the right surface? Mostly no.

A name-keyed tag would work, but it has real problems as a _final_ API:

- **A stringly-typed, flat, global namespace.** Two unrelated components
  binding `"count"` silently share state. Library code cannot safely use it at
  all without name-mangling conventions. This is `window.foo` with reactivity.
- **Poor composability.** A tag that binds a fixed key cannot be instantiated
  twice independently; keys must be threaded as input, at which point the
  ergonomics advantage over passing a binding evaporates.
- **A second, ownerless state primitive.** Marko's model is state owned by a
  scope, flowing through inputs and bindings; the docs actively teach hoisting.
  A blessed escape hatch will absorb state that should be hoisted — the usage
  data above shows exactly that happening in practice.

The runtime layer is right; the _surface_ should be different.

## Recommended direction

Layered, smallest-commitment-first:

### 1. Now: the hardened userland tag is good enough (done)

The marko-idle tag is now per-root-isolated, deduped, coalesced, and
self-serializing. As a documented _pattern_ ("how to build a store adapter")
it is adequate for apps; its residual costs (one microtask per write batch,
per-instance value serialization) are negligible at app scale. No core change
is required to keep shipping it.

### 2. Core, small: make the sharp edge loud + a supported notify primitive

- **Debug warning for dropped writes.** In `MARKO_DEBUG`, `_let`'s rendering
  branch should warn when it discards a write to a scope outside the current
  generation. This single silent behavior cost the case-study app its hardest
  debugging session, and it bites anyone who integrates _any_ external store
  (redux, xstate, a websocket cache) naively.
- **A public "notify scope" primitive** — the supported form of "make this
  scope re-run this update, batched correctly" (essentially blessed
  `queueRender` + `schedule`). This is the `useSyncExternalStore` analog: with
  it, userland store adapters (including `<let-global>` itself) are _correct
  by construction_ instead of correct-by-microtask-folklore. It maximizes
  ecosystem composability at minimal API commitment.

### 3. @marko/run: layout→page bindings ("layout provides")

The generated route entry already composes `<Layout1><Page/></Layout1>` in one
template; forwarding layout-provided content params onto the page tag (typed
via codegen, as `error=input.error` already is for error pages) makes the
_documented_ idiom — hoisted `<let>` + controllable bindings — reach pages.
This dissolves the majority constituency for global state (all the
`combat*`/`ended`-shaped keys) with zero new reactivity semantics.

### 4. Core, the full solve: reactive `$global` keys (not a new tag)

If/when broadcast state deserves first-class support, the most Marko-shaped
surface is the one users already reach for by instinct: **make (opted-in)
`$global` keys reactive**.

```marko
// reads re-render when the key changes
<div>HP ${$global.combatHp}</div>

// writes fan out, batched — compiler rewrites assignment to the runtime call
<script>
  setInterval(() => ($global.now = Date.now()), 300);
</script>
```

- The compiler already treats `$global` member access specially
  (`referenced-identifier.ts`); reads compile to a subscribing accessor and
  assignments to the `_let_global` write path. No new tag, no second
  namespace.
- Typing rides the existing `declare global { namespace Marko { interface
Global } }` augmentation — already the documented way to type `$global`.
- Serialization becomes compile-time knowledge: a template whose client code
  reads `$global.foo` registers `foo` for serialization exactly like any other
  serialize reason — deleting the entire `serializedGlobals` ceremony for
  these keys.
- The case-study app's tag, middleware seeding surgery, and both of its
  documented gotchas disappear; `<const/liveHp=$global.combatHp ?? player.hp>`
  simply works.

The costs are real and must be weighed: it changes `$global`'s documented
contract ("a plain, non-reactive bag") into "reactive where opted in/observed",
needs a story for the opt-in boundary (all keys? only keys the compiler sees
written on the client? an explicit `reactiveGlobals` list?), and inherits the
flat-namespace concern for library authors (mitigated by `Marko.Global`
augmentation making collisions a _type_ error). But it subsumes the tag
entirely: `<let-global>` becomes, at most, sugar.

### Explicitly considered and set aside

- **Context / provide-inject:** solves encapsulation, but Marko's closures
  already give descendants reactive access within a tree; the boundary gap is
  better fixed at the router (§3), and broadcast state is better served by §4.
  Reintroducing a context primitive adds a third state-flow mechanism for
  little residual demand.
- **Module-level signal factories** (`createStore()` shared via import):
  natural in always-CSR frameworks, but on the server module scope spans
  requests — every such store is a cross-request leak by default. Anchoring on
  `$global` (per render root on both sides) is the correct scoping, which is
  what both the prototype and §4 do.

## Open questions

1. §4's opt-in mechanics: compiler-observed reads/writes vs. an explicit list,
   and what (if anything) warns when a non-reactive key is read reactively.
2. Resumed-instance subscription: effect-channel re-subscription (simple,
   prototype-compatible) vs. a serialized subscriber set (`_subscribe`-style,
   no re-subscription cost). The former is almost certainly enough.
3. Whether `_let_global`'s write-during-flush semantics should skip scopes
   created in the current generation (the prototype mirrors `_closure`; fine
   in practice, worth stating).
4. SSR writes to a reactive global mid-stream: first-writer-wins (prototype)
   vs. error. Streaming makes "last write" meaningless.
5. Naming, if a tag surface ships anyway (`<let-global>` vs. the docs' floated
   `<mut>` — these are different shapes: `<mut>` was sketched for nested
   mutation, not shared naming).
