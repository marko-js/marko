# Unifying the HTML and DOM translators

An exploration of how the `html` output could move from its current
"mutate the AST as you go" style to the deferred, IR-driven style the `dom`
output already uses, how far that unification can go, and what it would take
to make the initial execution order of both outputs match.

## Summary

- The two outputs already share parse, migrate, transform, and analyze. The
  fork is entirely inside translate, and it is wider than it needs to be:
  the DOM side records everything into per-section signal IR and emits at
  program exit, while the HTML side does in-place AST surgery
  (`insertBefore`, `replaceWithMultiple`, `flushBefore`) as it walks.
- The HTML translator can adopt the deferred model without using signals in
  its _output_: keep recording into the same per-section IR the DOM side
  uses (plus a source-order sequence number per entry), and emit a plain,
  linear content function per section at program exit. Signals become one of
  two _emitters_ over a shared IR, not a parallel implementation.
- Initial execution order can be made to match for everything that happens
  _within a section_ (this covers the `log-tag` fixture divergence and all
  statement/derivation interleaving). Two divergences are structural and
  should be specified rather than fixed: branch body initialization timing
  (`<if>`/`<for>` content) and the atomicity of child template invocation on
  the server. Both are forced by real constraints (closure-initialization
  correctness and bundle size on the client, streaming on the server).
- Recommended target order is a "phase-split source order" that both sides
  can hit: within a section, entries run in source order except that work
  depending on input runs after work that does not, and each value's
  dependents run as soon as the value lands. The DOM side gets there with a
  small change (interleave a signal's statements and downstream values by
  source order instead of statements-first). The HTML side gets there via
  the new emitter.

## The two pipelines today

### DOM: deferred IR

Translate visitors in DOM mode do not modify the program body. They record:

- Statements keyed by `(section, referencedBindings)` via
  `addStatement("render" | "effect", ...)` and values (a binding's
  initialization expression) via `addValue` / `initValue`
  (`util/signals.ts`). The map entry is a `Signal`.
- Static HTML and marker comments into a per-section write buffer
  (`util/writer.ts` `writeTo`) and walk codes (`util/walks.ts`), which
  become the section's `template`/`walks` string constants.
- Control flow (`<if>`, `<for>`, `<try>`, `<await>`, dynamic tags) sets a
  `signal.build` thunk that references the child section's renderer args
  (`getBranchRendererArgs`), and feeds the controlling expression with
  `addValue`.

At program exit (`visitors/program/dom.ts`), `writeSignals` walks the signal
graph per section and emits `const` declarations; child sections become
renderer argument tuples or `_content` registrations; reads are rewritten to
scope accesses in one `traverseReplace` pass per signal.

### HTML: mutate as you go

Translate visitors in HTML mode edit the AST in place at visit time:

- `writer.flushBefore(tag)` converts the buffered writes into an `_html(...)`
  statement inserted before the current node whenever something dynamic is
  about to render (custom tags, control flow).
- Tag variables become real `let`/`const` declarations at their source
  position (`util/translate-var.ts`), so downstream references resolve
  lexically with no rewriting.
- Control flow rebuilds its (already statement-converted) body in place:
  `<if>` builds a nested `t.ifStatement` chain and inserts it before the
  next sibling (`core/if.ts`), `<for>` wraps the body in an arrow passed to
  a runtime loop helper, custom tags `replaceWithMultiple` a call to the
  child template with a props object.
- Every section-closing visitor separately calls `writer.flushInto` +
  `writeHTMLResumeStatements` to append scope serialization, `_script`
  resume registrations, and the scope id declaration into the body.
- Program exit (`visitors/program/html.ts`) then sweeps the whole body
  anyway: hoists `static` statements, wraps the rest in the content
  function, and runs a full `traverseReplace` to rename binding reads and
  register resumable functions.

Two observations about the HTML side:

1. It is not actually avoiding a deferred pass. The final
   `traverseReplace(program.node, "body", ...)` plus the static/dynamic
   sweep is a whole-program rewrite; the in-place mutation just makes the
   input to that rewrite harder to reason about (a `MarkoTagBody` holding a
   mix of Marko nodes and half-translated JS statements mid-traversal).
2. The pieces that are genuinely shared with DOM already exist and are load
   bearing: the write buffer (`writer.ts`) works positionally in both modes,
   `walks.visit` is a safe no-op under HTML so section tags call it
   unconditionally, `getSignal` intentionally returns a bare signal in HTML
   so effect registration (`addHTMLEffectCall`) and serialized-value
   bookkeeping flow through the same code, and `translate-attrs.ts` builds
   props for both modes with a single fork in `buildContent`. The IR is not
   foreign to the HTML side; it is just only half-adopted.

