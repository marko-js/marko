import { types as t } from "@marko/compiler";
import toFirstExpressionOrBlock from "../../util/to-first-expression-or-block";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import { callRuntime } from "../../util/runtime";
import translateVar from "../../util/translate-var";
import { isOutputHTML } from "../../util/marko-config";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../../util/sections";
import {
  getSignalFn,
  getSerializedScopeProperties,
  getSignal,
  addValue,
  buildSignalIntersections,
  buildSignalValuesWithIntersections,
} from "../../util/signals";
import {
  getScopeAccessorLiteral,
  Reserve,
  reserveScope,
  ReserveType,
} from "../../util/reserve";
import { mergeReferences, addBindingToReferences } from "../../util/references";
import customTag from "./custom-tag";
import { currentProgramPath, scopeIdentifier } from "../program";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSection(tag),
        tag.node as any as t.Identifier,
        "dynamicTagName",
        "#text"
      );

      customTag.analyze.enter(tag);
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      tag.node.extra.attrsReferences = mergeReferences(
        getOrCreateSection(tag),
        tag.node.attributes
          .filter((attr) => attr.extra?.valueReferences)
          .map((attr) => [attr.extra, "valueReferences"])
      );
      addBindingToReferences(tag, "attrsReferences", tag.node.extra.reserve!);
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
              renderBodyProp.params.length
                ? [
                    t.objectPattern([
                      t.objectProperty(
                        t.identifier("value"),
                        t.arrayPattern(renderBodyProp.params)
                      ),
                    ]),
                  ]
                : [],
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
        const section = getSection(tag);
        writer.writeTo(tag)`${callRuntime(
          "markResumeControlEnd",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(node.extra.reserve!)
        )}`;

        getSerializedScopeProperties(section).set(
          t.stringLiteral(
            getScopeAccessorLiteral(node.extra.reserve!).value + "!"
          ),
          dynamicScopeIdentifier
        );
        getSerializedScopeProperties(section).set(
          t.stringLiteral(
            getScopeAccessorLiteral(node.extra.reserve!).value + "("
          ),
          node.name
        );
      } else {
        const section = getSection(tag);
        const bodySection = getSection(tag.get("body"));
        const hasBody = section !== bodySection;
        const renderBodyIdentifier = hasBody && writer.getRenderer(bodySection);
        const tagNameReserve = node.extra?.reserve as Reserve;
        const signal = getSignal(section, tagNameReserve);
        signal.build = () => {
          return callRuntime(
            "conditional",
            getScopeAccessorLiteral(tagNameReserve),
            getSignalFn(signal, [scopeIdentifier]),
            buildSignalIntersections(signal),
            buildSignalValuesWithIntersections(signal)
          );
        };
        signal.hasDownstreamIntersections = () => true;
        addValue(
          section,
          node.extra?.nameReferences,
          signal,
          renderBodyIdentifier
            ? t.logicalExpression("||", node.name, renderBodyIdentifier)
            : node.name
        );

        const attrsObject = attrsToObject(tag, true);
        if (attrsObject || renderBodyIdentifier) {
          const attrsGetter = t.arrowFunctionExpression(
            [],
            attrsObject ?? t.objectExpression([])
          );
          const id = currentProgramPath.scope.generateUidIdentifier(
            tag.get("name").toString() + "_input"
          );
          let added = false;
          addValue(
            section,
            node.extra?.attrsReferences,
            {
              get identifier() {
                if (!added) {
                  currentProgramPath.pushContainer(
                    "body",
                    t.variableDeclaration("const", [
                      t.variableDeclarator(
                        id,
                        callRuntime(
                          "dynamicTagAttrs",
                          getScopeAccessorLiteral(tagNameReserve),
                          renderBodyIdentifier
                        )
                      ),
                    ])
                  );
                  added = true;
                }
                return id;
              },
              hasDownstreamIntersections: () => true,
            },
            attrsGetter
          );
        }

        tag.remove();
      }
    },
  },
};
