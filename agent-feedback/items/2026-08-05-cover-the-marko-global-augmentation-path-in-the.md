---
type: unclear
impact: low
effort: low
site: packages/runtime-tags/cheatsheet.md › TypeScript
---

# Cover the `Marko.Global` augmentation path in the user-facing docs

`Marko.Global` carries `[x: PropertyKey]: unknown` (`packages/runtime-tags/index.d.ts`), so an unaugmented `$global` is unchecked and a render test or story can pass any shape. `declare global { namespace Marko { interface Global { data?: Run.Context } } }` restores checking, but only with OPTIONAL members — a required member makes `render({ $global: {} })` fail with TS2741 everywhere. That caveat is now documented on the `Global` interface itself in `index.d.ts`; what remains is whether the user-facing docs should carry it. It was cut from `cheatsheet.md` in PR #3745 to keep that file a dense syntax reference, so the remaining home is the markojs.com website repo rather than this one. Context, unverifiable in this repo: Storybook has no slot at all — `Story<Input>.args` is `Input`, so `$global` gets smuggled through `args` and surfaces as a bogus control. Distinct from the separate finding on typing `@marko/run`'s `ctx.search` — same `Run.Context`, different surface.

Check: `rg -n 'PropertyKey' packages/runtime-tags/index.d.ts` still shows the open index signature.
