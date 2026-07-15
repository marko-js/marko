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
