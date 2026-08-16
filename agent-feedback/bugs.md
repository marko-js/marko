# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Wrap reordered out-of-order content in a parser-context-legal container

`packages/runtime-tags/src/html/writer.ts` › `Chunk.flushScript` | 2026-07-23 | impact:high | effort:high

A reorder flush appends `<t hidden {commentPrefix}={reorderId}>reorderHTML</t>`, and the inline reorder runtime splices it in via `runtime.l[id].replaceWith(...container.childNodes)`. `<t>` puts the parser in "in body", so a table-internal payload is destroyed before the runtime sees it: `<tr>`/`<td>` start tags are ignored, only their text survives, and bare text nodes land in the `<tbody>`. That silently breaks the canonical async-table pattern (`<try>` with a skeleton-row `@placeholder` plus an `<await>` streaming the real rows), and the wrapper is foster-parented out whenever a flush lands while the table is still open. Track the reorder site's static ancestor chain in the translator and emit matching scaffolding (`<table hidden><tbody>…</tbody></table>`), extracting from that depth as React's Fizz writer does. "Give a hidden `<show>` a wrapper legal in table/select insertion contexts" covers this file's other `<t hidden>` emit site and proposes `<template>` instead, so pick the container once for both writers and reuse its `translator/util/insertion-context.ts` › `discardsWrapperChildren`, which already enumerates the offending insertion modes. Re-verify: add that fixture and run `pnpm test -- --grep "runtime-tags/translator try-await-table-rows "` — `render.md` shows the row reduced to a stray text node.

## Decode character references in a static `<textarea>` body

`packages/runtime-tags/src/translator/core/textarea.ts` › `preAnalyze` | 2026-07-23 | impact:med | effort:med

`preAnalyze` folds a `<textarea>` body into a synthetic `value` attribute by pushing each `MarkoText` child's raw source into `normalizeStringExpression`, and `_textarea_value` (`html/attrs.ts`) escapes it again: `<textarea>&lt;p&gt;hi</textarea>` compiles to `_textarea_value("&lt;p&gt;hi")` and shows the literal `&lt;p&gt;hi`, while the same body in `<title>`/`<div>` passes through, as it does in Marko 5. Entities are the only way to author literal markup in a text-only tag, so that case is unrepresentable. CSR matches SSR, so the fix is decoding `MarkoText` children at compile time — but `MarkoText.value` is raw source and the only decoder in the tree is `he` under `packages/compiler/node_modules` (~100KB, tree-shaken out today), so it needs a new `babel-utils` export; weigh that cost. Re-verify: compile `<textarea>&lt;p&gt;hi</textarea>` with `-o html` and check the emitted `_textarea_value` literal.

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

## Keep lifecycle attr types when the onMount return object reads `this.<attr>`

`packages/runtime-tags/src/translator` › `<lifecycle>` / tags typecheck | 2026-08-13 | impact:med | effort:med

Returning `{ wasActive: !!this.active, … }` from `onMount` while `active=…` is also a lifecycle attr collapses the whole tag's `ThisType` to `object`: every attr (`active`, `load`, …) and every `this.*` access then fails with TS2353/TS2339, even though the same `this.active` read is legal inside `start()` / `onUpdate`. Assigning after construction works: `const self = { wasActive: false, … }; self.wasActive = !!this.active; return self`. Re-verify with a fixture that sets `active=true` on `<lifecycle>`, returns `{ wasActive: !!this.active }` from `onMount`, and runs `mtc` / the tags typecheck — expect green after the post-construction assign form and red on the inline form.

## Fail loudly when a function-valued scope binding cannot be serialized

`packages/runtime-tags/src/html/serializer.ts` › `writeFunction` / `writeNever` | 2026-08-13 | impact:high | effort:low

Unregistered functions on a resume scope hit `writeNever`, which throws only under `MARKO_DEBUG` and in production returns false so the property is omitted; after resume the binding is `undefined` and the first call throws a bare `TypeError: … is not a function` (minified e.g. `e.br is not a function`) with no link to serialize. Derived `<const>` values that are closures (`makeFileFilter(q)`, inline predicates stored then passed to `.filter`) are the usual source — event handlers already go through `_resume`/`register`, this gap is derived const values. `<show>` amplifies it because its body always SSRs into `<t hidden>` (by design in `translator/core/show.ts` / `_show_start`) so keep-alive trees that used to be CSR-only enter the serializer; do not change that show behavior. Fix: always throw from failed `writeFunction`, or emit a sentinel callable that names the scope accessor; optionally later have the compiler re-derive function consts client-side or auto-register stable module fns. Re-verify: SSR `<show=false><const/match=makeFilter("")/><const/n=items.filter(match)/></show>`, resume, set show true — today a cryptic TypeError; after the fix a named serialize-time or first-call error (or a working filter if re-derive lands).
## Streamed `<await>` body that lands within ~100 ms of its `@placeholder` breaks resume

`packages/runtime-tags/src/dom/resume.ts` (client) / `packages/runtime-tags/src/html/writer.ts` (`<await>` placeholder + body flush) | 2026-08-17 | impact:high | effort:med

Shape: `<try><await|x|=promise><big-tag …/></await><@placeholder><big-tag …/></@placeholder></try>` at page level, where `big-tag` is a stateful tag (event handlers, `<script>`, `<lifecycle>`). When `promise` resolves shortly after the placeholder was flushed (already-resolved promise, a microtask, or ~30 ms later), the client throws `TypeError: Cannot read properties of null (reading 'insertBefore')` from the resume path and the page is dead (handlers unbound, effects never run). The same markup works when the promise resolves ≥150 ms after the placeholder (normal streaming) or when the placeholder is omitted; a plain-markup placeholder (no stateful tag) also appears fine but was not exhaustively timed. Marko 6.3.34 / @marko/run 0.11.9. Suspect: the placeholder's scope/marker bookkeeping being replaced by the body before the placeholder's own resume chunk has been processed. Re-verify: fixture with a stateful tag in both slots and `await new Promise((r) => setTimeout(r, 30))` before resolving; load warm; a 200 ms delay in the same fixture resumes cleanly.
