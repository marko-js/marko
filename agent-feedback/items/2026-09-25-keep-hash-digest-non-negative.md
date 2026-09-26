---
type: bug
impact: med
effort: low
site: packages/compiler/src/util/quick-hash.js › Hash.digest
---

# Keep `Hash.digest()` non-negative so hashed template ids are defined

`Hash.digest` returns `(b & 0x1fffff) * 0x100000000 + a`, where `a` is a signed `Math.imul` result, so when the masked `b` is 0 (about one input in 2²²) the digest is negative. `babel-utils/tags.js › encodeTemplateId` then indexes its alphabet with a negative `n % 53` and returns `undefined`, so every optimized compile of that file throws "Property value expected type of string but got undefined", and any hashed child key (register ids, `runtime-tags/src/translator/core/style.ts › dynamicStyleName`) can hit the same `undefined`. Renaming the file makes it go away, so it presents as an unexplainable per-file build failure. Use `(a >>> 0)` in `digest` and add a unit test on a known negative input.

Check: at the repo root create `t3764440.marko` containing `<div>hello</div>` and run `pnpm run compile -- -o dom t3764440.marko` (optimized): it throws the TypeError above, and in a `node -r ~ts` script `new Hash().update("t3764440.marko").digest()` (`Hash` from `packages/compiler/src/util/quick-hash.js`) is `-1398683556`.
