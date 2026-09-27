---
type: dx
impact: low
effort: low
site: packages/compiler/src/register.cjs › register
---

# Pick the require hook's default `sourceMaps` from the configured `optimize`

`packages/compiler/src/register.cjs` computes `isDev = !shouldOptimize()` once at load, from `MARKO_DEBUG`/`NODE_ENV` only, and defaults `sourceMaps` to `"both"` or `false` from it. Compiles take `optimize` from the `register(options)` call or `configure()` first, so with `NODE_ENV=production` and `optimize: false` the hook compiles against the debug runtime but with no source maps, and stack traces point into compiled code. Direction: derive the default per compile from the same `optimize` the compile uses (`options.optimize ?? globalConfig.optimize ?? shouldOptimize()`).

Check: in a `./x.tmp.cjs` at the repo root, run with `NODE_ENV=production node -r ~ts`, call `require("@marko/compiler/register")({ extensions, optimize: false })` with a plain `extensions` object, then `extensions[".marko"]({ _compile(c) { code = c; } }, "<repo>/packages/compiler/test/fixtures/register/template.marko")`. `code` requires `marko/src/runtime/html/index.js` (the debug runtime) and has no `sourceMappingURL` comment; without `NODE_ENV=production` it has one.
