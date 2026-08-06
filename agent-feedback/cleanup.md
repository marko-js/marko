# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Pass the branch scope, not the fragment marker, to `setScopeNodes`

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js` › `renderAndMorph` | 2026-07-13 | impact:low | effort:low

After `host = rootNode.startNode`, `renderAndMorph` calls `domCompat.setScopeNodes(host, rootNode.startNode, rootNode.endNode)`, writing `#StartNode`/`#EndNode` onto the fragment's DOM marker (a self-assign plus an unused end ref) instead of onto the tags branch `scope`. Since `scope[#StartNode]` never becomes the fragment marker, the `rootNode = host.fragment` fast path can never fire for a resumed child and every re-render falls back to the `___componentLookup` / `___marko5Component.___rootNode` lookup. Correctness is unaffected, so this is a dead optimization plus a misleading invariant; passing `scope` restores it, but check destroy/move first, since the fragment markers sit inside the scope's original start/end range. Re-verify: on a second re-render of a server-rendered class child, `domCompat.getStartNode(scope).fragment` should be set.

## Retitle the `_attrs` test or give its event-handler routing real coverage

`packages/runtime-tags/src/__tests__/html-attrs.test.ts` › `it("should strip event handlers, invalid attribute names and content")` | 2026-07-23 | impact:low | effort:low

The test's only two event-handler assertions are commented out (and call a long-gone `helpers.attrs`), and the title is wrong: `_attrs` (`src/html/attrs.ts`) does not strip `on*` names, it collects them into `events` and registers them via `_scope(scopeId, { [AccessorPrefix.EventAttributes + nodeAccessor]: events })`. They cannot simply be uncommented — outside a render `_scope` reads `$chunk.boundary` and throws. Either delete the dead comments and retitle to what the test actually checks (invalid attribute names, and `content` on a non-`<meta>` tag), or drive `_attrs` inside an active writer boundary and assert the handler lands on the scope. Re-verify: `node -r ~ts -e 'require("./packages/runtime-tags/src/html/attrs.ts")._attrs({onClick(){}},"a",0,"")'` throws `TypeError: Cannot read properties of undefined (reading 'boundary')`.

## Extract one helper for the `attrTag`/`attrTags` merge duplicated in `known-tag.ts`

`packages/runtime-tags/src/translator/util/known-tag.ts` › `translateAttrTag` | 2026-07-23 | impact:low | effort:low

The rule "a repeated attribute tag folds into `attrTags(prev, next)`, a non-repeated one becomes `attrTag(props)`" is implemented four times. `translateAttrTag` and the `isAttributeTag(tag)` branch of `applyAttrObject` are near-verbatim ~35-line copies, including the `t.parenthesizedExpression` mutation trick, differing only in where `repeated` comes from and whether the result is returned or handed to `addStatement`. `translate-attrs.ts` › `translateAttrs` and `addDynamicAttrTagStatements` encode the same rule over `contentProperties` and over an attr-tag identifier assignment. One helper would collapse the two `known-tag.ts` copies and let the other two share the `repeated ? attrTags : attrTag` decision, so a future change cannot land on three of four sites. Re-verify: `rg -n '"attrTags"' packages/runtime-tags/src/translator` lists exactly those four sites.

## Delete translator/runtime residue left behind by completed refactors

`packages/runtime-tags/src/translator/visitors/program/index.ts` › `isScopeIdentifier` | 2026-07-23 | impact:low | effort:low

Three pure deletes with no behavior change. `isScopeIdentifier` has no callers left after `0a654cda92`, though the `scopeIdentifier` it wraps is used throughout the visitors. `html/dynamic-tag.ts` still carries `// TODO: refactor dynamicTagInput and dynamicTagArgs …`, but neither symbol exists and `_dynamic_tag` already takes one `inputOrArgs` plus an `inputIsArgs` flag, so the comment describes removed code (AGENTS.md forbids that). `translator/util/get-accessor-char.ts` now exports only `getAccessorPrefix`/`getAccessorProp`, so rename it (e.g. `get-accessor-enums.ts`) and update the import specifiers. Re-verify: `rg -n "isScopeIdentifier|dynamicTagInput|dynamicTagArgs" packages/runtime-tags` matches only the dead export and the stale TODO, and `rg -n "get-accessor-char" packages/runtime-tags` lists the 11 import specifiers the rename has to follow.

## Collapse copy-pasted sibling implementations in the `<for>` and scriptlet core tags

`packages/runtime-tags/src/translator/core/for.ts` › `forTypeToDOMRuntime` | 2026-07-23 | impact:low | effort:low

`forTypeToHTMLResumeRuntime` and `forTypeToDOMRuntime` are byte-identical `ForType` switches returning `_for_of|_for_in|_for_to|_for_until`, and both `dom` and `html` export those names, so delete one and point both call sites at the survivor; `forTypeToRuntime` stays as the only distinct mapping. Separately, `translator/core/{client,server,static}.ts` are three 31-line files differing only in the stripped keyword, the third `t.markoScriptlet(body, true, …)` argument, and their autocomplete text — a `createScriptletTag(keyword, target?)` factory would cut ~60 lines and leave the `core/index.ts` registrations untouched. Both edits are output-identical, so no snapshot or `sizes.json` churn. Re-verify: normalize the two function names and `diff` their bodies; `diff core/client.ts core/server.ts` shows only keyword/description lines.

