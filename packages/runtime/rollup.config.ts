import type { RollupOptions } from "rollup";
import fs from "fs";
import path from "path";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import esbuild from "rollup-plugin-esbuild-transform";
import mangleInternal from "../../utilities/rollup-plugin-mangle-internal";

export default ["dist/debug", "dist"].flatMap((env) =>
  ["dom", "html"].map(
    (name): RollupOptions => ({
      input: `src/${name}/index.ts`,
      output: [
        {
          file: `${env}/${name}/index.esm.js`,
          format: "esm",
        },
        {
          file: `${env}/${name}/index.cjs.js`,
          format: "cjs",
        },
      ],
      plugins: [
        esbuild({ loader: "ts", include: /\.ts$/ }),
        replace({
          '"MARKO_SRC"': false,
          preventAssignment: true,
          delimiters: ["", ""],
        }),
        {
          name: "write-package",
          async writeBundle() {
            const pkgDir = `${env}/${name}`;
            await fs.promises.writeFile(
              `${pkgDir}/package.json`,
              `{
  "main": "index.cjs.js",
  "jsnext": "index.esm.js",
  "module": "index.esm.js",
  "types": "${path.relative(pkgDir, `dist/${name}/index.d.ts`)}"
}\n`
            );
          },
        },
        ...(env === "dist"
          ? [
              replace({
                '"MARKO_DEBUG"': false,
                preventAssignment: true,
                delimiters: ["", ""],
              }),
              mangleInternal(),
              terser({
                compress: {},
                mangle: {
                  module: true,
                },
              }),
            ]
          : []),
      ],
    })
  )
);
