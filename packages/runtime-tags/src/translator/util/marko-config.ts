import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

export function isOutputHTML() {
  return getMarkoOpts().output === "html";
}

export function isPersisted() {
  return !!getMarkoOpts().persisted;
}

// The document's own template (the render's root), never composed into a
// caller's shell.
export function isPage() {
  return !!getProgram().node.extra.page;
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
