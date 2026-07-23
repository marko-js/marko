import path from "path";

import markoModules from "@marko/compiler/modules";

const startOffset = "module-code".length;

export default function (tag) {
  const {
    hub: { file },
    node: { rawValue },
  } = tag;
  const dirname = path.dirname(file.opts.filename);
  const relativeRequire = (entry) =>
    markoModules.require(markoModules.resolve(entry, dirname));
  // oxlint-disable-next-line no-eval -- <parse-module-code> evaluates template-declared module code
  const fn = eval(rawValue.slice(startOffset));
  const source = fn(relativeRequire, file.markoOpts);
  file.metadata.marko.moduleCode = source;
}
