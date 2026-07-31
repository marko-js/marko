# Performance

Runtime speed and bundle size opportunities. Format and rules: [README.md](README.md).

## Avoid resume-registering native tag change handlers

`packages/runtime-tags/src/translator/visitors/function.ts` › `canIgnoreRegister` | 2026-07-02 | impact:med | effort:high

`canIgnoreRegister` skips registration for plain `on*` handlers on native tags, but its `// TODO: all native tag functions should avoid registration but right now change handlers require it` still holds: every `valueChange=`/`checkedChange=` costs a registry id plus a registration statement in server output and a registry entry client-side. The registration is load-bearing today — the handler is serialized as a `ControlledHandler` scope prop (`html/attrs.ts`) that the shared typed resume effects (`_attr_input_checked_script` and friends in `dom/controllable.ts`) read on interaction before any re-render, and serializing a function requires registration. Removing it means restructuring controllable resume so a per-section registered effect rebuilds the handler closure from serialized state, the way `on*` handlers work; that touches the ~30 controllable fixtures. Re-verify: `pnpm run compile -o html -d` on `<let/v="a"/><input value:=v>` emits `_resume(_new_v => { v = _new_v; }, "<file>/valueChange", $scope0_id)`.

## Let a nested-section content passthrough use the slim `_dynamic_tag_content`

`packages/runtime-tags/src/translator/util/binding-prop-tree.ts` › `isDirectContentBinding` | 2026-07-02 | impact:med | effort:med

`<${expr}/>` always builds the fully general `_dynamic_tag` signal (`visitors/tag/dynamic-tag.ts`), whose string-tag branch pulls `_attrs`, `_attrs_content`, `_attrs_script` and `controllableRenders` (`src/dom/control-flow.ts`) into the shared chunk. A slim `_dynamic_tag_content` already exists, emitted as an extra `directContentExport` a known parent calls instead, so `<${input.content}/>` lets the bundler shake the general signal out. But `isDirectContentBinding` requires `read.section === binding.section`, so the idiomatic optional slot `<if=input.aside><${input.aside.content}/></if>` — the read now lives in the `<if>` body section — gets no direct export and drags `_dynamic_tag` in. Relax the section check (the passthrough is still input-less and parameter-less; only the branch scope differs) so the direct export is emitted there too. Related but separate: the `TODO: Optimize for when we are certain that this is either always a string or always a custom tag` at `tag-name-type.ts:191` would cover the `<let>`-bound tag name case. Re-verify: compile that `<if>` template with `-o dom` and check for an `export const $input_aside_content_direct = _dynamic_tag_content(0)` beside the `_dynamic_tag` signal, as `<div><${input.content}/></div>` already produces.

## See through statically-shown `<show>` bodies in `getNodeContentType`

`packages/runtime-tags/src/translator/util/sections.ts` › `getNodeContentType` | 2026-07-02 | impact:low | effort:low

`getNodeContentType` returns `ContentType.Dynamic` for every core `<show>`, so a placeholder beside one is classified `SiblingText.Before` — a `<!>` in the client template plus a Replace visit — even when the display value is statically truthy and `<show>`'s translate exit splices the body inline with no runtime boundary. Compiling `<div><show=true><b/></show>${input.x}</div>` to dom gives `"<div><b></b><!></div>"` / walks `"Db%l"`, versus `"<div><b></b> </div>"` / `"Db l"` for the same markup without the `<show>`. Return the body's `startType`/`endType` for a static-display `<show>`, the way the custom-tag arm reads `tagSection.content[extraMember]`; `evaluate()` on the display attribute is cached, so it is safe to call here even before `<show>`'s own analyze has run. Re-verify with that dom compile.

## Skip child client wiring for constant-input instances of client-inert tags

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `analyze.enter` | 2026-07-09 | impact:med | effort:high

A custom-tag call site always emits the child's client wiring even when every input is a compile-time literal, so the child's dom module ships and its input signals re-run on every client-created instance. Compiling `<div><Icon name="a"/><Icon name="a"/></div>` to dom against an `icon.marko` that only maps a `static const` manifest onto an `<img>` emits `_Icon($scope.a); _tag_input_name($scope.a, "a")` twice plus the `./icon.marko` imports, on a page with zero dynamic content. The cross-file channel half-exists beside `childExtra.domExports?.setupEmpty`: have child analysis also export a "no client-observable behavior" flag and let an all-constant call site emit nothing, dropping the import too — a top-level side effect (`<style>`, `_script` resume, un-annotated `static`) otherwise retains the module. Purity of the child's inputs is not that flag: `_tag_input_name`'s `_attr($scope["#img/0"], "src", ...)` is a pure function of a constant input yet is the only thing that sets `src` when the child is created on the client (it lands in the branch content setup inside an `<if>`), so the flag has to prove the child adds nothing to the cloned DOM — no DOM writes, handlers, effects, or resume registrations — unless the call site also folds the constant into a specialized template. Re-verify with that two-instance dom compile.

## Make the runtime analyzably pure so bundlers tree-shake it fully

`packages/runtime-tags/src/html/serializer.ts` › `Generator` | 2026-07-11 | impact:high | effort:med

