import { types as t, NodePath } from "@marko/babel-types";
import { flushBefore, flushInto } from "../../util/html-flush";
import { buildIfStatement, findPreviousIfStatement } from "./util";

export function enter(tag: NodePath<t.MarkoTag>) {
  flushBefore(tag);
}

export function exit(tag: NodePath<t.MarkoTag>) {
  flushInto(tag);
  const prev = findPreviousIfStatement(tag);
  prev.node.alternate = buildIfStatement(tag);
  tag.remove();
}
