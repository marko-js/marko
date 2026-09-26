---
type: bug
impact: low
effort: low
site: packages/compiler/src/index.js › getRuntimeEntryFiles
---

# Pick runtime entry files with the configured `optimize`, not only the environment

`getRuntimeEntryFiles(output, translator)` passes `shouldOptimize()`, which reads only `MARKO_DEBUG`/`NODE_ENV`, to the translator. Compiles use `optimize` from `configure()` or the per-compile config, and fall back to `shouldOptimize()` only when it is unset. A host that sets `optimize` in config without matching env vars pre-bundles one runtime (`@marko/runtime-tags/dom`) while its templates import the other (`@marko/runtime-tags/debug/dom`), so the entry list names modules the output never imports. `@marko/vite` avoids this only because it writes `MARKO_DEBUG` itself. Direction: use `globalConfig.optimize ?? shouldOptimize()`, or take the optimize setting as an argument and update `index.d.ts`.

Check: in a `./x.tmp.mjs` run with `NODE_ENV=production node -r ~ts`, call `compiler.configure({ optimize: false })`. Then `compiler.compileSync("<div>hi</div>", "/abs/x.marko", { translator: "@marko/runtime-tags/translator", output: "dom", cache: new Map() }).code` requires `@marko/runtime-tags/debug/dom`, while `compiler.getRuntimeEntryFiles("dom", "@marko/runtime-tags/translator")[0]` is `@marko/runtime-tags/dom`.
