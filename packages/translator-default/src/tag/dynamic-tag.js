import { types as t } from "@marko/babel-types";
import { getAttrs, buildEventHandlerArray } from "./util";

export default function(path) {
  const { node, hub } = path;
  const {
    name: tagNameExpression,
    key,
    arguments: args,
    properties: tagProperties
  } = node;

  const foundAttrs = getAttrs(path, true);
  let renderBodyProp;
  let attrsLen = t.isNullLiteral(foundAttrs) ? 0 : 1;

  if (t.isObjectExpression(foundAttrs)) {
    const renderBodyIndex = foundAttrs.properties.findIndex(
      prop => prop.key && prop.key.value === "renderBody"
    );

    attrsLen = foundAttrs.properties.length;

    if (renderBodyIndex > -1) {
      renderBodyProp = foundAttrs.properties[renderBodyIndex];
      foundAttrs.properties.splice(renderBodyIndex, 1);
      attrsLen--;
    }
  }

  const dynamicTagRenderCall = t.callExpression(
    hub.importDefault(
      path,
      `marko/src/runtime/helpers/dynamic-tag`,
      "marko_dynamic_tag"
    ),
    [
      t.identifier("out"),
      tagNameExpression,
      attrsLen ? t.arrowFunctionExpression([], foundAttrs) : t.nullLiteral(),
      renderBodyProp ? renderBodyProp.value : t.nullLiteral(),
      args && args.length ? t.arrayExpression(args) : t.nullLiteral(),
      tagProperties.length
        ? t.objectExpression(tagProperties)
        : t.nullLiteral(),
      hub._componentDefIdentifier,
      key,
      ...buildEventHandlerArray(path)
    ]
  );

  path.replaceWith(dynamicTagRenderCall);
}
