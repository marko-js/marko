# `<let by=>` — keyed state: actionable plan

Status: **proposal — not built.** Companion to
[persisted-pages-optimistic-transitions.md](./persisted-pages-optimistic-transitions.md)
(layer 3, which motivates this) and [context.md](./context.md) (the
propagation half; the two compose but ship independently). This document
is the isolated implementation plan for the language feature itself.

## What it is

An opt-in `by=` attribute on `<let>` that keys the **identity** of the
state instance — the same word `<for by=>` uses for row identity (see
the naming note in the open questions): one state instance per key
value.

```marko
<let/draft=item.text by=item.id/>
```

- **Key unchanged across a re-render** → same instance: local writes
  survive, the incoming `value=` is ignored (today's behavior).
- **Key changed** → different instance: the `<let>` re-initializes from
  `value=` and stores the new key. Comparison is SameValueZero, not
  `===` — `Map`'s own key-equality algorithm (unlike `===`, `NaN`
  matches itself and there is no `+0`/`-0` distinction), mirroring
  keyed `<for>`'s `Map` lookup built fresh each diff from the old
  branch scopes (`dom/control-flow.ts:741-744`,
  `oldScopesByKey.get(key)`) — primitives by value, objects by
  reference, same author discipline.
- **No `by=`** → exactly today's `<let>`: seed once, `value=` never
  revisited. Purely additive.

"Re-render" deliberately includes both drivers:

1. **Client-side**: the owner re-renders and the `by=` expression's
   value changes (a parent passing a different `item`). This is the
   general "reset local state when the prop identifies something new"
   problem, which today needs a keyed conditional remount or a
   hand-written effect.
2. **Persisted apply**: an update render delivers new request-derived
   values; the key rides the patch and the same rule runs. A navigation
   is the current page receiving new input, so this is (1), not a
   special case.

It must behave identically for both from day one — a language feature
that means something different over the wire would be incoherent.

## Why (the one-paragraph motivation)

The persisted-pages ownership analysis splits client-owned state (never
patched) from server-derived values (only patched). Optimistic UI needs
a value that is both — instantly writable, eventually server-owned —
and today that shape silently drifts (see the optimistic design's layer
3). Keyed identity is the reconciliation rule that resolves the
conflict without a rollback API: the server's new key means a new
instance, the same way a keyed row with a new key is a new row.

The same word is proposed for a second surface with the same meaning:
`by=` on a boundary's `<@placeholder>` re-shows the placeholder when the
key changes on a persisted navigation (see
[`persisted-pages-recede.md`](./persisted-pages-recede.md)). One concept —
"the identity this thing is keyed by" — alongside `<for by=>`.

## Prior art: the userland `let-fallback` pattern

The semantics already exist in the wild as a hand-rolled helper tag.
A color-mixer example uses this to make a free-text field track a
canonical hex value until the user is mid-edit:

```marko
/* let-fallback.marko */
static const seen = new WeakSet();
<let/value>
<return
  value=seen.has(input) ? value : input.value
  valueChange(v) {
    seen.add(input);
    value = v;
  }
>
```

```marko
/* pick-color.marko (consumer) */
<let/hex:=input.value>
<let-fallback/text=hex/>

<input type="color" value:=hex>
<input size=10 value:=text onChange() { hex = toHex(text) }>
```

"Follow `input.value` reactively until locally written; a changed input
resets the override." With this plan, the helper deletes:

```marko
<let/text=hex by=hex/>
```

is observably identical through the whole interaction — mid-typing,
`hex` is unchanged so the local text persists; committing
`hex = toHex(text)` changes the key so `text` re-seeds to the canonical
form; a color-picker change before any typing re-seeds likewise. Two
things the primitive fixes about the pattern:

1. **The reset condition becomes explicit.** `let-fallback` resets on
   _input object identity_ — any input change, including unrelated
   props, and only because the runtime happens to recreate `input` per
   changed render. That is semantics by implementation detail; `by=`
   names the reset condition precisely.
