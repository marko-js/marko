import fs from "node:fs";
import path from "node:path";

import { build } from "rolldown";

const cwd = path.join(import.meta.dirname, "..");

// Drop what a previous build left behind so it can't ship in the tarball —
// notably the per-file output of the old babel build, which included the
// `dist/babel-utils/index.js` this package no longer points at. The `.d.ts`
// files are written by `build-babel-types` during `prepare`, well before this
// runs, so they are kept.
const distDir = path.join(cwd, "dist");
if (fs.existsSync(distDir)) {
  for (const entry of fs.readdirSync(distDir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith(".d.ts")) continue;
    fs.rmSync(path.join(distDir, entry.name), { recursive: true, force: true });
  }
}

const selfReferences: Record<string, string> = {
  "@marko/compiler": "src/index.js",
  "@marko/compiler/babel-utils": "src/babel-utils/index.js",
};

// @babel/core reads this version to decide whether to suggest upgrading, in the
// catch block that reports a failed `.cts` config load. The preset itself is an
// optional dependency babel `require`s inside a `try`, so bundlers treat it as
// optional — but this read is in a `catch`, so an unresolved specifier here is a
// hard error for anyone bundling the compiler. Stub the version rather than
// pulling the preset in: the value only gates a suggestion, and reporting the
// threshold keeps it quiet so the real config error surfaces.
const PRESET_TS_PKG = "@babel/preset-typescript/package.json";
const presetTypeScriptVersionStub = {
  name: "stub-preset-typescript-version",
  resolveId(id: string) {
    return id === PRESET_TS_PKG ? `\0${PRESET_TS_PKG}` : null;
  },
  load(id: string) {
    return id === `\0${PRESET_TS_PKG}` ? '{ "version": "7.21.4" }' : null;
  },
};

await Promise.all([
  // Every published entry is built in ONE rolldown pass so shared modules land
  // in shared chunks. `taglib/config` is a mutated singleton (`configure()`,
  // `fileSystem`), so building the entries separately would give each its own
  // copy and silently drop those mutations.
  build({
    cwd,
    platform: "node",
    input: {
      index: "src/index.js",
      config: "src/config.js",
      register: "src/register.cjs",
      "babel-utils": "src/babel-utils/index.js",
    },
    // Bare specifiers stay external, except the two self-references that are
    // themselves `src` code. Leaving those external would send a chunk back
    // out through the package exports and into another chunk, and that cycle
    // deadlocks rolldown's lazy chunk init. `modules` (a published root file)
    // and `internal/babel` (its own bundle) stay external.
    external: (id) => /^[^./]/.test(id) && !(id in selfReferences),
    plugins: [
      {
        name: "resolve-self-references",
        resolveId(id) {
          const target = selfReferences[id];
          return target ? path.join(cwd, target) : null;
        },
      },
    ],
    output: {
      dir: "dist",
      format: "cjs",
      strict: true,
      sourcemap: false,
      minify: "dce-only",
      entryFileNames: "[name].js",
      chunkFileNames: "chunk-[name].js",
      // Match the interop the babel build published: a default export stays on
      // `.default` behind an `__esModule` marker rather than being unwrapped
      // onto `module.exports`.
      exports: "named",
      esModule: true,
    },
  }),
  ...(["browser", "node"] as const).map((platform) =>
    build({
      platform,
      plugins: [presetTypeScriptVersionStub],
      input: "internal/babel/index.ts",
      cwd,
      external: ["browserslist", "path", "assert", "fs"],
      output: {
        sourcemap: false,
        minify: "dce-only",
        format: "cjs",
        strict: true,
        file: platform === "node" ? "dist/babel.js" : "dist/babel.web.js",
      },
    }),
  ),
]);
