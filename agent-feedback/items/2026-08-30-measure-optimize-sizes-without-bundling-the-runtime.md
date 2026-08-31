---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/__tests__/utils/bundle.ts › externalRuntimePlugin
---

# Measure optimize sizes without bundling the runtime into every fixture

The optimize dom build re-emits and tree-shakes the whole runtime for every
fixture, because `sizes.json` records minified chunk totals and those totals
only exist if the runtime sits in the chunk. It is the one fixture build that
cannot link the prebuilt runtime as an external, and it dominates what bundling
costs the suite.

Measuring a chunk's shared-runtime share once per process and adding it to the
fixture's own tree-shaken bytes would let that build take the external too.

Check: in `createBuilds`, extend `externalRuntimePlugin` to the optimize dom
build and time `pnpm run test:parallel`; the fixture `sizes.json` assertions are
what fail.
