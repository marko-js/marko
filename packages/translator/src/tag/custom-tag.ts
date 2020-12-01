import { types as t, NodePath } from "@marko/babel-types";
import {
  getTagDef,
  importDefault,
  resolveRelativePath
} from "@marko/babel-utils";
import attrsToObject, { getRenderBodyProp } from "../util/attrs-to-object";
import { flushBefore, flushInto } from "../util/html-flush";
import analyzeTagName from "../util/analyze-tag-name";

export function enter(tag: NodePath<t.MarkoTag>) {
  flushBefore(tag);
}

export function exit(tag: NodePath<t.MarkoTag>) {
  const { node } = tag;
  let tagIdentifier: t.Expression;

  flushInto(tag);

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

    tagIdentifier = importDefault(file, relativePath, tagName);

    if (!tags.includes(relativePath)) {
      tags.push(relativePath);
    }
  } else {
    tagIdentifier = node.name;
  }

  const attrsObject = attrsToObject(tag, true);

  if (analyzeTagName(tag).nullable) {
    const renderBodyProp = getRenderBodyProp(attrsObject);
    let renderBodyId: t.Identifier | undefined = undefined;

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

    tag
      .replaceWith(
        t.ifStatement(
          tagIdentifier,
          callStatement(tagIdentifier, attrsToObject(tag)),
          renderBodyId && callStatement(renderBodyId)
        )
      )[0]
      .skip();
  } else {
    tag.replaceWith(callStatement(tagIdentifier, attrsObject))[0].skip();
  }
}

function callStatement(
  id: t.Expression,
  ...args: Array<t.Expression | undefined>
) {
  return t.expressionStatement(
    t.callExpression(id, args.filter(Boolean) as t.Expression[])
  );
}
