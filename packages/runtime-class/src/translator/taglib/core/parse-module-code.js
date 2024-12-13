import markoModules from "@marko/compiler/modules";
import path from "path";
import resolveFrom from "resolve-from";

const startOffset = "module-code".length;

export default function (tag) {
  const {
    hub: { file },
    node: { rawValue },
  } = tag;
  const dirname = path.dirname(file.opts.filename);
  const relativeRequire = (entry) =>
    markoModules.require(resolveFrom(dirname, entry));
  const fn = eval(rawValue.slice(startOffset));
  const source = fn(relativeRequire, file.markoOpts);
  file.metadata.marko.moduleCode = source;
}
