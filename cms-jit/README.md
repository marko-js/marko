# cms-jit (prototype)

A JIT bundler for CMS-driven Marko 6 pages: compile a template per CMS _shape_ (view types and structural props, no content) with comptime, and serve it once it exists. The design is in the workspace proposal.

Run from the repo root (needs this branch's comptime support):

```sh
node -r ~ts cms-jit/bench.ts      # generic vs per-shape vs per-page builds: sizes, resume payload, render time
node -r ~ts cms-jit/simulate.ts   # the JIT loop under Zipf traffic across a deploy
```

`bench.ts`: `PAGES`, `RUNS`, `VARIANTS=generic-lazy,shape`, `RUNTIME=bundled` (each page bundles its own runtime instead of sharing the host's).

`simulate.ts`: `PAGES`, `LONG_TAIL` (share of freeform pages), `ZIPF`, `RPS`, `SECONDS`, `DEPLOY_AT`, `INSTANCES`, `WORKERS`, `THRESHOLD`/`WINDOW_MS` (admission), `PREWARM` (top shapes rebuilt and preloaded on deploy; `0` disables), `LINK_TAGS=0` (bundle block templates into every artifact), `LRU_BYTES`, `KV_BYTES`.

- `app/tags/`: the CMS views, written as ordinary dual-use tags.
- `lib/`: page generator, shape projection, entry generators, and the rolldown build (after `runtime-tags/src/__tests__/utils/bundle.ts`).
- `jit/`: bundler service and worker, KV stand-in, vm loader, app instance.

Outputs go to `out/`; builds go to `app/.gen/` (both ignored).
