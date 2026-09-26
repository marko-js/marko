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

// Printed rather than written so inspecting a template never adds files beside
// it; each module prints under its resolved path, the entry first.
for (const entry of args.positionals) {
  const filename = path.resolve(entry);
  const generated = new Map<string, string>();
  const { code } = compileFileSync(filename, {
    output: args.values.output as Config["output"],
    optimize: !args.values.dev,
    sourceMaps: false,
    modules: "esm",
    resolveVirtualDependency(from, { virtualPath, code }) {
      generated.set(path.resolve(from, "..", virtualPath), code);
      return virtualPath;
    },
    babelConfig: {
      babelrc: false,
      configFile: false,
      browserslistConfigFile: false,
    },
    translator,
  });

  printModule(filename, code);
  generated.forEach((code, name) => printModule(name, code));
}

function printModule(name: string, code: string) {
  console.log(`// ${name}\n${code}\n`);
}
