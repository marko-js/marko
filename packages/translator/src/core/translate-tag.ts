import { types as t, NodePath } from "@marko/babel-types";
import { flushBefore, flushInto } from "../util/html-flush";
import toFirstExpressionOrBlock from "../util/to-first-expression-or-block";

export function enter(tag: NodePath<t.MarkoTag>) {
  flushBefore(tag);

  if (!tag.node.var) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "<tag> requires a variable to be defined, eg <tag/NAME>."
      );
  }

  if (!t.isIdentifier(tag.node.var)) {
    throw tag
      .get("var")
      .buildCodeFrameError(
        "<tag> requires a variable to be a valid identifier, eg <tag/NAME>."
      );
  }
}

export function exit(tag: NodePath<t.MarkoTag>) {
  flushInto(tag);
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
