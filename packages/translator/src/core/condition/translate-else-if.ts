import { types as t } from "@marko/compiler";
import { assertNoParams, assertNoVar } from "@marko/babel-utils";
import * as writer from "../../util/writer";
import { exitCondition } from "./util";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const [defaultAttr] = node.attributes;

    assertNoVar(tag);
    assertNoParams(tag);

    if (!t.isMarkoAttribute(defaultAttr) || !defaultAttr.default) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The '<else-if>' tag requires a default attribute like '<else-if=condition>'.`
        );
    }

    if (node.attributes.length > 1) {
      const start = node.attributes[1].loc?.start;
      const end = node.attributes[node.attributes.length - 1].loc?.end;
      const msg = `The '<else-if>' tag only supports a default attribute.`;

      if (start == null || end == null) {
        throw tag.get("name").buildCodeFrameError(msg);
      } else {
        throw tag.hub.buildError(
          { loc: { start, end } } as unknown as t.Node,
          msg,
          Error
        );
      }
    }

    writer.start(tag);
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    exitCondition(tag, writer.end(tag));
  },
};
