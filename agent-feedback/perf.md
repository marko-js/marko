# Performance

Runtime speed and bundle size opportunities. Format and rules: [README.md](README.md).

## Derive await/try branch scope owners without serialization

`packages/runtime-tags/src/translator/util/signals.ts` › `writeHTMLResumeStatements` | 2026-07-02 | impact:low | effort:high

State-driven `<if>`/`<for>` branches now link their owner from resume markers instead of serializing it, but `<await>`/`<try>` branches still serialize `_: _scope_with_id(parentScopeId)`. Two blockers were verified: (1) their branch machinery can be tree-shaken out of resume bundles while closures into the content still fire (`await-tag` fixture: `_await_promise` is dropped, `branchesEnabled` stays off, so branch visits are never processed), and (2) reordered/out-of-order content pushes scope data and closure subscriptions a flush earlier than its markers, so a state update mid-stream can read the owner before it could be linked. Solving these likely means an explicit enable in the resume payload and deferring subscriptions to marker processing.

## Serialize ConditionalRenderer only when the condition is stateful or has direct closures

`packages/runtime-tags/src/html/writer.ts` › `writeBranchEnd` | 2026-07-02 | impact:low | effort:med

Existing TODO in `_if`, but narrower than it reads: branch index 0 is already elided (`branchIndex || undefined`), and the `return <index>` statements are only appended to branches whose `kBranchSerializeReason` is truthy, so a conditional whose branches never serialize writes nothing. The remaining waste is an `else`/`else-if` branch (index > 0) serialized for a reason unrelated to branch swapping (e.g. hoist-through) under a condition that can never change and with no direct closures (`_if_closure` reads the index at `src/dom/signals.ts:245`, the `_if` signal at `src/dom/control-flow.ts:433`). Suppressing it needs another `_if` arg at every call site, which likely costs more compiled-output bytes than the rare wire bytes saved. Related but separate: `packages/runtime-tags/src/html/writer.ts:209` TODO about `_var` re-registering an already-registered return value.

## Gate `<return valueChange>` serialization on parent mutation

`packages/runtime-tags/src/translator/core/return.ts` › `analyze` | 2026-07-02 | impact:low | effort:high

Existing TODO: `<return value=... valueChange=...>` force-serializes the `TagVariableChange` accessor even when no parent ever assigns the tag variable. Unlike the now-implemented `<let>` equivalent (gated on `binding.assignmentSections` in `core/let.ts`), this needs cross-template information: whether any parent mutates the tag variable is only known at the parent's compile (`mutatesTagVar` in `packages/runtime-tags/src/translator/util/known-tag.ts:147`), so the reason would have to flow through the param serialize reason group protocol rather than a local check.

## Avoid resume-registering native tag change handlers

`packages/runtime-tags/src/translator/visitors/function.ts` › `canIgnoreRegister` | 2026-07-02 | impact:med | effort:high

Existing TODO: plain `on*` event handlers on native tags skip registration, but controllable change handlers (`valueChange=`, `checkedChange=`, ...) always go through `_resume` registration, costing a registry id + registration statement in server output and a registry entry client-side for every controllable input. The registration is currently load-bearing, not incidental: the handler function itself is serialized as a `ControlledHandler` scope prop (`packages/runtime-tags/src/html/attrs.ts:430`) that the shared typed resume effects (`_attr_input_checked_script` and friends in `src/dom/controllable.ts`) read when the user interacts before any re-render, and serializing a function requires it to be registered. Removing the registration means restructuring controllable resume so a per-section registered effect rebuilds the handler closure from serialized state (the way `on*` handlers work) instead of one shared runtime effect per controllable type reading a serialized function. Touches the ~30 controllable fixtures; needs deliberate design, not a spot fix.

## Extend marker-elision optimizations to await/try/html-comment

`packages/runtime-tags/src/translator/core/await.ts` › `analyze` | 2026-07-02 | impact:low | effort:med

The `onlyChildInParent`/`singleChild` optimizations (reuse the parent element as the marker node, skip range boundary comments) are implemented for `for`/`if`/`show` but not `await`/`try`, which always create a `#text` marker binding (`await.ts:64`, `packages/runtime-tags/src/translator/core/try.ts:71`), and `_try` always emits BranchStart/BranchEnd comments (`packages/runtime-tags/src/html/writer.ts:834-868`) even for static bodies. `packages/runtime-tags/src/translator/core/html-comment.ts:107` has the analogous TODO for reusing the comment node itself.

## Specialize dynamic tags statically known to be renderers

`packages/runtime-tags/src/translator/util/tag-name-type.ts` › `analyzeExpressionTagName` | 2026-07-02 | impact:med | effort:med

Existing TODO: `<${input.component}/>` style dynamic tags always compile against the fully general `_dynamic_tag` runtime, which includes string-tag (native element) handling, attr normalization for both shapes, and `attrTags` merging. When analysis can prove the value is never a string (e.g. it only ever receives template imports), a slimmer helper skipping the native-element path could be emitted, and conversely an always-string value could compile like a native tag with a dynamic name. Measured in a mid-size app on marko 6.2.3: an UNCONDITIONAL body-only dynamic tag (`<${input.content}/>`, the documented slot-render pattern) is already free in the browser bundle — resume adopts the server DOM — but wrapping the same tag in `<if>` makes the branch client-re-creatable and pulls `_dynamic_tag` plus the dynamic-attrs/controllable machinery into the shared chunk: `dom.mjs` grew 11.4 → 16.9 kB (+5.5 kB raw, +1.9 kB gzip on every route). `<if=input.aside><${input.aside.content}/></if>` is the natural authoring of an optional slot, so this cliff is hit from idiomatic code; a body-only-typed value (`Marko.Body` / attr-tag `content`) under a conditional is exactly the "never a string" case above and would skip the tag-name dispatch and dynamic-attrs support entirely.

