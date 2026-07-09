# runtime-tags TODO review and action plan

Reviewed 2026-07-09. Every `TODO` in `packages/runtime-tags` (47 comments across 29 files) is inventoried below and assigned to a track based on what should happen next. Verification notes come from compile probes against this revision (`npm run compile`), a targeted test run, and upstream issue checks; claims that were not directly verified are marked as suspected.

Tracks:

- **A — Correctness**: verified or strongly suspected wrong output. Fix (or build the repro that confirms/denies) first.
- **B — Blocked**: waiting on an upstream fix or an internal feature that does not exist yet. Cheap to re-check, not actionable today.
- **C — Likely stale**: probes suggest the limitation no longer exists. Lock in behavior with a fixture, then delete the comment.
- **D — Perf / output size**: real opportunities, several already analyzed in depth in [`agent-feedback/perf.md`](../../agent-feedback/perf.md). Schedule behind measurement.
- **E — Internal quality / DX**: renames, type honesty, debug-mode validation, test-harness strictness. Low risk; can land as one batch.

## Track A — Correctness (10 TODOs, highest priority)

### A1. Computed keys in destructuring patterns produce wrong output or throw poorly — resolved 2026-07-09

**Verified bug, now fixed.** `createBindingsAndTrackReferences` classified object-pattern keys with `prop.key.type === "Identifier"` without checking `prop.computed`:

- `<child/{ [KEY]: count }/>` was silently treated as the literal property `KEY`. HTML output destructured `[KEY]` correctly, but DOM/resume output read `$pattern.KEY`, so server and client disagreed on the value with no diagnostic.
- `<child/{ ["cou" + "nt"]: count }/>` hit a raw `throw new Error(...)` with no code frame or template location.

**Resolution:** computed keys (and other unsupported key kinds) are now rejected with a code-frame error ("Only identifier and string literal keys are supported when destructuring."); statically-known string literal keys keep working. Locked in by the `error-destructure-computed-key` and `error-destructure-computed-key-expression` fixtures. Full computed-key support remains a separate feature decision (the property name is not statically known to the per-property alias machinery). Accepting statically-known numeric literal keys is recorded as a follow-up in `agent-feedback/cleanup.md`.

### A2. Content signal may be missing the reference group of its param defaults — resolved 2026-07-09 (real bug, but a different one; fixed via desugaring)

The repro spike surfaced the actual defect behind the suspicion: top-level assignment-pattern params (`<child|a, b = x|>`) never got a binding at all — `createBindingsAndTrackReferences` has no `AssignmentPattern` case — so DOM output referenced an unbound identifier (CSR crash) and never re-applied the default (stale after resume). HTML output was fine. Fix: desugar top-level param defaults in `pre-analyze` into body `const` tags (the same rewrite already used for defaults nested in destructures), which places the default's references in the body section where closure signals handle them. A follow-up in `writeParamsToSignals` makes the inlined known/define path match the runtime params applier: the attrs object is only written into the param slot after the args when the generic branch would append one, and remaining declared params are applied as `undefined` so joined signals settle during initial render. Both TODO comments removed; `undefined` at the content site is correct and now documented. Covered by the `param-top-level-default` fixture (known child + inlined define, defaults reading parent state, explicit falsy arg beating the default).

### A3. Shared property aliases ignore destructure defaults — `src/translator/util/references.ts:250`

When two destructures alias the same property, the first binding becomes the canonical `propertyAliases` entry and later destructures attach to it (`references.ts:244-251`). The TODO notes that if a default value is involved, an intermediate binding is needed. A single destructure with a default compiles correctly today (verified: `<child/{ missing = 5 }/>` produces a wrapping signal applying `void 0 !== $missing ? $missing : 5`), so the exposure is the _shared_ case: the same property destructured in two places where only one has a default, or with different defaults. **Unverified.**

**Action:** repro fixture with two consumers of one property, one using `{ x = 1 }` and one `{ x }` (and a variant with two different defaults); verify which default (if any) each reference observes in DOM and HTML output. Fix direction per the TODO: create an intermediate binding when a default participates in an aliased property. _Effort: med._

### A4. Hoisted references can hit an internal throw — `src/translator/util/scope-read.ts:21`

`getScopeExpression` throws a plain `Error("Unable to find scope for reference.")` when a reference resolves to a section shallower than the binding, with a TODO to handle hoisted references. No error fixture in the suite covers this message, so when it fires users get an uncaught compiler exception instead of a code-frame error.

**Action:** find the template shape that reaches it (hoisted reads across section boundaries, e.g. referencing a tag variable before its tag from a nested body). If reachable, either implement the hoisted-scope walk or emit a `buildCodeFrameError` explaining the unsupported shape; add an `error-` fixture either way. _Effort: med (repro hunt is the work)._