Two module-top-level side effects stop bundlers from dropping unused runtime code: `patchIteratorNext` mutates `Generator.prototype`/`AsyncGenerator.prototype` at import, and the `KNOWN_FUNCTIONS`/`KNOWN_OBJECTS` tables read `globalThis` members eagerly — nothing in `src` carries a `/* @__PURE__ */` annotation today. A plain fixture page bundle measures 16.1 kB minified against 2.7 kB reachable. Install the iterator patch from the `Serializer` constructor instead (`html/writer.ts`'s `State` builds one per render, before user code can consume a generator) and wrap the remaining hazardous initializers in `@__PURE__`-annotated calls. Re-verify with a rolldown probe: a bare import of `src/html.ts` plus `src/dom.ts` should tree-shake to zero bytes. Expect fixture `sizes.json` churn mixing real wins with chunk accounting.

## Split rarely-used dom machinery out of the eager runtime chunks

`packages/runtime-tags/src/dom/queue.ts` › `_enable_catch` | 2026-07-11 | impact:med | effort:med

A module is hosted in exactly one chunk, so machinery co-hosted with common helpers ships to every app that uses any of them. Three splits: (1) `queue.ts` imports `renderCatch` from `./control-flow` at module top level, so every stateful app's queue chunk drags in branch machinery — move catch/pending installation to a new `dom/catch.ts` that installs its wrappers through an internal queue hook, and move `setConditionalRenderer` to `dom/scope`, its dependency home. (2) Move `_attrs`/`_attrs_content` and helpers out of `dom/dom.ts` into a new `dom/spread.ts`. (3) Split `dom/controllable.ts` into one module per control kind (input value, checked, select, details/dialog open) over a shared change-detection core. Re-verify public exports and compiled output are unchanged (two bundle snapshots lose a `_script$1` collision suffix) and diff fixture `sizes.json`.

## Ship the dom runtime dist as preserved modules for file-granular chunking

`packages/runtime-tags/scripts/bundle.mts` | 2026-07-11 | impact:med | effort:low

`bundle.mts` writes the dom runtime as a single `dist/dom.mjs`, so an application bundler hosts the whole runtime in the first chunk that needs any of it. Emitting preserved modules behind a `dom.mjs` re-export facade lets app bundlers chunk the runtime at file granularity — which is what makes the module-hosting splits land for published consumers, not just src-linked dev. `scripts/sizes.mts` must then classify the whole dist directory as runtime, since `runtimePath` (the facade) stops being the only runtime module id. Depends on the runtime being analyzably pure for unused files to actually drop. Re-verify by bundling a fixture against the new dist and confirming unreferenced runtime files leave the entry chunk.

## Skip per-reference scope channel tracking when a render uses no ready channels

`packages/runtime-tags/src/html/serializer.ts` › `trackScope` | 2026-07-13 | impact:med | effort:high

Every scope written as a value runs `trackScope` — a `state.refs` probe plus either `trackChannel` or a `new Reference` in `newScopeReference` — before emitting `_(id)`, bookkeeping that exists only to keep `_(id)` channel-aware for independently lazy-loaded content; outside ready-gated content it is pure overhead, since `trackChannel` returns on its first line whenever `ref.channel?.readyId` is falsy. Note the gate is `readyId`, not the channel itself: the html `State` is the root channel and `flushSerializer` passes it to `stringifyScopes` on every scope flush, so "this render passed no channel" is never true, and only `writeWaitReady`'s child SerializeState carries a `readyId`. A per-flush guard is also unsafe — a scope first seen in a readyId-free flush can be referenced from a later gated one, and its `Reference.channel` feeds `trackChannel`'s parent walk. So gate on a serializer-lifetime "no channel with a readyId has ever reached `stringifyScopes`" flag and fall back permanently once one does; the rest of the scope-ref bookkeeping is safe to skip, since `writeScopesRoot` re-creates the Reference on demand and scope refs short-circuit in `ensureId` so their `flush`/`pos` are never read. Re-verify with the cross-channel/lazy serializer tests plus a scope-reference-heavy benchmark.

## Consolidate each lazy template behind one load adapter

`packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `translateDOM` | 2026-07-13 | impact:med | effort:med

The `isLoad` branch emits a separate virtual module, dynamic import, and `_load_signal` loader per lazy input binding (`buildLoadSignalVirtualModule`), plus one more pair for setup (`buildLoadSetupVirtualModule`), even though every one resolves to the same child template; setup also allocates a fresh uid per tag while signals at least dedupe on trigger+file+export. The cost is runtime as well as bytes — each `_load_setup` (`packages/runtime-tags/src/dom/load.ts`) keeps its own `pending`/`renderer` and re-runs `_content(...)`. Use one cached adapter per trigger/template while retaining fine-grained exports so per-input chunking is not lost. Re-verify on the `lazy-tag-twice` fixture's dom snapshot, which shows two `_load_setup` uids for one child, then across increasing input counts plus shared, nested, error, and unmount cases.

## Let parameter reason groups select client registration anchors

`packages/runtime-tags/src/translator/util/known-tag.ts` › `knownTagTranslateHTML` | 2026-07-13 | impact:high | effort:high

Parameter reason groups (`contentSection.paramReasonGroups`, known-tag.ts:246-311) already narrow the HTML payload per known call site via `_set_serialize_reason`, but the child's DOM module emits every `_resume(registerId, fn)` as an unconditional top-level statement (`signals.ts` `writeRegisteredFns`, collected with no serialize-reason gate; `_resume` is intentionally not in `pureDOMFunctions`), so a caller that activates one group still retains the client behavior of all of them. Export pure values plus group-keyed registration anchors so known callers keep only active behavior, with stateful, circular, dynamic, and unknown callers conservatively retaining all groups. The anchor a caller emits must itself be a retained root: in an optimized page bundle every pure chain shakes away (see `fixtures/dynamic-tag-spread/__snapshots__/dom.bundle.js`, which keeps only non-pure statements), and a register id resume cannot resolve is not a no-op — `dom/resume.ts` pushes the missing value and calls it. Re-verify on a fixture whose child has a group no caller activates: that group's registered functions should disappear from the dom bundle snapshot with html output and resume unchanged.

## Coalesce `queueAsyncRender`'s per-completion microtasks

`packages/runtime-tags/src/dom/queue.ts` › `queueAsyncRender` | 2026-07-13 | impact:low | effort:low

`queueAsyncRender()` ends in an unconditional `queueMicrotask(run)`, so N promise completions in one tick schedule N microtasks; the first `run()` drains every pending render and effect and the rest are empty passes that still allocate two arrays and bump `runId`. Streaming resume hits this directly — `dom/load.ts` and `_await_promise` in `dom/control-flow.ts` call it once per settled promise. Guard with a module-level scheduled bit cleared at the top of the flush, so work enqueued during the flush still schedules a fresh microtask. Re-verify: settle several `<await>`/lazy boundaries in one tick and assert `run` executes once.

## Propagate invoke-only inputs into same-program `<define>` tags

`packages/runtime-tags/src/translator/util/known-tag.ts` › `analyzeAttrs` | 2026-07-13 | impact:med | effort:high

`analyzeAttrs` sets `attrExtra.invokeOnly` only when `getRootSection(templateExportAttr.binding.section) !== getProgram().node.extra.section`, so a local `<define>` never gets the treatment an equivalent cross-file tag does — same-program prop trees are mid-analysis with incomplete reads. `<define/Btn|input|><button onClick=input.onClick>x</button></define>` with `<let/count=0/><Btn onClick=() => count++ />${count}` therefore folds `$Btn_content__input_onClick(...)` into the `$count` signal body, re-pushing the handler and re-running its `_on` script on every state update; the identical `tags/btn.marko` version hoists it into `$setup` alone. A conservative post-analysis fixed point would let local handlers read persisted slots lazily, dropping the intersection, input update, closure propagation and owner state. Re-verify: compile both shapes with `node -r ~ts scripts/inspect-compiled-output.mts -o dom -d` and diff the `$count` bodies.

## Skip `_resume_branch` for sections with no serialize reason

`packages/runtime-tags/src/translator/util/signals.ts` › `writeHTMLResumeStatements` | 2026-07-13 | impact:low | effort:low

`resumeClosestBranch` ignores `sectionSerializeReason`, so an inert section emits `_resume_branch(scopeId)` with no accompanying `_scope(...)` write — wasted bytes, plus a `ClosestBranchId`-only scope nothing resumes when nested under a branch. Gate it on the finalized section reason while preserving empty referenced owners and ready-channel descendants. Re-verify: `fixtures/html-style-injection/__snapshots__/html.bundle.js` must stop emitting `_resume_branch($scope0_id)` for a template whose only state is an unserialized `<let>`.

## Cache the handler `addTagsEvents` binds for a Class parent's `on-x`

`packages/runtime-class/src/runtime/helpers/dynamic-tag.js` › `addTagsEvents` | 2026-07-13 | impact:low | effort:low

On the client path `addTagsEvents` calls `bindTagsEventHandler(component, handler, extraArgs)`, allocating a new closure per render for each `on-x("method")` binding folded into the Tags child's `onX` input. The child's input signal dirty-checks by identity (`_const` in `dom/signals.ts` compares with `!==`), so every Class-parent re-render re-executes the child's `_on` attach signal even though the target method is unchanged — the re-attach is cheap, the signal re-run is the waste. Cache the bound function per `(component, methodName, extraArgs)`; string-method handlers are the common case. Re-verify: two renders of a Class parent with `on-click("handle")` must hand the Tags child the same function reference.

## Gate the compat resume's event-resolver loop and the process-wide patches

`packages/runtime-tags/src/dom/compat.ts` › `compat.init` | 2026-07-13 | impact:low | effort:low

The `SET_SCOPE_REGISTER_ID` resume runs `classEventResolver` over every enumerable key of every compat boundary scope (`$global`, `m5c`, `#Id`, `#StartNode`, …), and `tags-compat/runtime-dom.js` installs that resolver unconditionally, so apps with no bridged Class→Tags events pay the loop anyway. Two related always-on costs: the same file patches `Component.prototype.___setCustomEvents` for every Class component, and `htmlCompat.onFlush` wraps `Chunk.prototype.flushHTML` process-wide, so once class-compat is loaded every pure Marko 6 flush runs an extra `chunk.render` plus a `writersByGlobal.get` miss. Gate the resolver loop on a "has bridged events" flag and scope both patches to interop renders. Re-verify: `rg -n "classEventResolver" packages/runtime-tags/src/dom/compat.ts` still shows the ungated `for…in`.

## Document the resume-payload cost of per-item custom tags

`packages/runtime-tags/cheatsheet.md` › `Golden rules` | 2026-07-18 | impact:med | effort:med

No user-facing doc warns that one custom tag per grid/list cell dominates page weight. Measured with the repo's own optimize bundle (a `<let>` holding a 16x16 array of `{mine,revealed,flagged,adjacent}`, one `<mine-cell>` per cell, SSR): 45.8 kB page = 28.6 kB resume script + 11.7 kB of `<!--M…-->` marker comments; the n=8→n=16 slope is ~112 B of resume data plus ~46 B of markers per instance. Only ~11 kB of the payload is the 256 serialized cell objects; the rest is per-instance bookkeeping — one scope entry each (`{"#ClosestBranchId":N,e:_(N,"a0"),…}`, `"G"` in prod) plus, when the item body reads a parent `<let>`, one `_(id)` per instance in that binding's `ClosureScopes` set on the owner scope (`new Set([_(4),_(6),_(8)])`, see the `at-tags-for-loop-param-intersection-closure` snapshot). `<let>` also has no way to declare a recomputable/lazy initial value, so a grid that is a pure function of input is serialized in full. `cheatsheet.md` covers syntax only (`grep -in payload` returns nothing today) and `RESUMABILITY.md` is a contributor doc; a second addition to the same `Golden rules` list is pending in the entry "Cover `static` for module-level values and helpers in cheatsheet.md", so budget that file's space once. Add a short guidance block (flat primitive state, repeated leaf cells as plain elements in the parent, recomputable state via `<const>`), and separately consider compressing the per-instance scope-entry encoding.

## Inline single-consumer derived value signals, not only intersection-collapsed members

`packages/runtime-tags/src/translator/util/signals.ts` › `getSignal` | 2026-07-19 | impact:med | effort:med

`signal.inline` is set only inside `getSignal`'s `collapsedIntersectionSource` branch (gated on `member.reads.size === 1`), so a standalone derived value with a single consumer still emits a named module function plus a one-shot call from `getSignalFn`. `<for|item| of=input.items><li>${item.name}</li></for>` compiles (`-o dom`, optimize) to `$for_content__item_name` referenced exactly once by `$for_content__$params`; a single-use `<const>` gives the same shape, and minifiers do not cross-inline them (rolldown `minifySync` keeps both arrows), so it is shipped size on every `<for>`. Gate inlining on "one consumer call-site" (broader than `reads.size === 1`), keeping a standalone function when the value has >1 consumer, is persisted (`forcePersist`/cross-scope), or has dynamic subscribers. Re-verify: recompile that `<for>` and confirm the value body lands inside `$for_content__$params`.

## Drop unused derived `<const>` bindings instead of emitting a live discarded expression

`packages/runtime-tags/src/translator/core/const.ts` › `analyze` | 2026-07-19 | impact:low | effort:low

`analyze` calls `setBindingDownstream` + `addSetupExpr` for every non-aliased `<const>` binding without checking whether it has readers, and `translate.exit` still calls `addValue`, so a zero-reader binding survives `pruneBinding`. `<let/x=[1]><const/expensive=x.map(v => v * 2).join(",")>` with `expensive` unread compiles (`-o dom`) to `_let(1, $scope => /* expensive */$scope.b.map(v => v * 2).join(","))` — recomputed on every `x` update and unremovable by the minifier because the expression has calls (an unused `<const/pure=99>` does minify away). Skip value emission for a read-less binding, or at minimum surface an "unused binding" diagnostic. Shares the value-emission locus (`signals.ts` › `getSignalFn`) with "Inline single-consumer derived value signals, not only intersection-collapsed members", but is a distinct phenomenon: 0 consumers → bare live expr vs 1 consumer → redundant call. Re-verify: recompile that template and confirm the `/* expensive */` statement is gone.

## Check whether the handler-setup `_script` registration is droppable

`packages/runtime-tags/src/dom/signals.ts` › `_script` | 2026-07-19 | impact:med | effort:med

`_script(id, fn)` fuses a `_resume(id, fn)` registration with the effect-queuing closure it returns, and is the dominant resume root: 547 of 559 committed `dom.bundle.js` snapshots contain it, versus 73 `_content_resume` + 26 `_var_resume` + 17 `_hoist_resume`; 141 contain both `_script(` and a bare `_resume(`. A `<const>` handler registers twice -- `basic-counter-const-event-handler/__snapshots__/dom.bundle.js` ships `_const(3, _script("a1", ($scope) => _on($scope.a, "click", $scope.d)))` alongside `_resume("a0", $increment)`, and the resume payload carries both (`d: _(1, "a0")` plus `"a1 1"`). Determine whether the delegated-event resume path can reattach `_on` from the handler id alone -- `_on` (dom/event.ts) only sets `element["$click"] = handler` and delegates the type at the document, and the element accessor is already resumed via `_el_resume` -- which would make the setup registration droppable. If so, split construction from registration as `writeRegisteredFns` (`util/signals.ts:1109`) already does for registered fns; that seam is also what the 'parameter reason groups select client registration anchors' item needs. Most `_script` registrations are legitimate (effects must re-run at resume), so any win is confined to the event-handler-setup subset. Re-verify: `rg -l '_script\(' packages/runtime-tags/src/__tests__/fixtures/*/__snapshots__/dom.bundle.js | wc -l`.

## Elide the closure wrapper when the closed-over binding never subscribes

`packages/runtime-tags/src/translator/util/signals.ts` › `getSignal` | 2026-07-19 | impact:med | effort:med

`getSignal`'s cross-section branch always wraps the child render fn -- in `_if_closure`/`_for_closure` via `setClosureSignalBuilder` (core/if.ts, core/for.ts) or else in `_closure_get` -- even when the closed-over binding is client-immutable, i.e. `binding.sources` is undefined and the owner never pushes the signal. Compiling `<const/greeting="hi"/>` with `<if=input.show><div>${greeting}</div></if>` to DOM gives `_const(4)` with no downstream and `_if_closure(0, 0, fn)` used only as the `_if` content setup, which `_content` immediately unwraps (`setup._ || setup`, dom/renderer.ts) -- a dead closure plus a runtime import. The `_closure_get` form is worse: its returned signal has no `._`, so it becomes the setup itself and runs `subscribeToScopeSet` (`ownerScope[accessor] ||= new Set()`, `add`, `trackCleanup`) on every render into a set nothing iterates -- see committed `known-define-tag-empty-section-closure/__snapshots__/dom.bundle.js`, `_if(0, "<div> </div>", "D ", _closure_get(2, ...))` beside `const $count = _const(1)`. Emit the bare render fn when the binding has no sources, keeping the `underTryPlaceholder` resume registration when one is required; the dynamic `_closure` join the original entry also flagged needs no change, since it is already gated on `binding.sources`. Re-verify by compiling that `<if>` template with `-o dom`: `_if_closure` must disappear.

## Cache the resolved lazy-module signal in `_load_signal`

`packages/runtime-tags/src/dom/load.ts` › `_load_signal` | 2026-07-23 | impact:low | effort:low

The closure `signal` is assigned only in the `pending.then((mod) => queueAsyncRender(scope, (signal = mod._), value))` fallback; `insertLoaded` zeroes `branch[AccessorProp.Load]` and applies inputs through the per-entry record, never writing back into the closure. So the first input update after a lazy tag's content is inserted still takes the async arm — an extra promise tick plus a `queueMicrotask(run)` drain outside the current batch. Assign it once where `pending` is created (`pending.then((mod) => (signal ||= mod._), () => 0)`), keeping the `Load`-map arm first: between `Load = 0` and the `values.forEach` flush a synchronous write would be clobbered by the stale collected value. Re-verify: replay that flush against a scope, then call the signal — it must land without a microtask drain.

## Route multi-section serialize-guard disjuncts through the dedupe tracking

`packages/runtime-tags/src/translator/util/serialize-guard.ts` › `getOrHoist` | 2026-07-23 | impact:low | effort:med

`getOrHoist` dedupes and hoists only on its `onlySection` branch; when `getOnlySection(reason.param)` returns undefined the fallback loop over `groupParamsBySection(reason.param)` calls `buildGuardExpr` directly and never consults or updates `seenReasons`/`hoistedReasons`, so an identical single-section guard is re-emitted inline even though it is already hoisted and lexically in scope. In `known-tag-args-spread/__snapshots__/html.bundle.js` line 3 declares `$si__input = _serialize_if($scope0_reason, 0)` while line 12 still emits `(_serialize_if($scope0_reason, 0) || _serialize_if($scope1_reason, 0))`. Look each disjunct up as a synthesized `{ state: undefined, param: params }` in `getSectionReasonState(paramsSection)[isGuard ? "guard" : "if"]`. Re-verify: `grep -Fn '_serialize_if($scope0_reason, 0)' packages/runtime-tags/src/__tests__/fixtures/known-tag-args-spread/__snapshots__/html.bundle.js` must stop reporting both a declarator and an inline copy.

## Prune `classIdToBranch` entries the tags→class direction never looks up

`packages/runtime-tags/src/dom/compat.ts` › `classIdToBranch` | 2026-07-23 | impact:low | effort:low

`compat.init`'s `SET_SCOPE_REGISTER_ID` handler adds every resumed scope carrying `m5c` to the process-global `classIdToBranch`, but the only `delete` is in `compat.render`, which runs for the class→tags direction only; tags→class scopes (written by `writeSetScopeForComponent`, read on the client only as `scope.m5c` in `renderAndMorph`) are retained forever. They also outlive `initEmbedded`'s teardown, which drops `curRenders[renderId]` and releases the parallel `scopesByRender` record, leaving this map the last strong ref to a destroyed branch. Gate the `set` on `scope.m5i === undefined`, the key only the tags→class payload carries. Note the same handler retains every registered scope in `scopesByRender` for the render's lifetime, so top-level renders gain nothing. Distinct from "Compat resume runs the event resolver over every key of every boundary scope", which targets the other cost in this same handler and is worth fixing in one pass. Re-verify: `rg -n classIdToBranch packages/runtime-tags/src/dom/compat.ts` still shows one `set` (init) and one `delete` (render).

## Serialize once per flushed chunk instead of once per settled async

`packages/runtime-tags/src/html/writer.ts` › `Boundary.flush` | 2026-07-23 | impact:med | effort:med

`Boundary.flush()` runs `flushSerializer` on every call, and `ServerRendered.#read`'s `onNext` calls it on each `boundary.endAsync()` even when the HTML write is deferred to the next `queueTick`. Each call appends its own `_=>[…]` closure to `state.resumes`, so N awaits settling in one chunk emit N payloads and the delta scope-id encoding in `writeScopesRoot` cannot span them — see `fixtures/async-reorder-nested-batched-resolve/__snapshots__/writes.html`, where one chunk pushes `_ => [5,…], _ => [7,…]`. Serialization cannot simply be skipped, since the serializer itself calls `boundary.startAsync()`; take `flush(write?)` and serialize only when `write` or `this.count === 0`, with `#read` passing through its existing `write` flag. Re-verify: that snapshot should regenerate with a single `_ =>` closure per chunk.

## Mark class/style item writes pure so a single-consumer derived binding skips `_const`

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `translate.dom.enter` | 2026-07-23 | impact:med | effort:low

The DOM `class`/`style` branch passes `!!meta.dynamicItems` as `addStatement`'s `isPure`, so the split `_attr_class_item` / `_attr_style_item(s)` path is marked impure; that sets `signal.hasSideEffect` (`util/signals.ts`) and forces `signal.build` to emit `_const(accessor, fn)` plus a scope slot instead of a plain function. Those helpers are idempotent (`classList.toggle`, `style.setProperty`) and every other DOM write (`_attr`, `_attr_content`, `_text_content`) passes `true`. Confirmed with `-o dom`: `<let/x=1/><const/y=x % 2/><div class={ active: y }>` yields `const $y = _const(3, $scope => _attr_class_item($scope.a, "active", $scope.d))`, while `data-active=y` yields `const $y = ($scope, y) => _attr($scope.a, "data-active", y)`. Intersection signals already force `hasSideEffect` at creation, so passing `true` only affects the single-derived-binding case. Re-verify: flip the flag, recompile both templates, and audit the snapshot diff.

## Pass `0` for an empty `$setup` in `_template`, and keep `setupEmpty` for dynamic tags

`packages/runtime-tags/src/translator/visitors/program/dom.ts` › `translate.exit` | 2026-07-23 | impact:med | effort:low

With no program setup signal, `program/dom.ts` emits `export const $setup = () => {};` and still passes that identifier as `_template`'s 4th argument, so `_content` stores a truthy `RendererProp.Setup` and `setupBranch` queues `queueRender(branch, emptyFn, -1)` for every branch built from the template (and `mount` calls it directly). Child-section `_content` args already go through `replaceNullishAndEmptyFunctionsWith0`; the program `_template` args do not, and `program/index.ts` carries the matching TODO. Separately, `visitors/tag/dynamic-tag.ts` calls `addSetupStatement` unconditionally, so any template containing a dynamic tag loses `domExports.setupEmpty` and its parents still emit `import { $setup as _wrap }` + `_wrap($scope.a)` for a function translate left empty. Re-verify: compile `<section class="wrap"><${input.content}/></section>` and a parent that uses it with `-o dom`; 19 committed `dom.bundle.js` snapshots still contain `$setup = () => {}`.

## Collapse an all-same `_set_serialize_reason` group object into a bare guard or bitmask

`packages/runtime-tags/src/translator/util/known-tag.ts` › `knownTagTranslateHTML` | 2026-07-23 | impact:low | effort:low

`knownTagTranslateHTML` falls back to an object literal `{0: g0, 1: g1, …}` whenever any group guard is a runtime expression, even when every group shares the same expression, and that literal is allocated on every render of the call site — one per row inside a `<for>`. Since `_serialize_if` treats `1` as "all groups" and a number as a bit-per-group mask, a shared 1|0 guard can be passed bare when `hasSkippedReasons` is false, or as `<bitmask> * guard` when groups were skipped. Gate it on the shared expression being normalized to 1|0 (a `_serialize_guard` call, an `||` chain of them, or a numeric literal), because `buildGuardExpr` can also hand back a raw `$scopeN_reason` whose value is itself a mask or object. Re-verify: `fixtures/at-tag-inside-if-tag/__snapshots__/html.bundle.js` emits `_set_serialize_reason({0: $sg__input_x, 1: $sg__input_x, 2: $sg__input_x})`; across the committed html.bundle.js corpus 17 of 137 calls use the object form and 14 have identical values in every slot.

## Memoize runtime-helper imports; every `callRuntime` rescans the import's specifier list

`packages/runtime-tags/src/translator/util/runtime.ts` › `importRuntime` | 2026-07-23 | impact:med | effort:low

Every emitted helper reference goes `callRuntime` → `importRuntime` → `importNamed`, and `importNamed` (`packages/compiler/src/babel-utils/imports.js`) does `importDeclaration.get("specifiers")` — rebuilding a NodePath per specifier (setContext/setScope) — plus a linear `.find` before it can reuse the existing local. The calls are almost all repeats: a 20-section page compiled for dom+html issues 830 `importNamed` calls for 28 distinct `(request, name)` pairs. Keep a per-program `name → local` map (via `createProgramState`, so a dom compile cannot leak its path into an html one) and return `t.identifier(cached)` on a hit; the general fix is a second-level `name → local` map inside `getImports`, which also covers `importDefault`/`importStar`. Re-verify: wrapping `importNamed` with such a memo keeps output byte-identical and cut 80 dom+html compiles of that page from ~2480 ms to ~2355 ms (best of 5).

## Reuse the `anchors` map for the intersection id loop in `finalizeReferences`

`packages/runtime-tags/src/translator/util/references.ts` › `finalizeReferences` | 2026-07-23 | impact:low | effort:low

The id-assignment loop tests `intersections[intersectionIndex].filter(isOwnedBinding).at(-1) === binding`, allocating a filtered array per owned binding, while the `anchors` map built ~30 lines above already holds each intersection's last owned binding; hoist `anchors` out of the `if (intersections.length)` block and the test becomes `anchors.get(intersection) === binding`. That removes an O(ownBindings × intersectionLength) walk (~640k element visits for 800 `<let>`s read in one expression). Same pass: `filter(bindings, isOwnedBinding)` is built twice and could be shared, and the name-collision check `find(section.bindings, ({ name }) => name === binding.name)` is an O(bindings²) scan a per-section `Set<string>` makes O(1). Re-verify: swap in the map lookup and run `pnpm run test:update -- --grep "runtime-tags/translator for-tag "` — snapshots must be unchanged, since the two expressions are equal by construction.

## Decide the tag-variable `_var_resume` registration when the signal is final, not at translate exit

`packages/runtime-tags/src/translator/util/known-tag.ts` › `knownTagTranslateDOM` | 2026-07-27 | impact:med | effort:low

`source.register = !!getSerializeReason(…) || !signalHasStatements(source)` runs at the tag's translate exit, before placeholders reading the tag variable push render statements onto that signal, so the "empty/unread" escape hatch from e917c2d fires on signals that are non-empty by the time `writeSignals` builds them. That ships a dead impure `_var_resume("…/var", …)` whose id the HTML never writes, pinning the declaration in the bundle: `-o dom -d` on `<child/data/><div>${data}</div>` emits it while `-o html` has no `/var` id. Deleting the disjunct is wrong — a genuinely unread var then loses the declaration `_var($scope, 0, $data)` references — so move the emptiness half into `writeSignals`, where `signalHasStatements` is final, behind a "keep the declaration" flag distinct from `register`; `visitors/tag/dynamic-tag.ts` sets `tagVarSignal.register = true` unconditionally and needs the same gate. Re-verify: diffing `grep -oh '"[^"]*/var"'` between each fixture's `dom.bundle.debug.js` and `html.bundle.debug.js` lists custom-tag-var-expression, custom-tag-var-multiple, dynamic-tag-var, return-tag-no-state and return-value-registered today, and should list nothing.

