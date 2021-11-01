import { types as t } from "@marko/compiler";
import {
  getTagDef,
  importNamed,
  resolveRelativePath
} from "@marko/babel-utils";
import attrsToObject, { getRenderBodyProp } from "../../util/attrs-to-object";
import { writeWalks, writeHydrate, writeTemplate } from "../../util/dom-writer";
import translateVar from "../../util/translate-var";

export function exit(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  let tagIdentifier: t.Expression;
  let tagTemplate: t.Expression;
  let tagWalks: t.Expression;

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

    tagIdentifier = importNamed(file, relativePath, "hydrate", tagName);
    tagTemplate = importNamed(
      file,
      relativePath,
      "template",
      tagName + "Template"
    );
    tagWalks = importNamed(file, relativePath, "walks", tagName + "Walks");

    if (!tags.includes(relativePath)) {
      tags.push(relativePath);
    }
  } else {
    tagIdentifier = node.name;
  }

  const tagVar = node.var;
  const attrsObject = attrsToObject(tag, true);

  if (node.extra!.tagNameNullable) {
    const renderBodyProp = getRenderBodyProp(attrsObject);
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
      translateVar(tag, t.unaryExpression("void", t.numericLiteral(0)), "let");
      renderTagExpr = t.assignmentExpression("=", tagVar, renderTagExpr);
    }

    writeTemplate(tag, tagTemplate!);
    writeWalks(tag, tagWalks!);
    writeHydrate(
      tag,
      t.ifStatement(
        tagIdentifier,
        t.expressionStatement(renderTagExpr),
        renderBodyId && callStatement(renderBodyId)
      )
    );
  } else if (tagVar) {
    translateVar(tag, callExpression(tagIdentifier, attrsObject));
  } else {
    writeTemplate(tag, tagTemplate!);
    writeWalks(tag, tagWalks!);
    writeHydrate(tag, callStatement(tagIdentifier, attrsObject));
  }
  tag.remove();
}

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
