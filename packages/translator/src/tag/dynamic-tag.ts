import { types as t } from "@marko/compiler";
import toFirstExpressionOrBlock from "../util/to-first-expression-or-block";
import attrsToObject, { getRenderBodyProp } from "../util/attrs-to-object";
import * as writer from "../util/writer";
import { callRuntime } from "../util/runtime";
import translateVar from "../util/translate-var";
import { isOutputDOM } from "../util/marko-config";

export function enter(tag: t.NodePath<t.MarkoTag>) {
  writer.start(tag);
}

export function exit(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const section = writer.end(tag);
  const attrsObject = attrsToObject(tag, true) || t.nullLiteral();
  const renderBodyProp = getRenderBodyProp(attrsObject);
  const args: t.Expression[] = [node.name, attrsObject];

  if (renderBodyProp) {
    (attrsObject as t.ObjectExpression).properties.pop();
    let fnExpr: t.Expression = t.arrowFunctionExpression(
      renderBodyProp.params,
      toFirstExpressionOrBlock(renderBodyProp.body)
    );

    if (isOutputDOM(tag)) {
      const { walks, writes } = writer.getSectionMeta(section);
      fnExpr = callRuntime(
        tag,
        "createRenderer",
        writes || t.stringLiteral(""),
        walks || t.stringLiteral(""),
        fnExpr
      );
    }

    args.push(fnExpr);
  }

  const dynamicTagExpr = callRuntime(tag, "dynamicTag", ...args);

  if (node.var) {
    translateVar(tag, dynamicTagExpr);
    tag.remove();
  } else {
    tag.replaceWith(t.expressionStatement(dynamicTagExpr))[0].skip();
  }
}
