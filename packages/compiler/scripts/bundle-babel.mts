import path from "node:path";

import { build } from "rolldown";

await build({
  cwd: path.join(import.meta.dirname, ".."),
  input: "internal/babel/index.ts",
  platform: "node",
  external: ["browserslist"],
  output: {
    format: "cjs",
    sourcemap: false,
    file: "dist/babel.js",
    intro: "'use strict';",
  },
});
