---
type: bug
impact: med
effort: low
site: packages/compiler/test/taglib-loader.test.js › gives a taglib imported from within the package the package's name
---

# Fix the failing taglib-loader package-name test

The compiler suite fails on a clean checkout: a taglib pulled in through `taglib-imports` from inside a package comes back with `packageName` undefined instead of the importing package's name. Because `pnpm test` bails on first failure, this also prevents `pnpm run test:update` from reaching the runtime-tags fixtures unless scoped with `--grep`. Either the loader stopped propagating the name to `loadTaglibFromFile` imports, or the test expectation is stale; whichever it is, the suite has to be green for the bail to be useful.

Check: `pnpm exec mocha packages/compiler/test/taglib-loader.test.js` — 1 failing, expected 'outer-pkg', actual undefined.
