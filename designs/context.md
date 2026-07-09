# `<context>` — tag-identity context: actionable plan

Status: **proposal — not built.** Companion to
[let-by.md](./let-by.md) (per-instance keyed state; the two compose but
ship independently) and
[persisted-pages-optimistic-transitions.md](./persisted-pages-optimistic-transitions.md)
(whose propagation section this supersedes as the promoted path). This
is the isolated plan for a context primitive designed to work with
Marko's compile-time analysis, resume, and persisted pages — and to
retire the benchmark app's `let-global` workaround without inheriting
its `$global` dependency.

## Shape

One core tag, two modes, distinguished by which attributes are present.

**Provide** — a `value=` (usually the default-attribute shorthand)
provides the value to a subtree:

```marko
<context=cart>
  <checkout-panel/>  // can consume
</context>
```

Bodiless provide scopes to the **remainder of the enclosing body**, the
same scoping rule tag variables already follow:

```marko
<context=cart/>
<header/>   // can consume
<main/>     // can consume
```

**Consume** — a tag variable receives the value; `from=` statically
names the _template that provides it_:

```marko
<context/cart from="<cart-provider>"/>

<span>${cart.length}</span>
```

## The identity model (the load-bearing decision)

A context is identified by **the template that contains its provide
site**, not by a string key and not by an imported object. `from=`
resolves through the same taglib discovery the compiler already uses to
render a custom tag, but through its by-name entry point rather than
`getTagTemplate` itself: `getTagTemplate(tag)` takes an actual tag
_occurrence_ in the AST (`custom-tag.ts:70` calls it on the
`<cart-provider/>` tag path being rendered), while a `from=` value is a
bare string with no tag node behind it. The reusable primitive is the
lower-level `getTagDefForTagName(file, tagName)`
(`@marko/compiler/babel-utils`, `babel-utils/taglib.js`) that
`getTagDef`/`getTagTemplate` already call internally — same taglib
discovery (filesystem-based, over `tags/` directories and
`marko.json`, **no bundler involved**), a different entry point keyed
by name instead of by AST node. Its result's `.template` path derives
the context's register id via `getTemplateId` — the same stable,
optimize-minifiable id scheme every template already has.

What this buys, point by point:

