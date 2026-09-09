---
type: bug
impact: low
effort: low
site: packages/compiler/src/taglib/loader/Taglib.js › handleImport
---

`handleImport` decides whether an imported taglib inherits the importing
package's name with `isWithin(taglib.packageRoot, importedTaglib.dirname)`.
The importing taglib's `packageRoot` is derived from the path the caller
passed, while the imported taglib's path comes through
`markoModules.tryResolve`, which realpaths it. When the two disagree about
symlinks the containment check fails and `packageName` is not propagated.

On macOS `os.tmpdir()` is `/var/folders/...`, a symlink to
`/private/var/folders/...`, so the test
"gives a taglib imported from within the package the package's name" in
`packages/compiler/test/taglib-loader.test.js` fails on a clean checkout:

```
pnpm exec mocha packages/compiler/test/taglib-loader.test.js \
  --grep "gives a taglib imported"
# AssertionError: imports[0].packageName is undefined, expected "outer-pkg"
```

Fix direction: realpath both sides before `isWithin` (or realpath the
taglib file path in the `Taglib` constructor), or make the test
`fs.realpathSync` its temp dir.
