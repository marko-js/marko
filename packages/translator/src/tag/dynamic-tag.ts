import { types as t, NodePath } from "@marko/babel-types";
import toFirstExpressionOrBlock from "../util/to-first-expression-or-block";
import attrsToObject, { getRenderBodyProp } from "../util/attrs-to-object";
import { flushBefore, flushInto } from "../util/html-flush";
import { callRuntime } from "../util/runtime";
import translateVar from "../util/translate-var";

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

  const dynamicTagExpr = callRuntime(tag, "dynamicTag", ...args);

  if (node.var) {
    translateVar(tag, dynamicTagExpr);
    tag.remove();
  } else {
    tag.replaceWith(t.expressionStatement(dynamicTagExpr))[0].skip();
  }
}
