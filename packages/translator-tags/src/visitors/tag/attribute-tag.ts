import { assertNoVar, findParentTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import attrsToObject from "../../util/attrs-to-object";
import { getSection, startSection } from "../../util/sections";
import { TagNameTypes } from "../../util/tag-name-type";
import * as writer from "../../util/writer";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      const body = tag.get("body");
      if (body.get("body").length) {
        startSection(body);
      }
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      getSection(tag.get("body"));
      if (writer.hasPendingHTML(tag)) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            "Dynamic @tags cannot be mixed with body content.",
          );
      }
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      assertNoVar(tag);
      writer.flushInto(tag);

      const parentTag = findParentTag(tag);

      if (!parentTag) {
        throw tag
          .get("name")
          .buildCodeFrameError("@tags must be nested within another tag.");
      }

      const parentExtra = parentTag.node.extra;

      if (parentExtra.tagNameType === TagNameTypes.NativeTag) {
        throw tag
          .get("name")
          .buildCodeFrameError("@tags cannot be nested under native tags.");
      }

      const attrName = (tag.node.name as t.StringLiteral).value.slice(1);
      const info = parentExtra.nestedAttributeTags[attrName];
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
};
