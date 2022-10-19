import { types as t } from "@marko/compiler";
import toFirstExpressionOrBlock from "../../util/to-first-expression-or-block";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import * as writer from "../../util/writer";
import { callRuntime } from "../../util/runtime";
import translateVar from "../../util/translate-var";
import { isOutputHTML } from "../../util/marko-config";
// import { getSectionId } from "../../util/sections";

export default {
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      const { node } = tag;
      const attrsObject = attrsToObject(tag, true);
      const renderBodyProp = getRenderBodyProp(attrsObject);
      const args: t.Expression[] = [node.name, attrsObject || t.nullLiteral()];

      if (isOutputHTML()) {
        writer.flushBefore(tag);
        if (renderBodyProp) {
          (attrsObject as t.ObjectExpression).properties.pop();

          args.push(
            t.arrowFunctionExpression(
              renderBodyProp.params,
              toFirstExpressionOrBlock(renderBodyProp.body)
            )
          );
        }

        const dynamicTagExpr = callRuntime("dynamicTag", ...args);

        if (node.var) {
          translateVar(tag, dynamicTagExpr);
          tag.remove();
        } else {
          tag.replaceWith(t.expressionStatement(dynamicTagExpr))[0].skip();
        }
      } else {
        // if (renderBodyProp) {
        //   const tagBodySectionId = getSectionId(tag.get("body"));
        //   const { walks, writes } = writer.getSectionMeta(tagBodySectionId);
        //   const renderBody = callRuntime(
        //     "createRenderer",
        //     writes || t.stringLiteral(""),
        //     walks || t.stringLiteral(""),
        //     t.nullLiteral()
        //   );
        // }

        tag.remove();
      }
    },
  },
};
