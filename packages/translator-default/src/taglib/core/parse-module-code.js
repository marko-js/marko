import nodePath from "path";
import resolveFrom from "resolve-from";
import markoModules from "@marko/compiler/modules";

const startOffset = "module-code".length;

export default function parse(path) {
  const {
    hub: { file },
    node: {
      rawValue,
      name: { start }
    }
  } = path;
  const dirname = nodePath.dirname(file.opts.filename);
  const relativeRequire = entry =>
    markoModules.require(resolveFrom(dirname, entry));
  const fn = eval(rawValue.slice(startOffset));
  const source = fn(relativeRequire);
  const program = file.parse(source, start + startOffset);
  file._moduleCode = program.body;
}
