import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import fs from "fs";

export default ["debug", "dist"].flatMap(env =>
  ["dom", "html"].map(name => ({
    input: `src/${name}/index.ts`,
    output: [
      {
        file: `${env}/${name}/index.esm.js`,
        format: "esm"
      },
      {
        file: `${env}/${name}/index.cjs.js`,
        format: "cjs"
      }
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: { declaration: false, emitDeclarationOnly: false }
        }
      }),
      env === "dist" &&
        terser({
          compress: {},
          mangle: {
            module: true
            // properties: {
            //   regex: /^___/
            // }
          }
        }),
      {
        name: "write-package",
        writeBundle() {
          fs.writeFileSync(
            `${env}/${name}/package.json`,
            packageContents(name)
          );
        }
      }
    ]
  }))
);

function packageContents(name) {
  return JSON.stringify(
    {
      main: "./index.cjs.js",
      jsnext: "./index.esm.js",
      module: "./index.esm.js",
      types: `../../types/${name}/index.d.ts`
    },
    null,
    2
  );
}
