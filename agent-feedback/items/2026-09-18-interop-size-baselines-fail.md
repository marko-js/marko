---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/__tests__/main.test.ts › sizesGate
---

# Reconcile the interop fixture size baselines

The interop suite reports 35 stale `sizes.json` failures on the workspace baseline with Node 26.4.0. For example, `interop-inert-class-with-stateful-tags-child` expects 64,350 minified bytes but produces 64,365, with unchanged per-template sizes. Verify the runtime and bundler inputs and regenerate the baselines if the differences are expected, so unrelated changes can obtain a useful full-suite result.

Check: `pnpm test -- --grep translator-interop` on the unchanged workspace code reports the size mismatches; they also occur without the boundary-fill fix.
