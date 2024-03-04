import fs from "fs";
import path from "path";
import { build } from "esbuild";

const absWorkingDir = path.join(__dirname, "..");
const pkg = JSON.parse(
  fs.readFileSync(path.join(absWorkingDir, "package.json"), "utf8"),
);
const external = new Set([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]);

external.delete("@marko/runtime-tags");

build({
  format: "cjs",
  bundle: true,
  absWorkingDir,
  outdir: "dist",
  sourcemap: true,
  platform: "node",
  external: [...external],
  entryPoints: [`src/index.ts`],
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
