---
type: cleanup
impact: med
effort: med
site: packages/runtime-tags/scripts/bundle.mts
---

# Drop the CommonJS builds now that every supported Node can require ESM

`engines.node` is `>=22.12.0`, where `require()` loads ES modules, yet `packages/runtime-tags/scripts/bundle.mts` still emits a CommonJS copy of every runtime entry (`dist/*.js` beside `dist/*.mjs`, behind the `default` export condition) and the translator only as CommonJS (`dist/translator`), and `packages/compiler/scripts/bundle.mts` emits the compiler and `internal/babel` only as CommonJS. Shipping ESM alone drops the duplicate copy of the runtime and removes the CJS interop that lets a default import of an ESM-only dependency become the namespace object. It is a breaking change for anyone who `require()`s a default export (they get the namespace) or relies on a module that adds top-level `await`, which `require(esm)` rejects; check `@marko/compiler/register` and other `require.extensions` users first.

Check: `ls packages/runtime-tags/dist packages/compiler/dist` after `pnpm run build`, and the `exports` conditions in each `package.json`.
