import { types as t } from "@marko/compiler";
import { getFile, getTemplateId } from "@marko/compiler/babel-utils";

export function isOutputHTML() {
  return getMarkoOpts().output === "html";
}

export function isOutputDOM() {
  return getMarkoOpts().output === "dom";
}

export function getMarkoOpts() {
  return getFile().markoOpts;
}

export function isOptimize() {
  return getMarkoOpts().optimize;
}

export function getReadyId(file: t.BabelFile = getFile()) {
  const { markoOpts } = file;
  if (!markoOpts.linkAssets) return undefined;
  return (
    (markoOpts.optimize ? "_" : "ready:") +
    getTemplateId(markoOpts, file.opts.filename)
  );
}
