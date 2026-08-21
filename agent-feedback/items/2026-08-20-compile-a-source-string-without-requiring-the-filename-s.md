---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/get-style-file.ts › getStyleFile
---

# Compile a source string without requiring the filename's directory to exist

`getStyleFile` calls `fs.readdirSync(path.dirname(filename))` unguarded to look for a sibling `*.style.*`, so `compileSync(src, filename)` — the API whose whole point is an in-memory source — dies on any synthetic path: `compileSync("<p>hi</p>", "/nonexistent/dir/x.marko", { output: "html" })` throws a bare Node `Error: ENOENT: no such file or directory, scandir '/nonexistent/dir'` with no `CompileError`, no filename in the message and no hint that a style-file lookup is what touched the disk. `packages/runtime-class/src/translator/util/get-component-files.js › getComponentFiles` has the same unguarded `readdirSync` and takes the same throw for a class-API source. The directory only has to exist, not contain anything, so the whole failure disappears behind an `existsSync` guard or a `catch` that treats an unreadable directory as "no sibling files"; the config's `fileSystem` escape hatch already proves the compile itself needs nothing from that directory.

Check: `compileSync("<let/x=1><p>${x}</p>", "/nonexistent/dir/x.marko", { output: "html" })` throws `ENOENT … scandir '/nonexistent/dir'`; passing `fileSystem: { ...fs, readdirSync: () => [] }` compiles the identical source fine. Expect the plain call to compile too, or to fail with a Marko diagnostic naming the directory and the style-file lookup.
