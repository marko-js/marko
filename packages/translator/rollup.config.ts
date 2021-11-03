import type { RollupOptions } from "rollup";
import replace from "@rollup/plugin-replace";
import esbuild from "rollup-plugin-esbuild-transform";

export default {
  input: "src/index.ts",
  external: [/^[^./!]/], // excludes node_modules
  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
    {
      file: "dist/index.cjs.js",
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
  ],
} as RollupOptions;
