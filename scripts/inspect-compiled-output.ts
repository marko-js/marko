import { compileFileSync, type Config } from "@marko/compiler";
import fs from "fs";
import path from "path";
import { parseArgs } from "util";

const args = parseArgs({
  allowPositionals: true,
  options: {
    dev: {
      type: "boolean",
      short: "d",
      default: false,
    },
    output: {
      type: "string",
      short: "o",
      default: "dom",
    },
    translator: {
      type: "string",
      short: "t",
      default: "tags",
    },
  },
});

for (const entry of args.positionals) {
  const inputFileName = path.resolve(entry);
  const outputFileName = inputFileName + ".js";

  const { code } = compileFileSync(inputFileName, {
    output: args.values.output as Config["output"],
    optimize: !args.values.dev,
    sourceMaps: false,
    modules: "esm",
    babelConfig: {
      configFile: false,
      babelrc: false,
    },
    translator:
      args.values.translator === "class"
        ? "marko/translator"
        : "@marko/runtime-tags/translator",
  });

  fs.writeFileSync(outputFileName, code);
  console.log(outputFileName);
}
