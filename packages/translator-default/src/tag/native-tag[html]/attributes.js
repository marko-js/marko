import { types as t } from "@marko/compiler";
import { importDefault, normalizeTemplateString } from "@marko/babel-utils";
import attrHelper from "marko/src/runtime/html/helpers/attr";
import { evaluateAttr } from "../util";

export default function (path, attrs) {
  if (!attrs.length) return t.stringLiteral("");

  const len = attrs.length;
  if (len === 0) return t.stringLiteral("");

  if (attrs.some((attr) => !attr.node.name)) {
    const attrsObject = t.objectExpression([]);
    for (let i = 0; i < len; i++) {
      const {
        node: { name, value },
      } = attrs[i];

      if (name) {
        attrsObject.properties.push(
          t.objectProperty(t.stringLiteral(name), value)
        );
      } else {
        mergeSpread(attrsObject.properties, value);
      }
    }

    return t.callExpression(
      importDefault(
        path.hub.file,
        "marko/src/runtime/html/helpers/attrs.js",
        "marko_attrs"
      ),
      [
        attrsObject.properties.length === 1 &&
        t.isSpreadElement(attrsObject.properties[0])
          ? attrsObject.properties[0].argument
          : attrsObject,
      ]
    );
  } else {
    const file = path.hub.file;
    const quasis = [];
    const expressions = [];
    const attrValues = new Map();
    let curString = "";

    // Remove duplicate attrs so last one wins.
    for (let i = len; i--; ) {
      const attr = attrs[i];
      const { name, value } = attr.node;
      if (attrValues.has(name)) continue;
      const { confident, computed } = evaluateAttr(attr);
      attrValues.set(name, {
        confident,
        computed,
        value,
      });
    }

    for (const [name, { confident, computed, value }] of [
      ...attrValues,
    ].reverse()) {
      if (confident) {
        if (computed == null || computed === false) {
          continue;
        }

        curString += attrHelper(name, computed);
      } else {
        quasis.push(curString);
        curString = "";
        expressions.push(
          t.callExpression(
            importDefault(
              file,
              "marko/src/runtime/html/helpers/attr.js",
              "marko_attr"
            ),
            [t.stringLiteral(name), value]
          )
        );
      }
    }

    quasis.push(curString);

    if (expressions.length) {
      return normalizeTemplateString(quasis, ...expressions);
    } else {
      return t.stringLiteral(quasis.join(""));
    }
  }
}

function mergeSpread(properties, value) {
  if (t.isObjectExpression(value)) {
    for (const prop of value.properties) {
      if (t.isSpreadElement(prop)) {
        mergeSpread(properties, prop.argument);
      } else {
        properties.push(prop);
      }
    }
  } else {
    properties.push(t.spreadElement(value));
  }
}
