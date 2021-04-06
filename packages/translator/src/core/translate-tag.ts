import { types as t } from "@marko/compiler";
import * as writer from "../util/writer";
import toFirstExpressionOrBlock from "../util/to-first-expression-or-block";

export default {
  enter(tag: t.NodePath<t.MarkoTag>) {
    writer.start(tag);

    if (!tag.node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "<tag> requires a variable to be defined, eg <tag/NAME>."
        );
    }
  },
  exit(tag: t.NodePath<t.MarkoTag>) {
    writer.end(tag);
    tag.replaceWith(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          tag.node.var!,
          t.arrowFunctionExpression(
            tag.node.body.params,
            toFirstExpressionOrBlock(tag.node.body)
          )
        )
      ])
    );
  }
};
