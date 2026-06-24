# Proposal: Non-Observable "Live Reads"

Status: Draft / for implementation
Scope: `@marko/runtime-tags` (Marko 6) compiler + DOM runtime
Audience: an engineer/agent picking this up in isolation

---

## 1. One-paragraph summary

A value that is read **only from inside a function that runs later** (an event
handler, and potentially other deferred callbacks) does not need a reactive
subscription to that value. The function re-reads the value live from the scope
each time it runs, so re-binding/re-running the function when the value changes
is pure waste. Today Marko treats every cross-section read the same way — it
wires up a closure subscription so the consumer re-runs when the value changes.
For a keyed `<for>` whose row handlers read parent state, that means **every row
re-binds its handlers on every change to that state** — O(rows) wasted work on
append/update/remove/clear. This proposal asks for a general, well-specified
notion of a **"live read"**: a read the compiler can prove is *non-observable*
(nothing can observe whether the function re-ran), and therefore can be served
by a live scope lookup at call time instead of a subscription.

A **narrow, already-shipped** version of this exists (see §4). The task here is
to design and build the **general, robust** version, with the correctness
invariants in §6 as hard requirements.

---

## 2. Motivation

Marko 6 is fine-grained and value-based: a cross-section read normally compiles
to a *closure subscription* so the reading section re-runs when the upstream
value changes. This is correct and necessary for **rendering** reads (a row that
displays `parentValue` must update when `parentValue` changes).

It is *unnecessary* for reads that only happen inside a deferred function whose
re-execution is unobservable. The canonical case:

```marko
<for|row| of=rows by="id">
  <button onClick() {
    rows = rows.filter((r) => r !== row)   // reads `rows` (parent) live when clicked
  }>x</button>
</for>
```

Here `rows` is read cross-section, but only inside the click handler. The handler
reads `rows` from the owner scope *at click time*. Re-binding the handler when
`rows` changes produces an identical handler — no observable difference — yet
Marko re-runs the binding for all rows on every `rows` change.

This pattern dominates real list UIs (every row with a delete/select/edit
handler that touches parent state) and is a measurable cost on the
js-framework-benchmark create/append/update/remove/clear rows.

---

## 3. Core concept

Define a read as **live (non-observable)** when **both** hold:

1. **Deferred**: the read occurs inside a function value (not in render/derivation
   that runs during reconciliation), so its actual evaluation is deferred to when
   that function is invoked.
2. **Non-observable**: nothing can observe *whether or when* that function
   re-runs. If the only effect of the read is to feed a function body that is
   invoked externally (a DOM event, a lifecycle callback the user triggers), then
   re-binding that function on change is a no-op from any observer's standpoint.

For a live read, the value should be obtained by a **live lookup against the
owning scope at invocation time**, and the consuming function should be **bound
once** (when its branch is created) with **no subscription** to the value.

The user's original framing, verbatim, to preserve intent:

> A "read" knows whether or not it is able to be read "live". A read can be read
> live if it is inside a function and when there is nothing that could observe a
> change in the function. For native tag event handlers this should always be the
> case.