## See through statically-shown `<show>` bodies in `getNodeContentType`

`packages/runtime-tags/src/translator/util/sections.ts` › `getNodeContentType` | 2026-07-02 | impact:low | effort:low

`getNodeContentType` classifies a core `<show>` tag as `ContentType.Dynamic`, so a placeholder next to a `<show>` always gets a `<!>` separator / Replace visit even when the `<show>` value is statically truthy and the body is spliced inline with no runtime boundary (`packages/runtime-tags/src/translator/core/show.ts:156`). Sibling-text analysis in `packages/runtime-tags/src/translator/visitors/placeholder.ts` now looks through `<show>` body edges for correctness; the converse refinement (returning the body's start/end content type for a static-display `<show>`, like the custom-tag case does via `tagSection.content`) would drop a few unnecessary separator bytes.

## Parallel test workers oversubscribe cores via rolldown's thread pool

`scripts/test-parallel.js` › `SLICED_FILES` | 2026-07-02 | impact:low | effort:med

`npm run test:parallel` runs one mocha process per core, but each fixture bundle already drives rolldown's own multi-threaded build (`packages/runtime-tags/src/__tests__/utils/bundle.ts`), so even a serial run uses ~1.4 cores. On a 4-core box the whole suite lands at ~87s vs ~238s serial (2.7×), short of the ~4× the core count implies, because the workers contend for the same native threads. `RAYON_NUM_THREADS=1` in the worker env made no measurable difference, so rolldown isn't honoring it. If rolldown (or its native binding) exposes a per-build thread cap, pinning workers to 1 bundler thread each — so N workers ≈ N threads total — could recover much of the lost efficiency and let the runner scale closer to linearly on higher core counts.

## Skip child client wiring for constant-input instances of client-inert tags

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `analyze.enter` | 2026-07-09 | impact:med | effort:high

A custom-tag call site always emits the child's client wiring — `_child($scope[...])` plus one `$input_*($scope[...], value)` per attribute — even when every input is a compile-time constant and the instance sits in content that never re-renders. The child's input signals then run at hydration, so whatever they read must ship. Measured: a leaf icon tag (an existence check against a generated manifest, then an `<img>`) rendered twice with literal inputs on an otherwise-static route pulled its module, the manifest, and their chunk-mates — 2.6 kB raw / 1.2 kB gzip of client JS for a page with zero dynamic content; the workaround was hand-replacing the tag with a plain `<img>`. The cross-file channel needed already half-exists at this line: `childExtra.domExports?.setupEmpty` skips the child's setup call when the child template proved it a noop. Extending that shape — child analysis exporting "client behavior is a pure function of inputs (no own state/handlers)", call-site analysis proving all inputs constant — would let the translator emit nothing for the instance, making leaf display tags (icons, badges, chips: the most-instantiated tag category) free wherever they're statically used. Note the module-retention side of the same story: a shaken-to-nothing child import still survives if the child has any top-level side effect (`<style>` CSS import, `_script` resume registration, un-annotated `static` calls), so the wiring skip must drop the import too, not just the calls.

## Emit caret-free controllable input value handling for statically non-text types

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `getRelatedControllable` | 2026-07-09 | impact:low | effort:med

`value:=` on a native input always binds the generic `_attr_input_value` helper, which drags `dom/controllable.ts`'s value path plus `dom/resolve-cursor-position.ts` (caret preservation across external value writes) into the bundle. Selection APIs don't apply to non-text input types — `selectionStart` is null and `setSelectionRange` throws on `type="number"` — yet an app whose only controllable is a number stepper still ships the caret machinery — measured at ~1.25 kB raw of controllable + cursor-position code in the shared runtime chunk for a single `value:clamp:=` on a statically-typed `type="number"` input. When the `type` attribute is a static literal outside the text family (text/search/tel/url/password/textarea), the translator could bind a caret-free variant of the value helper; a dynamic or missing `type` keeps the generic path.

## Reserve a trailing id for the section-instances fallback accessor

`packages/runtime-tags/src/translator/util/references.ts` › `getDebugNameAsIdentifier` | 2026-07-10 | impact:low | effort:med

When a section has no `sectionAccessor`, `getSectionInstancesAccessor` falls back to `ClosureScopes + section.id` (optimized: `B3`). Both emit sites are explicit literals — the serialized key in `visitors/program/html.ts:118` and the renderer argument in `visitors/program/dom.ts:129` — so nothing derives the key at runtime, and it could instead be an id reserved after the parent section's binding ids (the `closureAccessorIds` pattern in the same file), dropping the letter for ~1 byte per serialized owner scope and per renderer. Only the `hoist-*-from-dynamic` fixtures exercise the fallback, so the win is small; note the `typeof accessor === "number"` branch in `getSectionInstancesAccessorLiteral` is currently unreachable (both paths concatenate strings) and would either become live or be removed by this change.

## Make the runtime analyzably pure so bundlers tree-shake it fully

`packages/runtime-tags/src/html/serializer.ts` › `Generator` | 2026-07-11 | impact:high | effort:med

Bundlers retain every runtime module body as a potential side effect, so unused runtime code survives tree-shaking; a plain fixture page bundle measured 16.1 kB minified where 2.7 kB is reachable. Two categories block purity analysis: the serializer's iterator-consumption patch mutates `Generator.prototype`/`AsyncGenerator.prototype` at import time (`serializer.ts:6-9`), and getter-hazard constructs (bare `globalThis`/built-in member reads, the serializer's well-known-value tables) execute at module top level. A verified fix: install the iterator patch lazily from the `Serializer` constructor — every render's `State` creates one at render start, before user code can consume a generator — and wrap the remaining hazardous initializers in `/* @__PURE__ */`-annotated function calls. With both done, a bare import of the whole runtime (html + dom) tree-shakes to zero bytes (rolldown probe), with no bundler configuration or package metadata involved. Expect fixture `sizes.json` churn that mixes real wins with accounting: side-effect-free modules that previously landed in a shared chunk (never counted by per-entry sizes) inline into the measured entry chunks.

