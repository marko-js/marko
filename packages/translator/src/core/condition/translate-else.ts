import { types as t } from "@marko/compiler";
import {
  assertNoVar,
  assertNoParams,
  assertNoAttributes
} from "@marko/babel-utils";
import * as writer from "../../util/writer";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import { findPreviousIfStatement } from "./util";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    writer.start(tag);
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    assertNoVar(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);
    writer.end(tag);
    findPreviousIfStatement(tag).node.alternate = toFirstStatementOrBlock(
      tag.node.body
    );
    tag.remove();
  }
};
