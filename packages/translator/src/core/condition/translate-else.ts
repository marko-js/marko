import { types as t, NodePath } from "@marko/babel-types";
import {
  assertNoVar,
  assertNoParams,
  assertNoAttributes
} from "@marko/babel-utils";
import { flushBefore, flushInto } from "../../util/html-flush";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import { findPreviousIfStatement } from "./util";

export function enter(tag: NodePath<t.MarkoTag>) {
  flushBefore(tag);
}

export function exit(tag: NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  assertNoParams(tag);
  assertNoAttributes(tag);
  flushInto(tag);
  findPreviousIfStatement(tag).node.alternate = toFirstStatementOrBlock(
    tag.node.body
  );
  tag.remove();
}
