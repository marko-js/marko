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

// The `?register` entry compile: `persisted: "register"` with dom output is
// the full persisted dom module — the template graph WITH the registry
// registrations updates resolve signals, branch content, and renderers
// from. The main persisted dom compile emits the same graph WITHOUT them,
// so bundlers tree-shake whatever hydration doesn't reference; generated
// `?update` entries import the register module, deferring the registration
// graph to the first persisted navigation. Register ids are hashed from
// (file, section, key), so the two compiles agree by construction.
export function isRegisterEntryBuild() {
  return getMarkoOpts().persisted === "register" && isOutputDOM();
}

export function getReadyId(file: t.BabelFile = getFile()) {
  const { markoOpts } = file;
  if (!markoOpts.linkAssets) return undefined;
  return (
    (markoOpts.optimize ? "_" : "ready:") +
    getTemplateId(markoOpts, file.opts.filename)
  );
}
