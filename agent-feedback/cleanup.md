# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

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

## Normalize the params-binding `BindingType` so a param is identifiable by type

`packages/runtime-tags/src/translator/util/references.ts` › `trackParamsReferences` | 2026-07-22 | impact:med | effort:high

Every section's "params binding" is created by `trackParamsReferences`, but each caller passes a different `BindingType`: `<for>`/`<await>` use `derived` (`core/for.ts`, `core/await.ts`), `<define>`/attribute-tags/dynamic-tag/known-tag use `param`, program input uses `input`, and an attribute-tag `<for>` uses `local`. So "is this a param?" cannot be answered from `binding.type` and the codebase instead keys off identity — `root === root.section.params` (see `isParamBinding`, `getDebugName`, and the assignment guard `binding.upstreamAlias === binding.section.params`). The heterogeneity is currently load-bearing, not accidental: `BindingType` selects the `resolveBindingSources` path, and `<for>`/`<await>` deliberately use `derived` so `resolveDerivedSources` makes the item param's `Sources` transparently reflect its loop/await source (`<for of=stateVal>` → `state` source; `<for of=input.list>` → `param` source), which drives serialize-reason scheduling (`isStateSerializeReason` vs `isReasonDynamic` in `serialize-reasons.ts`) and `scopeOffset` propagation (`getMaxOwnSourceOffset`). A naive `derived→param` flip severs the `setBindingDownstream` link (it goes dead before `resolveDerivedSources` runs), mis-scheduling serialization and losing scope offsets. The cleanup: give params a correct, uniform type (or a dedicated param marker on the binding) so `isParamBinding` reduces to a `binding.type` check, while moving the source-transparency of `<for>`/`<await>` params off the overloaded `derived` type onto an explicit source-resolution input. Verify current state: `rg -n "trackParamsReferences\(" packages/runtime-tags/src/translator` shows the four distinct `BindingType` args; `isParamBinding` in `references.ts` still uses the identity walk because no type distinguishes them.

## Membranes v1 deliberate gaps (state-anchored membranes commit)

Recorded from the membranes implementation; each is scoped out of v1 on
purpose (see `persisted-pages-scratch/designs/state-anchored-membranes.md` "Known gaps"):

- Nucleus-in-scaffold splicing (regions containing live nuclei) — the v2
  frontier; v1 keeps any nucleus-bearing path fully live instead.
- Async-in-region streaming (await/try bodies are forced live).
- Lazy (`load`) and tag-var custom-tag children always delegate, even when
  nucleus-free; a nucleus-free lazy child ships a useless module.
- CSR-created region anchors lack live-branch tracking coverage.
- `<define>` bodies invoked through the known-tag direct path never
  region-wrap (hop path only).
- Region interiors still evaluate (and discard) serialize-guard
  expressions; compile-time pruning inside regions would shrink server
  code further.

**Why:** each requires machinery (splice identity, capture-across-flush,
loader-region hybrid) whose cost the round-5 experiment gates should price
before it is built.
**How to apply:** treat as the membrane-tax experiment backlog; none block
the fixture matrix.
