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

Existing TODO: `<${input.component}/>` style dynamic tags always compile against the fully general `_dynamic_tag` runtime, which includes string-tag (native element) handling, attr normalization for both shapes, and `attrTags` merging. When analysis can prove the value is never a string (e.g. it only ever receives template imports), a slimmer helper skipping the native-element path could be emitted, and conversely an always-string value could compile like a native tag with a dynamic name.

## See through statically-shown `<show>` bodies in `getNodeContentType`

`packages/runtime-tags/src/translator/util/sections.ts:294` | 2026-07-02 | impact:low | effort:low

`getNodeContentType` classifies a core `<show>` tag as `ContentType.Dynamic`, so a placeholder next to a `<show>` always gets a `<!>` separator / Replace visit even when the `<show>` value is statically truthy and the body is spliced inline with no runtime boundary (`packages/runtime-tags/src/translator/core/show.ts:156`). Sibling-text analysis in `packages/runtime-tags/src/translator/visitors/placeholder.ts` now looks through `<show>` body edges for correctness; the converse refinement (returning the body's start/end content type for a static-display `<show>`, like the custom-tag case does via `tagSection.content`) would drop a few unnecessary separator bytes.

## Parallel test workers oversubscribe cores via rolldown's thread pool

`scripts/test-parallel.js:40` | 2026-07-02 | impact:low | effort:med

`npm run test:parallel` runs one mocha process per core, but each fixture bundle already drives rolldown's own multi-threaded build (`packages/runtime-tags/src/__tests__/utils/bundle.ts`), so even a serial run uses ~1.4 cores. On a 4-core box the whole suite lands at ~87s vs ~238s serial (2.7×), short of the ~4× the core count implies, because the workers contend for the same native threads. `RAYON_NUM_THREADS=1` in the worker env made no measurable difference, so rolldown isn't honoring it. If rolldown (or its native binding) exposes a per-build thread cap, pinning workers to 1 bundler thread each — so N workers ≈ N threads total — could recover much of the lost efficiency and let the runner scale closer to linearly on higher core counts.

## Persisted register-all-content retains unreachable DOM renderers (document shell in client bundles)

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
(attempt 2 — see the handoff): the module-state duality is solved with
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
2. `controllable.ts` is mixed-phase: hydration `_script` variants (and
   the controlled helpers interactive inputs genuinely need eagerly, eg
   the app's qty input) host together with the `_default`/value writers
   and all five control kinds' machinery — a file split by kind and phase
   lets per-app usage decide. Post-fix this is the whole eager gap on
   /search: product mains import `_on` + `_attr_input_value*` and get
   the 11 kB (raw) event+controllable chunk.
3. `_enable_catch` hosting: a page using `<try>`/`<await>` (the app's
   /item) calls `_enable_catch()` from its slim main, and it lives in
   `dom/control-flow.ts`, which statically imports branch construction
   plus `common/for.ts` and `dom/spread.ts` — one import drags a 20.6 kB
   (raw) chunk eager. Splitting the catch machinery into its own module
   (or trimming what the catch wrappers reference) would confine the
   cost to what catch actually needs.

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
