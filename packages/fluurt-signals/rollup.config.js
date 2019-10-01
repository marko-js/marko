import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default ["dom", "html"].map(name => ({
  input: `${name}/index.ts`,
  output: [
    {
      file: `build/${name}.esm.js`,
      format: "esm"
    },
    {
      file: `build/${name}.cjs.js`,
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
}));
