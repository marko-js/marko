# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Dead `filterMap` export

`packages/runtime-tags/src/translator/util/optional.ts:295` | 2026-07-13 | impact:low | effort:low

`filterMap` (line 295) is exported but referenced nowhere in the monorepo — no imports, no `callRuntime`/`pureDOMFunctions` entry, no tests — and it is not a `_`-prefixed runtime API. Dead code; delete the function (~44 lines).

## Needless `export` on module-local `replaceRegisteredFunctionNode`

`packages/runtime-tags/src/translator/visitors/program/html.ts:247` | 2026-07-13 | impact:low | effort:low

`replaceRegisteredFunctionNode` is `export`ed but its only reference is local (html.ts:200). The same-named symbol other modules import (`scriptlet.ts`, `signals.ts`) is a _different_ function, so the export is never consumed. Drop the `export` keyword.

## Always-true `!isLiteral(display)` sub-condition in `<show>`

`packages/runtime-tags/src/translator/core/show.ts:137` | 2026-07-13 | impact:low | effort:low

In the dynamic branch, `if (!t.isIdentifier(display) && !isLiteral(display))` (line 137) — `!isLiteral(display)` is always true here: a literal `display` sets `kStaticDisplay` via a confident `evaluate` and returns earlier in `enter`, so this code only runs for non-literals. Drop `&& !isLiteral(display)` and the now-unused `isLiteral` helper (line 317).

## Redundant `loadFileForTag` re-read in dynamic-tag

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts:339` | 2026-07-13 | impact:low | effort:low

Inside `if (classTagTemplate)`, `classFile` is already resolved once (line 288, `loadFileForTag(tag)!`). Lines 339 and 354 call `loadFileForTag(tag)!.metadata.marko.id` again, re-routing through the compiler's `resolveMarkoFile` for the same file. Use `classFile!.metadata.marko.id` at both sites.

## Redundant `getKnownAttrValues` recompute in `<for>`

`packages/runtime-tags/src/translator/core/for.ts:158` | 2026-07-13 | impact:low | effort:low

`analyze` computes `const byAttr = getKnownAttrValues(tag.node).by` at line 109, then redeclares an identical `byAttr` (shadowing) at line 158 before `getLoopKeyBinding`. `getKnownAttrValues` allocates a fresh object and iterates every attribute per call. Delete the line-158 redeclare and use the outer `byAttr`.

## Redundant `getCanonicalTagName` recompute in native-tag analyze

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:212` | 2026-07-13 | impact:low | effort:low

`analyze.enter` binds `tagName = getCanonicalTagName(tag)` (~line 105) and never reassigns it, then recomputes `"#" + getCanonicalTagName(tag)` at line 212 (`getCanonicalTagName` runs `getTagName` plus a switch each call). Use `"#" + tagName`.

## `ensureParamReasonGroup` builds group before the duplicate check

`packages/runtime-tags/src/translator/util/sections.ts:441` | 2026-07-13 | impact:low | effort:low

`ensureParamReasonGroup` builds `group` with `Symbol(getDebugNames(reason))` unconditionally (lines 440–443) before the `findSorted` duplicate check (line 446) throws it away whenever a match exists. `getDebugNames` runs on every call and is not `MARKO_DEBUG`-gated. Probe for the existing group first; construct `group` only on the add path.

## Redundant array spread before in-place sort

`packages/runtime-tags/src/translator/util/references.ts:1308` | 2026-07-13 | impact:low | effort:low

`intersections` is a private array (produced by `.filter()`) whose pre-sort order is never reused, yet line 1308 does `intersections = [...intersections].sort(...)`, allocating a copy for nothing. Sort in place.

## Loop-allocated closure in `getMaxOwnSourceOffset`

`packages/runtime-tags/src/translator/util/references.ts:1381` | 2026-07-13 | impact:low | effort:low

`trackScopeOffset` (line 1381) is defined inside a `for (const binding of intersection)` loop but captures only the function-scoped `scopeOffset`, so a fresh closure is allocated every iteration. Hoist the definition above the loop; the `forEach` calls reference the single closure.

## Redundant `else { break; }` before switch break

`packages/runtime-tags/src/dom/dom.ts:293` | 2026-07-13 | impact:low | effort:low

In the input `case`, the if/else chain ends with `else { break; }` (line 293) immediately followed by the switch's own trailing `break;` — identical effect, so the `else { break; }` is dead. Same pattern at `packages/runtime-tags/src/html/attrs.ts:296`. Delete both `else { break; }` clauses.

## Inlined `normalizeAttrValue(value) || ""` duplicates `normalizeStrProp`

`packages/runtime-tags/src/dom/controllable.ts:178` | 2026-07-13 | impact:low | effort:low

Lines 178 and 193 inline `normalizeAttrValue(value) || ""`, which is byte-for-byte the `normalizeStrProp` helper already defined in the same file (line 516). Replace both with `normalizeStrProp(value)` (the declaration is hoisted, so forward use is fine).

## Recomputed `serializeMarker !== 0` instead of reusing `resumeKeys`

