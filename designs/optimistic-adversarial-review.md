# Optimistic/pending design — adversarial review record (round 1)

Status: **review record, 2026-07-09.** Four independent adversarial
reviews were run against [optimistic.md](./optimistic.md) (the gate
cell + pending surfaces) and the related surfaces in
[let-by-review.md](./let-by-review.md) /
[optimistic-handoff.md](./optimistic-handoff.md), each from a different
lens: language/API consistency, runtime mechanics (code-receipt level),
real-application DX (complete app code written in the candidate APIs),
and alternatives (steelman the graveyard, invent new contenders). This
document is the consolidated verdict ledger and the composite design
that survived; the surviving changes are applied to optimistic.md and
the handoff in the same change set.

## Headline verdicts

| Element | Verdict | Deciding evidence |
| --- | --- | --- |
| **Gate cell** (exposed/shadow/held value lifecycle) | **SURVIVES** — all four lenses | Alternatives lens failed to construct a value-lifecycle failure; every graveyard option and five invented contenders die on the gauntlet (rejected-mutation-with-sparse-response, double-click rebase, no-news-vs-same-news) the shadow slot passes by construction. DX lens: beats React 19 on reconcile/rollback (zero reconcile code). |
| Predicate-at-emission (as specced) | **WOUNDED** → repaired | Static one-channel binding strands await-param cells in persisted apps (R-F3); write→queue microtask gap lifts fresh holds (R-F4); emission-gated registration + dirty-check swallowing = permanent hold (R-F6). Repairs below. |
| Held-cells boundary hook (as specced) | **KILL** → redesigned | Three `AwaitCounter.c()` implementations; one is the document's inline reorder runtime, which cannot call lazily-loaded modules — resumed still-streaming boundaries never notify (R-F2). Redesign: wrap-on-resume + global registry. |
| `pending:=` drive | **KILL** | The language's first and only output-only `:=` — inverts the authority contract every existing bind site enforces (controllables snap back to the author's value; `context.md` states the honesty rule); the desugar erases `bound` so the shape can't even be policed (L-1/L-2); driven writes are silently dropped when settle fires inside a render flush (`_let` rendering branch, R-F1); self-subscription of the boundary to its own output (L-3); stomp/refcount wart (D, A). |
| `<transition>` tag | **KILL** | False-positives on its own motivating example (a card's title link flips "Adding…", A-1); containment anchor undefined for `<button form=…>` (A-2, R-F9); portals silently miss; destroy-mid-pending strands driven state above the swap (R-F8); category-new spooky association mechanism; name collides with View Transitions **on the same roadmap** (L-10); FATAL for library composability — a `<quantity-stepper>` cannot self-contain its pending (D-6). |
| Native `pending:=` attrs (`<form pending:=x>`) | **KILL** (shape), location survives | Controllables are a closed compiler set keyed to real element IDL; `pending` renders as junk HTML or becomes a secret non-rendering native attr (L-13). The *initiator-element location* survives via a different shape (below). |
| `$global.nav` | **KILL** (mechanism), grain survives | Synthetic globals-only frames dispatch only the root section's `$global` statement — every child template's reader is unreachable, so "readable at any height" has no mechanism (R-F5); click-time `bumpNavEpoch` widens the reorder-discard window to the full round trip with a silent stuck-placeholder corner past `encodeHave`'s 4 KB cutoff (R-F7); namespace squats on the app-owned `$global` bag with build-dependent reactivity (L-9). |
| `<try pending:=>` | KILL (`:=` shape) → replaced by body params | `<try|{ pending }|>` is the established platform→body output channel (`<await|post|>`, `<for|item|>`); params are render-native (`_const` has no `Gen` gate), so the R-F1 dropped-write hazard doesn't apply structurally (L-13/N2). |
| Early-input stamping | WOUNDED | Concept confirmed (DX: "the design at its best" for tabs); mechanism inherits R-F5 (child-template chips don't re-run off a synthetic frame) and R-F7 (epoch bump at click). Repairs below. |
| `<let by>` (identity shape) | SURVIVES | One DX correction: it is mis-sold for *guarded* drafts — `by=tab` discards the draft at switch; banking one instance per key is a hand-rolled map, not `by=`. Handoff wording fixed. |
| Graveyard rejections (version key, `for=`, write-capture, handles, intrinsic, read tag, CSS-only) | All **KILL-STAYS-DEAD** | Every rejection sound on its merits — but two recorded *reasons* were wrong and are repaired: the O2b tree-shape premise is false (tag-var reads hoist template-wide; the real prison is that hoisted reads are getter-shaped, not signal-subscribed, and pluralize under control flow — L-7), and O2d's "secret restriction" objection also applied to the then-accepted `pending:=` (L-1), so it no longer discriminated. |

Recurring root cause (runtime lens): the spec treated "apply", "emission",
and "settle" as one clean event each; the runtime has multiple
implementations per event (three `c()`s; merge-phase vs render-phase
dispatch; per-section `ifPresent`-gated `$global` statements), each with
different `rendering`/`updating`/`Gen` context — and `_let`'s rendering
branch turns any callback fired from the wrong context into a silent
no-op. Every runtime FATAL was an instance of that mismatch.

## The composite that survived (now the design in optimistic.md)

**Value lifecycle — unchanged.** `<optimistic/x=source>`:
exposed/shadow/held, guesses may carry presentation metadata, sparse
convergence via the shadow slot. Grammar patches: a bound default
attribute (`<optimistic/cart:=src/>`) and `valueChange=` are compile
errors (the former currently desugars to a silent unreactive source
mutation); the "compiles as `<const>` when never written" downgrade is
kept but its load-bearing invariant is now recorded — every
cross-template write channel must desugar to a lexically visible
assignment in the declaring template (writable context does; any future
channel that doesn't must re-visit).

**Association/settle — repaired in four places:**

1. **Register at write, not at emission** (fixes R-F6): the write path
   registers the held cell (its statically-passed boundary accessor
   travels with it), so swallowed emissions can no longer swallow
   registration.
2. **One global held-cell registry with per-cell predicate re-check**
   (fixes R-F3): every settle event — router queue-empty, any boundary
   settle, catch — fans out over the registry; each cell re-checks its
   own predicate (boundary pending? router queue non-empty?). Lifetime:
   deregistered at settle and via the scope's abort signal
   (`subscribeToScopeSet`'s cleanup pattern; fixes the R-F8 leak).
3. **Task-scoped hold protection** (fixes R-F4): a write marks the cell
   held-with-association-pending until the current task drains; an
   emission never lifts a hold younger than the running task, and the
   router inserts into its queue before any stamp/apply it performs.
   This is a one-microtask bracket, not write-capture: no per-cell
   mutation tagging, just "don't let in-flight deliveries settle a
   guess made in a task that hasn't finished starting its navigation."
4. **Settle timing** (fixes R-F11): the persisted settle point is "the
   response's synchronous frames applied + mutation queue empty" — the
   former contingency is the design; stream-completion is rejected
   because it makes rollback latency equal the slowest boundary on any
   async page. Boundary-nested sources settle via their own boundary
   events.

**Boundary settle notification — redesigned** (fixes R-F2): the
optimistic/pending module, when it loads, **wraps** the counters resume
attached from the document's inline reorder runtime (`render.p`
entries) in addition to patching the two module-owned `c()`
implementations; notification runs at **effect time**
(`queueEffect`), wrapped in its own try/catch so a throwing app
callback can neither corrupt an apply nor trigger the fallback ladder
(fixes R-F1's error channel). The doc's overlapping-re-await and catch
mechanics are corrected to match the code: a superseded promise fires
neither params nor `c()` (`thisPromise` guard), and the counter never
exceeds one for re-awaits — the end states were right, the recorded
mechanism was not (R-F10).

**Pending surfaces — replaced.** All platform pending notification is
handler-shaped (`on*` — the platform-notification convention
`<lifecycle onMount onUpdate onDestroy>` already establishes on a core
tag), invoked at effect time, never `:=`:

- **Resource (cell):** `<optimistic/cart=src onPending(p) { syncing = p }/>`
  — handler-only; the author owns the state it drives, aggregation is
  ordinary code, and the documented semantics are *resource-sync*
  (held window), explicitly not per-interaction (the DX lens showed
  cell-pending mistaken for a per-row spinner ships wrong UI).
- **Inbound boundary:** `<try|{ pending }|>` body params — the
  established output channel, render-native, body-scoped (which is the
  grain's own definition of local; the old outside-the-boundary example
  was reassigned).
- **Outbound (interaction):** run-owned, DOM-grounded, `useFormStatus`-
  shaped: a run taglib tag (working name `<form-status/p>`) that
  resolves its enclosing `<form>` the way the platform itself does
  (`closest("form")` — nearest-form is DOM semantics: `input.form`,
  fieldset disabling — not framework magic-nearest) and subscribes to
  that element's navigation state in the router's per-element registry.
  This is per-instance by construction (loops free), library-composable
  (a `<quantity-stepper>` ships its own `<form-status/busy>` — the D-6
  FATAL resolved), and layering-clean (run owns the router *and* the
  tag; runtime-tags is untouched). `<button form=…>` targets the form
  it names, exactly like the platform. Links get the same treatment via
  the grain-2 value (below) rather than per-anchor state in v1.
- **Page (navigation):** not `$global`. The router *provides* nav state
  through the context mechanism (`context.md`) from run's generated
  route wrapper — reactive in any template via an explicit consume,
  collision-free (no `$global` squatting), absent-not-frozen on
  non-persisted builds, and requiring no synthetic-frame fan-out at all
  (context's provider-scope subscription Set is the delivery). Shape:
  `{ pending, url, method }` (the alternatives lens's enrichment —
  per-link pending derivable by URL comparison with zero per-anchor
  state). This makes grain 2 a consumer of context.md rather than a new
  mechanism, and adds to context.md's motivation (alongside the
  cart+syncing multi-value-provide case).

**Early-input stamping — mechanism revised:** the click-time stamp must
not ride `createUpdate` (R-F7: the epoch bump would discard
pre-navigation reorder chunks for the whole round trip, with a silent
stuck-placeholder corner past the 4 KB echo cutoff) and cannot reach
child sections through a synthetic frame anyway (R-F5). With grain 2 on
context, the same provider carries the optimistic URL (`nav.url` stamps
at click; consumers re-run through context fan-out), and `bumpNavEpoch`
stays at first-response time. The chip example moves from "free via
globals re-run" to "free via the nav context" — one mechanism fewer.

**Router surface additions recorded** (DX lens; run-roadmap items, not
optimistic.md's to design): programmatic `navigate(href, { replace })`
(today `form.requestSubmit()` is the entire programmatic API and every
debounced-search tick is a history entry), navigation guards with
defined listener-phase ordering vs author `preventDefault`, and the
existing `marko-run:navigate` event documented as the sanctioned
low-level hatch (it is load-bearing in the wild and appears in no
surface inventory).

**Escape hatch pre-decision** (alternatives lens): if custom-`fetch`
flows (neither navigate nor re-await) ever demonstrate the need, the
slot is `guess(value, untilPromise)` — an ordinary import producing a
branded value the cell's write path recognizes — not `for=` refs and
not async-handler transitions. Deferred on the same evidence standard
as `for=`.

## What did not change

- The gate cell's three paths, the shadow-slot sparse argument, guesses
  carrying presentation metadata, `<let by>` scoped to identity,
  CSS attributes + `aria-busy` as layer 0, F2 (mutation ordering) as a
  hard prerequisite, and the settle-latency coarseness *between
  resources* (global queue predicate) — now priced honestly: unbounded
  under sustained mutations, with server-stamped per-resource versions
  (harvested from the version-key graveyard) recorded as the future
  refinement.
- Every graveyard rejection stands; two recorded rationales repaired
  (O2b's false lexical premise; O2d-vs-`pending:=` discrimination).

## Open questions after round 1

1. `<form-status>` naming and its exact target-resolution rule
   (closest-form default; named-target override?), and whether links
   need a per-anchor variant in v2 or the nav-context URL comparison
   suffices.
2. The nav context's provider identity (run's generated wrapper needs a
   stable `from=` name) — coordinates with context.md's `from=` syntax
   question and multi-value provide.
3. The task-drain bracket's precise definition (microtask vs
   `requestSubmit` re-entry) — needs a fixture with a click handler
   that writes, then programmatically submits.
4. Counter-wrap-on-resume details for the inline reorder runtime
   (`render.p` entries) and MARKO_DEBUG assertions for unwrapped
   counters.
5. Whether `onPending` on `<optimistic>` also deserves an `onSettle`
   sibling (distinct moments: held-window close vs each reconciliation)
   — defer until a real consumer appears.
