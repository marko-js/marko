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

## Residual "update render" phrasing in @marko/run

`@marko/run runtime/persisted-navigation.ts:92,144` | 2026-07-14 | impact:low | effort:low

The persisted terminology passes renamed the patch-producing render mode to
"patch render"/"patch response" (see `designs/persisted-pages-glossary.md`,
"Naming conventions"); the marko repo (runtime, translator, fixtures, designs)
is now swept. Out of reach from this repo, @marko/run still says "update
render(s)" in dev strings/test names: `runtime/persisted-navigation.ts:92,144`,
`__tests__/persisted-render.test.ts`, and `vite/types.ts:80`. Those strings
have no scheduled pass; sweep them to "patch render"/"patch response".

## Represent metadata-only HTML effects without invalid AST sentinels

`packages/runtime-tags/src/translator/util/signals.ts` › `toReturnedFunction` | 2026-07-15 | impact:low | effort:low

`addHTMLEffectCall` deliberately passes `undefined as any` to `addStatement`, which pushes it into a `t.Statement[]`; `traverseReplace` and Babel generation happen to skip the falsy array member. The call exists to mark effect dependencies/side effects rather than to add executable syntax, but it violates the signal and Babel AST types and makes every downstream consumer tolerate an invalid node. Add an explicit metadata-only effect operation (or let `addStatement` accept an omitted statement without pushing it) and remove the cast/TODO.

## Interop translator calls `resolveOptionalTaglibs` without the `|| []` guard the compiler's own caller uses

`packages/runtime-tags/src/translator/interop/index.ts` › `createInteropTranslator` | 2026-07-19 | impact:low | effort:low

The interop translator crashes cryptically at module-eval when merged with a Class-API translator that does not export the optional `optionalTaglibs` field. `createInteropTranslator` calls `taglib.resolveOptionalTaglibs(translate5.optionalTaglibs)` with no fallback and no `onError` (`translator/interop/index.ts:31`), whereas the compiler's own caller guards it: `resolveOptionalTaglibs(translator.optionalTaglibs || [], onError)` (`compiler/src/taglib/index.js:40`). `resolveOptionalTaglibs` iterates unguarded — `for (const id of taglibIds)` (`compiler/src/taglib/index.js:97`) — so a missing field throws `TypeError: taglibIds is not iterable` with no source frame indicating which translator/field is at fault. `optionalTaglibs` is genuinely optional (runtime-class exports it, runtime-tags does not), so the interop path assumes a field the merge partner may not provide. Latent for the shipped runtime-class translator (it exports `optionalTaglibs`), but any class-side translator lacking the field crashes. Mirror the compiler's guard: `resolveOptionalTaglibs(translate5.optionalTaglibs || [], onError)`. Not in any existing feedback file.

---

## Closure call-site `_updating` guards double the body guard but are not removable

`packages/runtime-tags/src/translator/visitors/program/dom.ts:71` | 2026-07-17 | impact:low | effort:med

Update-delivered closure signals carry the patch-apply guard twice: their
render body is wrapped in `if (!_updating)` (`util/signals.ts`,
`buildUpdatingGuard` in the closure `signal.build`), and compiled call sites
(`visitors/program/dom.ts` child-section render statements) wrap the
invocation again. Directly nested duplicates are now absorbed at the body
wrap, but the call-site guard cannot be dropped as a pure duplicate: the
`_closure_get` wrapper also stamps the signal index and subscribes the scope
(`dom/signals.ts:389-397`), so the call-site guard additionally suppresses
subscription during a patch apply (branch setup runs under `_updating` via
`attachAwaitBranch`/fresh keyed branches). Centralizing to one layer means
first deciding whether patch-time subscription is desired, then moving the
guard inside the runtime wrapper or the body consistently.

## `attachAwaitBranch` duplicates `resolveAwait`'s detached block by measured necessity

`packages/runtime-tags/src/dom/control-flow.ts:245` | 2026-07-17 | impact:low | effort:med

`attachAwaitBranch` (persisted update path) copies `resolveAwait`'s
detached-await block (pending-scope sync, `setupBranch`, clear flag,
`insertBranchBefore`). Factoring one into the other was attempted and
reverted: with `resolveAwait` calling the exported helper, oxc does not
inline the shared function, growing every ordinary await-using bundle by
about +29 min / +14 brotli bytes (measured across the await/async fixture
sizes) to save persisted-only duplication. A future dedup must keep the
ordinary path inline -- e.g. a compile-time include of the shared body, or
an explicit maintainer call that the ordinary cost is acceptable.

## Truncated comment opens mid-sentence in referenced-identifier.ts

`packages/runtime-tags/src/translator/visitors/referenced-identifier.ts:22` | 2026-07-17 | impact:low | effort:low

The comment above `getAbortResetEmitted` now begins "// each id on its
expression root's extra, so translates are REQUIRED to..." — its first three
lines ("Abort ids must be identical across every compile of a template...")
were deleted while nearby imports changed, leaving a dangling fragment that
starts mid-sentence. Restore the opening lines or reword the survivor into a
self-contained two-line comment.

## Pre-existing comments exceeding the two-line rule

`packages/compiler/src/config.js`, `packages/runtime-tags/src/**` | 2026-07-18 | impact:low | effort:medium

Sweeping the persisted-pages diff for the two-line comment rule surfaced ~90
comment blocks longer than two lines that predate the branch and are
byte-identical to `main` (config option JSDoc in `compiler/src/config.js`,
several `translator/util/references.ts` and `dom/resume.ts` blocks,
serializer.test.ts commented-out cases). Left untouched to keep the feature
diff comment-edits-only; condensing them is a standalone cleanup.

## Normalize inconsistent local naming flagged by a terminology audit

`packages/runtime-tags/src/html/serializer.ts` › `State` | 2026-07-20 | impact:low | effort:low

A file-by-file terminology audit flagged several local naming inconsistencies that are too narrow for CONTEXT.md but worth normalizing when touching these files: `html/serializer.ts` uses `assigns`/`assigned`/`addAssignment` for one mechanism and names its generation counter `flush` (reads as an output flush; it is compared, not flushed — see `parent.flush === state.flush`); `translator/core/if.ts` destructures the same branches array as `branchBodySection` in one place and `branchBody` in another; `dom/controllable.ts` mixes `Controllable` (file, `syncControllableFormInput`) with `Controlled*` accessor/type prefixes for the same concept — CONTEXT.md now canonicalizes "controllable"; `translator/core/await.ts` pairs the near-homophones `startBinding` (a Binding) and `startMark` (a serialize-guard expression). Each is a rename-in-place with no behavior change; snapshots regenerate where identifiers leak into debug output. Re-verify by grepping the cited symbols.
