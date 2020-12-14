import { types as t, NodePath } from "@marko/babel-types";
import { flushBefore, flushInto } from "../../util/html-flush";
import { buildIfStatement } from "./util";

export function enter(tag: NodePath<t.MarkoTag>) {
  flushBefore(tag);
}

export function exit(tag: NodePath<t.MarkoTag>) {
  flushInto(tag);
  tag.replaceWith(buildIfStatement(tag))[0].skip();
}
