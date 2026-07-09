# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Make the node-marker run-register reset structural, not manual

`packages/runtime-tags/src/html/writer.ts:546` | 2026-07-08 | impact:med | effort:low

The persisted continuation encoding's invariant -- every non-node resume
marker must reset the per-chunk node-marker run register
(`lastNodeMarkScope = -1`) so the following node marker re-emits its full
scope id -- is enforced entirely by convention: a dozen direct
`$chunk.lastNodeMarkScope = -1` / `this.lastNodeMarkScope = -1` assignments
scattered through `writer.ts` (lines 837, 893, 973, 997, 1149, 1154, 1200,
1205, 1239, 1277, 1757, 1765) plus three calls through the exported
`_reset_node_mark_run()` wrapper from `html/dynamic-tag.ts`. Commit
3bfee46c had to add the reset at seven sites that had been missed
(`_show_start`, both `_await` paths, `_try`, the fragment placeholder
brackets, and `_dynamic_tag`'s two branch-marker sites) -- silent until a
same-scope straddle across one of those specific markers corrupted a hole
binding on the next navigation. A `writeMark(chunk, symbol, payload)`
helper that writes the mark and resets the given chunk's register in one
call (it must take the chunk explicitly -- some emitters write to
`this`/a boundary's chunk rather than the module-level `$chunk`) would make
every non-node marker site reset by construction instead of by remembering
to.

## AccessorPrefix letter namespace is nearly exhausted, with informal claims

`packages/runtime-tags/src/common/accessor.ts:1-62` | 2026-07-09 | impact:med | effort:low

The optimized `AccessorPrefix` single-letter namespace has A–M and O as
enum members, N/P/Q/R/S/T/U/Z reserved via comments for persisted-only
keys, and V/W informally claimed by the `<context>` branch after its
original N/P choice collided with persisted-update's reservations
(designs/context.md, "Evaluation against the `<context>` branch", item
1). That leaves X and Y — and `<let by=>` (designs/let-by.md, open
question 2) needs one of them for its key slot. Two asks: (a) claims
should land in the catalog comment at proposal time, not implementation
time, so parallel branches stop re-discovering collisions at merge; (b)
before a third consumer letters itself out of alphabet, decide the
overflow scheme (two-letter prefixes for persisted-only keys are free —
they never ship in client bundles and the generic applier already
disambiguates prefixed keys by length, dom/update.ts's
`key.length > 1` checks).