## Delete or resurrect the dead `test/markoc` suite

`packages/runtime-class/test/markoc/index.test.js` | 2026-07-24 | impact:low | effort:low

The mocha spec glob (`packages/*/@(src|test)/**/*.test.@(js|ts)`) matches this file, yet it declares no `describe`/`it`: the whole `mocha-autotest` body has been commented out for years, leaving five live lines that only `require` `../__util__/test-init`, `chai`, and `../../compiler`. The commented body resolves `./babel-register`, deleted in `3867db2ca8` (native type stripping), so it cannot be uncommented as written, seven `fixtures/` directories are unused, and `markoc` is still a published bin with no coverage. Delete `test/markoc/`, or resurrect it by spawning `bin/markoc` with `-r ~ts` instead of the babel hook. Re-verify: `rg -n "describe\(|it\(" packages/runtime-class/test/markoc/index.test.js` matches nothing outside comments.

## Delete or restore the commented-out `Symbol.iterator` serializer test

`packages/runtime-tags/src/__tests__/serializer.test.ts` | 2026-07-18 | impact:low | effort:low

One commented-out test survives at `serializer.test.ts:733-751`: an `it.skip("Symbol.iterator registered", …)` case whose inner note reads "Unsupported for now since we share the reference for iterators on attribute tags." Either restore it as a live `it.skip` so the runner reports it, or delete it — commented-out code hides whether the limitation still holds. Decide it alongside "Remove the dead `_attrs` event-handler assertions in html-attrs.test.ts or give the routing real coverage", the other commented-out-assertion site in the same test suite. Re-verify: `rg -n "^\s*// *it\.skip" packages/runtime-tags/src/__tests__/serializer.test.ts` prints exactly that one block, and no other commented-out `it`/`describe` remains in the file.

## Normalize the local naming flagged by the terminology audit

`packages/runtime-tags/src/html/serializer.ts` › `State` | 2026-07-20 | impact:low | effort:low

Three rename-in-place inconsistencies remain. `html/serializer.ts` spreads one mechanism over `assigns`/`assigned`/`addAssignment` and calls its generation counter `flush` though it is only compared (`parent.flush === state.flush`); `translator/core/if.ts` destructures the same branches entry as `branchBodySection` and as `branchBody`; `dom/controllable.ts` mixes `syncControllableFormInput` with `Controlled*` accessor/type prefixes while CONTEXT.md canonicalizes "controllable". The `startBinding`/`startMark` near-homophones live in `translator/core/show.ts`, not `core/await.ts`. While in `dom/controllable.ts`, drop the truncated first line of the three-line comment above `observeOnce` — an editing leftover that half-restates the next sentence and pushes the block past the two-line cap. Re-verify by grepping those symbols and `grep -n -B3 "^function observeOnce" packages/runtime-tags/src/dom/controllable.ts`.

## Make a params binding identifiable from `binding.type`

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's params binding comes from `trackParamsReferences`, but callers pass four different `BindingType`s: `param` (`define`, attribute-tag, dynamic-tag, `known-tag`), `input` (program), `derived` (`core/for.ts`, `core/await.ts`) and `local` (attribute-tag `<for>`). So "is this a param?" is answered by an identity walk — `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params` — instead of a type check. The heterogeneity is load-bearing: `BindingType` selects the `resolveBindingSources` branch, and `derived` routes `<for>`/`<await>` params through `resolveDerivedSources` so the item param's `Sources` reflect its loop/await source, driving serialize-reason scheduling and `scopeOffset`. Give params a uniform type or a dedicated marker and move that source transparency onto an explicit source-resolution input rather than the overloaded `derived`. Re-verify: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` still shows four distinct type args.

## Share the await frame scheduler between `addAwaitCounter` and `_await_promise`

`packages/runtime-tags/src/dom/control-flow.ts` › `addAwaitCounter` | 2026-07-23 | impact:low | effort:med

`da6433e520` already factored the counter literal into `createAwaitCounter`, but the frame scheduler is still written twice: `if (!counter.i++) requestAnimationFrame(() => counter.i && runEffects(prepareEffects(() => queueRender(<scope>, …, -1))))` appears in `addAwaitCounter` (~~:280-307) and in the `else` arm of `_await_promise` (~~:139-165). Only the queued body (create and insert the placeholder branch vs. re-insert the await anchor, then `tempDetachBranch`) and the `queueRender` scope (`tryBranch` vs. `scope`) differ, so the `requestAnimationFrame`/`prepareEffects`/`queueRender` chain ships twice in every app using `<await>`. Extract a `scheduleFrame(counter, scope, onFrame)` helper alongside `createAwaitCounter`. Re-verify with the root `.sizes.json` and the `await-*`/`try-*` fixture `sizes.json` after the change.
