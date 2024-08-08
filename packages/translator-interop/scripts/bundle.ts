import { build } from "esbuild";
import path from "path";

const absWorkingDir = path.join(__dirname, "..");

build({
  format: "cjs",
  bundle: true,
  absWorkingDir,
  outdir: "dist",
  sourcemap: false,
  platform: "node",
  packages: "external",
  entryPoints: [`src/index.ts`],
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
