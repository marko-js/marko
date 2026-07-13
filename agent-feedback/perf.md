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
