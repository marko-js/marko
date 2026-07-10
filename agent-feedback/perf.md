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