## Split rarely-used dom machinery out of the eager runtime chunks

`packages/runtime-tags/src/dom/queue.ts` › `_enable_catch` | 2026-07-11 | impact:med | effort:med

A module is hosted in exactly one chunk, so machinery co-hosted with common helpers ships to every app that uses any of them. Three verified splits: (1) `_enable_catch` in the render queue imports `renderCatch` from `./control-flow` at module top level (`queue.ts:7`), so every stateful app's queue chunk hosts branch machinery — move catch/pending installation to a new `dom/catch.ts` (compiled output still calls `_enable_catch`) that installs its wrappers through an internal `enableCatchPending` hook on the queue, and move `setConditionalRenderer` to `dom/scope` (its dependency home; control-flow, spread, and catch all import it); note catch still pulls branch construction — `renderCatch` must swap in a newly rendered catch block — the win is dropping `dom/control-flow`'s loop, dynamic-tag, and spread imports. (2) The spread/`content`-attr machinery (`_attrs`/`_attrs_content` and helpers, `dom/dom.ts:169`) co-hosts with the plain write helpers — move it to a new `dom/spread.ts`. (3) `dom/controllable.ts` hosts all five control kinds in one module, so a page with one controllable pulls all five — split into `dom/controllable/` with one module per kind (input value, checked [checkedValue co-hosts, it calls checked], select, details/dialog open) over a shared delegation/change-detection core. Public exports stay unchanged and compiled output byte-identical (two bundle snapshots lose a bundler collision suffix, `_script$1` → `_script`).

## Ship the dom runtime dist as preserved modules for file-granular chunking

`packages/runtime-tags/scripts/bundle.mts` | 2026-07-11 | impact:med | effort:low

`dist` bundles the dom runtime into a single `dom.mjs`, so an application bundler hosts the whole runtime in the first chunk that needs any of it. Shipping preserved modules behind the `dom.mjs` re-export facade lets app bundlers chunk the runtime at file granularity (which is also what makes the hosting splits above land for published consumers, not just src-linked dev). Requires `scripts/sizes.ts` to classify the whole dist directory as runtime for the user/runtime split — the facade stops being the only runtime module id. Depends on the runtime being analyzably pure (previous entries) for the unused files to actually drop.

## Skip per-reference scope channel tracking when a render uses no channels

`packages/runtime-tags/src/html/serializer.ts` › `trackScope` | 2026-07-13 | impact:med | effort:high

Every scope written as a value emits `_(id)` after `trackScope` (`serializer.ts:660`) does a `refs.get` and either `trackChannel` or `newScopeReference`; this whole path exists only so `_(id)` emissions stay channel-aware for independently-lazy-loaded content. In a fully synchronous render `state.channel` is `undefined` on every flush and `trackChannel` short-circuits immediately (`serializer.ts:1670`), so the `refs.get`/Reference bookkeeping per scope reference is pure overhead — and scope references are the single most common object in real component trees (a scope-reference-heavy microbenchmark spends a measurable double-digit fraction of its time here). The naive guard "this flush has no channel" is unsafe: a scope first referenced in a channel-free flush can be referenced again in a later channel-gated flush, and the Reference's `channel` field (set at creation) feeds `trackChannel`'s parent-channel walk, so skipping creation in the first flush would change cross-channel dependency tracking. A safe version needs a serializer-lifetime "no channels have ever been used" signal (channels only arise from `stringifyScopes`' `channel` argument, driven by lazy/`ready`-gated content in `writer.ts`), gating the fast path on it and falling back the first time any channel appears.

## Cut per-value Reference allocation in data-heavy serialization

`packages/runtime-tags/src/html/serializer.ts` › `writeReferenceOr` | 2026-07-13 | impact:med | effort:high

Profiling a 464 KB data-heavy payload (product records: nested objects, arrays, long strings) — after the prototype-dispatch and char-code key-escaping fast paths already landed — shows the remaining cost is dominated by intrinsic per-value bookkeeping: ~12% GC, driven by a `new Reference` (`serializer.ts:307`) allocated in `writeReferenceOr` (`serializer.ts:608`) / `writeString` (`serializer.ts:723`) for every object, array, and >12-char string, plus ~12% in output `StringAdd` and ~8% across the `refs`/`REGISTRY`/`strs` Map probes. Most of those References back a value that is written once and never referenced again, so they are immediate garbage. A lazy scheme — record only the buffer position on first write, upgrade to a full Reference only on a second occurrence — would remove the bulk of the allocation, but is blocked by cross-flush dedup: a value first written in one flush and reused in a later one resolves through `assignId`'s parent/accessor walk (`serializer.ts:1868`), which needs pos+parent+accessor+flush retained from the first write (essentially the whole Reference). Splitting within-flush dedup (the common case, which only needs `pos` via `assignId`'s early return) from the cross-flush path would let the first write store a cheap position marker and allocate a Reference only when one is actually reused. Output-preserving, but a deep change to the reference model, not a spot fix.

