# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Resume a stateful Tags-API descendant rendered through an inert Class-API parent

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `translate.exit` | 2026-07-13 | impact:high | effort:high

A Tags page rendering an inert Class component (no class block) that renders a stateful Tags grandchild leaves the grandchild dead after SSR — its `<button onClick>` does nothing, in debug and optimize. `getClassHydrationMode` (`packages/runtime-class/src/translator/index.js`) detects interactivity only via `meta.component`, never a Tags child's `isInteractive` (on `program.node.extra`, not `metadata.marko`), so `classHydration` is undefined and the optimize path here (`!classHydration && !tagsSerializeReason` → `tag.remove()`) deletes the boundary outright; disabling that removal alone does not revive the button, so the resume gap is deeper. A fix likely needs the tags translator to surface interactivity on `metadata.marko`, `getClassHydrationMode` to return DESCENDANT for it, and the boundary to actually resume. Re-verify: with `template.marko` = `// use tags` + `<class-wrapper/>`, `components/class-wrapper.marko` = `<div><tags-counter/></div>` and `tags/tags-counter.marko` = `<let/n=0/><button onClick(){n++}>${n}</button>`, run `scripts/inspect-compiled-output.mts -t class -o dom` — today it emits `$setup = () => {}`.

## Compare `(id, owner)` in dynamic-tag change checks, not the renderer id alone

`packages/runtime-tags/src/dom/control-flow.ts` › `_dynamic_tag` | 2026-07-14 | impact:high | effort:med

`_dynamic_tag` and `_dynamic_tag_content` gate re-render on `renderer?.[RendererProp.Id] || renderer`; `dom.ts` › `_attr_content` on `content?.[RendererProp.Id]`. `_content(id, …)` bakes one id per content section, so switching a single dynamic-tag slot between two _instances_ of that section — two `<attrs.content>` from two provider instances, or list-detail `<${selected.content}/>` — short-circuits: `setConditionalRenderer` is skipped, the branch is never torn down, and `branch[AccessorProp.Owner]` (set once in `createBranch` from `RendererProp.Owner`) plus the `_closure_get` `subscribeToScopeSet` stay pinned to the first owner, so the content keeps rendering the previous instance's state. Values arriving via `RendererProp.LocalClosureValues` do keep updating (that loop runs outside the change check), which is why some shapes look fine; the damage shows whenever the content reads its owner through `$scope[AccessorProp.Owner]`. Two distinct tag files switch correctly, isolating the defect to the id-only compare. Fix by comparing `(id, owner)` — renderer objects are recreated per render, so identity alone over-fires — and by making the resume handshake serialize a scope-registered renderer as its registered reference. Re-verify: `tags/provider.marko` = `<let/count = input.n/><button onClick() { count++ }>bump</button><define/body><div>value ${count}</div></define><return=body/>`, `template.marko` = `<provider/a n=1/><provider/b n=2/><let/sel = 0/><button onClick() { sel = 1 - sel }>toggle</button><${sel ? b : a}/>`; toggling `sel` must swap the rendered body.

## Initialize tag variables for dynamic tags that resolve to a native tag name

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-15 | impact:med | effort:high

The string-renderer branch never assigns `result` (its inline TODO says so) and the DOM branch never pushes the created element through the child scope's `AccessorProp.TagVariable` callback, so `<${cond && "div"}/el/>` leaves `el` undefined in CSR and after resume. Hoisted reads make it a hard failure: debug SSR runs `_assert_hoist(el)` on `undefined` and throws `Hoisted values must be functions, received type "undefined"`, while optimize drops the assert, serializes `el: undefined`, and breaks later on the client. CSR is runtime-only (push `() => childScope[AccessorProp.StartNode]` through the callback in `dom/control-flow.ts`); resume needs the compiler, since a native branch scope serializes no state, leaving `dom/resume.ts`'s `BranchEndNativeTag` handler no `#TagVariable` to invoke. A cheap independent step is a compile-time diagnostic when a tag variable sits on a dynamic tag that can resolve to a native name. See also "Guard the tag-variable assignment in `_dynamic_tag` when the dynamic tag becomes falsy" — the unguarded write it reports is in this same block, and its option of moving that write into the `normalizedRenderer` branch would reshape the CSR fix here. Re-verify: compile `<if=input.show><${input.name || "div"}/el/></if><script>el()</script>` with `-d -o html` and see `_assert_hoist(el)` applied to an `el` the html `_dynamic_tag` never assigns.

## Don't emit the "no matching `<option>`" dev error when a controlled `<select>`'s options render asynchronously

`packages/runtime-tags/src/html/attrs.ts` › `_attr_select_value` | 2026-07-23 | impact:med | effort:med

The MARKO_DEBUG branch wraps `content` in `withContext(kSelectedValueMatched, matched, …)` and reads `matched.value` the instant `content()` returns. When the body holds an `<await>` on a real promise, `_await` (`html/writer.ts`) forks the chunk and returns, so the `<option>`s — and `_attr_option_value`'s `matched.value = true` — run in a later chunk and the check always sees `false`. Fetching options asynchronously is idiomatic, so this fires on correct pages and trains developers to ignore the warning. Run the assertion from boundary/chunk completion instead, or skip it when the content forked an async chunk. Re-verify: SSR-render `<let/v="b"/><select value:=v><await|opts|=input.opts><for|o| of=opts><option value=o>${o}</option></for></await></select>` with `input.opts = Promise.resolve(["a","b","c"])` — `console.error` fires while the HTML shows `<option value=b selected>`; the plain array is silent.

## Reconcile `<html-comment>` escaping: SSR writes a literal `&gt;` into comment data that CSR writes raw

`packages/runtime-tags/src/html/content.ts` › `_escape_comment` | 2026-07-23 | impact:med | effort:med

`_escape_comment` replaces every `>` with `&gt;`, but comments are not parsed for character references, so the server-rendered comment's data literally contains `&gt;` while DOM `_text` (`dom/dom.ts`) assigns `node.data = _to_text(value)` unescaped. For `<html-comment>${"-->"}</html-comment>` an SSR/resumed document has `comment.data === "--&gt;"` and a client-rendered one `"-->"`, so anything reading comments (a `SHOW_COMMENT` `NodeIterator`, a comment carrying JSON/config, edge-side markers) sees different content per runtime. Only `-->`, `--!>`, and a leading `>`/`->` can terminate a comment, so escaping bare `>` is broader than needed. Either escape comment data on the DOM side too, or narrow SSR escaping to the `--` sequences so both sides round-trip the author's text. Re-verify: parse the committed `html-comment-placeholder` snapshot `<!----&gt;-->` in jsdom (`data === "--&gt;"`) and compare with that fixture's `dom.bundle.debug.js`.

## Render a value-carrying dynamic `<select>` through `_dynamic_tag`, and control it when it has no body

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-23 | impact:med | effort:med

The `renderer === "select" && ("value" in input || "valueChange" in input)` case hands `renderContent` to `_attr_select_value` instead of recursing, so the body gets no branch markers and no `ConditionalRenderer:#select/0`; `dom/control-flow.ts` › `_dynamic_tag` always registers one, and the resumed body scope is left in the parent's `ClosureScopes` with no branch to destroy it. That case also sits inside `} else if (renderContent) {`, and `_attrs`' `case "select"` only widens `skip`, so a bodyless dynamic select writes no `ControlledType`/`ControlledHandler`. Pass the `_dynamic_tag` recursion as `_attr_select_value`'s `content` argument (`kSelectedValue` is dynamically scoped) and hoist the select case out of the guard. See also "Initialize tag variables for dynamic tags that resolve to a native tag name" — same string-renderer branch, and a restructure that always recurses may resolve both. Re-verify: SSR `<let/tag=input.tag/><let/n=0/><${tag} value="b"><option value="a">A${n}</option></>` for `"div"` vs `"select"` — only div emits `M_[` and `ConditionalRenderer:#div/0`; and `<${input.tag} value:=v/>` emits `ControlledType:#input/0` for `"input"`, nothing for `"select"`.

## Apply the `hasAttrAlias` guard in `_attrs_partial` so a `checkedValue` spread stops unchecking the box

`packages/runtime-tags/src/dom/dom.ts` › `_attrs_partial` | 2026-07-23 | impact:med | effort:low

`_attrs` guards its stale-attribute removal with `hasAttrAlias`, keeping `checked` on an `<input>` whose next attrs carry `checkedValue`; `_attrs_partial`'s loop tests only `!skip[name] && !(nextAttrs && name in nextAttrs)`, so it removes `checked`, clearing `defaultChecked` and — dirty flag unset — `el.checked`. `_attr_input_checked_default` then reads that cleared `el.checked` as `restoreValue` on the `scope[AccessorProp.Gen] < runId` branch and writes it back, unchecking a box whose bound value still selects it; the controlled variant keeps `checked` but is left `defaultChecked === false`, corrupting `hasCheckboxChanged`/`handleFormReset`. Reuse `hasAttrAlias` in `_attrs_partial`'s loop. Re-verify: `<let/sel=["a"]/><input ...{ checkedValue: sel, value: "a" } type="checkbox"><button onClick(){ sel = sel.slice() }>t</button>` compiles to `_attrs_partial(…, { type: 1 }, _controllable_input)`; one click unchecks the box.

## Guard the tag-variable assignment in `_dynamic_tag` when the dynamic tag becomes falsy

`packages/runtime-tags/src/dom/control-flow.ts` › `_dynamic_tag` | 2026-07-23 | impact:med | effort:low

`setConditionalRenderer` assigns `scope[AccessorPrefix.BranchScopes + nodeAccessor] = newRenderer && createBranch(...)`, so a falsy renderer leaves the child scope `undefined`; the next statement writes `scope[childScopeAccessor][AccessorProp.TagVariable] = …` unguarded and throws `TypeError: Cannot set properties of undefined`. It fires only when a tag variable exists and the value goes rendered → falsy — `<${input.tag}/el/>` (compiled to `_dynamic_tag("#text/0", 0, () => $el)`) moving `"div"` → `undefined`, the natural way to write an optional dynamic tag with a ref; the initial-falsy case is skipped because the renderer check compares `undefined !== undefined`. Guard on `scope[childScopeAccessor]`, or move the write into the `normalizedRenderer` branch, and decide whether the tag variable should be pushed `undefined` on teardown. This is a different defect from the entry "Initialize tag variables for dynamic tags that resolve to a native tag name", where the callback installed here is never invoked for a rendered native tag — but the `normalizedRenderer` restructure touches that entry's CSR fix, so sequence them. Re-verify with `<${input.tag}/el/>` and `steps: [{tag:"div"}, {tag:undefined}]` — no fixture covers that transition and the second CSR step throws.

## Reset the scheduler's `isScheduled` guard off a path that always runs

`packages/runtime-tags/src/dom/schedule.ts` › `schedule` | 2026-07-23 | impact:med | effort:low

`schedule()` sets `isScheduled = 1`, and it is cleared only in the MessageChannel handler that `triggerMacroTask` posts — reachable only from the `requestAnimationFrame` callback `flushAndWaitFrame` registers. A document that is never rendered (background tab, `display:none` or offscreen iframe) never fires rAF, so after the first flush every later `schedule()` is a no-op and `<let>`-driven work stalls in `pendingRenders`, including non-visual effects like `document.title` badges or analytics beacons. `queueAsyncRender`'s own `queueMicrotask(run)` still runs, which makes the failure look intermittent. Distinct from the deliberate MessageChannel contract in the comment above `triggerMacroTask` (commit 2df3c969, "hosts lacking it must polyfill"): MessageChannel is present here and rAF is the link that never fires, so no polyfill helps. Clear the flag from a path that always runs: post the message from `flushAndWaitFrame`, or race the rAF with a `setTimeout` fallback. Re-verify: stub `requestAnimationFrame` to record-but-never-invoke — the first `queueRender(...)+schedule()` flushes, the second and third never do until a recorded callback is invoked by hand.

