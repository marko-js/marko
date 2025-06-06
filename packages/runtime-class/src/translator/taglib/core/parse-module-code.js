import markoModules from "@marko/compiler/modules";
import path from "path";

const startOffset = "module-code".length;

export default function (tag) {
  const {
    hub: { file },
    node: { rawValue },
  } = tag;
  const dirname = path.dirname(file.opts.filename);
  const relativeRequire = (entry) =>
    markoModules.require(markoModules.resolve(entry, dirname));
  const fn = eval(rawValue.slice(startOffset));
  const source = fn(relativeRequire, file.markoOpts);
  file.metadata.marko.moduleCode = source;
}