## Remove the second-stage dynamic import from load entries

`packages/runtime-tags/src/translator/visitors/program/index.ts` › `translate.enter` | 2026-07-13 | impact:high | effort:low

A triggered load entry currently adds `import(template).then(() => ready(id))`, creating a second module-discovery/evaluation boundary. Use a static side-effect import then `ready(id)`; inspect complete emitted chunk graphs because `src/__tests__/utils/bundle.ts:274` currently omits entry-only chunks from `sizes.json`.

## Consolidate each lazy template behind one load adapter

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `translateDOM` | 2026-07-13 | impact:med | effort:med

Lazy inputs and setup each create separate virtual modules, import records, promises, and generated loaders despite sharing one child implementation. Use one cached adapter per trigger/template while retaining fine-grained exports; measure increasing input counts plus shared, nested, error, and unmount cases.

## Let parameter reason groups select client registration anchors

`packages/runtime-tags/src/translator/util/known-tag.ts` › `knownTagTranslateHTML` | 2026-07-13 | impact:high | effort:high

Parameter reason groups narrow HTML payload per known call site, but child DOM modules still install every optional `_resume` root. Export pure values plus group-keyed registration anchors so known callers retain only active behavior; stateful, circular, dynamic, or unknown callers conservatively retain all groups.

## Couple dynamic-tag resume registration to the retained signal

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `enableDynamicTagResume` | 2026-07-13 | impact:med | effort:med

`enableDynamicTagResume()` emits standalone non-pure `_resume_dynamic_tag()` beside an otherwise removable pure signal; `dynamic-tag-spread` consequently retains 6,128 minified / 2,523 Brotli bytes. Register through a retained `_dynamic_tag_resume(...)` shape so signal and native spread/event support shake together; keep controlled and lazy paths as positive tests.

## Gate catch runtime enablement on retained boundary capability

`packages/runtime-tags/src/translator/core/try.ts` › `translate.dom.exit` | 2026-07-13 | impact:med | effort:high

Every `<try>` emits non-pure `_enable_catch()` even when no client boundary survives. Gate it on a retained capability covering descendant effects, ready work, renderers, and recreation—not only `_try`, because lazy resumed effects can throw without that signal. Concretely, moving `_enable_catch()` into the `/*@__PURE__*/ _try` constructor (`src/dom/control-flow.ts:344`) is the unsound naive form: a try boundary reconstructed from the resume payload (`_resume_branch`/resume comments) never runs the constructor, so a descendant lazy/async resumed effect that throws would find the queue's `runEffects`/`runRender` catch wrappers uninstalled (`src/dom/queue.ts:190`). The current top-level `_enable_catch()` statement runs unconditionally at module eval precisely to guarantee those wrappers exist before any resumed throw.

## Coalesce async render microtasks

`packages/runtime-tags/src/dom/queue.ts` › `queueAsyncRender` | 2026-07-13 | impact:med | effort:low

`queueAsyncRender()` schedules one microtask per completion, so the first drains shared work and later callbacks perform empty runs and advance `runId`. Coalesce with a scheduled bit cleared immediately before flushing; test simultaneous completions and effects that enqueue more work.

## Use lightweight cleanup links for internal closure subscriptions

`packages/runtime-tags/src/dom/signals.ts` › `subscribeToScopeSet` | 2026-07-13 | impact:med | effort:high

Each internal dynamic-closure subscription allocates an `AbortController`, listener, set entry, and closure. Store compact owner/set cleanup links destroyed directly with the scope, retaining `AbortController` only for public lifecycle APIs; validate large keyed-list reorder/destruction and owner swaps.

## Index lazy ready work by channel and render

`packages/runtime-tags/src/dom/resume.ts` › `ready` | 2026-07-13 | impact:med | effort:high

`ready(id)` scans every render, then every globally ready id to a fixed point, and splices consumed prefixes. Index pending renders and reverse dependencies by ready id and use cursors; preserve late reordered gates and source-stream order.

## Avoid scanning every embedded render after unrelated DOM mutations

`packages/runtime-tags/src/dom/resume.ts` › `initEmbedded` | 2026-07-13 | impact:med | effort:med

`initEmbedded()` checks every embedded anchor after every document child-list mutation, creating embedded-count × mutation-batch work. Process removed subtrees or group/schedule anchor checks while preserving move/reinsert, adoption, nested removal, and exactly-once destruction.

## Propagate invoke-only inputs through local define tags after analysis

`packages/runtime-tags/src/translator/util/known-tag.ts` › `analyzeAttrs` | 2026-07-13 | impact:med | effort:high

