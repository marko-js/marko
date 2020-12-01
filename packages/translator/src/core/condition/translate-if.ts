import { types as t, NodePath } from "@marko/babel-types";
import { assertNoVar, assertNoArgs, assertNoParams } from "@marko/babel-utils";
import { flushBefore, flushInto } from "../../util/html-flush";
import { buildIfStatement } from "./util";

export function enter(tag: NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  assertNoArgs(tag);
  assertNoParams(tag);
  flushBefore(tag);
}

export function exit(tag: NodePath<t.MarkoTag>) {
  flushInto(tag);
  tag.replaceWith(buildIfStatement(tag))[0].skip();
}
