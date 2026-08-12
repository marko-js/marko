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

## Tag-var resume factory can be tree-shaken out of signal-free pages

`_var` serialization always passive-writes `#TagVariable: _resume({},
registryId, parent)`, but the factory only registers when the DOM
template module loads. A page whose ONLY client-side signals are tag
variables (no `<let>`, handlers, or scripts) bundles without
`template.mjs`, so the first resume/patch hits
`registeredValues[registryId] is not a function` and (under persisted)
every frame falls closed to navigation —
`persisted-var-pure-server` pins the behavior. Either the var resume
should force template retention the way handlers do, or a var with no
client readers/writers should skip the passive write entirely.
Re-verify: a template rendering only `<doubler/double value=input.n/>`
into a second tag's attr, no other client code — the page bundle
imports only feat modules.

## Post-flush patch writes fail closed via two divergent channels

`packages/runtime-tags/src/html/writer.ts` › `writePatch` | 2026-08-12 | impact:low | effort:med

A patch frame has two fail-closed surfaces with different caller
contracts: `patchPoison` (in `html/patch.ts` › `PatchState.resumeScript`)
ships a poison frame the client rejects (`applyPatch` returns false →
navigate), while a write after the frame flushed makes `writePatch`
throw, rejecting the `renderPatch` async iterable mid-stream — after any
earlier frame may already have applied to the DOM. The compile-time
admission gate now rejects `<try>`/`<await>` so translator output cannot
reach the throw, but the runtime is callable directly and any future
async admission would surface as a stream error, not a poison frame.
Suggested direction: on a post-flush write, set `patchPoison` and emit a
poison frame from the next flush instead of throwing (or document that
renderPatch consumers must navigate on rejection as well as on a false
applyPatch). Re-verify: grep `patchFlushed` in `html/writer.ts` — the
throw in `writePatch` vs the poison return in `resumeScript`.
