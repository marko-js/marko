import {
  assertNoAttributeTags,
  assertNoAttributes,
  assertNoParams,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { WalkCode } from "@marko/runtime-tags/common/types";
import { isOutputHTML } from "../util/marko-config";
import {
  ReserveType,
  getScopeAccessorLiteral,
  reserveScope,
} from "../util/reserve";
import { callRuntime } from "../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../util/scope-read";
import { getOrCreateSection, getSection } from "../util/sections";
import translateVar from "../util/translate-var";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      if (tag.has("var")) {
        if (!t.isIdentifier(tag.node.var)) {
          throw tag
            .get("var")
            .buildCodeFrameError(
              "The `<html-comment>` tag's return value cannot be destructured.",
            );
        }

        reserveScope(
          ReserveType.Visit,
          getOrCreateSection(tag),
          tag.node,
          tag.node.var.name,
          "#comment",
        );
      }
    },
  },
  translate: {
    enter(tag) {
      const extra = tag.node.extra!;
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
                  createScopeReadExpression(referenceSection, extra.reserve!),
                ),
              );
            } else {
              createElFunction ??= t.identifier(varName + "_getter");
              reference.replaceWith(
                callRuntime(
                  "bindFunction",
                  getScopeExpression(referenceSection, extra.reserve!.section),
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
                      getScopeAccessorLiteral(extra.reserve!),
                      true,
                    ),
                  ),
                ),
              ]),
            );
          }
        }
      }

      if (extra.reserve) {
        walks.visit(tag, WalkCode.Get);
      }

      walks.enter(tag);
      writer.writeTo(tag)`<!--`;
      // TODO: for the DOM side this needs to normalize placeholders and text content into a string.
      // This should also error if other tags are discovered, including control flow probably.
    },
    exit(tag) {
      assertNoParams(tag);
      assertNoAttributes(tag);
      assertNoAttributeTags(tag);

      walks.exit(tag);
      writer.writeTo(tag)`-->`;

      if (tag.node.extra?.reserve) {
        writer.markNode(tag);
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
