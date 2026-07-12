import { compileFileSync, type Config } from "@marko/compiler";
import fs from "fs";
import path from "path";
import { parseArgs } from "util";

// Shorthands for the two in-repo translators; any other -t value (e.g. a full
// module id) is passed through to the compiler unchanged.
const TRANSLATORS: Record<string, string> = {
  tags: "@marko/runtime-tags/translator",
  class: "marko/translator",
};

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

const translator =
  TRANSLATORS[args.values.translator] ||
  args.values.translator ||
  TRANSLATORS.tags;

for (const entry of args.positionals) {
  const inputFileName = path.resolve(entry);
  const outputFileName = inputFileName + ".js";

  const { code } = compileFileSync(inputFileName, {
    output: args.values.output as Config["output"],
    optimize: !args.values.dev,
    sourceMaps: false,
    modules: "esm",
    babelConfig: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
    },
    translator,
  });

  fs.writeFileSync(outputFileName, code);
  console.log(outputFileName);
}
