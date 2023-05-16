import fs from "fs";
import path from "path";
import { build } from "esbuild";

await Promise.all(
  ["dist/debug", "dist"].flatMap((env) =>
    ["dom", "html"].flatMap((name) => {
      (["esm", "cjs"] as const).map(async (format) => {
        const isProd = env === "dist";
        const pkgDir = `${env}/${name}`;
        const { metafile } = await build({
          format,
          bundle: true,
          metafile: true,
          sourcemap: true,
          platform: "browser",
          minifySyntax: isProd,
          outdir: `${env}/${name}`,
          entryPoints: [`src/${name}/index.ts`],
          define: { MARKO_DEBUG: String(!isProd) },
          mangleProps: isProd ? /^___/ : undefined,
          outExtension: { ".js": format === "esm" ? ".mjs" : ".js" },
        });

        await Promise.all([
          fs.promises.writeFile(
            `${pkgDir}/meta.${format}.json`,
            JSON.stringify(metafile)
          ),
          fs.promises.writeFile(
            `${pkgDir}/package.json`,
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
                types: path.relative(pkgDir, `dist/${name}/index.d.ts`),
              },
              null,
              2
            )
          ),
        ]);
      });
    })
  )
);