The full fork surface is about 25 files. Eight tags fork completely via
`translateByTarget` (`native-tag`, `for`, `if`, `try`, `await`, `show`,
`style`, `return`); the rest fork inline, and several of those inline forks
are already near-trivial (`log`/`debug` build one statement and differ only
in `tag.insertBefore(stmt)` vs `addStatement`; `lifecycle`/`script` differ
only in `addStatement("effect", ...)` vs `addHTMLEffectCall`).

## What "execution order" actually is in each output

### DOM initial render

From `dom/template.ts` (`mount`), `dom/renderer.ts`, `dom/queue.ts`:

1. **Synchronous phase.** Clone the root template and bind refs via walks
   (no user code), then call `setup(scope)`, then `params(scope, input)`.
   Each is a generated function whose statements run in the order the
   translator added them. Value signals cascade depth-first and
   synchronously during this phase: writing a value immediately runs its
   dependents (`_let`/`_const` with `scope[Gen] === runId`), expressions
   depending on several bindings run when the _last_ dependency lands
   (`_or` countdown).
2. **Branch phase.** Creating a branch (`<if>`/`<for>`/dynamic tag body)
   during phase 1 clones its DOM immediately but _queues_ its `setup`
   (`setupBranch` → `queueRender(branch, setup, -1)`) on a min-heap keyed by
   `(scopeId, signalKey)`. Scope ids increment at creation, so branch
   setups run in creation order after the current cascade completes, each
   one cascading synchronously and possibly queueing more. This deferral is
   load bearing: a branch's closure signals read owner values at setup time,
   and the owner's `params` cascade must have finished by then. Loop and
   dynamic tag `params` (the item/input values) run synchronously at
   creation time; only `setup` defers.
3. **Effect phase.** `_script` effects and event wiring run FIFO after
   mount.

Within one signal function the translator currently emits, in order: raw
statements (in the order visitors added them), alias forwards, downstream
value initializations (in added order), intersection notifications, closure
fan-outs, effect enqueue (`getSignalFn` in `util/signals.ts`).

### HTML render

One pass, top to bottom, strictly in source order. Everything a tag needs
happens inline at its source position; a child template call runs the whole
child synchronously; `<if>`/`<for>` bodies are inline statements.

### The divergence, concretely

The repo already snapshots this. `__tests__/fixtures/log-tag` is marked
`equivalent: false` and captures the same template logging in two orders:

```marko
<log="identifier"/>
<const/tagVar="tag var"/>
<log=tagVar/>
static const staticVar = "static var";
<log=staticVar/>
```

- SSR (`render-ssr.debug.md`): `identifier`, `tag var`, `static var`
  (source order).
