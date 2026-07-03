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

// The `?update` entry compile: `persisted: "update"` with dom output runs the
// full dom translation (so sections/accessors/register ids match the main
// module) but emits compiled patch-merge functions instead of the template.
export function isUpdateEntryBuild() {
  return getMarkoOpts().persisted === "update" && isOutputDOM();
}

export function getReadyId(file: t.BabelFile = getFile()) {
  const { markoOpts } = file;
  if (!markoOpts.linkAssets) return undefined;
  return (
    (markoOpts.optimize ? "_" : "ready:") +
    getTemplateId(markoOpts, file.opts.filename)
  );
}
