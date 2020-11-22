import { types as t } from "@marko/babel-types";
import { importDefault } from "@marko/babel-utils";
import { getAttrs, buildEventHandlerArray } from "./util";
import withPreviousLocation from "../util/with-previous-location";

export default function(path) {
  const {
    node,
    hub: { file }
  } = path;
  const { key, arguments: args, properties: tagProperties } = node;

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

  const dynamicTagRenderCall = t.expressionStatement(
    t.callExpression(
      importDefault(
        file,
        `marko/src/runtime/helpers/dynamic-tag`,
        "marko_dynamic_tag"
      ),
      [
        t.identifier("out"),
        node.name,
        attrsLen ? t.arrowFunctionExpression([], foundAttrs) : t.nullLiteral(),
        renderBodyProp ? renderBodyProp.value : t.nullLiteral(),
        args && args.length ? t.arrayExpression(args) : t.nullLiteral(),
        tagProperties.length
          ? t.objectExpression(tagProperties)
          : t.nullLiteral(),
        file._componentDefIdentifier,
        key,
        ...buildEventHandlerArray(path)
      ]
    )
  );

  path.replaceWith(withPreviousLocation(dynamicTagRenderCall, node));
}
