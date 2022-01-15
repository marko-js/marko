import type { types as t } from "@marko/compiler";
import { assertNoParams, assertNoVar } from "@marko/babel-utils";
import * as writer from "../../util/writer";
import { exitCondition } from "./util";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const [testAttr] = node.attributes;

    assertNoVar(tag);
    assertNoParams(tag);

    if (
      node.attributes.length > 1 ||
      (testAttr && (testAttr as t.MarkoAttribute).name !== "if")
    ) {
      const start = node.attributes[1].loc?.start;
      const end = node.attributes[node.attributes.length - 1].loc?.end;
      const msg = `The '<else>' tag only supports an if attribute.`;

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