### A5. HTML read-replacement may bind to the wrong binding — `src/translator/visitors/program/html.ts:217`

The identifier case of the HTML serialize-arguments replacer only replaces reads for declared bindings, with the author noting "this is probably wrong and should walk up to the closest declared binding." Potential wrong serialization for aliased/undeclared bindings in HTML output. **Unverified.**

**Action:** targeted exploration: destructured aliases whose canonical binding is undeclared, referenced from serialized expressions. Compare against the equivalent logic used in call-expression handling just below (`html.ts:222+`). Turn findings into either a fix plus fixture or a comment explaining why the current check is sufficient. _Effort: med._

### A6. Interop params-from-args is broken under SSR — `src/__tests__/fixtures-interop/custom-tag-parameters-from-args/test.ts:8`

The fixture (`<custom-tag|count, count2|>` rendering a class-API child) sets `skip_html: true, // TODO: it is broken`, so the whole SSR + resume side of tag parameters passed from class-API args is untested and known broken. Verified that un-skipping currently fails at snapshot generation (no HTML snapshots exist), which masks the underlying runtime failure.

**Action:** run the fixture with `npm run test:update` scoped to it to materialize the HTML snapshots, then diagnose the actual runtime failure (likely in the interop dynamic-tag args path, `src/html/dynamic-tag.ts` / `src/translator/interop/`). Track as its own issue; this is user-visible for migration apps. _Effort: med-high._

### A7. Tag variable not wired for string-renderer dynamic tags in SSR — `src/html/dynamic-tag.ts:147`

In `_dynamic_tag`'s native-tag-by-string branch (`<${"input"}/el>`), the TODO notes the result should be set to the element getter and never is, so the tag variable a parent destructures/uses stays `undefined` on the server, while the DOM runtime provides one. **Unverified at runtime** (probe confirmed only the compile side).

**Action:** fixture with `<${dynamicName}/el>` where `el` is used in an effect after resume; verify the mismatch; wire the same element-getter object native tags produce (see `_el_resume` handling) into `result` for that branch. _Effort: low-med._

### A8. Interop render drops streaming context between chunks — `src/html/compat.ts:115`

The tags-under-class compat `render()` creates its head `Chunk` with `context: null` where the TODO says it "should grab the context from the previous chunk". Anything carried on chunk context across the class/tags boundary is silently reset per interop render. **Unverified**, needs a failing scenario to gauge blast radius.

**Action:** identify what flows through `Chunk.context` today (see `src/html/writer.ts`) and construct an interop template where losing it is observable; then thread the calling chunk through `render(...)`'s signature (the class runtime side owns the call). _Effort: med._

### A9. FormData serialization silently drops File/Blob entries — `src/html/serializer.ts:1263`

The serializer only writes string entries of a `FormData` value; `File`/`Blob` entries are skipped without warning, so resumed state silently loses data.

**Action:** decide policy: either support binary entries (size cost in the serializer for a rare case) or emit a `MARKO_DEBUG` warning when a non-string entry is dropped. A debug-only warning is likely the right cost/benefit; document the limitation. _Effort: low (warn) / high (support)._

## Track B — Blocked on upstream or future features (8 TODOs)

