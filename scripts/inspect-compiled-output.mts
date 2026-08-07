import fs from "fs";
import path from "path";
import { parseArgs } from "util";

import { compileFileSync, type Config } from "@marko/compiler";

// Shorthands for the two in-repo translators; any other -t value (e.g. a full
// module id) is passed through to the compiler unchanged.
const TRANSLATORS: Record<string, string> = {
  tags: "@marko/runtime-tags/translator",
  class: "marko/translator",
};

// pnpm forwards a literal `--` (the AGENTS.md invocation), which parseArgs
// would treat as end-of-options, turning `-o` into an input path.
const argv = process.argv.slice(2).filter((arg, i) => i > 0 || arg !== "--");

const args = parseArgs({
  args: argv,
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
    // Generated modules are written beside the output, with their path
    // flattened into the name so they stay in one directory.
    resolveVirtualDependency(filename, { virtualPath, code }) {
      const request =
        "./" + virtualPath.replace(/^\.\//, "").replaceAll("/", "__");
      const virtualFileName = path.resolve(filename, "..", request);
      fs.writeFileSync(virtualFileName, code);
      console.log(virtualFileName);
      return request;
    },
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
