import fs from "fs";
import path from "path";
import { build } from "esbuild";

const absWorkingDir = path.join(__dirname, "..");

Promise.all(
  ["dist/debug", "dist"].flatMap((env) =>
    ["dom", "html"].flatMap((name) => {
      (["esm", "cjs"] as const).map(async (format) => {
        const isProd = env === "dist";
        const outdir = path.join(absWorkingDir, `${env}/${name}`);
        const { metafile } = await build({
          format,
          outdir,
          absWorkingDir,
          bundle: true,
          metafile: true,
          sourcemap: true,
          platform: "browser",
          minifySyntax: isProd,
          entryPoints: [`src/${name}/index.ts`],
          define: { MARKO_DEBUG: String(!isProd) },
          mangleProps: isProd ? /^___/ : undefined,
          outExtension: { ".js": format === "esm" ? ".mjs" : ".js" },
        });

        await Promise.all([
          fs.promises.writeFile(
            `${outdir}/meta.${format}.json`,
            JSON.stringify(metafile),
          ),
          fs.promises.writeFile(
            `${outdir}/package.json`,
            JSON.stringify(
              {
                main: "index.js",
                module: "index.mjs",
                exports: {
                  ".": {
                    import: "./index.mjs",
                    default: "./index.js",
                  },
                },
                types: path.relative(outdir, `dist/${name}/index.d.ts`),
              },
              null,
              2,
            ),
          ),
        ]);
      });
    }),
  ),
);