## Skip the `AbortController` when a section only uses `$signal` for cleanup

`packages/runtime-tags/src/translator/visitors/referenced-identifier.ts` › `analyze` | 2026-07-29 | impact:med | effort:med

Naming `$signal` at all compiles to `$signal($scope, id)`, the last DOM-side `AbortController` allocation, and teardown runs `ctrl.abort()` — a real DOM event dispatch that measured ~21% of profiled self time when closure subscriptions used this path. Almost every use is elidable: recursively over `packages/runtime-tags/src/__tests__/fixtures`, `.onabort` dominates, and the one reference that escapes is `packages/runtime-tags/src/__tests__/mounted-template/lifecycle.marko` (`window.signal = $signal`), which must keep a real controller. `analyze` already allocates the per-expression `abortId`, so classify the parent there: `onabort` as an assignment LHS or `addEventListener` with a literal `"abort"` is cleanup-only, `aborted` needs only a boolean, anything else keeps a controller. When every reference for an id is cleanup-only, store the callback in the slot `AccessorProp.AbortControllers` already uses and have `$signalReset` (`packages/runtime-tags/src/dom/abort-signal.ts`) invoke it instead of aborting — still calling `trackCleanup(scope)`, or the callback is never enrolled with its branch and never fires. Re-verify: `pnpm run compile -o dom -d` on `<script>$signal.onabort = () => {}</script>` emits `_$signal($scope, 0).onabort = …`.

