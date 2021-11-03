import type { types as t } from "@marko/compiler";

export function isOutputHTML<T extends t.Node>(path: t.NodePath<T>) {
  return getMarkoOpts(path).output === "html";
}

export function isOutputDOM<T extends t.Node>(path: t.NodePath<T>) {
  return !isOutputHTML(path);
}

export function getMarkoOpts<T extends t.Node>(path: t.NodePath<T>) {
  return path.hub.file.markoOpts;
}
