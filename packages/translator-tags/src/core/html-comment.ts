import {
  assertNoArgs,
  assertNoAttributes,
  assertNoParams,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";

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
import { addStatement, getRegisterUID } from "../util/signals";
import translateVar from "../util/translate-var";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

export const kCommentTagBinding = Symbol("comment tag binding");
const kGetterId = Symbol("node getter id");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kCommentTagBinding]?: Binding;
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
            "The `html-comment` tag variable cannot be destructured.",
          );
      }
      needsBinding = true;

      for (const ref of tag.scope.getBinding(tagVar.name)!.referencePaths) {
        if (!ref.parentPath?.isCallExpression()) {
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
      const section = getOrCreateSection(tag);
      const tagExtra = (tag.node.extra ??= {});

      if (needsGetter) {
        tagExtra[kGetterId] = getRegisterUID(section, "comment");
      }

      tagExtra[kCommentTagBinding] = createBinding(
        "#comment",
        BindingType.dom,
        section,
      );
      mergeReferences(section, tag.node, referenceNodes);
    }
    tag.skip();
  },
  translate(tag) {
    const tagExtra = tag.node.extra!;
    const commentBinding = tagExtra[kCommentTagBinding];
    const hasVar = !!tag.node.var;
    if (hasVar) {
      const getterId = tagExtra[kGetterId];
      if (isOutputHTML()) {
        translateVar(
          tag,
          callRuntime(
            "nodeRef",
            getterId && getScopeIdIdentifier(getSection(tag)),
            getterId && t.stringLiteral(getterId),
          ),
        );
      } else {
        const varName = (tag.node.var as t.Identifier).name;
        const references = tag.scope.getBinding(varName)!.referencePaths;
        let getterFnIdentifier: t.Identifier | undefined;
        if (getterId) {
          getterFnIdentifier = currentProgramPath.scope.generateUidIdentifier(
            `get_${varName}`,
          );
          currentProgramPath.pushContainer(
            "body",
            t.variableDeclaration("const", [
              t.variableDeclarator(
                getterFnIdentifier,
                callRuntime(
                  "nodeRef",
                  t.stringLiteral(getterId),
                  getScopeAccessorLiteral(commentBinding!),
                ),
              ),
            ]),
          );
        }
        for (const reference of references) {
          const referenceSection = getSection(reference);
          if (reference.parentPath?.isCallExpression()) {
            reference.parentPath.replaceWith(
              t.expressionStatement(
                createScopeReadExpression(referenceSection, commentBinding!),
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

    if (tagExtra[kCommentTagBinding]) {
      walks.visit(tag, WalkCode.Get);
    }
    const write = writer.writeTo(tag);

    walks.enter(tag);
    write`<!--`;

    // TODO: If the tag is completely empty, make the marker node the same as the comment node.
    if (isOutputHTML()) {
      for (const child of tag.node.body.body) {
        if (t.isMarkoText(child)) {
          write`${child.value}`;
        } else if (t.isMarkoPlaceholder(child)) {
          write`${callRuntime("escapeXML", child.value)}`;
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
              "data",
              t.memberExpression(
                scopeIdentifier,
                getScopeAccessorLiteral(commentBinding!),
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

    if (commentBinding) {
      writer.markNode(tag, commentBinding);
    }

    tag.remove();
  },
  parseOptions: {
    // TODO: fix the types for Tag or parseOptions or something
    text: true,
  },
  attributes: {},
  autocomplete: [
    {
      description:
        "Use to create an html comment that is not stripped from the output.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#html-comment",
    },
  ],
} as Tag;
