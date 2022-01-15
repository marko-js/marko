import { types as t } from "@marko/compiler";
import { assertNoParams, assertNoVar } from "@marko/babel-utils";
import reserveScope from "../../analyze/util/reserves";
import visit from "../../analyze/util/visit";
import { isOutputDOM } from "../../util/marko-config";
import * as writer from "../../util/writer";
import { exitCondition } from "./util";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    visit(tag);
    reserveScope(tag, 3);
  },
  enter(tag: t.NodePath<t.MarkoTag>) {
    const { node } = tag;
    const [testAttr] = node.attributes;

    assertNoVar(tag);
    assertNoParams(tag);

    if (!t.isMarkoAttribute(testAttr) || !testAttr.default) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          `The '<if>' tag requires a default attribute like '<if=condition>'.`
        );
    }

    if (node.attributes.length > 1) {
      const start = node.attributes[1].loc?.start;
      const end = node.attributes[node.attributes.length - 1].loc?.end;
      const msg = `The '<if>' tag only supports a default attribute.`;

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

    if (isOutputDOM(tag)) writer.writeTo(tag)`<!>`;
    writer.visit(tag, writer.WalkCodes.Replace);
    writer.start(tag);
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    exitCondition(tag, writer.end(tag));
  },
};
