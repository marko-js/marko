# Runtime-Tags Translator — Optimization Opportunities

A scan of the compiler optimizations in the Marko 6 translator
(`packages/runtime-tags/src/translator`), with concrete opportunities to
**expand the scope of existing optimizations** and **new optimizations to add**.

---

## 0. Baseline — what the translator already optimizes

So the proposals below have context, here is the current optimization surface:

| Area | Optimization | Location |
| --- | --- | --- |
| **Dead state** | Prune bindings with no reads (recursively, through aliases) | `util/references.ts:1918` (`pruneBinding`) |
| **Signals** | Constant bindings collapse to the shared setup signal | `util/signals.ts:206`; `references.ts:1638` |
| **Signals** | Pure signals (`!hasSideEffect`) emit as bare arrow fns, skipping `_let`/`_const` wrappers | `util/signals.ts:333`, `372` |
| **Signals** | Direct-alias bypass — a `const` that is just an alias returns the upstream fn | `util/signals.ts:338` |
| **Signals** | Nullish / empty-function args replaced with `0`; single-statement bodies unwrapped | `util/signals.ts:678` |
| **Signals** | Empty-body signal declarations dropped entirely | `util/signals.ts:862` |
| **Signals** | Intersection grouping (`_or`) with `scopeOffset` minimization | `references.ts:1071`, `1287` |
| **Signals** | Dynamic-closure batching into a single `_closure` call | `util/signals.ts:542` |
| **Serialize** | Per-binding serialize-reason caching + dynamic guard hoisting/dedup | `references.ts:2284`; `util/serialize-guard.ts` |
| **Walks** | Run-length + multiplier encoding of walk codes | `util/walks.ts:122` |
| **Templates** | Consecutive static text merged into one template literal | `util/normalize-string-expression.ts` |
| **Walks** | Static nodes excluded from walks; native binding only created when reactive | `visitors/tag/native-tag.ts:172` |
| **Placeholders** | Void/empty placeholders removed; shared-text detection across siblings | `visitors/placeholder.ts` |
| **Attrs** | Confident (compile-time) attrs inlined into the HTML string | `visitors/tag/native-tag.ts:408` |
| **Attrs** | `class`/`style` split into static (folded) vs dynamic items | `visitors/tag/native-tag.ts:1137` |
| **Attrs** | Duplicate attributes dropped during analyze | `visitors/tag/native-tag.ts:114` |
| **Attrs** | Spread "controllable" key carving for form elements | `visitors/tag/native-tag.ts:220` |
| **if/for** | Only-child-of-parent reuses the parent node binding; parent end-tag skipped | `util/is-only-child-in-parent.ts`; `core/if.ts:210`; `core/for.ts:202` |
| **if/for** | Single-child branch fast path (`singleChild=1`) | `core/if.ts:149`; `core/for.ts:174` |
| **for** | Loop index becomes a `constant` `LoopKey` binding when no `by=` | `core/for.ts:121` |
| **Tags** | Empty `<for>`/`<define>` bodies dropped; all-direct-reference `<define>` inlined | `core/for.ts:104`; `core/define.ts:65` |
| **Bundler** | `@__PURE__` on DOM runtime calls; IIFE+PURE wrapper for walk strings | `util/runtime.ts:21`; `normalize-string-expression.ts:47` |

The pipeline is a clean multi-phase pass (`migrate → transform/preAnalyze →
analyze → translate`), with `finalizeReferences()` doing global pruning at
`analyze.exit` (`visitors/program/index.ts:82`). There is **no dedicated
"optimize" pass** that runs a fixpoint over the AST — optimizations are local
decisions taken inside each visitor. That structure is the root cause of several
of the gaps below.

---

## 1. Opportunities to EXPAND existing optimizations

### 1.1 Constant folding only trusts Babel's `computeNode` — extend it across bindings
`util/evaluate.ts` delegates entirely to Babel's `computeNode`, which only folds
expressions made of literals. The moment a `<const>` binding is involved, folding
stops. Because the translator *already tracks* which bindings are
`BindingType.constant` / `derived-from-constant`, it can do far better:

- **Propagate `confident`/`computed` through constant bindings.** If
  `<const x=2/>` then `x + 3` should fold to `5`. Today `x` is opaque to
  `evaluate`. Thread the binding's computed value into `evaluate` so const →
  const chains collapse at compile time. (`evaluate.ts:12`, consumed everywhere
  attrs/placeholders check `confident`.)
- **Fold attribute/placeholder expressions that reference only constants**, so
  they get inlined into the HTML string (the `confident` path at
  `native-tag.ts:408` and the void-removal at `placeholder.ts:88`) instead of
  becoming reactive signals.
- **Narrow `isNullableExpr` with const knowledge** (`evaluate.ts:39`) — it is
  deliberately conservative ("all identifiers are nullable"), which forces
  unnecessary nullish guards and serialization. A known-non-null const should
  drop those guards.

*Impact: high — feeds inlining, signal elision, and serialize pruning at once.
Effort: medium.*

