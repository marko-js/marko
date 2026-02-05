import fs from "fs";

import babelTraverseCode from "./types/babel-traverse";
import babelTypesCode from "./types/babel-types";

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/types.d.ts", babelTypesCode);
fs.writeFileSync("dist/traverse.d.ts", babelTraverseCode);
