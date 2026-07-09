# Performance

Runtime speed and bundle size opportunities. Format and rules: [README.md](README.md).

## Derive await/try branch scope owners without serialization

`packages/runtime-tags/src/translator/util/signals.ts:1330` | 2026-07-02 | impact:low | effort:high

State-driven `<if>`/`<for>` branches now link their owner from resume markers instead of serializing it, but `<await>`/`<try>` branches still serialize `_: _scope_with_id(parentScopeId)`. Two blockers were verified: (1) their branch machinery can be tree-shaken out of resume bundles while closures into the content still fire (`await-tag` fixture: `_await_promise` is dropped, `branchesEnabled` stays off, so branch visits are never processed), and (2) reordered/out-of-order content pushes scope data and closure subscriptions a flush earlier than its markers, so a state update mid-stream can read the owner before it could be linked. Solving these likely means an explicit enable in the resume payload and deferring subscriptions to marker processing.

## Serialize ConditionalRenderer only when the condition is stateful or has direct closures

`packages/runtime-tags/src/html/writer.ts:588` | 2026-07-02 | impact:low | effort:med

Existing TODO in `_if`, but narrower than it reads: branch index 0 is already elided (`branchIndex || undefined`), and the `return <index>` statements are only appended to branches whose `kBranchSerializeReason` is truthy, so a conditional whose branches never serialize writes nothing. The remaining waste is an `else`/`else-if` branch (index > 0) serialized for a reason unrelated to branch swapping (e.g. hoist-through) under a condition that can never change and with no direct closures (`_if_closure` reads the index at `src/dom/signals.ts:245`, the `_if` signal at `src/dom/control-flow.ts:433`). Suppressing it needs another `_if` arg at every call site, which likely costs more compiled-output bytes than the rare wire bytes saved. Related but separate: `packages/runtime-tags/src/html/writer.ts:209` TODO about `_var` re-registering an already-registered return value.

## Gate `<return valueChange>` serialization on parent mutation

`packages/runtime-tags/src/translator/core/return.ts:75` | 2026-07-02 | impact:low | effort:high

Existing TODO: `<return value=... valueChange=...>` force-serializes the `TagVariableChange` accessor even when no parent ever assigns the tag variable. Unlike the now-implemented `<let>` equivalent (gated on `binding.assignmentSections` in `core/let.ts`), this needs cross-template information: whether any parent mutates the tag variable is only known at the parent's compile (`mutatesTagVar` in `packages/runtime-tags/src/translator/util/known-tag.ts:147`), so the reason would have to flow through the param serialize reason group protocol rather than a local check.

## Avoid resume-registering native tag change handlers

`packages/runtime-tags/src/translator/visitors/function.ts:108` | 2026-07-02 | impact:med | effort:high

Existing TODO: plain `on*` event handlers on native tags skip registration, but controllable change handlers (`valueChange=`, `checkedChange=`, ...) always go through `_resume` registration, costing a registry id + registration statement in server output and a registry entry client-side for every controllable input. The registration is currently load-bearing, not incidental: the handler function itself is serialized as a `ControlledHandler` scope prop (`packages/runtime-tags/src/html/attrs.ts:430`) that the shared typed resume effects (`_attr_input_checked_script` and friends in `src/dom/controllable.ts`) read when the user interacts before any re-render, and serializing a function requires it to be registered. Removing the registration means restructuring controllable resume so a per-section registered effect rebuilds the handler closure from serialized state (the way `on*` handlers work) instead of one shared runtime effect per controllable type reading a serialized function. Touches the ~30 controllable fixtures; needs deliberate design, not a spot fix.

## Extend marker-elision optimizations to await/try/html-comment

`packages/runtime-tags/src/translator/core/await.ts:64` | 2026-07-02 | impact:low | effort:med

The `onlyChildInParent`/`singleChild` optimizations (reuse the parent element as the marker node, skip range boundary comments) are implemented for `for`/`if`/`show` but not `await`/`try`, which always create a `#text` marker binding (`await.ts:64`, `packages/runtime-tags/src/translator/core/try.ts:71`), and `_try` always emits BranchStart/BranchEnd comments (`packages/runtime-tags/src/html/writer.ts:834-868`) even for static bodies. `packages/runtime-tags/src/translator/core/html-comment.ts:107` has the analogous TODO for reusing the comment node itself.

## Specialize dynamic tags statically known to be renderers

