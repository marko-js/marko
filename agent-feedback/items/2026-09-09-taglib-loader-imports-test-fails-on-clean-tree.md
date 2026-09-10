---
type: dx
impact: med
effort: low
site: packages/compiler/test/taglib-loader.test.js › "gives a taglib imported from within the package the package's name"
---

# Fix the taglib-loader `imports` test, which fails on a clean checkout

The assertion expects the taglib's package name to be `outer-pkg` but receives `undefined`, so every full `pnpm test` run reports one failure unrelated to the change under test. That trains contributors to ignore the summary line. Either the loader stopped attributing package names for taglibs imported from within a package, or the fixture it reads has drifted; the fix belongs with whichever moved.

Check: `pnpm run test:serial -- --grep "compiler/taglib-loader imports"` on `main` (f922294ed7) reports 1 failing.
