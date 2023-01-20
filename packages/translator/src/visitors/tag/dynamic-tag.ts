import { types as t } from "@marko/compiler";
import toFirstExpressionOrBlock from "../../util/to-first-expression-or-block";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import { callRuntime } from "../../util/runtime";
import translateVar from "../../util/translate-var";
import { isOutputHTML } from "../../util/marko-config";
import { getOrCreateSectionId, getSectionId } from "../../util/sections";
import { getComputeFn, getSignal, subscribe } from "../../util/signals";
import {
  countReserves,
  getNodeLiteral,
  Reserve,
  reserveScope,
  ReserveType,
} from "../../util/reserve";
import type { ReferenceGroup } from "../../util/references";
import customTag from "./custom-tag";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSectionId(tag),
        tag.node as any as t.Identifier,
        "dynamicTagName",
        "#text"
      );

      customTag.analyze.enter(tag);
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      walks.visit(tag, walks.WalkCodes.Replace);
      walks.enterShallow(tag);

      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      const { node } = tag;

      if (isOutputHTML()) {
        writer.flushInto(tag);
        const attrsObject = attrsToObject(tag, true);
        const renderBodyProp = getRenderBodyProp(attrsObject);
        const args: t.Expression[] = [
          node.name,
          attrsObject || t.nullLiteral(),
        ];

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

        const sectionId = getSectionId(tag);
        const tagNameReserve = node.extra?.reserve as Reserve;
        const references = (node.extra?.nameReferences as ReferenceGroup)
          ?.references;
        const signal = getSignal(sectionId, tagNameReserve);
        signal.build = () => {
          return callRuntime(
            "conditional",
            getNodeLiteral(tagNameReserve),
            t.numericLiteral(countReserves(references) || 1),
            getComputeFn(sectionId, node.name, references)
          );
        };
        subscribe(references, signal);

        tag.remove();
      }
    },
  },
};
