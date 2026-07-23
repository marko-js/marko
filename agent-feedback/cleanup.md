# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Compat re-render writes scope nodes onto a DOM node instead of the branch scope

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js` › `renderAndMorph` | 2026-07-13 | impact:low | effort:low

In `renderAndMorph`, after `host = rootNode.startNode`, the call
`domCompat.setScopeNodes(host, rootNode.startNode, rootNode.endNode)` writes
`#StartNode`/`#EndNode` onto the fragment's DOM marker node (a self-assign plus
an unused end ref) rather than onto the tags branch **scope** — the argument was
almost certainly meant to be `scope`. Consequence: the `host.fragment` fast-path
at line 158 can never fire for a resumed child, so every re-render falls through
to the `___componentLookup` / `___marko5Component.___rootNode` lookup. Correctness
is unaffected (later renders reuse `___marko5Component.___rootNode`), so this is a
dead optimization + a confusing stale-node invariant; verify destroy/move
semantics before changing to `scope`.

---

## Pre-existing comments exceeding the two-line rule

`packages/compiler/src/config.js`, `packages/runtime-tags/src/**` | 2026-07-18 | impact:low | effort:med

A sweep for the two-line comment rule surfaced roughly ninety comment blocks
longer than two lines (config option JSDoc in `compiler/src/config.js`,
several `translator/util/references.ts` and `dom/resume.ts` blocks, and
commented-out `serializer.test.ts` cases). Condensing them is a standalone
cleanup. Verify: grep for comment runs of three or more consecutive `//`
lines under the cited paths.

## Normalize inconsistent local naming flagged by a terminology audit

`packages/runtime-tags/src/html/serializer.ts` › `State` | 2026-07-20 | impact:low | effort:low

A file-by-file terminology audit flagged several local naming inconsistencies that are too narrow for CONTEXT.md but worth normalizing when touching these files: `html/serializer.ts` uses `assigns`/`assigned`/`addAssignment` for one mechanism and names its generation counter `flush` (reads as an output flush; it is compared, not flushed — see `parent.flush === state.flush`); `translator/core/if.ts` destructures the same branches array as `branchBodySection` in one place and `branchBody` in another; `dom/controllable.ts` mixes `Controllable` (file, `syncControllableFormInput`) with `Controlled*` accessor/type prefixes for the same concept — CONTEXT.md now canonicalizes "controllable"; `translator/core/await.ts` pairs the near-homophones `startBinding` (a Binding) and `startMark` (a serialize-guard expression). Each is a rename-in-place with no behavior change; snapshots regenerate where identifiers leak into debug output. Re-verify by grepping the cited symbols.