## Default a nullish namespace in `parseHTML` so ShadowRoot/fragment mounts stay HTML

`packages/runtime-tags/src/dom/parse-html.ts` › `parseHTML` | 2026-07-23 | impact:med | effort:low

`createBranch` passes `(parentNode as Element).namespaceURI` down to the clone, but a `DocumentFragment` or `ShadowRoot` has none, so `document.createElementNS(undefined, "template")` builds a null-namespace parser and `innerHTML` parses in foreign-content mode. Every tag off the HTML breakout list (`section`, `main`, `button`, `a`, `input`, `label`) becomes a null-namespace `Element` with no UA styles, form behavior, or `style`/`className`, while `div`/`span`/`ul` come out fine — so `template.mount(input, shadowRoot)`, the natural way to use Marko 6 in a web component, breaks in a partial, baffling way. Default a nullish `ns` to XHTML here and in `createCloneableHTML`'s `document.createElementNS(ns, "t")`, matching the `namespaceURI` shim `dom/scope.ts` › `tempDetachBranch` already relies on. This is a different defect from the entry "Thread the real insertion namespace into `compat.render` instead of `document.body`", where the namespace is present but wrong (`document.body`'s XHTML), so this default never fires on that path and does not fix clone-namespace derivation generally. Re-verify under jsdom: `_template('t','<section>x</section>','').mount({}, document.createDocumentFragment())` yields `nodeName 'section'` with `namespaceURI === null`, versus `SECTION` in XHTML when mounted into `document.body`.

## Thread the real insertion namespace into `compat.render` instead of `document.body`

`packages/runtime-tags/src/dom/compat.ts` › `compat.render` | 2026-07-23 | impact:med | effort:med

`compat.render` creates the Tags branch with `createAndSetupBranch(..., document.body)`, and `createBranch` takes the clone namespace from that parent's `namespaceURI`, so every Marko 6 template instantiated through the Marko 5 client boundary clones in XHTML. A Tags partial rooted at an SVG/MathML child (`<circle>`, `<path>`, `<g>`) clones as `HTMLUnknownElement` and renders nothing, though the same template `mount`ed into a real `<svg>` is correct; only client-create is hit, since SSR resume adopts existing DOM. The insertion point is genuinely unknown while the Class runtime renders into a detached vdom, so the namespace must be threaded from the caller or the clone deferred until morphdom inserts — morphdom already supplies it (`vNode.___actualize(host, parentEl.namespaceURI)` in `packages/runtime-class/src/runtime/vdom/morphdom/index.js`), but tags-compat's vnode `{___actualize: () => newNode}` returns a node cloned long before. Threading a real insertion point can hand `createBranch` a fragment with no `namespaceURI`, so the entry "Default a nullish namespace in `parseHTML` so ShadowRoot/fragment mounts stay HTML" has to land first or alongside this one. Re-verify under jsdom: `compat.render({global:{runtimeId:'M',renderId:'_'}}, {}, _template('b','<circle cx="1"/>',''), [{}])` returns a `CIRCLE` in `http://www.w3.org/1999/xhtml`.

## Count the same unit on both sides of `resolveCursorPosition`'s alphanumeric scan

`packages/runtime-tags/src/dom/resolve-cursor-position.ts` › `resolveCursorPosition` | 2026-07-23 | impact:low | effort:low

`count = before.replace(R, "").length` counts alphanumerics in UTF-16 code units, so an astral `\p{L}`/`\p{N}` contributes 2, but the loop walks `updatedValue` one code unit at a time and each lone surrogate is `\p{Cs}`, so it is stripped and never decrements `count`. With astral letters or digits (CJK Ext-B, Adlam, Osage, math alphanumerics) `count` never reaches 0, the loop runs off the end, and `controllable.ts` › `setInputValue` yanks the caret to `updatedValue.length` on every keystroke that rewrites the middle of a controlled `value:=` input. Use one unit on both sides: `count = [...before.replace(R, "")].length` and iterate by code point. Re-verify: `resolveCursorPosition("", 5, "(𠮷𠮸𠮹) x", "(𠮷) 𠮸𠮹y")` returns 10 (end of value) where 7 is correct; the all-BMP `("", 5, "(5405) 810-9227", "(540) 581-0922")` returns 7 either way.

## Wrap reordered out-of-order content in a parser-context-legal container

`packages/runtime-tags/src/html/writer.ts` › `Chunk.flushScript` | 2026-07-23 | impact:high | effort:high

A reorder flush appends `<t hidden {commentPrefix}={reorderId}>reorderHTML</t>`, and the inline reorder runtime splices it in via `runtime.l[id].replaceWith(...container.childNodes)`. `<t>` puts the parser in "in body", so a table-internal payload is destroyed before the runtime sees it: `<tr>`/`<td>` start tags are ignored, only their text survives, and bare text nodes land in the `<tbody>`. That silently breaks the canonical async-table pattern (`<try>` with a skeleton-row `@placeholder` plus an `<await>` streaming the real rows), and the wrapper is foster-parented out whenever a flush lands while the table is still open. Track the reorder site's static ancestor chain in the translator and emit matching scaffolding (`<table hidden><tbody>…</tbody></table>`), extracting from that depth as React's Fizz writer does. "Give a hidden `<show>` a wrapper legal in table/select insertion contexts" covers this file's other `<t hidden>` emit site and proposes `<template>` instead, so pick the container once for both writers and reuse its `translator/util/insertion-context.ts` › `discardsWrapperChildren`, which already enumerates the offending insertion modes. Re-verify: add that fixture and run `pnpm test -- --grep "runtime-tags/translator try-await-table-rows "` — `render.md` shows the row reduced to a stray text node.

## Mark "a page entry already claimed this render" with a durable flag, not `$global.__flush__`

`packages/runtime-tags/src/html/assets.ts` › `withPageAssets` | 2026-07-23 | impact:high | effort:med

`withPageAssets` detects a nested page render with `if (g.__flush__)`, but `Chunk.flushHTML` (`html/writer.ts`) clears `$global.__flush__` at the outer page's first flush. A page entry rendered after that — inside `<await>`/`<try>`/reordered content — takes the top-level branch and calls `template(input)` instead of `writeWaitReady(assetId, template, input)`. Its resume data then joins the eager `M._.r` queue instead of `M._.b[assetId]`, so effects run before that page's entry module registers ids and `runEffects` invokes `undefined(scope)`, and its asset tags move to the head of the next flush. Use a never-cleared `$global` symbol for "a page entry claimed this render", keeping `__flush__` as the one-shot head hook (`_flush_head` reads the same asset state). Re-verify: render a `withPageAssets` template inside another's `_await` callback — the inner payload emits as `M._.r=[…]`, not `M._.b={innerAsset:[…]}`.

## Retry SSR lazy-load trigger selectors after the document parses, and warn under `MARKO_DEBUG`

`packages/runtime-tags/src/html/assets.ts` › `writeTriggerScript` | 2026-07-23 | impact:med | effort:med

The inline trigger script for `with { load: "visible…" | "on-…" }` resolves its target as `document.querySelector(sel) || l()`, and `writeScript` lands it at the end of the current flush chunk, not the document. A flush boundary (`<await>`, `<try>`, lazy content) between the tag and its target means `querySelector` returns null and `l()` fetches the module immediately — the code split degrades to eager loading. The CSR path warns on this miss (`dom/load.ts` › `getSelectorOrResolve`); the emitted SSR string has no `MARKO_DEBUG` branch, so on server-rendered pages it degrades silently. Re-check on `DOMContentLoaded` (or observe until the node appears) before falling back to `l()`, and emit a `MARKO_DEBUG`-gated warn. Re-verify: a `visible #footer` lazy tag placed before an `<await>` whose body holds `<footer id=footer>` — the first chunk already contains `document.querySelector("#footer")||l()`.

## Restore the variable name and source location in `throwUnserializable`

`packages/runtime-tags/src/html/serializer.ts` › `throwUnserializable` | 2026-07-23 | impact:low | effort:low

Two lookups drop translator-emitted debug info. (1) `writeObjectProps` passes the escaped key (`toObjectKey(key)`) as the `Reference` accessor while `debug.vars` is keyed by the raw accessor from `writeHTMLResumeStatements` (`translator/util/signals.ts`), so `#LoopKey` never matches and prints double-quoted. (2) `while (ref?.accessor)` stops at the null-accessor `Reference` that `writeArrayArg`, `writeGenerator`, and `writeMaybeIterableProps` create for a collection's backing array, so anything inside a Map/Set/generator never reaches the scope `Reference` holding `debug`. Carry the raw key alongside the escaped one, and keep walking past null accessors. Re-verify with `node -r ~ts`: after `setDebugInfo(scope, "page.marko", "2:6", { selected: ["selected","2:6"] })`, serializing `{selected: new Set([new Thing()])}` aborts with `Unable to serialize (reading [0])` while the plain-array form reports `"selected" in page.marko:2:6`.

## Make `buildResumeRegisterKey` unambiguous — `_`-joined binding names collide and break resume

`packages/runtime-tags/src/translator/util/signals.ts` › `buildResumeRegisterKey` | 2026-07-23 | impact:med | effort:med

The key is `${section.id}` plus `_${name}` per referenced binding — no separator a name cannot contain, no namespace per registration kind — so different registrations in one section hash to the same `getResumeRegisterId`. Three collisions compile today: `<div/a/><div/b/>` yields two `_el("…_0_#div", …)`; an intersection `[a, b]` and a binding named `a_b` both yield `…_0_a_b`; and `getResumeRegisterId(section, "content")` collides with the effect id of a binding named `content` (`_script("…_1_content")` beside `_content_resume("…_1_content")`). Since `_resume` is `registeredValues[id] = obj` the later registration wins, so post-resume an effect silently never runs or two element refs resolve to the same node; CSR is unaffected. Key on binding/intersection numeric ids and namespace the string kinds, then regenerate snapshots. Re-verify: compile `<div/a/><div/b/><const/box={a,b}/>` with `-o dom` — two `_el(` calls share one id.

## Apply `ToNumeric` when lowering `++`/`--` on a tag variable

`packages/runtime-tags/src/translator/util/signals.ts` › `replaceAssignedNode` | 2026-07-27 | impact:med | effort:med

The `UpdateExpression` case lowers `x++` to `$x(scope, scope.x + 1)` (postfix subtracting 1 from the result), i.e. `x = x + 1` rather than JS's `x = ToNumeric(x) + 1`. With `<let/x="5"/>`, `x++` sets `x` to `"51"` and yields `50` instead of `6` and `5`; a `<let>` holding a bigint throws `Cannot mix BigInt and other types`. Wrapping the read in unary `+` fixes the string case but breaks bigint, so the lowering needs a real `ToNumeric` coercion — or `++`/`--` must be rejected on a tag variable whose type is not known numeric. Re-verify: compile `<let/x="5"/><button onClick(){ const v = x++ }>${x}</button>` with `-o dom`; the handler emits `const v = $x($scope, $scope.x + 1) - 1`.

## Key the renderer clone cache with a null-prototype map

`packages/runtime-tags/src/dom/renderer.ts` › `_content` | 2026-07-23 | impact:low | effort:low

`_content`'s clone closure memoizes parsed markup with `((cloneCache[ns] ||= {})[template] ||= createCloneableHTML(template, ns))(branch, walks)`. The inner cache is a plain object literal keyed by the section's raw static HTML, so a section whose entire markup is an `Object.prototype` member name resolves the inherited property instead of missing: `constructor`/`toString` return a callable that does nothing, leaving `branch[AccessorProp.StartNode]`/`[EndNode]` unset until `insertChildNodes` throws, and `__proto__` throws `is not a function` immediately. It is reachable from ordinary source — `<div><for|w| of=input.words>constructor</for></div>` compiles to `_for_of(0, "constructor")` -> `_content("", "constructor", ...)`. Fix: `Object.create(null)` or a `Map` for the per-namespace cache. Re-verify: mount that template with `{ words: ["a"] }` — it throws, while body text `x` renders fine.

