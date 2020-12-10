import { types as t, NodePath } from "@marko/babel-types";
import toFirstExpressionOrBlock from "../util/to-first-expression-or-block";
import attrsToObject, { getRenderBodyProp } from "../util/attrs-to-object";
import { flushBefore, flushInto } from "../util/html-flush";
import { callRuntime } from "../util/runtime";

export function enter(tag: NodePath<t.MarkoTag>) {
  flushBefore(tag);
}

export function exit(tag: NodePath<t.MarkoTag>) {
  const { node } = tag;
  flushInto(tag);

  const attrsObject = attrsToObject(tag, true) || t.nullLiteral();
  const renderBodyProp = getRenderBodyProp(attrsObject);
  const args: t.Expression[] = [node.name, attrsObject];

  if (renderBodyProp) {
    (attrsObject as t.ObjectExpression).properties.pop();
    args.push(
      t.arrowFunctionExpression(
        renderBodyProp.params,
        toFirstExpressionOrBlock(renderBodyProp.body)
      )
    );
  }

  tag
    .replaceWith(
      t.expressionStatement(callRuntime(tag, "dynamicTag", ...args))
    )[0]
    .skip();
}