### 1.2 Constant-condition elimination in `<if>` (and static `<for>` lists)
`core/if.ts` builds the full if/else-if/else chain regardless of whether a test
is statically `true`/`false`. The TODO at `if.ts:85` ("remove all branches if
none have body content") is the empty case; the more valuable case is missing
entirely:

- When `evaluate(test).confident`, **drop dead branches** and, if the first
  confident-true branch wins, splice its body directly into the parent section
  (no `_if`, no marker node, no branch scope).
- Same idea for `<for of=[literal, list]>` — `for.ts:419` notes no static-list
  detection. A confident constant array of known length can be **unrolled**, or
  at minimum skip the keyed-reconciliation runtime in favor of a fixed render.

*Impact: high for templates with feature-flag-style constants. Effort: medium
(branch splicing must respect section/scope bookkeeping).*

### 1.3 `class`/`style` folding does not unpack spreads or nested objects fully
`native-tag.ts:1151` folds static array/object items but bails on:
- spread elements inside **objects** (only array spreads are inlined),
- nested dynamic objects where only *some* keys are dynamic.

Extend the delimited-attr tracker to recurse object spreads and to emit a folded
static base + a minimal dynamic patch, mirroring what it already does for arrays.

*Impact: medium. Effort: medium.*

### 1.4 Static-attribute inlining is HTML-only — bring partial folding to DOM and templates
The confident-attr inline (`native-tag.ts:408`) and string normalization only
fire for fully-constant values. Two extensions:
- **Partial template-literal folding:** ``class=`btn ${x}` `` keeps a constant
  prefix/suffix that could be baked into the template string with only `x`
  reactive. Today any non-confident part makes the whole value runtime.
- **DOM-mode static attrs:** confident attributes in DOM output still go through
  the normal path; they could be emitted once at create time without a signal.

*Impact: medium-high (button/utility-class-heavy UIs). Effort: medium.*

### 1.5 Intersection/serialize short-circuit when sources are already serialized
Explicit TODO at `references.ts:1076`: an intersection signal (`_or`) does not
short-circuit when it can prove the referenced sources are already serialized.
The serialize-reason machinery (`serialize-guard.ts`) already computes this
information — wire it into intersection building to drop redundant `_or` arity
and scope-offset args.

*Impact: medium (smaller resume payloads + fewer runtime checks). Effort: medium.*

### 1.6 Only-child node-binding reuse is blocked by comments and dynamic parents
`util/is-only-child-in-parent.ts:31` requires `branchSize` siblings and a
`StringLiteral` parent name. It already filters `MarkoComment`, but:
- It bails when the parent tag name is dynamic even if it resolves to a single
  known string in practice.
- The `branchSize` exact-match requirement misses cases where extra siblings are
  themselves statically empty (void placeholders, empty `<if>`).

Compute "effective child count" after the same void/empty elimination that
`placeholder.ts` already performs, so more `<if>`/`<for>` tags qualify for parent
node reuse (eliminating marker nodes).

*Impact: medium (one fewer DOM node + walk per qualifying control-flow tag).
Effort: low-medium.*

### 1.7 `<let>` serialization is based on presence of `valueChange`, not actual mutation
`core/let.ts:107` TODO and `dynamic-tag.ts:429` already show the pattern: use
`scope.getBinding(name).constantViolations` to detect whether a `let` is *ever*
reassigned. A `<let>` that is never mutated (no assignments, no `valueChange`
writer reachable) can be demoted to a `const`/constant binding — eliding the
`_let` signal, the change accessor, and its serialize reason.

*Impact: medium-high (very common pattern: `<let>` used only as initial state
that is read but, on some branches, never written). Effort: medium.*

### 1.8 `signalHasStatements` is binary — it forces wrapping on trivial single statements
`util/signals.ts:372` treats "has any render/effect statement" as "must wrap in
full signal machinery." A signal whose entire body is a single pure expression
assignment could collapse further (it already partially does for empty bodies at
`signals.ts:862`). Worth a tier between "empty" and "general" for the
single-statement case to avoid `_let`/`_const` wrappers more often.

*Impact: low-medium (bundle size across many small signals). Effort: low.*

### 1.9 Event handlers and identical inline functions are never deduplicated
`native-tag.ts:126` marks every `on-*` handler as an effect and emits a distinct
runtime call; there is no dedup/merge even when two attributes (or two sibling
tags) carry a structurally identical handler. A compile-time CSE pass over
handler/function expressions within a section could hoist a shared function.

*Impact: low-medium. Effort: medium (needs structural-equality + capture
analysis).*

---

## 2. NEW optimizations to add

### 2.1 A real common-subexpression-elimination (CSE) pass over reactive expressions
The translator subscribes each expression to its referenced bindings
independently. If `user.name` (or `a + b`) appears in three attributes/placeholders
in the same section, three reads + three signal computations are generated.
A section-scoped CSE pass that hoists repeated pure subexpressions into a single
`derived` binding would shrink both signal count and runtime work. The
binding/alias infrastructure (`references.ts`) already models derived values, so
this is largely an analysis addition rather than new runtime.

*Impact: high on data-dense templates. Effort: high.*

### 2.2 Hoist loop-invariant work out of `<for>` bodies
`translate-attrs.ts` (noted by the attr agent) and `core/for.ts` do no
loop-invariant code motion: an expression inside a `<for>` body that depends only
on outer-scope bindings is recomputed per item. Detect sub-expressions whose
referenced bindings are all defined outside the loop section and hoist them to a
single computation in the parent section.

*Impact: high for loops rendering many items. Effort: high (interacts with
section/scope ownership).*

### 2.3 Whitespace/text static-collapsing beyond adjacency
`normalize-string-expression.ts` merges adjacent string parts but does no
whitespace normalization (the DOM-walk agent flagged this explicitly). HTML
templates frequently carry insignificant whitespace between static nodes that
could be collapsed at compile time (respecting `white-space` semantics /
preserve tags), shrinking template strings and reducing text walk steps.

*Impact: medium (template-string size). Effort: medium (must honor `<pre>`,
`white-space`, and Marko's existing whitespace rules).*

### 2.4 Boolean/enumerated attribute canonicalization
Confident boolean attrs (`disabled={true}`, `hidden={false}`) and known
enumerated values can be canonicalized at compile time to the shortest correct
HTML (`disabled` / omit) rather than going through `_attr`. The form-control
specialization (`html/attrs.ts`) shows the pattern exists for value/checked;
generalize it to the standard boolean-attribute set.

*Impact: low-medium (HTML size + a few runtime calls). Effort: low.*

### 2.5 Drop unused program exports / no-op setup
TODO at `visitors/program/index.ts:72` ("make any exports undefined if they are
noops/empty") and the always-emitted empty `setup` arrow at `dom.ts:181`. When a
template has no reactive state, the `setup`/`walks`/`params` exports are trivial
and could be elided or replaced with shared constants (e.g. a single shared empty
`walks` string) to cut per-template boilerplate.

*Impact: low per template, but multiplies across many small components.
Effort: low.*

### 2.6 Cross-template/shared static-template interning
Each compiled template emits its own `template`/`walks` string literals. Common
fragments (empty walks, single-marker walks, frequently repeated static HTML
chunks) are not interned across a build. A bundler-level or runtime-level shared
constant table for the most common walk/template strings would deduplicate them.

*Impact: medium at app scale. Effort: high (cross-module; likely a bundler
plugin concern rather than per-file translator).*

### 2.7 `<define>` destructuring + default-param support (currently blocks several optimizations)
Multiple TODOs converge here: `core/define.ts:62` (support destructure),
`known-tag.ts:611/615/810` and `references.ts:236` (default params force an
intermediate binding / block property-alias optimization), and
`known-tag.ts:1249` (use spread property alias "after we optimize `in`").
Implementing destructuring/default-param handling for known tags would unlock the
existing property-alias optimizations for a whole class of components that
currently fall back to opaque spreads.

*Impact: medium-high (unblocks existing optimizations rather than adding new
runtime). Effort: high.*

### 2.8 Avoid forced registration of native-tag change handlers
`visitors/function.ts:107` — "all native tag functions should avoid registration
but right now change handlers require it." Registration adds a resume id and
keeps the function alive for serialization. Removing the requirement for handlers
that don't actually need resumption would cut registered-function output.

*Impact: low-medium (resume payload). Effort: medium (runtime contract change).*

---

## 3. Quick wins already flagged in code (low effort)

These are TODOs that are individually small and safe:

- `core/html-comment.ts:107` — reuse the marker node as the comment node when a
  tag is empty (one fewer node).
- `core/if.ts:85` — eliminate branches whose bodies are all empty.
- `visitors/program/index.ts:72` — undefined-out no-op exports.
- `dom.ts:181` — share a single empty `setup` constant instead of emitting a new
  empty arrow per stateless template.
- `signals.ts:1033` — stop emitting an `undefined` statement in the HTML effect path.

---

## 4. Suggested prioritization

| Priority | Item | Why |
| --- | --- | --- |
| **P0** | 1.1 const-aware constant folding | Foundation: feeds inlining, signal elision, serialize pruning |
| **P0** | 1.2 constant-condition `<if>` elimination | Common, high payoff, builds on 1.1 |
| **P1** | 1.7 demote never-mutated `<let>` → const | Very common pattern, infra already exists (`constantViolations`) |
| **P1** | 1.4 partial template-literal / DOM static attrs | Broadens the most-used inlining path |
| **P1** | 1.5 intersection/serialize short-circuit | Already a TODO with the needed data available |
| **P2** | 2.1 CSE / 2.2 loop-invariant motion | Highest ceiling, highest effort |
| **P3** | §3 quick wins | Cheap, ship anytime |

---

*Notes for implementers:* several P0/P1 items would benefit from introducing a
small **post-analyze "fold" pass** that materializes constant binding values onto
`NodeExtra` so the per-visitor `confident` checks pick them up uniformly, rather
than each visitor re-deriving constness locally. That single piece of
infrastructure unblocks 1.1, 1.2, 1.4, and parts of 1.6.
