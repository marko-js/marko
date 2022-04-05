import fs from "fs";
import path from "path";
import esbuild from "esbuild";

Promise.all(
  ["dist/debug", "dist"].flatMap((env) =>
    ["dom", "html"].flatMap((name) => {
      (["esm", "cjs"] as const).map(async (format) => {
        await esbuild.build({
          bundle: true,
          entryPoints: [`src/${name}/index.ts`],
          outfile: `${env}/${name}/index.${format}.js`,
          format,
          define:
            env === "dist" ? { MARKO_DEBUG: "false" } : { MARKO_DEBUG: "true" },
          minifySyntax: env === "dist",
          mangleProps: env === "dist" ? /^___/ : undefined,
          sourcemap: true,
        });
        const pkgDir = `${env}/${name}`;
        await fs.promises.writeFile(
          `${pkgDir}/package.json`,
          JSON.stringify(
            {
              main: "index.cjs.js",
              jsnext: "index.esm.js",
              module: "index.esm.js",
              types: path.relative(pkgDir, `dist/${name}/index.d.ts`),
            },
            null,
            2
          )
        );
      });
    })
  )
).catch(console.error);
