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

The string-renderer branch never assigns `result` (its inline TODO says so) and the DOM branch never pushes the created element through the child scope's `AccessorProp.TagVariable` callback, so `<${cond && "div"}/el/>` leaves `el` undefined in CSR and after resume. Hoisted reads make it a hard failure: debug SSR runs `_assert_hoist(el)` on `undefined` and throws `Hoisted values must be functions, received type "undefined"`, while optimize drops the assert, serializes `el: undefined`, and breaks later on the client. CSR is runtime-only (push `() => childScope[AccessorProp.StartNode]` through the callback in `dom/control-flow.ts`); resume needs the compiler, since a native branch scope serializes no state, leaving `dom/resume.ts`'s `BranchEndNativeTag` handler no `#TagVariable` to invoke. A cheap independent step is a compile-time diagnostic when a tag variable sits on a dynamic tag that can resolve to a native name. The tag-variable install in this block is now guarded against a falsy renderer (and clears the variable on teardown); the CSR fix here composes with that guard rather than restructuring it. Re-verify: compile `<if=input.show><${input.name || "div"}/el/></if><script>el()</script>` with `-d -o html` and see `_assert_hoist(el)` applied to an `el` the html `_dynamic_tag` never assigns.

## Render a value-carrying dynamic `<select>` through `_dynamic_tag`, and control it when it has no body

`packages/runtime-tags/src/html/dynamic-tag.ts` › `_dynamic_tag` | 2026-07-23 | impact:med | effort:med

The `renderer === "select" && ("value" in input || "valueChange" in input)` case hands `renderContent` to `_attr_select_value` instead of recursing, so the body gets no branch markers and no `ConditionalRenderer:#select/0`; `dom/control-flow.ts` › `_dynamic_tag` always registers one, and the resumed body scope is left in the parent's `ClosureScopes` with no branch to destroy it. That case also sits inside `} else if (renderContent) {`, and `_attrs`' `case "select"` only widens `skip`, so a bodyless dynamic select writes no `ControlledType`/`ControlledHandler`. Pass the `_dynamic_tag` recursion as `_attr_select_value`'s `content` argument (`kSelectedValue` is dynamically scoped) and hoist the select case out of the guard. See also "Initialize tag variables for dynamic tags that resolve to a native tag name" — same string-renderer branch, and a restructure that always recurses may resolve both. Re-verify: SSR `<let/tag=input.tag/><let/n=0/><${tag} value="b"><option value="a">A${n}</option></>` for `"div"` vs `"select"` — only div emits `M_[` and `ConditionalRenderer:#div/0`; and `<${input.tag} value:=v/>` emits `ControlledType:#input/0` for `"input"`, nothing for `"select"`.

## Wrap reordered out-of-order content in a parser-context-legal container

`packages/runtime-tags/src/html/writer.ts` › `Chunk.flushScript` | 2026-07-23 | impact:high | effort:high

A reorder flush appends `<t hidden {commentPrefix}={reorderId}>reorderHTML</t>`, and the inline reorder runtime splices it in via `runtime.l[id].replaceWith(...container.childNodes)`. `<t>` puts the parser in "in body", so a table-internal payload is destroyed before the runtime sees it: `<tr>`/`<td>` start tags are ignored, only their text survives, and bare text nodes land in the `<tbody>`. That silently breaks the canonical async-table pattern (`<try>` with a skeleton-row `@placeholder` plus an `<await>` streaming the real rows), and the wrapper is foster-parented out whenever a flush lands while the table is still open. Track the reorder site's static ancestor chain in the translator and emit matching scaffolding (`<table hidden><tbody>…</tbody></table>`), extracting from that depth as React's Fizz writer does. "Give a hidden `<show>` a wrapper legal in table/select insertion contexts" covers this file's other `<t hidden>` emit site and proposes `<template>` instead, so pick the container once for both writers and reuse its `translator/util/insertion-context.ts` › `discardsWrapperChildren`, which already enumerates the offending insertion modes. Re-verify: add that fixture and run `pnpm test -- --grep "runtime-tags/translator try-await-table-rows "` — `render.md` shows the row reduced to a stray text node.

## Retry SSR lazy-load trigger selectors after the document parses, and warn under `MARKO_DEBUG`

`packages/runtime-tags/src/html/assets.ts` › `writeTriggerScript` | 2026-07-23 | impact:med | effort:med

