# Local js-framework-benchmark

A local copy of the keyed [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)
Marko app, wired to run against **this repo's** `@marko/runtime-tags` source
rather than a published version of Marko. Use it to manually exercise — or to
profile — runtime and translator changes you're working on.

The template (`src/tags/content/content.marko`) and data generator
(`src/tags/content/data.js`) are kept verbatim from the upstream benchmark so
results stay comparable to the official numbers.

## Running

From the repo root (or this package directory):

```sh
# build + serve at http://localhost:8080
npm run benchmark -w @marko/runtime-tags

# build the static bundle only (emitted to ./benchmark/dist)
npm run benchmark:build -w @marko/runtime-tags
```

Set `PORT` to change the port: `PORT=3000 npm run benchmark -w @marko/runtime-tags`.

## How it works

`scripts/serve.mts` builds the app the same way `scripts/sizes.ts` does:

1. Each `.marko` file is compiled with `@marko/compiler` using the local
   translator at `../src/translator/index.ts`.
2. The result is bundled with rolldown, aliasing `@marko/runtime-tags/dom` to
   the local runtime source at `../src/dom.ts` (`MARKO_DEBUG` is defined to
   `false` so debug-only code is stripped, matching a production build).
3. The bundle plus the static assets in `public/` are served with express.

Because it consumes the package source directly, no `npm run build` step is
needed — whatever is currently in `../src` is what gets benchmarked.

## Using the official driver

To measure with the official harness, point a js-framework-benchmark checkout
at this server. The app renders the same element ids the driver expects
(`#run`, `#runlots`, `#add`, `#update`, `#clear`, `#swaprows`, the
`.test-data` table, and the `.preloadicon`).
