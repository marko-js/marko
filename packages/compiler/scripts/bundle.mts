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

const bundled = /^entities(?:\/|$)/;

const selfReferences: Record<string, string> = {
  "@marko/compiler": "src/index.ts",
  "@marko/compiler/babel-utils": "src/babel-utils/index.ts",
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

// Marko's parser options only ever enable `objectRestSpread`, `classProperties`
// and `typescript`. The parser keeps its syntax plugins in one object literal
// that is indexed by name, so nothing can tree-shake the rest; stubbing the
// entries makes those mixins unreachable and DCE drops them.
const UNUSED_PARSER_PLUGINS = [
  "estree",
  "jsx",
  "flow",
  "v8intrinsic",
  "placeholders",
];
const REGISTRY =
  "const mixinPlugins = {\n  estree,\n  jsx,\n  flow,\n  typescript,\n  v8intrinsic,\n  placeholders\n};";
const pruneParserPlugins = {
  name: "prune-parser-plugins",
  transform(code: string, id: string) {
    if (!id.includes("@babel/parser")) return null;
    if (!code.includes(REGISTRY)) {
      throw new Error(
        "prune-parser-plugins: @babel/parser mixin registry not found; the pruning is stale",
      );
    }
    const stubs = UNUSED_PARSER_PLUGINS.map(
      (name) =>
        `  ${name}: () => { throw new Error("@marko/compiler: the '${name}' parser plugin is not available in the browser build."); },`,
    ).join("\n");
    return code.replace(
      REGISTRY,
      `const mixinPlugins = {\n${stubs}\n  typescript,\n  placeholders\n};`,
    );
  },
};

// Babel's 122 helpers sit in one table indexed by name: traverse asks for `newArrowCheck`,
// a project's own CommonJS plugin for the interop pair. One dropped but asked for fails.
const USED_HELPERS = new Set([
  "interopRequireDefault",
  "interopRequireWildcard",
  "newArrowCheck",
]);
const pruneHelpers = {
  name: "prune-helpers",
  transform(code: string, id: string) {
    if (
      !id.includes("@babel/helpers") ||
      !id.endsWith("helpers-generated.js")
    ) {
      return null;
    }

    // The table is split across an object literal and an `Object.assign` that
    // tops it up, so both get the same treatment.
    let total = 0;
    const out = code.replace(
      /(\{\n  __proto__: null,|Object\.assign\(helpers, \{)([\s\S]*?)(\n\}\);|\n\};)/g,
      (whole, head: string, body: string, tail: string) => {
        const entry = /\n  ([A-Za-z_$][\w$]*): helper\(/g;
        const marks: [string, number][] = [];
        for (let m = entry.exec(body); m; m = entry.exec(body)) {
          marks.push([m[1], m.index]);
        }
        if (!marks.length) return whole;
        total += marks.length;
        let kept = "";
        for (let i = 0; i < marks.length; i++) {
          const to = i + 1 < marks.length ? marks[i + 1][1] : body.length;
          if (USED_HELPERS.has(marks[i][0]))
            kept += body.slice(marks[i][1], to);
        }
        return head + kept + tail;
      },
    );

    if (total < 100) {
      throw new Error(
        `prune-helpers: found ${total} helpers, expected the full table; the pruning is stale`,
      );
    }
    for (const name of USED_HELPERS) {
      if (!out.includes(`\n  ${name}: helper(`)) {
        throw new Error(`prune-helpers: dropped ${name}, which is still used`);
      }
    }
    return out;
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
      index: "src/index.ts",
      config: "src/config.ts",
      register: "src/register.cts",
      "babel-utils": "src/babel-utils/index.ts",
    },
    // Bare specifiers stay external, except the two self-references that are
    // themselves `src` code. Leaving those external would send a chunk back
    // out through the package exports and into another chunk, and that cycle
    // deadlocks rolldown's lazy chunk init. `modules` (a published root file)
    // and `internal/babel` (its own bundle) stay external.
    // `entities` is bundled because it is ESM only, keeping this CJS output
    // requirable. `resolve-sync` stays a dependency: its environment's
    // resolver picks its Node or browser defaults, which bundling it here
    // would lock to Node's.
    external: (id) =>
      /^[^./#]/.test(id) && !bundled.test(id) && !(id in selfReferences),
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
      plugins: [presetTypeScriptVersionStub, pruneParserPlugins, pruneHelpers],
      input: "internal/babel/index.ts",
      cwd,
      // htmljs-parser is a dependency of the compiler, whose own code loads it.
      external: ["browserslist", "path", "assert", "fs", "htmljs-parser"],
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
