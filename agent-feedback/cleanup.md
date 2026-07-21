# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Interop `preserveBoundary` / `"preserve"` registration arg is inert (dead code)

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `translate.exit` | 2026-07-13 | impact:low | effort:med

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

## Interop emits a duplicate registration scriptlet per class-tag occurrence

`packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts` › `translate.exit` | 2026-07-13 | impact:low | effort:low

Each Class-API custom-tag occurrence pushes its own registration statement to
`program.body` with no dedup by class-file id: three `<class-display/>` uses emit
three identical `_resume("…",_classDisplay)` (DOM) / `_s("…",_classDisplay)`
(HTML) statements (the `??=` non-template branch at lines 360-377 duplicates the
same way). Idempotent, so not incorrect, but N× redundant given "bundle size is a
feature" — one registration per unique class file would suffice.

## Represent metadata-only HTML effects without invalid AST sentinels

`packages/runtime-tags/src/translator/util/signals.ts` › `toReturnedFunction` | 2026-07-15 | impact:low | effort:low

`addHTMLEffectCall` deliberately passes `undefined as any` to `addStatement`, which pushes it into a `t.Statement[]`; `traverseReplace` and Babel generation happen to skip the falsy array member. The call exists to mark effect dependencies/side effects rather than to add executable syntax, but it violates the signal and Babel AST types and makes every downstream consumer tolerate an invalid node. Add an explicit metadata-only effect operation (or let `addStatement` accept an omitted statement without pushing it) and remove the cast/TODO.

## Interop translator calls `resolveOptionalTaglibs` without the `|| []` guard the compiler's own caller uses

`packages/runtime-tags/src/translator/interop/index.ts` › `createInteropTranslator` | 2026-07-19 | impact:low | effort:low

The interop translator crashes cryptically at module-eval when merged with a Class-API translator that does not export the optional `optionalTaglibs` field. `createInteropTranslator` calls `taglib.resolveOptionalTaglibs(translate5.optionalTaglibs)` with no fallback and no `onError` (`translator/interop/index.ts:31`), whereas the compiler's own caller guards it: `resolveOptionalTaglibs(translator.optionalTaglibs || [], onError)` (`compiler/src/taglib/index.js:40`). `resolveOptionalTaglibs` iterates unguarded — `for (const id of taglibIds)` (`compiler/src/taglib/index.js:97`) — so a missing field throws `TypeError: taglibIds is not iterable` with no source frame indicating which translator/field is at fault. `optionalTaglibs` is genuinely optional (runtime-class exports it, runtime-tags does not), so the interop path assumes a field the merge partner may not provide. Latent for the shipped runtime-class translator (it exports `optionalTaglibs`), but any class-side translator lacking the field crashes. Mirror the compiler's guard: `resolveOptionalTaglibs(translate5.optionalTaglibs || [], onError)`. Not in any existing feedback file.

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

## Remove the unreachable numeric/undefined branches in `getSectionInstancesAccessorLiteral`

`packages/runtime-tags/src/translator/util/references.ts` › `getSectionInstancesAccessorLiteral` | 2026-07-20 | impact:low | effort:low

`getSectionInstancesAccessor` always returns a non-empty string — both arms are string concatenations (`section.sectionAccessor.prefix + getScopeAccessor(...)` or `getAccessorPrefix().ClosureScopes + section.id`) and `getScopeAccessor` returns a string in every branch (references.ts:1939-1944). So in `getSectionInstancesAccessorLiteral` (1946-1953) the `typeof accessor === "number"` test can never be true (the `numericLiteral` arm is dead) and the `: undefined` fallback is unreachable; the function always returns a `t.stringLiteral`. The `... | undefined` return type this implies is misleading and forces callers to paper over it (`getSectionInstancesAccessorLiteral(currentSection)!` in signals.ts:1076). Collapse the body to `return t.stringLiteral(getSectionInstancesAccessor(section))` and drop the now-needless non-null assertions. Re-verify: the collapse plus `npm run test:parallel` leaves snapshots unchanged.

## Remove or implement the unhandled `WalkCode.Inside` so a type-permitted visit code cannot hang the walker

`packages/runtime-tags/src/dom/walker.ts` › `walkInternal` | 2026-07-20 | impact:low | effort:low

