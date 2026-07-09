# `<let by=>` — validation review, and the optimistic/transition end state

Status: **review of [let-by.md](./let-by.md), 2026-07-09.** Scope: validate
the `<let by=>` proposal as the blessed optimistic-update pattern, and
assess the holistic persisted-pages vision it slots into — including the
eventual async-transition DX for both client-rendered awaits and
server-driven (persisted) awaits. Everything below was cross-checked
against the feature branch's code and fixtures, the persisted run router
(`packages/run/src/runtime/persisted.ts` on the run branch), and the
benchmark app's `let-global` pattern (both the workspace version and the
branch version) — file:line receipts throughout.

## Verdict

**Build it.** `<let by=>` is the right primitive: it names the one missing
concept (state identity) with the word the language already uses for it,
it is purely additive, its client half slots into runtime paths that
already exist, and the mainline-first phasing structurally enforces the
"identical on both drivers" invariant instead of hoping for it. The
rejected alternatives are rejected for the right reasons, and the
`let-fallback` subsumption argument holds under scrutiny.

Two things need to change before it ships as *the blessed optimistic
pattern*, and neither is a change to the primitive:

1. **The flagship example is subtly wrong.** `by=input.cartCount` (the
   self-value key) cannot converge when the server *rejects* a mutation —
   the delivered key equals the stored key, so the wrong optimistic guess
   survives forever. The root cause is deeper than the example:
   pending-confirmation state wants to be *derived at rest* with an
   interaction-scoped overlay, not a durable fork patched with key
   idioms. F1 lands on a dedicated optimistic primitive
   (control/boundary-tied, settle-cleared, informed by persisted
   deliveries) as the target, with the app-maintained version key as the
   works-today interim. `<let by>` stays — scoped to the identity shape
   it is actually right for.
2. **The router's mutation-supersede drop** (the proposal's own open
   question 4 / optimistic doc's open question 5) is real and must be
   fixed in `@marko/run` before the persisted half ships — a concrete fix
   is proposed below (F2).

On the holistic vision: the three-layer optimistic/transition design and
the recede policy work are unusually well grounded, and the
`<let by>` ∘ `<context>` composition genuinely deletes `let-global` with
nothing hand-rolled left over. The one structural incoherence found is
that the async story currently means **opposite things on the two
drivers** — client-side re-awaits always recede to the placeholder while
persisted matched boundaries always keep stale content — and
`<@placeholder by=>` (typed "No effect outside persisted update renders")
only papers over the persisted half. The transition end state should be
one policy, keyed by `by=`, on both drivers (F3).

A structured cross-check against React's Suspense / transition /
optimistic APIs (its own section below) confirms the considerations map
onto this design's answers, adds React 19's action sequencing as direct
precedent for the F2 fix, and surfaced the rebase gap under multiple
in-flight mutations — the finding that pushed F1 from "patch the keyed
let" to "the pending-confirmation shape is its own primitive."

## What was validated, against what

- **Docs**: all eight `designs/*.md`, in full.
- **Compiler/runtime claims** in let-by.md, each traced to code:
  - `core/let.ts`'s hand-rolled attr rejection (`analyze`, let.ts:43-66)
    vs `<for>`'s `assertAllowedAttributes` (for.ts:112-115) — accurate.
  - Keyed `<for>`'s per-diff `Map` (SameValueZero) at
    `dom/control-flow.ts:741-744` — accurate.
  - `_update_seed`'s `Gen >= applyGen` matched-scope exclusion
    (`dom/update.ts:1338-1344`) and the seed channel's cross-route gating —
    accurate, including the corrected claim that keyed lets need the
    *opposite* on both axes.
  - The controllable `_default` gate is `Gen < runId`
    (`dom/controllable/input-value.ts:30,55`) — the optimistic doc's
    correction ("a narrower, differently-shaped gate", not the same one)
    is right.