## Normalize the params-binding `BindingType` so a param is identifiable by type

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's "params binding" is created by `trackParamsReferences`, but each caller passes a different `BindingType`: `<for>`/`<await>` use `derived` (`core/for.ts`, `core/await.ts`), `<define>`/attribute-tags/dynamic-tag/known-tag use `param`, program input uses `input`, and an attribute-tag `<for>` uses `local`. So "is this a param?" cannot be answered from `binding.type` and the codebase instead keys off identity — `root === root.section.params` (see `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params`). The heterogeneity is currently load-bearing, not accidental: `BindingType` selects the `resolveBindingSources` path, and `<for>`/`<await>` deliberately use `derived` so `resolveDerivedSources` makes the item param's `Sources` transparently reflect its loop/await source (`<for of=stateVal>` → `state` source; `<for of=input.list>` → `param` source), which drives serialize-reason scheduling (`isStateSerializeReason` vs `isReasonDynamic` in `serialize-reasons.ts`) and `scopeOffset` propagation (`getMaxOwnSourceOffset`). A naive `derived→param` flip severs the `setBindingDownstream` link (it goes dead before `resolveDerivedSources` runs), mis-scheduling serialization and losing scope offsets. The cleanup: give params a correct, uniform type (or a dedicated param marker on the binding) so `isParamBinding` reduces to a `binding.type` check, while moving the source-transparency of `<for>`/`<await>` params off the overloaded `derived` type onto an explicit source-resolution input. Verify current state: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` shows the four distinct `BindingType` args; `isParamBinding` in `references.ts` still uses the identity walk because no type distinguishes them.

## Factor the duplicated await-counter construction shared by `_await_promise` and `addAwaitCounter`

`packages/runtime-tags/src/dom/control-flow.ts` › `addAwaitCounter` | 2026-07-23 | impact:low | effort:med

`addAwaitCounter` (control-flow.ts:283-329) and the `else` arm of
`_await_promise`'s signal (:102-159) are the same ~25-line skeleton written
twice: the `if (!awaitCounter?.i)` guard, the
`tryBranch[AccessorProp.AwaitCounter] = { i: 0, c() { if (--awaitCounter.i)
return 1; …; queueEffect(tryBranch, runPendingEffects); } }` literal, and the
`if (!awaitCounter.i++) requestAnimationFrame(() => awaitCounter.i &&
runEffects(prepareEffects(() => queueRender(<scope>, () => { …;
tempDetachBranch(tryBranch); }, -1))))` frame scheduler. Only three things
differ: the body of `c()` (anchor swap vs. `dismissPlaceholder(tryBranch)`), the
body of the queued frame render (re-insert the await anchor vs. create and
insert the placeholder branch), and the scope passed to `queueRender` (`scope`
vs. `tryBranch`). Extracting a shared factory that takes `(tryBranch, onZero,
frameScope, onFrame)` would collapse both call sites, and since bundle size is a
tracked feature here the duplicated
`requestAnimationFrame`/`prepareEffects`/`queueRender` chains are shipped twice
in every app that uses `<await>`. Re-verify by diffing the two blocks side by
side and then checking the `await-*`/`try-*` fixture `sizes.json` and the root
`.sizes.json` after the extraction.

## Delete the unreachable non-identifier tag-var guard in `trackDomVarReferences`

`packages/runtime-tags/src/translator/util/references.ts` › `trackDomVarReferences` | 2026-07-23 | impact:low | effort:low

`trackDomVarReferences` opens with a `!t.isIdentifier(tagVar)` check that throws
`Tag variables on native elements cannot be destructured.`
(references.ts:287-293), but both call sites already reject a destructured tag
var earlier with a better, docs-linked message:
`visitors/tag/native-tag.ts:98-104` throws "Tag variables on [native
tags](https://markojs.com/docs/reference/native-tag) cannot be destructured." at
the top of the same `analyze.enter` that later calls `trackDomVarReferences`
(line 354), and `core/html-comment.ts:51-57` throws its own
`<html-comment>`-specific version before calling it at line 86. So the guard is
dead, and it is also the only place in the package that says "native elements"
instead of CONTEXT.md's "native tag". Drop the branch (keeping the non-null
cast) so the one live message is the linked one. Re-verify: compile `<div/{a}/>`
and observe the code frame quotes the native-tag.ts wording with the docs link,
never the references.ts wording; `grep -rn "cannot be destructured"
packages/runtime-tags/src` shows the four distinct messages and their owners.

## Drop the write-only `renderReferencedBindings`/`effectReferencedBindings` signal fields

`packages/runtime-tags/src/translator/util/signals.ts` › `addRenderReferences` | 2026-07-23 | impact:low | effort:low

`Signal.renderReferencedBindings` and `Signal.effectReferencedBindings`
(signals.ts:83, 85) are initialized in `getSignal` (signals.ts:264, 266) and
updated by `addRenderReferences`/`addEffectReferences` (signals.ts:890-898,
880-888) but never read anywhere in the repo. Every `addStatement` and
`addValue` therefore pays a `bindingUtil.union` — a sorted merge that allocates
a fresh array per call (`util/optional.ts` `unionSortedRepeatable`/`addSorted`)
— to build state that is discarded. Removing the two fields and their two
helpers deletes two of the five post-`finalizeReferences` `bindingUtil` call
sites, which also shrinks the surface of the binding-id renumbering hazard filed
separately. Re-verify: `grep -rn
"renderReferencedBindings\|effectReferencedBindings" packages/` returns only the
eight lines in `signals.ts` listed above (declaration, initialization, and the
two assignment helpers) and no reader.

## Stop re-exporting `forOfBy`/`forInBy`/`forStepBy` from the html runtime entry

`packages/runtime-tags/src/html.ts` › `forOfBy (export block from "./html/for")` | 2026-07-23 | impact:low | effort:low

`src/html.ts` re-exports seven names from `./html/for`, but only four of them
(`forIn`, `forOf`, `forTo`, `forUntil`) are ever emitted by codegen —
`translator/core/for.ts` › `forTypeToRuntime` maps the four `<for>` kinds to
exactly those. `forInBy`, `forOfBy` and `forStepBy` are private helpers of
`html/writer.ts`, which imports them directly from `./for` and uses them inside
`_for_of`/`_for_in`/`_for_to`/`_for_until`; no `callRuntime`/`importRuntime`
call site names them, and `dom.ts` correspondingly exports only the four base
helpers from `./common/for`. Keeping them on the entry has two costs: because
`HTMLRuntimeHelpers = keyof typeof import("../../html")`
(`translator/util/runtime.ts`), `callRuntime("forOfBy", …)` type-checks even
though it would emit a call to a non-codegen helper; and as entry exports they
must survive as top-level named bindings in `dist/html.mjs`, so the minifier
cannot inline or rename them into their single use sites (SSR size is tracked in
`.sizes/counter.ssr` et al.). Drop the three names from the `export { … } from
"./html/for"` block. Re-verify: `rg -n "forOfBy|forInBy|forStepBy" packages/`
returns hits only in `src/html.ts`, `src/html/for.ts` and `src/html/writer.ts`,
and the test suite still passes for a `<for by=…>` fixture.

## Remove the dead `_attrs` event-handler assertions in html-attrs.test.ts or give the routing real coverage

`packages/runtime-tags/src/__tests__/html-attrs.test.ts` › `describe("attrs") › it("should strip event handlers, invalid attribute names and content")` | 2026-07-23 | impact:low | effort:low

The test is titled "should strip event handlers, ..." but its only two
event-handler assertions are commented out, so nothing in the file exercises
that behavior — and the title is also wrong about what happens: `_attrs`
(`src/html/attrs.ts`) does not strip `on*` attributes, it collects them into an
`events` object and registers it via `_scope(scopeId, {
[AccessorPrefix.EventAttributes + nodeAccessor]: events })`. That is why the
commented lines cannot simply be uncommented: called outside a render they throw
`TypeError: Cannot read properties of undefined (reading 'boundary')` from
`_scope`. Either delete the two dead comments and retitle the test to what it
verifies (invalid attribute names and the non-`<meta>` `content` attribute), or
add a case that drives `_attrs` inside an active writer boundary and asserts the
event lands on the scope under `AccessorPrefix.EventAttributes`. Re-verify:
`node -r ~ts -e
'require("./packages/runtime-tags/src/html/attrs.ts")._attrs({onClick(){}}, "a",
0, "")'` throws the `boundary` TypeError, confirming the commented assertions
can never pass as written.

