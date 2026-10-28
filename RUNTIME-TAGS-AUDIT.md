# runtime-tags guidance audit

An audit of `packages/runtime-tags` against the engineering guidance in the root
`AGENTS.md`, `packages/runtime-tags/AGENTS.md`, `CONTEXT.md` and
`RESUMABILITY.md`, taken at commit `9c3ad572` (2026-10-28). It is a work list:
each row names a deviation, where it is, the rule it breaks, and the fix.

## How to use this file

- Line numbers are as of `9c3ad572`. Find each site by its symbol and re-check
  it before acting, since the code moves.
- `[V]` in the working notes means the lead auditor reproduced the claim against
  source, a snapshot, or a compile or runtime probe. `[R]` means it rests on an
  area reviewer's evidence and still needs a check. Every High row in the tables
  is `[V]`.
- Fix a class at a time, as root `AGENTS.md` asks ("Fix the whole class in one
  change, a fixture per case"). The cross-cutting themes table groups the rows
  into classes.
- Each fix follows the usual bar: a fixture that fails without it, `build:sizes`
  numbers for anything that touches bytes, and a changeset when the change is
  user-facing.
- Rows that will not be fixed soon belong in `agent-feedback/items/` (format in
  `agent-feedback/README.md`; one item per class keeps the list short). Rows
  already filed name their item. Delete the stale items listed under guidance
  gaps.
- The probes, site lists, scan scripts and reviewer brief at the end reproduce
  the evidence and re-run the audit later.

## Summary

The rules the codebase enforced most recently hold: production error messages, `.debug.ts` pairs, zero Babel `traverse` and `hub.file` uses in the translator, and the client arrow idiom. Older code still deviates in 88 itemized places (15 high, 46 medium, 27 low). On top of those, 13 mechanical classes span several hundred sites.

Four high items are user-visible bugs, not just style:

- The optimized DOM build drops inert Class API children that the client renders later.
- A ready stream can make the main stream reference a typed array's buffer that main never wrote.
- `<await>` inside `@placeholder` aborts the render.
- A security-sensitive issue, tracked privately (see Security below).

| Area                            | High | Medium | Low |
| ------------------------------- | ---- | ------ | --- |
| Translator analysis and signals | 4    | 12     | 6   |
| Translator tags and visitors    | 4    | 11     | 5   |
| Client runtime                  | 3    | 8      | 6   |
| Server runtime                  | 3    | 8      | 6   |
| Tests and fixtures              | 1    | 7      | 4   |
| Total                           | 15   | 46     | 27  |

The audit covered commit `9c3ad572`: `packages/runtime-tags/src` (about 40k lines outside fixtures) and its 1,500 fixtures. It measured them against the root and runtime-tags AGENTS.md, CONTEXT.md and RESUMABILITY.md. Twelve area reviews ran beside AST and grep scans.

Every high row was re-checked against source, snapshots or a compile probe. Medium and low rows rest on the reviewers' evidence. Rows cite an existing agent-feedback item where one exists; nothing new is filed yet.

## Suggested first PRs

These are ordered by how likely each is to be wanted and to pass a quick review.
Each one is small and self-contained, provable with an existing fixture family
plus `build:sizes`, and in line with the recent `perf(runtime-tags)` commits.
Land each on its own, as root `AGENTS.md` asks.

1. **Floor pages: drop `_on`'s delegation check.**
   - Change: `dom/event.ts` › `_on` should call `delegate(type, handleDelegated)` unconditionally, since `delegate` already memoizes per type. Keep `element[1 + type] = handler || null`.
   - Win: −17 B min in both floor pages (−5 and −10 brotli). One line, no behavior change; the `.sizes` diff is the proof.
2. **Drop `_for_selector`'s key argument.**
   - Why: it is the loop key accessor (`"M"`) in all 15 optimized calls.
   - Win: −36 min / −26 brotli in the runtime, plus 4 B per call site.
   - Scope: `dom/signals.ts` and `core/for.ts`; snapshots change in 14 fixtures.
3. **Drop an unreferenced `<define>`'s body.**
   - Change: in `core/define.ts`, call `dropContent` when the variable has no references.
   - Proof: the existing `define-unreferenced-with-body` snapshot loses its `_content("a0", …)`.
4. **Hoist one write guard per pair.**
   - Change: `util/write-guard.ts` stops hoisting both `_write_guard` and `_write_if` for one `(reason, group)`. This also removes a `_resume_branch` that can never run.
   - Scope: mechanical churn in 157 optimized html bundles; generated server code only.
5. **Keep inert Class API children in optimized DOM.**
   - Change: delete the `isOptimize()` branch in `visitors/tag/dynamic-tag.ts` › `translate.exit`, and add an interop fixture that renders with `show=false`, then toggles an inert class child.
   - Proof: the harness's debug/optimize parity check fails without the fix.
   - Expect a question about the interop page bytes that branch was saving. It is a production bug, so correctness wins.
6. **Remove production messages from `$signal` errors and debug symbols.**
   - `$signal` in a server render: emit a debug-only helper (for example `_signal_read_error` beside `_el_read_error` in `common/errors.ts`) instead of the inline `throw new Error("Cannot use $signal in a server render.")` in generated code.
   - This continues `9c3ad572` (production server errors carry no message). The same PR can gate `Symbol("Scope ID")` and `Symbol("selectedValue")` on `MARKO_DEBUG`.
7. **Server attribute hot path.**
   - Hoist the seven RegExp literals in `html/attrs.ts` › `_attrs` (server-only, no client bytes).
   - Pass `skip` into `_attrs` instead of copying the spread in `_attrs_partial` (measured −29% bytes per call, 22–31% faster).
   - Keep `common/helpers.ts` › `isEventHandler` separate: it ships to the client, so it needs `build:sizes`.
8. **Serializer reference ownership.**
   - Change: have `Reference` take the state and set `flushId` and `channel` itself.
   - Tests: add one `serializer.test.ts` case per broken path (typed array buffer, Request headers, Response headers).
   - A correctness fix with unit tests, applied mechanically across 16 constructor sites.
9. **Delete translator dead code.**
   - Delete the `v8 ignore` invariant throws (`createSources`, `mergeInto`, `untrackExtra`), `markNode`'s unreachable throw, `kAnalyzeFailed`, and `optional.ts` › `at`.
   - No output change; this applies the new "design the invariant out" rule directly.
10. **Docs and feedback hygiene.**
    - Correct AGENTS.md's `node.extra` clone sentence and its `TestConfig` list.
    - Delete or rewrite the six stale agent-feedback items.
    - Doc-only.

These are worth doing but expect design review:

- `isInteractive` derived from reasons (5 sites).
- The hoist and constant-param reason fixes.
- The `load.ts` / control-flow split (−594 B per lazy page).
- The controlled-select effect order.
- The rolldown IIFE workaround, which depends on rolldown#9189.
- `<await>` inside `@placeholder`.
- Removing the generator prototype patch.

## Cross-cutting themes

Most findings below are instances of ten classes. AGENTS.md asks that a class be fixed in one change ("Fix the whole class in one change, a fixture per case"), so each class gets one structural fix here. The area sections that follow list the individual sites.

| Class                                                | Sites                                                                                                                                                                                                                                                                                                   | Rule                                                                                                                                         | One fix for the class                                                                                                                                                                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Program-wide effects keyed on a feature's presence   | `isInteractive = true` in `native-tag.ts:410`, `dynamic-tag.ts:190`, `core/script.ts:89`, `core/lifecycle.ts:52`, `tag-name-type.ts:104`, even inside dropped content; `hasResumes` accepts param-only renderer reasons (`program/index.ts`)                                                            | "A program-wide effect … follows the reason that needs it, never a feature's presence"; only an unconditional reason makes a bundle root     | Derive both at program exit from settled unconditional reasons, skipping dropped sections, as `module-registrations.ts` already does. In a probe, one `onClick` in dropped content grew a page from 376 to 2,038 B min. |
| Reasons that serialize what no client code reads     | Hoisted bindings always get `always` (`finalize-references.ts`); constant `<define>` params fall back to `ALWAYS` (`reasons.ts` › `mapBodyParams`); `_resume_branch` keyed on `<let>` presence; an unreferenced `<define>` body stays tracked                                                           | "Client code, serialized data, and registrations ship only where analysis shows they can run or update"                                      | Compute each reason from reads that run after resume, in the solver, instead of patching outputs per site.                                                                                                              |
| Purity and registration decided per call site        | `build-string-expression.ts` (130 IIFEs), `program/dom.ts`, `custom-tag.ts`, `import-declaration.ts`                                                                                                                                                                                                    | "Purity comes only from that list, never added or stripped per call site"                                                                    | `pureDOMFunctions` alone decides; always-registered forms get their own runtime names.                                                                                                                                  |
| Translator throws for impossible states              | About 14 always-on throws, for example `writer.ts` › `markNode`, `assertSetupWorkFound`, `createSources`, `mergeInto`, `untrackExtra` (four carry `v8 ignore`), `assertTranslate` on every `callRuntime`                                                                                                | "The translator has no `MARKO_DEBUG` checks … design the invariant out"                                                                      | Type or derive each invariant, then delete the throws.                                                                                                                                                                  |
| Effect order held or asserted                        | `controllable.ts` › `pendingEffects.unshift` ×3; `native-tag.ts` keeps handlers "in source order"; `signals.ts` emits `_script` backwards; 5 `cleanup-*` fixtures and about 20 more pin order; filed item `2026-09-22-order-queued-renders-the-same-in-csr-and-resume.md`                               | "Effects carry no order … a fixture asserting an order is a finding"                                                                         | Delete the ordering code, and compare effect logs per step as sets in the harness.                                                                                                                                      |
| Feature code fused into the main graph and the floor | `load.ts` imports control-flow; `dom.ts` imports control-flow and controllable; an empty `try {} finally {}` and a double delegation memo in both floor pages; `trackCleanup` writes a feature latch                                                                                                    | "Never statically import control-flow or a `.feat` module from a main-graph module"; floor invariant; latches written only by their enablers | Install feature hooks through latches. Measured: 594 B min (199 brotli) per lazy page without placeholders, and about 30 B min per floor page.                                                                          |
| Copies and allocation per call on hot paths          | `_attrs_partial` and `_dynamic_tag`'s `content` spread in both runtimes; RegExp literals per call in `_attrs`, `isEventHandler`, `escapeStyleValue`; render closures per update in `_for_closure`/`_for_selector`; `register`'s access string                                                           | Hot paths: never copy or allocate per call without a measured need                                                                           | Pass skip records through, keep `content` in the emitted literal, hoist regexes and closures. `_attrs_partial` drops from 968 to 688 B per call.                                                                        |
| One question with several answers                    | Native element facts (handlers 5 ways, controllable tables in 2 files, `openTagOnly` 6 times); `getRendererReason` 3 times per compile; params trees per output; write guards hoisted in pairs; two content-render helpers; two resume-write trackers; two compile-error builders; two entry traversals | "One system per question"                                                                                                                    | Record each fact once where it is intrinsic, and delete the copies.                                                                                                                                                     |
| Debug and production behave differently              | Optimized DOM drops inert class children (a real bug); `forBranches` runs user `by` code only in debug; the delegated `currentTarget`; `_var_change` on a readonly variable; the `process.env.MARKO_DEBUG` switch in interop errors                                                                     | "Debug differs from production only in names, validation and messages, never in behavior"                                                    | Reduce each branch to a message or a validation. CSR fixtures run only in debug, so run interop CSR in optimize mode as well; that would have caught the dropped child.                                                 |
| Dependency overrides and phase-contract breaks       | `Generator.prototype.next` patched on import; compat patches `Chunk.prototype.flushHTML`; `Error.message` redefined; `Read.comparedTo` keeps an AST node; `content-derives.ts` and `if.ts` › `BRANCHES_LOOKUP` hold NodePaths; analyze removes and nulls AST nodes                                      | "Dependency method overrides … are hacks"; the translator phase contract                                                                     | Replace each override with the fact it stood in for; store extras or ids, and reshape in pre-analyze.                                                                                                                   |

## Translator analysis and signals

Two reason over-approximations serialize data per instance that no client code reads after resume: hoisted bindings, and param reasons that every caller satisfies with constants. Beside them, an AST node outlives analyze on `Binding.reads`, and an internal channel runs through the public `MarkoMeta`. Most remaining items are decisions recomputed per output, or state that copies what a `Section` already carries.

| Finding                                                                                                                                                                                                                                                                                                              | Where                                                                                                                                                                                                                                                                                       | Rule                                                                                                                                             | Fix                                                                                                                                          | Severity |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Every hoisted binding gets an unconditional `always` reason, and so does its owner section, with no `readsValuesOnResume` check (the closure case right above it has one). In `const-tag`, `${typeof y}` is static, yet SSR writes `e: _._.a0` and the bundle ships `_resumed.a0 = $y` and `_hoist_resume("a1", 4)`. | `finalize-references.ts`: the `binding.hoists` branch (`addAlwaysReason(binding)`) and `addOwnerReason(expr.section, exprBindings.hoistedSection, ALWAYS)`                                                                                                                                  | "Client code, serialized data, and registrations ship only where analysis shows they can run or update"; _Reason_: `always` means read on resume | Gate hoist reasons on the reads that run after resume, as closures are.                                                                      | High     |
| A param reason that every call satisfies with constants still becomes an unconditional write. Probe: `<Item n=1/>` writes `label` unguarded on every instance, while `<Item n=input.n/>` guards it.                                                                                                                  | `reasons.ts` › `mapBodyParams` (its `ALWAYS` fallback, relied on by `write-guard.ts` casts)                                                                                                                                                                                                 | Same rule; "Fix causes"                                                                                                                          | Map body params once in `solveReasons`, where a reason leaves the body; then drop the fallback, the `R` generic and its casts.               | High     |
| An AST node is kept on `Binding.reads` across phases.                                                                                                                                                                                                                                                                | `references.ts` › `Read.comparedTo: t.Node`, set in `addReadToExpression`; its only reader is `for-selector.ts`                                                                                                                                                                             | "Never retain an AST node or `NodePath` across phases, including in … `Binding` fields"                                                          | Store the operand's extra, which is all the reader uses.                                                                                     | High     |
| An internal analyze channel runs through the public `MarkoMeta`, and the style file is stored twice. Interop facts do the same.                                                                                                                                                                                      | `asset-imports.ts` augments `MarkoMeta.assetImports` for `entry-builder.ts`; `classHydration`/`hasComponentBrowser` are written by runtime-class and read in `dynamic-tag.ts` and `tag-name-type.ts`                                                                                        | "`file.metadata.marko` is public compiler output: never route internal channels through it"                                                      | Move each to `ProgramExtra` (sibling interop flags already live there) and drop the augmentations.                                           | High     |
| HTML write guards are hoisted twice for one pair: `$wg__x = _write_guard(r, g)` and `$wi__x = _write_if(r, g)`, in 157 optimized html bundles. A `_resume_branch` placed behind the second guard can never run (`component-attrs-intersection`).                                                                     | `util/write-guard.ts`; `signals.ts` › `writeHTMLResumeStatements`                                                                                                                                                                                                                           | "Two calls differing only by a wrapper become one call"; every emitted token is used                                                             | Hoist one guard per pair, and emit the branch link only where its guard can differ.                                                          | Medium   |
| The marker guard is requested for every section, and the request itself hoists. 520 of 934 hoisted `_write_guard` declarators have one use.                                                                                                                                                                          | `signals.ts` › `writeHTMLResumeStatements` with `write-guard.ts` › `getOrHoistSectionGuard`                                                                                                                                                                                                 | "Every emitted token is used"                                                                                                                    | Build the guard at its first consumer, or hoist by uses actually emitted.                                                                    | Medium   |
| `_resume_branch` is emitted because a `<let>` exists, not because anything can write it.                                                                                                                                                                                                                             | `signals.ts` › `writeHTMLResumeStatements` (`some(section.bindings, isLetBinding)`)                                                                                                                                                                                                         | "Record a fact where it is intrinsic"; no special case for one tag                                                                               | Key it on the binding's write facts and change handler.                                                                                      | Medium   |
| NodePaths are parked in analysis state and replayed by a whole-program pass.                                                                                                                                                                                                                                         | `content-derives.ts` (Map keyed by `NodePath<MarkoTag>`, replayed via `forEachSection(finalizeContentDerives)`); `module-registrations.ts` › `trackImport` stores import nodes                                                                                                              | No retained nodes; no scan that records a decision after the fact; flag it from an analyze `exit` hook                                           | Write content derives from the three tags' exit hooks; key imports by their extra.                                                           | Medium   |
| Decisions derived only from analysis are recomputed per output and per call site.                                                                                                                                                                                                                                    | `sections.ts` › `getRendererReason` (3 times, returning `false` as a second "unset"); `known-tag.ts` params trees settled per call site and per output (`getSingleKnownSpread` ×3, two walks kept in step by hand)                                                                          | "A decision derived only from analysis facts is memoized once per analysis"                                                                      | Use `createPassMemo` and return `undefined`; add one `Section` field for a settled params tree.                                              | Medium   |
| Per-output state copies what `section.branch` already records.                                                                                                                                                                                                                                                       | `signals.ts` › `setSectionOwnerResumedByMarker` (set one line before its only reader); `ClosureHop` and `setClosureSignalBuilder`                                                                                                                                                           | "Never copy what a binding or section carries"; one system per question                                                                          | Derive both from `section.branch` inside their readers.                                                                                      | Medium   |
| A Babel binding is found by the analysis binding's name, which misses property aliases. Debug `_assert_init` therefore skips member reads.                                                                                                                                                                           | `references.ts` › `addReadToExpression` (`root.scope.getBinding(binding.name)`)                                                                                                                                                                                                             | "Name checks … are hacks"                                                                                                                        | Compute `inOwnBody` in `trackReferencesForBinding`, where the Babel binding is known.                                                        | Medium   |
| Merges rebuild equal records, and a comparison papers over it.                                                                                                                                                                                                                                                       | `sources.ts` › `mergeSources`; `reasons.ts` › `isSameSources`                                                                                                                                                                                                                               | "Fix causes"                                                                                                                                     | Return the existing record when the merge changes nothing, then delete `isSameSources`.                                                      | Medium   |
| `Section.params` is typed and cast as a param binding but holds `derived` and `local` bindings from `<for>` and `<await>`.                                                                                                                                                                                           | `references.ts` › `trackParamsReferences`                                                                                                                                                                                                                                                   | No casts the value does not satisfy                                                                                                              | Type it as `Binding` and narrow at the known-tag reader. Partly filed: `2026-07-22-make-a-params-binding-identifiable-from-binding-type.md`. | Medium   |
| Interop has its own compile-error builder, switched on `process.env.MARKO_DEBUG`. Its errors carry no `loc` or frame and throw even under `errorRecovery`.                                                                                                                                                           | `interop/build-aggregate-error.ts` (overrides `message` to defeat Babel)                                                                                                                                                                                                                    | One system per question; the translator has no `MARKO_DEBUG` checks; overrides are hacks                                                         | Report each location with `diagnosticError` and delete the file.                                                                             | Medium   |
| Interop copies the entry builder's traversal, and the copy has drifted: a shared Tags child is imported twice in a Class page entry.                                                                                                                                                                                 | `interop/index.ts` › `withInteropEntryBuilder`; `entry-builder.ts` exports its traversal pieces for the copy                                                                                                                                                                                | One system per question                                                                                                                          | Keep one traversal and let interop supply a per-file dispatch.                                                                               | Medium   |
| The translator ships always-on throws for impossible states.                                                                                                                                                                                                                                                         | `sources.ts` › `createSources`, `references.ts` › `mergeInto`/`untrackExtra` (all `v8 ignore`), `sections.ts` › `getParamReasonGroupIndex`, `scope-accessor.ts` › `getClosureAccessorId`, `scope-read.ts` (with a stale TODO), `runtime.ts` › `assertTranslate` on every `callRuntime`      | "The translator has no `MARKO_DEBUG` checks … design the invariant out"; code no fixture needs is deleted                                        | Delete them and lean on the invariant (`!`).                                                                                                 | Medium   |
| Setup signals that store nothing keep a `($scope) => fn($scope)` wrapper (19 sites in 13 bundles).                                                                                                                                                                                                                   | `signals.ts` › `buildSignalFn`                                                                                                                                                                                                                                                              | Two calls differing only by a wrapper become one                                                                                                 | Route them through `toScopeFn`.                                                                                                              | Low      |
| Symbol extra keys are written and read across modules.                                                                                                                                                                                                                                                               | `references.ts` › `kReferencedBindings` and three siblings, written by `finalize-references.ts` through exported setters                                                                                                                                                                    | "A symbol key is one module's private state … a fact any other module reads is a string field"                                                   | Declare them as string fields on `NodeExtra`/`FunctionExtra`.                                                                                | Low      |
| Compile context is passed in as parameters.                                                                                                                                                                                                                                                                          | `isClientAssetImport(file)`, `importOrSelfReferenceName(file)`, `isCircularRequest(file)`, `resolveRegisterModule(file)`, `writeModuleRegistrations(program)`, `getRuntimePath(output)`                                                                                                     | Compile-context helpers "are called where needed, never passed in"                                                                               | Call `getFile()`, `getProgram()` and `isOutputHTML()` inside.                                                                                | Low      |
| Indirect loop forms.                                                                                                                                                                                                                                                                                                 | `getDynamicClosureIndex` counts inside `find`; `mapReturnedParams` accumulates in a filter predicate; `levels.reverse()` and `attrProps.reverse().concat(…)` build then reverse; signals are copied only to emit `_script` backwards, for an order the adjacent comment says does not exist | "Direct loops, a `reduce` for an accumulating loop"; build-then-reverse is a smell                                                               | Use `reduce` and forward iteration.                                                                                                          | Low      |
| Terms from CONTEXT.md's `_Avoid_` lists.                                                                                                                                                                                                                                                                             | `refs` (×5, plus `getStaticDeclRefs`/`addBindingRefs`); "serialize guard"; "parent scope" and "hydrate … fill" in `signals.ts`; the coined "reference group(s)" for an intersection                                                                                                         | Names come from CONTEXT.md                                                                                                                       | Rename to referenced bindings, write guard, owner, resume, scope flush, intersection.                                                        | Low      |
| Dead or needless code.                                                                                                                                                                                                                                                                                               | `optional.ts` › `at` (no importer); a sorted `globalBindings` list only tested for truthiness; an empty `if (getter) {}`; html-only `Signal` fields read only in DOM; `readsValuesOnResume` exported for its own file                                                                       | Every line needs a reason                                                                                                                        | Delete; use a boolean flag.                                                                                                                  | Low      |

Also noticed: an unread tag variable still registers an empty signal (`_var_resume("a0", ($scope, x) => {})`). `core/for.ts` writes an optimize-dependent accessor onto the shared `Binding` during analyze.

## Translator tags and visitors

The worst finding here is a production-only rendering bug, reproduced by the probe below. The optimized DOM build drops an inert Class API child that the client renders later. Next come code shipped by force (an unreferenced `<define>` body), analyze-time AST mutation, and a bundler-bug workaround that wraps 130 template strings across 61 optimized bundles. Most medium items are one fact answered in several places.

| Finding                                                                                                                                                                                                                                                                                                                                 | Where                                                                                                                                                                                                                                                    | Rule                                                                                                                       | Fix                                                                                                                                                      | Severity |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| The optimized DOM build removes an inert Class API child, so a branch the client renders shows nothing. The code comment's premise ("SSR already produced their DOM") is false for any branch the client creates. Probe: `<if=show><message/></if>` compiles to `_if(1, "<!><!><!>", "b%")` optimized, but renders `_message` in debug. | `visitors/tag/dynamic-tag.ts` › `translate.exit` (`!isOutputHTML() && isOptimize() && classTagTemplate && !markerReason && !classHydration` → `tag.remove()`)                                                                                            | "Debug differs from production only in names, validation and messages, never in behavior"                                  | Delete the `isOptimize()` branch and add an interop fixture that toggles an inert class child. CSR runs only in debug, so no fixture catches this today. | High     |
| An unreferenced `<define>` keeps its body live. Zero references count as "all direct", so only its attributes are dropped.                                                                                                                                                                                                              | `core/define.ts` › `analyze`. `define-unreferenced-with-body` still ships `_content("a0", …)`; with state in the body, DOM ships `_closure`/`_closure_get` and HTML writes closures per instance                                                         | "Code ships because code that ships references it, never by force"                                                         | When the tag has no references, `dropContent(tag.node.body)` and remove the tag.                                                                         | High     |
| Analyze mutates the cached AST.                                                                                                                                                                                                                                                                                                         | `import-declaration.ts` › `analyze` (`loadAttrPath.remove()` without `linkAssets`); `util/known-tag.ts` › `analyzeParams` (nulls `tag.node.arguments` around `dropAllTagNodes`)                                                                          | "Mutating AST structure during `analyze` is an anti-pattern"                                                               | Drop the attribute in pre-analyze or at translate; drop the content and attribute values directly.                                                       | High     |
| Every identifier part of a composed template or walks string is wrapped in a pure IIFE to work around rolldown#9189. Some ship as `/*@__PURE__*/ ((_w0) => …)("")`, which never folds.                                                                                                                                                  | `util/build-string-expression.ts` (`t.addComment(iife, "leading", "@__PURE__")`); 130 IIFEs in 61 optimized `dom.bundle.js`                                                                                                                              | "Nothing in the output is specific to one bundler"; purity comes only from `pureDOMFunctions`; every emitted token is used | Emit plain template literals. Keep a wrapper only on a part that closes an import cycle (13–19 B min each).                                              | High     |
| Purity is added or stripped per call site.                                                                                                                                                                                                                                                                                              | `program/dom.ts` (`_content` made pure per site); `custom-tag.ts` (`@__PURE__` on a load trigger call); `import-declaration.ts` (`_load_template` built with `importRuntime` to bypass the list)                                                         | "Purity comes only from that list, never added or stripped per call site"                                                  | Give always-registered forms their own runtime names (export aliases cost no bytes) so the list alone decides.                                           | Medium   |
| Native element facts are derived in several places. The controllable tables are split from `tag-facts.ts`, "has a handler" is answered 5 ways, and `openTagOnly` is derived 6 times. `<button onClick=null>` still registers `_on(…, null)`.                                                                                            | `visitors/tag/native-tag.ts` › `getRelatedControllable`, `getControllableHelper`; `util/tag-facts.ts` › `controllableElements`                                                                                                                           | "Native element work lives in `native-tag.ts` (with `tag-facts.ts`)"; one system per question                              | One per-state controllable table in `tag-facts.ts`; decide nullish handlers once in analyze.                                                             | Medium   |
| Controllable runtime ships where nothing can update.                                                                                                                                                                                                                                                                                    | A static `<textarea>` keeps a binding and the input-value runtime (+648 / +259 min/brotli). A native tag with a computed constant name and a spread (`<${"x-foo"} ...input.attrs/>`) imports `controllable.feat` (+2645 / +925).                         | Client code ships only where analysis shows it can run or update                                                           | Write a static textarea value as markup; resolve the canonical tag name before choosing helpers.                                                         | Medium   |
| HTML controllable helpers without a change handler still pass the scope id and accessor.                                                                                                                                                                                                                                                | `_attr_input_value($scope0_id, "a", input.value)` (15 calls) and `void 0` handler slots (27) in optimized `html.bundle.js`                                                                                                                               | "Every emitted token is used"; rare tuple slots go last                                                                    | Emit the handler-free form, or move the scope id and accessor after the handler.                                                                         | Medium   |
| Class and style toggle items are keyed on the union of their reads. This adds an `_or` and a stored slot per instance and re-applies every toggle.                                                                                                                                                                                      | `native-tag.ts` › `translate.dom` (`_attr_class_items`)                                                                                                                                                                                                  | "Record a fact where it is intrinsic"; client work only where it can update                                                | Group each toggle by its own reads in analyze.                                                                                                           | Medium   |
| Core tags hand-roll checks and wording that `util/assert.ts` owns.                                                                                                                                                                                                                                                                      | `let.ts`, `return.ts`, `script.ts` ("Invalid duplicate value attribute." ×5, beside `assertOnlyValueAttr`); 26 hand-written core-tag links, 18 of them duplicating the private `coreTagLink`; `let` and `const` give two different hints for one mistake | "Core tags share their checks and wording from `util/assert.ts`"                                                           | Delete the loops, export `coreTagLink`, and keep one hint.                                                                                               | Medium   |
| `page` propagates through known custom tags but not through a dynamic tag's known templates. `<${input.x ? Layout : Other}>` with page templates compiles as an embed.                                                                                                                                                                  | `custom-tag.ts` › `analyze` sets `programExtra.page`; `dynamic-tag.ts` does not                                                                                                                                                                          | "Compile a template the same wherever it renders"                                                                          | Derive `programExtra.page` from the known templates for both tag kinds, with an or-assignment.                                                           | Medium   |
| A `load` import used above its declaration is a compile error only because of translate order.                                                                                                                                                                                                                                          | `import-declaration.ts` › `analyze` (with `ref.find(…)` and casts); fixture `error-load-import-used-above`                                                                                                                                               | "Name the mechanism (… an order) and remove it"; never reject valid Marko                                                  | Make the HTML load wrapping order-independent, then delete the check and the fixture.                                                                    | Medium   |
| Util modules keep side channels and a whole-program re-walk.                                                                                                                                                                                                                                                                            | `generate-uid.ts` re-walks the AST with a hand-written `traverse()`; `translate-attrs.ts` › `contentProps`, a WeakSet that dynamic-tag reads back (lookup, double cast, `splice`); `hasSharedUid("content")` used as a feature flag                      | No whole-program scan; one system per question; name checks are hacks                                                      | Seed uid counts from scope references; return the content property; record the self-reference where it is emitted.                                       | Medium   |
| Setup work is over-counted in analyze, then patched in translate.                                                                                                                                                                                                                                                                       | `define.ts` emits a `$_ => 0` setup for dropped Class API work, plus an always-on internal throw; `program/dom.ts` › `assertSetupWorkFound`; load setup modules keep an empty `$setup` (10 bundles)                                                      | "A workaround that tolerates it is a finding"; design the invariant out; every token used                                  | Count only work the DOM output emits, and omit setup when `!hasSetupWork`.                                                                               | Medium   |
| Trailing walk exits are trimmed with a regex over the code-point layout, and the debug comment keeps codes the string no longer has.                                                                                                                                                                                                    | `util/structure.ts` › `trimTrailingExits`, `getComment`                                                                                                                                                                                                  | "Record a fact where it is intrinsic"; comments must be true                                                               | Record the trimmed length in `resolveStructure`.                                                                                                         | Medium   |
| NodePath helpers, and module-level state outside the compile-state helpers.                                                                                                                                                                                                                                                             | Sibling walks in `if.ts`, `style.ts`, `static-text.ts`, `nested-attribute-tags.ts`, `document-type.ts`, `placeholder.ts`, `pre-analyze.ts`; `if.ts` › `BRANCHES_LOOKUP` (a WeakMap holding NodePaths); `show.ts` › `htmlDisplayRefs`                     | No NodePath helpers; `createAnalysisState`/`createOutputState`                                                             | Index the parent container from `path.key`; move the state into the helpers.                                                                             | Low      |
| Guards and casts for states the design rules out.                                                                                                                                                                                                                                                                                       | `if.ts` branches without a body section (`-1`, a placeholder triple); `extra?.` although `analyzeTagNameType` always creates it; `?.` on always-created extras (×7); `as Plugin`; casts that `tsc` shows are unneeded in `for.ts`, `show.ts`, `if.ts`    | "No guards, `?.`, fallbacks, casts … for states the design rules out"                                                      | Type the tuple as `Section`, use `!`, and drop the casts.                                                                                                | Low      |
| Server output carries tokens nothing uses.                                                                                                                                                                                                                                                                                              | A trailing `void 0` fallback after always-truthy registered handlers (11 sites); one guard passed as both branch and marker guard (36 of 202 branch calls); `_content_closures(_content("a1", …)); _resumed.a1 = …` registers one id twice (7 fixtures)  | Every emitted token is used; a repeated id becomes one call                                                                | Emit the fallback only for possibly falsy handlers; encode equal guards once; register once.                                                             | Low      |
| The translator ships production checks for impossible states and developer mistakes.                                                                                                                                                                                                                                                    | `util/writer.ts` › `markNode` ("POTENTIAL MARKO BUG", unreachable); `$signal` in a server render inlines a throw with a production message; `kAnalyzeFailed` is dead                                                                                     | "The translator has no `MARKO_DEBUG` checks … design the invariant out"; developer mistakes are `MARKO_DEBUG` invariants   | Delete them; add `_signal_read_error` beside `_el_read_error`.                                                                                           | Low      |
| Core tags skip the `translateByTarget` shape.                                                                                                                                                                                                                                                                                           | `const`, `define`, `html-comment`, `id`, `let`, `lifecycle`, `script` branch on `isOutputDOM()`/`isOutputHTML()` inside one `translate`                                                                                                                  | runtime-tags AGENTS.md › core tag shape                                                                                    | Use `translateByTarget({ html, dom })`.                                                                                                                  | Low      |

Also noticed (bugs rather than guidance deviations):

- `<html-comment>` static text skips the runtime's resume-prefix escape. `<html-comment>M_*1 a</html-comment>` emits a comment the walker can read as a resume marker.
- `<div fooChange() {…}>` passes compile-time validation, and optimized SSR writes the function's source as the attribute.
- `valueChange` at attribute index 0 reads as absent (`!indexByName.valueChange`). `onClick` with `on-click` attaches twice with no diagnostic.

## Client runtime

The costliest client deviations are structural. `load.ts` statically imports control-flow, which costs 594 B min (199 B brotli) on lazy pages that have no `@placeholder`. Controlled `<select>` sync holds an effect order, and two features leave dead code in the floor pages that AGENTS.md says must stay clean. Byte figures are min / brotli on the optimized build, as reviewers measured them.

| Finding                                                                                         | Where                                                                                                                                                                                                                    | Rule                                                                                                                              | Fix                                                                                                                                                                                                                                      | Severity |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| A main-graph module statically imports control-flow.                                            | `dom/load.ts` imports `startAwait` and `renderCatch` from `./control-flow`                                                                                                                                               | "Never statically import control-flow or a `.feat` module from a main-graph module (queue, resume, load)"                         | Have `placeholder.feat` install the await-start hook into a latch. Have `loadFailed` queue a throwing render that `catch.feat`'s `runRender` wrapper routes to `renderCatch`. Measured −594 / −199 on lazy pages without `@placeholder`. | High     |
| Controlled select sync pushes work to the front of the effect queue to run before user effects. | `dom/controllable.ts` › `_attr_select_value` and `_attr_select_value_default`: `pendingEffects.unshift(…)` ×3                                                                                                            | Effects carry no order; hot paths never `unshift`; use `queueRender`/`queueEffect`                                                | Queue the sync as a render keyed past every scope id, as `queueCompleteAwaitCounter` already does, reading the `ControlledValue` slot.                                                                                                   | High     |
| `_for_selector` always receives the loop key accessor.                                          | `dom/signals.ts` › `_for_selector` and `keyedScopes`; all 15 optimized calls pass `"M"`                                                                                                                                  | "Every emitted token is used"                                                                                                     | Drop the parameter from the runtime and the emitted call: −36 / −26 in the runtime plus 4 B per call site.                                                                                                                               | High     |
| Feature residue survives in both floor pages.                                                   | `dom/resume.ts` › `runResumeEffects` leaves `try { … } finally { }` in `.sizes/counter.ssr` and `comments.ssr`; `dom/event.ts` › `_on` repeats `delegate`'s per-type memo                                                | Floor invariant: "code for an optional feature … must fold out" of `counter.ssr` and `comments.ssr`                               | Gate the `try` on the `isResuming` readers; call `delegate` unconditionally. −14 / −6 and −17 / −5 to −10.                                                                                                                               | Medium   |
| `dom.ts` pulls control-flow and controllable into resume's static graph.                        | `dom/dom.ts` imports `rendererKey`, `setBranch` and `controllableScripts`; `scope.ts` and `renderer.ts`, which `resume.ts` imports, import `./dom`                                                                       | Same main-graph rule                                                                                                              | Move those helpers out of `dom.ts`. Filed as `2026-07-11-split-rarely-used-dom-machinery-out-of-the.md` (its `queue.ts` half is stale) and `2026-07-30-latch-attr-content-so-a-childless-spread-does.md`.                                | Medium   |
| A shared helper writes the subscriptions latch.                                                 | `dom/abort-signal.ts` › `trackCleanup`, which `$signal`, `_lifecycle` and `_await` also keep                                                                                                                             | "Latches are `let`s written only by their enabler"; base helpers take no feature-only params                                      | Move the push and the latch write into a subscription-only enabler called by `subscribeToScopeSet`: −80 / −43.                                                                                                                           | Medium   |
| Raw scheduling and guesses at browser order.                                                    | `control-flow.ts` › `countAwait` (raw `requestAnimationFrame` plus its own flush); `controllable.ts` (`queueMicrotask` on resume, a frame wait after form reset, a `MutationObserver` per `<details>`/`<dialog>`)        | "Use the runtime's own (`queueRender`, `queueEffect`, `queueAsyncRender`)"; no browser hacks without a Chromium and Firefox probe | `queueAsyncRender` (−101 / −25 for `countAwait`); a delegated `toggle` listener; run reset handlers on the first task after dispatch.                                                                                                    | Medium   |
| Controllables keep a second element-to-handler store and dispatcher.                            | `controllable.ts`: `(el as any)._ = onChange`, `(el as any).c = hasChanged`, `handleChange`; 6 `as any`                                                                                                                  | One system per question; no casts                                                                                                 | Dispatch through `event.ts` delegation with one typed slot.                                                                                                                                                                              | Medium   |
| Objects are spread or copied on every update.                                                   | `control-flow.ts` › `_dynamic_tag` (`{ ...args, content: getContent(scope) }`); `dom.ts` › `_attrs_partial` builds a filtered copy                                                                                       | "No rest or spread to copy, extend, or strip an object"; hot paths                                                                | Have the compiler put `content` into the input literal it already emits; pass `skip` into `attrsInternal`.                                                                                                                               | Medium   |
| A render closure is allocated on every closure update.                                          | `signals.ts` › `_for_closure` and `_for_selector` (plus a `toArray` array)                                                                                                                                               | Hot paths: no closure created unconditionally                                                                                     | Create each render once per helper and pass the key as the queued value. Together with the liveness helper below: −46 / −19.                                                                                                             | Medium   |
| Content rendering and the liveness test are written more than once.                             | `_dynamic_tag_content` duplicates `dom.ts` › `_attr_content`, with the guarded subscribe 4 times; the `Gen > 0 && Gen < runId` test is open-coded 3 times beside `runLiveBranch`                                         | One system per question; "a helper every caller guards takes the `undefined` itself"                                              | One content-render core, and a subscribe helper that checks the accessor itself; call `runLiveBranch`.                                                                                                                                   | Medium   |
| A feature makes two installer calls.                                                            | `dom/dynamic-tag-var.feat.ts`: `installBranchRenders()` then `installDynamicTagVar(…)`                                                                                                                                   | "Direct registry/property assignments (plus at most one installer call)"                                                          | Have `installDynamicTagVar` call `installBranchRenders` itself.                                                                                                                                                                          | Low      |
| Debug and production behave differently.                                                        | `event.ts` debug `currentTarget` returns `null` where production gives `document`; `_var_change` in production silently ignores a readonly write that debug rejects                                                      | "Debug differs from production only in names, validation and messages, never in behavior"                                         | Keep the log but return `document`; call the handler directly.                                                                                                                                                                           | Low      |
| The resume hot path allocates and self-assigns.                                                 | `resume.ts`: `resumes.splice(0, i)` per flush; a new scope `Object.assign`ed onto itself                                                                                                                                 | Hot paths: no `splice`, no needless per-item work                                                                                 | `resumes.length = 0` when draining; assign only when merging.                                                                                                                                                                            | Low      |
| A name check detects the hidden `<show>` wrapper.                                               | `control-flow.ts` › `_show`: `tagName === "T"`. A visible single-node body that is a `<t>` element would be unwrapped                                                                                                    | "Name checks … are hacks"                                                                                                         | Carry the hidden state in the marker or a branch prop.                                                                                                                                                                                   | Low      |
| Size idioms are missed.                                                                         | `walker.ts` › `walkNextNode` (single use with an early return, −13 / −6); `_id` tests `accessor !== undefined` twice (−18 / −8); `hasPotentialMoves = true`; `nodeType ===` at `control-flow.ts:528` and `resume.ts:593` | runtime-tags AGENTS.md › Size idioms                                                                                              | Inline, use truthiness, use 0/1, compare with `>`/`<` against `NodeType`.                                                                                                                                                                | Low      |
| Casts and guards cover states the design rules out.                                             | `(self as any)[runtimeId]` ×3, `values?.size as number`, `oldScopes[0]?.`, `queueEffect(ctrl as any, …)` (queues a non-scope), `destroyBranch`'s second `?.`                                                             | "No guards, `?.`, fallbacks, casts … for states the design rules out"                                                             | Type the slots and use `!`.                                                                                                                                                                                                              | Low      |

Also noticed: `assertSelectValueMatchesOption` warns about valid `<select>` options that arrive through `<await>`, and `controllable-select-late-options` pins that false positive with `skip_parity`.

## Server runtime

The server runtime has three structural problems:

- Importing it patches `Generator.prototype.next` for the whole process.
- Three serializer reference sites skip the lazy-channel ownership check, so ready-stream data can name paths the main stream never wrote.
- `<await>` inside `@placeholder` is rejected at render time.

The rest is per-call allocation on the attribute path, measured with heap deltas on the production bundle.

The production-error convention is fully applied: every `new Error` in `html/` is `MARKO_DEBUG ? new Error(msg) : new Error()` or debug-gated.

| Finding                                                                                                                                                                                                                                                                 | Where                                                                                                                                                                                                             | Rule                                                                                           | Fix                                                                                                                             | Severity |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Importing the server runtime patches generator prototypes process-wide. It does this to detect partly consumed generators, which then serialize as exhausted (lossy).                                                                                                   | `html/serializer.ts` module scope: `patchIteratorNext(Generator.prototype)` and `patchIteratorNext(AsyncGenerator.prototype)`                                                                                     | "Dependency method overrides … are hacks"; "Don't bend the code around an edge case"           | Delete the patch and `kTouchedIterator`, and drain from the generator's current position.                                       | High     |
| References are owned by a channel only where each site remembers to set it. 5 of 16 `new Reference(...)` sites do. A typed array's buffer and Request/Response headers written in a ready stream become paths main cannot reach (probe: `_=>[2,{buf:_(1).u8.buffer}]`). | `serializer.ts` › `writeTypedArray`, `writeRequest`, `writeResponse`; the headers dedup bypasses `writeReferenceOr`                                                                                               | "Fix causes, in full. Name the mechanism (… an ownership, a missing fact)"                     | Have `Reference` take the state and set `flushId` and `channel` itself, and route the headers dedup through `writeReferenceOr`. | High     |
| `<await>` inside `@placeholder` aborts the whole render, and a fixture pins the abort as expected.                                                                                                                                                                      | `writer.ts` › `Chunk.renderPlaceholder` (`// TODO: eventually this should be allowed.`); fixture `error-async-placeholder`                                                                                        | "A case valid Marko reaches that the runtime cannot handle is a bug to fix, never a rejection" | Stream the placeholder's async content as its own reorder, disposed when the body lands, then make the fixture expect a render. | High     |
| The spread is copied on every render to strip the element's own attributes.                                                                                                                                                                                             | `html/attrs.ts` › `_attrs_partial` (968 vs 688 B per call, 22–31% slower)                                                                                                                                         | "No rest or spread to copy … or strip an object"; hot paths                                    | Pass `skip` to `_attrs` as a trailing parameter and test it in the existing loop.                                               | Medium   |
| Six RegExp literals are allocated on every `_attrs` call, plus one per attribute in `isEventHandler`.                                                                                                                                                                   | `attrs.ts` › `_attrs`; `common/helpers.ts` › `isEventHandler`                                                                                                                                                     | Hot paths: never allocate per call without a measured need                                     | Hoist to module constants (none uses `g`): −39% bytes per call.                                                                 | Medium   |
| The writer `delete`s keys and its channel objects change shape.                                                                                                                                                                                                         | `writer.ts` › `flushSerializer` (`delete passiveScopes[key as unknown as number]`, 4 casts); `State` declares no `passiveScopes`, `readyId` or `parent`                                                           | Hot paths: "never `delete`"; "Keep object shapes consistent"                                   | Use a `Map` for passive scopes; declare the fields on `State` and the channel literal.                                          | Medium   |
| The dynamic tag rebuilds its input on every render, after the translator spliced `content` out of it, and builds a closure it calls once.                                                                                                                               | `html/dynamic-tag.ts` › `render` (`{ ...inputOrArgs, content }`, once per loop row too) and `renderNative`; producer `visitors/tag/dynamic-tag.ts:448`                                                            | Hot paths: no spread copies, no unconditional closures                                         | Keep `content` in the emitted record; inline `renderNative`.                                                                    | Medium   |
| Two trackers answer "did this region write resume data" on every scope and effect write.                                                                                                                                                                                | `writer.ts` › `countResumeWrite` (walks every boundary) and `writeAsyncVisits`                                                                                                                                    | One system per question; the writer takes no feature-only hooks                                | One region chain with a `resumed` flag and early exit.                                                                          | Medium   |
| Class compat monkey-patches the writer for the whole process, stacking per call.                                                                                                                                                                                        | `html/compat.ts` › `onFlush` replaces `Chunk.prototype.flushHTML`                                                                                                                                                 | "Dependency method overrides … are hacks"; no feature hooks in the writer                      | Scope the hook to interop renders. Filed as perf in `2026-07-13-gate-the-compat-resume-s-event-resolver-loop.md`.               | Medium   |
| Every registration builds an access string that most never use.                                                                                                                                                                                                         | `serializer.ts` › `register`'s `access` parameter, which no caller passes (+56 B per registration)                                                                                                                | Every line needs a reason; no per-call allocation                                              | Build the string in `writeRegistered`.                                                                                          | Medium   |
| Override hooks and forwarders exist that nothing overrides or needs.                                                                                                                                                                                                    | serializer `State` (`scopeRef`, `writeScopeProps`, `wrapPayload`, …, with comments about states that do not exist); writer `State.addResumes`, `serializeFlush`, `keepsTryMarks`                                  | One system per question; "No function that only forwards"                                      | Inline them; rename the serializer class `SerializerState`.                                                                     | Medium   |
| The debug build runs user code the production build skips.                                                                                                                                                                                                              | `html/control-flow.ts` › `forBranches`: debug wraps `iterate` in `checkLoopKeys`, calling `by` on the non-resumed path                                                                                            | "Debug differs from production only in names, validation and messages"                         | Validate keys only on the resumed path, where both builds compute them.                                                         | Low      |
| Exported `let` arrows are reassigned to wrap themselves.                                                                                                                                                                                                                | `writer.ts` › `writeScope` (debug IIFE plus cast); `dynamic-tag.ts` › `_dynamic_tag` (compat wraps it in an 8-argument forwarder); `_template`                                                                    | Function declarations; overrides are hacks                                                     | One `function` with a debug tail; a latch that `patchDynamicTag` writes.                                                        | Low      |
| Already-produced output is rewritten, and a rest strips a key.                                                                                                                                                                                                          | `serializer.ts` › `writeError` slices a pushed chunk; `writeIntl` uses `{ locale, ...options }`                                                                                                                   | "Never post-process output"; no rest to strip                                                  | Push and pop a separate chunk; set `options.locale = undefined`.                                                                | Low      |
| Descriptive names ship in production.                                                                                                                                                                                                                                   | `Symbol("Scope ID")` (`serializer.ts:4`), `Symbol("selectedValue")` (`attrs.ts:61`)                                                                                                                               | `MARKO_DEBUG` gates descriptive names                                                          | `MARKO_DEBUG ? Symbol("…") : Symbol()`, as `common/attr-tag.ts` does.                                                           | Low      |
| Duplicate helpers and dead code.                                                                                                                                                                                                                                        | `_to_text` equals `_unescaped`; `NOOP` ×3; three counter-to-identifier encoders; `writeControlledScope` guarded by all 6 callers; an unreachable `<` branch; unused `RuntimeKey`; the `html/for.ts` re-export hop | One system per question; every line needs a reason                                             | Consolidate or delete.                                                                                                          | Low      |
| A walker field ships to the client and is never read.                                                                                                                                                                                                                   | Inline walker runtime writes `d:t`, but `RenderData.d` has no reader (4 B per interactive page)                                                                                                                   | "Every emitted token is used"                                                                  | Drop it. Filed in `2026-07-30-emit-the-inline-walker-runtime-only-when-the.md`.                                                 | Low      |

Also noticed: `AggregateError` loses `cause`, and `startRender`'s `StateClass` parameter is always `State` (its comment is untrue).

## Tests and fixtures

Five fixtures pin effect order across scopes, and the harness makes order observable in about 20 more, against CONTEXT.md's _Effect_ entry. 18 fixtures still use the deprecated `<attrs>` tag, and three spec files duplicate behavior that existing fixture families already cover.

| Finding                                                                                                                                                                             | Where                                                                                                                                                                                               | Rule                                                                                 | Fix                                                                                                                                                                                                              | Severity |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Fixtures assert mount and destroy order across scopes through one shared log. The mount `write` is commented out under a TODO about SSR depth-first versus CSR breadth-first order. | `cleanup-single-child-for-deep`, `cleanup-n-child-for-shallow`, `cleanup-n-child-if-deep`, `cleanup-single-child-for-shallow`, `cleanup-single-child-if-deep`                                       | "A fixture asserting an order is a finding" (runtime-tags AGENTS.md › Effects)       | Log into an order-free record (per-name counts, rendered sorted). Restore the mount write and drop the TODO and dead code.                                                                                       | High     |
| The harness snapshots effect logs in emission order, and `equivalent` defaults to true, so SSR-resume and CSR must log the same order.                                              | `utils/track-mutations.ts` › `getStatusString`; about 20 fixtures such as `try-catch-async-holds-reorder-effects` (`[a][p][r][q]`), `destroy-nested-branches`; 14 copies of `tags/log-effect.marko` | Same rule                                                                            | Sort effect logs within a step, and have `log-effect` keep a sorted set. Revisit the filed item `2026-09-22-order-queued-renders-the-same-in-csr-and-resume.md`, which treats a divergent effect order as a bug. | Medium   |
| 18 fixtures use the deprecated `<attrs>` tag without being about it (their `diagnostics.md` reports the deprecation).                                                               | `update-text`, `update-html`, `basic-layout`, `dynamic-tag-name`, `component-attrs-intersection`, `remove-and-add-rows` and 12 more                                                                 | "Uses current syntax (never deprecated features)" (runtime-tags AGENTS.md › Testing) | Replace with `<const/{ … }=input/>`.                                                                                                                                                                             | Medium   |
| Debug-only diagnostics use `skip_optimize` where `skip_parity` exists, which drops the optimized snapshots and `sizes.json`. Five more fixtures skip optimize with no reason.       | `controllable-select-no-match` and 6 more; `for-row-params-throw-keeps-rows`, `for-row-setup-throw-keeps-rows`, three `interop-*-tags-to-class`                                                     | One system per question (root AGENTS.md); measure the build that ships               | Switch to `skip_parity`; justify or remove the other skips.                                                                                                                                                      | Medium   |
| `TestConfig` carries dead and single-use flags.                                                                                                                                     | `main.test.ts` › `TestConfig`: `skip_dom` (no users), `skip_html` (hides `// TODO: it is broken.` in `custom-tag-parameters-from-args`), `abort_ssr`, `fix_guide`                                   | "Code no fixture needs is deleted"                                                   | Delete `skip_dom`. File or fix the broken interop case, then drop `skip_html`. Keep one fix-guide check.                                                                                                         | Medium   |
| Spec files test what fixture families already reach.                                                                                                                                | `translator-api.test.ts` (diagnostics, camelCase style warning, `runtimeId`), `mounted-template.test.ts` (3 cases), `agent-fix-guide.test.ts`                                                       | "Add a test file only when no fixture can reach the behavior"                        | Convert to `error-*` or diagnostics fixtures. Build CSR per entry so the `mounted-template-*` directories collapse. Move environment-precedence cases to `packages/compiler/test`.                               | Medium   |
| Fixed sleeps stand in for conditions.                                                                                                                                               | `main.test.ts` SSR abort path (`setTimeout(resolve, 1100)`); `await-closure-changed-by-script/test.ts` (50 ms step)                                                                                 | "No sleeps where a condition exists"                                                 | `resolveAfter` in the fixture and `await wait()` in the harness; this also drops the `steps(signal)` parameter.                                                                                                  | Medium   |
| The embed transform loads `test.ts` again, swallows every error and overrides the translator's `page` fact.                                                                         | `utils/embed-test-transform.ts` (uses `program.hub.file`)                                                                                                                                           | One system per question; `getFile()`, never `hub`                                    | Pass the embed decision through the compile config built in `getModeOpts`.                                                                                                                                       | Medium   |
| Fixtures hand-roll async values.                                                                                                                                                    | `dollar-global-deferred-read` (`setTimeout(10)`), `try-placeholder-stateful-catch-before-body` (`Promise.reject`), `attr-method-shorthand-async` (`await Promise.resolve`)                          | Async values come from `utils/resolve.ts`                                            | `resolveAfter` / `rejectAfter`; add a never-settling helper for the 4 hand-written ones.                                                                                                                         | Low      |
| Fixture names use `_Avoid_` terms or no behavior.                                                                                                                                   | 14 `ref`/`refs` (`tag-var-distinct-refs`), 4 `upstream`/`downstream`, 2 `renderBody`, about 25 "component", 41 `basic-*`                                                                            | Names from CONTEXT.md; name a fixture for the behavior it pins                       | Rename when next touched.                                                                                                                                                                                        | Low      |
| Comments narrate history or are false.                                                                                                                                              | `for-by-nested-branch-divergence` ("With the fix…"), `flatten-text-if-tag-param-ref` ("previously…"), `importEvictable` JSDoc (bare specifiers); 25 spec and 65 fixture comments over two lines     | Comments capture intent and must be true                                             | Rewrite or cut.                                                                                                                                                                                                  | Low      |
| Harness helpers are duplicated.                                                                                                                                                     | `captureWarns` ×2, four different `tick`s, `importEvictable` vs `importWithContext`, 16 hand-built `Boundary` literals in `serializer.test.ts`, 387 copies of `click(document)`                     | One system per question                                                              | Share one helper each.                                                                                                                                                                                           | Low      |

Also noticed, not guidance deviations:

- `main.test.ts` names `.actual` files the same for debug and optimize (`ssr`/`csr` have no extension for the `.debug` replace to hook), so one failure overwrites the other.
- `component-attrs-import-value` pins an optimized client crash (`$scope.d.format is not a function`) as an expected error. Unverified whether it is a bug.
- `await-closure-changed-by-script` logs one effect twice in a step after resume, but once in CSR. Unverified.
- SSR render logs skip `stripFixtureDir`, so 4 `render-ssr.debug.md` snapshots carry fixture paths.

## Mechanical classes

These deviations repeat across many files. Counts come from AST and grep scans of `packages/runtime-tags/src` (fixtures excluded). Area reviewers then confirmed or dismissed the scanner hits in context.

| Class                                                              | Count                                                                                         | Main sites                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Fix                                                                                                                                                                                                                        |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Comment blocks longer than two lines                               | 82 (translator 33, runtime 24, tests 25)                                                      | `module-registrations.ts` (7), `html/serializer.ts` (4), `entry-builder.ts` (3), `html/assets.ts` (3), `serializer.test.ts` (8), `main.test.ts` and `utils/bundle.ts` (4 each)                                                                                                                                                                                                                                                                                                                                                                      | Cut each to at most two lines of intent. Drop narration and history (for example "keeps comparing as it always has" in `rendererKey`).                                                                                     |
| Compile errors without a markojs.com docs link                     | 68 of 115 sites                                                                               | `native-tag.ts` (9), `tag-import.ts` (8), `references.ts` (7), `pre-analyze.ts` (5), `import-declaration.ts` (5), `style-interpolation.ts` (5)                                                                                                                                                                                                                                                                                                                                                                                                      | Use the `util/assert.ts` style: backticked names and a docs link. `tag-import.ts` also quotes names with double quotes.                                                                                                    |
| `hub.buildError` instead of `path.buildCodeFrameError`             | 41 sites                                                                                      | Duplicate-attribute checks in `let.ts`, `return.ts` and `script.ts`; `style-interpolation.ts` (5); `pre-analyze.ts`; `references.ts:681`                                                                                                                                                                                                                                                                                                                                                                                                            | Use the path where one exists. Keep `hub.buildError` only for a sub-range or a parsed statement with no path (`assert.ts` › `buildRangeError`, `statement-tag.ts`).                                                        |
| Babel NodePath helper calls                                        | 16 sites                                                                                      | `import-declaration.ts:98` `ref.find(...)`; sibling walks in `if.ts` (4), `static-text.ts`, `nested-attribute-tags.ts`, `document-type.ts`, `placeholder.ts`, `pre-analyze.ts`; `style.ts` `getAllPrevSiblings`; `getOuterBindingIdentifiers` in `module-registrations.ts` and `scriptlet.ts`                                                                                                                                                                                                                                                       | Index the parent container from `path.key` (as `is-only-child-in-parent.ts` does) and walk `parentPath` directly.                                                                                                          |
| `if (x) flag = true` instead of `flag \|\|= x`                     | about 25 sites                                                                                | `entry-builder.ts:178-180`, `interop/index.ts:159-161`, `known-tag.ts:837-842`, `signals.ts:443,693,882,921`, `setup-work.ts:29`, `native-tag.ts:273,317`, `dynamic-tag.ts:174`, `nested-attribute-tags.ts:104`, `tag-name-type.ts:99`, `html/template.ts:396`, `html/control-flow.ts:642`, `html/writer.ts:1358,1674`                                                                                                                                                                                                                              | Write `flag \|\|= x`.                                                                                                                                                                                                      |
| Non-capturing closures not extracted to named file-level functions | 60 scanner candidates (translator 41, dom 12, html 5, common 2); reviewers confirmed about 30 | `native-tag.ts`, `interop/index.ts`, `known-tag.ts`, `setup-work.ts` (`forEachSection((section) => …)`), `load.ts`, `resume.ts`, `controllable.ts` (`(opt) => opt.value` written twice)                                                                                                                                                                                                                                                                                                                                                             | Hoist each to a named `function` at file level.                                                                                                                                                                            |
| Top-level `const f = () =>` instead of a function declaration      | 28 (dom 12, html 11, common 3, translator 2)                                                  | `_template` in both runtimes, `_return`, `delegate`, `decodeAccessor`, `noop`/`NOOP` (defined 4 times), `deferToPendingTry`, `getRenderScopes`, the escape helpers in `html/content.ts`                                                                                                                                                                                                                                                                                                                                                             | Use `function`. Keep `let` arrows only where an installer reassigns them (`queuePendingRender`, `runRender`). `writeScope` and `_dynamic_tag` are reassigned to wrap themselves and should become a function plus a latch. |
| `as any` / `as unknown` casts                                      | translator 23/5, dom 29/5, html 13/10, common 3, tests 57                                     | DOM expandos in `controllable.ts` (6), `(self as any)[runtimeId]` (3), `(lookup as any).merged.tags`, `(file as any).___compileStage`, `(t as any).VISITOR_KEYS`, `as unknown as number` keys in `writer.ts` (4)                                                                                                                                                                                                                                                                                                                                    | Type the slot or expose the internal, then drop the cast.                                                                                                                                                                  |
| `?.` in runtime code                                               | dom 75, html 71                                                                               | Most guard genuinely optional values. About 15 guard states the design rules out, for example `values?.size`, `oldScopes[0]?.` and `boundary?.abort`                                                                                                                                                                                                                                                                                                                                                                                                | Use `!` or the invariant.                                                                                                                                                                                                  |
| `_Avoid_` glossary terms                                           | about 25 sites                                                                                | "hydrate" for Marko 6 (`signals.ts:1156`, `entry-builder.ts:222`, the `index.d.ts` `renderId` JSDoc); "fill" (`signals.ts:1156`, `writer.ts:1424`); `partials` for scope flushes (`dom/resume.ts` › `applyScopes`); `parentScope` (`control-flow.ts:843`, `signals.ts:155`); `refs` (`module-registrations.ts`, `bindings.ts`, `finalize-references.ts`); "serialize guard" and `serialized` for a reason (`known-tag.ts:523`, `translate-attrs.ts:419`); "component" for a template; "ref" for tag variables (`cheatsheet.md` lines 154, 219, 227) | Rename to the CONTEXT.md term.                                                                                                                                                                                             |
| Unused or module-only exports                                      | about 20                                                                                      | `optional.ts` › `at` (no importer), `readsValuesOnResume`, `Renders`, `RenderData`, `bindTagVar`, `kBranchId`, `getGroupReason`, `startRender`, `forBranches`, `tryBoundary`, `iterateFor*`; unused type `RuntimeKey`                                                                                                                                                                                                                                                                                                                               | Delete, or drop the `export`.                                                                                                                                                                                              |
| TODO comments instead of filed items                               | about 14                                                                                      | `known-tag.ts` (5, two are unverified bug suspicions), `bindings.ts:185,192` (192 looks stale), `params-tree.ts:9`, `dom/dom.ts` (3, plus a dead jsperf link), `html/writer.ts:428,1117`                                                                                                                                                                                                                                                                                                                                                            | File in `agent-feedback/` or delete.                                                                                                                                                                                       |
| Exports placed after private helpers (top-down order)              | about 15 files                                                                                | `references.ts`, `finalize-references.ts`, `optional.ts`, `known-tag.ts`, `assert.ts`, `structure.ts`, `translate-attrs.ts`, `writer.ts`, `control-flow.ts` (both runtimes), `controllable.ts`, `load.ts`, `resume.ts`                                                                                                                                                                                                                                                                                                                              | Reorder: exports first, helpers last.                                                                                                                                                                                      |

## Guidance gaps

Nine rules are wrong as written, contradict another rule, or have drifted from the code. Each one sends reviewers after non-issues or lets real ones through.

| Guidance                                                                                                                                                                          | Problem                                                                                                                                                                                                                                                                                                                                   | Suggested clarification                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "An unreferenced top-level declaration in an optimized bundle snapshot is this bug" (runtime-tags AGENTS.md › Architecture)                                                       | RESUMABILITY.md calls direct registration a retention root by design. Optimized snapshots hold 925 unreferenced `_script`, 227 `_content`, 60 `_var_resume`, 12 `_hoist_resume` and 7 `_el` declarations. Snapshots also strip `export`s, so lazy-chunk re-exports (`v:*.mjs`) and rolldown-inlined `$walks` constants look unreferenced. | Exempt registrations the server can emit, and point to a check that is not confounded by stripped exports. A registration whose id no server output can emit is the real bug, as the hoist finding shows. |
| "The metadata shell itself (`node.extra` objects, `Section`s, `Binding`s) is shared by reference across clones"                                                                   | The compiler clones with `t.cloneNode(file.ast, true)` (`compiler/src/babel-plugin/index.js:104`), and Babel's `cloneNode` does `newNode.extra = Object.assign({}, node.extra)`. Extra objects are shallow copies; only their field values are shared.                                                                                    | Say that extra objects are copied per output while their field values (`Section`, `Binding`, nested records) are shared, so neither identity nor a field written in translate carries across outputs.     |
| "There are currently zero Babel `traverse` calls in the translator"                                                                                                               | True for Babel's `traverse`, but `util/traverse.ts` hand-writes whole-AST walkers: `generate-uid.ts` re-walks the program to seed uid counts, and `program/html.ts` runs `traverseReplace(program.node, …)`.                                                                                                                              | State that hand-written whole-AST walks fall under the same rule.                                                                                                                                         |
| "Don't add Babel `NodePath` helper calls (`findParent`, `find`, `getFunctionParent`, …)"                                                                                          | It is unclear whether sibling walkers (`getPrevSibling`), `getOuterBindingIdentifiers` and `path.toString()` count. There are about 26 such sites.                                                                                                                                                                                        | List the helper families that count, and name the direct form for sibling walks: index the parent container from `path.key`.                                                                              |
| "Compile errors use `path.buildCodeFrameError` … `util/assert.ts` is the canonical style"                                                                                         | `assert.ts` itself uses `tag.hub.buildError` twice, and 41 sites use it overall. Two uses are needed: framing a sub-range (`buildRangeError`) and a freshly parsed statement with no path (`statement-tag.ts`).                                                                                                                           | Name the cases where `hub.buildError` is correct.                                                                                                                                                         |
| "Comments are a last resort and never exceed two lines" with "Comments (JSDoc included) must be true"                                                                             | It is unclear whether the two-line cap covers JSDoc on public types (`index.d.ts` › `Marko.Global`) and harness explanations. The run repo exempts JSDoc explicitly.                                                                                                                                                                      | State whether public API JSDoc is exempt.                                                                                                                                                                 |
| "A case valid Marko reaches that the runtime cannot handle is a bug to fix, never a rejection" versus agent-feedback's "A deliberate limitation gets a site comment, not an item" | `writer.ts` › `renderPlaceholder` rejects `<await>` inside `@placeholder` with only a `// TODO: eventually this should be allowed.` site comment, and a fixture pins the rejection.                                                                                                                                                       | Say which rule wins for a limitation in valid Marko. The AGENTS.md wording implies it must be filed as a bug.                                                                                             |
| "Effects carry no order … a fixture asserting an order is a finding"                                                                                                              | The filed item `2026-09-22-order-queued-renders-the-same-in-csr-and-resume.md` treats a divergent `<script>` order between CSR and resume as a bug to fix in `queueRender`. The harness's `equivalent: true` default pushes toward that fix.                                                                                              | Rewrite or delete the item, and add a harness note that effect logs are compared as sets.                                                                                                                 |
| Testing section of runtime-tags AGENTS.md                                                                                                                                         | Its `TestConfig` list omits `delay_load`, `entry_delay` and `abort_ssr`. It documents `diagnostics[.debug].md`, but the harness writes only `diagnostics.md`.                                                                                                                                                                             | Sync the list with `main.test.ts`.                                                                                                                                                                        |

Six agent-feedback items have also gone stale. Their symbols no longer exist, contrary to the README's "cite by stable symbol":

- `2026-07-11-split-rarely-used-dom-machinery-out-of-the.md` (`_enable_catch`; its `queue.ts` half no longer applies)
- `2026-07-13-make-try-s-enable-catch-shakable-without-breaking.md` (`_enable_catch`)
- `2026-07-13-couple-dynamic-tag-resume-registration-to-the-retained.md` (`_resume_dynamic_tag`, `enableDynamicTagResume`, `_enable_controllable`)
- `2026-08-18-run-runtime-owned-effects-off-resume-data-instead-of.md` (`registeredValues`, now `_resumed`)
- `2026-09-03-placeholder-branch-link-is-serialized-twice.md` (`flushPlaceholder`, now `renderPlaceholder`)
- `2026-07-13-propagate-invoke-only-inputs-into-same-program-define.md` (quotes a condition the code replaced with `isOwnBinding`)

## Security

The audit found one security-sensitive issue. Its details are deliberately left
out of this file, because this repository is public and `SECURITY.md` asks for
private reports. The details went to the maintainer directly; file them as a private GitHub
security advisory, as `SECURITY.md` asks.

## Working notes

Per-finding detail behind the tables, grouped by the area review that produced it. `[V]` was reproduced by the lead auditor; `[R]` rests on the area reviewer's evidence. Severity follows the tables: high means behavior, architecture, a phase-contract break, or bytes paid per template or instance.

### Lead auditor

- [V][high] finalize-references.ts › binding.hoists: `addAlwaysReason(binding)` for every hoisted binding, and `addOwnerReason(expr.section, hoistedSection, ALWAYS)` for every expression with a hoisted read, with no `readsValuesOnResume` check (the closure case right above has it). const-tag fixture: writes `e: _._.a0`, ships `_resumed.a0 = $y` and `_hoist_resume("a1", 4)`, yet no client code reads `y` after resume (`${typeof y}` is static). Rule: architecture principle 1 (ship only where analysis shows it can run/update); Reason ("always for reads on resume").
- [V][med] translator internal-invariant throws in production: util/writer.ts:88 "POTENTIAL MARKO BUG…", visitors/program/dom.ts:276 "Marko internal error…", plus v8-ignored throws in sources.ts createSources, references.ts mergeInto/untrackExtra, sections.ts getParamReasonGroupIndex. Rule: translator has no MARKO_DEBUG checks, design the invariant out; no guards for ruled-out states.
- [V][low] compile errors: 115 sites; ~68 lack a markojs.com docs link; 41 use `hub.buildError` vs 74 `buildCodeFrameError`. Rule: util/assert.ts canonical style. List: errscan-nolink.txt.
- [V][low] 82 comment blocks > 2 content lines (comments.txt).
- [V][low] `if (x) flag = true` one-liners that should be `flag ||= x`: signals.ts:443, entry-builder.ts:178-180, style-interpolation.ts:97, native-tag.ts:273/317, dynamic-tag.ts:174, html/template.ts:396, html/control-flow.ts:642.
- [V][low] _Avoid_ terms: signals.ts:1156 "before its scopes hydrate (stubs fill in place)"; signals.ts:155 "parent scope"; entry-builder.ts:222 "Unable to build hydrate code"; dom/resume.ts `partials`/`partial` for scope flush entries; index.d.ts renderId JSDoc "single hydrated page"; cheatsheet.md "ref"/"refs" for tag variables (lines 154, 219, 227).
- [V][guidance] AGENTS.md "An unreferenced top-level declaration in an optimized bundle snapshot is this bug" vs RESUMABILITY "Direct registration is a retention root": 925 `_script`, 227 `_content`, 60 `_var_resume`, 12 `_hoist_resume`, 7 `_el` declarations are unreferenced in snapshots by design; snapshots also strip exports (lazy `v:*.mjs` re-exports) and keep rolldown-inlined `$walks` consts, so the check as worded is noise.
- [V][low] scripts/build-plugins/decl-hoist.mts: narrating comments ("Remove keyword…", "Remove trailing semicolon"), 4-line block.

### Translator analysis core (references, finalize-references, bindings, sources, optional, sections)

- [V][high] references.ts › Read.comparedTo: `t.Node` stored on Binding.reads during analyze (line 55/1210); consumer for-selector.ts:69 reads `comparedTo?.extra?.read`. Fix: store the operand's extra.
- [R][med] references.ts › addReadToExpression inOwnBody: `root.scope.getBinding(binding.name)` name lookup misses property aliases (`x_y`), so debug `_assert_init` skips member reads. Fix: compute in trackReferencesForBinding where babelBinding is known.
- [V][med] v8-ignored invariant throws (createSources, mergeInto, untrackExtra, getParamReasonGroupIndex) — merged into own item above.
- [R][med] Section.params typed ParamBinding, cast in trackParamsReferences, holds derived/local (for, await). Partly filed 2026-07-22-make-a-params-binding-identifiable-from-binding-type.md.
- [R][med] sections.ts › getRendererReason recomputed 3x (program exit, html translate, dom translate), returns `false` as a second "unset"; addOwnerReason widened to accept false. Fix: createPassMemo, return undefined. Same for getDynamicTagContentClosures.
- [R][low] references.ts symbol keys kReferencedBindings etc. written by finalize-references via exported setters, read across modules → should be declared string fields.
- [R][low] globalBindings sorted list only tested for truthiness → boolean `||=`.
- [R][low] hasEmittedAssignment re-derives settled Binding.assignments (let.ts:146).
- [R][low] dead export optional.ts › at; needless export readsValuesOnResume.
- [R][low] references.ts:681 `scope.path.hub.buildError` non-canonical error.
- [R][low] direct form: getDynamicClosureIndex counts via side-effecting `find`; mapReturnedParams accumulates in a filter predicate; empty `if (getter) {}` branch (finalize-references 757); hand-written memo in resolveBindingSources; Array.isArray over Opt in getDeepestPropertyAlias.
- [R][low] guards/`?.`/`!` for ruled-out states x8 in sections.ts/references.ts; casts x4; `refs` naming x5; coined "reference group(s)" for Intersection; TODO comments (bindings.ts:185, 192 — 192 looks stale); Binding.id written before final; 6 single-use named types; top-down order in optional.ts/references.ts/finalize-references.ts.
- [R][other] content-derives.ts keys analysis state by NodePath<MarkoTag> and applies via forEachSection(finalizeContentDerives) — NodePath retained across phases + after-the-fact scan.
- [R][other] dropped-section reads orphaned in getFunctionReadsByExpression; getReferenceFinalizers()/getAssignments() never cleared after finalize.

### Translator util helpers

- [V][high] build-string-expression.ts › buildStringExpression(useIife): rolldown#9189 workaround wraps every identifier part of a composed template/walks string in `/*@__PURE__*/ ((_w0) => `...`)(x)` (per-site purity, bundler-specific). 130 IIFEs across 61 optimized dom.bundle.js; some ship as `((_w0) => `${_w0}<p> </p>`)("")` (constant never folds). ~13-19 B min each. Fix: plain template literals; wrapper only for the import-cycle part (isCircularRequest), one param per distinct id.
- [R][med] generate-uid.ts › getInitialCounts: hand-written `traverse()` re-walks whole program to seed uid counts; only caller of traverse(); `countsForFile` WeakMap duplicates createOutputState. Fix: seed from program.scope.references + globals; delete traverse().
- [V][med] translate-attrs.ts › contentProps WeakSet side channel consumed by dynamic-tag.ts (lookup + double cast + splice(indexOf)). Fix: return the content property as a field.
- [R][med] structure.ts › trimTrailingExits regex on walk-code char layout + getComment reads the debug comment back from AST → stale comment (lists codes the string no longer has). Fix: record trimmed length in resolveStructure.
- [V][low] generate-uid.ts › hasSharedUid("content") used as feature flag at program/html.ts:157 (name check). Fix: record self-reference where custom-tag emits it.
- [R][low] traverse.ts reimplements t.traverseFast with `(t as any).VISITOR_KEYS` (typed export exists).
- [R][low] assert.ts › assertNoTagVarMutation message lacks backticks/link (`uid is readonly…`), `?.` on always-present binding.
- [R][low] hub.buildError where a path exists: style-interpolation.ts x5, assert.ts assertForParams.
- [V][low] writer.ts › markNode "POTENTIAL MARKO BUG" guard never fires (all nodeBinding are dom); structure.ts nCodeString default throw.
- [R][low] writer.ts Write union's function member never produced (unwrapWrite + map copy dead).
- [R][low] small: structure.ts:317 always-true check; marko-config getReadyId default unused; is-invoked-function bogus predicate; redundant `!`/`?.` (get-declared-binding-expression:19, generate-uid:31, tag-name-type 92/100, read-replacement section!/fallback).
- [R][low] NodePath sibling helpers: nested-attribute-tags getConditionRoot, static-text followsStaticText.
- [R][low] `as any` into private internals: tag-name-type.ts:418 `(lookup as any).merged.tags`; get-compile-stage.ts:17 `(file as any).___compileStage`.
- [R][low] is-event-or-change-handler.ts copies runtime isEventHandler regex; tag-facts.ts:213 `def.name === "title"` name check beside nativeElementFacts table.
- [R][low] `||=`: nested-attribute-tags.ts:104, tag-name-type.ts:99; translateIfAttrTag switch-in-while.
- [R][low] naming: body-to-text needsTextCoercion (decision name), stale `referencedBindings` comment; translate-attrs.ts:419 `serialized = getRendererReason` (_Avoid_ "serialization flag"); "component" for template (tag-name-type:260, is-only-child-in-parent:34); "apart of" typo reverses meaning (nested-attribute-tags:176).
- [R][low] patterns: 7 long comments; 5 non-capturing callbacks; exports after helpers in 6 files; 3 module-level WeakSet/WeakMap side channels (contentProps, countsForFile, declaredSectionMetas); 4 spread temporaries.
- [V][guidance] AGENTS.md says node.extra objects are "shared by reference across clones"; compiler clones with `t.cloneNode(file.ast, true)` (babel-plugin/index.js:104) and Babel's cloneNode does `newNode.extra = Object.assign({}, node.extra)` — extra objects are shallow-copied; only their field values are shared.

### Known tags, registrations, entry builder, interop

- [V][high] asset-imports.ts: `assetImports` augments public MarkoMeta, internal channel to entry-builder (styleFile stored twice: programExtra.styleFile + assetImports). Fix: ProgramExtra field. Related: classHydration/hasComponentBrowser interop channel on metadata.marko (dynamic-tag.ts:329/364, tag-name-type.ts:101), while sibling interop flags use program extra.
- [V][med] interop/build-aggregate-error.ts: second compile-error system; `"MARKO_DEBUG" in process.env` behavior switch; Object.defineProperty("message") to defeat Babel; error lacks filename/loc/label/frame and throws under errorRecovery. Fix: diagnosticError per location; delete file.
- [R][med] interop/index.ts withInteropEntryBuilder copies entry-builder traversal; drifted: probe shows a shared Tags child imported twice in class (-t class) page entry. Fix: one traversal, per-file dispatch.
- [R][med] content-derives.ts parks NodePaths in analysis state, replays via forEachSection(finalizeContentDerives) (also module-registrations trackImport stores node). Fix: write from analyze exit hooks.
- [R][med] known-tag.ts params trees/call-site decisions rebuilt per call site & per output (exposeChildParamsTree, getSettledParamsTree in both outputs, getSingleKnownSpread x3); two walks kept in step by hand. Fix: Section field + settle once.
- [V][med] known-tag.ts › analyzeParams nulls `tag.node.arguments` around dropAllTagNodes during analyze (AST mutation in analyze; unsafe on throw).
- [R][low] fnExtra.name holds hint then uid (module-registrations registerFunction), `.slice(1)` couples to generateUid prefix.
- [R][low] naming: "serialize guard" (known-tag:523) vs write guard; `refs`/getStaticDeclRefs/addBindingRefs (_Avoid_ refs); "hydrate code".
- [R][low] linkAssets policy applied twice (tag-import getImportFacts + import-declaration.ts:84-89); loadImport field stores a conclusion; derivedImports module WeakSet.
- [R][low] production guards for translator invariants: runtime.ts assertTranslate on every callRuntime; section-renderer isPropertyPathRead throw; entry-builder assertVisited; interop normalizeVisit throw; dead `knownExprs && childScopeBinding &&`; `?.` after `!`.
- [R][low] interop version `?? "0.0.0"` fallback masks a field the same object says must surface loudly.
- [R][low] object spreads (interop/index.ts:85-88, 174-176); build-then-reverse in writeAttrsToSignals (+translate-attrs.ts:163); getOuterBindingIdentifiers.
- [R][low] patterns: 15 long comments (runtime.ts:106 mentions html .feat that doesn't exist; entry-builder.ts:197 untrue in general); 9 non-capturing callbacks; 5 `if(c) flag=true`; 7 compile-context-as-parameter (isClientAssetImport(file), buildAggregateError(file), importOrSelfReferenceName(file), isCircularRequest(file), resolveRegisterModule(file), writeModuleRegistrations(program), getRuntimePath(output)); 8 array spread copies; `as any` x5 interop; `filename as string`; 6 TODO comments (2 unverified bug suspicions); top-down order (known-tag, params-tree, module-read, runtime); tag-import.ts 8 errors no docs link; VisitChild single-use type.
- [R][other] program/index.ts sets hasResumes for any truthy getRendererReason incl. param-only → template becomes a root, against CONTEXT "A param-only reason is never a root's own" (relates to filed 2026-10-12-keep-input-driven-content-registrations-with-their-callers.md).

### DOM control flow, resume, load, controllables, features

- [V][high] dom/load.ts imports `startAwait, renderCatch` from ./control-flow (main-graph rule). Measured by reviewer: lazy page w/o await/placeholder −594 min / −199 brotli if decoupled. Fix: placeholder.feat installs await-start hook into a latch; loadFailed queues a throwing render that catch.feat's runRender wrapper routes to renderCatch.
- [V][med] dom/dom.ts imports rendererKey/setBranch from ./control-flow and controllableScripts from ./controllable; scope.ts and renderer.ts (imported by resume.ts) import ./dom → control-flow/controllable in resume's static graph. Filed: 2026-07-11-split-rarely-used-dom-machinery-out-of-the.md (queue.ts half stale), 2026-07-30-latch-attr-content-so-a-childless-spread-does.md.
- [V][low] dynamic-tag-var.feat.ts: two installer calls (installBranchRenders + installDynamicTagVar) vs "at most one installer call".
- [V][high] dom/controllable.ts `_attr_select_value(_default)`: `pendingEffects.unshift(...)` x3 to run select sync before user effects → holds an effect order, bypasses queueEffect, O(n) unshift per select (quadratic over lists), closure per render. Fix: queue as a render keyed past every scope id (like queueCompleteAwaitCounter's tryBranch id + 1e9) reading ControlledValue.
- [R][med] control-flow.ts › countAwait: raw requestAnimationFrame + own prepareEffects/runEffects flush; queueAsyncRender does it (−101 min / −25 brotli measured); frame delay intent undocumented.
- [R][med] controllable.ts: queueMicrotask(onChange) on resume (vs queueAsyncRender(scope, queueEffect, fn) as catch.feat does); handleFormReset waits a rAF guessing reset completion (stalls in hidden tabs); per-element MutationObserver for details/dialog vs delegated toggle. Probe Chromium+Firefox first.
- [R][med] controllable.ts expandos `(el as any)._ = onChange; (el as any).c = hasChanged;` + handleChange: second element→handler store and delegated dispatcher beside event.ts `_on`/handleDelegated; 6 `as any`.
- [R][med] control-flow.ts › _dynamic_tag_content duplicates dom.ts › _attr_content; guarded subscribe repeated 4x (helper should take undefined).
- [V][med] control-flow.ts › _dynamic_tag: `{ ...args, content: getContent(scope) }` per update; new content Renderer per update. Fix: compiler puts content into the getInput literal.
- [R][low] dom.ts › _attrs_partial copies spread into `partial` per update to drop skipped keys; attrsInternal already filters. Fix: pass skip into attrsInternal.
- [V][low] resume.ts: `resumes.splice(0, i)` per flush; `Object.assign(new scope, itself)` self-assign per resumed scope; `endedBranches.reverse()` (forced by backward walk; filed in 2026-07-30-specialize-single-node…).
- [R][low] control-flow.ts › _show detects hidden wrapper by `tagName === "T"` (name check; visible `<t>` single-node body removed on first update). Fix: carry hidden state in marker.
- [R][low] dead fallbacks/guards/casts: placeholderContent || undefined; values?.size as number; oldScopes[0]?.; compat.ts:40 `!` on non-null; `(normalizedRenderer as any)._` x3 (type the `_` Template flag); as any x5; `(self as any)[runtimeId]` x3.
- [R][low] patterns: 5 long comments (rendererKey has history comment "keeps comparing as it always has"); 4 TODO/link-only comments in dom.ts (incl. dead jsperf link); 3 top-level const arrows (deferToPendingTry, getRenderScopes, noop); 9 non-capturing closures; size idioms (booleans hasPotentialMoves/return true; `nodeType ===` at control-flow.ts:528, resume.ts:593; mixed `pending[pending.length-1]` vs `.at(-1)`); naming (partials, parentScope, withLazy installer named like with* wrapper, live/existing for the same Gen<runId fact); single-use LoadModule; unused exports Renders, RenderData, bindTagVar; top-down order in control-flow/controllable/load/resume; debug accessor `#${tag.toLowerCase()}/0` spelled 4x.
- [R][other] debug false positive: assertSelectValueMatchesOption warns for valid async options; fixture controllable-select-late-options pins it with skip_parity (assertion pinning known bug).
- [R][other] queue.ts › createBranchRenders comment says lazy tags use branch renders; load.ts never calls it (stale). resume.ts:70 comment untrue (initEmbedded calls ready()).
- [R][other] stale agent-feedback items naming removed symbols: 2026-07-11-split… (_enable_catch), 2026-07-13-make-try… (_enable_catch), 2026-07-13-couple… (_resume_dynamic_tag, _enable_controllable), 2026-08-18-run-runtime-owned-effects… (registeredValues → _resumed), 2026-09-03-placeholder-branch-link… (flushPlaceholder).

### HTML writer, template, control flow, dynamic tag, compat, assets

- [V][high] html/writer.ts › Chunk.renderPlaceholder: `<await>` inside `@placeholder` aborts the render ("An @placeholder cannot contain async content.", TODO "eventually this should be allowed"); fixture error-async-placeholder pins the abort (error_html, skip_csr). Rule: "A case valid Marko reaches that the runtime cannot handle is a bug to fix, never a rejection."
- [R][med] two resume-write trackers per write: countResumeWrite (Boundary.resumeWrites counter walking whole chain) + writeAsyncVisits (AsyncContent flag) called from writeScope and Chunk.writeEffect; one system with an early-exit flag.
- [V][med] html/compat.ts › onFlush monkey-patches Chunk.prototype.flushHTML (process-wide, stacks per call). Filed (perf) 2026-07-13-gate-the-compat-resume-s-event-resolver-loop.md.
- [R][low] html/dynamic-tag.ts › `export let _dynamic_tag` arrow reassigned by patchDynamicTag with an 8-arg forwarding wrapper. Fix: function + latch.
- [V][med] writer.ts › flushSerializer `delete passiveScopes[key as unknown as number]` (+4 casts). Fix: Map.
- [V][med] html/dynamic-tag.ts render: `{ ...inputOrArgs, content }` per render (incl. per loop row) re-adding the body the translator spliced out (translator dynamic-tag.ts:448). Same shape in dom (see dom-flow).
- [R][med] dynamic-tag.ts renderNative closure built then called once per native dynamic tag render.
- [R][low] channel object shapes: State lacks passiveScopes/readyId/parent; channel literal varies → polymorphic `$chunk.channel.readyId`.
- [V][low] writer.ts › flushReadyScripts `Array.isArray(held) ? held : [held]` (use toArray).
- [R][low] template.ts › startRender StateClass param always State; comment untrue; export unused.
- [R][low] State.addResumes/serializeFlush forwarders; keepsTryMarks <try>-only on State; hasWrittenReady restates readyIds !== null.
- [R][low] writer.ts › writeScope `let` arrow reassigned under MARKO_DEBUG via IIFE wrapper + cast.
- [R][low] control-flow.ts › forBranches: debug calls user `by` on the non-resumed path where production never does (behavior parity); `by` dead param in prod at 4 call sites.
- [R][low] _template arrow + needless casts + "maybe someday" comment for compat `_`.
- [R][low] inlined walker runtime `d:t` (RenderData.d) never read: 4 B per interactive page. Filed in 2026-07-30-emit-the-inline-walker-runtime-only-when-the.md.
- [R][low] patterns: 8 long comments; 11 comment truth/wording issues (AsyncContent direction inverted, "fill slots" _Avoid_, em dash, unfiled TODOs writer.ts:428, 1117); 4 top-level arrows; 3 non-capturing closures; NOOP defined 3x; 3 counter→identifier encoders (nextReorderId, getDefaultRenderId, serializer nextId); concatSequence reimplemented writer.ts:1383; needless `!`/casts (getState()!, getChunk()! vs $chunk, selector!, as any, getGroupReason cast/?? 0); dead guards (if (!$global) return 0; branchIds?/|| ""; boundary?.abort; tick fallbacks to queueMicrotask/Promise); 3 `if (c) flag=true`; 12 exports used only in-module; single-use/unused types (BodyContentObject, Trigger alias, RuntimeKey unused, Iter); html/for.ts re-export hop.
- [V][med] (translator, write-guard.ts) `$wg__X = _write_guard(r,g)` and `$wi__X = _write_if(r,g)` both hoisted for the same pair in 157 optimized html bundles; `_write_guard` = `_write_if || 0`. And `$wg__X || $wi__X && _resume_branch(id)` can never call _resume_branch (dead) — e.g. component-attrs-intersection. Rule: every emitted token used / two calls differing only by a wrapper → one.

### Tests, harness, fixtures

- [V][high] cleanup-* fixtures (cleanup-single-child-for-deep, cleanup-n-child-for-shallow, cleanup-n-child-if-deep, cleanup-single-child-for-shallow, cleanup-single-child-if-deep) pin mount/destroy order across scopes via a shared innerHTML log ("Outer mounted\nMiddle mounted\nInner mounted", "destroyed 3.1 … 3 … 1.3 2.3"); mount write commented out with a TODO about SSR depth-first vs CSR breadth-first. Fix: order-free log (per-name counts, sorted), restore write.
- [R][med] harness makes effect order observable: track-mutations getStatusString logs in emission order, `equivalent` default true forces SSR-resume == CSR render.md → ~20 fixtures pin relative effect order within a step (5 cleanup-*, 10 log-effect style e.g. try-catch-async-holds-reorder-effects `[a][p][r][q]`, ~6 console e.g. destroy-nested-branches, closure-same-name-script-register-ids, script-new-branch-closure-reruns, await-update-after-resume, interop-class-to-tags-keeps-held-effects). 14 copies of tags/log-effect.marko append. Related filed item 2026-09-22-order-queued-renders-the-same-in-csr-and-resume.md treats divergent script order as a bug (contradicts "Effects carry no order"). Fix: tracker sorts effect logs per step; log-effect keeps a sorted set.
- [V][med] skip_optimize used for debug-only diagnostics where skip_parity exists (controllable-select-no-match, controllable-checkbox-value-binding, dollar-global-client-not-serialized(-condition), lazy-tag-event-auto, lazy-tag-visible-auto, interop lazy-class-child-visible-auto) → drops optimized snapshots/sizes; 5 more skip optimize with no reason (interop-attr-tags-tags-to-class, interop-content-event-tags-to-class, interop-attr-tags-for-tags-to-class, for-row-params-throw-keeps-rows, for-row-setup-throw-keeps-rows).
- [R][med] TestConfig flags: skip_dom (0 users, dead plumbing), skip_html (1 user, hides "TODO: it is broken."), abort_ssr (1 user + steps(signal) param), fix_guide (1 user, duplicates agent-fix-guide.test.ts); error_compiler string[] form 1 user.
- [R][med] utils/embed-test-transform.ts reloads test.ts per compile, swallows errors (contradicts main.test "broken test.ts must fail loudly"), uses `program.hub.file`, overrides translator's `page` fact.
- [R][med] translator-api.test.ts duplicates error_compiler/diagnostics fixture families (diagnostic branch coverage, camelCase style warning, runtimeId validation); describe named for coverage.
- [R][med] mounted-template.test.ts cases reachable by CSR fixtures; harness builds CSR only for the first entry → mounted-template-value/ and -spread/ dirs each a full build.
- [R][med] agent-fix-guide.test.ts re-tests compiler isCodingAgent (also compiler/test/error-recovery.test.js + fixture error-agent-fix-guide).
- [R][med] sleeps: main.test.ts ssr abort path `setTimeout(resolve, 1100)` (try-abort-disconnect hand-rolls promise); await-closure-changed-by-script step `new Promise(r => setTimeout(r, 50))`.
- [V][med] 18 fixtures use deprecated `<attrs>` (diagnostics.md "The `attrs` tag is deprecated"): attr-spread-lone-nullish-input, basic-component-attrs, basic-component-renderBody, basic-dynamic-native-tag, basic-inert-collapsible-tree, basic-layout, component-attrs-intersection, dynamic-tag-custom-native, dynamic-tag-custom-tags, dynamic-tag-name, lazy-tag-visible-target-after-flush, let-change-handler-unassigned, move-and-clear-children, native-tag-ref-effect-child, remove-and-add-rows, toggle-first-child, update-html, update-text.
- [R][med] fixtures-interop/custom-tag-parameters-from-args `skip_html: true, // TODO: it is broken.` unfiled known bug.
- [R][low] casts the type satisfies (flushType cast, tagsTranslator as any x5, as ServerResult x3 + alias, io as IntersectionObserver, querySelector as HTMLButtonElement x10, defaultView as any x6); guards ((meta.diagnostics ?? []) x3 + duplicated Diagnostic interface, loadFault || undefined x2, stripFixtureDir Promise param, importWithContext resolveOpts always same; "Template missing" warns instead of failing); dead isDocument; IIFE comma state; unfiled TODO track-mutations:28.
- [R][low] patterns: 25 long comments in specs/utils + 65 in fixture test.ts (up to 18 lines); history-narrating comments (for-by-nested-branch-divergence "With the fix…", flatten-text-if-tag-param-ref "previously…", spread-removed-event-handler "(the fix)", spread-removed-controlled-handler "used to", html-stream.test.ts:88); false comments (importEvictable JSDoc bare specifiers; reject_load doc; misplaced comments); object spreads (compile options, $global, {...baseConfig} x12, {...console}); duplicated helpers (captureWarns x2, 4 different `tick`s, noop x2, importEvictable vs importWithContext, consumeIterator vs consumeReader, 16 hand-built Boundary literals, 8 compile config copies, re-implemented computeNode/toArray); 18 top-level arrows in specs + 124 in fixture test.ts; 165 inline non-capturing callbacks (excluding mocha); 24 test.ts restating default steps, 5 untyped configs, 387 copies of click(document), 14 log-effect.marko copies; hand-rolled async (dollar-global-deferred-read setTimeout(10), lazy-tag-load-_-error setTimeout click, Promise.reject beside resolveAfter, await Promise.resolve, never-settling promises x4 w/o resolve.ts helper); fixture names with *Avoid* terms (ref/refs x14, upstream/downstream x4, renderBody x2, deps x1, "component" ~25; 41 basic-_).
- [R][other] main.test.ts:281-284 `.actual` naming: replace adds `.debug` only for names with an extension, so debug & optimize ssr/csr actual files overwrite each other.
- [R][other] component-attrs-import-value pins optimized client crash `$scope.d.format is not a function` via error_html (uncertain bug).
- [R][other] await-closure-changed-by-script render-ssr.md logs LOG "e5" twice in one step vs once in CSR (possible double effect on resume; uncertain).
- [R][other] ssr render logs not passed through stripFixtureDir → 4 render-ssr.debug.md contain absolute-ish fixture paths.
- [R][guidance] runtime-tags AGENTS.md TestConfig list omits delay_load, entry_delay, abort_ssr; documents diagnostics[.debug].md but harness writes only diagnostics.md.

### Translator visitors (dynamic and custom tags, program, placeholders, imports)

- [V][high] visitors/tag/dynamic-tag.ts › translate.exit: `if (!isOutputHTML() && isOptimize() && classTagTemplate && !markerReason && !classHydration) { tag.remove(); return; }` — optimized DOM drops an inert Class API child. Reproduced: `<let/show=false/>`+toggle+`<if=show><message value="Hello World"/></if>` (components/message.marko inert), `-t class -o dom`: optimized `_if(1, "<!><!><!>", "b%")` no setup, no import; debug renders `_message` via `_dynamic_tag`. Toggling show renders nothing in production. Rule: debug/prod parity; comment false ("SSR already produced their DOM"). CSR only runs in debug so no fixture catches it.
- [R][high] dynamic-tag.ts › analyze.enter: `isInteractive = true` (and `retained` for change handlers) from any event/change handler or spread attr even when every candidate is a known custom template (tagNameType CustomTag); `mayHaveNativeAttr` in the same file already checks. Probe: `<${input.x ? A : B} onClick=input.onClick/>` with server-only A/B ships runtime init + root; `title=` ships nothing. Rule: program-wide effect follows the reason, not presence; template decides only what it knows.
- [R][med] custom-tag.ts:88-90 propagates `programExtra.page ??= true` from a known child page; dynamic-tag.ts lacks it → `<${input.x ? Layout : Other}>` with html-rendering templates compiles as embed. Rule: compile the same wherever it renders; `||=`.
- [R][med] program/index.ts analyze.exit: hasResumes via forEachSection scan; renderer half accepts any (param-only) reason → template becomes a bundle root (probe). Rule: only unconditional reasons make roots; no after-the-fact whole-program scan. Partly filed 2026-10-12-keep-input-driven-content-registrations-with-their-callers.md.
- [V][high] import-declaration.ts › analyze: `loadAttrPath.remove()` when !linkAssets — AST mutation in analyze; util/tag-import.ts › getImportFacts decides the same again.
- [R][med] import-declaration.ts: `load` import used above its declaration is a compile error only because of translate order (fixture error-load-import-used-above pins it); uses `ref.find` NodePath helper + casts. Rule: fix the order mechanism, never reject valid Marko.
- [V][med] dynamic-tag.ts MarkoMeta augmentation classHydration/hasComponentBrowser (runtime-class getClassHydrationMode writes metadata while writing hydratesTags to program extra in the same function).
- [V][med] per-site purity x3: program/dom.ts (`_content` made pure when !registerReason || registerWrapper), custom-tag.ts createLoadIdentifier (`@__PURE__` on trigger call), import-declaration.ts (`t.callExpression(importRuntime("_load_template"))` bypasses list purity → impure). Fix: separate runtime names for always-registered forms (export aliases).
- [R][med] custom-tag.ts › buildLoadSetupVirtualModule always imports child setup → `const $setup = ($_) => {};` survives in 10 optimized bundles (lazy-tag-conditional-child-inert, lazy-tag-load-error…) and runs per created branch. Fix: omit when !hasSetupWork.
- [R][low] program/dom.ts: `_content_closures(_content("a1", …), {…}); _resumed.a1 = $tab_content;` registers id twice (7 fixtures).
- [R][low] referenced-identifier.ts: `$signal` in server render inlines a throw IIFE with a production message ("Cannot use $signal in a server render.") vs debug-only `_el_read_error`/`_hoist_read_error` helpers; fixture abort-signal-render-phase-error pins prod throw.
- [R][low] one-liners: assertSetupWorkFound reconciles analysis vs translate by throwing; TAG_NAME_IDENTIFIER_REG duplicated (pre-analyze.ts:34, tag-name-type.ts); pre-analyze.ts:222-237 fake `{loc} as any` duplicating assert.ts buildRangeError; dynamic-tag.ts:488 `tag.get("name").toString()` vs getTagNameHint; document-type.ts isBeforeHtmlOrHead name checks; dynamic-tag.ts:395-398 emit-then-truncate `arguments.length = 2`; program/index.ts:283-300 compat import reorder workaround (filed 2026-08-20) with `[undefined,…]` placeholder + cast; referenced-identifier.ts:138,146 bypass callRuntime.
- [R][low] comments: referenced-identifier.ts:29-36 8 lines; dynamic-tag.ts:467-468 history; scriptlet.ts:51,65 "currently" inside empty `if (isHTML) {}`; program/index.ts:95 TODO; dynamic-tag.ts:354-355 editorial; dynamic-tag.ts:331-332 false.
- [R][low] patterns: NodePath helpers x10 (find, getOuterBindingIdentifiers, getOuterBindingIdentifierPaths, siblings, toString names); 4 non-capturing callbacks; ~14 guards for ruled-out states (linkAssets?. vs !, extra?. though analyzeTagNameType always creates extra, undefined params); casts (pre-analyze.ts:235 as any, dynamic-tag.ts 4, import-declaration.ts 4, placeholder.ts:165 single-use HTMLMethod, program/html.ts:283,295, program/index.ts:299, function.ts:49); dead program/html.ts:147-148; duplicated `section` local; top-down order (pushStatementOnce, toConstTag); cdata/declaration reject in translate not early.
- [R][other] stale agent-feedback 2026-07-13-couple-dynamic-tag-resume-registration… cites enableDynamicTagResume/_resume_dynamic_tag.

### Native tag visitor

- [V][high] isInteractive set on presence during analyze at 5 sites: native-tag.ts:410 (hasEventHandlers), dynamic-tag.ts:190, core/script.ts:89, core/lifecycle.ts:52, util/tag-name-type.ts:104 — vs module-registrations.ts `isInteractive ||= isUnconditionalReason(...)`. Probe (reviewer): `<child title="x"><button onClick() {…}>hi</button></child>` where child never reads content → both outputs drop the button, yet hydrate entry still imports template + initEmbedded (2038/1053 vs 376/233 min/brotli). Fix: set where reasons settle from unconditional reasons, skip dropped sections.
- [R][med] static `<textarea>` keeps node binding + `_attr_textarea_value_default` + input-value runtime (stateIsAttr false for textarea): +648 min / +259 brotli vs `<pre>`.
- [R][med] native-tag translate.dom: `staticName` re-derived → `<${`x-foo`} ...attrs/>` imports controllable.feat (+2645 min / +925 brotli); comment false (getCanonicalTagName resolves it).
- [R][med] HTML controllable helpers without change handler emit unused scopeId + accessor (`_attr_input_value($scope0_id, "a", input.value)`, `void 0` handler slots): 15 three-arg + 27 `void 0` calls in optimized html bundles, ~17-25 B each. Fix: handler-free form or reorder params so trimming drops them.
- [R][med] class/style toggle items grouped into one `_or` intersection signal keyed on the union of reads (`_attr_class_items` + `_const` per input) — re-applies all toggles on any change.
- [R][low] scope id + accessor repeated across helper calls in one `_html` expression (86 calls / 53 fixtures), e.g. `_attrs_textarea_value($scope0_id, "b", …)` + `_attrs(…, "b", $scope0_id, …)` + `_el_resume($scope0_id, "b")`.
- [R][med] "does the element have a handler?" answered 5 ways (attrs[1] !== undefined, confident-null eval, !indexByName.valueChange, computeNode); `<button onClick=null>` emits `_on(..., null)` + registration + initEmbedded.
- [R][med] controllable element knowledge split between native-tag.ts (getRelatedControllable, getControllableHelper, getDOMControllableDefaultHelper, stateIsAttr, details/dialog name check) and tag-facts.ts controllableElements.
- [R][low] element facts re-derived by name: openTagOnly from getTagDef 6x; `tagName !== "meta"` vs tagDef.attributes.content; dead `tagName !== "textarea"` guards.
- [R][low] visitors/tag/index.ts kAnalyzeFailed dead (exit never runs after skip()).
- [R][low] guards/casts: `as Plugin` x2 unneeded; `nodeBinding &&` where always created; `tagDef.attributes?.content`; isTagVarUsed asserts var! on tags without var; second evaluate + `as string`; odd break structure.
- [R][low] validation: `<div fooChange() {…}>` passes compile-time check, writes function source as attribute in optimized SSR; index.ts attribute-arguments error thrown in translate w/o docs link; 9 native-tag errors w/o docs link; re-implements assertIdentifierVar wording; attribute-tag.ts creates section before rejecting parentless tag; findParentTag vs getAttributeTagParent/getParentTag; warnCamelCaseStyleKeys duplicates kebab conversion in common/helpers.
- [R][low] patterns: 14 non-capturing callbacks (896/1201 identical `forEach((child) => child.skip())`); build-then-reverse x3 (own/handlers/spread) — `handlers` doc "in source order" keeps an effect order; 2 long comments; `||=` x3; array spread temporaries; glossary: "hoist" for prefix factoring (1701, 1850); top-down order; constants/class-hydration.ts only enum module outside util/constants and duplicated in runtime-class; index.ts dispatch inconsistency.
- [R][other] valueChange at attribute index 0 reads as absent (`!indexByName.valueChange`) → different compile; onClick + on-click both attach w/o diagnostic; `_attr_style_items` multi-prop path has no fixture.

### DOM core and common

- [V][high] dom/signals.ts › _for_selector keyValueAccessor always `AccessorProp.LoopKey` (all 15 optimized calls pass "M"); dead decode branch, `??` reads same slot twice, no-op write-back per row. Fix: drop param from _for_selector/keyedScopes/emitted call (−36 min / −26 brotli runtime + 4 B per call site).
- [V][med] floor: dom/resume.ts › runResumeEffects leaves `try { runEffects(render.m([])); } finally { }` in .sizes/counter.ssr/runtime.js (isResuming writes fold, try stays) — both floor pages; −14 min / −6 brotli. Rule: optional-feature code must fold out of counter.ssr/comments.ssr.
- [V][med] floor: dom/event.ts › _on per-element `[1 + type] === undefined` check duplicates delegate's own per-type memo; counter.ssr −17/−5, comments.ssr −17/−10.
- [R][med] abort-signal.ts › trackCleanup writes subscriptionsEnabled latch (shared helper used by $signal/trackAbort/_lifecycle/_await) → subscription sweep ships without closure subscriptions; comment "fold away with their writers" untrue. −80/−43 measured.
- [R][low] scope.ts destroyNestedScopes keeps `scope.B?.forEach(cleanupScope)` + empty `function cleanupScope(scope) {}` in counter.csr (−31/−2).
- [R][low] liveness check (Gen > 0 && < runId) open-coded 3x beside runLiveBranch (_for_closure, _if_closure, _closure).
- [R][med] hot path: _for_closure/_for_selector allocate a render closure (+ toArray array) per update; create once per helper (−46/−19 with the above).
- [R][low] dom/template.ts mount builds $global defaults twice (if/else same literal) + debug validation copied verbatim in html/template.ts (move to errors.ts).
- [R][low] common/helpers.ts stringifyStyleEntry re-implements errors.ts isSilentlyDropped/describeDropped; escapeStyleValue builds a RegExp + closure per call (hoist like escapeStyleAttr).
- [R][low] _return_change/_var_change: prod silently ignores readonly assignment debug rejects (`|| undefined` + `?.()`); −10/−6.
- [R][low] scope.ts destroyBranch second `?.` never short-circuits.
- [R][low] parity: debug delegated `currentTarget` getter returns null (prod: document).
- [R][low] size idioms: walkNextNode single-use with early return (−13/−6); _id tests `accessor !== undefined` twice (−18/−8); _script block-body arrow (−2 floor); subscribeToScopeSet binds `size`; $signalReset writes undefined not 0.
- [R][low] patterns: 7 top-level const arrows (decodeAccessor, replaceUnsafeStyleAttr, delegate, _return, _template, walkNextNode, walkNextSibling); 6 long comments (helpers.ts:207 12 lines; template.ts:82 7-line diagram); untrue/history comments (template.ts:33 `._` "exclusively for compat" but _dynamic_tag reads it; queue.ts:79 garbled; meta.ts:4 register ids start with `_` vs $C_s; signals.ts:471 "it has always been"); casts (`as Signal<T>`, runEffects cast, template.ts:109 as any as, abort-signal.ts:10 `queueEffect(ctrl as any, …)` puts a non-scope in the effect queue, template.ts:31 hides missing render); single-use types ExecFn, Hoistable, Hoisted; naming (renderer.ts parentScope; _closure_get(valueAccessor) receives closure accessor; Renderer imported twice; params signal named args; "body-only"); forwarder runBranchRenders; dead NodeType.DocumentFragment; AwaitCounter keys outside .debug pairs; DOM-only latches live in common/helpers.ts.

### Core tags

- [V][high] core/script.ts:89 and core/lifecycle.ts:52 set isInteractive on presence (also in dropped content): `<child><script>console.log(1)</script></child>` where child never reads content → no _script in either output, yet hydrate entry imports template + initEmbedded (reviewer probe; same class as native-tag/dynamic-tag/tag-name-type). Note: `consumed` keeps script values out of resolveReason, so finalizeRegistrations does not cover them yet.
- [V][high] core/define.ts analyze: unreferenced `<define>` (allDirectReferences vacuously true) drops only attributes; body stays tracked. define-unreferenced-with-body/html.bundle.js keeps `_content("a0", …)`; with state in body: DOM ships `_closure`/`_closure_get`/`_text`, HTML writes `_scope(…, { b: x, c: $x__closures })` per instance (reviewer probe). Fix: dropContent(body) when no references.
- [R][med] define.ts translate recomputes direct-reference fact analyze computed and discarded (two walks kept in sync by a comment). Fix: MarkoTagExtra field.
- [R][med] define.ts setup-work workaround: hasSetupWork counts Class-API work DOM drops → `const $Greeting_content__setup = $_ => 0;` (interop-inert-class-in-define-tag-body) + always-on internal throw. Fix: count only emitted work.
- [V][med] let.ts/return.ts/script.ts hand-roll duplicate value/valueChange checks ("Invalid duplicate value attribute." ×5) that assertOnlyValueAttr already makes; return.ts collected attrs unused; script.ts re-implements assertNoVar (babel-utils lacks hint param). Fixtures pinning old wording: error-let-duplicate-value, error-return-duplicate-value, error-script-shorthand-and-value-attr, error-script-attrs, error-effect-extra-attr.
- [R][low] let.ts getDeclarationHint vs const.ts getVarHint: same regex, two hints, two errors for one mistake.
- [R][low] `|| void 0` after always-truthy registered change handlers (11 of 22 in optimized html snapshots).
- [R][low] HTML branch calls repeat one guard identifier as branch & marker guard (36 of 202 `_if`/`_for_*` calls), e.g. `$wg__input_show, $wg__input_show`.
- [R][low] if.ts handles branches without body section that assertHasBody rules out (-1 index, placeholder triple, 4 checks); other dead guards (for.ts getLoopKeyBinding, return.ts attrs.value x2, define.ts !tag.node.var, `?.` on always-created extras x7, script.ts body[0]?., if.ts prev.node &&, id.ts assertNoAttributeTags on openTagOnly, script.ts assertNoBodyContent after parse empties body); casts tsc shows unneeded (if.ts:138 as any, show.ts:171, for.ts:195/202, export.ts:43, for.ts:156 forType!).
- [R][low] style: `...IfTag` spreads (if.ts:252,265), `...coreTagLib` (index.ts:53); NodePath sibling helpers x6 (if.ts, style.ts getAllPrevSiblings + cast); 7 core tags branch on isOutputDOM/HTML inside one translate instead of translateByTarget (id.ts builds then discards id); 26 hand-written core-tag doc links (18 duplicate private coreTagLink) — export coreTagLink; off-style messages (class.ts, define.ts "Please…", export.ts, textarea.ts x2, effect.ts single quotes, return.ts "can not"); second state systems (if.ts BRANCHES_LOOKUP WeakMap keyed by NodePath holding NodePaths+Sections; show.ts htmlDisplayRefs); core/textarea.ts is a native-tag helper, not a core tag.
- [R][low] patterns: 6 non-capturing callbacks (let/textarea re-implement isValueAttr); 2 top-level arrows; long comments show.ts:55 (9 lines), id.ts:93; unfiled TODOs if.ts:80, define.ts:59; direct-form (3 ways to drop renderer params, pop()/trimEmptyArgs mutate shared getBranchRendererArgs state; repeated lookups getTagName/getBranches/isTagVarUsed/dynamicStyleValues x3; show.ts buildBranchEndArgs twice for side effect; let.ts attr.default check + fake undefined attr); late validation (script.ts diagnosticWarn per output in translate; try/await/lifecycle validate after creating bindings); naming ("component root", needsTextCoercion, style.ts "M_" literal vs DEFAULT_RUNTIME_ID, getFile() passed as param, `attr.start == null` heuristic).
- [R][other] html-comment static text copies only `>` half of runtime _escape_comment; `<html-comment>M_*1 a</html-comment>` emits raw prefix → could be read as a resume marker.

### HTML serializer, attrs, content

- [V][high] serializer References set channel by hand at 5 of 16 `new Reference(...)` sites; typed-array buffer, Request headers, Response headers skip it (and headers dedup bypasses writeReferenceOr's reachability check) → ready-stream data writes paths main cannot reach (probe: `_=>[2,{buf:_(1).u8.buffer}]` etc.). Fix: Reference takes state and sets flushId/channel itself; route headers dedup through writeReferenceOr.
- [V][high] serializer.ts module scope: `patchIteratorNext(Generator.prototype); patchIteratorNext(AsyncGenerator.prototype);` — process-wide dependency override (every host generator marked with an own symbol prop) to detect partially consumed generators, which then serialize as exhausted (lossy). Fix: delete; drain from current position.
- [V][med] html/attrs.ts › _attrs_partial copies spread into `partial` per render (968 vs 688 B/call; −22–31% time if skip passed to _attrs).
- [R][med] html/attrs.ts › _attrs allocates RegExp literals per call (6 patterns) + common/helpers.ts isEventHandler regex literal per call: −56 B/call hoisting base; −39% bytes/call with isEventHandler hoisted.
- [R][med] serializer.ts › register builds `access` string per registration; no caller passes the param (+56 B per registration).
- [R][med] serializer State methods (scopeRef, writeScopeProps, scopesCursor, writeTrailing, wrapPayload, writeScopedRegistration) are an override hook nothing overrides; comments describe states that don't exist; second `State` class beside writer.ts's.
- [R][low] html/content.ts _to_text duplicates _unescaped (same outputs); writeControlledScope guarded by all 6 callers + writes dead ControlledValue undefined; ScopeInternals declared twice; _attr_nonce re-derives state; escapeCommentStr mixes pure escape with per-render prefix (translator re-implements it); queueAsyncCall re-implements queueCall; hasChannelCalls forwards.
- [R][low] dead: replaceUnsafeRegExpSourceChar `<` branch unreachable; `type Char` alias unused; accessPath loop tail; writeProp default (filed 2026-10-15-drop-dead-unserializable-call-in-writeprop.md).
- [R][low] casts tsc shows unneeded (IntlWithDurationFormat type + false comment; val as any; as unknown as Iterable; Symbol[name as any]).
- [R][low] writeError slices an already-pushed buffer chunk (post-processing output); writeIntl rest-strips locale.
- [R][low] patterns: 6 long comments (serializer.ts:545 7 lines); history comments x2 ("which also clobbered its reference"); untrue comments x4 (incl. errors round-trip cause but writeAggregateError drops it); 7 top-level const arrows; not top-down (serializer opens with ~300 lines of tables/classes; exports at 2263+); 6 duplicate shapes; 10 unneeded `globalThis.Intl?.X`; ungated descriptive Symbol names ship in prod (Symbol("Scope ID"), Symbol("selectedValue")); unused exports (Reference, writeDeferred, quoteRegisterId); "chunk" naming collides with CONTEXT Chunk; `_attr*` param order varies; per-entry refs in writeMap (near filed 2026-07-13-cut-per-value-reference-allocation…).
- [R][other] AggregateError loses cause; partially consumed generator resumes empty.

### Signals, reasons, write guards

- [V][high] reasons.ts › mapBodyParams: `mergeSources(…) || ALWAYS` turns a param reason that every call satisfies with constants into an unconditional write. Probe: `<define/Item|{ n }|><p>${label + n}</p></define><Item n=1/>` writes `_scope($scope0_id, { … h: label … })` unguarded per instance; with `n=input.n` it is guarded `($wi__input_n) && label`. Root cause: stored reason stays in body-param terms; map once in solveReasons. Then drop `|| ALWAYS`, the R generic, casts and per-output mapBodyParams.
- [R][med] signals.ts › writeHTMLResumeStatements requests markerGuard for every section (side effect: hoists) even when nothing consumes it → 520 of 934 hoisted `_write_guard` declarators have a single use (345 fixtures). Fix: build at first consumer / hoist by emitted uses.
- [R][med] signals.ts › buildSignalFn: non-storing setup signals keep `($scope) => $if_content__try($scope)` wrapper (19 sites / 13 bundles); route through toScopeFn (~10 B min each).
- [R][med] signals.ts › writeHTMLResumeStatements emits `_resume_branch` when a `<let>` exists (isLetBinding) not when something can write it; probe: unassigned let in child still emits _resume_branch; `<const>` doesn't. Fix: key on write facts.
- [R][med] reasons.ts › isSameSources papers over sources.ts › mergeSources rebuilding equal records (identity checks miss). Fix: return existing record when equal.
- [R][med] signals.ts owner-by-marker decision carried in per-output state (getOwnerResumedByMarker/setSectionOwnerResumedByMarker set one line before its reader by for/if/await). Fix: derive from section.branch in writeHTMLResumeStatements. (Item 2026-07-02-derive-await-try-branch-scope-owners-without-serializing.md now stale on "only if/for call it".)
- [R][med] signals.ts ClosureHop + setClosureSignalBuilder copy section.branch (nodeBinding, index); build from section.branch in getSignal.
- [R][low] toScopeFn matches closure setup `_` by Owner accessor name (wrong constant; comment says "closure reads").
- [R][low] dead html-only Signal fields: addHTMLEffectCall sets storesValue (DOM-only reader); signalHasWork reads hasHTMLEffect (html-only writer).
- [R][low] per-output state outside state module: htmlDynamicClosureInstancesIdentifier WeakMap, hasTranslatedExtraArgs, updateExpressions.
- [V][low] internal throws: scope-accessor getClosureAccessorId (v8 ignore), scope-read getScopeExpression "Unable to find scope for reference." + stale TODO.
- [R][low] scope-read.ts scopeIdentifier `null as any as t.Identifier` in html + `?? t.identifier("undefined")` fallback.
- [R][low] direct form: getContentClosureValues build-then-reverse + open-coded toArray; Array.from(getSignals().values()) copied only to emit `_script` backwards (comment says no order); getWriteGuardForAny open-codes Array.isArray + misleading `let expr!`.
- [V][med] write-guard.ts: `$wg__X = _write_guard(r,g)` + `$wi__X = _write_if(r,g)` both hoisted for one pair (157 optimized html bundles); `$wg__X || $wi__X && _resume_branch(id)` never calls _resume_branch (component-attrs-intersection). (from html-writer reviewer, verified)
- [R][low] patterns: long comments reasons.ts:180, signals.ts:413 (describes untaken alternative); _Avoid_ "parent scope" signals.ts:155, "hydrate"/"fill" signals.ts:1156; 4 non-capturing callbacks; 5 `if(c) flag = true` (setup-work.ts:29, signals.ts:443,693,882,921); redundant `!`/`?.` x6, misleading `!` x2; guards x4; ~12 casts; forwarders (computeExtraReaders, setSectionOwnerResumedByMarker, getLocalsScopeAccessor, createAnalysisMemo); single-use types (ConditionalReason, SectionGuards, PlaceSlotKind; lowercase type closureSignalBuilder); not top-down (signals.ts, solve-reasons.ts, reasons.ts, scope-accessor.ts, state.ts, cyclic-memo.ts); slots.ts findIn duplicates findSorted; unused compile-stage members (parse, migrate, transform); `type SlotKind = SlotKind.Value` confusion; hasConditionalReason binds unused `$scopeN_reason` (53 debug snapshots); identical `($scope) => $scope._._` owner getter arrows repeat (67).
- [R][other] unread tag variable registers empty signal `_var_resume("a0", ($scope, x) => {})` (tag-var-with-serialize-reason, dynamic-tag-var-assignment); core/for.ts sets keyBinding.scopeAccessor = getAccessorProp().LoopKey during analyze (optimize-dependent output detail on shared Binding).

## Reproduction probes

These reproduce the High findings and the generated-output counts. Run them from
the repo root after `pnpm install`. Keep probe templates under a scratch
directory inside the repo (for example `.audit-probes/`), since taglib discovery
and module resolution need the repo, and delete it afterwards.

### Hoisted `<const>` serialized without a client reader

```bash
pnpm run compile -- -o dom packages/runtime-tags/src/__tests__/fixtures/const-tag/template.marko
```

```bash
pnpm run compile -- -o html -d packages/runtime-tags/src/__tests__/fixtures/const-tag/template.marko
```

`${typeof y}` never changes, yet the HTML output writes `_scope(…, { y })` and
the DOM output keeps `_hoist_resume(…)` plus `_resumed.… = $y`. The committed
snapshot shows the same: `const-tag/__snapshots__/writes.html` has
`e: _._.a0`. Fixed means none of the three remain.

### Optimized DOM drops an inert Class API child

`.audit-probes/inert/template.marko`:

```marko
<let/show=false/>
<button onClick() { show = !show }>toggle</button>
<if=show>
  <message value="Hello World"/>
</if>
```

`.audit-probes/inert/components/message.marko`:

```marko
<div>${input.value}</div>
```

```bash
pnpm run compile -- -t class -o dom .audit-probes/inert/template.marko
```

```bash
pnpm run compile -- -t class -o dom -d .audit-probes/inert/template.marko
```

The optimized output is `_if(1, "<!><!><!>", "b%")` with no setup and no
`message` import. The debug output renders `_message` through `_dynamic_tag`.

### Constant `<define>` params write unguarded

`.audit-probes/define/const.marko`:

```marko
<let/count=0/>
<const/label=input.label/>
<define/Item|{ n }|>
  <p>${label + n}</p>
</define>
<Item n=1/>
<button onClick() { count++ }>${count}</button>
```

Copy it to `input.marko` with `<Item n=input.n/>`, then compare the root
`_scope($scope0_id, { … })` in both:

```bash
pnpm run compile -- -o html .audit-probes/define/const.marko
```

```bash
pnpm run compile -- -o html .audit-probes/define/input.marko
```

`const.marko` writes `h: label` unguarded; `input.marko` writes
`i: ($wi__input_n) && label`.

### Serializer: main stream reaches into a ready channel

Save as `./channel-probe.tmp.mjs` in the repo root, run it, then delete it:

```js
import {
  SerializerState,
  stringifyScopes,
} from "./packages/runtime-tags/src/html/serializer.ts";

const aborted = [];
const boundary = {
  aborted: false,
  abort(err) {
    aborted.push(String(err));
  },
  startAsync() {},
  endAsync() {},
};
const state = new SerializerState();
const u8 = new Uint8Array([1, 2, 3]);
console.log(
  stringifyScopes(state, [[1, {}, { u8 }]], boundary, { readyId: "a" }),
);
console.log(
  stringifyScopes(state, [[2, {}, { buf: u8.buffer }]], boundary),
  aborted,
);
```

```bash
node -r ~ts ./channel-probe.tmp.mjs
```

The second line prints `_=>[2,{buf:_(1).u8.buffer}]` with no abort. A plain
object shared the same way aborts with "shared between independently lazy
loaded content", as designed.

### Floor bundle leftovers

```bash
grep -n -B3 "finally" .sizes/counter.ssr/runtime.js
```

`runResumeEffects` leaves `try { runEffects(render.m([])); } finally { }` once
the `isResuming` writes fold away.

### Generated-output counts

Template-string IIFEs from the rolldown#9189 workaround (130 in 61 files):

```bash
grep -o "((_w0[^)]*) =>" packages/runtime-tags/src/__tests__/fixtures*/*/__snapshots__/dom.bundle.js | wc -l
```

Every `_for_selector` key argument is the loop key accessor `"M"`:

```bash
grep -ho '_for_selector([^)]*' packages/runtime-tags/src/__tests__/fixtures*/*/__snapshots__/dom.bundle.js | sort | uniq -c
```

Write guards hoisted twice for one pair (157 optimized html bundles):

```bash
for f in packages/runtime-tags/src/__tests__/fixtures*/*/__snapshots__/html.bundle.js; do
  grep -oE '\$wg__[A-Za-z0-9_$]+ = _write_guard' "$f" | sed 's/\$wg__//; s/ = _write_guard//' | while read -r n; do
    grep -q "\$wi__$n = _write_if" "$f" && echo "$f"
  done
done | sort -u | wc -l
```

Registrations whose binding nothing references and whose id no SSR write
emits: `regscan.mjs` under "Re-running the audit".

## Mechanical site lists

Regenerate these with the scripts below before working from them; line numbers are as of `9c3ad572`.

### Comment blocks longer than two lines (82)

- `packages/runtime-tags/src/__tests__/evaluate.test.ts:7` (3 lines)
- `packages/runtime-tags/src/__tests__/main.test.ts:71` (3 lines)
- `packages/runtime-tags/src/__tests__/main.test.ts:98` (6 lines)
- `packages/runtime-tags/src/__tests__/main.test.ts:212` (3 lines)
- `packages/runtime-tags/src/__tests__/main.test.ts:499` (3 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:619` (3 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:1114` (4 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:1866` (4 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:1886` (3 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:2827` (3 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:3019` (3 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:3084` (4 lines)
- `packages/runtime-tags/src/__tests__/serializer.test.ts:3262` (3 lines)
- `packages/runtime-tags/src/__tests__/translator-api.test.ts:265` (4 lines)
- `packages/runtime-tags/src/__tests__/utils/bundle.ts:108` (3 lines)
- `packages/runtime-tags/src/__tests__/utils/bundle.ts:128` (5 lines)
- `packages/runtime-tags/src/__tests__/utils/bundle.ts:380` (3 lines)
- `packages/runtime-tags/src/__tests__/utils/bundle.ts:600` (3 lines)
- `packages/runtime-tags/src/__tests__/utils/capture-console.ts:67` (3 lines)
- `packages/runtime-tags/src/__tests__/utils/create-browser.ts:93` (3 lines)
- `packages/runtime-tags/src/__tests__/utils/create-browser.ts:175` (4 lines)
- `packages/runtime-tags/src/__tests__/utils/create-browser.ts:189` (3 lines)
- `packages/runtime-tags/src/__tests__/utils/get-node-info.ts:149` (3 lines)
- `packages/runtime-tags/src/__tests__/utils/import-with-context.ts:10` (5 lines)
- `packages/runtime-tags/src/__tests__/utils/track-mutations.ts:341` (3 lines)
- `packages/runtime-tags/src/common/helpers.ts:207` (12 lines)
- `packages/runtime-tags/src/common/helpers.ts:226` (3 lines)
- `packages/runtime-tags/src/dom/control-flow.ts:590` (3 lines)
- `packages/runtime-tags/src/dom/controllable.ts:37` (3 lines)
- `packages/runtime-tags/src/dom/controllable.ts:182` (3 lines)
- `packages/runtime-tags/src/dom/load.ts:15` (3 lines)
- `packages/runtime-tags/src/dom/queue.ts:79` (3 lines)
- `packages/runtime-tags/src/dom/renderer.ts:142` (3 lines)
- `packages/runtime-tags/src/dom/resume.ts:87` (4 lines)
- `packages/runtime-tags/src/dom/signals.ts:398` (3 lines)
- `packages/runtime-tags/src/dom/template.ts:82` (7 lines)
- `packages/runtime-tags/src/html/assets.ts:72` (3 lines)
- `packages/runtime-tags/src/html/assets.ts:245` (3 lines)
- `packages/runtime-tags/src/html/assets.ts:274` (3 lines)
- `packages/runtime-tags/src/html/attrs.ts:83` (3 lines)
- `packages/runtime-tags/src/html/attrs.ts:535` (3 lines)
- `packages/runtime-tags/src/html/compat.ts:269` (3 lines)
- `packages/runtime-tags/src/html/control-flow.ts:627` (3 lines)
- `packages/runtime-tags/src/html/inlined-runtimes.debug.ts:23` (3 lines)
- `packages/runtime-tags/src/html/serializer.ts:23` (3 lines)
- `packages/runtime-tags/src/html/serializer.ts:545` (7 lines)
- `packages/runtime-tags/src/html/serializer.ts:1060` (4 lines)
- `packages/runtime-tags/src/html/serializer.ts:1376` (3 lines)
- `packages/runtime-tags/src/html/writer.ts:598` (4 lines)
- `packages/runtime-tags/src/translator/core/id.ts:93` (3 lines)
- `packages/runtime-tags/src/translator/core/show.ts:55` (9 lines)
- `packages/runtime-tags/src/translator/interop/feature-detection.ts:54` (3 lines)
- `packages/runtime-tags/src/translator/interop/index.ts:106` (3 lines)
- `packages/runtime-tags/src/translator/util/asset-imports.ts:6` (3 lines)
- `packages/runtime-tags/src/translator/util/body-to-text.ts:16` (3 lines)
- `packages/runtime-tags/src/translator/util/body-to-text.ts:81` (4 lines)
- `packages/runtime-tags/src/translator/util/branch-tag.ts:41` (3 lines)
- `packages/runtime-tags/src/translator/util/build-string-expression.ts:26` (3 lines)
- `packages/runtime-tags/src/translator/util/entry-builder.ts:30` (3 lines)
- `packages/runtime-tags/src/translator/util/entry-builder.ts:45` (4 lines)
- `packages/runtime-tags/src/translator/util/entry-builder.ts:141` (3 lines)
- `packages/runtime-tags/src/translator/util/evaluate.ts:43` (3 lines)
- `packages/runtime-tags/src/translator/util/finalize-references.ts:253` (3 lines)
- `packages/runtime-tags/src/translator/util/get-style-file.ts:28` (7 lines)
- `packages/runtime-tags/src/translator/util/module-registrations.ts:167` (3 lines)
- `packages/runtime-tags/src/translator/util/module-registrations.ts:191` (4 lines)
- `packages/runtime-tags/src/translator/util/module-registrations.ts:249` (3 lines)
- `packages/runtime-tags/src/translator/util/module-registrations.ts:267` (4 lines)
- `packages/runtime-tags/src/translator/util/module-registrations.ts:333` (3 lines)
- `packages/runtime-tags/src/translator/util/module-registrations.ts:484` (3 lines)
- `packages/runtime-tags/src/translator/util/module-registrations.ts:544` (3 lines)
- `packages/runtime-tags/src/translator/util/optional.ts:706` (3 lines)
- `packages/runtime-tags/src/translator/util/read-replacement.ts:126` (3 lines)
- `packages/runtime-tags/src/translator/util/reasons.ts:180` (4 lines)
- `packages/runtime-tags/src/translator/util/runtime.ts:106` (5 lines)
- `packages/runtime-tags/src/translator/util/sections.ts:52` (3 lines)
- `packages/runtime-tags/src/translator/util/sections.ts:460` (3 lines)
- `packages/runtime-tags/src/translator/util/signals.ts:413` (3 lines)
- `packages/runtime-tags/src/translator/util/tag-name-type.ts:109` (4 lines)
- `packages/runtime-tags/src/translator/visitors/referenced-identifier.ts:29` (8 lines)
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:586` (3 lines)
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:877` (3 lines)

### Compile errors without a markojs.com docs link (68)

Messages built by `util/assert.ts` helpers that add `coreTagLink` are excluded. Excerpts drop backticks.

- `packages/runtime-tags/src/translator/core/class.ts:7` (buildError): "class {} component blocks are no longer supported. Use <let> and <const> tags for state."
- `packages/runtime-tags/src/translator/core/define.ts:66` (buildCodeFrameError): "Hoisted values must be functions. The <define> tag variable may not be hoisted. Please mo
- `packages/runtime-tags/src/translator/core/export.ts:18` (buildError): "A template is already its own default export. Use a named export instead."
- `packages/runtime-tags/src/translator/core/html-comment.ts:49` (buildCodeFrameError): "Invalid child. Only text is allowed inside an html comment."
- `packages/runtime-tags/src/translator/core/let.ts:53` (buildError): "Invalid duplicate value attribute."
- `packages/runtime-tags/src/translator/core/let.ts:61` (buildError): "Invalid duplicate valueChange attribute."
- `packages/runtime-tags/src/translator/core/return.ts:48` (buildError): "Invalid duplicate value attribute."
- `packages/runtime-tags/src/translator/core/return.ts:56` (buildError): "Invalid duplicate valueChange attribute."
- `packages/runtime-tags/src/translator/core/script.ts:80` (buildError): "Invalid duplicate value attribute."
- `packages/runtime-tags/src/translator/core/style.ts:206` (buildError): "The style does not support html attributes." + htmlStyleTagAlternateMsg
- `packages/runtime-tags/src/translator/core/textarea.ts:25` (buildError): "Unexpected content in textarea, only text and placeholders are supported."
- `packages/runtime-tags/src/translator/core/textarea.ts:39` (buildError): "A textarea cannot have both a value attribute and body content."
- `packages/runtime-tags/src/translator/util/assert.ts:110` (buildCodeFrameError): {tagVar.name} is readonly and cannot be mutated.
- `packages/runtime-tags/src/translator/util/assert.ts:200` (buildError): msg
- `packages/runtime-tags/src/translator/util/assert.ts:201` (buildCodeFrameError): msg
- `packages/runtime-tags/src/translator/util/entry-builder.ts:222` (buildCodeFrameError): "Unable to build hydrate code, no files were visited before finalizing the build"
- `packages/runtime-tags/src/translator/util/known-tag.ts:225` (buildCodeFrameError): A {childSection === getProgram().node.extra.section ? "template" : "<define>"} that render
- `packages/runtime-tags/src/translator/util/references.ts:206` (buildCodeFrameError): Duplicate declaration of \{binding.originalName}\.
- `packages/runtime-tags/src/translator/util/references.ts:462` (buildCodeFrameError): Duplicate declaration of \{binding.name}\.
- `packages/runtime-tags/src/translator/util/references.ts:508` (buildCodeFrameError): \{binding.name}\ is a tag {binding.type === BindingType.param ? "parameter" : "variable"}
- `packages/runtime-tags/src/translator/util/references.ts:516` (buildCodeFrameError): \{binding.name}\ is a tag parameter and cannot be assigned to.
- `packages/runtime-tags/src/translator/util/references.ts:547` (buildCodeFrameError): \{binding.name}\ is a tag parameter and cannot be assigned to.
- `packages/runtime-tags/src/translator/util/references.ts:681` (buildError): "Only identifier and string literal keys are supported when destructuring."
- `packages/runtime-tags/src/translator/util/references.ts:841` (buildCodeFrameError): \{referencePath.node.name}\ is a rest element, a copy rebuilt from the value it is destruc
- `packages/runtime-tags/src/translator/util/statement-tag.ts:20` (buildError): msg
- `packages/runtime-tags/src/translator/util/style-interpolation.ts:22` (buildError): selector ? styleSelectorMsg : stylePropertyMsg
- `packages/runtime-tags/src/translator/util/style-interpolation.ts:36` (buildError): {styleInterpolationMsg} is not substituted inside a quoted CSS string — the literal text \
- `packages/runtime-tags/src/translator/util/style-interpolation.ts:39` (buildError): {styleInterpolationMsg} is not substituted inside an unquoted \url()\ — the raw url token
- `packages/runtime-tags/src/translator/util/style-interpolation.ts:48` (buildError): {styleInterpolationMsg} CSS does not re-tokenize, so text written directly before it (eg \
- `packages/runtime-tags/src/translator/util/style-interpolation.ts:52` (buildError): {styleInterpolationMsg} CSS does not re-tokenize, so a unit written directly after it (eg
- `packages/runtime-tags/src/translator/util/tag-import.ts:98` (buildCodeFrameError): Unknown trigger type "{match[1]}". Supported triggers are "visible", "idle", "media", and
- `packages/runtime-tags/src/translator/util/tag-import.ts:103` (buildCodeFrameError): 'The "render" trigger must be used alone.'
- `packages/runtime-tags/src/translator/util/tag-import.ts:109` (buildCodeFrameError): Selector is not supported for the "idle" trigger.
- `packages/runtime-tags/src/translator/util/tag-import.ts:114` (buildCodeFrameError): type === "media" ? A media query is required for the "media" trigger. (e.g. "media(max-wid
- `packages/runtime-tags/src/translator/util/tag-import.ts:130` (buildCodeFrameError): Unknown param "{key}" for the "visible" trigger. Supported params: "rootMargin".
- `packages/runtime-tags/src/translator/util/tag-import.ts:145` (buildCodeFrameError): Unknown param "{key}" for the "idle" trigger. Supported params: "timeout".
- `packages/runtime-tags/src/translator/util/tag-import.ts:157` (buildCodeFrameError): Params are not supported for the "{type}" trigger.
- `packages/runtime-tags/src/translator/util/tag-import.ts:166` (buildCodeFrameError): 'The "load" attribute requires "render" or at least one trigger (e.g. "visible.my-element"
- `packages/runtime-tags/src/translator/util/writer.ts:88` (buildCodeFrameError): "POTENTIAL MARKO BUG: Tried to mark a node that was not determined to need a mark during a
- `packages/runtime-tags/src/translator/visitors/cdata.ts:8` (buildCodeFrameError): "CDATA sections are not supported in Marko."
- `packages/runtime-tags/src/translator/visitors/declaration.ts:8` (buildCodeFrameError): "XML declarations sections are not supported in Marko."
- `packages/runtime-tags/src/translator/visitors/function.ts:25` (buildError): "Attribute methods containing await must be async. Add async before the method name."
- `packages/runtime-tags/src/translator/visitors/import-declaration.ts:67` (buildCodeFrameError): "Invalid load import."
- `packages/runtime-tags/src/translator/visitors/import-declaration.ts:72` (buildCodeFrameError): "Invalid load import, only a default specifier is allowed."
- `packages/runtime-tags/src/translator/visitors/import-declaration.ts:79` (buildCodeFrameError): "Invalid load import, a default specifier is required."
- `packages/runtime-tags/src/translator/visitors/import-declaration.ts:102` (buildCodeFrameError): \{local.name}\ is used above its \load\ import. Move the import above its first use.
- `packages/runtime-tags/src/translator/visitors/import-declaration.ts:111` (buildCodeFrameError): "Unable to resolve marko file for load import."
- `packages/runtime-tags/src/translator/visitors/program/dom.ts:276` (buildCodeFrameError): "Marko internal error: analysis found no setup work for a section whose translation produc
- `packages/runtime-tags/src/translator/visitors/program/index.ts:160` (buildCodeFrameError): 'The "entry" option requires the linkAssets compiler option to be configured.'
- `packages/runtime-tags/src/translator/visitors/program/index.ts:168` (buildCodeFrameError): Invalid runtimeId: "{runtimeId}". The runtimeId must start with a letter or underscore and
- `packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts:162` (buildError): The \<{nativeTagDef.name}>\ tag cannot have content, so it does not support a body.
- `packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts:222` (buildError): "Bound attribute refinement shorthand must be a valid JavaScript identifier."
- `packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts:271` (buildError): bindingIdentifierPath?.parentPath?.isArrayPattern() ? Cannot two-way bind to \{attr.value.
- `packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts:314` (buildError): "Unable to bind to value."
- `packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts:371` (buildError): "Attributes may only be bound to identifiers or member expressions"
- `packages/runtime-tags/src/translator/visitors/referenced-identifier.ts:54` (buildCodeFrameError): "Only out.global is supported for compatibility."
- `packages/runtime-tags/src/translator/visitors/scriptlet.ts:17` (buildCodeFrameError): "Scriptlets are not supported when using the tags api."
- `packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts:77` (buildCodeFrameError): "Unable to resolve file for tag."
- `packages/runtime-tags/src/translator/visitors/tag/index.ts:91` (buildCodeFrameError): Unsupported arguments on the \{attr.node.name}\ attribute.
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:322` (buildCodeFrameError): msg
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:332` (buildError): The \<{tagName}>\ tag cannot have content, so it does not support the \content\ attribute.
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:339` (buildError): The \<{tagName}>\ tag takes its content from its body as text, so it does not support the
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:359` (buildError): \valueChange\ cannot be used on a \type="{type}"\ \<input>\ — user interaction can never c
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:381` (buildError): Only text is allowed inside a \<{tagName}>\.
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:1500` (buildError): The \{name}\ attribute cannot be a function.
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:1508` (buildError): The \{name}\ attribute cannot be a plain object (it would render as \[object Object]\).
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:1615` (buildCodeFrameError): "The selected attribute is not supported on an <option> within a <select> that has a value
- `packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:1622` (buildCodeFrameError): "An <option> within a <select> that has a value attribute must also have a value attribute

## Re-running the audit

The audit had two halves: mechanical scans that produce leads, and twelve area
reviews that judged those leads and read every file for the judgment rules.
A scan hit is a lead, not a finding. Most `?.`, cast and spread hits were
dismissed in review.

### Mechanical scans

Run from the repo root. `scan.cjs` and `errscan.cjs` need TypeScript's JS API.
The repo's TypeScript 7 has none, so install 5.x somewhere and point `TS_PATH`
at it.

```bash
npm i --prefix /tmp/ts5 typescript@5
```

```bash
node comments.mjs packages/runtime-tags/src > comments.txt
```

```bash
TS_PATH=/tmp/ts5/node_modules/typescript node scan.cjs packages/runtime-tags/src scan-out
```

```bash
TS_PATH=/tmp/ts5/node_modules/typescript node errscan.cjs > errscan.txt
```

```bash
node regscan.mjs > regscan.txt
```

`scan.cjs` writes one file per check into `scan-out/`, named by check and area
(`dom`, `html`, `common`, `translator`, `test`):

- `A` error constructors with a message outside a `MARKO_DEBUG` guard (runtime). Helpers whose every caller is guarded show up here, so check the callers.
- `B` parameterless arrows (client runtime, and `B2` for server runtime, where the idiom does not apply).
- `C` top-level `const f = () =>`.
- `D` nested closures that capture nothing from an enclosing function.
- `E` optional chaining in runtime code.
- `F` `delete`.
- `G` spread and rest in runtime code, and object spread in the translator.
- `H` `splice`, `unshift`, `reverse`.
- `I` raw scheduling (`queueMicrotask`, `setTimeout`, `requestAnimationFrame`, observers).
- `J` `nodeType` equality checks and DOM node constants.
- `K` `as any`, `as never`, `as unknown`.
- `L` `Array.isArray` in client runtime.
- `M` string `replace`, `split`, `indexOf` in server runtime.
- `O` `MARKO_DEBUG` in the translator.
- `P` exported `Symbol` constants.
- `R` `new Promise` in runtime code.

`regscan.mjs` lists registrations in optimized `dom.bundle.js` snapshots that
nothing in their module references and whose id the optimized `writes.html`
never contains. Most are legitimate per-instance registrations; the interesting
ones are ids that no input could make the server emit.

#### `comments.mjs`

```js
// Comment blocks with more than two content lines. Usage: node comments.mjs packages/runtime-tags/src
import fs from "node:fs";
import path from "node:path";
const root = process.argv[2];
const out = [];
walk(root);
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (
        ent.name.startsWith("fixtures") ||
        ent.name === "__snapshots__" ||
        ent.name === "node_modules"
      )
        continue;
      walk(p);
    } else if (/\.(ts|js|mjs|mts|cjs)$/.test(ent.name)) scan(p);
  }
}
function scan(file) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    const trimmed = l.trim();
    if (trimmed.startsWith("//")) {
      let j = i;
      let content = 0;
      while (j < lines.length && lines[j].trim().startsWith("//")) {
        if (
          lines[j]
            .trim()
            .replace(/^\/\/+/, "")
            .trim()
        )
          content++;
        j++;
      }
      if (content > 2) out.push(`${file}:${i + 1} // x${content}`);
      i = j;
      continue;
    }
    const startIdx = l.indexOf("/*");
    if (startIdx !== -1 && !inString(l, startIdx)) {
      const endSame = l.indexOf("*/", startIdx + 2);
      if (endSame !== -1) {
        i++;
        continue;
      }
      let j = i;
      let content = 0;
      const first = l
        .slice(startIdx + 2)
        .replace(/^\*+/, "")
        .trim();
      if (first) content++;
      j++;
      while (j < lines.length && !lines[j].includes("*/")) {
        if (lines[j].trim().replace(/^\*+/, "").trim()) content++;
        j++;
      }
      if (j < lines.length) {
        const last = lines[j]
          .slice(0, lines[j].indexOf("*/"))
          .trim()
          .replace(/^\*+/, "")
          .trim();
        if (last) content++;
      }
      if (content > 2) out.push(`${file}:${i + 1} /* x${content}`);
      i = j + 1;
      continue;
    }
    i++;
  }
}
function inString(line, idx) {
  const before = line.slice(0, idx);
  const q = (before.match(/["'`]/g) || []).length;
  return q % 2 === 1;
}
console.log(out.join("\n"));
console.error(out.length + " blocks");
```

#### `scan.cjs`

```js
// AST leads for AGENTS.md rules. Usage: TS_PATH=<typescript 5/6> node scan.cjs packages/runtime-tags/src <outDir>
const ts = require(process.env.TS_PATH || "typescript");
const fs = require("fs");
const path = require("path");
const root = process.argv[2];
const files = [];
(function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (/^fixtures/.test(ent.name) || ent.name === "__snapshots__") continue;
      walk(p);
    } else if (/\.(ts|mts)$/.test(ent.name) && !/\.d\.ts$/.test(ent.name))
      files.push(p);
  }
})(root);
const program = ts.createProgram(files, {
  noResolve: true,
  allowJs: false,
  target: 99,
  module: 99,
  noLib: true,
  types: [],
});
const checker = program.getTypeChecker();
const rel = (f) => path.relative(root, f);
const results = {};
const add = (k, f, node, extra = "") => {
  const sf = node.getSourceFile();
  const { line } = sf.getLineAndCharacterOfPosition(node.getStart());
  const text = sf.text.split("\n")[line].trim().slice(0, 140);
  (results[k] ||= []).push(
    `${rel(f)}:${line + 1}: ${extra ? extra + " | " : ""}${text}`,
  );
};
const area = (f) => {
  const r = rel(f);
  if (r.startsWith("__tests__")) return "test";
  if (r.startsWith("translator")) return "translator";
  if (r.startsWith("dom") || r === "dom.ts") return "dom";
  if (r.startsWith("html") || r === "html.ts") return "html";
  if (r.startsWith("common")) return "common";
  return "other";
};
const isRuntime = (a) => a === "dom" || a === "html" || a === "common";
const isClient = (a) => a === "dom" || a === "common";
function containsDebug(node) {
  let found = false;
  (function v(n) {
    if (found) return;
    if (ts.isIdentifier(n) && n.text === "MARKO_DEBUG") found = true;
    else ts.forEachChild(n, v);
  })(node);
  return found;
}
function isNegatedDebug(node) {
  return (
    ts.isPrefixUnaryExpression(node) &&
    node.operator === ts.SyntaxKind.ExclamationToken &&
    containsDebug(node.operand)
  );
}
function debugGuarded(node) {
  let child = node;
  for (let p = node.parent; p; child = p, p = p.parent) {
    if (
      ts.isIfStatement(p) &&
      child === p.thenStatement &&
      containsDebug(p.expression) &&
      !isNegatedDebug(p.expression)
    )
      return true;
    if (
      ts.isIfStatement(p) &&
      child === p.elseStatement &&
      isNegatedDebug(p.expression)
    )
      return true;
    if (
      ts.isConditionalExpression(p) &&
      child === p.whenTrue &&
      containsDebug(p.condition) &&
      !isNegatedDebug(p.condition)
    )
      return true;
    if (
      ts.isBinaryExpression(p) &&
      p.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken &&
      child === p.right &&
      containsDebug(p.left)
    )
      return true;
  }
  return false;
}
function enclosingFunction(node) {
  for (let p = node.parent; p; p = p.parent) if (ts.isFunctionLike(p)) return p;
}
function isTypeNodeAncestor(node) {
  for (let p = node.parent; p; p = p.parent) {
    if (
      ts.isTypeNode(p) ||
      ts.isTypeAliasDeclaration(p) ||
      ts.isInterfaceDeclaration(p)
    )
      return true;
    if (ts.isExpressionWithTypeArguments && ts.isHeritageClause(p)) return true;
    if (ts.isStatement(p) || ts.isFunctionLike(p)) break;
  }
  return false;
}
// does closure fn capture any binding declared in an enclosing function (outside fn)?
function captures(fn) {
  let cap = false;
  const fnStart = fn.getStart(),
    fnEnd = fn.getEnd();
  (function v(n) {
    if (cap) return;
    if (
      n.kind === ts.SyntaxKind.ThisKeyword &&
      !ts.isFunctionDeclaration(fn) &&
      ts.isArrowFunction(fn)
    ) {
      cap = true;
      return;
    }
    if (ts.isIdentifier(n) && !isTypeNodeAncestor(n)) {
      if (n.text === "arguments" && ts.isArrowFunction(fn)) {
        cap = true;
        return;
      }
      // Property names are not references.
      const p = n.parent;
      if (
        (ts.isPropertyAccessExpression(p) && p.name === n) ||
        (ts.isPropertyAssignment(p) && p.name === n) ||
        (ts.isMethodDeclaration(p) && p.name === n) ||
        (ts.isPropertyDeclaration(p) && p.name === n) ||
        ts.isTypeReferenceNode(p)
      ) {
      } else {
        const sym = checker.getSymbolAtLocation(n);
        const decl = sym && sym.declarations && sym.declarations[0];
        if (decl) {
          const dsf = decl.getSourceFile();
          if (dsf === fn.getSourceFile()) {
            const ds = decl.getStart();
            const inside = ds >= fnStart && ds < fnEnd;
            if (!inside) {
              // declared outside fn: captured if within some function (not module level)
              let q = decl.parent;
              let inFn = false;
              for (; q; q = q.parent)
                if (ts.isFunctionLike(q)) {
                  inFn = true;
                  break;
                }
              if (ts.isParameter(decl)) inFn = true;
              if (inFn) {
                cap = true;
                return;
              }
            }
          }
        }
      }
    }
    ts.forEachChild(n, v);
  })(fn.body || fn);
  return cap;
}
for (const sf of program.getSourceFiles()) {
  const f = sf.fileName;
  if (!files.includes(f)) continue;
  const a = area(f);
  (function visit(node) {
    // A. errors with messages not under MARKO_DEBUG (runtime)
    if (
      isRuntime(a) &&
      (ts.isNewExpression(node) || ts.isCallExpression(node)) &&
      ts.isIdentifier(node.expression) &&
      /^(Error|TypeError|RangeError|SyntaxError|AggregateError)$/.test(
        node.expression.text,
      ) &&
      node.arguments &&
      node.arguments.length &&
      !debugGuarded(node)
    ) {
      add(
        "A_unguarded_error_message",
        f,
        node,
        enclosingFunction(node)?.name?.getText() || "",
      );
    }
    // B. parameterless arrows in client runtime
    if (isClient(a) && ts.isArrowFunction(node) && node.parameters.length === 0)
      add("B_parameterless_arrow_client", f, node);
    if (
      a === "html" &&
      ts.isArrowFunction(node) &&
      node.parameters.length === 0
    )
      add("B2_parameterless_arrow_html", f, node);
    // C. top-level const arrow / function expression
    if (ts.isVariableStatement(node) && node.parent === sf) {
      for (const d of node.declarationList.declarations) {
        if (
          d.initializer &&
          (ts.isArrowFunction(d.initializer) ||
            ts.isFunctionExpression(d.initializer))
        )
          add("C_toplevel_function_const_" + a, f, d);
      }
    }
    // D. non-capturing nested closures
    if (
      (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) &&
      enclosingFunction(node) &&
      !captures(node)
    )
      add("D_noncapturing_closure_" + a, f, node);
    // E. optional chaining in client runtime / all runtime
    if (isRuntime(a) && node.questionDotToken)
      add("E_optional_chain_" + a, f, node);
    // F. delete in runtime
    if (ts.isDeleteExpression(node)) add("F_delete_" + a, f, node);
    // G. spread / rest
    if (
      isRuntime(a) &&
      (ts.isSpreadElement(node) || ts.isSpreadAssignment(node))
    )
      add("G_spread_" + a, f, node);
    if (isRuntime(a) && ts.isParameter(node) && node.dotDotDotToken)
      add("G_rest_param_" + a, f, node);
    if (isRuntime(a) && ts.isBindingElement(node) && node.dotDotDotToken)
      add("G_rest_binding_" + a, f, node);
    if (a === "translator" && ts.isSpreadAssignment(node))
      add("G_object_spread_translator", f, node);
    // H. splice/unshift/reverse
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      /^(splice|unshift|reverse|toReversed)$/.test(node.expression.name.text)
    )
      add("H_splice_unshift_reverse_" + a, f, node);
    // I. raw scheduling in runtime
    if (
      isRuntime(a) &&
      ts.isIdentifier(node) &&
      /^(queueMicrotask|setTimeout|setInterval|requestAnimationFrame|requestIdleCallback|MutationObserver|IntersectionObserver|ResizeObserver|setImmediate)$/.test(
        node.text,
      )
    )
      add("I_raw_scheduling_" + a, f, node);
    // J. nodeType comparisons
    if (
      ts.isBinaryExpression(node) &&
      /nodeType/.test(node.getText()) &&
      [
        ts.SyntaxKind.EqualsEqualsEqualsToken,
        ts.SyntaxKind.ExclamationEqualsEqualsToken,
        ts.SyntaxKind.EqualsEqualsToken,
        ts.SyntaxKind.ExclamationEqualsToken,
      ].includes(node.operatorToken.kind) &&
      (/nodeType$/.test(node.left.getText()) ||
        /nodeType$/.test(node.right.getText()))
    )
      add("J_nodeType_equality_" + a, f, node);
    if (ts.isPropertyAccessExpression(node) && /_NODE$/.test(node.name.text))
      add("J_dom_node_constant_" + a, f, node);
    // K. casts
    if (ts.isAsExpression(node) || ts.isTypeAssertionExpression(node)) {
      const tt = node.type.getText();
      if (tt === "any") add("K_as_any_" + a, f, node);
      else if (tt === "never") add("K_as_never_" + a, f, node);
      else if (tt === "unknown") add("K_as_unknown_" + a, f, node);
    }
    // L. Array.isArray in client runtime
    if (
      isClient(a) &&
      ts.isPropertyAccessExpression(node) &&
      node.getText() === "Array.isArray"
    )
      add("L_array_isarray_client", f, node);
    // M. string replace/split/indexOf in html runtime
    if (
      a === "html" &&
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      /^(replace|replaceAll|split|indexOf|lastIndexOf)$/.test(
        node.expression.name.text,
      )
    )
      add("M_string_ops_html", f, node);
    // O. MARKO_DEBUG in translator
    if (
      a === "translator" &&
      ts.isIdentifier(node) &&
      node.text === "MARKO_DEBUG"
    )
      add("O_marko_debug_translator", f, node);
    // P. exported Symbol
    if (
      ts.isVariableStatement(node) &&
      node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      for (const d of node.declarationList.declarations)
        if (d.initializer && /^Symbol\(/.test(d.initializer.getText()))
          add("P_exported_symbol_" + a, f, d);
    }
    // R. Promise creation in runtime
    if (
      isRuntime(a) &&
      ts.isNewExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "Promise"
    )
      add("R_new_promise_" + a, f, node);
    ts.forEachChild(node, visit);
  })(sf);
}
const outDir = process.argv[3];
fs.mkdirSync(outDir, { recursive: true });
for (const [k, v] of Object.entries(results).sort()) {
  fs.writeFileSync(path.join(outDir, k + ".txt"), v.join("\n") + "\n");
  console.log(k.padEnd(45), v.length);
}
```

#### `errscan.cjs`

```js
// Translator compile errors without a markojs.com docs link. Usage: TS_PATH=<typescript 5/6> node errscan.cjs [translatorDir]
const ts = require(process.env.TS_PATH || "typescript");
const fs = require("fs"),
  path = require("path");
const root = process.argv[2] || "packages/runtime-tags/src/translator";
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".ts")) files.push(p);
  }
})(root);
const constMsgs = new Map();
const rows = [];
for (const f of files) {
  const sf = ts.createSourceFile(f, fs.readFileSync(f, "utf8"), 99, true);
  // collect module-level string consts (messages declared once)
  sf.forEachChild((n) => {
    if (ts.isVariableStatement(n))
      for (const d of n.declarationList.declarations)
        if (
          d.initializer &&
          (ts.isStringLiteral(d.initializer) ||
            ts.isNoSubstitutionTemplateLiteral(d.initializer) ||
            ts.isTemplateExpression(d.initializer) ||
            ts.isBinaryExpression(d.initializer))
        )
          constMsgs.set(d.name.getText(), d.initializer.getText());
  });
  (function v(n) {
    if (
      ts.isCallExpression(n) &&
      ts.isPropertyAccessExpression(n.expression) &&
      /^(buildCodeFrameError|buildError)$/.test(n.expression.name.text)
    ) {
      const argIdx = n.expression.name.text === "buildError" ? 1 : 0;
      const arg = n.arguments[argIdx];
      let text = arg ? arg.getText() : "";
      if (arg && ts.isIdentifier(arg) && constMsgs.has(text))
        text = constMsgs.get(text);
      const { line } = sf.getLineAndCharacterOfPosition(n.getStart());
      rows.push({
        f: path.relative(root, f),
        line: line + 1,
        api: n.expression.name.text,
        link: /markojs\.com/.test(text),
        literal: !!arg && !ts.isIdentifier(arg),
        text: text.replace(/\s+/g, " ").slice(0, 110),
      });
    }
    ts.forEachChild(n, v);
  })(sf);
}
const noLink = rows.filter((r) => !r.link);
console.log(
  `total compile-error sites: ${rows.length}; with docs link: ${rows.length - noLink.length}; without: ${noLink.length}`,
);
const byApi = {};
for (const r of rows) byApi[r.api] = (byApi[r.api] || 0) + 1;
console.log(byApi);
console.log(
  noLink
    .filter((r) => !/coreTagLink|DocsURL|Link\(/.test(r.text))
    .map((r) => `${r.f}:${r.line} [${r.api}] ${r.text}`)
    .join("\n"),
);
```

#### `regscan.mjs`

```js
// Registrations in optimized dom bundle snapshots whose binding nothing references
// and whose id the optimized SSR writes never emit. Usage: node regscan.mjs [testsDir]
import fs from "node:fs";
import path from "node:path";
const base = process.argv[2] || "packages/runtime-tags/src/__tests__";
const out = [];
let total = 0,
  unref = 0;
for (const fam of ["fixtures", "fixtures-interop"]) {
  const famDir = path.join(base, fam);
  if (!fs.existsSync(famDir)) continue;
  for (const name of fs.readdirSync(famDir)) {
    const snap = path.join(famDir, name, "__snapshots__");
    const domFile = path.join(snap, "dom.bundle.js");
    const writesFile = path.join(snap, "writes.html");
    if (!fs.existsSync(domFile) || !fs.existsSync(writesFile)) continue;
    const dom = fs.readFileSync(domFile, "utf8");
    const writes = fs.readFileSync(writesFile, "utf8");
    const sections = dom.split(/\n(?=\/\/ \S+\n)/);
    for (const sec of sections) {
      const re =
        /^(?:const|let|var) (\$?[\w$]+) = (?:\/\*@__PURE__\*\/ )?(_script|_var_resume|_hoist_resume|_el|_content)\("([^"]+)"/gm;
      let m;
      while ((m = re.exec(sec))) {
        total++;
        const [, binding, helper, id] = m;
        const refs = sec.match(
          new RegExp(
            "(?<![\\w$])" + binding.replace(/\$/g, "\\$") + "(?![\\w$])",
            "g",
          ),
        ).length;
        if (refs > 1) continue;
        unref++;
        const idInWrites = new RegExp(
          "(?<![\\w$])" + id.replace(/\$/g, "\\$") + "(?![\\w$])",
        ).test(writes);
        if (!idInWrites)
          out.push(`${fam}/${name}: ${helper}("${id}") as ${binding}`);
      }
    }
  }
}
console.log(
  `registrations matched: ${total}; unreferenced bindings: ${unref}; unreferenced and id absent from writes.html: ${out.length}`,
);
console.log(out.join("\n"));
```

### Area reviews

The reviews split `packages/runtime-tags/src` into twelve areas of about 2,500
to 5,000 lines each. Each reviewer got the brief below, its file list, and a
focus list naming the judgment rules that matter most for that area.

| Area       | Files                                                                                                                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DOM core   | `common/**`, `dom.ts`, `dom/{signals,queue,scope,renderer,template,walker,schedule,event,abort-signal,parse-html,resolve-cursor-position}.ts`                                                                               |
| DOM flow   | `dom/{control-flow,resume,load,dom,controllable,compat}.ts`, `dom/*.feat.ts`                                                                                                                                                |
| Serializer | `html/{serializer,attrs,content}.ts`                                                                                                                                                                                        |
| Writer     | `html/{writer,template,control-flow,dynamic-tag,compat,assets,for,inlined-runtimes,inlined-runtimes.debug}.ts`, `html/constants/*`, `html.ts`                                                                               |
| Analysis   | `translator/util/{references,finalize-references,bindings,sources,optional,sections}.ts`                                                                                                                                    |
| Signals    | `translator/util/{signals,solve-reasons,reasons,slots,write-guard,cyclic-memo,state,scope-read,scope-accessor,setup-work,get-accessor-enums}.ts`, `translator/util/constants/*`                                             |
| Known tags | `translator/util/{known-tag,module-registrations,entry-builder,runtime,runtime-info,tag-import,params-tree,content-derives,section-renderer,get-root,asset-imports,module-read,get-style-file}.ts`, `translator/interop/**` |
| Util       | the rest of `translator/util/`                                                                                                                                                                                              |
| Native tag | `translator/visitors/tag/{native-tag,index,attribute-tag}.ts`, `translator/visitors/tag/constants/*`                                                                                                                        |
| Visitors   | the rest of `translator/visitors/`                                                                                                                                                                                          |
| Core tags  | `translator/core/**`, `translator/index.ts`                                                                                                                                                                                 |
| Tests      | `__tests__/*.ts`, `__tests__/utils/**`, and fixture-level checks over `fixtures*/`                                                                                                                                          |

### Reviewer brief

You are one of several reviewers auditing `packages/runtime-tags` (the Marko 6
runtime plus its Babel translator) in a checkout of this repo. The
maintainers recently rewrote the repo's engineering guidance and expect older
code to still carry patterns the guidance now forbids. Your job: find those
deviations **in your assigned area only** and report them. Other reviewers
cover the rest of the package, so stay inside your file list (you may read
other files to trace producers/consumers).

This is a read-only audit. Do not edit, create, or delete tracked files. Do not
run `pnpm test`, `pnpm run test:update`, `pnpm run build`, `pnpm run format`, or
any git command that changes state. Dependencies are installed.

#### Step 1: read the rulebook in full

These documents are the only standard. Every finding cites one of them.

- `AGENTS.md`: root conventions (top-down file organization;
  comments are a last resort, at most two lines, capture intent, never what code
  was; one system per question; fix causes; every line needs a reason, so no
  guards, `?.`, fallbacks, casts or parameters for states the design rules out;
  don't bend code around edge cases; direct form; no rest/spread to copy,
  extend, or strip an object; no forwarding functions; no type named for a
  single use; a helper every caller guards takes the `undefined` itself;
  `flag ||= condition`; no Babel `NodePath` helper calls; names from code and
  CONTEXT.md, `_Avoid_` terms; comments must be true; testing bar).
- `packages/runtime-tags/AGENTS.md`: architecture principles,
  translator phase contract and rules, runtime conventions (`MARKO_DEBUG`,
  `.debug.ts` pairs, `.feat.ts` feature enablement, size idioms, weighing bytes,
  hot paths, effects carry no order, wire bytes, existing mechanisms, function
  declarations vs arrows), testing and fixture rules.
- `packages/runtime-tags/CONTEXT.md`: the glossary. Identifiers
  and comments must use its terms; each entry's `_Avoid_` list names forbidden
  synonyms (it exempts exact APIs, platform types and legacy options, e.g.
  `DocumentFragment` or the `hydrate` output option).
- `packages/runtime-tags/RESUMABILITY.md`: architecture; read
  the sections relevant to your files.

#### Step 2: read every file in your area, top to bottom

For each construct ask which rule it violates, if any. The judgment rules matter
most, because grep cannot find them: "one system per question", "every line
needs a reason", "one fact per field", "analyze facts settle once", "a template
decides only what it knows", "code ships because code that ships references it",
"every emitted token is used", "effects carry no order", "debug differs from
production only in names, validation and messages", hot-path rules, size idioms,
top-down organization, naming against CONTEXT.md.

#### Step 3: judge the precomputed mechanical hits for your files

AST/grep hits for the whole package are in
`scan-out/*.txt` (from `scan.cjs`)
(one file per check; paths relative to `packages/runtime-tags/src`):
`C_toplevel_function_const_*` (top-level `const f = () =>`), `D_noncapturing_closure_*`
(nested closures that capture nothing from an enclosing function),
`E_optional_chain_*`, `F_delete_*`, `G_spread_*`/`G_rest_*`/`G_object_spread_translator`,
`H_splice_unshift_reverse_*`, `I_raw_scheduling_*`, `J_nodeType_*`, `K_as_any_*`/`K_as_never_*`/`K_as_unknown_*`,
`L_array_isarray_client`, `M_string_ops_html`, `P_exported_symbol_*`, `R_new_promise_*`.
Over-long comment blocks (more than two content lines) are listed in
`comments.txt` (from `comments.mjs`). Grep these for your files
and judge each hit in context. Report only real deviations; dismiss a
recognizable group of fine hits in one line (e.g. "the `?.` in X are on
genuinely optional input"). A scanner hit is a lead, not a finding.

As of `9c3ad572`, already verified and not to re-report: the `common/errors.ts` assert helpers build
messages but every caller is under `MARKO_DEBUG`; the serializer's
`throwUnserializable`/`abortUnreachableChannel` run only under `MARKO_DEBUG`;
there are no parameterless `() =>` arrows in `dom/` or `common/`.

#### Step 4: check what is already filed

`agent-feedback/items/*.md` holds known issues. Grep it for each
finding's file or symbol. Still report a filed finding, but name the item.

#### Verifying claims

Prefer confirmed findings. Trace a field or helper to its producers and
consumers before calling it redundant. Read-only probes are fine:
`pnpm run compile -- -o dom|html [-d] <file.marko>`
prints compiled output (omit `-d` for the optimized build). Put probe files
under `.audit-probes/<your-area>/` and delete that directory
when done. About 1,500 fixtures carry generated snapshots in
`packages/runtime-tags/src/__tests__/fixtures/*/__snapshots__/` (`dom.bundle.js`
and `html.bundle.js` are optimized; `*.debug.js` are debug); grep them to see
what generated code looks like across the suite.

#### Report format

Return markdown only. Group findings by rule family, most severe first. Each:

```
### <short title>
- Where: `packages/runtime-tags/src/...` › `symbol` (line N)
- Rule: <rule, quoted or closely paraphrased, and which doc>
- Evidence: <exact code quote, at most 8 lines, fenced>
- Why: <1-3 sentences>
- Fix: <the concrete change; what it removes or saves>
- Severity: high | med | low
- Confidence: confirmed | likely | uncertain
- Filed: <agent-feedback item filename> | no
```

Severity: high = behavior, architecture, a phase-contract break, or bytes paid
per template/instance; med = a clear rule break with local cost; low = style,
naming, comments, organization.

End with a "Patterns" section: recurring deviations with counts and file lists,
so mechanical classes (e.g. 14 over-long comments) need not be itemized one by
one. Stay within about 3,000 words; past that, keep the strongest findings in
full and list the rest as one-liners. Report only guidance deviations (a real
bug you happen to notice goes under a final "Other" heading).
