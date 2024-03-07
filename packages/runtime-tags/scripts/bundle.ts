import fs from "fs";
import path from "path";
import { build } from "esbuild";

const absWorkingDir = path.join(__dirname, "..");

Promise.all(
  ["dist/debug", "dist"].flatMap((env) =>
    ["dom", "html"].flatMap((name) => {
      (["esm", "cjs"] as const).map(async (format) => {
        const isProd = env === "dist";
        const outdir = path.join(absWorkingDir, env);
        const { metafile } = await build({
          format,
          outdir,
          absWorkingDir,
          bundle: true,
          metafile: true,
          sourcemap: false,
          minifySyntax: isProd,
          entryPoints: [`src/${name}.ts`],
          define: { MARKO_DEBUG: String(!isProd) },
          mangleProps: isProd ? /^___/ : undefined,
          platform: name === "dom" ? "browser" : "node",
          outExtension: { ".js": format === "esm" ? ".mjs" : ".js" },
        });

        await Promise.all([
          fs.promises.writeFile(
            `${outdir}/meta.${format}.json`,
            JSON.stringify(metafile),
          ),
        ]);
      });
    }),
  ),
);
