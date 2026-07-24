import path from "node:path";

import { build } from "rolldown";

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

await Promise.all(
  (["browser", "node"] as const).map((platform) =>
    build({
      platform,
      plugins: [presetTypeScriptVersionStub],
      input: "internal/babel/index.ts",
      cwd: path.join(import.meta.dirname, ".."),
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
);
