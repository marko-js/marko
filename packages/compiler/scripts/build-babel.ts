import { build } from "esbuild";
import path from "path";

const absWorkingDir = path.join(__dirname, "..");

build({
  format: "cjs",
  bundle: true,
  absWorkingDir,
  outfile: "dist/babel.js",
  sourcemap: false,
  platform: "node",
  external: ["browserslist"],
  entryPoints: ["internal/babel/index.ts"],
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