`packages/runtime-tags/src/translator/util/tag-name-type.ts:187` | 2026-07-02 | impact:med | effort:med

Existing TODO: `<${input.component}/>` style dynamic tags always compile against the fully general `_dynamic_tag` runtime, which includes string-tag (native element) handling, attr normalization for both shapes, and `attrTags` merging. When analysis can prove the value is never a string (e.g. it only ever receives template imports), a slimmer helper skipping the native-element path could be emitted, and conversely an always-string value could compile like a native tag with a dynamic name. Measured in a mid-size app on marko 6.2.3: an UNCONDITIONAL body-only dynamic tag (`<${input.content}/>`, the documented slot-render pattern) is already free in the browser bundle — resume adopts the server DOM — but wrapping the same tag in `<if>` makes the branch client-re-creatable and pulls `_dynamic_tag` plus the dynamic-attrs/controllable machinery into the shared chunk: `dom.mjs` grew 11.4 → 16.9 kB (+5.5 kB raw, +1.9 kB gzip on every route). `<if=input.aside><${input.aside.content}/></if>` is the natural authoring of an optional slot, so this cliff is hit from idiomatic code; a body-only-typed value (`Marko.Body` / attr-tag `content`) under a conditional is exactly the "never a string" case above and would skip the tag-name dispatch and dynamic-attrs support entirely.

## See through statically-shown `<show>` bodies in `getNodeContentType`

`packages/runtime-tags/src/translator/util/sections.ts:294` | 2026-07-02 | impact:low | effort:low

`getNodeContentType` classifies a core `<show>` tag as `ContentType.Dynamic`, so a placeholder next to a `<show>` always gets a `<!>` separator / Replace visit even when the `<show>` value is statically truthy and the body is spliced inline with no runtime boundary (`packages/runtime-tags/src/translator/core/show.ts:156`). Sibling-text analysis in `packages/runtime-tags/src/translator/visitors/placeholder.ts` now looks through `<show>` body edges for correctness; the converse refinement (returning the body's start/end content type for a static-display `<show>`, like the custom-tag case does via `tagSection.content`) would drop a few unnecessary separator bytes.

## Parallel test workers oversubscribe cores via rolldown's thread pool

`scripts/test-parallel.js:40` | 2026-07-02 | impact:low | effort:med

`npm run test:parallel` runs one mocha process per core, but each fixture bundle already drives rolldown's own multi-threaded build (`packages/runtime-tags/src/__tests__/utils/bundle.ts`), so even a serial run uses ~1.4 cores. On a 4-core box the whole suite lands at ~87s vs ~238s serial (2.7×), short of the ~4× the core count implies, because the workers contend for the same native threads. `RAYON_NUM_THREADS=1` in the worker env made no measurable difference, so rolldown isn't honoring it. If rolldown (or its native binding) exposes a per-build thread cap, pinning workers to 1 bundler thread each — so N workers ≈ N threads total — could recover much of the lost efficiency and let the runner scale closer to linearly on higher core counts.

## Skip child client wiring for constant-input instances of client-inert tags

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts:96` | 2026-07-09 | impact:med | effort:high

A custom-tag call site always emits the child's client wiring — `_child($scope[...])` plus one `$input_*($scope[...], value)` per attribute — even when every input is a compile-time constant and the instance sits in content that never re-renders. The child's input signals then run at hydration, so whatever they read must ship. Measured: a leaf icon tag (an existence check against a generated manifest, then an `<img>`) rendered twice with literal inputs on an otherwise-static route pulled its module, the manifest, and their chunk-mates — 2.6 kB raw / 1.2 kB gzip of client JS for a page with zero dynamic content; the workaround was hand-replacing the tag with a plain `<img>`. The cross-file channel needed already half-exists at this line: `childExtra.domExports?.setupEmpty` skips the child's setup call when the child template proved it a noop. Extending that shape — child analysis exporting "client behavior is a pure function of inputs (no own state/handlers)", call-site analysis proving all inputs constant — would let the translator emit nothing for the instance, making leaf display tags (icons, badges, chips: the most-instantiated tag category) free wherever they're statically used. Note the module-retention side of the same story: a shaken-to-nothing child import still survives if the child has any top-level side effect (`<style>` CSS import, `_script` resume registration, un-annotated `static` calls), so the wiring skip must drop the import too, not just the calls.

## Emit caret-free controllable input value handling for statically non-text types

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:1025` | 2026-07-09 | impact:low | effort:med

`value:=` on a native input always binds the generic `_attr_input_value` helper, which drags `dom/controllable.ts`'s value path plus `dom/resolve-cursor-position.ts` (caret preservation across external value writes) into the bundle. Selection APIs don't apply to non-text input types — `selectionStart` is null and `setSelectionRange` throws on `type="number"` — yet an app whose only controllable is a number stepper still ships the caret machinery — measured at ~1.25 kB raw of controllable + cursor-position code in the shared runtime chunk for a single `value:clamp:=` on a statically-typed `type="number"` input. When the `type` attribute is a static literal outside the text family (text/search/tel/url/password/textarea), the translator could bind a caret-free variant of the value helper; a dynamic or missing `type` keeps the generic path.

## Reserve a trailing id for the section-instances fallback accessor

`packages/runtime-tags/src/translator/util/references.ts:1923` | 2026-07-10 | impact:low | effort:med

When a section has no `sectionAccessor`, `getSectionInstancesAccessor` falls back to `ClosureScopes + section.id` (optimized: `B3`). Both emit sites are explicit literals — the serialized key in `visitors/program/html.ts:118` and the renderer argument in `visitors/program/dom.ts:129` — so nothing derives the key at runtime, and it could instead be an id reserved after the parent section's binding ids (the `closureAccessorIds` pattern in the same file), dropping the letter for ~1 byte per serialized owner scope and per renderer. Only the `hoist-*-from-dynamic` fixtures exercise the fallback, so the win is small; note the `typeof accessor === "number"` branch in `getSectionInstancesAccessorLiteral` is currently unreachable (both paths concatenate strings) and would either become live or be removed by this change.

## Make the runtime analyzably pure so bundlers tree-shake it fully

`packages/runtime-tags/src/html/serializer.ts:8` | 2026-07-11 | impact:high | effort:med

Bundlers retain every runtime module body as a potential side effect, so unused runtime code survives tree-shaking; a plain fixture page bundle measured 16.1 kB minified where 2.7 kB is reachable. Two categories block purity analysis: the serializer's iterator-consumption patch mutates `Generator.prototype`/`AsyncGenerator.prototype` at import time (`serializer.ts:6-9`), and getter-hazard constructs (bare `globalThis`/built-in member reads, the serializer's well-known-value tables) execute at module top level. A verified fix: install the iterator patch lazily from the `Serializer` constructor — every render's `State` creates one at render start, before user code can consume a generator — and wrap the remaining hazardous initializers in `/* @__PURE__ */`-annotated function calls. With both done, a bare import of the whole runtime (html + dom) tree-shakes to zero bytes (rolldown probe), with no bundler configuration or package metadata involved. Expect fixture `sizes.json` churn that mixes real wins with accounting: side-effect-free modules that previously landed in a shared chunk (never counted by per-entry sizes) inline into the measured entry chunks.

