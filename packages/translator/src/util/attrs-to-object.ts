import { types as t, NodePath, Visitor } from "@marko/babel-types";
import { hasHoistedChildren, isHoistedNode } from "../tag/attribute-tag";
import toPropertyName from "./to-property-name";

type HoistedVisitorState = { isHoisted: boolean };
const HOISTED_CHILDREN_VISITOR: Visitor = {
  ExpressionStatement(
    path: NodePath<t.ExpressionStatement>,
    state: HoistedVisitorState
  ) {
    if (isHoistedNode(path.node)) {
      state.isHoisted = true;
      path.stop();
    }
  }
};

export default function attrsToObject(
  tag: NodePath<t.MarkoTag>,
  withRenderBody = false
) {
  const { node } = tag;
  let result: t.Expression = t.objectExpression([]);

  for (const attr of node.attributes) {
    const value = attr.value!;

    if (t.isMarkoSpreadAttribute(attr)) {
      result.properties.push(t.spreadElement(value));
    } else {
      result.properties.push(
        t.objectProperty(toPropertyName(attr.name), value)
      );
    }
  }

  if (withRenderBody) {
    if (hasHoistedChildren(tag)) {
      const state: HoistedVisitorState = { isHoisted: false };
      const children = tag.get("body").get("body");
      const len = children.length;

      for (let i = len; i--; ) {
        const child = children[i];

        if (isHoistedNode(child.node)) {
          state.isHoisted = true;
        } else {
          child.traverse(HOISTED_CHILDREN_VISITOR, state);
        }

        if (state.isHoisted) {
          const renderBodyStartIndex = i + 1;

          if (renderBodyStartIndex === len) {
            tag.insertBefore(tag.node.body.body);
            tag.node.body.body = [];
          } else {
            tag.insertBefore(tag.node.body.body.slice(0, renderBodyStartIndex));
            tag.node.body.body = tag.node.body.body.slice(renderBodyStartIndex);
          }
          break;
        }
      }
    }

    if (tag.node.body.body.length) {
      (result as t.ObjectExpression).properties.push(
        t.objectMethod(
          "method",
          t.identifier("renderBody"),
          node.params || [],
          t.blockStatement(tag.node.body.body)
        )
      );
    }
  }

  if (result.properties.length) {
    if (result.properties.length === 1) {
      const [prop] = result.properties;

      if (t.isSpreadElement(prop)) {
        result = prop.argument;
      }
    }

    return result;
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
