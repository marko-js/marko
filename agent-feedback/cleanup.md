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

## Residual "update render" phrasing outside the B2 rename scope

`packages/runtime-tags/src/dom/queue.ts:23` | 2026-07-14 | impact:low | effort:low

The B2 terminology pass renamed the patch-producing render mode to "patch
render" (`State.patch`, `_patch_reason`, comment sweep in `html/writer.ts`,
`html/serializer.ts`, `dom/update.ts`, `dom/update-merges.ts`; see
`designs/persisted-pages-glossary.md`, "Naming conventions"). Files outside
that scope still say "update render(s)" for the same concept: `dom/queue.ts:23`
("update-render patch"), `common/types.ts:142`, several translator comments
(`translator/util/serialize-guard.ts`,
`translator/visitors/tag/native-tag.ts`, `translator/visitors/placeholder.ts`,
`translator/util/signals.ts`, ...), fixture `test.ts` docs, and in @marko/run
the dev strings/test names in `runtime/persisted-navigation.ts:92,144`,
`__tests__/persisted-render.test.ts`, and `vite/types.ts:80`. (The Phase C
sweep fixed `translator/util/update-merges.ts`,
`translator/visitors/program/update.ts`, and `__tests__/main.test.ts`.) The
run-side strings have no scheduled pass. Sweep the rest to "patch render"/
"patch response".

## Stale design-doc section pointers outside the Phase C file list

`packages/runtime-tags/src/common/accessor.ts:48` | 2026-07-14 | impact:low | effort:low

Comments cite design-doc sections that no longer exist after the B1 docs
rewrite: `designs/persisted-pages-architecture.md` has no "Fragment frames" or
"Possession echo" heading (the wire grammar now lives in
`designs/persisted-pages-wire-format.md` under "Fragment entries" /
"Possession echo"; the concept under architecture's "Structural divergence"),
and `designs/persisted-pages-roadmap.md` has no "Correctness" section or
numbered audit items (it was reorganized into "Release blockers" / "Known
narrow gaps" / "Deferred until after the gates"). The Phase C sweep fixed the
runtime/translator/harness sources; still stale: `common/accessor.ts:48`
(roadmap "Correctness") and the fixture docs in
`__tests__/fixtures/persisted-update-*/test.ts` ("Fragment frames",
"Possession echo", roadmap "Correctness", and "Async correctness audit,
item N" citations). Re-point them at the wire-format doc sections or the
roadmap's current headings.
