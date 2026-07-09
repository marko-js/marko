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
   survives forever. Pending-confirmation cells need a "my mutation
   settled" signal, and hand-encoding it as an app-maintained version key
   is fragile boilerplate — the platform should own the signal, since the
   client router already has it (finding F1: a run-stamped settle token;
   the userland version key is only the works-today interim). The
   primitive is fine; the idiom taught with it decides whether real apps
   are correct.
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
precedent for the F2 fix, and surfaced one refinement the proposal lacks:
transition-scoped re-seed deferral, the keyed-cell answer to
`useOptimistic`'s rebase behavior under multiple in-flight mutations.

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

### F1. The self-value key cannot represent "unconfirmed" — the settle signal should be platform-owned

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

No fix inside the primitive is needed — the reconciliation rule is
right. What needs deciding is where the "the server answered" signal
comes from, and there is a ladder of three answers:

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

**Recommended: a run-owned settle token — the platform already knows.**
The client router initiated the POST; it knows which delivery is a
mutation response and whether more mutations are pending (the same state
F2 introduces). Surface that as a client-stamped token — strawman:
`$global.settled`, a counter the applier bumps when the **final pending
mutation's** response applies (never on plain GET navigations, never
server-serialized, so the server stays stateless):

```marko
<let/cart=$global.data.cart by=$global.settled/>
```

Zero app bookkeeping, nothing to forget, rejection-safe by construction.
Mechanically it rides machinery that already exists: `by=` reading
`$global` taints the keyed let global-sourced, the globals-merge re-run
re-invokes it per apply, and the applier bumps the token before
dispatching merges when the response settles the mutation queue.
Bump-on-*final*-settle also **subsumes the rebase-gap deferral** from the
React cross-check — two rapid bumps hold local state through mutation
#1's delivery and reconcile once on #2's, with no separate flag in the
merge dispatch. Degradation is graceful: in a non-persisted build the
token never changes and the cell is an ordinary seed-once `<let>`. One
honest caveat: a single token couples independent resources — a pending
wishlist mutation delays the cart cell's reconciliation until the queue
empties (still convergent, marginally later); per-resource tokens are
the refinement if a real app ever needs it.

**Candidate end state (prototype before committing): implicit
association.** React's `useOptimistic` needs no key at all because the
optimistic write happens *inside* the action — the association between
guess and transaction is syntactic. Marko's equivalent moment exists:
the optimistic write happens in the submit handler of the very form the
router intercepts. A runtime↔router handshake could stamp keyed-let
writes made during a mutation-initiating dispatch as provisional under
that mutation, and settle exactly those cells on its response — no
token, no attribute, `useOptimistic` ergonomics with zero client data
layer. Edges to resolve before believing it: async writes after the
dispatch, `preventDefault`-plus-custom-`fetch` flows (no association —
falls back to plain identity rules, arguably correct), and shared cells
written from several forms. The settle token is the right v1 and remains
the escape hatch if this proves out later.

Whichever rung ships, the docs split stays: identity keys
(`by=item.id`) for in-progress-input cells, the settle signal for
pending-confirmation cells, and the self-value key demoted to a
documented anti-pattern for mutation-confirmed state (fine for
derived-overridable cells like the color mixer). Fixture: the drift
repro (fixture 2) should include a rejected-mutation delivery (same key,
same value, error content) and assert the guess is *not* kept under the
settle signal and *is* kept when self-keyed — pinning the difference the
docs teach.

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
`<await(search(query))>` skeleton-flashes on every keystroke client-side,
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
| `useTransition().isPending` | a programmatic pending read — necessary in React because a client state change has no DOM element to mark | a persisted transition always has an initiator element and affected boundary ranges, so attribute-first (`data-marko-pending`, `aria-busy`) reaches the same styling with zero app JS; the programmatic residue (swap a label, true `disabled` semantics) is mostly covered by CSS plus the F6 double-submit guard — hold the "no transport state in templates" line until real demand, then design one boundary-scoped read for both drivers |
| `<Suspense>` reveal rules (fallback on first mount; revealed content never re-hides in a transition; `key=` forces reset; routers "should key automatically") | when stale content may be destroyed | matched boundaries keep stale; `<@placeholder by=>` is the key idiom — aligned on the persisted driver, **contradicted by the client driver today** (F3) |
| coordinated reveal (multiple suspending children per boundary; `SuspenseList`) | staged/grouped appearance | the client runtime already does all-or-nothing per boundary (`AwaitCounter` counts every pending await under one placeholder, dom/control-flow.ts:100-127); the persisted driver's v1 rule aborts >1 pending await per placeholder body into a full navigation — that limit now looks like the *standard idiom* rather than an edge, prioritize lifting it |
| `useOptimistic` (overlay over canonical state; auto-revert when the action settles; **rebases** queued deltas onto refreshed canonical state) | optimistic writes must never become truth, and must survive canonical refreshes that don't answer them | the keyed cell forks locally and reconciles by identity — same visible outcomes for the single-mutation case *given F1's version key* (revert-on-rejection included), with zero client bookkeeping; diverges under multiple in-flight mutations — the rebase gap, below |
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

