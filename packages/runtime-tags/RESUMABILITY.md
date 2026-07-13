# Fine-grained reactivity, tree-shaking, serialization, and resume

Marko 6 compiles one dependency graph into four coupled outputs: the retained
DOM module graph, SSR scope payload, DOM/range markers, and lazy ready streams.
Optimize them together: removing one serialized byte is irrelevant if it retains
a large client helper; removing a bundle root can erase signals, runtime imports,
template modules, payload, and markers transitively.

## System in one pass

1. `sections.ts` divides the template into independently rendered **sections**.
2. `references.ts` models values as **bindings** and tracks reads, writes,
   aliases, properties, closures, hoists, and downstream consumers.
3. `finalizeReferences()` resolves sources, prunes unused bindings, propagates
   serialization requirements, canonicalizes intersections, and allocates dense
   per-section ids.
4. `signals.ts` groups work by its exact binding set and emits the smallest
   executable **signal**.
5. `serialize-reasons.ts` propagates why each scope property, marker, section,
   or registered value must exist in the browser.
6. DOM output supplies mostly pure, tree-shakable signals/renderers. HTML output
   writes only the state and markers required by retained client work.
7. SSR serializes registered ids instead of function source. Resume fills scopes,
   attaches them to existing DOM, rebuilds branches, then runs effects—no initial
   client rerender.

## Tree-shaking and resume registration

Fine-grained tree-shaking is the outer architecture. Generated DOM code uses
small named imports and `/*@__PURE__*/` constructors (`translator/util/runtime.ts`).
Rolldown can remove an unused signal/renderer, then its helpers, imports, module,
and chunk-mates.

Executable values named by SSR must instead be registered under stable ids via
`_resume`. Explicit resume-capable helpers include `_content_resume`,
`_var_resume`, and `_hoist_resume`; `_template`, `_el`, `_script`, and some
closure helpers register internally. Direct registration is a retention root.
A pure constructor may register internally and still disappear when unused: the
registration matters only if SSR emits its id. Too much registration retains
dead client subgraphs; too little breaks resume.

The optimized Rolldown output is authoritative. `__tests__/utils/bundle.ts`
builds page/load entries, records module `renderedLength`, and measures minified
and Brotli size. Inspect optimized `dom.bundle.js`, chunk placement, and
`sizes.json`; raw compiler output does not show transitive retention.

## Compiler model

| Concept         | Meaning                                                                             | Primary code                             |
| --------------- | ----------------------------------------------------------------------------------- | ---------------------------------------- |
| Section         | Compile-time render unit; runtime scopes are its instances                          | `translator/util/sections.ts`            |
| Binding         | Reactive value/property with alias, closure, assignment, hoist, and source edges    | `translator/util/references.ts`          |
| Sources         | State and/or input/body-parameter roots that can make a value relevant              | `references.ts`                          |
| Signal          | Setup or update program keyed by one binding or a canonical binding intersection    | compiler/runtime `signals.ts`            |
| Scope           | Plain runtime state object keyed by accessors; production accessors are short chars | `dom/scope.ts`                           |
| Renderer/branch | Blueprint and live DOM range instance                                               | `dom/renderer.ts`, `dom/control-flow.ts` |

`finalizeReferences()` is the center of analysis. It resolves each expression to
canonical bindings, separates constant/live/hoisted/lazy reads, prunes unused
property paths, computes transitive `Sources`, propagates owner/closure/branch/
effect/registry requirements, collapses eligible intersections, and finalizes
known-tag contracts. Safe invoke-only reads avoid subscriptions but set
`forcePersist`: the current scope slot must still survive for later invocation.

### Serialize reasons

`SerializeReason = true | Sources`; absence means omit.

- `true`: unconditional.
- Contains state: unconditional for SSR; client-changeable state requires its
  resume path for every instance.
- Parameter-only: guarded per call site by the reason passed from the parent.

Reasons exist per section and per scope property. Property reasons contribute to
the section reason but keep independent guards. They originate at
client-observable roots—state, effects, handlers/registered functions, closures,
hoists, control-flow identity, DOM getters, tag variables, and stateful
downstreams—and propagate backward through aliases/reads and upward through
owners. Intersections cross-propagate because all members must exist when their
combined work becomes relevant.

Across known tags, `finalizeParamSerializeReasonGroups()` groups child parameter
dependencies. The parent calls `_set_serialize_reason(...)`; the child consumes
and clears it with `_scope_reason()`. HTML runtime encoding is `1` for all,
`0`/missing for none, a bitmask from bit 1 for static groups, or a keyed object
for dynamic guards. `serialize-guard.ts` emits/hoists `_serialize_if` and
`_serialize_guard` calls.

