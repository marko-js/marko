import nodePath from "path";
import resolveFrom from "resolve-from";
import markoModules from "@marko/compiler/modules";

const startOffset = "module-code".length;

export default function (path) {
  const {
    hub: { file },
    node: { rawValue }
  } = path;
  const dirname = nodePath.dirname(file.opts.sourceFileName);
  const relativeRequire = entry =>
    markoModules.require(resolveFrom(dirname, entry));
  const fn = eval(rawValue.slice(startOffset));
  const source = fn(relativeRequire, file.markoOpts);
  file.metadata.marko.moduleCode = source;
}
