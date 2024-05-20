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
  BindingType,
  type Binding,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import { addStatement } from "../util/signals";
import translateVar from "../util/translate-var";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

export const kCommentTagBinding = Symbol("comment tag binding");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kCommentTagBinding]?: Binding;
  }
}

export default {
  analyze(tag: t.NodePath<t.MarkoTag>) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoAttributes(tag);

    let needsBinding = false;
    if (tag.has("var")) {
      if (!t.isIdentifier(tag.node.var)) {
        throw tag
          .get("var")
          .buildCodeFrameError(
            "The `html-comment` tag cannot be destructured.",
          );
      }
      needsBinding = true;
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

      tagExtra[kCommentTagBinding] = createBinding(
        "#comment",
        BindingType.dom,
        section,
      );
      mergeReferences(tag, referenceNodes);
    }
    tag.skip();
  },
  translate: {
    enter(tag) {
      const tagExtra = tag.node.extra!;
      const commentBinding = tagExtra[kCommentTagBinding];
      if (tag.has("var")) {
        if (isOutputHTML()) {
          translateVar(
            tag,
            t.arrowFunctionExpression(
              [],
              t.blockStatement([
                t.throwStatement(
                  t.newExpression(t.identifier("Error"), [
                    t.stringLiteral(
                      "Cannot reference a DOM node from the server",
                    ),
                  ]),
                ),
              ]),
            ),
          );
        } else {
          const varName = (tag.node.var as t.Identifier).name;
          const references = tag.scope.getBinding(varName)!.referencePaths;
          let createElFunction = undefined;
          for (const reference of references) {
            const referenceSection = getSection(reference);
            if (reference.parentPath?.isCallExpression()) {
              reference.parentPath.replaceWith(
                t.expressionStatement(
                  createScopeReadExpression(referenceSection, commentBinding!),
                ),
              );
            } else {
              createElFunction ??= t.identifier(varName + "_getter");
              reference.replaceWith(
                callRuntime(
                  "bindFunction",
                  getScopeExpression(referenceSection, getSection(tag)),
                  createElFunction,
                ),
              );
            }
          }
          if (createElFunction) {
            currentProgramPath.pushContainer(
              "body",
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  createElFunction,
                  t.arrowFunctionExpression(
                    [scopeIdentifier],
                    t.memberExpression(
                      scopeIdentifier,
                      getScopeAccessorLiteral(commentBinding!),
                      true,
                    ),
                  ),
                ),
              ]),
            );
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
