import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/main.esm.js",
      format: "esm"
    },
    {
      file: "dist/main.cjs.js",
      format: "cjs"
    }
  ],
  plugins: [
    typescript(),
    terser({
      compress: false,
      mangle: {
        eval: false,
        keep_classnames: true,
        keep_fnames: true,
        module: true,
        properties: {
          regex: /^___/
        }
      },
      output: {
        beautify: true
      }
    })
  ]
};
