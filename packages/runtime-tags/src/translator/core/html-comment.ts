import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { generateUidIdentifier } from "../util/generate-uid";
import isInvokedFunction from "../util/is-invoked-function";
import { isOutputHTML } from "../util/marko-config";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import {
  addBindingSerializeReasonExpr,
  forceBindingSerialize,
  getBindingSerializeReason,
} from "../util/serialize-reasons";
import { addStatement, getRegisterUID } from "../util/signals";
import translateVar from "../util/translate-var";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

const kNodeBinding = Symbol("comment tag binding");
const kGetterId = Symbol("node getter id");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNodeBinding]?: Binding;
    [kGetterId]?: string;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);

    const tagVar = tag.node.var;
    let needsBinding = false;
    let needsGetter = false;
    if (tagVar) {
      if (!t.isIdentifier(tagVar)) {
        throw tag
          .get("var")
          .buildCodeFrameError(
            "The [`<html-comment>` tag](https://next.markojs.com/docs/reference/core-tag#html-comment) tag variable cannot be destructured.",
          );
      }
      needsBinding = true;

      for (const ref of tag.scope.getBinding(tagVar.name)!.referencePaths) {
        if (!isInvokedFunction(ref)) {
          needsGetter = true;
          break;
        }
      }
    }

    const referenceNodes: t.Node[] = [];
    for (const child of tag.get("body").get("body")) {
      if (child.isMarkoPlaceholder()) {
        referenceNodes.push(child.node.value);
        needsBinding = true;
      } else if (!child.isMarkoText()) {
        throw child.buildCodeFrameError(
          "Invalid child. Only text is allowed inside an html comment.",
        );
      }
    }
    if (needsBinding) {
      const tagSection = getOrCreateSection(tag);
      const tagExtra = mergeReferences(tagSection, tag.node, referenceNodes);
      const nodeBinding = (tagExtra[kNodeBinding] = createBinding(
        "#comment",
        BindingType.dom,
        tagSection,
      ));

      if (needsGetter) {
        tagExtra[kGetterId] = getRegisterUID(tagSection, "comment");
      }

      if (tagVar) {
        forceBindingSerialize(tagSection, nodeBinding);
      } else {
        addBindingSerializeReasonExpr(tagSection, nodeBinding, tagExtra);
      }
    }
    tag.skip();
  },
  translate: {
    enter(tag) {
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];
      const hasVar = !!tag.node.var;
      if (hasVar) {
        const getterId = tagExtra[kGetterId];
        if (isOutputHTML()) {
          translateVar(
            tag,
            callRuntime(
              "_el",
              getterId && getScopeIdIdentifier(getSection(tag)),
              getterId && t.stringLiteral(getterId),
            ),
          );
        } else {
          const varName = (tag.node.var as t.Identifier).name;
          const references = tag.scope.getBinding(varName)!.referencePaths;
          let getterFnIdentifier: t.Identifier | undefined;
          if (getterId) {
            getterFnIdentifier = generateUidIdentifier(`get_${varName}`);
            getProgram().node.body.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  getterFnIdentifier,
                  callRuntime(
                    "_el",
                    t.stringLiteral(getterId),
                    getScopeAccessorLiteral(nodeBinding!),
                  ),
                ),
              ]),
            );
          }
          for (const reference of references) {
            const referenceSection = getSection(reference);
            if (isInvokedFunction(reference)) {
              reference.parentPath.replaceWith(
                t.expressionStatement(
                  createScopeReadExpression(referenceSection, nodeBinding!),
                ),
              );
            } else if (getterFnIdentifier) {
              reference.replaceWith(
                t.callExpression(getterFnIdentifier, [
                  getScopeExpression(referenceSection, getSection(tag)),
                ]),
              );
            }
          }
        }
      }

      if (nodeBinding) {
        walks.visit(tag, WalkCode.Get);
      }

      walks.enter(tag);
      writer.writeTo(tag)`<!--`;
    },
    exit(tag) {
      const tagSection = getSection(tag);
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];
      const write = writer.writeTo(tag);

      // TODO: If the tag is completely empty, make the marker node the same as the comment node.
      if (isOutputHTML()) {
        for (const child of tag.node.body.body) {
          if (t.isMarkoText(child)) {
            write`${child.value}`;
          } else if (t.isMarkoPlaceholder(child)) {
            write`${callRuntime("_escape", child.value)}`;
          }
        }
      } else {
        const templateQuasis: t.TemplateElement[] = [];
        const templateExpressions: t.Expression[] = [];
        let currentQuasi = "";
        for (const child of tag.node.body.body) {
          if (t.isMarkoText(child)) {
            currentQuasi += child.value;
          } else if (t.isMarkoPlaceholder(child)) {
            templateQuasis.push(t.templateElement({ raw: currentQuasi }));
            templateExpressions.push(child.value);
            currentQuasi = "";
          }
        }

        if (templateExpressions.length === 0) {
          write`${currentQuasi}`;
        } else {
          templateQuasis.push(t.templateElement({ raw: currentQuasi }));
          addStatement(
            "render",
            getSection(tag),
            tagExtra.referencedBindings,
            t.expressionStatement(
              callRuntime(
                "_text",
                t.memberExpression(
                  scopeIdentifier,
                  getScopeAccessorLiteral(nodeBinding!),
                  true,
                ),
                t.templateLiteral(templateQuasis, templateExpressions),
              ),
            ),
          );
        }
      }

      walks.exit(tag);
      write`-->`;

      if (nodeBinding) {
        writer.markNode(
          tag,
          nodeBinding,
          getBindingSerializeReason(tagSection, nodeBinding),
        );
      }

      tag.remove();
    },
  },
  parseOptions: {
    text: true,
  },
  attributes: {},
  autocomplete: [
    {
      description:
        "Use to create an html comment that is not stripped from the output.",
      descriptionMoreURL:
        "https://next.markojs.com/docs/reference/core-tag#html-comment",
    },
  ],
} as Tag;