Invoke-only propagation skips same-program `<define>` props because reads are incomplete mid-analysis. A conservative post-analysis fixed point can make local handlers read persisted slots lazily, removing intersections, input updates, closure propagation, and owner state; compare with equivalent cross-file tags and cover recursion/aliases/hoists.

## Skip closest-branch writes for sections that cannot resume

`packages/runtime-tags/src/translator/util/signals.ts` › `writeHTMLResumeStatements` | 2026-07-13 | impact:low | effort:low

`writeHTMLResumeStatements()` emits `_resume_branch(scopeId)` for some inert sections without a serialize reason (`html-style-injection` has no DOM bundle or scope payload). Omit or guard it with the finalized section reason while preserving empty referenced owners and ready-channel descendants.

## Interop bridges a Class parent's `on-x` handler as a fresh closure each render

`packages/runtime-class/src/runtime/helpers/dynamic-tag.js` › `addTagsEvents` | 2026-07-13 | impact:low | effort:low

`addTagsEvents` calls `bindTagsEventHandler(component, handler, extraArgs)` to
fold a Class parent's `on-x("method")` binding into the Tags child's `onX` input,
allocating a **new** function every render (client path). The Tags child's input
signal (`_const("input_onX", …)`) dirty-checks by identity, so every Class-parent
re-render re-runs the child's event-attach signal (`_on(...)`) even though the
target method is unchanged. `_on` is delegation-based so the re-attach itself is
cheap, but the wasted signal re-execution is avoidable: cache the bound handler
per `(component, methodName, extraArgs)` (string-method handlers are the common
case and cache trivially) so the child sees a stable `onX` identity across
renders.

## `getClassHydrationMode` never memoizes its "no hydration" result

`packages/runtime-class/src/translator/index.js` › `getClassHydrationMode` | 2026-07-13 | impact:low | effort:low

`getClassHydrationMode` caches `meta.classHydration` only when it returns a
truthy mode (SELF/DESCENDANT); the `undefined` (no-hydration) result is never
stored, so `Object.hasOwn(meta, "classHydration")` stays false and every parent
that references a shared inert child re-runs the full recursive descent over that
child's subtree. In a wide/deep component graph this is repeated O(subtree) work
per referencing parent. Memoizing the negative result (`meta.classHydration =
undefined` with a presence sentinel, or a separate `visited`-scoped cache) makes
it single-pass per file.

## Compat resume runs the event resolver over every key of every boundary scope

`packages/runtime-tags/src/dom/compat.ts` › `compat.init` | 2026-07-13 | impact:low | effort:low

The `SET_SCOPE_REGISTER_ID` resume iterates **all** enumerable keys of every
compat boundary scope (including `$global`, `m5c`, `#Id`, `#StartNode`, …) and
calls `classEventResolver` on each, even when the app has no bridged Class→Tags
events. Related: `Component.prototype.___setCustomEvents` is patched on the
prototype for **all** Class components (`tags-compat/runtime-dom.js:59`), so every
component with custom events pays an extra `for…of` + `resolveRegistered` per
event regardless of interop, and `compat.onFlush` permanently patches
`Chunk.prototype.flushHTML` process-wide (`html/compat.ts:57`), taxing every pure
Marko 6 chunk flush with a `writersByGlobal.get` miss once the class-compat
module is loaded. Each is minor individually; worth gating the resolver loop on a
"has bridged events" flag and scoping the patches.

## Document resume-payload cost of per-item custom tags and patterns to contain it

`packages/runtime-tags/cheatsheet.md` › `Golden rules` | 2026-07-18 | impact:med | effort:med

A grid rendered as one small custom tag per cell (a 16x16 minesweeper board, parent `<let>` holding a 2D array of `{mine,revealed,flagged,adjacent}` cell objects, one `<mine-cell>` per cell) produces a production SSR page of 69.6kB where the `M._.r` resume payload is 44kB: the 256 serialized cell objects account for ~11kB, and the remaining ~130 bytes per tag instance is scope/binding bookkeeping — per-instance scope entries plus closure-subscriber sets serialized as `af:new Set([_(9),_(11),...])` with one `_(id)` per instance per closed-over parent `<let>` (an 8x8 board measures 18.5kB/11kB at the same ratio). The initial grid is also a pure function of input (every cell identical) yet fully serialized, since `<let>` has no way to declare a recomputable/lazy initial value. Some of this may be inherent to resumability, but neither `cheatsheet.md` nor any user-facing doc mentions resume-payload size as a design consideration or the mitigations (flat primitive state, rendering repeated leaf cells as plain elements in the parent instead of one custom tag each, deriving recomputable state with `<const>`); a short guidance section with this shape of numbers would steer grid/list-heavy apps away from an accidental 44kB-per-page tax, and the per-instance subscriber-set encoding may itself be compressible.

## Inline single-consumer derived value signals, not only intersection-collapsed members

`packages/runtime-tags/src/translator/util/signals.ts` › `getSignal` | 2026-07-19 | impact:med | effort:med