**The rebase gap** — the one capability `useOptimistic` has that the
keyed cell lacks. React re-applies pending optimistic deltas on top of
every refreshed canonical value, so N overlapping mutations never
visibly regress. The keyed cell re-seeds on key change and discards
local writes, so two rapid bumps flicker even with F1's version key and
F2's ordering: click-click takes the cell to 7 locally; mutation #1's
delivery re-seeds to 6 (its authoritative answer); mutation #2's
delivery re-seeds to 7. The fix is **not** a client delta queue (that is
the data layer the charter rightly rejects) but transition-scoped
reconciliation, one flag deep: **while a mutation navigation is in
flight or queued — state F2's router change already tracks — keyed
re-seeds defer**, and the final mutation's delivery reconciles the cell.
That is `useOptimistic`'s "overlay holds until the actions settle"
expressed in wire terms, with no queue, no reducer, and no new authoring
surface. Better still, F1's settle token absorbs this for free: a token
that bumps only when the *final* pending mutation's response applies IS
the deferral — cells keyed on it cannot re-seed mid-queue, so no
separate flag reaches the merge dispatch at all. Ship the persisted half
without it (it eliminates a flicker, not an error state), but spec the
token's bump-on-final-settle rule with this in mind.

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
  <let/cart=$global.data.cart by=$global.settled/>
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
  event listener, no app-maintained version; the POST rides the router,
  the settling PRG delivery bumps the token (F1 — strawman name), the
  provider re-seeds, every consumer re-runs. Failure UX is
  server-rendered content plus the settle-driven rollback. This example
  should headline the optimistic doc. (Until the token exists, the same
  shape runs today on a session-stored version key — F1's interim.)
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
2. **Router mutation ordering + the settle token** (F2, F1) — the
   ordering fix is a prerequisite for the persisted half of `<let by>`
   and independently fixes stale-PRG races; the settle token is a few
   lines on top of the same queue state and removes the version-key
   boilerplate before anyone learns it.
3. **`<let by>` client half on main** (compiler 1–4 + `_let_by`), with
   the F5 error, F4 lint, F1 fixtures, and the positional-loop fixture.
4. **`<let by>` persisted delivery** on the feature branch (compiler 5 +
   merge dispatch), drift repro + rejected-mutation repro green.
5. **`<context>`** per its own plan (reason-threading prototype first),
   then the provider composition replaces `let-global` in the benchmark —
   **skip the interim "bless `let-global` + globals-merge hook" step**
   (optimistic doc phase 5): the context branch evaluation already
   validated the replacement end-to-end, so blessing the workaround now
   just creates a second migration.
6. **`by=` on `<@placeholder>` for client re-awaits** (F3) + the shared
   anti-flash hold — this is the "async transitions" DX milestone, see
   below.
7. View Transitions behind the run option (both swap paths already
   funnel through `applyBoundaryBody`/`dismissPlaceholder` — single
   choke points on each driver, so this stays cheap after F3).

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

Two deliberate omissions to keep: no template-visible transport state
(`isPending` props for navigations), and no client data layer. The
cross-check section makes the case for the first precisely: React needs
`isPending`/`useFormStatus` as *hooks* because a client state change has
no DOM element to mark, while a persisted transition always has an
initiator element and boundary ranges an attribute can style — the
programmatic residue is small and shrinks further once the double-submit
guard exists. If demand for a programmatic pending read materializes
(Svelte's `$effect.pending` and React's `isPending` are the precedents),
design it once for both drivers as a boundary-scoped compiled signal —
but let the attribute prove insufficient first.

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
  prerequisite, and F1's settle signal independently shrinks the blast
  radius (monotonic settle keys converge on any later delivery). The
  rebase-gap deferral (React cross-check) collapses into the token's
  bump-on-final-settle rule.
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

1. Rejected-mutation delivery: same data + error content → a let keyed
   on the settle signal (token, or interim version key) re-seeds; a
   self-keyed let keeps the guess (pins F1's taught difference).
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
8. Two overlapping mutations (with F2's ordering + the token's
   bump-on-final-settle): the cell never shows the intermediate
   authoritative value — local 7 holds through mutation #1's delivery
   and reconciles once on #2's (pins the rebase-gap behavior from the
   React cross-check).

---

*Also recorded while reviewing, out of band: the workspace benchmark
app's `submit-form.ts` flow leaves failed mutations as unhandled promise
rejections with committed optimistic writes — superseded by the
composition above, but if the workspace app outlives this branch it
deserves a `try/catch`.*