### Signal lowering

Compiler signals are keyed by `undefined` (setup), one binding, or a canonical
intersection. They accumulate derived forwarding, renders, effects, closures,
and persistence. Lowering removes empty signals, aliases one-hop forwarders,
uses `_const`/`_let` only when storage/dirty checking is needed, uses `_or` for
remaining intersections, and registers only resumable effects/functions/
renderers. DOM and HTML translation consume the same graph; disagreement often
appears only on the first post-resume update.

At runtime, `_const` stores on identity change, `_let` distinguishes render-time
propagation from external writes, `_or` counts intersection arrivals per
generation, closure helpers notify live child scopes, and `_script` queues
effects. `dom/queue.ts` orders renders by `scopeId * 1e6 + signalId`, deduplicates
pending signals in scope slots, runs renders before effects, and uses `runId` as
the generation boundary (resumed scopes start at 1; normal client work at 2).

## SSR payload and DOM adoption

`writeHTMLResumeStatements()` (`translator/util/signals.ts`) emits only reasoned
accessors; narrower property reasons get narrower guards. `_scope(id, partial)`
updates the canonical server scope and current serialize state. Passive values
ride an existing scope flush without forcing one. Empty fills are omitted and
numeric gaps compact monotonically allocated scope ids.

`html/serializer.ts` emits JavaScript expressions, not JSON. It preserves shared
identity/cycles across stream flushes, scopes (`_(id)`), registered factories
(`_(scopeId, registryId)`), collections, typed/async values, and deferred
mutations. A `Reference` records the first buffer position and parent/accessor
path; only reused values claim short ids. Fill-only payloads return their array;
payloads with trailing assignments apply the fill through the context and end in
`0`, preventing an arbitrary final value from being mistaken for a fill.

DOM association has two encodings:

- DOM **walk strings** (`translator/util/walks.ts`, `dom/walker.ts`) locate nodes
  when cloning new client branches.
- SSR **resume comments** (`html/writer.ts`, `dom/resume.ts`) attach existing
  nodes/ranges to scopes and reconstruct owners, branches, keys, and await state.

Unread static DOM needs neither accessor nor marker. Single-node/only-child
proofs reuse existing nodes/parents; `<!>` separates otherwise ambiguous dynamic
text/ranges. Resume applies available fills, resolves registered values, visits
comments, reconstructs branches, and runs effects with `isResuming = 1`.

## Lazy entries and ready streams

A normal interactive page entry imports its template graph and initializes the
DOM runtime; a server-only page links assets without shipping it
(`translator/util/entry-builder.ts`). `import ... with { load: ... }` instead
creates a load entry and stable `readyId`. Client implementations register when
that module loads, then `ready(readyId)` permits its data to run.

Lazy state cannot enter the main stream before its registered code exists.
`writeWaitReady()` renders into `render.b[readyId]`; the serializer records
ancestor-channel dependencies. Dependency arrays block a channel until named
modules are ready and their earlier data is drained. `ready()` processes to a
fixed point because one channel can unblock another.

Async reorders may execute after later main-stream scripts. The server therefore
reserves each ready-stream position with a numeric gate; the reorder script
replaces that gate in place. Module registration, scope identity, dependency
order, DOM arrival, and effect order must remain aligned.

## Modes and verification

- Outputs: `html` writes SSR/state; `dom` writes client code; `hydrate` is a DOM
  page entry.
- Entries: ordinary export, `page` bootstrap, `load` ready notification, and
  test-only `csr` fresh render.
- Lifecycle phases: fresh render clones/walks/setups; resume adopts/fills/effects;
  updates dirty-check/queue.
- Debug uses readable accessors/assertions; optimize remaps production modules
  and proves actual encoding/tree-shaking. `.debug.ts` pairs must match exports.

Testing commands and fixture anatomy live in `AGENTS.md`. High-value examples:

- `title-counter`: bindings → signals → scope/markers → resumed update/effect.
- `lazy-tag-nested-shared`: ready dependencies and cross-channel identity.

Routing: serialization questions start in `references.ts` →
`serialize-reasons.ts` → `serialize-guard.ts`; bundle retention in compiler
`signals.ts`, `runtime.ts`, program DOM output, and Rolldown output; wire format in
`html/writer.ts`/`serializer.ts`; adoption in `dom/resume.ts`/`walker.ts`;
update ordering in compiler/runtime `signals.ts` and `dom/queue.ts`.
