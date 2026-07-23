import fs from "fs";
import { createRequire } from "module";

import babelTraverseCode from "./types/babel-traverse";

const require = createRequire(import.meta.url);
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/traverse.d.ts", babelTraverseCode);
fs.copyFileSync(
  require.resolve("@babel/types/lib/index.d.ts"),
  "dist/types.d.ts",
);
