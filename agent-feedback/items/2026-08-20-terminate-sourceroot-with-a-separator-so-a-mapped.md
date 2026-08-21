---
type: bug
impact: med
effort: low
site: packages/compiler/src/index.js › getBaseBabelConfig
---

# Terminate `sourceRoot` with a separator so a mapped `.marko` frame is openable

`getBaseBabelConfig` emits `sourceRoot: path.dirname(filename)` alongside `sourceFileName: path.basename(filename)`, and Node's built-in `--enable-source-maps` prepends the root to the source with no separator, so every remapped frame names a path that cannot exist: a template at `<root>/routes/page.marko` produces `<root>/routespage.marko`. Line and column map correctly, so the frame looks navigable and is not, and the failure is silent — nothing checks that a mapped source resolves. `source-map-support`, which `register.cjs` installs, joins the two properly and hides it, so it only shows up for a consumer reading the map through Node itself. Appending `path.sep` to `sourceRoot` restores the real path; `packages/compiler/src/babel-utils/tags.js` builds the same pair for extracted files and needs it too.

Check: compile a template under a subdirectory with `sourceMaps: "inline"`, throw from it, and run the output under `node --enable-source-maps` — the frame reads `<parentdir><basename>.marko:2:17` with the directory separator missing; with `path.sep` appended to `sourceRoot` the same frame reads `<parentdir>/<basename>.marko:2:17`.
