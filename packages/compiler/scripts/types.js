import fs from "fs";

import babelTraverseCode from "./types/babel-traverse";
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/traverse.d.ts", babelTraverseCode);
fs.copyFileSync(
  require.resolve("@babel/types/lib/index.d.ts"),
  "dist/types.d.ts",
);
