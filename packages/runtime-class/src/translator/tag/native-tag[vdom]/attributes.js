import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";

import { evaluateAttr } from "../util";

export default function (path, attrs) {
  const len = attrs.length;
  if (len === 0) return t.nullLiteral();
  if (len === 1 && attrs[0].node.type === "MarkoSpreadAttribute") {
    return t.callExpression(
      importDefault(
        path.hub.file,
        "marko/src/runtime/vdom/helpers/attrs.js",
        "marko_attrs",
      ),
      [attrs[0].node.value],
    );
  }

  if (attrs.some((attr) => attr.node.type === "MarkoSpreadAttribute")) {
    const attrsObjects = [];
    let props;

    for (let i = 0; i < len; i++) {
      const attr = attrs[i];
      const {
        node: { name, value },
      } = attr;

      if (name) {
        const computed = evaluateAttr(attr);
        const prop = t.objectProperty(
          t.stringLiteral(name),
          computed?.value !== undefined
            ? t.stringLiteral(computed.value)
            : value,
        );
        if (props) {
          props.push(prop);
        } else {
          attrsObjects.push(t.objectExpression((props = [prop])));
        }
      } else {
        attrsObjects.push(value);
        props = undefined;
      }
    }

    return t.callExpression(
      importDefault(
        path.hub.file,
        "marko/src/runtime/vdom/helpers/merge-attrs.js",
        "marko_merge_attrs",
      ),
      attrsObjects,
    );
  }

  const attrValues = new Map();
  const props = [];

  // Remove duplicate attrs so last one wins.
  for (let i = len; i--; ) {
    const attr = attrs[i];
    const { name, value } = attr.node;
    if (attrValues.has(name)) continue;
    const computed = evaluateAttr(attr);
    attrValues.set(
      name,
      computed
        ? {
            confident: true,
            computed: computed.value,
            value,
          }
        : {
            confident: false,
            computed: undefined,
            value,
          },
    );
  }

  for (const [name, { confident, computed, value }] of [
    ...attrValues,
  ].reverse()) {
    if (confident) {
      if (computed == null || computed === false) {
        continue;
      }

      props.push(
        t.objectProperty(t.stringLiteral(name), t.stringLiteral(computed)),
      );
    } else {
      props.push(t.objectProperty(t.stringLiteral(name), value));
    }
  }

  if (props.length) {
    return t.objectExpression(props);
  }

  return t.nullLiteral();
}