## Split rarely-used dom machinery out of the eager runtime chunks

`packages/runtime-tags/src/dom/queue.ts:190` | 2026-07-11 | impact:med | effort:med

A module is hosted in exactly one chunk, so machinery co-hosted with common helpers ships to every app that uses any of them. Three verified splits: (1) `_enable_catch` in the render queue imports `renderCatch` from `./control-flow` at module top level (`queue.ts:7`), so every stateful app's queue chunk hosts branch machinery — move catch/pending installation to a new `dom/catch.ts` (compiled output still calls `_enable_catch`) that installs its wrappers through an internal `enableCatchPending` hook on the queue, and move `setConditionalRenderer` to `dom/scope` (its dependency home; control-flow, spread, and catch all import it); note catch still pulls branch construction — `renderCatch` must swap in a newly rendered catch block — the win is dropping `dom/control-flow`'s loop, dynamic-tag, and spread imports. (2) The spread/`content`-attr machinery (`_attrs`/`_attrs_content` and helpers, `dom/dom.ts:169`) co-hosts with the plain write helpers — move it to a new `dom/spread.ts`. (3) `dom/controllable.ts` hosts all five control kinds in one module, so a page with one controllable pulls all five — split into `dom/controllable/` with one module per kind (input value, checked [checkedValue co-hosts, it calls checked], select, details/dialog open) over a shared delegation/change-detection core. Public exports stay unchanged and compiled output byte-identical (two bundle snapshots lose a bundler collision suffix, `_script$1` → `_script`).