- CSR (`render-csr.debug.md`): `identifier`, `static var`, `tag var`
  (both plain `<log>` statements land in the setup signal's statement list,
  which runs before the setup signal's downstream value initializations,
  so `tagVar`'s cascade, including its `<log>`, runs last).

Breaking the divergence into classes:

| #   | Divergence                                                                                                                   | Cause                                                                                                                                 | Fixable?                                                                                                      |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1   | Statements run before value initializations within one signal                                                                | `getSignalFn` appends `signal.values` after `signal.render`                                                                           | Yes, cheap (DOM-side)                                                                                         |
| 2   | Work is grouped by the binding it depends on, not interleaved by source                                                      | statements ride their binding's signal                                                                                                | Yes, if HTML adopts the same grouping (it can: values become plain `const`s declared at first-ready position) |
| 3   | Non-input work runs before input-driven work                                                                                 | runtime calls `setup` before `params`; duplicating the input cascade into a source-ordered "first render" path would cost bundle size | HTML can emulate the phase split; DOM cannot cheaply drop it                                                  |
| 4   | Branch bodies initialize after the surrounding cascade, in creation order                                                    | branch setup must defer so closures read finalized owner values; HTML streaming forces depth-first inline bodies                      | No; specify it                                                                                                |
| 5   | A child template runs atomically on the server, split (setup / per-input applies / derived work at last input) on the client | server child is one function call taking one input object; splitting server exports would be "signals on the server"                  | No; specify it                                                                                                |
| 6   | Effects don't execute on the server                                                                                          | by design                                                                                                                             | N/A                                                                                                           |

Classes 1 through 3 cover every divergence that is _observable within a
single template body with no control flow_, which is also the class of
divergence users actually hit with expressions that have side effects (the
`log-tag` case). Classes 4 and 5 are only observable when user code inside a branch
or child races user code outside it; today that ordering is unspecified and
accidental, and the honest fix is to specify it.

## Proposal

### Phase 1: one IR, two emitters (no behavior change)

Give the section IR an explicit ordered spine and make both outputs emit
from it at program exit.

**IR shape.** Keep the existing signals map, but every recorded entry
(statement, value, effect) carries a monotonically increasing sequence
number assigned at record time (translate visitation order ≈ source order).
Add first-class entry kinds for the things HTML currently does with AST
surgery:

- `write` entries already exist (the writer buffer is positional; writes
  interleave with entries by sequence).
- A `branch` entry (`<if>`/`<for>`/`<try>`/`<await>`/dynamic tag/`<show>`)
  holding the controlling expression's references, the child section(s),
  and the two build functions it already effectively has today:
  `buildDom()` (today's `signal.build`) and `buildHtml(bodies)` (today's
  inline `t.ifStatement`/loop-callback/`_try` construction, taking the
  assembled child bodies as input).
- A `childCall` entry for custom tags (today's `knownTagTranslateHTML` call
  construction, including the `_peek_scope_id` prologue), alongside the
  existing DOM-side per-input apply statements.

**Visitors.** Each visitor records entries in both modes; the mode-specific
code shrinks to the two build callbacks where output genuinely differs.
Today's near-trivial forks (`log`, `debug`, `let`, `const`, `lifecycle`,
`script`, `placeholder`, `text`, scriptlets) collapse to a single path.
`native-tag` keeps its one attribute partition (`getUsedAttrs`) and records
per-attribute entries; the HTML emitter turns them into template-literal
pieces, the DOM emitter into `_attr*` statements, which is already how the
code is shaped internally.

**Emitters at program exit.**

- DOM: unchanged. `writeSignals` ignores sequence numbers; map insertion
  order is preserved, so output is byte-identical. This is the safety gate:
  phase 1 must not change a single `dom` snapshot.