`packages/runtime-tags/src/html/writer.ts:523` | 2026-07-13 | impact:low | effort:low

`const resumeKeys = serializeMarker !== 0` (line 522) is immediately followed by re-evaluating the same `serializeMarker !== 0` sub-expression to build `resumeMarker` (line 523). Reuse `resumeKeys`.

## `hasOwnProperty` borrow instead of `Object.hasOwn`

`packages/runtime-tags/src/html/assets.ts:11` | 2026-07-13 | impact:low | effort:low

`const { hasOwnProperty } = {}` (line 11) exists only to call `hasOwnProperty.call(options, key)` (line 175). Node ≥ 22 (repo minimum) provides `Object.hasOwn`; delete the borrow and use `Object.hasOwn(options, key)`.

## Dead `else` recomputes `relatedControllable` in native-tag

`packages/runtime-tags/src/translator/visitors/tag/native-tag.ts:285` | 2026-07-13 | impact:low | effort:low

The `else` at line 285 recomputes `relatedControllable = getRelatedControllable(tagName, seen)`, but that branch runs only when `spreadReferenceNodes` is falsy, in which case the post-loop `relatedControllable ||= getRelatedControllable(...)` (~line 172/196) already produced the same value. Delete the `else`.

## Duplicated attr-tag push across repeated/non-repeated paths

`packages/runtime-tags/src/translator/util/translate-attrs.ts:98` | 2026-07-13 | impact:low | effort:low

The `else` of `if (prevProp)` (repeated case, no prior prop) and the outer `else` (non-repeated case) push an identical `toObjectProperty(attrTagMeta.name, callRuntime("attrTag", propsToExpression(translatedAttrTag.properties)))` (~lines 109 and 120). Collapse: compute `prevProp` only when `repeated`, and share the single push for the no-prev case.

## `<try>` HTML enter fetches body + section twice

`packages/runtime-tags/src/translator/core/try.ts:90` | 2026-07-13 | impact:low | effort:low

The HTML `enter` guards with `if (!getSectionForBody(tag.get("body")))` (line 90) then re-fetches `tag.get("body")` and `getSectionForBody(...)` (lines 95–96). Fetch once, as the await/for enter visitors do: `const tagBody = tag.get("body"); const bodySection = getSectionForBody(tagBody);` then guard, dropping the non-null assertion.

## Redundant re-destructure of `value` in `<script>`

`packages/runtime-tags/src/translator/core/script.ts:111` | 2026-07-13 | impact:low | effort:low

`value` is destructured from `valueAttr` at line 108 (and used at 109); `valueAttr` is never reassigned, yet the DOM branch re-destructures `const { value } = valueAttr` at line 111, shadowing with an identical binding. Delete line 111.

## `toFirstExpressionOrBlock` re-implements `toParenthesizedExpressionIfNeeded`

`packages/runtime-tags/src/translator/util/to-first-expression-or-block.ts:5` | 2026-07-13 | impact:low | effort:low

The switch (lines 5–15) returns `toParenthesizedExpressionIfNeeded(expression)` for Object/Assignment expressions and `expression` otherwise — exactly what `toParenthesizedExpressionIfNeeded` (defined just below at line 17) already does for every input. Replace the whole block with a single `return toParenthesizedExpressionIfNeeded(...)` applied to the first statement's `.expression`.

## Interop `preserveBoundary` / `"preserve"` registration arg is inert (dead code)

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts:318` | 2026-07-13 | impact:low | effort:med

The tags translator carefully computes `preserveBoundary` and conditionally
appends `t.stringLiteral("preserve")` to the compat `s(id, renderer[, mode])`
registration, but the runtime `register` (`tags-compat/runtime-html.js:240`) does
`boundaryModeByRenderer.set(renderer, boundaryMode || true)` and only ever reads
the value as a truthy `forceBoundary`. The `PRESERVE_BOUNDARY = "preserve"`
constant (`runtime-html.js:11`) is defined but never referenced anywhere. So the
translator's `preserveBoundary` branch produces no behavioral difference, and
because `register` coerces to `true`, any `s(id, renderer)` forces the boundary
for that renderer's inert uses in other templates (over-serialization), since
`boundaryModeByRenderer` is keyed by the shared renderer object. Strongly
suggests an intended `boundaryMode === PRESERVE_BOUNDARY` runtime branch that was
never wired up — either implement it or drop the dead constant + arg.

## Compat re-render writes scope nodes onto a DOM node instead of the branch scope

`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js:179` | 2026-07-13 | impact:low | effort:low

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

## Interop emits a duplicate registration scriptlet per class-tag occurrence

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts:326` | 2026-07-13 | impact:low | effort:low

Each Class-API custom-tag occurrence pushes its own registration statement to
`program.body` with no dedup by class-file id: three `<class-display/>` uses emit
three identical `_resume("…",_classDisplay)` (DOM) / `_s("…",_classDisplay)`
(HTML) statements (the `??=` non-template branch at lines 360-377 duplicates the
same way). Idempotent, so not incorrect, but N× redundant given "bundle size is a
feature" — one registration per unique class file would suffice.