## Ship the dom runtime dist as preserved modules for file-granular chunking

`packages/runtime-tags/scripts/bundle.mts:22` | 2026-07-11 | impact:med | effort:low

`dist` bundles the dom runtime into a single `dom.mjs`, so an application bundler hosts the whole runtime in the first chunk that needs any of it. Shipping preserved modules behind the `dom.mjs` re-export facade lets app bundlers chunk the runtime at file granularity (which is also what makes the hosting splits above land for published consumers, not just src-linked dev). Requires `scripts/sizes.ts` to classify the whole dist directory as runtime for the user/runtime split — the facade stops being the only runtime module id. Depends on the runtime being analyzably pure (previous entries) for the unused files to actually drop.

## Skip per-reference scope channel tracking when a render uses no channels

`packages/runtime-tags/src/html/serializer.ts:660` | 2026-07-13 | impact:med | effort:high

Every scope written as a value emits `_(id)` after `trackScope` (`serializer.ts:660`) does a `refs.get` and either `trackChannel` or `newScopeReference`; this whole path exists only so `_(id)` emissions stay channel-aware for independently-lazy-loaded content. In a fully synchronous render `state.channel` is `undefined` on every flush and `trackChannel` short-circuits immediately (`serializer.ts:1670`), so the `refs.get`/Reference bookkeeping per scope reference is pure overhead — and scope references are the single most common object in real component trees (a scope-reference-heavy microbenchmark spends a measurable double-digit fraction of its time here). The naive guard "this flush has no channel" is unsafe: a scope first referenced in a channel-free flush can be referenced again in a later channel-gated flush, and the Reference's `channel` field (set at creation) feeds `trackChannel`'s parent-channel walk, so skipping creation in the first flush would change cross-channel dependency tracking. A safe version needs a serializer-lifetime "no channels have ever been used" signal (channels only arise from `stringifyScopes`' `channel` argument, driven by lazy/`ready`-gated content in `writer.ts`), gating the fast path on it and falling back the first time any channel appears.

## Cut per-value Reference allocation in data-heavy serialization

`packages/runtime-tags/src/html/serializer.ts:608` | 2026-07-13 | impact:med | effort:high

Profiling a 464 KB data-heavy payload (product records: nested objects, arrays, long strings) — after the prototype-dispatch and char-code key-escaping fast paths already landed — shows the remaining cost is dominated by intrinsic per-value bookkeeping: ~12% GC, driven by a `new Reference` (`serializer.ts:307`) allocated in `writeReferenceOr` (`serializer.ts:608`) / `writeString` (`serializer.ts:723`) for every object, array, and >12-char string, plus ~12% in output `StringAdd` and ~8% across the `refs`/`REGISTRY`/`strs` Map probes. Most of those References back a value that is written once and never referenced again, so they are immediate garbage. A lazy scheme — record only the buffer position on first write, upgrade to a full Reference only on a second occurrence — would remove the bulk of the allocation, but is blocked by cross-flush dedup: a value first written in one flush and reused in a later one resolves through `assignId`'s parent/accessor walk (`serializer.ts:1868`), which needs pos+parent+accessor+flush retained from the first write (essentially the whole Reference). Splitting within-flush dedup (the common case, which only needs `pos` via `assignId`'s early return) from the cross-flush path would let the first write store a cheap position marker and allocate a Reference only when one is actually reused. Output-preserving, but a deep change to the reference model, not a spot fix.

## Hoist the thrice-shipped "consumed render result" error string

`packages/runtime-tags/src/html/template.ts:274` | 2026-07-13 | impact:low | effort:low

The 41-char literal `"Cannot read from a consumed render result"` is written verbatim three times — lines 274, 302 and 335 — and none is behind a `MARKO_DEBUG` guard, so all three ship. The minifier does not hoist repeated string literals into a shared binding. Hoist to a module-scope `const` and reference it in the three `new Error(...)` sites to drop ~80 bytes from the SSR runtime.

## Remove the second-stage dynamic import from load entries

`packages/runtime-tags/src/translator/visitors/program/index.ts:142` | 2026-07-13 | impact:high | effort:low

A triggered load entry currently adds `import(template).then(() => ready(id))`, creating a second module-discovery/evaluation boundary. Use a static side-effect import then `ready(id)`; inspect complete emitted chunk graphs because `src/__tests__/utils/bundle.ts:274` currently omits entry-only chunks from `sizes.json`.