- HTML: a new per-section assembler replaces the sprinkled
  `flushBefore`/`flushInto`/`writeHTMLResumeStatements` calls and the
  program-exit body sweep. It lays out entries by sequence number (source
  order, i.e. today's semantics), materializes write-buffer chunks as
  `_html(...)` statements at the positions stream-writing entries force,
  inlines child section bodies recursively into the `buildHtml` callbacks,
  and appends the section epilogue (scope id declaration, serialized scope,
  `_script` registrations, `_resume_branch`, return value) exactly once per
  section. Because `<let>`/`<const>` become declarations whose position the
  assembler controls and reads are plain identifiers renamed to the binding
  name (`getReadReplacement`'s HTML path), lexical scoping keeps working
  with zero rewriting beyond today's rename pass.

What this deletes: every `writer.flushBefore`/`flushInto` call site, the
`insertBefore`/`replaceWithMultiple`/`skip` choreography in `if`, `for`,
`custom-tag`, `dynamic-tag`, `define`, `native-tag`, the per-tag
`writeHTMLResumeStatements` calls, the `isStatic` body partition (static
statements can be recorded as program-level entries when visited), and the
`BRANCHES_LOOKUP` sibling surgery in `core/if.ts` (branches already know
their sections; the assembler builds the chain).

What this preserves: streaming semantics, byte-for-byte output (the
assembler in source-order mode should reproduce today's statement sequence;
the full fixture suite verifies), and the plugin surface (tags that use
`translator` hooks and mutate the AST keep working during migration because
the assembler only owns sections whose visitors have been converted; the
writer shims stay callable).

Suggested migration order, each step gated on snapshots: leaf statement
visitors → `placeholder`/`text` → `native-tag` → custom tags → control flow
(`show` first since its body is same-section, then `if`/`for`, then
`try`/`await`/dynamic tags) → replace the program-exit sweep. The interop
translator (`translator/interop`) and runtime-class wrapper should be
audited before the last step since they observe the HTML program shape.

### Phase 2: shared initial execution order

Once the HTML emitter owns layout, ordering is policy. Define the canonical
initial order as **phase-split source order**, per section:

1. Entries not depending on input run in sequence order; each value's
   dependents run immediately after the value lands (synchronous cascade),
   which for source-ordered declarations is their source position.
2. Entries depending on input run afterward, again in sequence order with
   the same cascade rule. Multi-dependency expressions run when their last
   dependency lands.
3. Branch bodies initialize after the current section's cascade completes,
   in creation (document) order. Child templates on the server initialize
   atomically when their last input is ready.

Getting there:

- **DOM side (small):** interleave a signal's raw statements and downstream
  value initializations by sequence number in `getSignalFn` instead of
  statements-first (divergence class 1). Aliases stay first; intersections,
  closure fan-outs, and the effect enqueue stay trailing (intersections are
  countdown-mediated so call position within the signal is not observable
  beyond "after this signal's own write"). This alone flips the `log-tag`
  CSR order to `identifier`, `tag var`, `static var`, matching SSR. Note it
  also changes _update_ ordering the same way, which is arguably the point,
  but it should be called out in the changeset.
- **HTML side (the emitter):** linearize by canonical order instead of raw
  sequence. Because evaluation order and document order decouple, a dynamic
  hole whose expression would evaluate at a different point than its chunk
  is hoisted into a `const` temp at its canonical position and the template
  literal references the temp. In practice most holes reference an
  already-declared binding (`${name}`) or a pure wrapper (`_escape(name)`)
  and stay inline; only expressions with their own computation need temps,
  so SSR output size impact should be minimal and measurable in the fixture
  `sizes.json` diffs.
- **Pinned constructs rule:** control flow and child calls must still write
  to the stream at their document position. When canonical order says an
  input-driven hole in an earlier chunk computes _after_ a non-input-driven
  construct that streams _before_ it, the hole's expression is evaluated
  early into a temp (this is the one place HTML deliberately deviates; it
  is deterministic and detectable at compile time, so it can be documented
  or even warned on in debug builds).

With classes 1 through 3 aligned, `log-tag` and any similar fixture become
`equivalent: true`, and classes 4 and 5 get documented as specified
behavior instead of accidental divergence. Both are defensible to specify:
"a branch's body initializes after the enclosing template's current values
settle" and "a child template initializes once all of its inputs are ready"
are reasonable mental models that hold in both outputs.

Whether phase 2 ships as the only behavior or behind a compiler option, it
is a user-observable change on both sides (server side effect order for
mixed input/state templates; client initial and update cascade order), so
it should ride a minor with a changeset and docs regardless.

## Output changes that would ease unification

The plan above treats today's compiled output shapes as fixed. Relaxing
that helps a lot; the compiled output and the runtime ship atomically
(published components ship `.marko` source, so compiled code always pairs
with the compiler that produced it), which means the underscore-prefixed
helper contracts can be reshaped freely as long as the resume wire format
stays stable. Ranked by leverage:

1. **HTML control flow as section functions plus the shared index/args
   expression.** Today the HTML `<if>` builds a nested `t.ifStatement`
   chain, steals the branch bodies' statement arrays, injects
   `return <branchIndex>` into serializing branches, and wraps the chain in
   `_if(cb, scopeId, accessor, guards, ...)`; `<for>` passes an inline
   arrow plus positionally spread loop arguments. The DOM side instead
   builds a branch index expression (`show ? 0 : 1`, fed through
   `addValue`) and per-branch renderer tuples. If the HTML output became
   named nested function declarations per branch body (still lexically
   nested, so closures keep working) selected by that same index
   expression, e.g. `_if(show ? 0 : 1, $ifBody0, $ifBody1, $scope0_id,
accessor, guards)`, then the controlling-expression construction, the
   branch bookkeeping, and the serialize-guard assembly all become shared
   code, and the two build callbacks become mirror images. Lazy test
   evaluation is preserved by the conditional expression, and the runtime
   receives the branch index directly instead of recovering it from the
   callback's return value. Cost: a few bytes per branch in SSR output for
   the declarations and one extra call.
2. **Harmonized helper signatures.** The HTML `_for_*` helpers take
   `(list, cb, by, scopeId, accessor, serializeBranch, serializeMarker,
serializeStateful, parentEndTag, singleNode)` while the DOM ones take
   `(accessor, template, walks, setup, params)` with `[list, by]` arriving
   through the signal. Aligning the value tuple and the marker/guard
   argument order (and similarly `_script(scopeId, id)` vs
   `_script(id, fn)`) lets one IR entry serializer emit both calls instead
   of two hand-maintained shapes. Folding the `_peek_scope_id` +
   `_set_serialize_reason` prologue into a single child-call helper does
   the same for the `childCall` entry.
3. **DOM: the `getSignalFn` interleave** described under phase 2 is itself
   an output change (client bundles reorder statements), and is the
   cheapest ordering win available.
4. **HTML: hole temps** (also under phase 2) could be always-on rather
   than rule-based, which simplifies the emitter at a measurable SSR byte
   cost; rule-based is still the recommendation.
5. **Conflict-driven buffering (opt-in exact parity).** The residual
   "pinned constructs" deviation exists because branch and child bodies
   write directly to the stream at their document position. Where the
   emitter detects an actual conflict between canonical order and document
   order, it could render just the conflicting construct into a string
   hole (`const _b0 = show ? $ifBody0() : ""`), decoupling its execution
   position from the stream entirely. Synchronous content buffers with no
   time-to-first-byte cost; content that can fork asynchronously
   (`<await>`, dynamic tags with unknown children) keeps streaming and
   keeps today's behavior. Because it only triggers on conflicting shapes,
   the common-case output is unchanged, and section-local order parity
   becomes exact instead of "exact modulo pinned constructs".

Considered and cut:

- **Splitting server child exports into setup/apply pieces** (mirroring
  `domExports`) would make custom tag translation truly identical in both
  modes and align child interleaving, but it only pays off combined with
  buffered writes everywhere, roughly doubles the per-template server
  surface, and gives up the lean "one call, one input object" SSR
  contract. Specifying child atomicity is the better trade.
- **Moving all root `<let>`/`<const>` value initializations from `setup`
  into the params signal at their sequence positions.** This is
  semantically safer than it sounds: the `_let`/`_const` runtime guards
  (`rendering && scope[Gen] === runId`) already make value initialization
  a no-op when a signal re-runs for an update, and input-derived `<let>`
  initial values ride the params signal today. It would dissolve the
  "all state work before any input work" phase artifact entirely. Cut
  because a template whose input is pruned has no params signal to host
  the initializations, so the output would either vary per template
  (making the order spec worse than the phase split it removes) or pay
  for a synthesized params export, and `setup` must survive anyway for
  effects, child wiring, and tag-variable plumbing.
- **Making branch setup synchronous** (depth-first, matching HTML) breaks
  closure initialization: a branch's closures must read owner values that
  finish computing later in the enclosing cascade, and the queue is what
  guarantees "later" at every nesting level.

## Risks and open questions

- **Snapshot churn.** Phase 1 aims for byte-identical output; any diff in
  the `test:update` review is a bug in the assembler, which makes review
  tractable. Phase 2 intentionally reorders; the `equivalent: false`
  fixture set (~160, mostly async/streaming related) needs an audit pass to
  confirm which flips are expected.
- **Compile-time cost.** The assembler adds a pass per section but removes
  repeated Babel path re-queueing from `insertBefore`/`replaceWithMultiple`
  during traversal; expected to be neutral or better. Worth measuring on
  the website/e-commerce benchmarks.
- **Temps vs SSR readability/size.** The "only when canonical position
  differs" rule keeps most output identical; the debug/optimize split can
  also differ (optimize could inline aggressively where order provably
  cannot be observed, e.g. pure member reads).
- **Third-party translator hooks.** Any tag translator that relies on
  mutating the HTML AST mid-traversal needs the shim window. The core
  interop layer (`runtime-class` wrapping) is the first consumer to verify.
- **`<show>` and inlined bodies.** `<show>` shares its parent section, so
  its begin/end runtime calls become paired entries rather than a child
  section; the assembler needs to keep its body entries contiguous.
- **Hoisted/out-of-order declarations.** Tag variables are referenceable
  before their source position; canonical order runs them at their
  dependency-ready position, which may be _earlier_ than source. That is
  already DOM behavior today, but it is the one place "source order" in the
  canonical definition needs the "no earlier than its dependencies, no
  later than its first dependent" caveat spelled out.

## Appendix: worked example

```marko
<let/x=1>
<let/y=2>
<const/a=f(x)>
<const/b=g(y)>
<div>${a}${b}</div>
```

Today's DOM initial order: `x=1` → `a=f(x)` → text(a) → `y=2` → `b=g(y)` →
text(b). Today's HTML order: `x=1` → `y=2` → `a=f(x)` → `b=g(y)` → both
escapes at the `_html` call. Canonical (phase-split source order): both
outputs run `x=1` → `a=f(x)` → `y=2` → `b=g(y)`; the HTML emitter keeps the
declarations in that order and the single `_html` template literal
references `a`/`b` as identifiers, so no temps are needed and the only
textual change from today's SSR output is the declaration order.
