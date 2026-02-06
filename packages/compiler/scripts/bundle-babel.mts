import path from "node:path";

import { build } from "rolldown";

await Promise.all(
  (["browser", "node"] as const).map((platform) =>
    build({
      platform,
      input: "internal/babel/index.ts",
      cwd: path.join(import.meta.dirname, ".."),
      external: ["browserslist", "path", "assert", "fs"],
      output: {
        sourcemap: false,
        minify: "dce-only",
        format: "cjs",
        intro: "'use strict';",
        file: platform === "node" ? "dist/babel.js" : "dist/babel.web.js",
      },
    }),
  ),
);
