import { types as t } from "@marko/compiler";
import {
  assertNoVar,
  assertNoParams,
  assertNoAttributes
} from "@marko/babel-utils";
import { flushBefore, flushInto } from "../../util/html-flush";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import { findPreviousIfStatement } from "./util";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    flushBefore(tag);
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    flushInto(tag);
    findPreviousIfStatement(tag).node.alternate = toFirstStatementOrBlock(
      tag.node.body
    );
    tag.remove();
  }
};
