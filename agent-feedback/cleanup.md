# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

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

## Represent metadata-only HTML effects without invalid AST sentinels

`packages/runtime-tags/src/translator/util/signals.ts:1158` | 2026-07-15 | impact:low | effort:low

`addHTMLEffectCall` deliberately passes `undefined as any` to `addStatement`, which pushes it into a `t.Statement[]`; `traverseReplace` and Babel generation happen to skip the falsy array member. The call exists to mark effect dependencies/side effects rather than to add executable syntax, but it violates the signal and Babel AST types and makes every downstream consumer tolerate an invalid node. Add an explicit metadata-only effect operation (or let `addStatement` accept an omitted statement without pushing it) and remove the cast/TODO.

## Interop translator calls `resolveOptionalTaglibs` without the `|| []` guard the compiler's own caller uses

`packages/runtime-tags/src/translator/interop/index.ts:31` | 2026-07-19 | impact:low | effort:low

The interop translator crashes cryptically at module-eval when merged with a Class-API translator that does not export the optional `optionalTaglibs` field. `createInteropTranslator` calls `taglib.resolveOptionalTaglibs(translate5.optionalTaglibs)` with no fallback and no `onError` (`translator/interop/index.ts:31`), whereas the compiler's own caller guards it: `resolveOptionalTaglibs(translator.optionalTaglibs || [], onError)` (`compiler/src/taglib/index.js:40`). `resolveOptionalTaglibs` iterates unguarded — `for (const id of taglibIds)` (`compiler/src/taglib/index.js:97`) — so a missing field throws `TypeError: taglibIds is not iterable` with no source frame indicating which translator/field is at fault. `optionalTaglibs` is genuinely optional (runtime-class exports it, runtime-tags does not), so the interop path assumes a field the merge partner may not provide. Latent for the shipped runtime-class translator (it exports `optionalTaglibs`), but any class-side translator lacking the field crashes. Mirror the compiler's guard: `resolveOptionalTaglibs(translate5.optionalTaglibs || [], onError)`. Not in any existing feedback file.

---
