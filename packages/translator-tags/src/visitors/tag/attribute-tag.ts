import { assertNoArgs, assertNoVar, findParentTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import attrsToObject from "../../util/attrs-to-object";
import { isOutputHTML } from "../../util/marko-config";
import { getSection, startSection } from "../../util/sections";
import { TagNameType } from "../../util/tag-name-type";
import type { TemplateVisitor } from "../../util/visitors";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../program";

export default {
  analyze: {
    enter(tag) {
      assertNoVar(tag);
      assertNoArgs(tag);

      startSection(tag.get("body"));
    },
  },
  translate: {
    exit(tag) {
      const parentTag = findParentTag(tag);

      if (!parentTag) {
        throw tag
          .get("name")
          .buildCodeFrameError("@tags must be nested within another tag.");
      }

      const parentExtra = parentTag.node.extra!;

      if (parentExtra.tagNameType === TagNameType.NativeTag) {
        throw tag
          .get("name")
          .buildCodeFrameError("@tags cannot be nested under native tags.");
      }

      if (isOutputHTML()) {
        writer.flushInto(tag);
      } else {
        tag.node.attributes.push(
          t.markoAttribute(
            "renderBody",
            t.callExpression(t.identifier(getSection(tag.get("body")).name), [
              scopeIdentifier,
            ]),
          ),
        );
      }

      const attrName = (tag.node.name as t.StringLiteral).value.slice(1);
      const info = parentExtra.nestedAttributeTags![attrName];
      const attrsObject = attrsToObject(tag, true);

      if (info.dynamic) {
        if (!info.identifier) {
          info.identifier = parentTag.scope.generateUidIdentifier(attrName);
          parentTag.insertBefore(
            info.repeated
              ? t.variableDeclaration("const", [
                  t.variableDeclarator(info.identifier, t.arrayExpression([])),
                ])
              : t.variableDeclaration("let", [
                  t.variableDeclarator(info.identifier),
                ]),
          );

          parentTag.pushContainer(
            "attributes",
            t.markoAttribute(attrName, info.identifier),
          );
        }

        tag.replaceWith(
          t.expressionStatement(
            info.repeated
              ? t.callExpression(
                  t.memberExpression(info.identifier, t.identifier("push")),
                  [attrsObject],
                )
              : t.assignmentExpression("=", info.identifier, attrsObject),
          ),
        );
      } else if (info.repeated) {
        const existingAttr = parentTag
          .get("attributes")
          .find((attr) => (attr.node as t.MarkoAttribute).name === attrName);

        if (existingAttr) {
          (
            existingAttr.get("value") as t.NodePath<t.ArrayExpression>
          ).pushContainer("elements", attrsObject);
        } else {
          parentTag.pushContainer(
            "attributes",
            t.markoAttribute(attrName, t.arrayExpression([attrsObject])),
          );
        }

        tag.remove();
      } else {
        parentTag.pushContainer(
          "attributes",
          t.markoAttribute(attrName, attrsObject),
        );
        tag.remove();
      }
    },
  },
} satisfies TemplateVisitor<t.MarkoTag>;