The inline trigger script for `with { load: "visible…" | "on-…" }` resolves its target as `document.querySelector(sel) || l()`, and `writeScript` lands it at the end of the current flush chunk, not the document. A flush boundary (`<await>`, `<try>`, lazy content) between the tag and its target means `querySelector` returns null and `l()` fetches the module immediately — the code split degrades to eager loading. The CSR path warns on this miss (`dom/load.ts` › `getSelectorOrResolve`); the emitted SSR string has no `MARKO_DEBUG` branch, so on server-rendered pages it degrades silently. Re-check on `DOMContentLoaded` (or observe until the node appears) before falling back to `l()`, and emit a `MARKO_DEBUG`-gated warn. Re-verify: a `visible #footer` lazy tag placed before an `<await>` whose body holds `<footer id=footer>` — the first chunk already contains `document.querySelector("#footer")||l()`.

## Align the spread `<input>` controllable ladders in HTML `_attrs` and DOM `_controllable_input`

`packages/runtime-tags/src/html/attrs.ts` › `_attrs` | 2026-07-23 | impact:med | effort:med

HTML `_attrs` picks an `<input>`'s controllable from the change handler (`data.checkedChange` → `"checkedValue" in data` → `data.valueChange`); DOM `_controllable_input` (`dom/controllable.ts`) picks it from key presence (`"checked" in nextAttrs || "checkedChange" in nextAttrs` first). A spread of `{ checked: false, value: "x", valueChange(v) {} }` therefore takes the value branch on the server (`value=x` plus a serialized `ControlledType.InputValue`) and the checked branch on the client, whose skip `/^checked(?:Value)?(?:Change)?$/` lets `valueChange` reach `_attr(el, "valueChange", fn)` — a debug throw, and in optimize a stringified attribute with the binding lost. Nothing rejects it earlier: `assertExclusiveAttrs` counts one exclusive attr, and the translator's copy sees only static attributes. Share one predicate between the runtimes and add a spread fixture. The debug-validation half of this same block is tracked in "Give the HTML spread-attrs path the same MARKO_DEBUG validation as the DOM path", whose `assertExclusiveAttrs` move sits at the head of this ladder, so land the predicate extraction with it in mind. Re-verify: render `<input ...attrs>` with those attrs — SSR emits `<input value=x>`, CSR throws inside `_attr`.

## Decode character references in a static `<textarea>` body

`packages/runtime-tags/src/translator/core/textarea.ts` › `preAnalyze` | 2026-07-23 | impact:med | effort:med

`preAnalyze` folds a `<textarea>` body into a synthetic `value` attribute by pushing each `MarkoText` child's raw source into `normalizeStringExpression`, and `_textarea_value` (`html/attrs.ts`) escapes it again: `<textarea>&lt;p&gt;hi</textarea>` compiles to `_textarea_value("&lt;p&gt;hi")` and shows the literal `&lt;p&gt;hi`, while the same body in `<title>`/`<div>` passes through, as it does in Marko 5. Entities are the only way to author literal markup in a text-only tag, so that case is unrepresentable. CSR matches SSR, so the fix is decoding `MarkoText` children at compile time — but `MarkoText.value` is raw source and the only decoder in the tree is `he` under `packages/compiler/node_modules` (~100KB, tree-shaken out today), so it needs a new `babel-utils` export; weigh that cost. Re-verify: compile `<textarea>&lt;p&gt;hi</textarea>` with `-o html` and check the emitted `_textarea_value` literal.

## Catch effect errors in `runEffects`; a throwing `<script>` escapes `<try>`'s `@catch` and kills every queued effect

`packages/runtime-tags/src/dom/queue.ts` › `runEffects` | 2026-07-27 | impact:med | effort:med

`_enable_catch`'s `runEffects` wrapper only filters destroyed/pending scopes — it never catches — and `run()` calls it outside its own `try`/`finally`, so an error thrown from a `<script>`/`<lifecycle>` body inside `<try>` escapes `mount()` instead of reaching `@catch`, and aborts the flush so every effect queued behind it never wires up. Give the wrapper the per-item `try { fn(scope) } catch (e) { renderCatch(scope, e) }` treatment `runRender` gets; the fix must also flush the catch branch's own effects, which land in the fresh array `run()` already swapped in. Nothing covers this: `try-effects-catch`, `try-effects-catch-state` and `try-effects-async` all throw from render expressions. Re-verify: mount `<try><for|item| of=["a","b","c"]><script>{ order.push(item); if (item === "a") throw new Error("boom") }</script></for><@catch|err|>caught</@catch></try>` in jsdom — `mount()` throws `boom`, `order` is `["a"]`, and no `@catch` content renders.

## Write the dynamic `<style>` marker class with `setAttribute`; a `<style>` inside `<svg>` throws on client render

`packages/runtime-tags/src/dom/dom.ts` › `_style_shell` | 2026-07-27 | impact:med | effort:low

