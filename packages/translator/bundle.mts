import fs from "fs";
import path from "path";
import { build } from "esbuild";
import { fileURLToPath } from "url";

const absWorkingDir = fileURLToPath(new URL(".", import.meta.url));
const pkg = JSON.parse(
  await fs.promises.readFile(path.join(absWorkingDir, "package.json"), "utf8")
);
const external = new Set([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]);

external.delete("@marko/runtime-fluurt");

await Promise.all(
  (["esm", "cjs"] as const).map((format) =>
    build({
      format,
      bundle: true,
      absWorkingDir,
      outdir: "dist",
      sourcemap: true,
      platform: "node",
      external: [...external],
      entryPoints: [`src/index.ts`],
      define: { MARKO_SRC: "false" },
      outExtension: { ".js": format === "esm" ? ".mjs" : ".js" },
    })
  )
);
