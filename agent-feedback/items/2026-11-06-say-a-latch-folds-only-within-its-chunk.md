---
type: unclear
impact: med
effort: low
site: packages/runtime-tags/AGENTS.md › Runtime conventions
---

# Say a latch folds only within its chunk

`packages/runtime-tags/AGENTS.md` › Optional feature enablement says latches let bundlers "fold latch and guarded code away together", and never to statically import control-flow from a main-graph module such as load. In a code-split build rolldown folds a latch only after splitting into chunks, so whichever chunk references the guarded function keeps it even with the latch off. Following the import rule literally (a `.feat` handing `startAwait` to a latch in `load.ts`) grew pages with a `@placeholder` but no lazy tag by about 250 B min, while guarding beside the function, inside control-flow, shrank lazy pages with no growth elsewhere (see `startLoadAwait` in `dom/control-flow.ts`). Reword both lines: the latch and the code it drops must share a chunk, so check the guard where the guarded code lives, and the import rule is about not pulling feature code into the main graph, measured on split builds.

Check: compare fixture `sizes.json` for `lazy-tag-*` and `*placeholder*` fixtures with the guard in `load.ts` versus in `control-flow.ts`; only the latter shrinks lazy pages without growing placeholder-only ones.
