---
type: dx
impact: low
effort: low
site: packages/runtime-tags/scripts/bundle.mts
---

# Emit every declaration after the runtime bundle wipes `dist`

`bundle.mts` removes `packages/runtime-tags/dist` before bundling, but `build:types` (`tsc -b`) keeps its build info in the root `dist/tsconfig.runtime-tags.tsbuildinfo`, so a local `pnpm run build` after an earlier one re-emits only the declarations whose sources changed and leaves the rest of `dist/**/*.d.ts` missing (a fresh CI checkout emits them all). A local pack or a types check against `dist` then reads a partial package. Remove the build info with `dist`, or have `bundle.mts` leave the `.d.ts` files in place.

Check: `pnpm run build`, touch one runtime source, `pnpm run build` again, then `ls packages/runtime-tags/dist/common` (missing) until `rm dist/tsconfig.runtime-tags.tsbuildinfo && pnpm run build:types`.