- **The key structural claim** — that the client half is a small runtime
  helper, not new compiler wiring — is *stronger* than the doc states:
  today's `_let` is already re-invoked with a fresh seed whenever
  `value=`'s references change (the seed rides `addValue(section,
  referencedBindings, signal, value)`, let.ts:142), and the runtime
  discards it for existing scopes via the `Gen === runId` check
  (`dom/signals.ts:37-48`). `_let_by` is exactly that function with a
  key comparison where the unconditional discard is. The stored-key-slot
  pattern also already exists in the runtime (`KeyedScopesProp.
  PreviousKey`, used by `_for_selector`, dom/signals.ts:182-216), so the
  shape is idiomatic.
- **A free correctness win the doc doesn't claim**: a keyed let inside a
  *positional* loop fixes today's stale-state hazard — when rows shift,
  branch scopes pair by index and a plain `<let>` keeps row N's state
  while showing row N+1's data; `by=item.id` resets it. Worth a fixture
  and a docs call-out; it makes `by=` valuable entirely outside the
  optimistic story.
- **Delivery-less reconciliation coherence**: a keyed let inside a
  client-state-driven branch never receives direct persisted delivery
  (state-driven structure is excluded from pairing), but its `by=`/
  `value=` expressions re-run through the ordinary closure fan-out when
  the globals partial merges — so it still reconciles, through the client
  half. This is a real payoff of building the client semantics first: the
  persisted path degrades *into* the client path, not into nothing.

## Findings

Ordered by how much they matter. F1–F3 are semantic; the rest are spec
gaps, hazards, and notes.

### F1. The self-value key cannot represent "unconfirmed" — pending confirmation is its own primitive

The optimistic docs use `<let/cartCount=input.cartCount
by=input.cartCount/>` as the flagship. Trace the rejected-mutation flow
(which the router *explicitly supports* as an in-place patch — non-2xx
patch responses apply precisely so validation errors keep focus,
persisted.ts:286-298):

1. Server cart = 5; last-applied key = 5. User clicks: local bump to 6,
   POST fires.
2. Server **rejects** the mutation (validation, stock, auth). Session
   cart stays 5. The PRG re-render delivers key=5, value=5 (plus
   whatever error content).
3. Client: delivered key 5 equals stored key 5 → "same instance, local
   writes persist" → the badge shows **6, forever** — no later delivery
   can revisit it, because the server's truth never stopped being 5.

This violates the design's own invariant ("optimistic UI may be
momentarily wrong, never persistently wrong") with **zero concurrency
involved** — it is not open question 5, it is the base case of a rejected
mutation. The rollback section's claim that "the provisional value is
overwritten either way" only holds when the key *changes*.

The root cause is that there are two optimistic shapes, and the proposal's
reconciliation rule serves one of them:

- **In-progress input** (the draft): local writes are the user's property
  until the *subject* changes. `by=item.id` — narrow key, exactly as
  specced. `<let by>` nails this.
- **Pending confirmation** (the counter): a local write is a *guess about
  the server's next answer*; the very next mutation response is
  authoritative whether or not it changed the value. A self-value key
  can't express "the server answered and said no".

The deeper diagnosis (sharpened in review discussion, 2026-07-09): the
two shapes differ in what the cell is **at rest**. In-progress input is
*forked at rest* — a durable local copy, which is exactly what `<let>`
is, and identity (`by=`) is the right rule for when the fork re-bases.
Pending confirmation wants to be **derived at rest** — between
interactions the cell simply *is* the server value, reactively fresh
like a `<const>`; it becomes a local guess only for the window between
an interaction and its navigation settling, then snaps back to derived.
Every patch below (version keys, settle tokens) is an attempt to make a
fork behave like that window-scoped overlay. The ladder, ending at the
primitive that just *is* one:

**Expressible today (userland version key — works, fragile).** Key on a
server-side counter that bumps whenever the server *processes* a
relevant mutation, accepted or rejected:

```ts
// cart handler: one line
session.set("cartVersion", (session.get("cartVersion") ?? 0) + 1);
```

```marko
<let/cart=$global.data.cart by=$global.data.cartVersion/>
```

Rejected mutation → version bumped anyway → key differs → re-seed to
server truth (visible rollback, for free); unrelated navigation → same
version → in-flight optimism kept; monotonic, so F2's races converge on
any later delivery. But name the fragility honestly: the bump is a
hand-maintained invariant that must fire on *every* processing path
including rejections (the path nobody tests), it multiplies per resource,
it lives in exactly the session/`serializedGlobals` threading the
feature exists to delete, and forgetting one site fails silently as
permanent drift. A content hash instead of a counter does not work —
rejected mutation → unchanged data → unchanged hash → same hole. The
counter's annoying property (changes even when data doesn't) *is* the
load-bearing property, which is the tell that the key is smuggling in a
fact that isn't identity at all: "my mutation settled."

**Target: an interaction-scoped optimistic cell (design direction,
2026-07-09 discussion — now worked out in
[optimistic.md](./optimistic.md), which supersedes the sketch below
where they differ).** A dedicated primitive whose semantics are the
derived-at-rest overlay directly — seeded by a control-tied sketch from
that discussion (`<a/nextTab href=…>` +
`<optimistic/tab=input.tab for=nextTab onClick() { tab = … }>`), and
generalized as follows:

- **Derived at rest.** `<optimistic/cart=$global.data.cart/>` reads as a
  `<const>`: between interactions it tracks its source reactively —
  every delivery's fresh value flows through (including changes this
  client didn't cause, which a fork-based cell misses). The source can
  be `input`/`$global` (persisted canonical) *or* an await boundary's
  param (client canonical) — in the param case, "boundary settles →
  params re-fire → re-derive" is ordinary reactivity, no special
  plumbing.
- **Writable as a guess.** A write opens an overlay and increments a
  per-cell pending count, associated with the transition the write
  initiated. The overlay holds while any associated transition is
  pending (React's overlay-while-actions-pending — the rebase-gap
  answer, per cell instead of a global token, so independent resources
  never couple).
- **Settle = the transition's async work committed**, abstracted over
  both drivers through the boundary machinery that already exists: a
  persisted navigation settling (stream complete / mutation response
  applied — `_update_branch` body commits, the `"!"` pending-echo
  clearing) or a client re-await resolving (`AwaitCounter` reaching
  zero). The last settle re-derives the cell from its source — which by
  then *is* the authoritative answer. A rejected mutation re-derives to
  the unchanged truth: rollback for free, no key comparison to strand
  (the F1 hole is structurally impossible). A superseded navigation's
  overlay dies with it. This is what a version key or settle token was
  hand-encoding: the pending count is the only thing that can
  distinguish "no news" from "news: same value", because the data
  channel dirty-checks the two identically.
- **Association: explicit cell, implicit write-capture, `for=` as the
  escape hatch.** The sketch's `for=ref` is precise but strains exactly
  where the feature matters: loops (N tab links, one cell — per-iteration
  tag vars can't name it) and cross-template shells (the cart cell lives
  in the layout provider; the forms live elsewhere — refs don't cross
  templates). Resolution: declaring the cell is explicit; a write that
  occurs during an event dispatch the router converts into a navigation
  (including one arriving through a writable `<context>` change handler,
  still synchronous in that dispatch) associates with that navigation;
  `for=` remains for flows detection can't see (programmatic
  `requestSubmit`, custom fetch). A write with no associated transition
  degrades to "overlay until the next delivery" — `let-global`'s old
  semantics as the fallback rung.
- **Honest edges to design**: which client boundaries belong to a
  write's transition ("boundaries whose awaited expressions re-ran
  because of this write") is compile-time knowable per template from the
  signal graph but needs cross-template reason threading for the general
  case — the same spike `context.md` already names as its top compiler
  risk, now with two consumers; error paths (boundary catch → re-derive,
  persisted fallback ladder → full navigation) need fixtures; and values
  with no server round trip behind them are *not* optimistic — that's
  plain `<let>`, and the primitive should say so rather than absorb it.

*Considered and demoted — a run-owned settle token* (`$global.settled`,
bumped when the final pending mutation's response applies, used as
`<let … by=$global.settled/>`): zero app bookkeeping and rejection-safe,
but it inherits the fork-at-rest staleness (a delivery caused by someone
else never bumps *your* token, so the cell goes stale until your next
mutation), couples independent resources through one counter, and
teaches `by=` a meaning ("my mutation settled") that isn't identity. If
the optimistic primitive proves too large for its first release, the
token is the acceptable interim; the version key above is the
works-today fallback either way.

The docs split stays, sharpened: `<let by=>` for in-progress-input cells
(durable fork, identity reset — drafts, accordions, follow-until-written
via `by=hex`); the optimistic cell for pending-confirmation
(derived-at-rest, interaction-scoped overlay — counts, carts, likes,
tabs); the self-value key documented as an anti-pattern for
mutation-confirmed state. A side effect worth auditing: with the guess
shape moved out of `<let by>`, its dedicated persisted delivery channel
(compiler item 5) may shrink to update-guarded seed expressions only —
request-derived keys and values already re-evaluate client-side through
the ordinary fan-out when deliveries land. Fixture: the drift repro
(fixture 2) should include a rejected-mutation delivery (same data,
error content) and assert the optimistic cell re-derives while a
self-keyed let strands the guess — pinning the difference the docs
teach.

### F2. The mutation-supersede drop: fix by ordering, not by salvage

Confirmed in the router: mutations are fetched without the abort signal
(`signal: mutation ? undefined : signal`, persisted.ts:271) but a
superseded call returns before reading the stream
(`if (signal.aborted) return`, persisted.ts:278) — the response the
server already committed is thrown away unread. The optimistic doc's
open question 5 correctly identifies that keyed lets turn this from a UX
choice into a correctness gap (the "same key → keep local" branch can
strand an unconfirmed guess).

Two candidate fixes were considered here:

- **Salvage the dropped response** (read superseded mutation streams and
  apply only keyed-let/globals data, skipping DOM). Rejected: it creates
  a second, partial apply mode with its own ordering questions (the
  superseding GET may have rendered *before* the mutation committed, so
  applying its frames after the salvage re-introduces staleness), and it
  gives frames a data-vs-placement split the wire deliberately doesn't
  have.
- **Order navigations behind in-flight mutations** (recommended): while a
  mutation navigation is in flight, later `navigate()` calls **queue their
  fetch** (coalescing to the latest) until the mutation's stream
  completes or fails into the ladder. Mutation responses are then always
  read and applied, in order; and because the queued GET is *fetched*
  after the mutation committed server-side, its render reflects the
  mutation — closing both the keyed-let hole and the generic
  stale-PRG-read race in one move. This matches the browser's own form
  semantics (a submission is not silently abandoned because the user
  clicked a link) and the Remix/React-Router posture (actions settle,
  then revalidation runs). Cost: rare added latency in the
  click-during-mutation window, bounded by the mutation round trip; GET
  navigations still supersede each other freely.

React 19 arrived at the same rule from the other direction and made it
the default: form Actions **queue and run in order** when submissions
overlap (`useActionState`'s documented sequencing) — the ecosystem's most
recent mutation API treats ordering as table stakes, not a UX opinion.
The same router flag this fix introduces ("a mutation is in flight or
queued") is also what the transition-scoped re-seed deferral needs — see
the React cross-check section below.

Note `resubmitting` (persisted.ts:204) is only the fallback-ladder
reentrancy guard — there is **no general double-submit guard** today, so
a double-clicked submit fires two independent POSTs. The pending-element
tracking from the optimistic doc's layer 1 is where that guard naturally
lands; treat it as a correctness item for mutations, not polish (F6).

### F3. One async policy, two drivers — `by=` should govern both

The recede survey's conclusion ("keep-stale is the unanimous default;
resets are identity-shaped and opt-in") is right — but today it only
describes the *persisted* driver. The client runtime does the opposite:
a client-side re-await **always recedes**. When a new promise lands on a
boundary with a placeholder, `addAwaitCounter` schedules — after one
`requestAnimationFrame` grace — placeholder creation and
`tempDetachBranch(tryBranch)` (dom/control-flow.ts:289-335): the live
body detaches and the skeleton re-shows on *every* re-await, identity
change or not. That is the Astro failure mode the survey rejects,
softened only by the one-frame grace. Meanwhile `<@placeholder by=>`
shipped typed as "No effect outside persisted update renders"
(tags/try.d.marko).

So the current matrix is:

| driver                      | default            | opt-in recede |
| --------------------------- | ------------------ | ------------- |
| client re-await             | always recede      | —             |
| persisted matched boundary  | keep stale         | `by=` change  |

let-by.md's own first principle — "a language feature that means
something different over the wire would be incoherent" — applies squarely
to `<@placeholder by=>`, which currently means something only over the
wire. And the user-facing consequence is real: a search-as-you-type
`<await|results|=search(query)>` skeleton-flashes on every keystroke client-side,
while the identical interaction expressed as a persisted GET-form
navigation keeps the previous results visible. Same template, opposite
UX, depending on which driver re-ran it.

**Recommendation** (the async-transition keystone): make `by=` on
`<@placeholder>` mean the same thing for client re-awaits:

- key unchanged → **keep stale** (do not detach; hold the old body until
  the new promise settles; mark pending, F6),
- key changed → today's recede (with the existing rAF grace as the
  anti-flash).

Keyless boundaries keep today's per-driver defaults for compatibility
(recede client-side, keep-stale persisted) — a documented wart, with
default alignment a major-version question. This turns `by=` into the
single identity concept the family promises: `<for by=>` (row identity),
`<let by=>` (state identity), `<@placeholder by=>` (content identity),
each meaning "same key = same thing, keep it; new key = new thing,
rebuild it" on **both** drivers.

### F4. Object keys degrade differently on each surface — warn once, for the family

Over the wire, a delivered key is a deserialized clone, so SameValueZero
against a stored live object is *always false*: an object-keyed
`<let by>` silently re-seeds on every navigation (always-reset). The
recede identity has the opposite failure: it's string-coerced into the
site stash (`siteId + " " + placeholderBy`, html/writer.ts:1354), so
every object key collapses to `"[object Object]"` and compares *equal* —
an object-keyed placeholder silently **never** recedes. Same author
mistake, opposite outcomes, both silent.

Keep the semantics as specced — SameValueZero for `<let by>` is right
(objects failing toward "different" fails toward server-wins, the safe
direction; string-form would false-positive all objects as "same", the
unsafe one). But add the open-question-3 lint now rather than later, and
scope it as one rule for the family: **dev-warn when a `by=` expression
under a persisted build evaluates to a non-primitive** (`<let>`,
`<@placeholder>`, and `<for>` when its keys ride update pairing). The
context-branch evaluation showed how cheap these dev-only guards are;
this one prevents two invisible misbehaviors with one message.

### F5. `by=` × `valueChange=`/`:=` is unspecified — reject it in v1

let-by.md defers controllables ("out of scope for v1") but the compiler
surface doesn't follow through: item 1 replaces the attr rejection loop
with `value=`/`valueChange=`/`by=` accepted, which makes
`<let/x:=input.y by=k/>` parse. Semantically it's incoherent today: a
controllable let's writes delegate to the parent's handler
(`_let_change`'s `scope[valueChangeAccessor](value)` path,
dom/signals.ts:80-81) — there are no local writes for a key reset to
discard, and the two reconciliation stories (key identity vs `_default`
replay) would race on the same slot. Make `by=` + `valueChange=` a
compile error in v1, with the error message pointing at the long-term
unification (optimistic doc, open question 4). Also confirm the plan's
"error on `by=` without `value=`" covers the shorthand-less
`<let/x by=k/>` form.

### F6. Ship the pending signal first — it is the missing keystone, and it's currently deferred

The recede doc's layer 1 (`aria-busy` on pending boundary roots +
`data-marko-navigating`) is marked "deferred by decision (2026-07-09)",
and the optimistic doc's layer 1 (pending attributes on the initiator)
is unshipped. Meanwhile the benchmark app has **zero** pending
affordances (verified: no spinner, no disabled-while-in-flight, no
navigation indicator anywhere in the workspace app), and persisted
navigation removes the browser's native progress indicator — the page
currently gives *no feedback at all* between intent and first frame.
Every system the survey cites leads with the signal; recede is the
garnish. The pending layer is also where the double-submit guard lands
(F2), which makes it partially a correctness item.

**Recommendation**: reorder — pending attributes + `aria-busy` +
double-submit guard ship before (or with) `<let by>`, ahead of any more
recede/transition work. It's the cheapest item on the board and every
other layer's UX assumes it exists. Concretely this also gives the
client-side keep-stale of F3 its indication story for free (same
attribute, set by the boundary machinery instead of the router).

### F7. Wire cost of keyed lets: fine for v1, note the echo-prune

Unconditional delivery means a keyed let's `value=` rides every update
render *even when the key matches and the value will be discarded* — for
a version-keyed cart that's the full cart array per navigation. Correct
for v1 (opt-in, and the values are exactly the ones the page renders
anyway, so the serializer's dedup usually shares them), but worth a line
in the doc: the `<@placeholder by=>` identity echo already demonstrates
the fix shape (client echoes last-applied keys in `x-marko-have`; server
skips the value when equal — T2-digest-adjacent, same per-route
cacheability caveat). Don't build it now; do record it so the T2 work
accounts for keyed lets.

### F8. The naming-history record is corrupted

let-by.md open question 1 currently reads "`by=` was the original
proposal, briefly rejected … and `by=` was chosen in its place. The final
decision reverses that…" and lists "`by=` (instance-reading, the interim
choice)" under *also considered* — the interim attribute name was
evidently search-replaced to `by=` across the docs, destroying the
record's ability to explain itself (the optimistic doc's open question 1
has the same artifact). The decision itself (`by=`) is right and clearly
argued everywhere else; restore the interim name in the two history
passages (or delete the loop narrative and keep just the
alternatives-considered list).

### F9. Claim the accessor letter now — the space is nearly gone

`common/accessor.ts`'s `AccessorPrefix` namespace has A–U spoken for
(members + reserved comments), Z reserved, and the context branch
informally claimed V/W after colliding with N/P (context.md's evaluation,
item 1). That leaves X/Y. let-by.md defers the letter to implementation
time (open question 2) — don't; reserve one in the catalog comment in the
same PR that lands the doc, exactly to avoid the collision-then-reletter
dance the context branch went through. (Longer-term, two single-letter
namespaces disambiguated by key length is running out of alphabet;
worth a one-line note in agent-feedback before a third branch claims
letters.)

## Cross-check: React's Suspense, transitions, and optimistic APIs

Not treated as the gold standard — treated as the most battle-tested
enumeration of the same considerations, which is what makes it a useful
completeness check. Each API below encodes a problem persisted pages
must answer *somehow*; the table says where this design answers it, and
what fell out of forcing the comparison follows.

| React surface | what it encodes | persisted-pages answer |
| --- | --- | --- |
| `startTransition` (off-screen concurrent render; old UI stays visible and interactive; boundary-atomic commit) | protect the visible UI while the next one is prepared | there is no second tree to render — keep-stale falls out of the wire model (live DOM holds until values land); the per-frame synchronous `run()` flush is the atomicity unit; the `persisted-update-csr-race` fixture pins the interruption equivalent (urgent client renders win mid-stream, late frames re-compute against live state rather than clobbering) |
| `useTransition().isPending` | a programmatic pending read — arbitrary UI must be derivable from pending-ness, not just styling | initially answered attribute-first here; **superseded (2026-07-09)** — pending is now first-class reactive state via tag variables (`<try/t>.pending` inbound, `<transition/t>.pending` outbound, designed in optimistic.md), one design for both drivers; attributes and `aria-busy` remain as the zero-code/a11y layer |
| `<Suspense>` reveal rules (fallback on first mount; revealed content never re-hides in a transition; `key=` forces reset; routers "should key automatically") | when stale content may be destroyed | matched boundaries keep stale; `<@placeholder by=>` is the key idiom — aligned on the persisted driver, **contradicted by the client driver today** (F3) |
| coordinated reveal (multiple suspending children per boundary; `SuspenseList`) | staged/grouped appearance | the client runtime already does all-or-nothing per boundary (`AwaitCounter` counts every pending await under one placeholder, dom/control-flow.ts:100-127); the persisted driver's v1 rule aborts >1 pending await per placeholder body into a full navigation — that limit now looks like the *standard idiom* rather than an edge, prioritize lifting it |
| `useOptimistic` (overlay over canonical state; auto-revert when the action settles; **rebases** queued deltas onto refreshed canonical state) | optimistic writes must never become truth, and must survive canonical refreshes that don't answer them | F1's target primitive is this exact shape made declarative: derived-at-rest cell, write opens an interaction-scoped overlay, settle (navigation stream / boundary re-await, per driver) re-derives; overlay-holds-while-pending is the rebase answer, per cell; the interim `<let by>` + version-key recipe approximates it for single mutations |
| React 19 Actions + `useActionState` (overlapping submissions queue and run in order; the action's return value is a typed outcome channel for field errors) | mutation ordering and mutation outcomes | ordering: exactly F2's fix, now with ecosystem precedent; outcomes: the PRG patch re-rendering error state in place is the outcome channel, and it's why non-2xx patch responses deliberately apply in place (focus/scroll preserved, persisted.ts:286-298) |
| `useFormStatus` | children of a form read its pending state | `form[data-marko-pending] …` CSS reaches the same nodes without a hook |
| `useSyncExternalStore` | external stores tear under concurrent rendering without versioned subscription | `let-global` is this hack hand-rolled (module registry + manual subscribe); `<context>` moves the store into the signal graph, and no concurrent double-render exists to tear against |
| selective hydration / event replay | hydration cost is user-visible, so prioritize interacted boundaries | resumability sidesteps the category — there is no hydration render to prioritize |
| `useDeferredValue` | shield expensive re-renders behind stale values | no whole-tree re-renders exist to defer; fine-grained updates are the shield |

The pattern in the last three rows generalizes: most React machinery
exists to protect the UI from React's own re-render cost, which Marko's
compiled granularity doesn't pay — so the considerations that *survive*
the translation are precisely the wire-level ones (ordering, identity,
pending signals) the findings above deal with. Two things did fall out
of the pass:

**The rebase gap** — the one capability `useOptimistic` has that a
fork-shaped keyed cell lacks. React re-applies pending optimistic deltas
on top of every refreshed canonical value, so N overlapping mutations
never visibly regress. A keyed let re-seeds on key change and discards
local writes, so two rapid bumps flicker even with a version key and
F2's ordering: click-click takes the cell to 7 locally; mutation #1's
delivery re-seeds to 6 (its authoritative answer); mutation #2's
delivery re-seeds to 7. The fix is **not** a client delta queue (that is
the data layer the charter rightly rejects) but exactly what F1's target
primitive encodes: the overlay holds while *that cell's* pending
interactions are unsettled and re-derives on the last settle — per-cell
pending counting, no queue, no reducer, no cross-resource coupling. This
is the finding that pushed F1 from "patch the keyed let with a settle
signal" to "the pending-confirmation shape is a different primitive."

**Reveal coordination priority** — the >1-pending-await-per-placeholder
persisted abort should be scheduled, not just documented: one boundary
wrapping several awaits is how the React ecosystem expresses "this
section appears as a unit", the client runtime already implements the
semantics, and the persisted driver punishing it with a full-navigation
fallback is the kind of silent-degradation cliff the rest of this design
is careful to avoid.

## DX assessment of the primitive itself

- **The two-expression form reads well.** `<let/draft=item.text
  by=item.id/>` is self-explaining in a way `resetOn=`/`key=` would not
  be, and the family framing (`<for by>`, `<let by>`, `<@placeholder
  by>`) is the right teaching story. The genuine shape split — `<for by>`
  takes an extractor (string prop or `(item) => key`, for.ts:124-132,
  575-584) while `<let by>`/`<@placeholder by>` take the key value
  directly — is fine: "for needs a key *per item*; everything else keys
  *itself*" is one sentence.
- **Seed-once-per-key is the right default**, and the prior-art section's
  distinction (vs follow-until-written) is honest. Keying on the tracked
  value (`by=hex`) collapsing the two is a genuinely elegant result —
  though per F1, teach it for *derived-overridable* cells (the color
  mixer), not for mutation-confirmed cells (the cart).
- **Reset-as-seed-re-run (not remount)** is right: the keyed
  `<if>`/`<for>` remount already exists for the heavy case, and the light
  case is what optimistic UI actually needs (don't rebuild the subtree,
  re-source one value).
- **Implementation notes** (for whoever builds it): (a) when the key
  changes but the new seed equals the current local value, the value
  write dirty-checks away — the stored key must update anyway, or the
  *next* delivery misclassifies; (b) the key slot must serialize whenever
  the let itself resumes, or the first client-side comparison sees
  `undefined` and spuriously resets — plan item 4 implies this, make the
  fixture explicit (SSR'd keyed let, no persisted flag, client re-render
  with the same key must keep local writes).

## The holistic vision, assessed

### What's right (and verified)

- **The ownership analysis as the optimistic dividing line.** The
  compiler already splits client-owned from server-derived; an optimistic
  value as "a state cell with a declared identity and a server-reconciled
  seed" is the smallest possible addition to that model, and it holds up
  against the alternatives (no rollback API, no mutation queue, no
  transport state in templates — each rejected for reasons that survive
  scrutiny; React 19's `useOptimistic` overlay semantics were considered
  here too, and they require exactly the client-side
  transition/mutation-lifecycle tracking the charter excludes; the keyed
  cell gets the visible behavior with zero transport coupling, *given*
  F1's recipe).
- **The `<let by>` ∘ `<context>` composition** genuinely deletes
  `let-global`. Everything the workspace tag hand-rolls — the
  module-scope `subsByKey` registry, in-place `$global.data` mutation,
  double fan-out per action, `marko-run:navigate` re-sync, manual
  `cart = (await submit(ev)).cart` reconciliation, and its unhandled
  rejection on failure — maps to a platform piece: pub/sub → closure
  fan-out from the provider scope, event-timing → signal-graph timing,
  manual reconcile → keyed re-seed, no-rollback → version-key re-seed.
  The end-state cart is worth writing out, because it is the whole pitch:

  ```marko
  /* cart-provider.marko — in the persistent layout */
  <optimistic/cart=$global.data.cart/>
  <context:=cart/>
  ```

  ```marko
  /* product-actions.marko */
  <context/cart from="<cart-provider>"/>
  <form method="POST" action="/cart" onSubmit() {
    cart = addItem(cart, input.id, quantity);
  }>
    ...
  </form>
  ```

  No fetch, no JSON negotiation, no registry, no reconcile write, no
  event listener, no app-maintained version: the POST rides the router,
  the write's overlay holds through the flight, and the settling PRG
  delivery re-derives the cell (rejection included — rollback for free);
  every consumer re-runs through the context subscription. Failure UX is
  server-rendered content. This example should headline the optimistic
  doc. (Until the optimistic primitive exists, the same shape runs today
  as `<let … by=$global.data.cartVersion/>` on a session-stored version
  key — F1's interim, fragility noted there.)
- **Context's identity model** (template identity via taglib discovery,
  id-constant not import edge) is the standout design decision in the
  set — it makes cross-template state *improve* under the wire-economics
  and tree-shaking goals (one capture site, N consumers, zero extra patch
  bytes) instead of fighting them. The branch evaluation (82/82 checks
  with `let-global` fully replaced) says the composition already works;
  the four integration fixes it lists are the honest cost.
- **The recede policy work** is exemplary prior-art discipline, and the
  shipped `<@placeholder by=>` structural half matches its own survey —
  on the persisted driver (F3 is about the other driver).

### Order of operations (revised)

The phasing across the three docs, re-sequenced by what this review
found:

1. **Pending signal + double-submit guard** (run router + applier; F6,
   part of F2). Smallest item, unblocks real feedback, correctness for
   mutations.
2. **Router mutation ordering** (F2) — prerequisite for any settle
   semantics (F1's primitive included) and independently fixes stale-PRG
   races; its queue state is also what write-association reads.
3. **Early-input stamping for GET navigations** (router-only; the
   link-driven half, see the dedicated section below) — `$global.url`
   stamped through a synthetic frame zero at click; upgrades the shipped
   recede to interaction-time and gives links the same instant-state
   story forms get from the keyed cell.
4. **`<let by>` client half on main** (compiler 1–4 + `_let_by`), with
   the F5 error, F4 lint, F1 fixtures, and the positional-loop fixture.
5. **`<let by>` persisted delivery** on the feature branch (compiler 5 +
   merge dispatch), drift repro + rejected-mutation repro green.
6. **`<context>`** per its own plan (reason-threading prototype first),
   then the provider composition replaces `let-global` in the benchmark —
   **skip the interim "bless `let-global` + globals-merge hook" step**
   (optimistic doc phase 5): the context branch evaluation already
   validated the replacement end-to-end, so blessing the workaround now
   just creates a second migration.
7. **The optimistic primitive** (F1's target) — spike the association
   mechanics (write-capture during router-bound dispatches; the
   boundary-membership analysis shares the cross-template
   reason-threading spike with `<context>`), then land it as the
   pending-confirmation shape; the version-key recipe is the documented
   interim until here.
8. **`by=` on `<@placeholder>` for client re-awaits** (F3) + the shared
   anti-flash hold — this is the "async transitions" DX milestone, see
   below; its boundary pending/settle events are the same ones the
   optimistic primitive consumes.
9. View Transitions behind the run option (both swap paths already
   funnel through `applyBoundaryBody`/`dismissPlaceholder` — single
   choke points on each driver, so this stays cheap after F3).

### Link-driven optimism: early input, not guesses

Optimistic UX must work from links and GET forms, not just POST forms —
filter chips, tabs, sort toggles, pagination, item→item navigation are
most of what users click. The observation that organizes this half: a
mutation's outcome is a **guess** (what will the server compute?), but a
link's next input is **known** — the href is the new URL, in the
client's hand at click time. So the two interaction kinds want two
different things, and neither needs the other's machinery:

|                | GET (links, GET forms)                       | POST (mutations)                                  |
| -------------- | -------------------------------------------- | ------------------------------------------------- |
| client knows   | the next **input**, deterministically        | only its own **guess** at the outcome             |
| primitive      | apply the input early; content keeps stale   | optimistic cell — overlay until settle (F1)       |
| reconciliation | delivery confirms (dirty-check no-ops)       | settle re-derives; fallback ladder on failure     |

Applying the input early means: at click time, stamp the URL-derived
globals (`$global.url`, and eventually matched `params`/raw `search`)
into the live page and let the existing reactive promotion do the rest —
the active chip highlights, the selected tab moves, URL-keyed
`<let by>` cells re-seed, all in the click's own frame, while the fetch
streams the content. This is not a violation of the "templates react to
applied input, not transport state" non-goal — the URL is the
navigation's *input*, not its transport state, and the whole persisted
model is built on "new input to the root".

The mechanism is nearly free, because it can be a **synthetic frame
zero**: the router already loads the `?update` entry *before* the fetch
(for the possession echo, persisted.ts:243-250), so at click time it can
run the navigation's first apply with a globals-only partial —
`[_ => [0, {url}]]` — through the same `createUpdate` context the real
frames will use. Sparse semantics do the safety work: nothing else is in
the patch, so nothing else changes; and because the stamp runs as an
apply, the `!_updating` compute guards mean server-only-mixed
expressions are *skipped*, not miscomputed client-side — those holes
simply keep their stale values until the real frames deliver them, which
is exactly the keep-stale policy the rest of the design wants. Pure
URL-derived client expressions re-render now; server-derived content
follows; the delivered globals partial later merges over the stamp and
dirty-checks to a no-op.

What this buys beyond chip highlighting:

- **Interaction-time recede.** The recede doc cites Unpoly's lesson that
  placeholders "should appear at interaction time, not at
  first-response time" — but the shipped `<@placeholder by=>` recede is
  server-driven, so today it costs a round trip before the skeleton
  appears. With the identity's inputs stamped early, a `by=` keyed on
  URL-derived identity can be *compared at click time*, and an
  identity-changed boundary can recede immediately (anti-flash hold
  still applies; the body or a confirming fill swaps in from the
  stream). Item→item navigation gets the skeleton at click, not at
  first flush.
- **URL-keyed state resets at click.** `<let/expanded=false
  by=$global.params.id/>` collapses the accordion the moment the user
  commits to a different item, instead of one round trip later.
- **The CSS-only first rung still ships first.** Layer 1's
  `data-marko-pending` on the initiating link is the zero-machinery
  version of this (style the clicked chip immediately); early-input
  stamping is the full-state version. They compose — attr at click,
  state at click, content on delivery, all three distinct moments.

Edges to design deliberately rather than discover: the client matcher
currently returns no `params` (the trie matches but its terminals are
`[id, loadTemplate, loadUpdate]` — extracting params is the same trie
walk, just not exposed yet), so v1 can stamp `url` alone and let
`params`/validated-`search` derivations correct on delivery (run's
validators are server code and must stay so — the stamp carries raw
values, the delivery carries validated truth); history commit currently
happens at first applied frame (deliberately, MPA-parity) and should
*stay* there — the stamp may lead `history.pushState` by a beat without
user-visible effect, and a fallback's `location.assign` unwinds
everything anyway; supersede ordering is already right (a second click
stamps over the first, whose fetch aborts); and popstate navigations
should stamp too — back/forward gets the same instant chrome. Mutations
deliberately get none of this: a PRG redirect's target URL is
server-knowable only, which is precisely why POST optimism lives in the
optimistic-cell column.

### The async-transition end state

Where this should land, stated as one model: **a transition is a keyed
boundary whose content identity changed and whose replacement is
pending.** Identity comes from `by=`; pending-ness comes from either
driver — a client promise re-evaluating, or a persisted update re-running
the server work. Every surface then behaves identically on both drivers:

| concern              | client-driven await                          | server-driven (persisted)                          |
| -------------------- | -------------------------------------------- | -------------------------------------------------- |
| identity             | `<@placeholder by=>` (extend, F3)            | `<@placeholder by=>` (**built**)                   |
| same key, pending    | keep stale + `aria-busy` (change, F3/F6)     | keep stale + `aria-busy` (**built** + layer 1)     |
| new key, pending     | recede to placeholder (today's behavior)     | recede to placeholder (**built**)                  |
| new key, fast        | rAF grace already suppresses the flash       | same-frame body swap (**built**)                   |
| anti-flash hold      | one shared client constant (unbuilt)         | same constant, same site (unbuilt)                 |
| visual continuity    | View Transitions at the swap choke point     | same choke point (`applyBoundaryBody`)             |
| state inside         | `<let by>` reconciles across re-renders      | `<let by>` reconciles across deliveries            |
| guesses inside       | optimistic cell: overlay opens on write, settles when the boundary's re-await commits (param source re-fires) | same cell: overlay settles when the navigation/mutation stream commits its frames — persisted deliveries inform the same lifecycle |
| input latency        | none — the input is already local            | early-input stamp at click (proposed): URL-derived state and `by=` comparisons react at interaction time; content keeps stale behind the pending signal until frames land |

One deliberate omission to keep, one reversed. Kept: no client data
layer, and no transport *detail* in templates (no fetch promises, no
response objects). Reversed (designer decision, 2026-07-09 — this
paragraph originally held the "attributes suffice" line): pending-ness
itself becomes first-class reactive state, because users must be able
to optimistically drive *any* update, not only respond to attribute
changes via CSS. The surface is three grains designed in
[optimistic.md](./optimistic.md) ("Programmatic pending state"), chosen
so the non-local ones are tree-shape-free (lexical wrappers force tree
shapes — a reader above the interaction site cannot see a tag variable
below it): **resource** — the cell drives ordinary author state via the
bind shorthand (`<optimistic/cart=… pending:=syncing/>`; `syncing` is a
plain `<let>` riding the same context hoist as the value); **page** —
router-stamped `$global.nav` via the early-input synthetic-frame
channel, readable everywhere by definition; **site** — the same drive
on the boundaries (`<try pending:=refreshing>`, backed by
`AwaitCounter`/persisted boundary state — the boundary-scoped signal
Svelte's `$effect.pending` and React's `isPending` prefigure, one
design for both drivers; `<transition pending:=adding>` outbound,
DOM-containment association) for genuinely local UI. All zero-cost when
the attribute is absent; the CSS attributes and `aria-busy` remain as
zero-code conveniences and assistive-tech semantics on top.

The remaining genuinely-hard open edge is teardown symmetry: a persisted
recede shares the matched-path body swap's recorded gap (DOM removed,
scopes not destroyed — roadmap's placeholder-effects note), and a
client-side keep-stale (F3) will need the mirror answer (what happens to
the stale body's scopes while held). Decide the two together; it is the
same question ("who owns a superseded body's lifecycle") asked from both
drivers.

## Answers to the open questions on record

- let-by.md **q1** (naming): settled, `by=` — but repair the record (F8).
- **q2** (accessor letter): claim X or Y now, in the catalog (F9).
- **q3** (fresh-object-key lint): yes, and broaden it to the family under
  persisted builds (F4); decide once for `<for by>` as proposed.
- **q4** (superseded-mutation drop): router ordering fix, F2; it is a
  prerequisite, and F1's settle lifecycle independently shrinks the
  blast radius (an overlay that re-derives on settle converges on any
  completed delivery). The rebase-gap deferral (React cross-check)
  collapses into the optimistic cell's overlay-while-pending rule.
- optimistic doc **q2** (default without `by=`): agree — no new default.
- **q3** (identical on both drivers from day one): agree, and the same
  bar must eventually apply to `<@placeholder by=>` (F3).
- **q4** (controllable unification): out of scope is right; make the
  combination an error meanwhile (F5).
- **q6** (does layer 3 need the input echo): not for v1 — the recede
  identity echo plus F7's future keyed-let echo cover the per-site
  precision cases so far identified.
- **q7** (interim shared-state blessing): skip it (order-of-operations
  item 5).
- context.md **q5** (naming vs `Run.Context`): keep `<context>`; the
  collision is conceptual, not syntactic, and every alternative
  (`<provide>`, `<share>`) loses the provide/consume symmetry of one tag.

## Fixture additions (beyond let-by.md's four)

1. Rejected-mutation delivery: same data + error content → an
   optimistic cell re-derives to server truth (interim: a
   version-keyed let re-seeds); a self-keyed let keeps the guess (pins
   F1's taught difference).
2. `by=` + `valueChange=` compile error; `by=` without `value=` compile
   error, including the bodiless no-shorthand form (F5).
3. SSR'd keyed let without the persisted flag: resume, client re-render
   same key → local write survives (key-slot serialization, DX note b).
4. Key change where the new seed equals the current local value → stored
   key still updates; next delivery with the old key does not reset
   (DX note a).
5. Keyed let inside a positional `<for>` → reset on row shift (the
   mainline win).
6. Non-primitive `by=` dev-warning, all three surfaces (F4).
7. Keyed let inside a client-state-driven branch reconciles via the
   globals fan-out on navigation (the delivery-less path noted above).
8. Two overlapping mutations (with F2's ordering): the optimistic
   cell's overlay never shows the intermediate authoritative value —
   local 7 holds through mutation #1's delivery and re-derives once on
   #2's settle (pins the rebase-gap behavior from the React
   cross-check). Companion cases: a superseded navigation's overlay
   reverts; a boundary-catch settle re-derives; a client re-await whose
   param is the cell's source re-derives on body commit.
9. (Benchmark-suite smoke, run-side) Early-input stamp: a filter-chip
   click renders the chip active before any frame arrives; a
   server-only-mixed hole keeps its stale value through the stamp and
   updates only on delivery; a superseding click re-stamps and the
   aborted navigation leaves no residue.

---

*Also recorded while reviewing, out of band: the workspace benchmark
app's `submit-form.ts` flow leaves failed mutations as unhandled promise
rejections with committed optimistic writes — superseded by the
composition above, but if the workspace app outlives this branch it
deserves a `try/catch`.*