2. **The `static const seen = new WeakSet()` trick is absorbed.**
   Correct but subtle (module-level, keyed on per-instance-per-render
   objects) — exactly the kind of cleverness a primitive should own.

The comparison also locates the one semantic axis where the two
differ: _what happens before the first local write when the source
changes but the key does not_. `<let by>` seeds **once per key**
(`<let/draft=item.text by=item.id>` keeps the original seed when the
server's text changes under the same id — for a draft, the point);
`let-fallback` **follows the source until written** (a `<const>` that
upgrades to a `<let>` on first write). Keying on the tracked value
itself (`by=hex`) collapses the distinction — every source change is a
key change — so `by=` subsumes the fallback pattern exactly where it is
used, and is strictly more expressive where the key is narrower. The
remaining shape neither covers — follow-until-written with a _sticky_
override across source changes — is a two-line userland compose
(`<let/written=false>` plus a `<const>` selecting between local and
source) and does not earn a primitive.

## Non-goals

- No propagation/sharing: a keyed let is per-scope-instance state.
  Cross-tree sharing is [context.md](./context.md)'s job.
- No implicit default: omitting `by=` never gains new behavior.
- No deep/structural key comparison, no arrays-of-keys (compose in the
  expression: `by=`${a}-${b}`` if needed — same as `<for by>`).
- No derived-until-written variant: see the prior-art section — keying
  on the tracked value covers it; a distinct "fallback" primitive is
  not proposed.

## Semantics details (decided here)

- **Key evaluation time**: with the seed, at render/apply of the owning
  section. The stored "last-applied key" lives in one reserved slot on
  the let's scope (`AccessorPrefix` letter to be claimed in
  `common/accessor.ts` — the catalog there is the registry).
- **Reset is a seed re-run, not a remount**: downstream derivations/effects
  re-run through the ordinary signal graph because the let's value
  signal fires; nothing about the DOM identity of siblings changes.
  (A full remount is what a keyed `<if>`/`<for>` already expresses;
  `<let by>` is deliberately the lighter primitive.)
- **First render**: stores the initial key; no special case.
- **Controllables**: out of scope for v1, but the reconciliation shape
  is the same family as the controllable `_default` replay; the
  long-term unification is tracked in the optimistic design's open
  question 4.
- **SSR**: no server behavior change — the server renders the seed as
  today. The key matters only where local writes exist (client).

## Compiler work

All in `packages/runtime-tags/src/translator`:

1. **Parse/validate** (core-tag `let` visitor): accept `by=`; error on
   `by=` without `value=`; `by=` participates in the same expression
   analysis as `value=` (references tracked normally — no _parser_ or
   grammar change, since htmljs-parser already accepts arbitrary
   attributes on any tag). The core-tag visitor itself is stricter than
   that: today it hand-rolls an attribute loop that throws on anything
   but `value=`/`valueChange=` (`translator/core/let.ts`'s `analyze`,
   not a shared allow-list) rather than the `assertAllowedAttributes`
   helper `<for>` uses for its attributes (`translator/core/for.ts`) —
   item 1 is replacing that hard-coded rejection, not extending an
   existing allow-list.
2. **Analyze**: mark the let binding as keyed on its extra. The `by=`
   expression's references make the key reactive client-side exactly
   like any attribute expression.
3. **Translate (dom)**: today `<let>` compiles to `_let(accessor, fn)`.
   A keyed let compiles to a keyed variant (working name `_let_by`)
   whose setup closure receives `(scope, key)` and whose owner-driven
   re-render path compares the incoming key against the stored slot
   before deciding to re-seed. The comparison lives in the runtime
   helper, not compiled inline (size).
4. **Translate (html)**: store the initial key in the scope like other
   serialized scope values, gated by the standard serialize-reason
   analysis (it serializes when the let itself must resume — no new
   reason class needed for the client-only feature).
