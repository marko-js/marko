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

export function isPersisted() {
  return !!getMarkoOpts().persisted;
}

// The `?persisted` entry combines the deferred render graph and patch merges.
export function isPersistedEntryBuild() {
  return getMarkoOpts().entry === "persisted" && isOutputDOM();
}

// The `?renderers` entry is the server-side shell map: per
// patch-participating section, `[template, walks]` with no client code.
export function isRenderersEntryBuild() {
  return getMarkoOpts().entry === "renderers" && isOutputDOM();
}

export function getReadyId(file: t.BabelFile = getFile()) {
  const { markoOpts } = file;
  if (!markoOpts.linkAssets) return undefined;
  return (
    (markoOpts.optimize ? "_" : "ready:") +
    getTemplateId(markoOpts, file.opts.filename)
  );
}