## Drop the ignored `state` argument from `compat.toJSON` and its two runtime-class call sites

`packages/runtime-tags/src/html/compat.ts` › `compat.toJSON` | 2026-07-23 | impact:low | effort:low

`compat.toJSON()` declares an empty parameter list, yet both call sites in
`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js` still
pass a `State`: `renderBody.toJSON =
htmlCompat.toJSON(htmlCompat.ensureState(out.global))` and `value.toJSON =
htmlCompat.toJSON(state)`. The parameter was real until commit 9e043c0724
("refactor: unify scope serialization and concurrent resume"), which replaced
the body's `writeScopeToState(state, scopeId, {})` with `_script(scopeId,
SET_SCOPE_REGISTER_ID)` and removed `state` from the TypeScript signature; the
untyped JS call sites were never updated, so the code still reads as though the
returned `toJSON` were bound to one render's `State` when it is not. The
`ensureState` calls are still load-bearing (they seed
`$global.runtimeId`/`renderId` and memoise the `State` that `flushScripts` later
mutates via `walkOnNextFlush`), so the cleanup is to keep them as standalone
statements and call `htmlCompat.toJSON()` with no argument, dropping the
now-unused `const state` local. Re-verify: `compat.toJSON` in
`packages/runtime-tags/src/html/compat.ts` is declared `toJSON()`, while `rg -n
"htmlCompat\\.toJSON\\(" packages/runtime-class` returns two call sites that
each pass an argument.

## Extract one helper for merging repeated attribute tags into `attrTag`/`attrTags`, now duplicated four times

`packages/runtime-tags/src/translator/util/known-tag.ts` › `translateAttrTag` | 2026-07-23 | impact:low | effort:low

The rule "a repeated attribute tag folds into `attrTags(prev, next)`, a
non-repeated one becomes `attrTag(props)`" is implemented four separate times.
Two of them are near-verbatim copies of the same ~35-line block, including the
non-obvious trick of wrapping the first call in `t.parenthesizedExpression` so a
later sibling can mutate `.expression` in place: `known-tag.ts` ›
`translateAttrTag` (:977-1007) and the `isAttributeTag(tag)` branch of
`known-tag.ts` › `applyAttrObject` (:913-949), which differ only in whether
`repeated` comes from a passed `AttrTagMeta` or a fresh
`analyzeAttributeTags(parentTag)?.[name]` lookup, and in returning the
expression versus assigning a local. The other two express the same rule in
different shapes: `translate-attrs.ts` › `translateAttrs` (:98-117, merging via
`findObjectProperty` over the accumulated `contentProperties`) and
`translate-attrs.ts` › `addDynamicAttrTagStatements` (:199-226, merging via an
`attrTags(id, props)` assignment to the attr-tag identifier). A single helper
taking `(attrTagMeta, translatedProps, mergeTarget)` would collapse the two
known-tag copies outright and let the other two share the `repeated ? attrTags :
attrTag` decision, so a future change to attr-tag merging cannot be applied to
three of four sites. Re-verify: `rg -n 'callRuntime\("attrTags"'
packages/runtime-tags/src/translator` lists the four call sites, and
`translateAttrTag`/`applyAttrObject` diff to only the `repeated` lookup and the
return style.

## Drop the write-only `tagNameNullable` tag extra and the nullability bookkeeping that computes it

`packages/runtime-tags/src/translator/util/tag-name-type.ts` › `analyzeExpressionTagName` | 2026-07-23 | impact:low | effort:low

`MarkoTagExtra.tagNameNullable` is declared (tag-name-type.ts:18, the module
augmentation) and assigned in three places — `:50`/`:53` in `analyzeTagNameType`
and `:208` in `analyzeExpressionTagName` — but never read anywhere in the
workspace. It is also not computed correctly: the `while ((path = pending.pop())
&& type !== TagNameType.DynamicTag)` loop aborts as soon as the type resolves to
`DynamicTag`, so pending nullable operands are never visited. Delete the field
and the `nullable` tracking, or, if it is meant to feed a future "dynamic tag
can be null" specialization, wire it up and fix the early-exit before relying on
it. Note the traversal's `&&`, `NullLiteral`, and `undefined`-identifier cases
are **not** removable along with it — they exist to classify the tag name, so
the `&&` branch must still avoid pushing `left` and the null/`undefined`
branches must stay no-op `continue`s; collapsing them into the final `else`
forces `TagNameType.DynamicTag` and would flip e.g. `<${cond ? null : "div"}/>`
from NativeTag to DynamicTag.
Re-verify: `rg -n "tagNameNullable" .` returns only the declaration and the
three assignments in
`packages/runtime-tags/src/translator/util/tag-name-type.ts`.

## Delete translator/runtime residue left behind by completed refactors

`packages/runtime-tags/src/translator/visitors/program/index.ts` › `isScopeIdentifier` | 2026-07-23 | impact:low | effort:low

Three leftovers, each a pure delete/rename with no behavior change. (1)
`translator/visitors/program/index.ts` still exports `isScopeIdentifier`; its
only consumer was removed in commit `0a654cda92` ("drop the always-false
referencesScope in the `<script>` translator", 2026-07-21), so a repo-wide `rg
-n "isScopeIdentifier"` now matches nothing but the definition — it is dead in
the translator, where dead exports are unreachable by codegen string references
and can simply go. (2) `html/dynamic-tag.ts:33` still carries `// TODO: refactor
dynamicTagInput and dynamicTagArgs to be the same impl with a flag for input vs
args.`, but neither symbol has existed since `ff59411349` (2025-03-28) and the
refactor it asks for already shipped — `_dynamic_tag` takes a single
`inputOrArgs` parameter plus the `inputIsArgs` flag; the comment also violates
the AGENTS.md rule that comments capture intent and never describe removed code.
(3) `translator/util/get-accessor-char.ts` exports only
`getAccessorPrefix`/`getAccessorProp`; `getAccessorChar` was removed by #2577
(`33c3979dcb`), so the filename no longer matches the module (e.g.
`get-accessor-enums.ts`). Re-verify: `rg -n
"isScopeIdentifier|dynamicTagInput|dynamicTagArgs|getAccessorChar"
packages/runtime-tags` returns only the dead export declaration and the stale
TODO line.

## Collapse copy-pasted sibling implementations in the `<for>` and scriptlet core tags

`packages/runtime-tags/src/translator/core/for.ts` › `forTypeToDOMRuntime` | 2026-07-23 | impact:low | effort:low

Two copy-paste sets in the translator differ by a single token.
`translator/core/for.ts` defines `forTypeToHTMLResumeRuntime` (`:571`) and
`forTypeToDOMRuntime` (`:584`) as byte-identical `ForType` switches, both
mapping `of|in|to|until` to `_for_of|_for_in|_for_to|_for_until`; they are
called from `:261` and `:367`, so one can simply be deleted and both call sites
pointed at the survivor, leaving `forTypeToRuntime` (`:558`, the non-underscored
`forOf`/`forIn`/`forTo`/`forUntil` names) as the only genuinely different
mapping. Separately, `translator/core/{client,server,static}.ts` are three
31-line files whose only differences are the keyword stripped by
`rawValue.replace(/^X\s*/, "")`, the third argument to `t.markoScriptlet(body,
true, …)` (`"client"` / `"server"` / omitted), and their autocomplete strings —
a single `createScriptletTag(keyword, target?)` factory would cut roughly 60
lines while leaving the three `core/index.ts` registrations untouched. Both
changes are mechanical and produce byte-identical generated output, so no
snapshot or `sizes.json` churn. Re-verify: `diff <(sed -n '571,583p'
packages/runtime-tags/src/translator/core/for.ts | sed
's/forTypeToHTMLResumeRuntime/F/') <(sed -n '584,596p'
packages/runtime-tags/src/translator/core/for.ts | sed
's/forTypeToDOMRuntime/F/')` is empty, and `diff
packages/runtime-tags/src/translator/core/client.ts
packages/runtime-tags/src/translator/core/server.ts` reports only the four
keyword/description lines.
