# Dead-server-code elimination study (Marko 6 / runtime-tags) — ESM

Scope: modern ESM bundling only (Vite/rollup/rolldown/esbuild/webpack). Reproducible
measurements of the **client (DOM) bundle**, built with the repo's rolldown
harness (`createServerRunner`, `optimize: true`, tree-shaking on). Sizes include
the runtime. Run with:

```
node experiments/dce/setup-deps.mjs       # one-time: creates the server-dep fixture
node -r ~ts experiments/dce/floor.ts       # static-zero + runtime floor
node -r ~ts experiments/dce/sweep3.ts      # static <for> list
node -r ~ts experiments/dce/serverdep.ts   # server-only dependency leak
node experiments/dce/corpus.mjs            # aggregate the repo's 574-fixture corpus
```

## Headline

Under ESM, Marko's dead-server-code elimination is **essentially complete**.
Across every shape tested and the repo's own 574-fixture corpus, the client
bundle contains no dead server code that Marko itself emits.

| Page shape                        | brotli | what survives                               |
| --------------------------------- | ------ | ------------------------------------------- |
| fully static (no island)          | 0      | nothing — no client JS emitted at all       |
| 1 button island                   | 1,700  | the island                                  |
| button + 8 server-only `${input}` | 2,939  | island only (reactive texts pruned)         |
| static `<for>` list + button      | 1,697  | island only (`_for_of` not even bundled)    |
| deep static Layout + island       | 1,699  | island only                                 |
| interactive parent + static child | 1,738  | island only (child `$setup`/imports shaken) |

## What the data shows

1. **Whole-page elimination is compiler-driven.** A page with no interactivity
   emits **0 bytes** of client JS — decided by the entry builder
   (`entry-builder.ts`: `state.init` stays false → no runtime import), not by
   tree-shaking.

2. **Mixed pages: everything server-only is eliminated.** Static children, deep
   static layouts, static `<for>` loops, and server-only reactive bindings
   (`${input.*}` never mutated on the client) all drop. Only modules with a real
   interactive anchor (`_script`/`_resume`/event registration, which
   self-registers on module eval) survive.

3. **`$setup` is tree-shaken for resumed roots — even for embedded children.** A
   resumed page restores state from the serialized payload, so the template's
   `$setup` is never called on the client and is dropped entirely. That includes
   a static child's `$setup` and any static `<const>` initialization in it. So
   even a static value computed from a heavy import (`renderMarkdown(BIG)` in a
   `<const>`) does not ship — Marko's use of it is fully eliminated.

4. **The only residual client leak is dependency hygiene.** `serverdep.ts` shows
   a server-only npm dep (`heavy-lib`) leaking 138 b into the client bundle —
   _not_ because Marko emits dead code (it shook out `$setup`, `renderMarkdown`,
   and the input path), but because `heavy-lib` is not marked `sideEffects:
false` and has an unprovable-pure top-level `const`. rolldown therefore keeps
   the bare import edge. Marking the dep `sideEffects: false` drops it to the
   1,700 baseline. This is the dependency's responsibility, and keeping a module
   with genuine top-level side effects is _correct_ conservatism.

## Validation against the repo's own 574-fixture corpus

`packages/runtime-tags/src/__tests__/fixtures/*/sizes.json` +
`__snapshots__/dom.bundle.js` are real compiled+bundled outputs:

- **148 / 574 (26%)** fixtures ship **0** client bytes.
- The **426** interactive fixtures are small: client brotli **min 62, p25 1336,
  median 1514, p75 2851, p95 5132, max 6057** — dominated by the runtime floor +
  per-feature machinery, not leaked content. The largest are all `dynamic-tag*`.
- **No dead static-HTML leak.** Only 17/426 optimized bundles contain any HTML
  literal >25 chars, and every one is legitimately client-rendered (e.g. an
  `<else>` branch, a controllable `<select>`'s options).
- The smallest nonzero bundles (62–111 b) are `lazy-tag*`: the interactive
  `_script` is code-split into a separate chunk via `load:`, leaving a tiny page
  entry.

## Conclusion / ranked recommendations (ESM)

Template/server-code elimination is already solved. The remaining real-world
levers, in ROI order:

1. **Runtime floor — the only large reducible cost.** Marko's own `build:sizes`
   benchmark: the `counter` bundle is 1,894 b brotli, of which **1,774 is
   runtime**. Once template DCE is done (it is), the per-island runtime baseline
   and control-flow machinery dominate (a single `<if>` ≈ +1.2 KB brotli).
   Finer-grained resume/runtime entry points so a page that uses only `_on`
   doesn't pull branch/await machinery are where bytes actually live.
2. **Server-only dependency hygiene.** A server-only dep imported into a `.marko`
   file leaks only if it isn't `sideEffects: false` (or has impure top-level
   code). Options: document this; have the Marko bundler plugin treat
   `.marko`-originated server-only imports as side-effect-free at the point of
   use; or keep heavy server work behind `<server>`/server-only modules that the
   compiler already strips from the dom output.
3. **`load:` for large interactive subtrees.** Already excellent — it code-splits
   interactive code into separate chunks via compiler-minted virtual modules,
   keeping the main entry tiny. Lean on it more for big islands.

> Out of scope (per direction): pipelines that downlevel ESM→CJS or strip
> `@__PURE__` before the bundler. Those collapse DCE, but are a misconfiguration
> rather than a property of Marko.
