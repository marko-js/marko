import {
  assertAttributesOrArgs,
  getTemplateId,
  importDefault,
  importNamed,
  loadFileForTag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import { isOptimize, isOutputHTML } from "../../util/marko-config";
import {
  mergeReferences,
  getScopeAccessorLiteral,
  type Binding,
  type ReferencedBindings,
  bindingUtil,
  createBinding,
  BindingType,
} from "../../util/references";
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
  getResumeRegisterId,
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

const kDOMBinding = Symbol("dynamic tag dom binding");
const kAttrsBinding = Symbol("dynamic tag attrs binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
    [kAttrsBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const tagExtra = (tag.node.extra ??= {});
      const section = getOrCreateSection(tag);
      tagExtra[kDOMBinding] = createBinding(
        "#text",
        BindingType.dom,
        section,
        undefined,
        tagExtra,
      );
      let attrsReferencedBindings: ReferencedBindings;

      for (const attr of tag.node.attributes) {
        const attrExtra = (attr.value.extra ??= {});
        const attrBinding = createBinding(
          tag.scope.generateUid("name" in attr ? attr.name : "spread"),
          BindingType.derived,
          section,
          undefined, // TODO
          attrExtra,
        );
        attrBinding.downstreamExpressions.add(tagExtra);
        attrsReferencedBindings = bindingUtil.add(
          attrsReferencedBindings,
          attrBinding,
        );
      }

      tagExtra.referencedBindings = attrsReferencedBindings;
      tagExtra.isEffect = true;
      tagExtra[kAttrsBinding] = createBinding(
        tag.scope.generateUid("attrs"),
        BindingType.derived,
        section,
        undefined,
        tagExtra,
      );
      customTag.analyze.enter(tag);
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      const referenceNodes: t.Node[] = [];
      if (tag.node.arguments) {
        for (const arg of tag.node.arguments) {
          referenceNodes.push(arg);
        }
      }

      for (const attr of tag.node.attributes) {
        referenceNodes.push(attr.value);
      }

      mergeReferences(tag, referenceNodes);
      // addReference(tag, extra.reserve!); // todo
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      walks.visit(tag, WalkCode.Replace);
      assertAttributesOrArgs(tag);

      walks.enterShallow(tag);

      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      const { node } = tag;
      const extra = node.extra!;
      const nodeRef = extra[kDOMBinding]!;
      let tagExpression = node.name;

      if (node.extra!.tagNameDefine) {
        tagExpression = t.memberExpression(
          node.name,
          t.identifier("renderBody"),
        );
      } else if (t.isStringLiteral(tagExpression)) {
        const { file } = tag.hub;
        const relativePath = getTagRelativePath(tag);
        tagExpression = importDefault(file, relativePath, tagExpression.value);
      }

      if (extra.___featureType === "class") {
        const { markoOpts } = tag.hub.file;
        const compatRuntimeFile = `marko/src/runtime/helpers/tags-compat/${
          isOutputHTML() ? "html" : "dom"
        }${markoOpts.optimize ? "" : "-debug"}.${markoOpts.modules === "esm" ? "mjs" : "js"}`;
        importDefault(tag.hub.file, compatRuntimeFile);

        if (isOutputHTML()) {
          const serialized5to6 = importNamed(
            tag.hub.file,
            compatRuntimeFile,
            "s",
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
          const section = getSection(tag);
          const renderBodySection = getSection(tag.get("body"));
          attrsObject.properties.pop();
          args.push(
            // TODO: omit register if dynamic tag is string only
            callRuntime(
              "register",
              callRuntime(
                "createRenderer",
                t.arrowFunctionExpression(
                  renderBodyProp.params,
                  toFirstExpressionOrBlock(renderBodyProp.body),
                ),
              ),
              t.stringLiteral(
                getResumeRegisterId(renderBodySection, "renderer"),
              ),
              getScopeIdIdentifier(section),
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
          getScopeAccessorLiteral(nodeRef),
        )}`;

        getSerializedScopeProperties(section).set(
          t.stringLiteral(getScopeAccessorLiteral(nodeRef).value + "!"),
          dynamicScopeIdentifier,
        );
        getSerializedScopeProperties(section).set(
          t.stringLiteral(getScopeAccessorLiteral(nodeRef).value + "("),
          t.isIdentifier(tagExpression)
            ? t.identifier(tagExpression.name)
            : tagExpression,
        );
      } else {
        const section = getSection(tag);
        const bodySection = getSection(tag.get("body"));
        const hasBody = section !== bodySection;
        const renderBodyIdentifier = hasBody && writer.getRenderer(bodySection);
        const signal = getSignal(section, nodeRef);
        signal.build = () => {
          return callRuntime(
            "conditional",
            getScopeAccessorLiteral(nodeRef),
            getSignalFn(signal, [scopeIdentifier]),
            buildSignalIntersections(signal),
            buildSignalValuesWithIntersections(signal),
          );
        };
        signal.hasDownstreamIntersections = () => true;
        addValue(
          section,
          node.name.extra?.referencedBindings,
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
            node.extra?.referencedBindings,
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
                          getScopeAccessorLiteral(nodeRef),
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