5. **Persisted delivery** (feature-branch half): a keyed let's
   `value=`/`by=` gain an unconditional update-render serialize reason
   (delivered on every update regardless of route match — this is NEW,
   see the corrected analysis in the optimistic doc: the existing seed
   channel is cross-route-gated and its `Gen >= applyGen` check
   (`dom/update.ts`'s `_update_seed`) exists to _exclude_ matched
   scopes). The `?update` entry emits a keyed-seed merge line
   dispatching to the runtime reconciler instead of `_update_seed`.

## Runtime work

`packages/runtime-tags/src/dom`:

- `_let_by(accessor, keyAccessor, fn)` (name TBD): wraps the let signal;
  on invocation with a key, compares against the stored slot,
  re-seeds + stores on mismatch, no-ops the seed on match. Shared by the
  client re-render path and the persisted merge path — one reconciler.
- Persisted (`dom/update.ts`): a merge dispatch for keyed lets that
  bypasses the `Gen >= applyGen` matched-scope exclusion, using the key
  comparison as the sole staleness guard.

Size budget: the helper should be well under ~150 bytes min; it rides
only bundles whose templates use `by=` (tree-shaken otherwise). The
persisted merge addition rides the persisted-only chunks.

## Fixtures / acceptance

1. **Client-only** (`fixtures/`, runs on main): parent re-renders a
   child with (a) same key + new value → local write survives, value
   ignored; (b) new key → reset; (c) object key identity; (d) no `by=`
   control case unchanged. Must go red without the runtime helper.
2. **Persisted drift repro** (feature branch): the optimistic doc's cart
   shape — seed + local bump + same-route PRG navigation delivering a
   new key → re-seeds; unrelated navigation redelivering the same key →
   bump survives. Red today (this is the drift the feature exists to
   fix).
3. **Non-persisted byte-identity**: templates without `by=` compile
   byte-identical before/after (full snapshot suite is the check).
4. **Benchmark app**: replace the per-instance halves of the cart flow;
   the validation suites stay green.

## Phasing (and the backport observation)

The client-side semantics (compiler 1–4 + the runtime helper) are a
**mainline feature** — useful without persisted pages, no dependency on
the feature branch, shippable to `main` as its own PR with fixture 1.
The persisted delivery (compiler 5 + the update-merge dispatch +
fixtures 2/4) layers on the feature branch afterward. Building in that
order also forces the "identical on both drivers" invariant
structurally: the persisted half calls the same reconciler the client
half shipped.

## Open questions

1. ~~Attribute name~~ — **decided (2026-07-09): `by=`.** The naming
   went around the loop once: `by=` was the original proposal, briefly
   rejected because `<for by=>` typically takes a per-item _function_
   while this is a plain value whose _change_ is the event, and `by=`
   was chosen in its place. The final decision reverses that: `by=` is
   one word, and reusing it makes "keyed **by** this identity" a single
   attribute family across the language (`<for by=>`, `<let by=>`,
   `<@placeholder by=>` — see persisted-pages-recede.md) rather than two
   near-synonyms with a subtle split. The shape difference is real but
   already exists within `<for by=>` itself (string key vs function),
   so it is a documentation point, not a naming one. Also considered:
   `by=` (instance-reading, the interim choice), `resetOn=` (clearest
   about behavior, rejected as two words), `key=` (industry-standard but
   reintroduces the term Marko 6 retired and imports its DOM-identity
   baggage), `identity=` (exact but verbose), `track`/`sync`/`watch`
   (imply continuous following — the wrong semantics).
2. Reserved accessor letter for the key slot (claim in the
   `common/accessor.ts` catalog at implementation time).
3. Whether `by=` on `<let>` warrants a lint/dev-warning when its
   expression is referentially fresh every render (object literal) —
   `<for by>` has the same footgun today; decide once for both.
4. The superseded-mutation delivery drop (optimistic doc, open question 5) is a router-level correctness gap that keyed lets _expose_ but
   cannot fix; it must be resolved in @marko/run before the persisted
   half ships.
