import { build } from "esbuild";
import fs from "fs";
import path from "path";

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
  sourcemap: false,
  platform: "node",
  external: [...external],
  entryPoints: [`src/index.ts`],
  define: {
    MARKO_DEBUG: "false",
  },
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
