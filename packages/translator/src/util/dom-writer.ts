import { types as t } from "@marko/compiler";

import { Walks } from "./walks";
export { Walks } from "./walks";

export function writeTemplate(path: t.NodePath<any>, s: string | t.Node) {
  if (typeof s === "string") {
    path.state.template[path.state.template.length - 1] += s;
  } else path.state.template.push(s, "");
}

export function writeHydrate(path: t.NodePath<any>, code: t.Node) {
  path.state.hydrate.push(code);
}

export function writeWalks(path: t.NodePath<any>, code: Walks | t.Node) {
  path.state.walks.push(code);
}

export function checkNextMarker(path: t.NodePath<any>) {
  let i = +path.key;
  let temp: t.NodePath<any>;
  while ((temp = path.getSibling(++i)).node) {
    if (!t.isMarkoPlaceholder(temp)) return true;
  }
  return false;
}

export function markTextSiblings(path: t.NodePath<t.MarkoText>) {
  const sibling = path.getSibling(+path.key + 1);
  if (sibling && t.isMarkoPlaceholder(sibling.node))
    path.state.precedingText = true;
}

export function needsPlaceholderMarker(path: t.NodePath<t.MarkoPlaceholder>) {
  if (!path.state.precedingText) return false;
  const sibling = path.getSibling(+path.key + 1);
  if (sibling) {
    if (t.isMarkoPlaceholder(sibling.node)) {
      path.state.precedingText = false;
      return true;
    }
    if (t.isMarkoText(sibling.node)) return true;
  }
  path.state.precedingText = false;
  return false;
}

export function setOnlyChild(path: t.NodePath<t.MarkoTag>) {
  path.state.onlyChild = true;
}

export function clearOnlyChild(path: t.NodePath<t.MarkoTag>) {
  path.state.onlyChild = false;
}

export function isOnlyChild(path: t.NodePath<any>) {
  return path.state.onlyChild;
}