## Derive await/try branch scope owners without serializing `_`

`packages/runtime-tags/src/translator/util/signals.ts` › `writeHTMLResumeStatements` | 2026-07-02 | impact:low | effort:high

State-driven `<if>`/`<for>` branches link their owner from resume markers (`setSectionOwnerResumedByMarker`, called only from `core/if.ts` and `core/for.ts`), but `<await>`/`<try>` branches still serialize `_: _scope_with_id(parentScopeId)`. Two blockers remain: their branch machinery tree-shakes out of resume bundles while closures into the content still fire (the `await-tag` fixture's optimized `dom.bundle.js` drops `_await_promise`, so `enableBranches` never runs and `dom/resume.ts` only retains branch visits), and reordered content pushes scope data and closure subscriptions a flush earlier than its markers, so a mid-stream state update can read the owner before it could be linked. Solving both likely needs an explicit branches-enable flag in the resume payload plus deferring subscriptions to marker processing. Re-verify: `rg -n "_scope_with_id" packages/runtime-tags/src/__tests__/fixtures/await-tag/__snapshots__/html.bundle.js`.

## Narrow the `_if` ConditionalRenderer TODO to the one case that still wastes bytes

`packages/runtime-tags/src/html/writer.ts` › `_if` | 2026-07-02 | impact:low | effort:med

The `// TODO: Write the renderer only for stateful conditions or direct closures.` in `_if` is narrower than it reads: branch index 0 is already elided (`branchIndex || undefined`) and `core/if.ts` appends `return <i>` only to branches whose `kBranchSerializeReason` is truthy, so a conditional whose branches never serialize writes nothing. The residue is an `else`/`else-if` branch (index > 0) serialized for a reason unrelated to branch swapping (e.g. hoist-through) under a condition that can never change and with no direct closures (`_if_closure` in `dom/signals.ts`, `_if` in `dom/control-flow.ts`). Suppressing it needs another `_if` argument at every call site, which likely costs more compiled-output bytes than the rare wire bytes saved. Re-verify: read the `AccessorPrefix.ConditionalRenderer` write in `html/writer.ts` › `_if` against the `t.returnStatement` guard in `core/if.ts`.

## Gate `<return valueChange>` serialization on parent mutation

`packages/runtime-tags/src/translator/core/return.ts` › `analyze` | 2026-07-02 | impact:low | effort:high

`analyze` still carries `// TODO: this should be based on the parent actually mutating the tag variable.` above an unconditional `addSerializeReason(section, true, getAccessorProp().TagVariableChange)`, so `<return value=... valueChange=...>` force-serializes the change accessor even when no parent ever assigns the tag variable. The `<let>` equivalent is already gated on `binding.assignmentSections` (`core/let.ts`), but this one needs cross-template information: whether a parent mutates the tag variable is known only at the parent's compile (`mutatesTagVar` in `util/known-tag.ts`), so the reason has to flow through the param serialize-reason group protocol instead of a local check. Re-verify: `rg -n "TagVariableChange" packages/runtime-tags/src/translator/core/return.ts`.

## Extend only-child marker elision to `<await>`/`<try>`

`packages/runtime-tags/src/translator/core/await.ts` › `analyze` | 2026-07-02 | impact:low | effort:med

`<await>` and `<try>` unconditionally create a `#text` marker binding (`createBinding("#text", BindingType.dom, section)` in `await.ts` › `analyze` and `core/try.ts` › `analyze`), so neither takes the `getOnlyChildParentTagName` / `getOptimizedOnlyChildNodeBinding` path that `for`/`if`/`show` use to reuse the parent element as the marker, and `_try` (`packages/runtime-tags/src/html/writer.ts`) always writes BranchStart/BranchEnd marks even for a static body. Compiled to dom, `<div><if=input.c><b>hi</b></if></div>` yields `"<div></div>"` with walks `" b"`, while `<div><try><b>hi</b></try></div>` yields `"<div><!></div>"` with `"D%l"` — an extra comment node and a Replace visit per instance. Route both tags through `util/is-only-child-in-parent` and gate the `_try` branch marks on a non-static body. Re-verify by rerunning that dom compile comparison.

## Bind a caret-free input value helper for statically non-text `type`s

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `getRelatedControllable` | 2026-07-09 | impact:low | effort:med

A `type="number"` input still ships caret-preservation code that can never fire: `setInputValue` (`src/dom/controllable.ts`) calls `resolveCursorPosition` + `setSelectionRange`, and selection APIs only apply to text/search/url/tel/password and `<textarea>` (`selectionStart` is null elsewhere, so the runtime is already correct -- this is bytes only, roughly 0.5 kB raw for `resolve-cursor-position.ts` plus the two caret lines, not the ~1.25 kB the whole value path costs). `getInputValueMode` already evaluates a static `type` to pick `attribute`/`dynamic` mode and `getDOMControllableDefaultHelper` maps a mode onto `_attr_input_value_<mode>_default`, so a caret-free mode slots in there. Note both emitted helpers must be covered: one-way `value=` emits only `_attr_input_value_default`, but two-way `value:=` also emits `_attr_input_value_script`, whose post-handler `setInputValue` keeps `resolve-cursor-position` alive on its own -- a caret-free default helper without a caret-free script variant saves nothing for `value:=`. Opt out only for types where selection provably never applies (number, range, color, file, date/time family) rather than 'not in the text family', so `email` keeps the generic path, and weigh the split: a page with both a text and a number controllable ships both variants. Re-verify by compiling a `type="number"` `value:=` input and checking neither emitted helper reaches `resolve-cursor-position`.

## Reserve a trailing id for the section-instances fallback accessor

`packages/runtime-tags/src/translator/util/references.ts` › `getSectionInstancesAccessor` | 2026-07-10 | impact:low | effort:med

When a section has no `sectionAccessor`, `getSectionInstancesAccessor` falls back to `getAccessorPrefix().ClosureScopes + section.id` (optimized: `"B3"`). Both emit sites are explicit literals — the serialized key in `visitors/program/html.ts` and the `_content`/`_content_resume` renderer argument in `visitors/program/dom.ts` — so nothing derives the key at run time, and it could instead be a bare id reserved after the parent section's binding ids, following the `closureAccessorIds` pattern in the same file, dropping the letter for ~1 byte per serialized owner scope and per renderer. Only four `hoist-*` fixtures exercise the fallback, so the win is small. Re-verify by grepping `packages/runtime-tags/src/__tests__/fixtures/*/__snapshots__/*.js` for `"B[0-9]+"`.

## Cut per-value Reference allocation in data-heavy serialization

`packages/runtime-tags/src/html/serializer.ts` › `writeReferenceOr` | 2026-07-13 | impact:med | effort:high

With the prototype-dispatch and char-code key-escaping fast paths already landed, a 464 KB data payload (nested product records, arrays, long strings) is dominated by intrinsic bookkeeping: ~12% GC from the `new Reference` that `writeReferenceOr` and `writeString` (strings over `STRING_DEDUP_LENGTH`) allocate for every object, array, and long string. Each is retained by the `refs` WeakMap for as long as its value lives, even though most back a value that is written once and never referenced again. `assignId`'s early return needs only `ref.pos` when `ref.flush === state.flush`; only the cross-flush path needs parent/accessor. Any lazy scheme has to respect two constraints: the Reference is also the `parent` handed to every nested write (and what `isCircular`/`isAncestorMember` walk), so a container still needs an object identity at write time; and a later flush cannot patch an already-shipped buffer (`stringifyScopes` resets `state.buf`), so a position-only marker cannot be upgraded on reuse without parent+accessor -- dropping them would duplicate the value instead of deduping it, changing payload size and browser-side identity. So the realistic version is a slimmer per-value record (pos/parent/accessor) upgraded to a full Reference with id/assigns/calls/channel only on reuse -- a deep change to the reference model, not a spot fix. Re-verify with the serializer suite (especially cross-flush dedup) plus the benchmark's GC share.

## Couple dynamic-tag resume registration to the retained signal

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `enableDynamicTagResume` | 2026-07-13 | impact:low | effort:high

`enableDynamicTagResume()` pushes a bare top-level `_resume_dynamic_tag()` whenever a dynamic tag carries a spread or event/change handler, so it is an unconditional module side effect pinning `_resume`, `dynamicTagScript`, `_attrs_script` and `_on` and keeping the module in the graph, while the `_dynamic_tag(...)` signal beside it is `/*@__PURE__*/`; `<${input.as} onClick=input.onClick/>` compiles to a module whose only non-pure statement is this call. Do not charge `dynamic-tag-spread`'s retained bytes to it: that fixture's optimized `dom.bundle.js` also keeps `_enable_controllable()` (from the neighbouring `enableDynamicTagControllables`, which pulls all of `dom/controllable.ts`) and a non-pure `_content_resume(...)`, so removing this statement alone frees almost nothing there. Any fix must survive the resume-only case: for a page whose client work is entirely resume-driven every pure chain shakes away (that same snapshot retains no `_template` and no `$setup`), yet the server still writes the `d <scopeId>` effect from `html/dynamic-tag.ts` and `dom/resume.ts` invokes whatever `registeredValues[id]` holds — so a `/*@__PURE__*/ _dynamic_tag_resume(...)` hung off the signal is the unsound naive form. Same emitted shape as "Make `<try>`'s `_enable_catch()` shakable without breaking resumed boundaries" below, but a separate fix: the `pureDOMFunctions` comment in `translator/util/runtime.ts` is the one place that line gets drawn, and it already blesses registration-only calls like this one. Establish first whether any retained resume root can carry the registration; if none can, close this out.

## Make `<try>`'s `_enable_catch()` shakable without breaking resumed boundaries

`packages/runtime-tags/src/translator/core/try.ts` › `translate.dom.exit` | 2026-07-13 | impact:med | effort:high

Every program containing a `<try>` gets a bare top-level `_enable_catch()` (guarded by `hasEnabledCatch`), a non-pure statement that survives even when the `/*@__PURE__*/ _try` signal beside it shakes away. Gating it needs a retained capability covering descendant effects, ready work, renderers and recreation — not just `_try`. The naive form, calling `_enable_catch()` from the `_try` constructor in `dom/control-flow.ts`, is unsound: a boundary rebuilt from the resume payload never runs that constructor, so a resumed lazy/async effect that throws finds `_enable_catch`'s `runEffects`/`runRender` wrappers (`dom/queue.ts`) uninstalled — the reason already recorded above `pureDOMFunctions` in `translator/util/runtime.ts`. "Couple dynamic-tag resume registration to the retained signal" above is that same emitted shape on the blessed side of that comment, a separate fix but with the same resume-only hazard to clear. Re-verify: a program whose `_try` signal is unreferenced drops `_enable_catch` from its dom bundle while `try-effects-async` still catches.

## Index lazy ready work instead of rescanning every render

`packages/runtime-tags/src/dom/resume.ts` › `ready` | 2026-07-13 | impact:med | effort:high

`ready(id)` adds the id to `readyIds` and then runs `runResumeEffects` for every render in `curRenders`; each `render.m` re-runs `processResumes(render.r)` and loops the entire global `readyIds` set against `render.b` to a fixed point. Drained channels are left in `render.b` as empty arrays rather than deleted, and every `processResumes` ends with `resumes.splice(0, i)` even when `i === 0`, so with L lazy chunks arriving separately that is O(L²) channel scans plus a splice per pass, per render — and a fully resumed render pays it again on each later `ready()`. Index pending renders and reverse dependencies by ready id and advance cursors instead of splicing, preserving late reordered gates and source-stream order. Re-verify: the `lazy-tag-reorder-stream-order` and `lazy-tag-nested-shared-reversed` fixtures still pass.

## Use the mutation records instead of rescanning every embedded anchor

`packages/runtime-tags/src/dom/resume.ts` › `initEmbedded` | 2026-07-13 | impact:low | effort:med

`initEmbedded()`'s `MutationObserver(...).observe(document, { childList: true, subtree: true })` callback ignores its records and iterates all of `embedRenders`, testing `anchor.isConnected` for every embedded render on every document-wide child-list batch. Once one embed exists, any page that mutates the DOM pays embedded-count × batch work. Inspect the records' `removedNodes` (or debounce the sweep) while preserving move/reinsert, adoption, nested removal, and exactly-once `destroyScope`. Re-verify: the `embed-removal` and `embed-counter` fixtures still destroy scopes exactly once.

## Narrow the assignment serialize reason from `true` to a client-mutability fixpoint

`packages/runtime-tags/src/translator/util/references.ts` › `finalizeReferences` | 2026-07-19 | impact:low | effort:high

`finalizeReferences` calls `addOwnerSerializeReason(assignedSection, section, true)` for every assigned binding, with the in-source note "narrowing is a 0-byte no-op until a state-dropping pass exists" -- a no-op because `resolveBindingSources` gives any assigned `<let>` a `.state` source and `isStateSerializeReason` (`util/serialize-reasons.ts`) treats state as statically true. So a `<let>` reassigned only during synchronous render still roots its owner scope: `<let/total=0/>` + `<for|i| of=[1,2,3]><const/_x=[i].forEach(n => { total += n })/></for>` serializes `_: _scope_with_id($scope0_id)` per iteration even though the parent scope serializes `{}`. Replace the `true` with a conservative client-immutability fixpoint: mutable if an assignment's enclosing function is a client-reachable effect/handler/registered fn, or it transitively reads a client-mutable binding, defaulting mutable on alias, property-alias, spread, or closure escape. Note assignments must sit inside a function (`trackAssignment` throws otherwise), so the target is always a synchronously-invoked callback. Gate on `isOptimize` and add render-reassigned-then-displayed and closure-read stale-DOM fixtures. Re-verify: `rg -n 'narrowing is a 0-byte no-op' packages/runtime-tags/src/translator/util/references.ts`.

## Range-encode the branch ids packed into a single-node loop's BranchEnd marker

`packages/runtime-tags/src/html/writer.ts` › `forBranches` | 2026-07-23 | impact:med | effort:med

For a `singleNode` `<for>`, `forBranches` builds one string (`flushBranchIds = " " + branchId + flushBranchIds`) that `writeBranchEnd` emits as a single `BranchEndSingleNode` (`|`/`}`) comment — e.g. `<!--M_}1 a 4 3 2-->` — so a loop body with a fixed scope count per item spends ~4.5 SSR bytes per row on a constant-stride descending run. A run token (`start~end[:stride]`) with an explicit-id fallback collapses it to a constant. The decoder is `createVisitBranches` in `dom/resume.ts` (`while ((branchId = +lastToken))`), and expansion must preserve order because the single-node path walks `previousSibling` and depends on `endedBranches.reverse()`; the `]`/`)` variants already spread one id per `BranchStart` and are unaffected. Weigh the decoder's client bytes first — the adjacent comment there budgets ~18 B brotli. Re-verify: SSR a 2000-row `<for>` and compare the `<!--M_}…-->` length before and after.

## Flush a `_resume_locals` scope only once its registered function is serialized

`packages/runtime-tags/src/html/writer.ts` › `_resume_locals` | 2026-07-24 | impact:low | effort:med

`_resume_locals` calls `writeScope` eagerly, so the attr-tag loop params it captures set `flushScopes` and ride the resume payload on every SSR render even when the handler is never serialized. The reachable shape is a runtime-conditional consumer — parent `<my-menu><for|foo| of=[…]><@item onClick(ev){…}>` with a child that spreads `...item` only under `<if=input.enabled>` — where `_resume_locals(fn, id, {"foo/5": foo})` still runs per iteration and `flushSerializer` writes those props with `enabled` false (a statically unused handler is already elided). The serializer resolves registered-value scopes lazily (`writeRegistered` › `trackScope` in `packages/runtime-tags/src/html/serializer.ts`), so the fix is a channel that flushes a scope's props only when the registered value is written — serializer surgery, not a helper tweak. Re-verify: SSR that template with `enabled=false` and look for the `foo` scope in the payload.
