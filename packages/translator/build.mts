import { build } from "esbuild";
import pkg from "./package.json";
const external = new Set([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
]);

external.delete("@marko/runtime-fluurt");

await Promise.all(
  (["esm", "cjs"] as const).map((format) =>
    build({
      format,
      bundle: true,
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