`_style_shell` tags the generated stylesheet with `element.className = id`, but `SVGElement.className` is a readonly `SVGAnimatedString`, so in the runtime's strict-mode ESM that assignment throws `TypeError: Cannot set property className of #<SVGElement> which has only a getter`. `<let/c="red"/><svg><style>circle { fill: ${c}; }</style><circle cx=5 cy=5 r=4/></svg>` compiles to `_style_shell($scope, "#style/0")`, so every client-created render of such a template (a `mount`, or an `<if>`/`<for>` branch) dies before anything is inserted; SSR and resume survive because `html/attrs.ts` › `_style_html` emits `<style class=ID>` as markup and `_style_rule_item` only rewrites `textContent`. Write the marker with `element.setAttribute("class", id)` so both outputs set the same attribute regardless of namespace. Re-verify: mount that template in jsdom — it throws, while the identical `<style>` outside `<svg>` mounts as `<style class="cM_0">`.

## Route `tagNameLoad` through the compat dynamic-tag path when a Tags-API parent lazily imports a Class-API child

`packages/runtime-tags/src/translator/visitors/import-declaration.ts` › `translate.exit` | 2026-07-27 | impact:med | effort:med

`analyzeTagNameType` downgrades a custom tag whose child template is Class API to `TagNameType.DynamicTag` but leaves `extra.tagNameLoad` attached, so `translate.exit`'s DOM branch still sees `allKnownTagReferences` and deletes the whole `import Child … with { load: … }`, while the compat dynamic-tag path never reads `tagNameLoad` and emits a bare `$dynamicTag($scope, Child, …)`. `Child` is left undeclared, so `$setup` throws `ReferenceError` at first render with zero diagnostics, and every `fixtures-interop/lazy-class-child*` fixture uses a Class parent, so this direction is uncovered. Either wire `tagNameLoad` into the compat path or `buildCodeFrameError` in `analyze` when a `load` import resolves to a Class-API template. Re-verify: compile a `<!-- use tags -->` parent holding that import plus `<Child value=1/>` against a `class {}` child with `{ output: "dom", linkAssets, translator: "marko/translator" }`; Babel puts `Child` in the Program scope's `globals`, empty with a Tags-API child.

## Queue pending `onNextSibling` callbacks in the inline reorder runtime

`packages/runtime-tags/src/html/inlined-runtimes.debug.ts` › `REORDER_RUNTIME_CODE` | 2026-07-10 | impact:low | effort:med

`runtime.x` keeps a single `nextSibling`/`onNextSibling` pair. A `<t hidden>` swap callback pending on that element's next sibling is silently dropped if, while walking the `<t>`'s children, a placeholder-end comment (`!id`) hits the `runtime.l[id] && placeholders[id]` branch and reassigns the pair — the outer swap then never fires and hydration freezes. Current server flush ordering appears to keep this unreachable, so this is robustness, not a live bug: fire the pending callback before reassigning (or queue), weighed against inline-runtime bytes. Re-verify: read `REORDER_RUNTIME_CODE` and confirm both the `op == "!"` and `<t>` branches assign `nextSibling`/`onNextSibling` without first draining a pending one.

## Renumber alias bindings too, or stop using `Binding.id` as the `bindingUtil` identity tiebreak

`packages/runtime-tags/src/translator/util/references.ts` › `finalizeReferences` | 2026-07-23 | impact:med | effort:med

`bindingUtil.compare` returns `0` for two distinct bindings sharing `section.id` and `id` (its `type` tiebreak applies only to a dom/non-dom pair), and `Sorted.add`/`find`/`has` treat `0` as identity. But `binding.id = nextId++` renumbers only bindings in `section.bindings`, which is filled with `getCanonicalBinding(binding)`, so a pure alias (`property` and `excludeProperties` both `undefined`) keeps its creation-order id and can collide with a renumbered section-mate. `dropReferencedBindings`, run afterwards by `getReferenceFinalizers()` and rebuilding `referencedBindings` with `bindingUtil.add`, then collapses the pair and drops a real dependency — latent today, since no fixture miscompiles. Renumber aliases alongside their canonical (or into a disjoint range), or give `Binding` a separate identity field. Re-verify: wrap `bindingUtil.compare`, compile `__tests__/fixtures/param-destructure-default/template.marko`, group by `(section.id, id, type === dom)` — section 1 id 6 holds `$foo` (param alias) and `$bar` (derived), and `compare` returns `0`.

## Give a hidden `<show>` a wrapper legal in table/select insertion contexts

`packages/runtime-tags/src/html/writer.ts` › `_show_start` | 2026-07-28 | impact:med | effort:high

