import { importDefault } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import withPreviousLocation from "../util/with-previous-location";
import { buildEventHandlerArray, getAttrs } from "./util";

export default function (path) {
  const {
    node,
    hub: { file },
  } = path;
  const tagProperties = (path.node.extra && path.node.extra.properties) || [];
  const { key, arguments: args } = node;
  const foundAttrs = getAttrs(path, true);
  let renderBodyProp;
  let attrsLen = t.isNullLiteral(foundAttrs) ? 0 : 1;

  if (node.preserveAttrs) {
    tagProperties.push(
      t.objectProperty(
        t.identifier("pa"),
        t.arrayExpression(
          node.preserveAttrs.map((name) => t.stringLiteral(name)),
        ),
      ),
    );
  }

  if (t.isObjectExpression(foundAttrs)) {
    const renderBodyIndex = foundAttrs.properties.findIndex(
      (prop) => prop.key && prop.key.value === "renderBody",
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
        `marko/src/runtime/helpers/dynamic-tag.js`,
        "marko_dynamic_tag",
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
        ...buildEventHandlerArray(path),
      ],
    ),
  );

  path.replaceWith(withPreviousLocation(dynamicTagRenderCall, node));
}
