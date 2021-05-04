import { types as t } from "@marko/compiler";
import { flushBefore, flushInto } from "../../util/html-flush";
import { buildIfStatement } from "./util";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    flushBefore(tag);
  },

  exit(tag: t.NodePath<t.MarkoTag>) {
    flushInto(tag);
    tag.replaceWith(buildIfStatement(tag))[0].skip();
  }
};