| TODO                                                                                                                        | Blocked on                                                                                                                   | Status (checked 2026-07-09)                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `src/dom/walker.ts:33`, `src/dom/scope.ts:88`, `src/common/helpers.ts:80` — const-with-name instead of function declaration | [oxc-project/oxc#17364](https://github.com/oxc-project/oxc/issues/17364) (rolldown minifier: unused circular function calls) | **Open** (Minifier Beta milestone). Revert to function declarations when fixed; the three sites are grep-able by the issue URL. |
| `src/__tests__/utils/track-mutations.ts:296` — filter bogus jsdom mutation records                                          | [jsdom/jsdom#3261](https://github.com/jsdom/jsdom/issues/3261)                                                               | **Open.** Keep the workaround.                                                                                                  |
| `src/html/writer.ts:1203` — `@placeholder` with async content aborts; "eventually this should be allowed"                   | Design decision + disposal work ("check if placeholder needs to be disposed once body complete")                             | Current behavior is a clear error, so no user harm. Revisit when async placeholders are prioritized.                            |
| `src/translator/util/known-tag.ts:640`, `known-tag.ts:644` — "update when supporting default params"                        | Default-parameter support for known-tag content                                                                              | Feature does not exist yet; comments are correct as markers.                                                                    |
| `src/translator/util/known-tag.ts:1308` — "use spreadBinding property alias after we optimize `in`"                         | The planned `in`-operator optimization                                                                                       | Marker for a follow-up optimization; leave until that lands.                                                                    |

**Action:** none now beyond periodic re-checks of the two upstream issues (both re-verified open today). When oxc#17364 closes, converting the three helpers back is a 10-minute PR with a bundle-size diff to confirm.

## Track C — Likely stale: verify with fixtures, then delete (6 TODOs)

### C1. Destructured tag variables work — resolved 2026-07-09

Four TODOs claim `node.var` handling needs destructuring support / "is not always an identifier". Compile probes show destructured tag variables on custom **and** dynamic tags already work end to end:

- static: `<child/{ a, b }/>` → correct HTML and DOM output;
- stateful + serialized: pattern binding registers via `_var_resume(".../$pattern/var", ...)` and fans out to per-property signals;
- assignment through a destructured piece (`count++`) routes through the `countChange` change-handler protocol;
- defaults (`{ missing = 5 }`) compile to a guarded signal wrapper.

The `(node.var as t.Identifier).extra?.binding` casts at `known-tag.ts:232` / `dynamic-tag.ts:475` work because pattern nodes also receive `extra.binding` (the synthetic pattern binding from `createBindingsAndTrackReferences`). The `mutatesTagVar` identifier-only check at `known-tag.ts:150` is correct as-is: patterns cannot be directly assigned, and alias assignments use the change protocol.

**Resolution:** the `custom-tag-var-destructured` and `dynamic-tag-var-destructured` fixtures now lock the behavior in across SSR, resume, and CSR (reactive destructured reads, `inc()` method calls into child state, assignment through an alias via `countChange`, and a destructure default). The `as t.Identifier` casts were replaced with direct `extra?.binding` access and all four TODOs (`known-tag.ts:232`/`354`, `dynamic-tag.ts:475`/`500`) were deleted.

### C2. Nested state writes appear to compile correctly — resolved 2026-07-09 (fixture now uses `[...items, ++id]`; behavior snapshots unchanged)

The fixture comment says `items = [...items, id++]` "doesn't work" and hand-expands it. A probe now compiles that expression to `$items($scope, [...$scope.items, $id($scope, $scope.id + 1) - 1])`, which is shape-correct (assumes the signal setter returns the set value — verify at runtime).

**Action:** add a fixture step (or a new fixture) exercising the nested write through click + resume; if green, restore the natural expression in `basic-push-pop-list` and drop the comment. If red, promote to Track A. _Effort: low._

### C3. Possibly dead placeholder bookkeeping — `src/dom/control-flow.ts:183`

`placeholderShown.add(pendingEffects); // TODO: check if still needed` in the `<await>` resolve path. Self-contained experiment: remove the line, run the full suite (`npm run test:parallel`), and inspect await/placeholder fixtures specifically. Keep with an explanatory comment or delete. _Effort: low; bundle-size win if removable._

## Track D — Perf and output size (14 TODOs)

Five of these already have verified deep-dive entries in [`agent-feedback/perf.md`](../../agent-feedback/perf.md) — use those as the spec and do not re-analyze:

| TODO                                                                                              | Existing analysis                                                       | Verdict there                                                                                         |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `src/html/writer.ts:595` (ConditionalRenderer only when stateful/closed-over)                     | "Serialize ConditionalRenderer only when..."                            | Narrower than it reads; extra `_if` arg likely costs more than it saves. Probably close as won't-fix. |
| `src/translator/core/return.ts:77` (gate `valueChange` serialization on parent mutation)          | "Gate `<return valueChange>` serialization..."                          | Needs cross-template reason flow; impact low, effort high.                                            |
| `src/translator/visitors/function.ts:108` (avoid registering change handlers on native tags)      | "Avoid resume-registering native tag change handlers"                   | Registration is load-bearing for controllables; needs a redesign, impact med, effort high.            |
| `src/translator/util/tag-name-type.ts:187` (specialize always-string / never-string dynamic tags) | "Specialize dynamic tags statically known to be renderers"              | Impact med, effort med. Best ROI of the analyzed set.                                                 |
| `src/translator/core/html-comment.ts:107` (reuse comment node as marker when body is empty)       | Part of "Extend marker-elision optimizations to await/try/html-comment" | Impact low, effort med.                                                                               |

Remaining size/perf TODOs, roughly ordered by expected ROI:

1. **`src/translator/visitors/program/index.ts:77`** — emit `undefined` for noop/empty DOM exports (`walks`/`setup`/`params`). Output-size win multiplied across every compiled template; measure with `npm run build:sizes`.
2. **`src/translator/core/if.ts:90`** — drop all branches when none have body content (e.g. `<if>` used purely for side-effect-free conditions). Small but broad.
3. **`src/translator/util/references.ts:1122`** — short-circuit pairwise intersection serialization when references are known-serialized. Compile-time cost and wire-size; note the adjacent `Sorted.isSuperset` entry in `agent-feedback/bugs.md` before touching this area (the current over-serialization is load-bearing).
4. **`src/html/dynamic-tag.ts:34`** — merge `dynamicTagInput`/`dynamicTagArgs` into one implementation with a flag. HTML-runtime size; pairs naturally with A7 since it touches the same file.
5. **`src/html/writer.ts:209`** — reuse an already-registered return value instead of re-registering (`_var` path); already cross-referenced in the perf.md ConditionalRenderer entry.
6. **`src/translator/core/define.ts:62`** — destructured `<define>` variables skip the inline-body optimization entirely (verified: only the `t.isIdentifier` path inlines). Extending the direct-reference analysis to pattern properties inlines more `<define>` bodies.
7. **`src/dom/dom.ts:63`, `dom.ts:155`, `dom.ts:163`** — benchmark whether read-before-write (`getAttribute`/`data`/`textContent` comparison) is actually faster than unconditional writes. One micro-benchmark answers all three; the check also suppresses redundant mutation records, so measure both paths before removing.

**Action:** treat 1-2 as a single "shrink empty output" PR with `build:sizes` evidence; 3 only after the `isSuperset` bug entry is resolved; 4-5 alongside A7; 6 opportunistic; 7 as a benchmark task whose outcome is either deleting the TODOs (keep checks) or simplifying the helpers.

## Track E — Internal quality, DX, tests (9 TODOs)

These can land as one batch with no user-visible behavior change (except the two decisions flagged):

- `src/translator/util/binding-prop-tree.ts:12` — rename `props` to `known` per the TODO (mechanical, coordinated with its consumers).
- `src/translator/util/signals.ts:1155` — `addEffectReferences` pushes `undefined as any` as a statement; give effect-only entries a proper representation so downstream code doesn't rely on a lie.
- `src/translator/util/known-tag.ts:313` — "make this better": `getArgs` rebuilds arg arrays awkwardly; refactor when touching known-tag for A2.
- `src/translator/util/references.ts:243` — prefer declared properties as alias roots when merging property aliases; affects generated-name quality and which binding "wins" as canonical.
- `src/translator/util/references.ts:1263` — `finalizeParamSerializeReasonGroups` is re-run to handle circular known tags; find an ordering that doesn't need the duplicate pass.
- `src/__tests__/utils/track-mutations.ts:28` — mutations arriving after a test settles are logged instead of failing; make them throw so async leaks fail loudly. Expect to fix a few leaky fixtures when flipping this.
- `tags-html.d.ts:1499` — split the `Link` attribute interface by `rel` for better completions (`as`/`imagesrcset` etc. only apply to some `rel` values). Types-only.
- `src/html/assets.ts:142` — error (in `MARKO_DEBUG`) when the same asset id is registered with different triggers instead of silently keeping the first.
- `src/__tests__/fixtures/cleanup-single-child-for-deep/tags/child.marko:4` — **decision needed**: SSR resume runs effects depth-first, CSR queues breadth-first, so effect ordering differs and the fixture's `write` assertion is commented out. Decide whether cross-environment effect ordering is guaranteed; document the answer (and either restore the assertion or codify the non-guarantee in docs).

## Suggested sequencing

1. **Now (small, high value):** ~~A1 diagnostic fix~~ (done 2026-07-09), ~~C1 fixtures + cast cleanup~~ (done 2026-07-09), ~~C2 fixture~~ (done 2026-07-09). Deletes 6 TODOs and closes a silent wrong-output hole.
2. **Next:** repro fixtures for ~~A2~~ (done 2026-07-09 — real bug found and fixed), A3, A4, A5 — each is a half-day spike that converts a suspicion into either a scoped bug issue or a deleted TODO. File issues for whatever is confirmed.
3. **Then:** A6 (re-enable interop SSR) and A7+D4 (dynamic-tag SSR var + dedupe) as independent PRs; A8, A9 policy decisions alongside.
4. **Ongoing:** D1-D2 as one sizes PR; C3 experiment; E batch PR; re-check oxc#17364 / jsdom#3261 monthly (Track B).
5. **Explicitly lowered in priority:** writer.ts:595 (recommend closing as won't-fix per the perf.md analysis), return.ts:77 and function.ts:108 (need protocol/design work; keep as TODOs until scheduled).
