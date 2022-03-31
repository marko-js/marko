import { types as t } from "@marko/compiler";
import toPropertyName from "./to-property-name";
import * as sorted from "./sorted-arr";
import { compareReserves } from "./reserve";
import type { References } from "./references";

export default function attrsToObject(
  tag: t.NodePath<t.MarkoTag>,
  withRenderBody = false
): (t.Expression & { extra: { references: References } }) | undefined {
  const { node } = tag;
  let result: t.Expression = t.objectExpression([]);
  const resultExtra: { references?: References } = (result.extra = {});

  for (const attr of node.attributes) {
    const value = attr.value!;

    if (t.isMarkoSpreadAttribute(attr)) {
      result.properties.push(t.spreadElement(value));
    } else {
      result.properties.push(
        t.objectProperty(toPropertyName(attr.name), value)
      );
    }

    const references = attr.extra?.valueReferences;

    if (references) {
      if (Array.isArray(references)) {
        for (const binding of references) {
          sorted.insertProp(
            compareReserves,
            resultExtra,
            `references`,
            binding
          );
        }
      } else {
        sorted.insertProp(
          compareReserves,
          resultExtra,
          `references`,
          references
        );
      }
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
          params,
          t.blockStatement(body)
        )
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

    return result as t.Expression & { extra: { references: References } };
  }
}

export function getRenderBodyProp(
  attrsObject: ReturnType<typeof attrsToObject>
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
