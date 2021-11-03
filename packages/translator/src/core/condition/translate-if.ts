import type { types as t } from "@marko/compiler";
import * as writer from "../../util/writer";
import { buildIfStatement } from "./util";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    writer.start(tag);
  },

  exit(tag: t.NodePath<t.MarkoTag>) {
    writer.end(tag);
    tag.replaceWith(buildIfStatement(tag))[0].skip();
  }
};
