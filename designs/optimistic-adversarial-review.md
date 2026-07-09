# Optimistic/pending design — adversarial review record (rounds 1–2)

Status: **review record, 2026-07-09.** Round 1: four independent
adversarial reviews were run against [optimistic.md](./optimistic.md)
(the gate cell + pending surfaces) and the related surfaces in
[let-by-review.md](./let-by-review.md) /
[optimistic-handoff.md](./optimistic-handoff.md), each from a different
lens: language/API consistency, runtime mechanics (code-receipt level),
real-application DX (complete app code written in the candidate APIs),
and alternatives (steelman the graveyard, invent new contenders). This
document is the consolidated verdict ledger and the composite design
that survived. **Round 2** (below) then verified the composite's
repairs against the code; it upheld the architecture but respecified
two repairs that were unimplementable as written and re-priced the
early-input claims. Round-1 text is kept verbatim as the record —
passages the second round superseded are marked inline.

## Headline verdicts

| Element                                                                                           | Verdict                                     | Deciding evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Gate cell** (exposed/shadow/held value lifecycle)                                               | **SURVIVES** — all four lenses              | Alternatives lens failed to construct a value-lifecycle failure; every graveyard option and five invented contenders die on the gauntlet (rejected-mutation-with-sparse-response, double-click rebase, no-news-vs-same-news) the shadow slot passes by construction. DX lens: beats React 19 on reconcile/rollback (zero reconcile code).                                                                                                                                            |
| Predicate-at-emission (as specced)                                                                | **WOUNDED** → repaired                      | Static one-channel binding strands await-param cells in persisted apps (R-F3); write→queue microtask gap lifts fresh holds (R-F4); emission-gated registration + dirty-check swallowing = permanent hold (R-F6). Repairs below.                                                                                                                                                                                                                                                      |
| Held-cells boundary hook (as specced)                                                             | **KILL** → redesigned                       | Three `AwaitCounter.c()` implementations; one is the document's inline reorder runtime, which cannot call lazily-loaded modules — resumed still-streaming boundaries never notify (R-F2). Redesign: wrap-on-resume + global registry.                                                                                                                                                                                                                                                |
| `pending:=` drive                                                                                 | **KILL**                                    | The language's first and only output-only `:=` — inverts the authority contract every existing bind site enforces (controllables snap back to the author's value; `context.md` states the honesty rule); the desugar erases `bound` so the shape can't even be policed (L-1/L-2); driven writes are silently dropped when settle fires inside a render flush (`_let` rendering branch, R-F1); self-subscription of the boundary to its own output (L-3); stomp/refcount wart (D, A). |
| `<transition>` tag                                                                                | **KILL**                                    | False-positives on its own motivating example (a card's title link flips "Adding…", A-1); containment anchor undefined for `<button form=…>` (A-2, R-F9); portals silently miss; destroy-mid-pending strands driven state above the swap (R-F8); category-new spooky association mechanism; name collides with View Transitions **on the same roadmap** (L-10); FATAL for library composability — a `<quantity-stepper>` cannot self-contain its pending (D-6).                      |
| Native `pending:=` attrs (`<form pending:=x>`)                                                    | **KILL** (shape), location survives         | Controllables are a closed compiler set keyed to real element IDL; `pending` renders as junk HTML or becomes a secret non-rendering native attr (L-13). The _initiator-element location_ survives via a different shape (below).                                                                                                                                                                                                                                                     |
| `$global.nav`                                                                                     | **KILL** (mechanism), grain survives        | Synthetic globals-only frames dispatch only the root section's `$global` statement — every child template's reader is unreachable, so "readable at any height" has no mechanism (R-F5); click-time `bumpNavEpoch` widens the reorder-discard window to the full round trip with a silent stuck-placeholder corner past `encodeHave`'s 4 KB cutoff (R-F7); namespace squats on the app-owned `$global` bag with build-dependent reactivity (L-9).                                     |
| `<try pending:=>`                                                                                 | KILL (`:=` shape) → replaced by body params | `<try\|{ pending }\|>` is the established platform→body output channel (`<await\|post\|>`, `<for\|item\|>`); params are render-native (`_const` has no `Gen` gate), so the R-F1 dropped-write hazard doesn't apply structurally (L-13/N2).                                                                                                                                                                                                                                           |
| Early-input stamping                                                                              | WOUNDED                                     | Concept confirmed (DX: "the design at its best" for tabs); mechanism inherits R-F5 (child-template chips don't re-run off a synthetic frame) and R-F7 (epoch bump at click). Repairs below.                                                                                                                                                                                                                                                                                          |
| `<let by>` (identity shape)                                                                       | SURVIVES                                    | One DX correction: it is mis-sold for _guarded_ drafts — `by=tab` discards the draft at switch; banking one instance per key is a hand-rolled map, not `by=`. Handoff wording fixed.                                                                                                                                                                                                                                                                                                 |
| Graveyard rejections (version key, `for=`, write-capture, handles, intrinsic, read tag, CSS-only) | All **KILL-STAYS-DEAD**                     | Every rejection sound on its merits — but two recorded _reasons_ were wrong and are repaired: the O2b tree-shape premise is false (tag-var reads hoist template-wide; the real prison is that hoisted reads are getter-shaped, not signal-subscribed, and pluralize under control flow — L-7), and O2d's "secret restriction" objection also applied to the then-accepted `pending:=` (L-1), so it no longer discriminated.                                                          |

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
3. **Task-scoped hold protection** (fixes R-F4). _(Superseded in
   round 2, F2: the click→submit microtask window this bracket
   defended cannot occur — dispatch is one task and frame applies only
   run in network-task checkpoints — while the window that can occur,
   `navigate()`'s entry-import await, was uncovered. Replaced by sync
   queue-insert before `navigate()`'s first `await` plus a
   settle-pass-generation guard.)_ Original spec: a write marks the
   cell held-with-association-pending until the current task drains; an
   emission never lifts a hold younger than the running task, and the
   router inserts into its queue before any stamp/apply it performs.
4. **Settle timing** (fixes R-F11). _(Wording superseded in round 2,
   F3: "synchronous frames applied" is unobservable on a wire with no
   phase marker; the implementable point is per-applied-frame fan-out
   gated on queue-empty.)_ Original spec: "the response's synchronous
   frames applied + mutation queue empty" — stream-completion is
   rejected because it makes rollback latency equal the slowest
   boundary on any async page; boundary-nested sources settle via
   their own boundary events. The rejection stands; only the trigger
   wording changed.

**Boundary settle notification — redesigned** (fixes R-F2). _(The
wrap seam was respecified in round 2, F1: a load-time wrap of
`render.p` is unimplementable — the inline script keeps a local alias
and creates counters continuously; the surviving seams are
`render.j[id]` completion callbacks plus in-place `c` chaining at cell
registration.)_ Original spec: the optimistic/pending module, when it
loads, **wraps** the counters resume attached from the document's
inline reorder runtime (`render.p` entries) in addition to patching
the two module-owned `c()` implementations; notification runs at
**effect time**
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
  ordinary code, and the documented semantics are _resource-sync_
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
  FATAL resolved), and layering-clean (run owns the router _and_ the
  tag; runtime-tags is untouched). `<button form=…>` targets the form
  it names, exactly like the platform. Links get the same treatment via
  the grain-2 value (below) rather than per-anchor state in v1.
- **Page (navigation):** not `$global`. The router _provides_ nav state
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
  hard prerequisite, and the settle-latency coarseness _between
  resources_ (global queue predicate) — now priced honestly: unbounded
  under sustained mutations, with server-stamped per-resource versions
  (harvested from the version-key graveyard) recorded as the future
  refinement.
- Every graveyard rejection stands; two recorded rationales repaired
  (O2b's false lexical premise; O2d-vs-`pending:=` discrimination).

## Open questions after round 1

1. `<form-status>` naming and its exact target-resolution rule
   (closest-form default; named-target override?), and whether links
   need a per-anchor variant in v2 or the nav-context URL comparison
   suffices. _(Resolution mechanics — anchor node, mount moment,
   registry keying — pinned in round 2, F8; naming still open.)_
2. The nav context's provider identity (run's generated wrapper needs a
   stable `from=` name) — coordinates with context.md's `from=` syntax
   question and multi-value provide. _(The provider's write path is
   now specified — round 2, F12; the name is still open.)_
3. ~~The task-drain bracket's precise definition~~ — **answered in
   round 2 (F2)**: the bracket is gone; sync queue-insert +
   settle-pass-generation guard replace it, and the fixture was
   re-aimed at the entry-import gap.
4. ~~Counter-wrap-on-resume details~~ — **answered in round 2 (F1)**:
   load-time wrapping is unimplementable; the seams are `render.j[id]`
   callbacks + in-place `c` chaining at registration, with
   fire-if-already-settled, and the debug assert moved to registration
   and fan-out (an unhooked counter cannot announce its own settle).
5. Whether `onPending` on `<optimistic>` also deserves an `onSettle`
   sibling (distinct moments: held-window close vs each reconciliation)
   — defer until a real consumer appears.

---

# Round 2 — code-grounded verification of the composite

One verification agent re-attacked the round-1 composite against
ground truth: `runtime-tags/src/dom/{control-flow,queue,resume,
signals,abort-signal,scope,schedule,update}.ts`,
`html/inlined-runtimes.debug.ts`, run's `persisted.ts`,
`translator/core/try.ts`, `tags/try.d.marko`, `context.md`, and the
three design docs. Its brief: attack the four repairs themselves, the
new surfaces' edges, and cross-doc consistency. Findings were
adjudicated against the code before applying (the F1 and F2 receipts
were re-verified by hand; the F1 respec below is _cheaper_ than the
verifier's own proposal because adjudication surfaced `render.j` — an
existing module-side hook the verifier's redesign didn't use).

## Round-2 verdict per repair

| Round-1 repair / surface                                 | Verdict                                                                          | Disposition                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Register-at-write + global registry, per-cell predicates | **HOLDS**                                                                        | Kept; three lifetime facts added (F6) and a MARKO_DEBUG rule for writes during render (F11)                                                                                                                                                                                                                                                                             |
| Task-drain bracket                                       | **LEAKS** — defended an impossible window; missed the real one                   | Replaced: sync queue-insert before `navigate()`'s first `await`; pass-generation guard retained for reentrancy (F2, F5)                                                                                                                                                                                                                                                 |
| Settle = "synchronous frames applied + queue empty"      | **UNIMPLEMENTABLE as specced** — no observable event on the wire                 | Replaced: per-applied-frame fan-out gated on queue-empty; sound because `serializedGlobals` rides every frame; residual late-frame flicker recorded (F3)                                                                                                                                                                                                                |
| Wrap-on-resume of inline counters                        | **UNIMPLEMENTABLE as specced** — local alias, continuous creation, captured refs | Replaced: `render.j[id]` completion callbacks + in-place `c` chaining at cell registration + fire-if-already-settled; asserts moved to registration/fan-out (F1)                                                                                                                                                                                                        |
| `onPending` (grain 1)                                    | **LEAKS** — settle fan-out reentrancy loop                                       | Fixed: snapshot iteration + pass-generation guard on the settle path; observable-state contract and SSR-inert sentence written (F5)                                                                                                                                                                                                                                     |
| `<form-status>` (grain 3)                                | **HOLDS** as concept; anchor + mount moment were unspecced                       | Pinned: comment-node anchor via one small runtime-tags primitive (layering claim amended — runtime-tags is _not quite_ untouched); resolution at mount effect post-insertion; element-keyed registry semantics (F8)                                                                                                                                                     |
| Nav context (grain 2) + early-input                      | Mechanism **HOLDS**; surrounding claims leaked badly                             | Claims re-priced in all four docs: `$global`-keyed sites react at first frame, not click; interaction-time recede and URL-keyed resets-at-click were the dead mechanism's promises; build orders re-sequenced (early-input now rides the `<optimistic>`/nav-provider step, after `<context>`); provider write path specified (wrapper-owned `<let>` + setter — F4, F12) |
| `<try\|{ pending }\|>` params                            | **HOLDS** structurally; two gaps                                                 | Pinned: param reads inside `@placeholder`/`@catch` bodies are a compile error in v1; flips fired from the settle hook ride the `queueRender` + `schedule()` bracket (F7)                                                                                                                                                                                                |

Cosmetic: the handoff's §9 still called the settle point an open
question after optimistic.md had decided it (F9 — reconciled), and the
fixture list had no coverage for `onPending`, the nav context, revised
early-input, settle latency, or the second inline-counter load order
(F10 — fixtures 14–17 added; 5 re-aimed; 7 doubled; 13 extended).

## What round 2 did _not_ change

No round-1 kill was resurrected and no new kill was scored. The value
lifecycle — gate cell, shadow slot, channel-bound association,
handler-shaped notification, the three grains and their owners — is
untouched two rounds running. Every change was to _mechanism wording_
(how a repair is implemented) or _claim honesty_ (what the surviving
early-input mechanism actually delivers), not to the architecture.

## Round-2 residuals (recorded, not blocking)

1. A source that materializes only in a later frame of its response
   settles one frame early against a stale shadow — wrong-then-right
   flicker, bounded by the sparse contract; accepted over a sync-done
   wire marker.
2. Whether the click-time-recede authoring pattern (keying a boundary
   off a nav-context value) should be blessed as the documented recipe
   or a future mechanism should restore the free version — parked with
   the nav-provider design.
3. `<form-status>` naming, and the runtime-tags position primitive's
   exact shape (it should serve the anchor need and nothing more).
