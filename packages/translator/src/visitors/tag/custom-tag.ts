import { types as t } from "@marko/compiler";
import {
  getTagDef,
  importNamed,
  importDefault,
  resolveRelativePath,
} from "@marko/babel-utils";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import translateVar from "../../util/translate-var";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import { isOutputHTML } from "../../util/marko-config";
import { callRuntime } from "../../util/runtime";
import { startSection } from "../../util/sections";
import trackReferences from "../../util/references";

export default {
  analyze: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      trackReferences(tag);

      const body = tag.get("body");
      if (body.get("body").length) {
        startSection(body);
      }
    },
  },
  translate: {
    enter(tag: t.NodePath<t.MarkoTag>) {
      writer.start(tag);
    },
    exit(tag: t.NodePath<t.MarkoTag>) {
      const section = writer.end(tag);
      const isHTML = isOutputHTML();
      const { node } = tag;
      const write = writer.writeTo(tag);
      let tagIdentifier: t.Expression;

      if (t.isStringLiteral(node.name)) {
        const { file } = tag.hub;
        const tagName = node.name.value;
        const tags = file.metadata.marko.tags;
        const tagDef = getTagDef(tag);
        const template = tagDef?.template;
        const relativePath = template && resolveRelativePath(file, template);

        if (!relativePath) {
          throw tag
            .get("name")
            .buildCodeFrameError(
              `Unable to find entry point for custom tag <${tagName}>.`
            );
        }

        if (isHTML) {
          tagIdentifier = importDefault(file, relativePath, tagName);
        } else {
          tagIdentifier = importNamed(file, relativePath, "hydrate", tagName);
          write`${importNamed(
            file,
            relativePath,
            "template",
            `${tagName}_template`
          )}`;
          walks.injectWalks(
            tag,
            importNamed(file, relativePath, "walks", `${tagName}_walks`)
          );
        }

        if (!tags.includes(relativePath)) {
          tags.push(relativePath);
        }
      } else {
        tagIdentifier = node.name;
      }

      const tagVar = node.var;
      const attrsObject = attrsToObject(tag, true);
      const renderBodyProp = getRenderBodyProp(attrsObject);

      if (isHTML && node.extra.tagNameNullable) {
        let renderBodyId: t.Identifier | undefined = undefined;
        let renderTagExpr: t.Expression = callExpression(
          tagIdentifier,
          attrsToObject(tag)
        );

        if (renderBodyProp) {
          renderBodyId = tag.scope.generateUidIdentifier("renderBody");
          const [renderBodyPath] = tag.insertBefore(
            t.functionDeclaration(
              renderBodyId,
              renderBodyProp.params,
              renderBodyProp.body
            )
          );

          renderBodyPath.skip();

          (attrsObject as t.ObjectExpression).properties[
            (attrsObject as t.ObjectExpression).properties.length - 1
          ] = t.objectProperty(t.identifier("renderBody"), renderBodyId);
        }

        if (tagVar) {
          translateVar(
            tag,
            t.unaryExpression("void", t.numericLiteral(0)),
            "let"
          );
          renderTagExpr = t.assignmentExpression("=", tagVar, renderTagExpr);
        }

        tag
          .replaceWith(
            t.ifStatement(
              tagIdentifier,
              t.expressionStatement(renderTagExpr),
              renderBodyId && callStatement(renderBodyId)
            )
          )[0]
          .skip();
      } else {
        if (!isHTML && renderBodyProp) {
          const { walks, writes } = writer.getSectionMeta(section);
          (attrsObject as t.ObjectExpression).properties.pop();
          (attrsObject as t.ObjectExpression).properties.push(
            t.objectProperty(
              t.identifier("renderBody"),
              callRuntime(
                "createRenderer",
                writes || t.stringLiteral(""),
                walks || t.stringLiteral(""),
                t.arrowFunctionExpression(
                  renderBodyProp.params,
                  renderBodyProp.body
                )
              )
            )
          );
        }

        if (tagVar) {
          translateVar(tag, callExpression(tagIdentifier, attrsObject));
          tag.remove();
        } else {
          tag.replaceWith(callStatement(tagIdentifier, attrsObject))[0].skip();
        }
      }
    },
  },
};

function callStatement(
  id: t.Expression,
  ...args: Array<t.Expression | undefined>
) {
  return t.expressionStatement(callExpression(id, ...args));
}

function callExpression(
  id: t.Expression,
  ...args: Array<t.Expression | undefined>
) {
  return t.callExpression(id, args.filter(Boolean) as t.Expression[]);
}