- **Analyzable.** The consumer's provider is a compile-time constant.
  The compiler can verify the named template actually provides (a
  `providesContext` flag on the provider's program extra, read
  cross-template at analyze exactly like `domExports.updateGeneric`
  already is), diagnose unknown tags at compile time, and give
  optimize builds collision-free short ids. The existing
  `domExports.updateGeneric`/`setupEmpty` reads carry a drift-safety
  rule `providesContext` inherits as-is: the flag is set once, at the
  provider's own program exit, so a mid-analysis circular provider (a
  provide/consume pair across templates that reference each other) has
  no flag yet and reads as non-providing on every pass — cycles
  classify stably instead of racing (see the comment at
  `custom-tag.ts`'s `childExtra.domExports?.updateGeneric` read, and
  `persisted-pages-architecture.md`'s "The generic applier and
  update-generic classification" section for the general rule).
- **No import edge.** The consumer compiles the _id string constant_,
  not an import of the provider template — consuming a context never
  pulls the provider's code into the consumer's graph, dead
  provider-consumer cycles are impossible, and a consumed-but-unused
  provider tree-shakes on its own merits. This is the "smartest
  heuristics / fine-grained tree-shaking" requirement made structural.
- **No global registry strings.** Uniqueness is file identity;
  collisions cannot happen and naming disputes are file naming.

### The user-facing constraints, and where each is enforced

1. **Provided above, or it does not exist.** A consumer resolves the
   nearest ancestor _instance_ of the named template whose provide site
   executed. Static verification of ancestry is impossible in general
   (dynamic tags, content passing), so enforcement is: compile-time
   check that the named template has a provide site at all;
   MARKO_DEBUG runtime error naming both templates when resolution
   finds no provider above; production behavior is `undefined`
   (documented, mirrors reading an absent input).
2. **Defined once.** Per _template_: at most one provide-mode
   `<context>` — a compile error otherwise, which is what keeps
   "template = context identity" unambiguous. Per _tree_: multiple
   ancestor instances of the same provider template shadow
   nearest-wins, standard context semantics (and the loop case — a
   provider inside `<for>` — is exactly why instance resolution, not
   app-global uniqueness, is the rule).
3. **Explicit `from=` always.** No "nearest any context" lookup; the
   static key is what analysis, serialization, and tree-shaking hang
   off. Dynamic keys are rejected by design.

## Runtime design

### Server (html)

The stack has a real, named home: `State` (`html/writer.ts`), the
per-render object every write already reaches through
`$chunk.boundary.state` and that already carries render-wide bookkeeping
(`serializeReason`, the `scopes` map). A context stack is a new field
there, following the save/restore pattern the writer already uses for
exactly this kind of "currently in effect while a body renders" value:
`state.loopKey` is saved to a local, set for the body's render call, and
restored after (`writer.ts:791-799`, `:844-849`) — a context provide
would push/save before the body's synchronous render and pop/restore
after, and consume reads the top of the stack for its context id. O(1),
no tree walk, no scope allocation beyond the value slot. The provide
site also stores the value in the provider's scope; serialization is
governed by the ordinary serialize-reason analysis: the link and value
serialize only when some resumable consumer needs them (stateful
consumer, or persisted update reach) — a page whose contexts feed only
static output serializes nothing new.

One thing the `state.loopKey` precedent does not have to answer, because
it never needs to: every read of `state.loopKey` happens synchronously,
at the same call depth as the write, before anything unwinds. A
`<context>` consumer sitting inside a deferred `<await>`/`<try>` body is
different — `Boundary`'s async chunks can fork and resume out of order
relative to sibling content that renders in between and mutates the
same shared `State` (`Chunk`'s own `fragment`/`fragmentAnchor` fields
already model per-chunk rather than per-render state for a related
reason). A provided value a deferred consumer needs has to be captured
at the point the async body is deferred, not re-read from the live
stack when its continuation finally runs — otherwise unrelated content
rendered in between can have pushed and popped the same stack first.
This needs its own fixture (provide above an `<await>`, consume inside
its body) before "no tree walk" can be called free; the mechanism above
is verified for the synchronous case only, which is not the only case a
page will hit.

### Client (dom)

The provider's scope holds the value under a reserved accessor. The
_notify_ half has a direct precedent, not just an analogous one:
`_closure`/`_closure_get` (`dom/signals.ts`) already register a
consuming scope into a Set kept on an owner scope
(`subscribeToScopeSet`) and fan a value change out to every registered
scope via `queueRender`. A context provider can reuse that
registration-Set-and-fan-out shape for "provider value changed,
re-run every consumer" close to verbatim.

The _resolution_ half is not already built, and should not be described
as if it were. `_closure_get` keys its subscription to exactly one
fixed lexical hop — `scope[AccessorProp.Owner]`, or a caller-supplied
`getOwnerScope` — never an unknown number of ancestor scopes searched
for a named template instance; nothing today walks `Owner` links
looking for "the nearest ancestor scope that is an instance of provider
template X." `ClosestBranch` is not a precedent for that walk either:
despite reading like a cache, it is an O(1) pointer _pushed down_ onto
every scope at creation time (`renderer.ts`:
`setParentBranch(branch, parentScope?.[AccessorProp.ClosestBranch])`),
not a search performed lazily at consumer setup. The consumer-setup
walk `<context>` needs — and the per-consumer-scope cache of its
result — has to be written from scratch; only the fan-out it feeds into
can borrow `subscribeToScopeSet`'s shape. Reactivity is still the
ordinary signal graph once that walk exists — no event bus, no pub/sub
registry, no `$global` — but "the same shape as the existing
dynamic-closure machinery" overstates how much of it is already there.

### Writable contexts — where `:=` is actually correct

Provide accepts the bind shorthand:

```marko
/* cart-provider.marko */
<let/cart=[] by=input.cartKey/>
<context:=cart/>
```

This is not new grammar: the bind shorthand on a bodiless default
attribute already compiles today (`<return:=x/>`,
`<child:=count/>` — see the `custom-tag-var-assignment` and
`assign-destructured-reduced` fixtures under
`packages/runtime-tags/src/__tests__/fixtures/`), as does a tag
variable plus an ordinary attribute on a core tag (`<let/draft=… by=…/>`
in [let-by.md](./let-by.md)). `<context:=cart/>`,
`<context/cart from="…"/>`, and the bodiless default-attribute
`<context=cart/>` are all combinations of forms htmljs-parser already
parses on any tag; only the core-tag visitor below is new.

Unlike the keyed-let case (see let-by.md's rejected alternatives), bind
is semantically honest here: a change handler _exists_ — assignment to
the provider's own `<let>`. A consumer that declares its variable
writable (`<context/cart from="<cart-provider>"/>` then `cart = next`)
invokes the provider's handler; the write lands in the provider's
state and propagates to every consumer through the signal graph.
Read-only provide (`<context=value>`) makes consumer assignment a
compile error.

This composition — **a keyed `<let>` provided via `<context>`** — is
the complete replacement for the benchmark app's `let-global` tag:
server-reconciled shared optimistic state with no `$global` coupling,
no module-scope registry, no navigation-event listener, and
reconciliation timing owned by the signal graph instead of an event
approximation. `let-global` should be deleted from the benchmark app as
this plan's acceptance test.

## Persisted pages integration (must be co-designed, not bolted on)

- **Placement**: providers naturally live in the persistent layout —
  above the content-hop swap boundary — so provider scopes are matched
  scopes that survive every navigation. That is exactly where shared
  state must live for client state preservation to mean anything.
- **Wire economics**: a request-derived provided value is captured and
  merged at **one** site (the provide site's scope); every consumer
  re-runs client-side through its subscription. N consumers cost zero
  additional patch bytes — better than N per-consumer holes, and the
  reason context helps rather than hurts patch size.
- **Fragments**: a consumer inside a wire-delivered fragment (fresh
  cross-route subtree, possession swap) resumes its subscription by
  owner-walking into the _live_ tree above the insertion anchor — the
  applier already stamps fragment scopes into the live tree
  (`applyFragment`), so resolution works; needs a dedicated fixture
  (consume-inside-fragment, provider in the persistent layout).
- **Update-generic classification**: a consuming template registers a
  context signal at setup — new client wiring, which disqualifies
  `updateGeneric` under the existing predicate (`analyzeUpdateGeneric`
  in `update-merges.ts`: disqualified by `isInteractive`,
  `hasChangeHandlers`, `hasDynamicTags`, a non-generic known-tag child,
  an abort signal, or any non-pruned `let`/serialize-reasoned binding).
  It is not literally the `hasChangeHandlers` case — that flag is set
  only by native-tag controllable/change-handler wiring
  (`native-tag.ts:165`); a context-signal registration would most
  naturally set `isInteractive`, the general client-registration
  catch-all `<script>`/event handlers/`<lifecycle>` already set, or a
  dedicated new flag. Either way it disqualifies for v1; accept that
  and record the measured cost. A context-aware relaxation is possible
  later (the signal is runtime-shared, not per-template code).
- **Serialize reasons**: consumed values that reach persisted output
  taint their expressions with the provider expression's sources —
  request-derived provides make consumer output patch-refreshable,
  client-state provides keep consumer output client-owned. The reason
  system needs a cross-template edge here (consumer expression sources
  include the provide-site sources), which is new analysis surface and
  the main compiler risk of this plan — prototype this first.

## Compiler work (ordered by risk)

1. **Cross-template reason threading** (the risk item above) —
   prototype on a hardcoded pair before any syntax exists.
2. Core-tag visitor: provide/consume mode detection, the one-provide
   rule, `from=` resolution (`getTagDefForTagName`-equivalent lookup on
   an attribute value's string, not `getTagTemplate` — see the identity
   model above) + `providesContext` cross-template flag + compile
   diagnostics.
3. Translate: provide → scope write + (html) stack push/pop, (dom)
   value signal; consume → (html) stack read, (dom) registered context
   signal + owner-walk-and-cache setup; writable-mode handler plumb.
4. Serialize-reason wiring per above; persisted `?update`/`?persisted`
   entries treat the provide site like any stateful/serialized binding.

## Fixtures / acceptance

1. Provide/consume basics: content-scoped, bodiless-sibling-scoped,
   shadowing (nested same-provider instances), loop providers,
   missing-provider dev error, one-provide-per-template compile error.
2. Reactivity: provider value change re-runs consumers fine-grained;
   writable round trip; read-only assignment compile error.
3. Resume: SSR page with stateful consumer resumes subscription
   without re-render (snapshot-pinned serialization shape — and a
   static-only page pins that _nothing_ new serializes).
4. Tree-shaking: consumer bundle does not contain provider template
   code (bundle-content assertion, like the ecommerce fragment-first
   grep).
5. Persisted: request-derived provide merges at one site and re-runs
   consumers across a navigation; consume-inside-fragment; benchmark
   app's `let-global` deleted and its suites green.

## Phasing

1. Reason-threading prototype (compiler spike, throwaway).
2. Client + SSR feature complete behind fixtures 1–4 — like
   `<let by=>`, this half is **mainline-shippable** independent of
   persisted pages.
3. Persisted integration (fixture 5) on the feature branch; delete
   `let-global`.
4. Revisit `updateGeneric` disqualification with measurements.

## Open questions

1. **`from=` literal syntax**: `from="<cart-provider>"` (angle-bracket
   string, reads like a tag), `from="cart-provider"` (bare tag name),
   or a non-string tag-reference form the parser blesses. Pure
   bikeshed at the semantics level — resolution is identical — but it
   should be decided with the parser owners (htmljs-parser is in the
   workspace if a new literal form is wanted).
2. **Can a template both provide and consume-then-re-provide** (an
   interception/decorator pattern)? Nothing structural prevents it
   (consume from above, provide your own); confirm it is desired and
   fixture it, or forbid it for v1.
3. **Attr-tags / `<define>` interaction**: does a provide inside an
   attr-tag body scope to that body alone? (Proposal: yes — same rule,
   "enclosing body".)
4. **Loop-instance identity for persisted pairing**: a provider inside
   a keyed `<for>` has one scope per iteration; the update pairing
   already keys iteration scopes, so consumers pair correctly — verify
   with a fixture rather than assuming.
5. **Naming**: `<context>` collides conceptually with `Run.Context`
   (the request context) — acceptable, or is a different single word
   (`<provide>`? `<share>`?) worth it? One tag with two modes is the
   working assumption per the design's shape; a two-tag split
   (`<context>`/`<context from>`) remains possible without changing
   any semantics above.

## Evaluation against the `<context>` branch (2026-07-09)

The `claude/marko-context-tag-review-ukuhm3` branch (an implementation
of this proposal) was merged onto the persisted-pages branch **locally**
and driven through the persisted fixture matrix and the benchmark app
(`let-global` fully replaced by a `<context>` cart provider; 82/82
browser checks + 8/8 strict-CSP with the merged runtime). Findings, in
the order they surfaced — the first four need to land with (or before)
any real merge of the two branches:

1. **Accessor collision.** The branch's `ContextLink`/`ContextSignal`
   accessor prefixes ("N"/"P") collide with persisted-update's reserved
   `UpdateAttr`/`FragmentHtml` namespaces; re-lettered to "V"/"W" in the
   local merge (snapshot-wide `Nc`/`Pc` → `Vc`/`Wc`).
2. **Request-derived provider values need the update-globals channel.**
   A provider whose value is `$global`- or input-derived
   (`<context=$global.currency>`) must re-run its `_context_value`
   client-side after a persisted update lands — the fan-out IS the
   delivery; no server-captured hole reaches consumers in other
   templates. Registered via `addContextValueUpdateStatement` gated on
   `(sources.global || sources.param)`, passing the provider tag's
   MERGED extra (the bare value extra lacks the `$global` taint).
3. **Serializer slot encoding needed signed deltas.** A root mutable
   provider stamps its branch link on scope 0; with `serializedGlobals`
   present the payload then carries two scope-0 partials under different
   identities, and the forward-only delta encoding silently shifted
   every subsequent partial one slot (all `_(n)` references off by one —
   the writable provider "disappeared" on resume). Fixed in
   `writeScopesRoot` (emit the delta whenever the slot is
   non-sequential; the browser's `applyScopes` already sums signed).
   Context-independent fix, landed on the persisted branch.
4. **Fragment-delivered consumers must be adopted onto the live
   provider.** A consumer inside a fragment frame serializes its
   provider link/subscription against the update render's patch-space
   provider scope; for a MATCHED provider that object is dead (no DOM
   refs, wrong change handler). `_update_context` (emitted by the
   mutable provider's compiled merge, deferred to end-of-frame so
   fragment stamping has happened) re-links each fragment-adopted
   subscriber to the live provider, subscribes it, and queues its
   fan-out signal — which also repaints the fragment's view from the
   live value when client-owned provider state had drifted from the
   server's render.
5. **Matched shared hops above the divergence** (a provider-with-body
   in the layout wraps the page in its own content hop) broke
   cross-route fragment capture — the unconditional first-hop capture
   landed on the matched provider hop and the apply diverged. Fixed
   context-independently (capture skips echo-proven matched hops);
   see `persisted-update-fragment-shared-hop`.
6. **Size note for the branch:** `_context_link` serializes consumer
   wiring with unconditional `_scope` writes, so matched consumers'
   links/signals ship as dead bytes in every update payload; worth
   reason-gating before the branches merge for real.

Fixtures `persisted-update-context` (request-derived + writable
providers through same-route navigations) and
`persisted-update-context-fragment` (fragment-delivered consumer, both
fan-out directions, destroy safety) cover the matrix on the local merge
branch. The benchmark app's `cart-provider.marko` (one provider, N
consumers, `marko-run:navigate` reset for server-wins) replaces
`let-global`'s per-consumer mirror registry and stays local with it.
