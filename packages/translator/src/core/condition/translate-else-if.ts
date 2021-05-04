import { types as t } from "@marko/compiler";
import { flushBefore, flushInto } from "../../util/html-flush";
import { buildIfStatement, findPreviousIfStatement } from "./util";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    flushBefore(tag);
  },

  exit(tag: t.NodePath<t.MarkoTag>) {
    flushInto(tag);
    const prev = findPreviousIfStatement(tag);
    prev.node.alternate = buildIfStatement(tag);
    tag.remove();
  }
};
