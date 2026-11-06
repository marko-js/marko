---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/__tests__/fixtures/lazy-tag-load-script-error/test.ts
---

# Narrow `lazy-tag-load-script-error`'s rejected chunk to the template's

The fixture rejects loads with `reject_load: ["load.mjs"]`, which also matches the test runtime's own `load.mjs` chunk, so any change that makes a feature module import `dom/load.ts` breaks this fixture for a reason unrelated to what it tests. Match the template's chunk instead (e.g. `"child.marko.load.mjs"`).

Check: `reject_load: ["load.mjs"]` in that fixture's `test.ts`; the runtime's split build names its lazy runtime chunk `load.mjs` too.