## Key the bound-attribute change-handler cache by refining function, not just the binding

`packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts` › `getChangeHandler` | 2026-07-23 | impact:med | effort:low

`getChangeHandler` memoizes one change-handler node per binding in `BINDING_CHANGE_HANDLER`, keyed only on `binding.identifier`, while the refining-function shorthand (`value:parseInt:=value`) is read per attribute. For an identifier-valued `:=`, the first usage's refining function is baked into the shared handler and every later `:=` on that identifier reuses it verbatim, silently discarding its own modifier. `<let/value=0/><input value:parseInt:=value/><input value:=value/>` compiles both inputs to the same `$scope.$valueChange` = `_new_value => $value($scope, parseInt(_new_value))`; reversing the order drops `parseInt` entirely, and `parseInt` followed by `parseFloat` applies `parseInt` to both. Only the identifier branch is affected — the member-expression branch re-derives per attribute — so make the key `(binding.identifier, modifier-name-or-none)`. Re-verify: compile that pair with `-o dom -d` and confirm the second input's handler is unwrapped.

## Preserve `computed`/`static` when lowering registered object and class methods in DOM output

`packages/runtime-tags/src/translator/util/signals.ts` › `replaceRegisteredFunctionNode` | 2026-07-23 | impact:med | effort:low

The DOM copy rewrites a registered `ObjectMethod`/`ClassMethod`/`ClassPrivateMethod` with `t.objectProperty(node.key, replacement)` / `t.classProperty(...)` / `t.classPrivateProperty(...)`, dropping the node's `computed` and `static` flags; its twin in `visitors/program/html.ts` forwards both. A reactive computed key then crashes the compiler with a raw `TypeError: Property key of ObjectProperty expected node to be of a type [...] but instead got "MemberExpression"` and no Marko code frame; a static computed key miscompiles silently — `<const/handlers={ [key]() { n++ } }/>` emits `{ key: $handlers($scope) }` in DOM versus `{ [key]: _resume(...) }` in HTML, so `handlers[key]` is `undefined` on the client and `_on(el, "click", undefined)` wires nothing. Forward the flags exactly as html.ts does. Re-verify: compile `static const key = "bump";` plus that `<const>` and `<button onClick=handlers[key]>` with `-o dom -d` and `-o html -d`, then compare the object keys.

## Flush pending HTML before the `<debug>`/`<log>` statement so SSR keeps the tag's source position

`packages/runtime-tags/src/translator/core/debug.ts` › `translate.exit` | 2026-07-23 | impact:low | effort:low

The `isOutputHTML()` branch calls `tag.insertBefore(statement)` without first calling `writer.flushBefore(tag)`, and `core/log.ts` does the identical thing, so the writer's buffered markup is emitted after the statement. Every other statement-emitting core tag (`if`, `for`, `await`, `try`, `return`, `define`, `show`) flushes first, and DOM output keeps source order, so the two diverge: for `<div>${bump()}</div>` / `<log=bump()/>` / `<div>${bump()}</div>`, HTML emits `console.log(bump()); _html(...)` while DOM's `$setup` emits `_text(...bump()); console.log(bump()); _text(...bump())` — the server logs before preceding content is even evaluated. Add `writer.flushBefore(tag)` in the `isOutputHTML()` branch of both tags. The `debug-tag` and `log-tag` fixtures have no markup between the tags, so add one that does. Re-verify: `pnpm run compile -o html -d` on that template should emit the first `_html(...)` before `console.log`.

## Drop escaped placeholders that render an empty string so they stop claiming a walk step

`packages/runtime-tags/src/translator/util/static-text.ts` › `isStaticText` | 2026-07-23 | impact:med | effort:low

`isStaticText` accepts a confident escaped placeholder when `isNotVoid(computed)` — the attribute void rule — but the emitted text is `_escape(computed)`, which is `""` for `""`, `NaN` and `0n`; `placeholder.ts` (`analyze`, `translate.exit`) drops on the matching `isVoid`. Such a placeholder writes nothing yet still calls `walks.enterShallow`, so every later walk step in the section is off by one: `<div>${""}${input.x}<b/><i/></div>` compiles to `next(1), over(1), replace, out(1)` and the `replace` destroys `<b>`, while `<div>${""}<b/><i>${input.x}</i><u/></div>` walks off the end and throws `reading 'data'` from `_text`. SSR is marker-driven and unaffected. Switch `isStaticText`, `isEmptyPlaceholder` and both `placeholder.ts` checks to the text rule `computed || computed === 0`. Re-verify: `pnpm run compile -o dom -d` that template with and without the `${""}`; the walk comments differ for the same DOM shape.

## Error when one program lazily imports the same template with two different `load` triggers

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `getOrCreateHtmlLoadWrapped` | 2026-07-23 | impact:low | effort:low

`getOrCreateHtmlLoadWrapped` caches its wrapper in a per-program map keyed only by `readyId`, so a second lazy import of the same `.marko` silently reuses the first wrapper — including the first import's trigger list — for all its references. The DOM half does not dedupe, so server and client disagree about when the asset loads. `html/assets.ts` › `addAsset` warns about mismatched triggers under MARKO_DEBUG, but the dedupe means the second trigger set never reaches it, so a same-program conflict is silent. Raise a `buildCodeFrameError` when the second import's `LoadImportConfig` differs from the cached one. Re-verify: compile a template importing `./child.marko` with `load: "render"` and with `load: "idle"` — `output: "html"` emits only `$A_withLoadAssets` with no triggers, while `output: "dom"` emits a separate `_load_idle_trigger()`.

## Declare the element-getter `return=` in the `html-comment` / `html-script` / `html-style` type stubs

`packages/runtime-tags/tags/html-comment.d.marko` › `Input` | 2026-07-23 | impact:med | effort:low

All three tags accept a tag variable that resolves to the DOM node — `<html-comment/c><html-script/s><html-style/y>` compiles to `_el_read($scope["#comment/0"])`, `_el_read($scope["#script/1"])`, `_el_read($scope["#style/2"])`, and `core/html-comment.ts` › `analyze` wires it through `trackDomVarReferences`. But `tags/html-comment.d.marko` is only `export interface Input {}` and the script/style stubs only extend `Marko.HTML.*`; none declares a `return=`. Because each tag def sets `types`, language-tools types the tag variable from the stub's Return — which is void — so the variable resolves to `never` and calling it fails with TS2349; add a `return=` to each the way `tags/id.d.marko` does, e.g. `return=(null! as () => Comment)`, `() => HTMLScriptElement`, `() => HTMLStyleElement`. See also "Make `<let>`'s `value` optional in `tags/let.d.marko`; the valueless `<let/x/>` compiles but fails type-check" — the other broken stub in `tags/`, and its `return=(input.value as T)` is the cast pattern these clauses should follow. Re-verify: type-check `<html-comment/c>hi</html-comment>` followed by `<const/x=c()/>`.

## Align the spread `<input>` controllable ladders in HTML `_attrs` and DOM `_controllable_input`

`packages/runtime-tags/src/html/attrs.ts` › `_attrs` | 2026-07-23 | impact:med | effort:med

HTML `_attrs` picks an `<input>`'s controllable from the change handler (`data.checkedChange` → `"checkedValue" in data` → `data.valueChange`); DOM `_controllable_input` (`dom/controllable.ts`) picks it from key presence (`"checked" in nextAttrs || "checkedChange" in nextAttrs` first). A spread of `{ checked: false, value: "x", valueChange(v) {} }` therefore takes the value branch on the server (`value=x` plus a serialized `ControlledType.InputValue`) and the checked branch on the client, whose skip `/^checked(?:Value)?(?:Change)?$/` lets `valueChange` reach `_attr(el, "valueChange", fn)` — a debug throw, and in optimize a stringified attribute with the binding lost. Nothing rejects it earlier: `assertExclusiveAttrs` counts one exclusive attr, and the translator's copy sees only static attributes. Share one predicate between the runtimes and add a spread fixture. The debug-validation half of this same block is tracked in "Give the HTML spread-attrs path the same MARKO_DEBUG validation as the DOM path", whose `assertExclusiveAttrs` move sits at the head of this ladder, so land the predicate extraction with it in mind. Re-verify: render `<input ...attrs>` with those attrs — SSR emits `<input value=x>`, CSR throws inside `_attr`.

## Decode character references in a static `<textarea>` body

`packages/runtime-tags/src/translator/core/textarea.ts` › `preAnalyze` | 2026-07-23 | impact:med | effort:med

`preAnalyze` folds a `<textarea>` body into a synthetic `value` attribute by pushing each `MarkoText` child's raw source into `normalizeStringExpression`, and `_textarea_value` (`html/attrs.ts`) escapes it again: `<textarea>&lt;p&gt;hi</textarea>` compiles to `_textarea_value("&lt;p&gt;hi")` and shows the literal `&lt;p&gt;hi`, while the same body in `<title>`/`<div>` passes through, as it does in Marko 5. Entities are the only way to author literal markup in a text-only tag, so that case is unrepresentable. CSR matches SSR, so the fix is decoding `MarkoText` children at compile time — but `MarkoText.value` is raw source and the only decoder in the tree is `he` under `packages/compiler/node_modules` (~100KB, tree-shaken out today), so it needs a new `babel-utils` export; weigh that cost. Re-verify: compile `<textarea>&lt;p&gt;hi</textarea>` with `-o html` and check the emitted `_textarea_value` literal.

## Emit a custom tag's HTML render call after its attribute tag statements

`packages/runtime-tags/src/translator/util/known-tag.ts` › `knownTagTranslateHTML` | 2026-07-24 | impact:med | effort:med

For a custom tag with both a tag variable and attribute tags under control flow, `translateVar`'s `tag.insertBefore` puts `let menuEl = _myMenu({ item: $item })` ahead of the `let $item; _forOf(…)` statements that `translateAttrs` built and `tag.replaceWithMultiple(statements)` emits, so the render call reads `$item` in its temporal dead zone and SSR throws a ReferenceError. Sequence the call after the attr-tag statements, as the non-tag-variable path already does by pushing it onto `statements`. Only the HTML output is affected — the DOM output calls `_myMenu_input_item` after the loop. Re-verify: compile `<my-menu/menuEl><for|x| of=list><@item label=x/></for></my-menu>` with `pnpm run compile -o html -d`; the `let menuEl = _myMenu(…)` precedes `let $item`.

## Reject assignments to an attribute tag `<for>` param inside an event handler

`packages/runtime-tags/src/translator/util/references.ts` › `trackAssignment` | 2026-07-24 | impact:low | effort:low

`<@item onClick() { x = "y" }>` where `x` is an attribute-tag `<for>` param (`BindingType.local`, from `core/for.ts`) reaches the change-handler branch of `trackAssignment` and compiles to `$scope.$Change("y")`, which nothing ever assigns, so the click throws a TypeError and nothing warns at compile time. Reads of such params work now (`referencedLocalBindingsInFunction`), which makes the silent write failure more confusing. These loops re-run wholesale on input change, so assignment has no reactive meaning; a compile error when `binding.type === BindingType.local` would be cheap and clear. Re-verify: compile that template with `pnpm run compile -o dom -d` and look for `$scope.$Change` in the handler.

## Match the internal `RenderedTemplate` to the published `Marko.RenderedTemplate`

`packages/runtime-tags/src/common/types.ts` › `RenderedTemplate` | 2026-07-27 | impact:low | effort:low

