import { types as t, NodePath } from "@marko/babel-types";

export function isOutputHTML<T extends t.Node>(path: NodePath<T>) {
  return getMarkoOpts(path).output === "html";
}

export function isOutputDOM<T extends t.Node>(path: NodePath<T>) {
  return !isOutputHTML(path);
}

export function getMarkoOpts<T extends t.Node>(path: NodePath<T>) {
  return path.hub.file.markoOpts;
}