`_show_start` wraps non-displayed content in `<t hidden>`, which table/select insertion modes discard while keeping its children, so `translator/core/show.ts` › `assertLegalHiddenContext` now rejects `<show>` directly inside `<table>`/`<tbody>`/`<tr>`/`<colgroup>`/`<select>`/`<optgroup>` (predicate: `translator/util/insertion-context.ts` › `discardsWrapperChildren`). That diagnostic only stops the silent mis-render; the docs still recommend `<show>` for bulky markup, which is often a table body. No ordinary element is legal in both contexts — `<template>` is the sole candidate, but its children sit on `.content`, so the resume walker and `_show`'s `<t>`-dissolve path must reach through it first; a narrower option sets `hidden` on each statically known top-level body node. The same `<t hidden>` hazard applies to the reorder wrapper `Chunk.flushScript` writes — see "Wrap reordered out-of-order content in a parser-context-legal container" — so whichever lands first sets the container precedent for both emit sites. Re-verify: delete the `assertLegalHiddenContext` call and run `pnpm run test:update -- --grep "runtime-tags/translator error-show-tag-in-table "` — `render.debug.md` shows the row inside the table despite `show=false`.

## Carry the Class-API compat boundary mode per call site instead of downgrading the whole program

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `pushCompatRegistration` | 2026-07-27 | impact:low | effort:med

`preserveBoundary` is a per-call-site decision (`!tagsSerializeReason && …`), but `s(id, renderer, mode)` is emitted once per renderer and `boundaryModeByRenderer` in `packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js` is keyed by renderer too. The order-dependence is fixed (commit fe76065063): any call site that cannot preserve truncates the emitted call to two arguments for the whole program, and `register` keeps a plain `true` sticky across modules. That fix is a downgrade, so one updating call site costs every inert call site of that class its split-component optimization. Carrying the mode on the per-call-site `_dynamic_tag` invocation would keep both, at the cost of a parameter every dynamic tag pays for — measure before taking it. Re-verify: `interop-mixed-boundary-split-tags-to-class` emits `s(…, renderer)` with no `"preserve"`, while `interop-self-interactive-split-tags-to-class` still emits it.

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

## Bridge Class-API function props nested below the top level of a Tags-API child's input

`packages/runtime-tags/src/html/compat.ts` › `registerClassFunctions` | 2026-08-05 | impact:med | effort:med

`registerClassFunctions` walks only the input's own enumerable keys, so a Class parent's closure reaching a Tags child inside an object or an array still arrives at the tags serializer unregistered and aborts the boundary (`writeFunction` → `writeNever` → `throwUnserializable` in `packages/runtime-tags/src/html/serializer.ts`). The top-level attribute and tag-params `args` shapes are both covered, because the call site is `TagsCompat` in `packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js`, which sees whichever of the two `dynamicTag5.___runtimeCompat` selected as `_.i`. A recursive walk would be wasteful on every class-to-tags render; the better direction is likely a serializer-side hook that resolves an unregistered function to the compat noop when it originates from the class compat layer, so the depth of the value no longer matters. Debug builds now report the abort from the compat flush, so the failure names the offending value; optimize builds compile out `throwUnserializable` and silently drop the function instead. Re-verify: change `interop-event-inline-class-to-tags/template.marko` to pass `handlers={ ping() { component.handlePing(1) } }` and have `tags-pinger.marko` call `input.handlers.ping()` from its `onClick`.

## Revive a split Class parent's inline function prop on a Tags child, or reject it at compile time

`packages/runtime-class/src/runtime/helpers/dynamic-tag.js` › `addTagsEvents` | 2026-08-05 | impact:med | effort:high

A _split_ Class component (one with a `component-browser.js`, so `FLAG_WILL_RERENDER_IN_BROWSER` is unset) that passes an inline function to a Tags child — `<tags-pinger onPing(count) { component.handlePing(count) }/>` — resumes with a permanently dead handler: `registerClassFunctions` serializes it as the compat noop, and unlike a rerendering parent the split parent never re-feeds a live one. The string form `onPing("handlePing")` works, because `addTagsEvents` serializes `[CLASS_EVENT_MARKER, componentId, method]` and `runtime-dom.js`'s `setClassEventResolver` revives it by name; an inline closure has no name to bridge, so nothing can revive it. A real fix needs the Marko 5 translator to give each inline handler an id reachable from the browser bundle so it can serialize a marker like the named form; failing that, a compile-time or `MARKO_DEBUG` error on this exact shape beats silently dropping events. Re-verify: copy `interop-event-split-class-to-tags` and replace `onPing("handlePing")` in `components/class-host/index.marko` with an inline body calling `component.handlePing(count)` — the fixture harness reports `Snapshot conflict: "render.debug.md" was written with different content by two tests`, because CSR updates `#class` and resumed SSR does not.