Native-tag event handlers are the obvious first-class case ("this should always
be the case"), but the abstraction should be defined in terms of the two
properties above so it can extend to other provably-non-observable callbacks.

---

## 4. What already exists (starting point, not the goal)

A **narrow** version shipped as commit `perf(runtime-tags): bind native event
handlers once in keyed loops`. It is intentionally conservative and only removes
the *owner-change re-invocation*, not the subscription machinery itself. Read it
first — it encodes several of the invariants below by construction.

What it does:

- Marks native-tag event-handler attribute values with an `isEventHandler` flag
  (analogous to the existing `isEffect` flag), propagated through reference
  merging with **AND** semantics (a merged expression is only an event handler if
  *every* contributor is).
- Computes, per binding, the subset of its closure sections in which **every**
  read is an event handler (`liveHandlerClosureSections`). A section with any
  non-handler read of that binding is disqualified (mixed → normal subscription).
- In the value-signal codegen, for those purely-live sections, **skips emitting
  the owner-change re-invocation** (the call that re-runs the section's closure
  when the value changes). Everything else — populate, the live owner read, SSR
  serialization, the one-time bind at branch creation — is left untouched.

Why it's narrow / why it isn't the robust version:

- It only suppresses the **re-invocation**, leaving the closure wiring, the
  closure-scope subscription set, and (on SSR) the serialized subscription in
  place. So the subscription overhead at *create* time and the SSR-resume re-bind
  still exist; only the steady-state re-bind on change is removed.
- It is hard-coded to **native-tag event handlers in the value-signal path**. It
  does not generalize the "non-observable" predicate, does not cover other
  deferred-callback shapes, and does not attempt the full "this read never needs
  a subscription at all" treatment.
- It leans on the existing closure machinery rather than introducing a clean
  "live read" code path, so the *generated code still allocates and wires the
  closure* even though it never fires.

The robust version should treat live reads as a first-class kind of read with its
own lowering, rather than a special-case suppression bolted onto the closure
path.

---

## 5. Goals for the robust version

1. **A general predicate.** A single, well-specified function `isLiveRead(read)`
   (and the binding-level/section-level aggregations it implies) expressed in
   terms of §3's two properties, not hard-coded to event handlers. Event handlers
   are one provider of "non-observable deferred function"; the design should make
   it easy to add others without touching the lowering.
2. **A clean lowering.** A live read should lower to a live scope lookup at
   call time and **no** subscription artifacts: no closure-scope membership, no
   re-invocation, no `_or`/gating dependency, and ideally no closure wrapper in
   the generated output. The output should be visibly leaner than today.
3. **Smaller output, not larger.** Net generated-code size must be neutral or
   smaller. (The shipped narrow version is size-neutral-or-smaller; do not
   regress that.)
4. **Correctness parity across DOM, SSR, and resume** (see §6).
5. **No behavioral change for non-live reads.** Mixed reads (same binding read
   both live and observably) must keep full reactivity.

---

## 6. Correctness invariants (hard requirements)

These are the load-bearing constraints. Each maps to a concrete failure observed
while prototyping. Treat them as acceptance criteria.

### I1 — The value must still be populated into the owning scope.
A live read is a *live lookup* against the owner scope; that lookup only works if
the value is actually written into that scope. **Removing a read from reactive
tracking must not cause the binding to be pruned / its scope write to be
dropped.**

> Failure mode observed: when a parent value was read *only* by a handler and we
> removed it from reference tracking, the binding was pruned and its assignment
> compiled to a bare expression statement (`42;` instead of writing the scope
> slot). At runtime the live lookup returned `undefined`. A behavior test showed
> the handler producing `"undefined"`.

The compiler currently couples "is this value populated / does it get a scope
slot" to the *same* reference/closure bookkeeping that drives subscriptions
(`hasSideEffect`, `closureSections`, pruning in references analysis). The robust
design must **decouple "populate/serialize this value into its scope" from
"subscribe a consumer to this value."** A live read keeps the former and drops
the latter.

### I2 — Multi-dependency gating must stay consistent.
Handlers frequently read several bindings (e.g. a loop item plus parent state).
These compile to a combined dependency/gating construct. If a live read is
removed from a consumer's subscription set, it must be removed **consistently
everywhere that consumer's dependency count/gating is derived** — you cannot
leave a value counted as a pending dependency while removing the signal that
would satisfy it.

> Failure mode observed: removing a value from the closure but leaving it in the
> consumer's `referencedBindings` left a stale "pending dependency" count
> (`_or(..., pending=N-1)`); the satisfying signal never arrived, so the handler
> never bound and never fired.

### I3 — Same-section reads must keep normal populate + gating.
The "live" property is about *cross-section, non-observable* reads. A read of a
value in the **same** section/scope as the consumer (e.g. the loop item itself,
or a local index that the handler also consumes) is the consumer's own data and
must keep its normal populate and gating. Do not over-apply liveness to
same-section reads.

> Failure mode observed: treating a same-section value (a loop index consumed
> only by the handler) as live removed the value signal that populated it, so the
> handler referenced an undefined slot at runtime.

The shipped narrow version encodes this as `binding.section.depth <
read.section.depth` (only strictly-cross-section reads are eligible). Keep an
equivalent guard.

### I4 — Mixed reads disqualify.
If a binding is read both live (handler) **and** observably (render/derivation)
**in the same consuming section**, that section is **not** eligible — the
observable read needs the subscription. Aggregate with **AND** across all reads
that resolve to the same (binding, section): any non-live read ⇒ normal
treatment. (And reference-merging must propagate liveness with AND semantics so a
merged expression isn't mislabeled live.)

### I5 — SSR + resume must remain correct.
On SSR, the value still needs to be **serialized** so the client can read it live
after hydration (this is I1 for the resume path). The handler is bound on the
client during resume and reads the serialized value. Two acceptable strategies,
to be chosen explicitly:

- **Conservative (what the narrow version does):** keep the SSR-side
  subscription serialization as-is; only optimize the client steady-state.
  Resume re-binds once, which is correct (just not optimal).
- **Full:** also drop the serialized subscription for purely-live sections, while
  still serializing the *value*. This is more work and must be validated against
  the resume behavior tests, including `<try>`/placeholder and async boundaries.

Whichever is chosen, the **value serialization must not be dropped** (I1), and
resume + interaction behavior snapshots must be unchanged.

### I6 — One-time bind still happens at branch creation.
Removing the subscription must not remove the **initial** binding of the function
when its branch/row is created (and re-created on reconcile when its own
inputs change). The handler must be bound exactly once per live branch, reading
live thereafter.

### I7 — No behavior/SSR snapshot changes; only compile-output changes.
A correct implementation changes **generated code** (and ideally shrinks it) but
must leave **every behavior snapshot and every SSR/HTML snapshot byte-identical**
for existing fixtures. Compile-output snapshot churn is expected and reviewable;
behavior/HTML churn is a red flag.

---

## 7. Compiler/runtime terrain (orientation, not prescription)

So the implementer knows where the coupled concerns live. Names are pointers, not
a mandated design.

- **Reference analysis** (`src/translator/util/references.ts`): builds bindings,
  their reads, and the cross-section relationships. This is where the
  populate-vs-subscribe coupling lives (binding pruning by read count; the loop
  that assigns closure sections / owner-read / serialize reasons). The
  decoupling in I1 most likely starts here.
- **Signal/codegen** (`src/translator/util/signals.ts`): turns bindings + reads
  into value signals, closures, gating (`_or`), and the per-section
  re-invocation wiring. `hasSideEffect` and the closure-section iteration are the
  spots that conflate populate with subscription.
- **Native tags** (`src/translator/visitors/tag/native-tag.ts`): where event
  handler attribute values are recognized; the natural place to *originate* a
  liveness marker (today: `isEventHandler`). Generalizing means originating the
  marker from a predicate rather than a tag-type check.
- **DOM runtime** (`src/dom/control-flow.ts`, `src/dom/signals.ts`): the
  closure-subscription primitives (`_closure`, the closure-scope subscription
  set, the for/list closure re-invocation) and the live owner read. A clean
  live-read lowering may warrant a dedicated runtime primitive (bind-once, no
  subscribe) instead of reusing the closure path.

The key structural insight from prototyping: in today's code, a single mechanism
(closure-section membership) drives **four** things at once — (a) populate the
value into its scope, (b) serialize it for resume, (c) subscribe the consumer,
(d) re-run the consumer on change. The robust design needs (a) and (b) to be
reachable **without** (c) and (d) for live reads.

Also note (learned the hard way): the loop **create path defers per-row work** —
a new branch's setup and param value-signals are *queued* and read their
per-row inputs at flush time, not synchronously during the loop. Do not assume
loop args/closures are consumed synchronously; two create-path micro-opts
(inlining setup; reusing the per-row args tuple) broke because of this deferral.

---

## 8. Validation requirements

1. **Full runtime-tags test suite green** in debug mode
   (`MARKO_DEBUG=1 npx mocha` from repo root). Expect only **compile-output**
   snapshot changes; assert **no** behavior (`render*.md`) or HTML/SSR snapshot
   changes (I7).
2. **Targeted fixtures** that must exist/pass (add if missing):
   - keyed `<for>` with a row handler that reads parent state, mutates it, and is
     clicked across SSR-resume and CSR (the core win case).
   - a parent value read **only** by a handler, displayed nowhere else (guards
     I1 — the value must still be serialized/populated; click must read the real
     value, not `undefined`).
   - a handler reading a cross-section value **and** a same-section value (guards
     I2/I3 — gating consistent, same-section value still populated).
   - the same binding read by a handler **and** by a text/render expression in the
     same row (guards I4 — must stay fully reactive).
   - a recursive/nested-for structure with handlers (guards against
     ordering/edge regressions; a naive create-path change broke
     `basic-inert-collapsible-tree`).
3. **Generated-output review** on the core fixtures: confirm the per-row
   re-invocation / subscription is gone and output is smaller.
4. **Bundle size**: `npm run build && npm run build:sizes` — net neutral or
   smaller for the runtime; generated app output should shrink.
5. **Benchmark sanity** (optional, noisy): js-framework-benchmark
   create/append/update/remove/clear should not regress and should improve where
   per-row handler re-binding was the cost.

---

## 9. Open questions / decisions for the implementer

1. **Predicate generality.** Define `isLiveRead` precisely. Start with native
   event handlers; decide whether other deferred callbacks (lifecycle, other
   non-rendering function attributes) qualify, and prove non-observability for
   each before including it. Err toward *fewer* providers, clearly justified.
2. **Decoupling strategy for I1/I2.** Introduce an explicit "populate/serialize
   but do not subscribe" path, vs. a flag threaded through the existing analysis.
   The cleanest result probably separates "this value needs a scope slot /
   serialization" from "this value has reactive consumers."
3. **Dedicated runtime primitive?** Whether to add a bind-once-no-subscribe live
   read/closure primitive in the DOM runtime, or keep reusing the closure path
   with the re-invocation suppressed. A dedicated primitive likely yields smaller
   output and clearer semantics, at the cost of a new runtime export (watch
   bundle size).
4. **SSR strategy (I5).** Conservative (keep serialized subscription) vs. full
   (drop it, keep value serialization). Recommend landing conservative first,
   then full as a follow-up gated on resume tests.
5. **Assignment interaction.** Handlers often *write* the value they live-read
   (`rows = rows.filter(...)`). Confirm the assignment/`assignmentSections` path
   is independent of the read-subscription change (writes don't subscribe), and
   that triggering the write still drives the normal reactive update of
   *observable* consumers (the list reconcile, other renders).

---

## 10. Out of scope

- Per-row signal granularity / avoiding list reconciliation on update (a
  different, app-architecture concern).
- Reconciler algorithm changes.
- Any change that increases bundle size to gain runtime speed.

---

## 11. Success criteria (definition of done)

- A general, documented `isLiveRead` predicate with event handlers as the first
  provider, replacing the hard-coded narrow check.
- Live reads lower to a live scope lookup + one-time bind with **no** subscription
  artifacts; generated output is smaller on the target fixtures.
- All invariants I1–I7 hold, demonstrated by the §8 fixtures and a green suite
  with no behavior/SSR snapshot changes.
- Bundle size neutral-or-smaller.
- The narrow shipped version is either subsumed by the general path or explicitly
  retired in favor of it.
