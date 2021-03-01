import {
  NodePath,
  Node,
  MarkoTag,
  MarkoText,
  types as t,
  MarkoPlaceholder
} from "@marko/babel-types";

import { Walks } from "./walks";
export { Walks } from "./walks";

export function writeTemplate(path: NodePath<any>, s: string) {
  path.state.template += s;
}

export function writeHydrate(path: NodePath<any>, code: Node) {
  path.state.hydrate.push(code);
}

export function writeWalks(path: NodePath<any>, code: Walks) {
  path.state.walks.push(code);
}

export function checkNextMarker(path: NodePath<any>) {
  let i = +path.key;
  let temp: NodePath<any>;
  while ((temp = path.getSibling(++i)).node) {
    if (!t.isMarkoPlaceholder(temp)) return true;
  }
  return false;
}

export function markTextSiblings(path: NodePath<MarkoText>) {
  const sibling = path.getSibling(+path.key + 1);
  if (sibling && t.isMarkoPlaceholder(sibling.node))
    path.state.precedingText = true;
}

export function needsPlaceholderMarker(path: NodePath<MarkoPlaceholder>) {
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

export function setOnlyChild(path: NodePath<MarkoTag>) {
  path.state.onlyChild = true;
}

export function clearOnlyChild(path: NodePath<MarkoTag>) {
  path.state.onlyChild = false;
}

export function isOnlyChild(path: NodePath<any>) {
  return path.state.onlyChild;
}
