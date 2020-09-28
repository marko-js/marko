import nodePath from "path";
import resolveFrom from "resolve-from";
import markoModules from "@marko/compiler/modules";
import { parseScript } from "@marko/babel-utils";

const startOffset = "module-code".length;

export default function parse(path) {
  const {
    hub: { file },
    node: {
      rawValue,
      name: { start }
    }
  } = path;
  const dirname = nodePath.dirname(file.opts.sourceFileName);
  const relativeRequire = entry =>
    markoModules.require(resolveFrom(dirname, entry));
  const fn = eval(rawValue.slice(startOffset));
  const source = fn(relativeRequire, file.markoOpts);
  const program = parseScript(file, source, start + startOffset);
  file._moduleCode = program.body;
}
