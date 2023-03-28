import { types as t } from "@marko/compiler";
import toFirstExpressionOrBlock from "../../util/to-first-expression-or-block";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import { callRuntime } from "../../util/runtime";
import translateVar from "../../util/translate-var";
import { isOutputHTML } from "../../util/marko-config";
import {
  getOrCreateSectionId,
  getScopeIdIdentifier,
  getSectionId,
} from "../../util/sections";
import {
  getSignalFn,
  getSerializedScopeProperties,
  getSignal,
  addValue,
  addIntersectionWithGuardedValue,
} from "../../util/signals";
import {
  getNodeLiteral,
  Reserve,
  reserveScope,
  ReserveType,
} from "../../util/reserve";
import {
  mergeReferenceGroups,
  ReferenceGroup,
  updateReferenceGroup,
} from "../../util/references";
import customTag from "./custom-tag";
import {
  currentProgramPath,
  dirtyIdentifier,
  scopeIdentifier,
} from "../program";

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
    exit(tag: t.NodePath<t.MarkoTag>) {
      tag.node.extra.attrsReferences = mergeReferenceGroups(
        getOrCreateSectionId(tag),
        tag.node.attributes
          .filter((attr) => attr.extra?.valueReferences)
          .map((attr) => [attr.extra, "valueReferences"])
      );
      updateReferenceGroup(tag, "attrsReferences", tag.node.extra.reserve!);
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

        const dynamicScopeIdentifier =
          currentProgramPath.scope.generateUidIdentifier("dynamicScope");
        const dynamicTagExpr = callRuntime("dynamicTag", ...args);
        if (node.var) {
          // TODO: This breaks now that _dynamicTag returns a scope
          translateVar(tag, dynamicTagExpr);
          tag.remove();
        } else {
          tag
            .replaceWith(
              t.variableDeclaration("const", [
                t.variableDeclarator(dynamicScopeIdentifier, dynamicTagExpr),
              ])
            )[0]
            .skip();
        }
        const sectionId = getSectionId(tag);
        writer.writeTo(tag)`${callRuntime(
          "markHydrateControlEnd",
          getScopeIdIdentifier(sectionId),
          getNodeLiteral(node.extra.reserve!)
        )}`;

        getSerializedScopeProperties(sectionId).set(
          t.stringLiteral(getNodeLiteral(node.extra.reserve!).value + "!"),
          dynamicScopeIdentifier
        );
        getSerializedScopeProperties(sectionId).set(
          t.stringLiteral(getNodeLiteral(node.extra.reserve!).value + "("),
          node.name
        );
      } else {
        const sectionId = getSectionId(tag);
        const bodySectionId = getSectionId(tag.get("body"));
        const hasBody = sectionId !== bodySectionId;
        const renderBodyIdentifier =
          hasBody && writer.getRenderer(bodySectionId);
        const tagNameReserve = node.extra?.reserve as Reserve;
        const signal = getSignal(sectionId, tagNameReserve);
        signal.build = () => {
          return callRuntime(
            "conditional",
            getNodeLiteral(tagNameReserve),
            getSignalFn(signal, [scopeIdentifier])
          );
        };
        addValue(
          sectionId,
          node.extra?.nameReferences as ReferenceGroup,
          signal,
          renderBodyIdentifier
            ? t.logicalExpression("||", node.name, renderBodyIdentifier)
            : node.name
        );

        const attrsObject = attrsToObject(tag, true);
        if (attrsObject || renderBodyIdentifier) {
          const name = currentProgramPath.node.extra.sectionNames![sectionId];
          const signal = getSignal(
            sectionId,
            node.extra?.attrsReferences?.references
          );
          const attrsGetter = t.arrowFunctionExpression(
            [],
            attrsObject ?? t.objectExpression([])
          );
          addIntersectionWithGuardedValue(
            signal,
            name + "_attrs",
            attrsGetter,
            (attrsIdentifier) => {
              return t.expressionStatement(
                callRuntime(
                  "dynamicTagAttrs",
                  scopeIdentifier,
                  getNodeLiteral(tagNameReserve),
                  attrsIdentifier,
                  renderBodyIdentifier,
                  dirtyIdentifier
                )
              );
            }
          );
        }

        tag.remove();
      }
    },
  },
};
