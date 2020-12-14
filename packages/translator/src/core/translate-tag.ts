import { types as t, NodePath } from "@marko/babel-types";
import { markIdentifierAsComponent } from "../util/analyze-tag-name";
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
        markIdentifierAsComponent(tag.node.var! as t.Identifier),
        t.arrowFunctionExpression(
          tag.node.params || [],
          toFirstExpressionOrBlock(tag.node.body)
        )
      )
    ])
  );
}