## Consolidate each lazy template behind one load adapter

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts:187` | 2026-07-13 | impact:med | effort:med

Lazy inputs and setup each create separate virtual modules, import records, promises, and generated loaders despite sharing one child implementation. Use one cached adapter per trigger/template while retaining fine-grained exports; measure increasing input counts plus shared, nested, error, and unmount cases.

## Let parameter reason groups select client registration anchors

`packages/runtime-tags/src/translator/util/known-tag.ts:240` | 2026-07-13 | impact:high | effort:high

Parameter reason groups narrow HTML payload per known call site, but child DOM modules still install every optional `_resume` root. Export pure values plus group-keyed registration anchors so known callers retain only active behavior; stateful, circular, dynamic, or unknown callers conservatively retain all groups.

## Couple dynamic-tag resume registration to the retained signal

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts:585` | 2026-07-13 | impact:med | effort:med

`enableDynamicTagResume()` emits standalone non-pure `_resume_dynamic_tag()` beside an otherwise removable pure signal; `dynamic-tag-spread` consequently retains 6,128 minified / 2,523 Brotli bytes. Register through a retained `_dynamic_tag_resume(...)` shape so signal and native spread/event support shake together; keep controlled and lazy paths as positive tests.

## Gate catch runtime enablement on retained boundary capability

`packages/runtime-tags/src/translator/core/try.ts:194` | 2026-07-13 | impact:med | effort:high

Every `<try>` emits non-pure `_enable_catch()` even when no client boundary survives. Gate it on a retained capability covering descendant effects, ready work, renderers, and recreation—not only `_try`, because lazy resumed effects can throw without that signal.

## Coalesce async render microtasks

`packages/runtime-tags/src/dom/queue.ts:97` | 2026-07-13 | impact:med | effort:low

`queueAsyncRender()` schedules one microtask per completion, so the first drains shared work and later callbacks perform empty runs and advance `runId`. Coalesce with a scheduled bit cleared immediately before flushing; test simultaneous completions and effects that enqueue more work.

## Use lightweight cleanup links for internal closure subscriptions

`packages/runtime-tags/src/dom/signals.ts:265` | 2026-07-13 | impact:med | effort:high

Each internal dynamic-closure subscription allocates an `AbortController`, listener, set entry, and closure. Store compact owner/set cleanup links destroyed directly with the scope, retaining `AbortController` only for public lifecycle APIs; validate large keyed-list reorder/destruction and owner swaps.

## Index lazy ready work by channel and render

`packages/runtime-tags/src/dom/resume.ts:74` | 2026-07-13 | impact:med | effort:high

`ready(id)` scans every render, then every globally ready id to a fixed point, and splices consumed prefixes. Index pending renders and reverse dependencies by ready id and use cursors; preserve late reordered gates and source-stream order.

## Avoid scanning every embedded render after unrelated DOM mutations

`packages/runtime-tags/src/dom/resume.ts:81` | 2026-07-13 | impact:med | effort:med

`initEmbedded()` checks every embedded anchor after every document child-list mutation, creating embedded-count × mutation-batch work. Process removed subtrees or group/schedule anchor checks while preserving move/reinsert, adoption, nested removal, and exactly-once destruction.

## Propagate invoke-only inputs through local define tags after analysis

`packages/runtime-tags/src/translator/util/known-tag.ts:675` | 2026-07-13 | impact:med | effort:high

Invoke-only propagation skips same-program `<define>` props because reads are incomplete mid-analysis. A conservative post-analysis fixed point can make local handlers read persisted slots lazily, removing intersections, input updates, closure propagation, and owner state; compare with equivalent cross-file tags and cover recursion/aliases/hoists.

## Skip closest-branch writes for sections that cannot resume

`packages/runtime-tags/src/translator/util/signals.ts:1409` | 2026-07-13 | impact:low | effort:low

`writeHTMLResumeStatements()` emits `_resume_branch(scopeId)` for some inert sections without a serialize reason (`html-style-injection` has no DOM bundle or scope payload). Omit or guard it with the finalized section reason while preserving empty referenced owners and ready-channel descendants.
## Persisted eager client cost: registered renderer graphs keep hydration bundles ~2.3x

`packages/runtime-tags/src/translator/visitors/program/dom.ts:130` | 2026-07-04 (re-measured; earlier shell theory corrected) | impact:high | effort:high