A derived value signal with a single downstream consumer still emits two module functions where one would do. `<for|item| of=input.items><li>${item.name}</li></for>` compiles (optimize, `-o dom`) to `const $for_content__item_name = ($scope, item_name) => _text($scope.a, item_name);` plus `const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);` — the value function is referenced exactly once. The same shape appears for a single-use `<const>` and even when the value feeds a child component. `esbuild --minify --bundle` keeps both functions (the value fn is a live binding), so this is real shipped size (~16-18B minified floor per binding, more with child consumers). `getSignalFn` (`signals.ts:607-619`) emits `value.signal.identifier(scope, value.value, …)` as a call for every downstream value unless `value.signal.inline` is set; `inline` is assigned only inside the `collapsedIntersectionSource` branch (`signals.ts:296-313`), gated on `member.reads.size === 1` and the member being one of the source signal's values. Standalone single-consumer derived bindings — `<for>` param members and single-use `<const>` — never enter that branch, so they always get a named function plus a one-shot call, even though the inlining machinery already exists. When a derived value signal has a single consumer within the same section and is not persisted/read cross-scope, inline its render body into the consumer signal. The correct gate is "single consumer call-site" (slightly broader than the intersection path's `reads.size===1`, e.g. `${item.name} - ${item.name}` has 2 reads but 1 consumer function and is still inlinable); keep standalone functions when the value has >1 consumer, is persisted (`forcePersist`/cross-scope), or has dynamic subscribers. Pervasive (every `<for>` and every single-use derived `<const>`), and "bundle size is a feature" here. Distinct from all existing perf/cleanup entries (the `known-tag.ts:675` invoke-only entry is about `<define>` props, not derived-value signal emission).

## Drop or warn on unused derived `<const>` bindings instead of emitting a live discarded computation

`packages/runtime-tags/src/translator/core/const.ts` › `analyze` | 2026-07-19 | impact:low | effort:low

A derived `<const>` with zero readers still ships and re-runs its initializer on every update of its dependencies. For `<let/x=1><const/expensive=x.map(v => v * 2).join(",")>…` where `expensive` is never referenced, the `$x` let signal contains a discarded bare-expression statement `/* expensive */$scope.c.map(v => v * 2).join(",")`, recomputed on every `x` update; because the expression has method calls, `esbuild --minify --bundle` cannot drop it (a pure/literal unused const like `99;` minifies away, but any method-chain/impure-looking derived `<const>` survives). `core/const.ts` analyze (:82-88) always calls `setBindingDownstream(binding, valueExtra)` and `addSetupExpr(...)` when a non-aliased binding exists, with no check for whether the binding has any reads; `getSignalFn` (`signals.ts:620-628`) then emits the value expression as a bare statement (`withLeadingComment(value.value, …)`) whenever the derived signal has no render statements, retaining it for potential side effects. A `<const>`/`<let>` with no readers should be eliminated (no signal value emitted), or at minimum surface an "unused binding" diagnostic; a provably-pure initializer should never be emitted as a live statement. Niche (unused bindings are usually oversight and most are pure/minifiable) but genuinely non-recoverable for impure-looking exprs. Shares the emit locus with the single-consumer inlining entry above but is a distinct phenomenon (0 consumers → bare live expr, vs 1 consumer → redundant call).

## Decompose the monolithic `isInteractive` gate into per-capability flags

`packages/runtime-tags/src/translator/util/entry-builder.ts` › `visit` | 2026-07-19 | impact:high | effort:high

`state.init` (ship the client init/hydration bootstrap) is flipped whenever `programExtra.isInteractive` is set, and `isInteractive` is force-set to `true` by six unrelated triggers: an event handler (`visitors/tag/native-tag.ts:225`), a `<script>` (`core/script.ts:84`), any function literal (`visitors/function.ts:203`), a scriptlet (`visitors/scriptlet.ts:31`), a dynamic tag (`visitors/tag/dynamic-tag.ts:150`), and `<lifecycle>` (`core/lifecycle.ts:60`). It is monotone and never refined, so a page that only delegates one click handler pulls the full effect/reactive-state bootstrap. Split it into narrower capability flags (event-delegation vs effects vs reactive-state) and gate the corresponding runtime bootstrap segments independently; a mis-classified capability is a resume failure, so default any unclassified trigger to the full path. Unlike whole-program register downgrades this fact is per-entry-local (no shared-module intersection hazard), but first verify `state.init`'s downstream is actually decomposable rather than one indivisible entrypoint.

## Lower a never-reassigned `<let>` to `_const` and drop its `_resume_branch` disjunct

`packages/runtime-tags/src/translator/core/let.ts` › `translate.exit` | 2026-07-19 | impact:low | effort:med

`core/let.ts` calls `initValue(binding, true)` unconditionally, so a `<let>` whose `binding.assignmentSections` is empty (semantically a `<const>`) still lowers to the stateful `_let`/`_let_change` wrapper even though source analysis already routes it through `resolveDerivedSources`. Gate `isLet` on `!!binding.assignmentSections || hasValueChange` (after alias-root resolution) so it emits `_const`; under `isOptimize` `getScopeAccessorLiteral` ignores the `isLet` arg (`util/references.ts:1796`) so the scope slot is unchanged and resume stays aligned. This also removes the `BindingType.let` disjunct of the `resumeClosestBranch` OR at `util/signals.ts:1419`, so a section whose only branch-linking trigger was such a let stops emitting `_resume_branch` (a per-section SSR root in ~444 `html.bundle.js`) — sound only when `hasAbortSignal` and `referencedClosures` are also absent (combine with the "skip closest-branch writes" item above). Correctness gate: a two-way-bound `<let>` is mutated through a child `valueChange`/`constantViolation` in a different section, so confirm that path populates `assignmentSections` before the swap (and exclude `valueChange`/controllable lets) or a genuinely-mutated let ships `_const` and goes stale. Low aggregate impact — this is migration residue (a `<let>` that should be `<const>`, ~1/503 fixtures) — but a clean DOM+SSR root removal when it fires.

