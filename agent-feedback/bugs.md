# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Resume a stateful Tags-API descendant rendered through an inert Class-API parent

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `translate.exit` | 2026-07-13 | impact:high | effort:high

A Tags page rendering an inert Class component (no class block) that renders a stateful Tags grandchild leaves the grandchild dead after SSR — its `<button onClick>` does nothing, in debug and optimize. `getClassHydrationMode` (`packages/runtime-class/src/translator/index.js`) detects interactivity only via `meta.component`, never a Tags child's `isInteractive` (on `program.node.extra`, not `metadata.marko`), so `classHydration` is undefined and the optimize path here (`!classHydration && !tagsSerializeReason` → `tag.remove()`) deletes the boundary outright; disabling that removal alone does not revive the button, so the resume gap is deeper. A fix likely needs the tags translator to surface interactivity on `metadata.marko`, `getClassHydrationMode` to return DESCENDANT for it, and the boundary to actually resume. Re-verify: with `template.marko` = `// use tags` + `<class-wrapper/>`, `components/class-wrapper.marko` = `<div><tags-counter/></div>` and `tags/tags-counter.marko` = `<let/n=0/><button onClick(){n++}>${n}</button>`, run `scripts/inspect-compiled-output.mts -t class -o dom` — today it emits `$setup = () => {}`.

## Wrap reordered out-of-order content in a parser-context-legal container

`packages/runtime-tags/src/html/writer.ts` › `Chunk.flushScript` | 2026-07-23 | impact:high | effort:high

A reorder flush appends `<t hidden {commentPrefix}={reorderId}>reorderHTML</t>`, and the inline reorder runtime splices it in via `runtime.l[id].replaceWith(...container.childNodes)`. `<t>` puts the parser in "in body", so a table-internal payload is destroyed before the runtime sees it: `<tr>`/`<td>` start tags are ignored, only their text survives, and bare text nodes land in the `<tbody>`. That silently breaks the canonical async-table pattern (`<try>` with a skeleton-row `@placeholder` plus an `<await>` streaming the real rows), and the wrapper is foster-parented out whenever a flush lands while the table is still open. Track the reorder site's static ancestor chain in the translator and emit matching scaffolding (`<table hidden><tbody>…</tbody></table>`), extracting from that depth as React's Fizz writer does. "Give a hidden `<show>` a wrapper legal in table/select insertion contexts" covers this file's other `<t hidden>` emit site and proposes `<template>` instead, so pick the container once for both writers and reuse its `translator/util/insertion-context.ts` › `discardsWrapperChildren`, which already enumerates the offending insertion modes. Re-verify: add that fixture and run `pnpm test -- --grep "runtime-tags/translator try-await-table-rows "` — `render.md` shows the row reduced to a stray text node.

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

## Give a hidden `<show>` a wrapper legal in table/select insertion contexts

`packages/runtime-tags/src/html/writer.ts` › `_show_start` | 2026-07-28 | impact:med | effort:high

`_show_start` wraps non-displayed content in `<t hidden>`, which table/select insertion modes discard while keeping its children, so `translator/core/show.ts` › `assertLegalHiddenContext` now rejects `<show>` directly inside `<table>`/`<tbody>`/`<tr>`/`<colgroup>`/`<select>`/`<optgroup>` (predicate: `translator/util/insertion-context.ts` › `discardsWrapperChildren`). That diagnostic only stops the silent mis-render; the docs still recommend `<show>` for bulky markup, which is often a table body. No ordinary element is legal in both contexts — `<template>` is the sole candidate, but its children sit on `.content`, so the resume walker and `_show`'s `<t>`-dissolve path must reach through it first; a narrower option sets `hidden` on each statically known top-level body node. The same `<t hidden>` hazard applies to the reorder wrapper `Chunk.flushScript` writes — see "Wrap reordered out-of-order content in a parser-context-legal container" — so whichever lands first sets the container precedent for both emit sites. Re-verify: delete the `assertLegalHiddenContext` call and run `pnpm run test:update -- --grep "runtime-tags/translator error-show-tag-in-table "` — `render.debug.md` shows the row inside the table despite `show=false`.

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

## Revive a split Class parent's inline function prop on a Tags child, or reject it at compile time

`packages/runtime-class/src/runtime/helpers/dynamic-tag.js` › `addTagsEvents` | 2026-08-05 | impact:med | effort:high

A _split_ Class component (one with a `component-browser.js`, so `FLAG_WILL_RERENDER_IN_BROWSER` is unset) that passes an inline function to a Tags child — `<tags-pinger onPing(count) { component.handlePing(count) }/>` — resumes with a permanently dead handler: `registerClassFunctions` serializes it as the compat noop, and unlike a rerendering parent the split parent never re-feeds a live one. The string form `onPing("handlePing")` works, because `addTagsEvents` serializes `[CLASS_EVENT_MARKER, componentId, method]` and `runtime-dom.js`'s `setClassEventResolver` revives it by name; an inline closure has no name to bridge, so nothing can revive it. A real fix needs the Marko 5 translator to give each inline handler an id reachable from the browser bundle so it can serialize a marker like the named form; failing that, a compile-time or `MARKO_DEBUG` error on this exact shape beats silently dropping events. Re-verify: copy `interop-event-split-class-to-tags` and replace `onPing("handlePing")` in `components/class-host/index.marko` with an inline body calling `component.handlePing(count)` — the fixture harness reports `Snapshot conflict: "render.debug.md" was written with different content by two tests`, because CSR updates `#class` and resumed SSR does not.

## Diagnose `await` inside a non-async shorthand method

`packages/compiler/src/babel-plugin/parser.js` › `onAttrMethod` | 2026-08-11 | impact:med | effort:low

`parseStatements` parses a shorthand method body as a standalone program and the compiler's `parserOpts` allow top-level `await`, so `<button onClick() { await save() }>` parses without complaint and `onAttrMethod` builds a `t.functionExpression` with `async: false`. The output is then literally `function () { await save(); }`, which surfaces as the bundler's locationless "`await` is only allowed within async functions" rather than a Marko diagnostic pointing at the template. Now that `<button async onClick() {}>` exists the mistake is a forgotten keyword, so `onAttrMethod` should traverse the parsed body for a top-level `AwaitExpression` when `part.async` is false and name the fix ("add `async` before the method name"). Re-verify with `pnpm run compile -- -o dom -d` on that template and grep the output for `function ()` preceding an `await`.