The internal `RenderedTemplate` is `PromiseLike<string> & AsyncIterable<string> & { toReadable() }`, but `ServerRendered` (`html/template.ts`) also implements `pipe`, `catch`, `finally` and a synchronous `toString`, and the published `Marko.RenderedTemplate` in `packages/runtime-tags/index.d.ts` already declares `Promise<string>` plus `pipe` and `toString`. The two have drifted, so anything typed off `common/types` loses `.pipe`/`.catch`/`.finally`; `__tests__/render-result.test.ts` carries a local `ServerResult` intersection for exactly this and should drop it once the internal type matches. Widening is safe: the DOM build's `render` only throws, so only the HTML build ever produces one. Re-verify: in a `.ts` file, type a value as `RenderedTemplate` from `@marko/runtime-tags/common/types` and call `.pipe(process.stdout)` — TS2339.

## Catch effect errors in `runEffects`; a throwing `<script>` escapes `<try>`'s `@catch` and kills every queued effect

`packages/runtime-tags/src/dom/queue.ts` › `runEffects` | 2026-07-27 | impact:med | effort:med

`_enable_catch`'s `runEffects` wrapper only filters destroyed/pending scopes — it never catches — and `run()` calls it outside its own `try`/`finally`, so an error thrown from a `<script>`/`<lifecycle>` body inside `<try>` escapes `mount()` instead of reaching `@catch`, and aborts the flush so every effect queued behind it never wires up. Give the wrapper the per-item `try { fn(scope) } catch (e) { renderCatch(scope, e) }` treatment `runRender` gets; the fix must also flush the catch branch's own effects, which land in the fresh array `run()` already swapped in. Nothing covers this: `try-effects-catch`, `try-effects-catch-state` and `try-effects-async` all throw from render expressions. Re-verify: mount `<try><for|item| of=["a","b","c"]><script>{ order.push(item); if (item === "a") throw new Error("boom") }</script></for><@catch|err|>caught</@catch></try>` in jsdom — `mount()` throws `boom`, `order` is `["a"]`, and no `@catch` content renders.

## Delegate events from the element's root node again; nothing inside a ShadowRoot receives events or controlled-input updates

`packages/runtime-tags/src/dom/event.ts` › `delegate` | 2026-07-27 | impact:med | effort:low