## Demote state sources never written from client-reachable code

`packages/runtime-tags/src/translator/util/references.ts` › `finalizeReferences` | 2026-07-19 | impact:low | effort:high

`isStateSerializeReason` (`util/serialize-reasons.ts:167`) treats any binding whose sources contain `.state` as an unconditional serialize reason, and `references.ts:1016` deliberately adds reason `true` for every assigned binding with the comment "narrowing is a 0-byte no-op until a state-dropping pass exists". A `<let>` reassigned (`x=`/`x++`) only during synchronous render — never from an effect/handler/async/registered-fn, and not transitively reading any client-mutable binding — never needs its prior value on the client, so its state root could be dropped. Add a conservative client-immutability fixpoint in `finalizeReferences` (mutable if any assignment's enclosing function is a client-reachable effect/handler, or it transitively reads a client-mutable binding; default mutable on any alias/property-alias/spread/closure escape) and replace the `true` with the narrowed reason. Note the flagship "derived" shapes (`let total = items.reduce(...)`) are declaration initializers with no `assignmentSections` and already flow through `resolveDerivedSources`; the real target (render-only-reassigned-then-read lets) is a minority, largely-anti-pattern shape, so gate behind `isOptimize` and add render-reassigned-and-displayed / closure-read / derived-from-client-mutable-base stale-DOM fixtures before shipping.

## Investigate the `_script` setup + handler double-registration for event handlers

`packages/runtime-tags/src/dom/signals.ts` › `_script` | 2026-07-19 | impact:med | effort:med

`_script(id, fn)` fuses a `_resume(id, fn)` side effect with its returned effect-queuing closure and is absent from `pureDOMFunctions`; it is the dominant resume root, appearing in ~494/503 committed `dom.bundle.js` (more than `_content_resume` + `_var_resume` + `_hoist_resume` combined). A handler-only setup emits two registrations for one interactive handler: `basic-counter-const-event-handler/dom.bundle.js` ships both `_const(3, _script("a1", ($scope)=>_on($scope.a,"click",$scope.d)))` and a bare `_resume("a0", $increment)`. Determine whether the delegated-event resume path can reattach `_on` from the handler id (`a0`) alone, which would make the setup `_script` registration (`a1`) a droppable root repeated across hundreds of bundles; most `_script` registrations are legitimate (effects must re-run at resume), so any win is confined to the event-handler-setup subset. Splitting construction from registration here (as the registered-function path already does at `util/signals.ts:1111`) also creates the seam the "parameter reason groups select client registration anchors" item needs.

## Elide reactive closure subscription when the closed-over binding is provably immutable

`packages/runtime-tags/src/translator/util/signals.ts` › `getSignal` | 2026-07-19 | impact:med | effort:med

A binding read across a section boundary builds a `_closure_get`/dynamic `_closure` (present in ~100 `dom.bundle.js`) that provides both scope access and a reactive subscription so the child re-renders when the parent value changes; the dynamic-closure case (`util/signals.ts:641`) also emits an extra `__closure` signal + `_closure` join per loop section. When the closed-over binding is client-immutable (a `<const>`, or a never-assigned `<let>` per the const-lowering item, whose sources are all immutable) the subscription can never fire and is dead registration. Degrade it to a one-time scope read and drop the subscription/dynamic-closure signal, reusing the client-immutability fixpoint; default to reactive on any assignment/alias/spread/closure escape. Verify-first: confirm a const-across-boundary fixture actually ships a redundant subscription rather than a plain scope read before implementing.

## Disconnect controlled select/details/dialog MutationObservers instead of leaking one per spread re-render

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_select_value_script` | 2026-07-20 | impact:med | effort:low

`_attr_select_value_script` (controllable.ts:376) and `_attr_details_or_dialog_open_script` (465) each `new MutationObserver(...).observe(el, …)` unconditionally on every call, with no disconnect and no idempotency guard. For a statically-typed controllable this is harmless because its `$setup__script` runs once at mount. But when the controllable is reached through spread attributes (`<select ...attrs>`, `<details ...attrs>`, `<dialog ...attrs>`), the compiler emits `_attrs_script` inside the tag's reactive signal — verified by compiling a spread `<select ...attrs>`, whose DOM output calls `$attrs2__script($scope)` inside the `_const("attrs", …)` body — and `_script`'s returned closure re-queues its effect on every call (signals.ts:386-390, no guard). So `_attrs_script` → `_attr_select_value_script` re-runs on each re-render, attaching a brand-new observer to the still-live element every time; the observers accumulate unboundedly and all fire for the same mutation. Guard observer creation (stash it on the element/scope and skip if present, or only create it on the initial/resume pass); the input/checkbox/textarea scripts already avoid this via idempotent event delegation. Re-verify: instrument `_attr_select_value_script` to count `new MutationObserver` and drive a spread controlled `<select>` whose spread object is recomputed on click — the count climbs 1→2→3 across re-renders, versus a static `value=`/`valueChange=` select that stays at 1.

## Gate the DOM closure pending-resume id on the subscriber section, not any closure section

`packages/runtime-tags/src/translator/util/signals.ts` › `getSignal` | 2026-07-20 | impact:med | effort:low

In `getSignal`'s closure `signal.build`, the `_closure_get` pending-resume id is emitted whenever `some(closure.closureSections, underTryPlaceholder)` is true (signals.ts:355-356) — i.e. when ANY section that closes over the binding sits under a `<try>` `@placeholder`. But the matching HTML-side registration in `writeHTMLResumeStatements` is gated on `underTryPlaceholder(section)` for that specific subscriber section (1223-1235), and both keys are the same `getResumeRegisterId(section, closure, "pending")` built from the same `section`, so they are meant to be 1:1. A dynamic closure whose subscriber section is NOT under a placeholder therefore still gets a pending id whenever a sibling closure of the same source is under one — shipping a dead resume-id string into the DOM bundle plus a module-eval `_resume(id, …)` that nothing looks up. Change the DOM gate to `underTryPlaceholder(section)` to match the HTML side exactly (HTML-true always implies some()-true, so this only removes the spurious extras). Re-verify: compile a template where one closure sibling is under a `<try><@placeholder>` and another is not; the non-placeholder sibling's pending id appears in the optimized `-o dom` output but `grep -c` for that id in the `-o html` output is 0.

## Flatten text-only `<if>` chains written with the `<else if=cond>` space syntax, not only `<else-if=cond>`

`packages/runtime-tags/src/translator/core/if.ts` › `flattenTextOnlyConditional` | 2026-07-20 | impact:low | effort:low

`flattenTextOnlyConditional` collapses a text-only conditional inside a native element into a single placeholder ternary, skipping the `_if` runtime, its branch scopes, and the serialize-guard machinery. It bails whenever an `<else>` tag carries any attribute (`if (node.attributes.length) return;`, if.ts:430-432), so the fully-equivalent `<else if=cond>` spelling never flattens even though `<else-if=cond>` does. The bail exists because the expr builder treats every `else`-named tag as unconditional (`isCoreTagName(branchTag, "else") ? text : t.conditionalExpression(...)`, 478-480), which would otherwise drop the `if=` condition. Detect a lone `if=` attribute on the else, admit it through the collection loop, and build `t.conditionalExpression(ifAttr.value, text, expr)` for it — a real bundle-size and runtime cost paid only because of which of two equivalent syntaxes the author chose. Re-verify: compile `<div><if=input.a>A<else-if=input.b>B<else>C</div>` and the same chain with `<else if=input.b>` via `-o html`; the hyphen form yields a ternary inside one `_html(...)`, the space form emits a multi-scope `_if(...)`.

## Skip binding + serialization for a native-tag `content=` attribute that codegen drops when the tag also has body content

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › default export `analyze.enter` | 2026-07-20 | impact:low | effort:low

The translate helper `getUsedAttrs` discards a `content` attribute whenever the native tag has body children (`attr.name === "content" && tag.body.body.length`, native-tag.ts ~1141), so body wins and the content expression is never emitted. But `analyze.enter` processes `content` with no body check: a non-confident value sets `hasDynamicAttributes`, its extra joins `exprExtras`, and the final `addSerializeExpr(...)` folds the content expression's bindings into the element's serialize reason — creating a scope binding, a DOM walk slot, and an HTML `_el_resume` marker for an element whose codegen renders only static body text. Confirmed by compiling `<div content=x>text</div>` vs `<div>text</div>` (same file, `-o dom`/`-o html`): the `content=x` form adds a dead `#div/0` walk `get` that nothing consumes and a dead `_el_resume($scope0_id, "#div/0")` marker; removing `content=x` removes both. Mirror the translate drop-condition in analyze so `content` is ignored when `tag.node.body.body.length` (and consider a diagnostic for the conflicting content+body, like the duplicate-attribute case). Re-verify: the two-file compile diff above.

## Widen WalkRangeSize.Next from 20 to 25 so the walk encoder uses the full 67-91 code range and packs 20-24-node `next` runs into a single char

`packages/runtime-tags/src/common/types.ts` › `WalkRangeSize (member Next)` | 2026-07-20 | impact:low | effort:low

`WalkCode` reserves char codes 67..91 for `next` walks (`Next=67`, `NextEnd=91`, a 25-code span the `// 67 through 91` comment even documents), and `dom/walker.ts:100` already bounds the decode branch at `value < WalkCode.NextEnd + 1` (≤91), but `WalkRangeSize.Next` is 20, so `toCharString` (`translator/util/walks.ts:184`) only ever emits remainder codes 67..86 and codes 87..91 are dead — unlike Over/Out/Multiplier, each fully packed at size 10 (97..106, 107..116, 117..126). As a result a consecutive `next` run of 20-24 nodes emits a redundant Multiplier char (2 chars where 1 suffices), and runs of 200-249 emit 3 where 2 would do; walk strings ship in every compiled DOM template and bundle size is a tracked feature here. Setting `WalkRangeSize.Next = 25` uses the whole range: encoder and decoder both read the enum so the change is coordinated, the widest emitted `next` char becomes 91 (remainder 24), still below the reserved backslash 92, and the decoder's `WalkRangeSize.Next * currentMultiplier + value - WalkCode.Next` reconstruction stays exact. Re-verify: mirror `toCharString` and the walker's `next` branch in node with `rangeSize=25` and confirm n=20..24 each encode to one char with max charCode 91 and decode back to 20..24 (I saw 0 roundtrip mismatches and 0 reserved-code emissions over n=0..600), then flip the enum and run `npm run test:update` plus the size hook to confirm affected DOM fixtures shrink rather than break.
