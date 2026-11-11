---
"@marko/compiler": patch
---

Resolve `taglib-imports` and a template's imports of a package's `.marko` files through the compile's `fileSystem`, using `resolve-sync`, so files only that file system holds are found, including in the browser build. A template's imports resolve with `import` conditions, as a bundler would, and an imported package needs a `package.json`.
