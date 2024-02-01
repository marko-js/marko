import {
  getTemplateId,
  importDefault,
  importNamed,
  loadFileForTag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import { isOptimize, isOutputHTML } from "../../util/marko-config";
import { addBindingToReferences, mergeReferences } from "../../util/references";
import {
  type Reserve,
  ReserveType,
  getScopeAccessorLiteral,
  reserveScope,
} from "../../util/reserve";
import { callRuntime } from "../../util/runtime";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../../util/sections";
import {
  addValue,
  buildSignalIntersections,
  buildSignalValuesWithIntersections,
  getSerializedScopeProperties,
  getSignal,
  getSignalFn,
  writeHTMLResumeStatements,
} from "../../util/signals";
import toFirstExpressionOrBlock from "../../util/to-first-expression-or-block";
import translateVar from "../../util/translate-var";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { currentProgramPath, scopeIdentifier } from "../program";
import customTag, { getTagRelativePath } from "./custom-tag";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSection(tag),
        tag.node as any as t.Identifier,
        "dynamicTagName",
        "#text",
      );

      customTag.analyze.enter(tag);
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      const referenceEntries: [Record<string, unknown>, string][] = [];
      if (tag.node.arguments) {
        for (const arg of tag.node.arguments) {
          if (arg.extra?.references) {
            referenceEntries.push([arg.extra, "references"]);
          }
        }
      } else {
        for (const attr of tag.node.attributes) {
          if (attr.extra?.valueReferences) {
            referenceEntries.push([attr.extra, "valueReferences"]);
          }
        }
      }
      tag.node.extra.attrsReferences = mergeReferences(
        getOrCreateSection(tag),
        referenceEntries,
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
      let tagExpression = node.name;

      if (t.isStringLiteral(tagExpression)) {
        const { file } = tag.hub;
        const relativePath = getTagRelativePath(tag);
        tagExpression = importDefault(file, relativePath, tagExpression.value);
      }

      if (tag.node.extra?.___featureType === "class") {
        importDefault(
          tag.hub.file,
          `marko/src/runtime/helpers/tags-compat-${
            isOutputHTML() ? "html" : "dom"
          }.js`,
          "marko_tags_compat",
        );

        if (isOutputHTML()) {
          const serialized5to6 = importNamed(
            tag.hub.file,
            `marko/src/runtime/helpers/tags-compat-html.js`,
            "serialized5to6",
          );
          currentProgramPath.pushContainer(
            "body",
            t.expressionStatement(
              t.callExpression(serialized5to6, [
                t.identifier((tagExpression as t.Identifier).name),
                t.stringLiteral(
                  getTemplateId(
                    isOptimize(),
                    loadFileForTag(tag)!.metadata.marko.id,
                  ),
                ),
              ]),
            ),
          );
        } else {
          currentProgramPath.pushContainer(
            "body",
            t.expressionStatement(
              callRuntime(
                "register",
                t.stringLiteral(
                  getTemplateId(
                    isOptimize(),
                    loadFileForTag(tag)!.metadata.marko.id,
                  ),
                ),
                t.identifier((tagExpression as t.Identifier).name),
              ),
            ),
          );
        }
      }

      if (isOutputHTML()) {
        writer.flushInto(tag);
        writeHTMLResumeStatements(tag.get("body"));
        const attrsObject = attrsToObject(tag, true);
        const renderBodyProp = getRenderBodyProp(attrsObject);
        const args: (t.Expression | t.SpreadElement)[] = [
          tagExpression,
          attrsObject,
        ];

        if (t.isObjectExpression(attrsObject) && renderBodyProp) {
          attrsObject.properties.pop();
          args.push(
            callRuntime(
              "createRenderer",
              t.arrowFunctionExpression(
                renderBodyProp.params,
                toFirstExpressionOrBlock(renderBodyProp.body),
              ),
            ),
          );
        }

        const dynamicScopeIdentifier =
          currentProgramPath.scope.generateUidIdentifier("dynamicScope");
        const dynamicTagExpr = t.isArrayExpression(attrsObject)
          ? callRuntime("dynamicTagArgs", ...args)
          : callRuntime("dynamicTagInput", ...args);
        if (node.var) {
          // TODO: This breaks now that _dynamicTag returns a scope
          translateVar(tag, dynamicTagExpr);
          tag.remove();
        } else {
          tag
            .replaceWith(
              t.variableDeclaration("const", [
                t.variableDeclarator(dynamicScopeIdentifier, dynamicTagExpr),
              ]),
            )[0]
            .skip();
        }
        const section = getSection(tag);
        writer.writeTo(tag)`${callRuntime(
          "markResumeControlEnd",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(node.extra.reserve!),
        )}`;

        getSerializedScopeProperties(section).set(
          t.stringLiteral(
            getScopeAccessorLiteral(node.extra.reserve!).value + "!",
          ),
          dynamicScopeIdentifier,
        );
        getSerializedScopeProperties(section).set(
          t.stringLiteral(
            getScopeAccessorLiteral(node.extra.reserve!).value + "(",
          ),
          t.isIdentifier(tagExpression)
            ? t.identifier(tagExpression.name)
            : tagExpression,
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
            buildSignalValuesWithIntersections(signal),
          );
        };
        signal.hasDownstreamIntersections = () => true;
        addValue(
          section,
          node.extra?.nameReferences,
          signal,
          renderBodyIdentifier
            ? t.logicalExpression("||", tagExpression, renderBodyIdentifier)
            : tagExpression,
        );

        const attrsObject = attrsToObject(tag, true);
        const emptyAttrs =
          t.isObjectExpression(attrsObject) && !attrsObject.properties.length;
        if (!emptyAttrs || renderBodyIdentifier) {
          const attrsGetter = t.arrowFunctionExpression([], attrsObject);
          const id = currentProgramPath.scope.generateUidIdentifier(
            tag.get("name").toString() + "_input",
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
                          renderBodyIdentifier,
                          t.isArrayExpression(attrsObject)
                            ? t.booleanLiteral(true)
                            : false,
                        ),
                      ),
                    ]),
                  );
                  added = true;
                }
                return id;
              },
              hasDownstreamIntersections: () => true,
            },
            attrsGetter,
          );
        }

        tag.remove();
      }
    },
  },
};