Sourcemap-attributed decomposition on marko-ecommerce `/search`
(production): persisted eager client JS is ~31 kB raw / ~13.5 kB gz vs
8.6/~4.5 kB with `persisted: false`. The earlier "document shell in the
eager chunk" framing was wrong in scale — program templates are never
registered; the shell string (323 B here) rode ordinary export retention
(a wrapper's `$template` getter interpolates the layout's template
export), which run's route table forced by dynamically importing wrapper
modules. That is fixed on the run branch (`import(...).then(() => 0)`
lets the bundler tree-shake the namespace; −1.9 kB raw app-wide, and it
scales with real-world shell/layout size). The remaining eager cost is
structural:

- `marko/dist/dom.mjs` retention grows 8.3 → 21 kB raw: registered
  renderer graphs (every page/layout client compile registers all its
  content for swaps and same-route structural merges) reference the full
  control-flow machinery the templates use anywhere — loops, ifs,
  await/try/catch, dynamic tags, controllable scripts, spread attrs.
- The update applier family (`createUpdate`, `_update_*`, ~2 kB) sits in
  the eager shared chunk because `dom.mjs` is one module and eager code
  imports `_updating`/`_script_update`/registration helpers from it.
  Splitting the applier into its own dist entry would defer it to the
  first `?update` chunk load, but the entry must import dom internals
  (registry, queue) _externally_ — a self-contained second bundle would
  duplicate the resume registry and silently pair nothing (the exact bug
  the entry re-export design exists to avoid); the current
  `scripts/bundle.mts` has no inter-entry externals.
- Per-route page client compiles are 1.5–3.2 kB each (vs ~0.1 kB
  non-persisted) — the renderer graph itself.

