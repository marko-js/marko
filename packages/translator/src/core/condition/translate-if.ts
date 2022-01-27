import { types as t } from "@marko/compiler";
import { assertNoParams, assertNoVar } from "@marko/babel-utils";
import * as writer from "../../util/writer";
import { exitCondition } from "./util";
import {
  ReserveType,
  reserveScope,
  getSection,
} from "../../analyze/util/sections";

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    reserveScope(ReserveType.Visit, getSection(tag), tag.node, "if", 3);
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

    writer.visit(tag, writer.WalkCodes.Replace);
    writer.enterShallow(tag);
    writer.start(tag, "if");
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    exitCondition(tag, writer.end(tag));
  },
};
