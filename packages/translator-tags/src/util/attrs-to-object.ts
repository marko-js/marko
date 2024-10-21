import { isAttributeTag, isTransparentTag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";

import { isOutputHTML } from "./marko-config";
import { callRuntime } from "./runtime";
import { getScopeIdIdentifier, getSection } from "./sections";
import { getResumeRegisterId } from "./signals";
import toPropertyName from "./to-property-name";

const renderBodyProps = new WeakMap<t.Expression, t.ArrowFunctionExpression>();

export default function attrsToObject(
  tag: t.NodePath<t.MarkoTag>,
  withRenderBody = false,
): t.Expression {
  const { node } = tag;
  let result: t.Expression = t.objectExpression([]);
  const resultExtra = (result.extra = {});

  for (const attr of tag.get("attributes")) {
    const value = attr.node.value!;

    if (attr.isMarkoSpreadAttribute()) {
      result.properties.push(t.spreadElement(value));
    } else {
      result.properties.push(
        t.objectProperty(
          toPropertyName((attr as t.NodePath<t.MarkoAttribute>).node.name),
          value,
        ),
      );
    }
  }

  if (withRenderBody) {
    const { body, params } = node.body;
    let hoistedControlFlows = node.extra!.hoistedControlFlows;

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
      const renderBodySection = getSection(tag.get("body"));
      const renderBodyExpression = t.arrowFunctionExpression(
        params,
        t.blockStatement(body),
      );

      renderBodyProps.set(result, renderBodyExpression);

      if (isOutputHTML()) {
        (result as t.ObjectExpression).properties.push(
          t.objectProperty(
            t.identifier("renderBody"),
            callRuntime(
              "register",
              callRuntime("createRenderer", renderBodyExpression),
              t.stringLiteral(
                getResumeRegisterId(renderBodySection, "renderer"),
              ),
              getScopeIdIdentifier(getSection(getNonAttributeTagParent(tag))),
            ),
          ),
        );
      } else {
        (result as t.ObjectExpression).properties.push(
          t.objectProperty(t.identifier("renderBody"), renderBodyExpression),
        );
      }
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

  if (node.arguments?.length) {
    if ((result as t.ObjectExpression).properties.length) {
      result = t.arrayExpression([...node.arguments, result]);
    } else if (node.arguments.length == 1) {
      const arg = node.arguments[0];
      result = t.isSpreadElement(arg) ? arg.argument : arg;
    } else {
      result = t.arrayExpression(node.arguments);
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
      t.isObjectProperty(lastProp) &&
      (lastProp.key as t.Identifier).name === "renderBody"
    ) {
      return renderBodyProps.get(attrsObject) as t.ArrowFunctionExpression & {
        body: t.BlockStatement;
      };
    }
  }
}

function getNonAttributeTagParent(
  tag: t.NodePath<t.MarkoTag>,
): t.NodePath<t.MarkoTag> {
  let cur = tag;
  while ((cur.node && isAttributeTag(cur)) || isTransparentTag(cur)) {
    cur = cur.parentPath.parentPath as t.NodePath<t.MarkoTag>;
  }

  return cur;
}