The real lever is a **slim hydration entry**: the eager path needs only
what non-persisted hydration needs (resume + the page's interactive
signals); the full registration graph (renderers, value signals, merges)
is consumed only on the first persisted navigation, which already lazily
loads the `?update` entry — registration could ride that load as a
`persisted: "register"` compile the `?update` entry imports. **Landed**
(attempt 2 — see designs/persisted-pages-architecture.md's "Compile-time
surface" section, `entry: "persisted"`): the module-state duality is solved with
single-instance module scope (main exports scriptlet bindings, register
imports them; register builds never re-register main-registered ids) and
the split's total-JS cost deduped to ~free. The eager win remains gated
on finishing the runtime's phase partition — a module mixing
hydration-used and lazily-used exports is hosted in one (eager) chunk
with all its imports. Enablers in place (`"sideEffects": ["**/*.marko"]`,
preserved dist modules behind the `dom.mjs` facade, spread/catch/
`_script_update` file splits). Post-split attribution of the /search
eager closure pinpoints the remaining drivers, largest first:

1. **RESOLVED — the render-graph retainer was cross-chunk child imports.**
   Unminified-build tracing (an unretained fixture ruled out every
   in-module suspect; the app's eager chunk literally ended in
   `export { $walks, $setup, $template }`) named it: register entry
   builds imported child template render graphs (template, walks, setup,
   value setters) from the child's **main** module, so the lazy
   register/update chunks' use of those exports pinned every child's
   otherwise tree-shakeable graph into the eager hydration chunks —
   run's route wrapper made every page a "child". Fixed by pointing
   child `.marko` imports at the child's `?register` module in register
   builds (`getChildImportPath` in `visitors/tag/custom-tag.ts`).
   /search eager fell 31.5→21.2 kB raw, 13.5→9.7 kB gz (non-persisted
   baseline 8.6/4.5); the `persisted-update-layout` fixture's eager
   client JS fell 96%.
2. **RESOLVED — controllable kind split.** `dom/controllable.ts` split
   into per-kind modules under `dom/controllable/` (`input-value`,
   `input-checked` (with checkedValue, which depends on it), `select`,
   `open`, plus `shared` for the change/reset delegation and detection
   helpers), so a page hosting one controllable kind no longer pulls the
   other four. App /search eager: 21.6→19.1 kB raw, 9.9→9.1 kB gz;
   /item 22.3→19.8 raw, 10.4→9.5 gz.
3. **RESOLVED — `_enable_catch` hosting.** The catch machinery
   (`_enable_catch`, `renderCatch`, `handlePendingTry`) moved to its own
   `dom/catch.ts` (with `setConditionalRenderer` relocated to `scope.ts`,
   where its actual dependencies live), so an await/try page's slim main
   pulls only the catch module — for/spread/control-flow/update now host
   in a fully lazy chunk. App /item eager: 28.5→22.3 kB raw,
   13.1→10.4 kB gz; fixture corpus net −2.8 kB min.

## Persisted compute guards make previously-unused imports bundle client-side

`packages/runtime-tags/src/translator/util/signals.ts:646` | 2026-07-04 | impact:med | effort:med

The `if (!_updating()) $x($scope, serverFn(...))` guard keeps
request-derived compute invocations in the client dom output, so a module
imported with a plain `import` that was previously tree-shaken as unused
becomes "used" and bundles. marko-ecommerce's search page shipped its
entire 500-product catalog + search implementation (+74 kB raw / +10 kB
gz) because it used `import` where its siblings used `server import`.
The runtime behavior is correct either way (the guard prevents
invocation during applies), but the size footgun is silent. A diagnostic —
warn when a persisted client compile retains an import referenced only
from update-guarded compute invocations — would surface it; run's
`server import` remains the correct authoring tool.

Implementation caveat (scoped 2026-07-05): the naive predicate ("every
reference sits under an `if (!_updating())` guard in the main compile")
is not sufficient to advise `server import`. The `?persisted` render
graph can legitimately invoke the same expressions client-side when a
state-driven branch containing a request-derived hole or compute
constructs after load — `_updating()` is false then, the guard passes,
and the import is needed. The subset safe to warn on is imports whose
references are reachable ONLY from update-borne construction (no
enclosing state-driven branch path), which needs section-graph
reachability analysis, not a per-reference guard check. Without that,
the diagnostic should hedge its wording (“verify nothing renders this
client-side”) or only fire when every reference's enclosing sections are
request-derived all the way to the program root.

## Audit sideEffects declarations across the other packages

`packages/runtime-class/package.json`, `packages/compiler/package.json` (and the `@marko/run`/`@marko/vite` repos) | 2026-07-04 | impact:med | effort:low

`@marko/runtime-tags` now declares `"sideEffects": ["**/*.marko"]`; the
sibling packages declare nothing, which is safe-by-default but leaves
tree-shaking wins on the table and the invariants implicit. Worth an
explicit pass per package: runtime-class ships the Marko 5 interop compat
files the runtime-tags translator bare-imports (`dist/runtime/helpers/
tags-compat/*`) plus vendored `src/node_modules/@internal/*` — any future
declaration there MUST mark those side-effectful or interop silently
breaks in optimized builds; the run/vite packages ship runtime clients
(`runtime/persisted.js` etc.) that look declaration-safe. Also worth
deciding whether published component libraries should get documented
guidance (a library shipping `.marko` tags must exclude them from any
`sideEffects` declaration for registration side effects to survive).

## Closure subscription sets ride persisted payloads/documents they can never fire in

`packages/runtime-tags/src/translator/util/signals.ts` (closure emission) | 2026-07-05 | impact:low | effort:med

Non-immediate closures serialize their subscription sets
(`ClosureScopes:<binding>`) under persisted spine guards, so persisted
documents and update payloads carry them (a docs-style sidebar serializes
one Set entry per link scope). For request-derived (non-state) bindings
the update applier never invokes these sets -- patches deliver values
through branch merges (see the nested-branch participation fix in
`util/references.ts`) -- so for bindings with NO state dimension the set
is dead weight in both the document and every update payload. Gating the
subscription emit (and the set's scope prop) to bindings whose sources
include state would drop those bytes; needs care because the same emit
site serves the CSR dynamic-closure path where state closures genuinely
subscribe.

## Update-generic child links serialize twice in update payloads

`packages/runtime-tags/src/translator/util/known-tag.ts` (`knownTagAnalyze` spine reason + `_update_child` capture) | 2026-07-06 | impact:low | effort:med

For an update-generic child, an update render serializes the parent ->
child scope link under both the typed `UpdateChild:<accessor>` key (the
interpreter's descent path, written by `_update_child`) and the plain
accessor (the persisted-spine serialize reason, `global: true`, which
document resume genuinely needs for the live side of descent). The plain
key is dead weight in update payloads for these children -- roughly a
`"Sa":_(5)`-sized entry per generic child per navigation. Removing it
needs the serialize-reason system to distinguish update renders from
persisted document renders for a binding (an update-vs-resume reason
split), which does not exist today; the runtime-gated capture helper was
the non-invasive alternative this slice took.