`WalkCode.Inside` (charcode 36) is a member of the `VisitCodes` union that gates `visit(path, code)` (walks.ts:50-54), is mapped in `walkCodeToName`, and has its semantics documented in the walker header — yet `walkInternal` has no branch for it and no caller ever emits it (grep finds `WalkCode.Inside` only in walks.ts). Because `VisitCodes` permits it, a future `visit(tag, WalkCode.Inside)` type-checks and emits charcode 36 into the walk string; at runtime 36 matches none of the explicit checks and falls into `value < WalkCode.NextEnd + 1` (36 < 92), computing `WalkRangeSize.Next * 0 + 36 - 67 = -31` and running `while (value--) walker.nextNode()`, which decrements from -31 and never terminates. Either implement the `Inside` branch in `walkInternal` or drop `WalkCode.Inside` from `VisitCodes`/the enum until it is, so the type surface cannot invite a hang. Re-verify: trace `walkInternal` with a walk string containing `String.fromCharCode(36)` — no `value === …` check matches and the Next branch yields a negative loop count.

## Drop the always-false `referencesScope` scope-detection from the DOM `<script>` effect translator

`packages/runtime-tags/src/translator/core/script.ts` › `default export translate.exit` | 2026-07-20 | impact:low | effort:low

In `core/script.ts` `translate.exit` (DOM branch) the async/generator arm computes `referencesScope = traverseContains(value, isScopeIdentifier)`, whose only consumer is `t.callExpression(value, referencesScope ? [scopeIdentifier] : [])` (script.ts:117,142). `isScopeIdentifier` is reference-equality against the compiler-generated `scopeIdentifier`, but that identifier is substituted into effect binding reads only later, in `writeSignals` via `traverseReplace(signal, "effect", replaceEffectNode)` (signals.ts:975), which runs from the program's `translate.exit` — after this tag's exit. At the point `referencesScope` is evaluated, `value` still holds the user's original identifiers, so it is unconditionally false and the ternary always yields `[]`; the value arrow is param-less anyway (`t.arrowFunctionExpression([], …)`, script.ts:47), so the argument would be ignored even if passed, and the generated async IIFE closes over the effect wrapper's `$scope` param. The surrounding `if (value.async || value.generator)` branch must stay (it keeps an `await`/`yield` body from being inlined into the synchronous effect arrow), but the variable, its per-async/generator-script `traverseContains` full-subtree walk, and the ternary should collapse to an unconditional `t.callExpression(value, [])`. Re-verify: compiling `<let/count=0/><script>await fetch(count)</script>` with `npm run compile -- -o dom -d` emits `_script("…", $scope => (async () => { await fetch($scope.count); })())` — the IIFE is invoked with no argument despite reading a binding, so dropping `referencesScope` leaves output and snapshots unchanged.

## Drop the redundant toParenthesizedExpressionIfNeeded special-casing; @babel/generator already parenthesizes every arrow-body form that reaches it

`packages/runtime-tags/src/translator/util/to-first-expression-or-block.ts` › `toParenthesizedExpressionIfNeeded` | 2026-07-20 | impact:low | effort:low

`toFirstExpressionOrBlock` and its exported helper `toParenthesizedExpressionIfNeeded` (util/to-first-expression-or-block.ts:10) wrap an arrow-function body's `ObjectExpression`/`AssignmentExpression` in a `t.parenthesizedExpression`, but every input that actually reaches the four call sites (core/await.ts:161, signals.ts:720, signals.ts:981, signals.ts:835) is already parenthesized by `@babel/generator`'s `needsParens`: object expressions, object/array-pattern destructuring assignments, and sequences all print with the disambiguating parens without any wrapper — indeed the helper pointedly does not wrap `SequenceExpression`, so the code already relies on the generator for the trickiest case. Removing the special-casing and inlining `stmts[0].expression` / `body[0].expression` at the three sites leaves the whole translator suite byte-identical: regenerating every runtime-tags fixture with the helper stubbed to `return expr` changed zero snapshots across 5509 passing tests. The helper is not a strict no-op — for a plain or member assignment such as `a.b = y` it would emit a superfluous `(a.b = y)` that Babel omits — but that shape never reaches these arrow-body positions today, which is why removal is safe. Re-verify by stubbing `toParenthesizedExpressionIfNeeded` to `return expr`, running `npm run test:update -- --grep "runtime-tags/translator"`, and confirming `git diff -- '*__snapshots__*'` is empty.
