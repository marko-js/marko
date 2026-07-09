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

// Fragment-first persisted builds (`persisted: "fragments"`, the @marko/run
// router's contract): divergence — content a live page has never rendered —
// always arrives as a fragment frame, so the fills-path client construction
// of it never runs. `?persisted` entries therefore skip content-renderer and
// dynamic-replay registrations, letting server-only construction material
// (template/walks/setup and the child-import chains they pull) tree-shake
// out of navigation chunks entirely.
export function isPersistedFragments() {
  return getMarkoOpts().persisted === "fragments";
}

// The `?update` entry compile: `entry: "update"` with dom output runs the
// full dom translation (so sections/accessors/register ids match the main
// module) but emits compiled patch-merge functions instead of the template.
export function isUpdateEntryBuild() {
  return getMarkoOpts().entry === "update" && isOutputDOM();
}

// The `?persisted` entry compile: `entry: "persisted"` with dom output is
// the template's persisted support module — the full render graph WITH the
// registry registrations updates resolve signals, branch content, and
// renderers from. The main persisted dom compile emits the same graph
// WITHOUT them, so bundlers tree-shake whatever hydration doesn't
// reference; generated `?update` entries import the persisted entry,
// deferring the render graph to the first persisted navigation. Register
// ids are hashed from (file, section, key), so the two compiles agree by
// construction.
export function isPersistedEntryBuild() {
  return getMarkoOpts().entry === "persisted" && isOutputDOM();
}

export function getReadyId(file: t.BabelFile = getFile()) {
  const { markoOpts } = file;
  if (!markoOpts.linkAssets) return undefined;
  return (
    (markoOpts.optimize ? "_" : "ready:") +
    getTemplateId(markoOpts, file.opts.filename)
  );
}
