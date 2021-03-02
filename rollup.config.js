import fs from "fs";
import path from "path";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import mangleInternal from "./utilities/rollup-plugin-mangle-internal";

const sizeOnly = process.env.SIZE;
const envs = sizeOnly ? ["dist"] : ["dist/debug", "dist"];
const targets = sizeOnly ? ["dom"] : ["dom", "html"];
const tsConfig = {
  tsconfigOverride: {
    compilerOptions: {
      composite: false,
      declaration: false,
      emitDeclarationOnly: false
    }
  }
};

export default envs
  .flatMap(env =>
    targets.map(name => ({
      input: `packages/runtime/src/${name}/index.ts`,
      output: [
        {
          file: `packages/runtime/${env}/${name}/index.esm.js`,
          format: "esm"
        },
        {
          file: `packages/runtime/${env}/${name}/index.cjs.js`,
          format: "cjs"
        }
      ],
      plugins: [
        typescript(tsConfig),
        env === "dist" &&
          replace({
            '"MARKO_DEBUG"': false,
            preventAssignment: true,
            delimiters: ["", ""]
          }),
        env === "dist" && mangleInternal(),
        env === "dist" &&
          terser({
            compress: {},
            mangle: {
              module: true
            }
          }),
        {
          name: "write-package",
          writeBundle() {
            const pkgDir = `packages/runtime/${env}/${name}`;
            fs.writeFileSync(
              `${pkgDir}/package.json`,
              `{
  "main": "index.cjs.js",
  "jsnext": "index.esm.js",
  "module": "index.esm.js",
  "types": "${path.relative(
    pkgDir,
    `packages/runtime/dist/${name}/index.d.ts`
  )}"
}\n`
            );
          }
        }
      ]
    }))
  )
  .concat(
    sizeOnly
      ? []
      : {
          input: "packages/translator/src/index.ts",
          external: [/^[^./!]/], // excludes node_modules
          output: [
            {
              file: "packages/translator/dist/index.esm.js",
              format: "esm"
            },
            {
              file: "packages/translator/dist/index.cjs.js",
              format: "cjs"
            }
          ],
          plugins: [typescript(tsConfig)]
        }
  );
