import { types as t } from "@marko/compiler";
import type { References } from "./references";
import toPropertyName from "./to-property-name";

export default function attrsToObject(
  tag: t.NodePath<t.MarkoTag>,
  withRenderBody = false,
): t.Expression {
  const { node } = tag;
  let result: t.Expression = t.objectExpression([]);
  const resultExtra: { references?: References } = (result.extra = {});

  for (const attr of node.attributes) {
    const value = attr.value!;

    if (t.isMarkoSpreadAttribute(attr)) {
      result.properties.push(t.spreadElement(value));
    } else {
      result.properties.push(
        t.objectProperty(toPropertyName(attr.name), value),
      );
    }
  }

  if (withRenderBody) {
    const { body, params } = node.body;
    let hoistedControlFlows = node.extra.hoistedControlFlows;

    if (hoistedControlFlows) {
      for (const child of tag.get("body").get("body")) {
        tag.insertBefore(child.node);
        child.remove();

        if (child.isConditional() || child.isLoop()) {
          if (!--hoistedControlFlows) {
            break;
          }
        }
      }
    }

    if (body.length) {
      (result as t.ObjectExpression).properties.push(
        t.objectMethod(
          "method",
          t.identifier("renderBody"),
          params.length
            ? [
                t.objectPattern([
                  t.objectProperty(
                    t.identifier("value"),
                    t.arrayPattern(params),
                  ),
                ]),
              ]
            : [],
          t.blockStatement(body),
        ),
      );
    }
  }

  if (result.properties.length) {
    if (result.properties.length === 1) {
      const [prop] = result.properties;

      if (t.isSpreadElement(prop)) {
        result = prop.argument;
        result.extra = resultExtra;
      }
    }
  }

  return result;
}

export function getRenderBodyProp(
  attrsObject: ReturnType<typeof attrsToObject>,
) {
  if (t.isObjectExpression(attrsObject)) {
    // renderBody prop is always added last.
    const lastProp = attrsObject.properties[attrsObject.properties.length - 1];

    if (
      t.isObjectMethod(lastProp) &&
      (lastProp.key as t.Identifier).name === "renderBody"
    ) {
      return lastProp;
    }
  }
}
