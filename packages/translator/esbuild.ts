import esbuild from "esbuild";
import pkg from "./package.json";

Promise.all(
  (["esm", "cjs"] as const).map(async (format) => {
    await esbuild.build({
      bundle: true,
      entryPoints: [`src/index.ts`],
      outfile: `dist/index.${format}.js`,
      format,
      define: { MARKO_SRC: "false" },
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      ],
      platform: "node",
      sourcemap: true,
    });
  })
).catch(console.error);