`delegate` installs one capture listener on `document`, replacing the per-`getRootNode()` `createDelegator` dropped for bundle size in 7458238e1a (#3295). At `document` an event from a shadow tree is retargeted to the host, so `handleDelegated`'s `ev.target` parent walk and `controllable.ts` › `handleChange`'s `(ev.target as any)._` both see the host, so every `on*` handler and two-way-bound input inside a `ShadowRoot` is silently dead — a regression of #2352 ("Fix issue with controllable elements inside a shadowroot"). Pass the node from `_on` and `syncControllableFormInput`, register on `node.getRootNode()`, and keep the per-type flag in a map on that root, which also deletes the handler-keyed memo behind "Prefix `delegate`'s registration flag so event types named after `Function` properties register" — that entry's `"$" + type` patch must not land separately if this one is taken. Re-verify: mount a `<let/count=0/>` counter button into a `<div>` inside `host.attachShadow({ mode: "open" })` and into a light-DOM `<div>`, then dispatch a `composed` bubbling `click` on each — light reads `count: 1`, shadow stays `count: 0`.

## Write the dynamic `<style>` marker class with `setAttribute`; a `<style>` inside `<svg>` throws on client render

`packages/runtime-tags/src/dom/dom.ts` › `_style_shell` | 2026-07-27 | impact:med | effort:low

`_style_shell` tags the generated stylesheet with `element.className = id`, but `SVGElement.className` is a readonly `SVGAnimatedString`, so in the runtime's strict-mode ESM that assignment throws `TypeError: Cannot set property className of #<SVGElement> which has only a getter`. `<let/c="red"/><svg><style>circle { fill: ${c}; }</style><circle cx=5 cy=5 r=4/></svg>` compiles to `_style_shell($scope, "#style/0")`, so every client-created render of such a template (a `mount`, or an `<if>`/`<for>` branch) dies before anything is inserted; SSR and resume survive because `html/attrs.ts` › `_style_html` emits `<style class=ID>` as markup and `_style_rule_item` only rewrites `textContent`. Write the marker with `element.setAttribute("class", id)` so both outputs set the same attribute regardless of namespace. Re-verify: mount that template in jsdom — it throws, while the identical `<style>` outside `<svg>` mounts as `<style class="cM_0">`.

## Re-check serialized `$global` values after the first flush; `flushSerializer` latches `hasGlobals` even when it emitted nothing

`packages/runtime-tags/src/html/writer.ts` › `flushSerializer` | 2026-07-27 | impact:med | effort:low

`flushSerializer` sets `state.hasGlobals = true` before calling `getFilteredGlobals`, so a render whose allow-listed `$global` keys are all still `undefined` at the first serializer flush permanently latches "globals already sent" and never re-checks. A value assigned later — e.g. `<const/_=($global.late="LATE")/>` inside `<await>` content — is then dropped from the resume payload, so streaming and non-streaming disagree on identical input. Move the assignment inside an `if (globals)` guard, as the sibling `flushSerializerGlobals` already does; that covers every case where a later flush still has scopes, but a global first defined after the last scope-carrying flush needs an explicit final-flush re-check, since `flushSerializer` returns early when neither `flushScopes` nor `serializer.pending()` holds. Re-verify: render that template with `$global.serializedGlobals=["late"]` and a promise resolving on a later tick — the streamed chunks contain no `[0,{late:…}` entry, while awaiting the same render emits `_=>[0,{late:"LATE"},{n:0},{m:5}]`.

## Isolate `flushTickQueue` callbacks; one render whose sink throws stops progressive streaming for every other concurrent render

`packages/runtime-tags/src/html/writer.ts` › `flushTickQueue` | 2026-07-27 | impact:med | effort:low

One module-level `tickQueue` holds every in-flight render's `onNext`, and `flushTickQueue` runs `cb(true)` in a bare `for…of`, so one sink that throws (`stream.write` in `pipe`, `ctrl.enqueue` in `toReadable`) aborts the loop. The skipped victims stay parked — each set `tick = false` before queueing, `#read` (`html/template.ts`) re-arms only under `else if (tick)`, and `offTick` is a no-op once the queue is cleared — so they lose every later progressive flush and emit one combined chunk at completion, while the error escapes as an uncaught exception. Wrap `cb(true)` in try/catch and rethrow asynchronously, and/or re-arm `tick` from a `finally` in `#read`. Re-verify: `queueTick(() => { throw new Error("boom") })` then `queueTick(() => (ran = true))` leaves `ran` false.

## Splice page assets after the doctype; a page entry with no literal `<head>` writes assets ahead of `<!doctype html>` and the document parses in quirks mode

`packages/runtime-tags/src/html/assets.ts` › `flush` | 2026-07-27 | impact:med | effort:low

`flush` ends with `return result + html`, so as the `$global.__flush__` hook it prepends the page's asset markup to the first chunk; the translator emits `_flush_head()` only at the close of a literal native `<head>` (`translator/visitors/tag/native-tag.ts`), so an entry like `<!doctype html><html><body>…` renders `<link …><script …><!doctype html>…`. A parser ignores a DOCTYPE that follows content, so the document silently falls into quirks mode. Fix in the runtime: skip a leading `<!doctype …>` in `html` before splicing `result` in — assets between the doctype and `<html>` land in the implicit head. Re-verify: render that template compiled with `linkAssets` and wrapped in `withPageAssets(tmpl, runtime, "entry")`, then parse the output with jsdom — `document.compatMode` is `BackCompat` and `document.doctype` is null.

## Give deferred Map/Set call arguments an eager binding — reusing one in a later flush crashes `assignId` on a null parent

`packages/runtime-tags/src/html/serializer.ts` › `writeCallArg` | 2026-07-27 | impact:med | effort:low

`deferCall` moves the remaining Map/Set members into post-construction `.set(...)`/`.add(...)` calls, and `writeCallArg` writes each argument as `writeProp(state, val, null, "")`, so the `Reference` left in `state.refs`/`state.strs` has neither an id nor an accessor path. Serializing that value again in a later flush skips the `pos` fast path and walks `cur.parent!`, which is null, throwing `TypeError: Cannot read properties of null (reading 'id')` out of `stringifyScopes`, which `Boundary.flush` calls unguarded, so the stream dies. `writeArrayArg` and the channel-mutation branch of `writeAssigned` already claim eager ids for this reason; do the same here. Re-verify: with `root.k0 = new Set([40, root, inner])`, `stringifyScopes([[1,{},{value:root}]])` then `stringifyScopes([[2,{},{value:inner}]])` throws; a Map key/value, a long string, or a nested value behave the same.

## Preserve an Error's own enumerable properties through resume — only `message` and `cause` survive

`packages/runtime-tags/src/html/serializer.ts` › `writeError` | 2026-07-27 | impact:med | effort:med

`writeError` emits exactly `new <Ctor>(message[, {cause}])`, so every own enumerable property an application hung on an error — `status`/`code`/`details`, an assigned `name` — is dropped on resume; `writeAggregateError` has the same gap. This is reachable from idiomatic source: `<try><@catch|err|><button onClick() { report(err) }>` compiles to `_scope($scope2_id, { err })`, so the server renders with `err.status === 404` while the resumed handler reads `undefined`, with no diagnostic. Plain objects round-trip all own props and the serializer already preserves `cause` and relinks `AggregateError.errors`, so extend both writers to append the remaining own props, deferring circular ones through `addAssignment` and emitting nothing extra when there are none. Re-verify: `stringifyScopes([[1,{},{value:Object.assign(new Error("boom"),{status:404})}]])` prints `_=>[1,{value:new Error("boom")}]`.

## Escape a carriage return in an attribute value so SSR and CSR agree

`packages/runtime-tags/src/html/attrs.ts` › `attrAssignment` | 2026-07-27 | impact:low | effort:low

`attrAssignment` escapes only `"`, `'` and `&`, but the HTML input-stream preprocessor normalizes every CR and CRLF in an attribute value to a single LF, so `_attr("data-x", "a\rb")` parses back as `"a\nb"` while CSR (`dom/dom.ts` › `_attr` → `setAttribute`) writes the CR verbatim. `_attr`, `_attrs`, `_attr_class` and `_attr_style` all funnel through this escaper, so a controlled `<input value=…>` resumes with a `defaultValue` the server never rendered. Writing `\r` as `&#13;` survives, because character references are decoded after newline normalization. A U+0000 is separately replaced with U+FFFD and cannot be escaped away, leaving only a MARKO_DEBUG warning. This is a different defect from the entry "Escape a carriage return in a `<textarea>` body so SSR and CSR agree", which concerns textarea _text_ content and the `_escape` path rather than this attribute-value escaper — but a complete "CR survives SSR" story needs both landed. Re-verify: parse `"<div" + _attr("data-x", "a\rb") + "></div>"` with jsdom — `getAttribute("data-x")` is `"a\nb"`, while `el.setAttribute("data-x", "a\rb")` keeps `"a\rb"`.

## Escape debug scope accessors that collide with `AccessorProp` — a binding named `_` overwrites the scope's owner pointer

`packages/runtime-tags/src/common/constants/accessor-prop.debug.ts` › `Owner` | 2026-07-27 | impact:med | effort:low

`Owner: "_"` and `Global: "$global"` are the only debug `AccessorProp` values that are legal JS identifiers, and `getScopeAccessor`/`getScopeAccessorLiteral` (`translator/util/references.ts`) use the bare binding name as the accessor when `optimize` is off, so a binding spelled `_` or `$global` clobbers the scope's owner/global pointer. The ignore-this-param idiom `<for|_, i| of=list>` hits it with no diagnostic; production is safe because `decodeAccessor` only emits `[a-z][0-9a-z]*`. Fix by `#`-prefixing the debug `Owner`/`Global` values (`getScopeExpression` in `translator/util/scope-read.ts` then needs a computed member), or by escaping any binding whose debug accessor equals an `AccessorProp` value. Re-verify: `pnpm run compile -o dom -d` on `<let/n=0/><for|_, i| of=["a","b"]><div onClick(){ n = n + 1 }>${_}:${n}</div></for>` emits `_const("_", …)` writing `$scope._` beside reads of `$scope._.n`, and `-o html -d` emits the duplicate key `_scope($scope1_id, { _, _: _scope_with_id($scope0_id) })`.

## Accept the written-out `value=` attribute on `<if>`/`<else-if>`/`<show>` — only the `=` shorthand compiles

`packages/runtime-tags/src/translator/core/if.ts` › `assertHasValueAttribute` | 2026-07-27 | impact:low | effort:low

`assertHasValueAttribute` and its twin in `core/show.ts` (reached from `assertValidShow`) require `t.isMarkoAttribute(valueAttr) && valueAttr.default`, so `<if value=cond>`, `<else-if value=cond>` and `<show value=cond>` are rejected with "requires a `value=` attribute" while the caret sits on source that has one. The parser emits the identical `name: "value"` attribute for both spellings (`packages/compiler/src/babel-plugin/parser.js` › `onAttrName` sets `default: !name`), and `core/let.ts`, `core/const.ts`, `core/log.ts`, `core/debug.ts`, `core/id.ts` and `core/await.ts` all accept both. Relax both asserts to also allow `attr.name === "value"`, and give `flattenTextOnlyConditional` in the same file the same treatment or the text-only chain optimization silently stops applying to the written-out form. Re-verify: `pnpm run compile -o html -d` on `<div><if value=input.x>a</if></div>` fails today, while the shorthand plus `<const/y value=input.a/>` and `<await|v| value=input.p>${v}</await>` compile.

## Make `<let>`'s `value` optional in `tags/let.d.marko`; the valueless `<let/x/>` compiles but fails type-check

`packages/runtime-tags/tags/let.d.marko` › `Input` | 2026-07-27 | impact:med | effort:low

`Input` declares `value: T` as required, but `src/translator/core/let.ts` › `analyze` only requires the tag variable and `translate.exit` falls back to `t.markoAttribute("value", t.identifier("undefined"))`, so `<let/x/>` compiles to `let x = undefined;`. The valueless form is a first-class idiom — eight in-repo fixtures use it, starting with `let-undefined-until-dom` — yet every editor and `mtc` check hard-fails with TS2345 "Property 'value' is missing…", which reads as tag misuse rather than a stub gap; `<const>`'s `analyze` really does throw on a missing value, so `tags/const.d.marko` is correct as-is. Mark it `value?: T` **and** change the return to `return=(input.value as T)`: adding only the `?` widens the return to `T | undefined` and regresses every valued `<let>` (`<let/n=0/>` then `n.toFixed(2)` reports TS18048), while the cast keeps inference intact. The same idiom sits one line over in `valueChange=(input.valueChange as (newValue: K) => void)`, and is the pattern for "Declare the element-getter `return=` in the `html-comment` / `html-script` / `html-style` type stubs" — the other broken `tags/` stub, worth fixing in the same pass. Re-verify with `node_modules/.bin/tsc --noEmit --strict` against a model of the stub: `declare function f<T, K = T>(input: Directives & Input<T, K>): T`.

## Create a native-tag binding when `content=` evaluates confidently; today `<div content=undefined/>` aborts the DOM compile with an internal error

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts` › `analyze.enter` | 2026-07-27 | impact:med | effort:low

`analyze.enter` only creates `kNativeTagBinding` when `node.var || hasDynamicAttributes || hasEventHandlers || textPlaceholders || injectNonce || isDynamicControllable(...)`, and a `content=` value Babel evaluates confidently trips none of them — yet `getUsedAttrs` records it as `staticContentAttr` and `translate.dom.enter` still emits `_attr_content(scope, visitAccessor, value)`. A file containing only `<div content=undefined/>` therefore aborts `-o dom` in debug and optimize with "Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it", while `-o html` compiles — SSR-only checks pass and only the client build breaks. With other setup work present it compiles instead and emits `_attr_content($scope, void 0, undefined)`, whose `undefined` accessor touches stray `"…undefined"` scope keys rather than the tag's. Fix by adding a non-`meta` `content` attribute to the binding gate, or by dropping a confidently void `content` in `analyze.enter` the way the body-wins case already calls `dropNodes(attr.value)`. See also "Enable branch machinery at every `_attr_content` site…" — it is this same static-`content=` emission its translator latch must cover, so the drop-the-void-`content` fix here changes its scope. Re-verify: `pnpm run compile -o dom -d` on exactly `<div content=undefined/>` throws, and prefixing it with `<let/n=0/><button onClick(){ n++ }>go</button>` makes it succeed.

## Reject a `<style>` interpolation inside an unquoted `url()` — the emitted `url(var(--…))` silently invalidates the declaration

`packages/runtime-tags/src/translator/util/style-interpolation.ts` › `checkStyleInterpolations` | 2026-07-27 | impact:med | effort:low

`checkStyleInterpolations` rejects a `${...}` in a selector, at-rule prelude, property name, quoted string and glued to a unit, but not inside an unquoted `url(...)`, where `url(` followed by a non-quote tokenizes as a raw url-token ending at the first `)`, so the substituted `var(--…)` never resolves and the declaration is dropped. `<style>.a { background: url(${x}); }</style>` compiles with no diagnostic and extracts `.a { background: url(var(--M_…)); }`; `image-set(url(${x}) 1x)` behaves the same, and the core-tag docs list only the other illegal positions, so an author cannot discover it. The function already tracks `groupDepth`, so record whether a group was opened by a `url` ident and throw a `styleStringMsg`-family error pointing at moving the whole `url(...)` into the interpolated value or at `html-style`. Re-verify: `pnpm run compile -o html -d` on `<let/x="a.png"/>` plus `<style>.a { background: url(${x}); }</style>` succeeds today, while the same file with `.a::after { content: "${x}"; }` fails with the "is not substituted inside a quoted CSS string" error.

## Use the cooked value, not `raw`, for a single-quasi template-literal tag name

`packages/runtime-tags/src/translator/util/get-tag-name.ts` › `getTagName` | 2026-07-27 | impact:low | effort:low

`analyzeTagNameType` classifies a single-quasi `TemplateLiteral` tag name as `TagNameType.NativeTag` (a supported form, covered by the `native-tag-name` fixture), but `getTagName` returns `quasis[0].value.raw`, so escape sequences in the name are never decoded and reach the emitted markup verbatim with no diagnostic. Reading `quasis[0].value.cooked` is the whole fix: `cooked` is always populated here because an invalid escape in an untagged template literal is already a hard parse error, and the only consumer that emits the value as markup is `visitors/tag/native-tag.ts`. Re-verify: compile a file whose only line is ``<${`h\x31`}>hi</>`` with `-o dom -d` and read `$template` — it says `<h\x31>` where it should say `<h1>`.

## Route `tagNameLoad` through the compat dynamic-tag path when a Tags-API parent lazily imports a Class-API child

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `translate.exit` | 2026-07-27 | impact:med | effort:med

`analyzeTagNameType` downgrades a custom tag whose child template is Class API to `TagNameType.DynamicTag` but leaves `extra.tagNameLoad` attached, so `translate.exit`'s DOM branch still sees `allKnownTagReferences` and deletes the whole `import Child … with { load: … }`, while the compat dynamic-tag path never reads `tagNameLoad` and emits a bare `$dynamicTag($scope, Child, …)`. `Child` is left undeclared, so `$setup` throws `ReferenceError` at first render with zero diagnostics, and every `fixtures-interop/lazy-class-child*` fixture uses a Class parent, so this direction is uncovered. Either wire `tagNameLoad` into the compat path or `buildCodeFrameError` in `analyze` when a `load` import resolves to a Class-API template. Re-verify: compile a `<!-- use tags -->` parent holding that import plus `<Child value=1/>` against a `class {}` child with `{ output: "dom", linkAssets, translator: "marko/translator" }`; Babel puts `Child` in the Program scope's `globals`, empty with a Tags-API child.

## Bound `getTagsDir` at the package root — an ancestor directory named `tags` breaks every Class API template under it

`packages/runtime-tags/src/translator/interop/feature-detection.ts` › `getTagsDir` | 2026-07-27 | impact:med | effort:low

`getTagsDir` scans the whole absolute filename right-to-left for a `tags` segment with no upper bound, while `packages/compiler/src/taglib/finder/index.js` › `find` stops its own walk at the nearest package root (`rootPkg.__dirname`, else `markoModules.cwd`). When they disagree, `isTagsAPI` records the synthetic `Template file within a tags directory` feature and any Class API construct then throws `Cannot mix Tags API and Class API features in the same file`, so a package named `tags` cannot compile one Marko 5 template and the only workaround is renaming the directory. Bound the scan at the same package-root boundary, and give the synthetic feature a real location — today it prints an empty code frame (`fixtures-interop/error-class-tags-dir/__snapshots__/error-compile-html.txt`). Re-verify: `class {}` + `<h1>hi</h1>` at `<tmp>/packages/tags/src/page.marko` beside a `package.json` fails `-t class -o html -d` with the mixing error, while renaming `tags` to `tag` compiles the identical file.

## Restore the enclosing whitespace-preservation state when a preserve-whitespace tag closes

`packages/compiler/src/babel-plugin/parser.js` › `parseMarko` (the `preservingWhitespaceUntil` slot) | 2026-07-27 | impact:low | effort:low

`preservingWhitespaceUntil` is a single slot: `onOpenTagName` overwrites it with the current tag node whenever `parseOptions.preserveWhitespace` is set, and `onCloseTagEnd` clears it to `undefined` instead of restoring what it held before. `<textarea>`, `<script>` and `<style>` all nest legally inside `<pre>`, so `<pre>A   B` / an indented `<textarea>t</textarea>` / `C   D` / `</pre>` collapses everything after the nested tag down to a single space plus `C D` — silent corruption inside a `white-space: pre` element, on `-t class` too since the parser is shared. The slot is also seeded from the file-wide `htmlParseOptions.preserveWhitespace`, so under that option the first such tag disables preservation for the rest of the file. Save the previous value in `onOpenTagName` and restore it in `onCloseTagEnd`. Re-verify: `-o html -d` on that file emits `<textarea>…</textarea> C D</pre>`, while swapping the `<textarea>` for a `<span>` keeps `C   D` intact.

## Pass the attribute value's end offset when parsing it — a bad attribute value swallows the rest of the file

`packages/compiler/src/babel-plugin/parser.js` › `onAttrValue` | 2026-07-27 | impact:med | effort:low

`onAttrValue` and `onAttrSpread` call `parseExpression(file, raw, part.value.start)` without the `sourceEnd` every sibling handler passes, so on failure `createParseError` (`babel-utils/parse.js`) sets `source` to the whole remainder of the file and leaves `node.end` undefined. `output:"source"`/`"migrate"` then print `MarkoParseError` as `this.token(node.source)`, re-emitting everything after the bad attribute twice — and `isSource` returns before the parse-error check in `babel-plugin/index.js`, so a formatter or codemod doubles the file even without `errorRecovery`. `getBoundedRange` also drops Babel's real location, so a multi-line attribute value reports "Unexpected token" at its opening paren while the same mistake inside `${…}` points at the offending token. Pass `part.value.end` at both call sites and in `withWrappedAttrValueHint`'s probe. Re-verify: `compileSync("<div foo=(1+)>hi</div>\n<span>tail</span>", "x.marko", { output: "source", translator: … })` prints the template twice; the `${1+}` control round-trips once.

## Use the trimmed length, not `rawValue.length`, for a text node's end offset in `onText`

`packages/compiler/src/babel-plugin/parser.js` › `onText` | 2026-07-27 | impact:med | effort:low

The deferred `onNext` closure re-locates a trimmed text node with `end: trimmedStart + rawValue.length`, but `trimmedStart = part.start + rawValue.indexOf(value)` already skipped the removed leading whitespace, so the end overshoots by exactly the number of trimmed leading characters. Every text node preceded by a newline plus indentation — normal formatting — is affected, corrupting consumers of text-node ranges: editor tooling, codemods, and the source maps emitted for `output: "source"`/`"migrate"`, where a deeply indented trailing text node pushes the end past EOF. The fix is `end: trimmedStart + value.length`, symmetric with the start. Re-verify: compile `"<div>\n    hello\n</div>"` with `{ output: "source", ast: true }`; the `MarkoText` value is `"hello"` but its `loc` (2:4 → 3:5) spans `"hello\n</div"`.

## Skip the source printer's reindent for whitespace-preserving tags

`patches/@babel__generator@7.29.7.patch` › `MarkoTag` | 2026-07-27 | impact:med | effort:med

The patched `MarkoTag` printer wraps every non-void body in `newline(1)`/`indent()`/`dedent()` plus a trailing `newline(1)`, guarded only by `voidElements`, `svgElements` and the concise `style`/`script` forms — never by the `parse-options.preserveWhitespace` tags (`pre`, `script`, `style`, `textarea`) declared in `packages/compiler/src/taglib/marko-html.json`. Those bodies render verbatim, so `output:"source"`/`"migrate"` silently rewrites user content and never reaches a fixed point, and `packages/runtime-class/bin/markoc.js --migrate` rewrites each file in place. Add a `preserveWhitespaceElements` set beside `voidElements` and print those bodies with no newline/indent (the concise `style { … }` branch is the shape to copy); the committed `packages/runtime-class/test/translator/fixtures/{textarea-tag,white-space-test}/snapshots/generated-expected.marko` already bake the extra whitespace and need refreshing. Re-verify: round-tripping `<textarea>abc</textarea>` through `output:"source"` turns the `output:"html"` result's `_textarea_value("abc")` into `_textarea_value("  abc\n")`.

## Merge instead of replace the attribute a `"@x <x>"` shorthand already declared

`packages/compiler/src/taglib/loader/loadTagFromProps.js` › `TagLoader["*"]` | 2026-07-27 | impact:med | effort:low

For each non-repeated nested tag the `<`-branch unconditionally adds `loadAttributeFromProps(nestedTag.targetProperty, {type:"object"})`, and `Tag.addAttribute` assigns straight into `this.attributes[attr.name]`, so `"@label <label>"` clobbers the attribute the `@`-half just built, discarding `type`, `required`, `default-value`, `description` and `autocomplete`. That is compile-time behavior — `packages/runtime-class/src/translator/tag/util.js` reads `defaultValue`/`required` — so `"@label <label>": {"type":"string","default-value":"L","required":true}` emits no default and no "attribute is required" error where plain `"@label"` does both, and core `<await>`'s `"@then <then>"` loses its autocomplete. Nearby, `nestedTag.targetProperty = attrProps.targetProperty || nestedTagTargetProperty` reads only the camelCase key, dropping the dashed `"target-property"` spelling the longhand `nested-tags` form accepts. Synthesize `{type:"object"}` only when the `@`-half declared none, and take the target property from the already-loaded `nestedTag`. Re-verify: `buildLookup("packages/runtime-class/test","marko/translator").getTag("await").attributes.then` is type `object` with no `autocomplete`, while sibling `name` keeps its own.

## Key the taglib finder cache on the tag-discovery dirs

`packages/compiler/src/taglib/finder/index.js` › `find` | 2026-07-27 | impact:med | effort:low

`find(dirname, registeredTaglibs, tagDiscoveryDirs)` caches as `findCache[dirname]`, but both the walk and the cached `exclusiveTagDiscoveryDirs` depend on the ignored arguments — `tagDiscoveryDirs` is `["tags"]` for `@marko/runtime-tags/translator` and `["tags","components"]` for the interop `marko/translator`. In any process compiling with both (language server over a mixed Marko 5/6 workspace, codemod, test harness) whichever translator reaches a directory first freezes it for the other, silently: `exclusiveTagDiscoveryDirs` feeds `isTagsAPI` (`packages/runtime-tags/src/translator/interop/feature-detection.ts`), so a Class API template compiled after any Marko 6 compile emits Marko 6 codegen against `@marko/runtime-tags/debug/html`, and a `components/`-only tag stops resolving. Fold `tagDiscoveryDirs` and the registered-taglib set identity into the cache key. Re-verify: in a dir holding `package.json`, `tags/` and `components/`, compiling `<div/>` with `marko/translator` requires `marko/src/runtime/html/index.js` alone but `@marko/runtime-tags/debug/html` when preceded by a `@marko/runtime-tags/translator` compile; `taglib._finder.clearCache()` between them restores it.

## Clear the memoized per-translator taglib list in `taglib.clearCaches()`

`packages/compiler/src/taglib/index.js` › `clearCaches` | 2026-07-27 | impact:med | effort:low

`buildLookup` memoizes the whole `registeredTaglibs.concat(translator taglibs)` array per translator object in the module-level `loadedTranslatorsTaglibs` Map, but `clearCaches()` resets only `loader`, `finder` and `lookupCache`. A taglib installed through the public `taglib.register(id, props)` is therefore dropped forever for any translator already used: register before the first compile and the tag resolves, register after and every later compile fails with `Unable to find entry point for custom tag` even though `register()` succeeded and the documented cache clear ran. `9dc4d07d1b` deliberately kept that concat outside the memo; `4fc38e8001` moved it in. Clear `loadedTranslatorsTaglibs` in `clearCaches` and invalidate it from `register`, or move the `registeredTaglibs` half back out. Re-verify: after one `buildLookup(d, "@marko/runtime-tags/translator")`, then `register` plus `clearCaches`, `getTag("late-tag")` is still undefined, while the same lookup against a spread copy of the translator module resolves it.

## Restore the dead `.js` preference in the tag-directory file scan

`packages/compiler/src/taglib/loader/scanTagsDir.js` › `getPath` | 2026-07-27 | impact:med | effort:low

`getFileMap` keys each basename by extension including the leading dot (`fileMap["index"][".js"]`), but `getPath` guards with `if (file.js) return file[".js"]` — `file.js` is never assigned, so that branch is unreachable and resolution falls through to `for (let key in file) return file[key]`, returning whichever extension `readdirSync` listed first. This governs every extensionless `searchFiles` entry (`renderer`, `index`, `migrate`, `transform`, `translate`, `parse`, `node-factory`, `code-generator`), so `components/foo/{index.js,index.css}` silently compiles to `require("./components/foo/index.css")` as the renderer and only fails at bundle or render time; templates are unaffected because `.marko`/`.html` names match by full filename through `__path`. Read `file[".js"]` and replace the `for...in` fall-through with an explicit extension-preference list. Re-verify: with `components/my-widget/{index.js,index.css}` and `<my-widget/>` in `page.marko`, `pnpm run compile -t class -o html -d page.marko` names `my-widget/index.css`; deleting the CSS makes the identical source name `index.js`.

## Reject arguments-plus-body on custom tags — the `node.body.length` check is dead

`packages/compiler/src/babel-utils/assert.js` › `assertAttributesOrArgs` | 2026-07-27 | impact:med | effort:low

The guard is `args.length && (node.attributes.length > 0 || node.body.length)`, but `MarkoTag.body` is a `MarkoTagBody` whose children live in `.body.body`, so `.body.length` is always `undefined` and only the attributes half fires. On the custom-tag path (`runtime-tags/src/translator/visitors/tag/custom-tag.ts` › `analyze.enter` → `assertAttributesOrSingleArg`) a single argument replaces the whole input object, so `<my-tag("a")>hi</my-tag>` compiles to `_myTag("a");` with the body silently dropped, while `<my-tag("a") class="b">hi</my-tag>` correctly errors and `<MyTag(1)>hi</MyTag>` emits `MyTag.content(1)`. Do not simply switch to `node.body.body.length` — `assertAttributesOrArgs` is also the dynamic-tag guard, and `fixtures/dynamic-tag-args-null-fallback` (`<${x}(1, 2)>Fallback Body</>`) deliberately pairs arguments with a body. Move the body check into `assertAttributesOrSingleArg` (sole caller `custom-tag.ts`), rejecting `node.body.body.some((child) => child.type !== "MarkoComment")`, and add an error fixture beside `fixtures/custom-tag-args-and-attributes-error`. Re-verify: compiling `<my-tag("a")>hi</my-tag>` writes a file whose only tag call is `_myTag("a");` with `hi` nowhere in it.

## Forward `restOffset` wherever an array rest's binding is re-created

`packages/runtime-tags/src/translator/util/references.ts` › `createBindingsAndTrackReferences` | 2026-07-27 | impact:med | effort:med

`restOffset` is assigned only in the `Identifier` case, so every path that re-creates a rest's binding drops it — the `ObjectPattern`/`ArrayPattern` cases reuse `upstreamAlias` verbatim when `property === undefined`, and `trackVarReferences` forwards `excludeProperties` but not `restOffset`. `<const/[first, ...[second, third]] = arr/>` then compiles in DOM to `$second` reading `$scope.first` and `$third` reading `$scope.arr[1]` (`1|1|2` vs HTML's `1|2|3`); `<for|a, ...[b, c]|>` maps `c` to `#LoopKey`; `<const/copy = rest/>` takes `getSignalFn`'s object-rest branch, so `copy.length` reads `$scope.arr.length`. All are silent SSR/CSR divergence with no diagnostic. Set `restOffset` in the pattern cases and thread it through `trackVarReferences`. Re-verify: `pnpm run compile -o dom -d` on the nested-rest template emits `_text($scope["#text/1"], $scope.first)` for `$second`.

## Hand the raw `value` to `_attr_input_value`'s default helper

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_input_value` | 2026-07-27 | impact:med | effort:low

`_attr_input_value` passes `normalizeAttrValue(value) || ""` to `setDefault`, but the attribute-backed defaults (`_attr_input_value_attribute_default`, and the attribute arm of `_attr_input_value_dynamic_default`) write it through `_attr`, which removes the attribute only for `undefined`. A void `value` therefore renders `value=""` in CSR while `html/attrs.ts` emits no attribute, so a checkbox or radio submits `""` client-side and the spec default `"on"` server-side. The idiomatic `<input type="checkbox" value:=v/>` compiles straight to `_attr_input_value(…, _attr_input_value_attribute_default)`, and no test covers it. Pass `value` rather than `normalizedValue` to `setDefault`; `_attr_input_value_default` re-normalizes anyway. Re-verify: under jsdom call `_attr_input_value({"#i":el},"#i",undefined,()=>{},_attr_input_value_attribute_default)` — the element becomes `<input type="checkbox" value="">` against an empty SSR string.

## Re-apply a controlled `<select>`'s value when its options arrive

`packages/runtime-tags/src/dom/controllable.ts` › `_attr_select_value_script` | 2026-07-27 | impact:high | effort:low

The `observeOnce({ childList: true, subtree: true })` callback treats any divergence between the live select and the controlled value as a user change and reports `getSelectValue(el)` through `valueChange`. When a controlled select's options arrive after mount — fetched data, a `<for>` that resolves later — the browser auto-selects the first option, so the observer silently replaces the value the app asked for, with no error. Inside the callback, capture the fallback first, re-apply the controlled value with `setSelectValue`, and fall through to `onChange` only when it still did not take (`el.selectedIndex < 0`; `el.selectedOptions.length !== value.length` for `multiple`) so fixture `controllable-select-mutated-option` still reports a re-added option. Re-verify under jsdom: `_attr_select_value(scope,"#s","b",fn)` + `_attr_select_value_script(scope,"#s")` on an empty `<select>`, then append options a/b/c — `fn` fires with `"a"`.

## Mint `<id>`'s fallback once per scope

`packages/runtime-tags/src/translator/core/id.ts` › `translate.exit` | 2026-07-27 | impact:med | effort:med

For DOM, `translate.exit` folds the fallback into the derived signal itself (`value || _id($scope)`) and `_id` bumps a per-`$global` counter, so a nullish `value` mints a new id every time that signal recomputes — unlike valueless `<id/x/>`, which calls `_id` once from `$setup`. `<id/x=input.id>` is what `cheatsheet.md` recommends for reusable tags, so a caller omitting the id gets an identifier that changes on every update, never matches the resumed server id, and leaves outside references (CSS, `aria-*`, focus targets) stale. Mint it at setup and have the signal read that slot, leaving the HTML branch alone; keep `||`, since `tags/id.d.marko` types `value` as `string | null | false`. Fixture `id-tag` covers only the valueless form. Re-verify: mount compiled `<id/x=input.id>` + `<div id=x>` under jsdom and `update({ id: undefined, n })` twice — `id` goes `cM_0`, `cM_1`, `cM_2`.

## Extend `<for>`'s `by=` loop-param check past bare identifiers

`packages/runtime-tags/src/translator/core/for.ts` › `analyze` | 2026-07-27 | impact:med | effort:low

The guard is `byAttr?.type === "Identifier" && !tag.scope.getBinding(...)`, so it fires only for a bare `by=item` (fixture `error-for-by-param`). The commoner React/Vue spelling `by=item.id` is a MemberExpression and slips through, as does a template literal, and since `by=` is emitted outside the iteration callback both targets reference an undeclared binding — HTML emits `_for_of(input.items, item => {…}, item.id, …)`, DOM emits `$for($scope, [input_items, item.id])`. Both compile clean and throw at first render, so the mistake surfaces as a 500 or a broken bundle instead of a code frame. Walk the whole `by=` expression for identifiers resolving only to `tag.node.body.params` (never `tag.scope`), reuse the existing message, and extend `error-for-by-param`. Re-verify: compile `<for|item| of=input.items by=item.id>` with `-o html` (succeeds) and render it — `ReferenceError: item is not defined`.

## Match `undefined`, not `null`, in `shallowClone`'s constructor switch

`packages/compiler/src/babel-plugin/index.js` › `shallowClone` | 2026-07-27 | impact:low | effort:low

`shallowClone` copies `metadata.marko` from the cached analyze file into each output's translate metadata by dispatching on `v.constructor`, but the `case null:` arm beside `case Object:` is dead — a prototype-less object has `constructor === undefined`. An `Object.create(null)` metadata value therefore hits `default` and aborts the compile with `TypeError: Cannot read properties of undefined (reading 'name')` out of `Ctor.name` instead of being spread-cloned. Fix: `case undefined:` plus `Ctor?.name ?? "null prototype object"` in the default message, and keep the `for (const key in data)` loop string-keyed — symbol metadata such as `IMPORTS_KEY` must not cross analyze→translate. Re-verify: `compileSync` any template with a translator whose analyze visitor sets `file.metadata.marko.custom = Object.create(null)`; it throws today, while `{}` clones fine.

## Rewrite the `<tag-name>` shorthand in `export ... from` position, or reject it

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `default` | 2026-07-30 | impact:med | effort:low

The `<tag-name>` shorthand is rewritten only by the `ImportDeclaration` visitor (`resolveTagImport`, then `node.source.value = tagImport`); the translator has no export-declaration visitor, so `export { byDueDate } from "<table-sorts>"` is emitted verbatim with its angle brackets in both `-o html` and `-o dom` and with no diagnostic, surfacing later as a module-resolution error against generated code. Analysis already follows the shorthand here: `resolveRegisteredExport` in `visitors/function.ts` walks `ExportNamedDeclaration`/`ExportAllDeclaration` sources via `loadFileForImport`, which resolves `<tag>`. Direction: run `resolveTagImport` over an export declaration's `source` too, or raise a `buildCodeFrameError` naming the relative form if shorthand re-export is not meant to be supported. Re-verify: `pnpm run compile -o html -d tags/sort-barrel.marko` whose only line is `export { byDueDate } from "<table-sorts>"` still emits that specifier unchanged, while the `import` form emits `./table-sorts.marko`.

## Queue pending `onNextSibling` callbacks in the inline reorder runtime

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts` › `REORDER_RUNTIME_CODE` | 2026-07-10 | impact:low | effort:med

`runtime.x` keeps a single `nextSibling`/`onNextSibling` pair. A `<t hidden>` swap callback pending on that element's next sibling is silently dropped if, while walking the `<t>`'s children, a placeholder-end comment (`!id`) hits the `runtime.l[id] && placeholders[id]` branch and reassigns the pair — the outer swap then never fires and hydration freezes. Current server flush ordering appears to keep this unreachable, so this is robustness, not a live bug: fire the pending callback before reassigning (or queue), weighed against inline-runtime bytes. Re-verify: read `REORDER_RUNTIME_CODE` and confirm both the `op == "!"` and `<t>` branches assign `nextSibling`/`onNextSibling` without first draining a pending one.

## Escape a carriage return in a `<textarea>` body so SSR and CSR agree

`packages/runtime-tags/src/html/attrs.ts` › `_textarea_value` | 2026-07-27 | impact:low | effort:low

`_textarea_value` writes the value as element text and the HTML tokenizer normalizes every CR and CRLF in text to a single LF, so a `\r` anywhere — not just at the start, which commit a6acdde917 already handles — is lost: `"a\rb"` and `"a\r\nb"` both parse back to `defaultValue === "a\nb"`. CSR keeps the CR, since `_attr_input_value_default` (`dom/controllable.ts`) assigns `el.defaultValue` verbatim and `_attr_input_value_script` seeds the resumed `ControlledValue` from `el.defaultValue`, so a resumed controlled `<textarea>` holds a different string than a client-rendered one. Writing `\r` as `&#13;` survives, because character references are decoded after newline normalization; weigh that against the bytes it costs every textarea. The attribute-value escaper has the identical gap in the entry "Escape a carriage return in an attribute value so SSR and CSR agree" — a separate fix in `attrAssignment` rather than this `_escape`-based path, but landing only one still leaves a resumed controlled `<input value=…>` diverging from its client-rendered twin. Re-verify in jsdom: `<textarea>a\rb</textarea>` reports `defaultValue === "a\nb"`, `<textarea>a&#13;b</textarea>` reports `"a\rb"`.

## Renumber alias bindings too, or stop using `Binding.id` as the `bindingUtil` identity tiebreak

`packages/runtime-tags/src/translator/util/references.ts` › `finalizeReferences` | 2026-07-23 | impact:med | effort:med

`bindingUtil.compare` returns `0` for two distinct bindings sharing `section.id` and `id` (its `type` tiebreak applies only to a dom/non-dom pair), and `Sorted.add`/`find`/`has` treat `0` as identity. But `binding.id = nextId++` renumbers only bindings in `section.bindings`, which is filled with `getCanonicalBinding(binding)`, so a pure alias (`property` and `excludeProperties` both `undefined`) keeps its creation-order id and can collide with a renumbered section-mate. `dropReferencedBindings`, run afterwards by `getReferenceFinalizers()` and rebuilding `referencedBindings` with `bindingUtil.add`, then collapses the pair and drops a real dependency — latent today, since no fixture miscompiles. Renumber aliases alongside their canonical (or into a disjoint range), or give `Binding` a separate identity field. Re-verify: wrap `bindingUtil.compare`, compile `__tests__/fixtures/param-destructure-default/template.marko`, group by `(section.id, id, type === dom)` — section 1 id 6 holds `$foo` (param alias) and `$bar` (derived), and `compare` returns `0`.

## Give a hidden `<show>` a wrapper legal in table/select insertion contexts

`packages/runtime-tags/src/html/writer.ts` › `_show_start` | 2026-07-28 | impact:med | effort:high

`_show_start` wraps non-displayed content in `<t hidden>`, which table/select insertion modes discard while keeping its children, so `translator/core/show.ts` › `assertLegalHiddenContext` now rejects `<show>` directly inside `<table>`/`<tbody>`/`<tr>`/`<colgroup>`/`<select>`/`<optgroup>` (predicate: `translator/util/insertion-context.ts` › `discardsWrapperChildren`). That diagnostic only stops the silent mis-render; the docs still recommend `<show>` for bulky markup, which is often a table body. No ordinary element is legal in both contexts — `<template>` is the sole candidate, but its children sit on `.content`, so the resume walker and `_show`'s `<t>`-dissolve path must reach through it first; a narrower option sets `hidden` on each statically known top-level body node. The same `<t hidden>` hazard applies to the reorder wrapper `Chunk.flushScript` writes — see "Wrap reordered out-of-order content in a parser-context-legal container" — so whichever lands first sets the container precedent for both emit sites. Re-verify: delete the `assertLegalHiddenContext` call and run `pnpm run test:update -- --grep "runtime-tags/translator error-show-tag-in-table "` — `render.debug.md` shows the row inside the table despite `show=false`.

## Lower (or reject) `for (x of …)` / `for (x in …)` writes to a tag variable — they bypass the signal

`packages/runtime-tags/src/translator/util/signals.ts` › `replaceAssignedNode` | 2026-07-23 | impact:low | effort:med

`replaceAssignedNode` rewrites only `AssignmentExpression` and `UpdateExpression`, so a `ForOfStatement`/`ForInStatement` whose `left` is a bare tag variable falls through to `getReadReplacement` (`util/references.ts`) and compiles to a plain scope read. `<let/x="a"/>` with `<button onClick(){ for (x of ["b","c"]) {} }>` emits `for ($scope.x of ["b", "c"]) {}`, mutating the scope slot without calling the `_let` signal, so nothing schedules a render and `${x}` keeps the stale value — no diagnostic in either output mode (`for (x in …)` is identical). Either mark for-of/for-in targets as assignments during reference analysis and route them through the binding's assignment builder, or raise a compile error naming the unsupported construct. Re-verify: `pnpm run compile -o dom -d f.marko` on that template emits `for ($scope.x of …)` with no `$x(` call in the handler.

## Give a real diagnostic for two-way binding a computed-key destructured param

`packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts` › `getChangeHandlerFromObjectPattern` | 2026-07-23 | impact:low | effort:low

For a `computed === true` object-pattern property this appends a synthetic property keyed `t.binaryExpression("+", parent.get("key").node, t.stringLiteral("Change"))`, which `createBindingsAndTrackReferences` (`translator/util/references.ts`, ObjectPattern case) always rejects with "Only identifier and string literal keys are supported when destructuring." — so the branch can never produce a compilable template. It is reachable only for a computed string-literal key, and the error attaches to the loc-less synthetic node, so the caret covers the whole `<define>` tag and never mentions two-way binding; the key node is also reused without `t.cloneNode`. Fix: normalize a computed string-literal key to a plain key before synthesizing (and clone it), or throw a targeted diagnostic like the sibling array-pattern message. Re-verify: `<define/Wrap|{ ["a"]: val }|><input value:=val/></define>` fails today; deleting `value:=val` compiles.

## Carry the Class-API compat boundary mode per call site instead of downgrading the whole program

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `pushCompatRegistration` | 2026-07-27 | impact:low | effort:med

`preserveBoundary` is a per-call-site decision (`!tagsSerializeReason && …`), but `s(id, renderer, mode)` is emitted once per renderer and `boundaryModeByRenderer` in `packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js` is keyed by renderer too. The order-dependence is fixed (commit fe76065063): any call site that cannot preserve truncates the emitted call to two arguments for the whole program, and `register` keeps a plain `true` sticky across modules. That fix is a downgrade, so one updating call site costs every inert call site of that class its split-component optimization. Carrying the mode on the per-call-site `_dynamic_tag` invocation would keep both, at the cost of a parameter every dynamic tag pays for — measure before taking it. Re-verify: `interop-mixed-boundary-split-tags-to-class` emits `s(…, renderer)` with no `"preserve"`, while `interop-self-interactive-split-tags-to-class` still emits it.

## Enable branch machinery at every `_attr_content` site; it creates branches without it

`packages/runtime-tags/src/dom/dom.ts` › `_attr_content` | 2026-07-23 | impact:low | effort:med

`_attr_content` — reached from `_attrs_content`/`_attrs_partial_content` (a native-tag spread carrying `content`) and from a plain static `content=` on a native tag — creates a live branch via `setConditionalRenderer(…, createAndSetupBranch)`, yet it is the only client branch creator that never reaches `enableBranches()`; `_if`, `_show`, `_dynamic_tag`, `_dynamic_tag_content`, `loop` all call it in their factory and `<try>`/`<await>` get it through `_enable_catch`. Without it `skipDestroyedRenders()` (queue.ts) is never installed — the only guard stopping a queued render from running on a scope inside a destroyed branch, and `setConditionalRenderer` does `destroyBranch` the previous content branch — and `branchesEnabled` stays unset, so `initScope` never links a resumed scope's serialized `#ClosestBranchId` and branch-visit processing is skipped. The enable must run at module eval (before resume processes visits), so emit it from the translator, in the shape of the existing top-level `_enable_catch()`, at all three DOM-output sites in `visitors/tag/native-tag.ts`: the `_attrs_content`, `_attrs_partial_content` and `_attr_content` render statements (the HTML-output emissions in the same file need nothing). While there, `_attr_content` duplicates `_dynamic_tag_content` almost verbatim (same renderer-id compare, `setConditionalRenderer`, `subscribeToScopeSet`, `LocalClosures` loop); they differ only in shape — `_dynamic_tag_content` is a signal factory that decodes the accessor once, `_attr_content` is an inline per-render call — so routing one through the other closes the gap and drops a copy. `dom/compat.ts` › `render` has the same omission; and the plain `content=` site cannot be verified until "Create a native-tag binding when `content=` evaluates confidently…" lands, since a static-`content=` fixture aborts the DOM compile today. Re-verify: `node -r ~ts scripts/inspect-compiled-output.mts -o dom -d` on `<define/Wrap|input|><div ...input/></define>` plus `<Wrap class="x"><b>x</b></Wrap>` — the imports are exactly `_attrs_content, _attrs_script, _content, _script, _const, _template`, none of which enables branches, yet a `BranchScope` is created at mount.

## Preserve object key order when a circular property is deferred

`packages/runtime-tags/src/html/serializer.ts` › `writeObjectProps` | 2026-07-27 | impact:low | effort:med

When a property's value is circular, `writeProp` returns false, `writeObjectProps` pops the already-pushed `key:` chunk, and `writeAssigned` re-creates it at the end of the payload, moving it last in key order. Plain objects are the only container that reorders: `writeArray` keeps the slot so the assignment fills the hole in place, and `writeMap`/`writeSet` defer every later entry once one defers. Order is observable through `common/for.ts` › `forIn` (a `for…in`), so `<for|k,v| in=obj>` renders one order on the server and another after resume. Match the array behavior by leaving an `undefined` placeholder (`key:$`, setting `state.wroteUndefined`) when the failed write queued an assignment, which needs `writeProp`'s return to separate "deferred" from "elided". Re-verify: `const o={title:"t",self:null,count:3}; o.self=o;` stringifies to `_=>(_([1,{graph:_.a={title:"t",count:3}}]),_.a.self=_.a,0)`.

## Ignore `MarkoComment` children in `assertNoBodyContent` — a comment-only `<attrs>`/`<effect>` body is a hard compile error

`packages/runtime-tags/src/translator/util/assert.ts` › `assertNoBodyContent` | 2026-07-27 | impact:low | effort:low

`assertNoBodyContent` tests `tag.node.body.body.length` raw, but Marko comments survive in `body.body` until `visitors/comment.ts` › `translate.exit` calls `comment.remove()`, so `<attrs/{ a }><!-- todo --></attrs>` and `<effect() { … }><!-- todo --></effect>` both fail with "does not support body content" even though an empty or whitespace-only body compiles. Those two are the only reachable callers: the other seven (`const`, `let`, `id`, `return`, `log`, `debug`, `lifecycle`) set `parseOptions.openTagOnly` so the parser rejects the close tag first, and `<script>` sets `parseOptions.text`. `translator/util/is-only-child-in-parent.ts` › `getOnlyChildParentTagName` already filters `node.type !== "MarkoComment"` for exactly this kind of body-length test; `tag.node.body.body.some((child) => child.type !== "MarkoComment")` here matches it. Re-verify: `pnpm run compile -o html -d` on `<effect() { console.log(1) }>`, an indented `<!-- todo -->`, then `</effect>` prints "does not support body content", while deleting only the comment line compiles.

## Fold `analyzedTags` into the compile cache's mtime invalidation

`packages/compiler/src/babel-plugin/index.js` › `getMarkoFile` | 2026-07-27 | impact:low | effort:med

`getMarkoFile` invalidates a cache entry on its content hash or a newer mtime among `metadata.marko.watchFiles`, which holds only taglib JSON and plugin paths; the child `.marko` templates analysis read go to `metadata.marko.analyzedTags`, which the loop ignores, so a shared cache serves a stale parent after a child edit. Reach is narrow — `@marko/vite` clears `baseConfig.cache` on every hot update — leaving `@marko/compiler/register` and direct `compile[Sync]` reuse. Any fix has to be transitive, so every cache hit would stat the whole subtree. Re-verify: `compileSync` one parent twice through a single `new Map()` cache, rewriting its child from `<return=1/>` to a stateful `<let/x=1/><button onClick(){x++}/><return=x/>` in between — output stays byte-identical with no `_el_resume`, while a fresh cache emits it.

## Round-trip `Intl.DateTimeFormat` through a form that preserves `month`/`weekday`, not `resolvedOptions()`

`packages/runtime-tags/src/html/serializer.ts` › `writeIntl` | 2026-07-31 | impact:med | effort:med

`Intl` serialization (added in #3566) rebuilds a formatter by feeding
`resolvedOptions()` back into the constructor, but those options are not a
faithful round trip: for `Intl.DateTimeFormat` the resolved `month` and
`weekday` fields are normalized to values that re-resolve differently in some
locales, notably `ja` and `zh`, so a date formatted on the server renders
differently once the same formatter is used after resume. That is a silent
server/client divergence in rendered text rather than a crash, which makes it
harder to notice than the unserializable-value error it replaced, and the
changeset currently records it as an accepted limitation. A fix likely needs to
capture the constructor's original `options` argument at the call site (the
compiler already sees `new Intl.DateTimeFormat(...)` in `<const>` position)
rather than recovering them from the built formatter, or to special-case the
fields whose resolved form is lossy. Re-verify by server-rendering
`<const/fmt=new Intl.DateTimeFormat("ja", { month: "long", weekday: "long" })/>`
reached from browser-updating content, then comparing `fmt.format(date)` before
and after resume.

## Type `<try>`'s `@catch` body parameter the way TypeScript types a `catch` binding

`packages/runtime-tags/tags/try.d.marko` › `Input` | 2026-08-03 | impact:med | effort:low

`catch?: Marko.AttrTag<{ content?: Marko.Body<[unknown]> }>` hardcodes `unknown`, so `<@catch|err|>${err.message}</@catch>` — the shape `packages/runtime-tags/cheatsheet.md`'s own Async section teaches — fails type-check in every otherwise-correct `<try>` template. Because that `unknown` is written down rather than inferred, `useUnknownInCatchVariables` cannot move it either way, and the tag diverges from the language in both directions: under `strict:false` a plain `catch (e) { e.message }` is clean while the template reports TS2339, and under `{ strict: true, useUnknownInCatchVariables: false }` the plain `catch` is clean while the template still reports TS18046. Either declare the parameter `any`, so `<@catch>` tracks a project's own `catch` blocks, or keep `unknown` deliberately and put the narrowing idiom (`err instanceof Error ? err.message : String(err)`) in the cheatsheet, since nothing in-repo currently shows it. Re-verify: run `mtc` over a `<try>` whose `<@catch|err|>` body reads `err.message`, under each of those two tsconfigs.

## Bridge Class-API function props nested below the top level of a Tags-API child's input

`packages/runtime-tags/src/html/compat.ts` › `registerClassFunctions` | 2026-08-05 | impact:med | effort:med

`registerClassFunctions` walks only the input's own enumerable keys, so a Class parent's closure reaching a Tags child inside an object or an array still arrives at the tags serializer unregistered and aborts the boundary (`writeFunction` → `writeNever` → `throwUnserializable` in `packages/runtime-tags/src/html/serializer.ts`). The top-level attribute and tag-params `args` shapes are both covered, because the call site is `TagsCompat` in `packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js`, which sees whichever of the two `dynamicTag5.___runtimeCompat` selected as `_.i`. A recursive walk would be wasteful on every class-to-tags render; the better direction is likely a serializer-side hook that resolves an unregistered function to the compat noop when it originates from the class compat layer, so the depth of the value no longer matters. Debug builds now report the abort from the compat flush, so the failure names the offending value; optimize builds compile out `throwUnserializable` and silently drop the function instead. Re-verify: change `interop-event-inline-class-to-tags/template.marko` to pass `handlers={ ping() { component.handlePing(1) } }` and have `tags-pinger.marko` call `input.handlers.ping()` from its `onClick`.

## Revive a split Class parent's inline function prop on a Tags child, or reject it at compile time

`packages/runtime-class/src/runtime/helpers/dynamic-tag.js` › `addTagsEvents` | 2026-08-05 | impact:med | effort:high

A _split_ Class component (one with a `component-browser.js`, so `FLAG_WILL_RERENDER_IN_BROWSER` is unset) that passes an inline function to a Tags child — `<tags-pinger onPing(count) { component.handlePing(count) }/>` — resumes with a permanently dead handler: `registerClassFunctions` serializes it as the compat noop, and unlike a rerendering parent the split parent never re-feeds a live one. The string form `onPing("handlePing")` works, because `addTagsEvents` serializes `[CLASS_EVENT_MARKER, componentId, method]` and `runtime-dom.js`'s `setClassEventResolver` revives it by name; an inline closure has no name to bridge, so nothing can revive it. A real fix needs the Marko 5 translator to give each inline handler an id reachable from the browser bundle so it can serialize a marker like the named form; failing that, a compile-time or `MARKO_DEBUG` error on this exact shape beats silently dropping events. Re-verify: copy `interop-event-split-class-to-tags` and replace `onPing("handlePing")` in `components/class-host/index.marko` with an inline body calling `component.handlePing(count)` — the fixture harness reports `Snapshot conflict: "render.debug.md" was written with different content by two tests`, because CSR updates `#class` and resumed SSR does not.

## Circular custom tags TDZ at module evaluation in DOM output

Mutually recursive custom tags (`tags/a-tag` renders `b-tag`, which
renders `a-tag`) compile per-template but the DOM output's static
template-string composition (`const $template$1 = ((_w0) =>
`...${_w0}...`)($template$2)`) references the sibling's module-level
const across the import cycle; the bundler's concatenation order then
hits `Cannot access '$template$1' before initialization`at module
evaluation, before any render. The composition would need to be lazy (or
bail to a runtime reference) when the child resolves through a cycle.
Found while building a persisted fixture; reproduces with`persisted:
false` (the inlining is mode-agnostic). Re-verify: two tags rendering
each other behind a depth guard, bundle the page, import the dom bundle
— eval throws.
