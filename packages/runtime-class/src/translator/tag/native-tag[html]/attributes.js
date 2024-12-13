import { types as t } from "@marko/compiler";
import {
  importDefault,
  importNamed,
  normalizeTemplateString,
} from "@marko/compiler/babel-utils";
import attrHelper from "marko/src/runtime/html/helpers/attr";
import { d as escapeDoubleQuotes } from "marko/src/runtime/html/helpers/escape-quotes";

import { evaluateAttr } from "../util";

export default function (path, attrs) {
  const len = attrs.length;
  if (len === 0) return t.stringLiteral("");
  if (len === 1 && attrs[0].node.type === "MarkoSpreadAttribute") {
    return t.callExpression(
      importDefault(
        path.hub.file,
        "marko/src/runtime/html/helpers/attrs.js",
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
        "marko/src/runtime/html/helpers/merge-attrs.js",
        "marko_merge_attrs",
      ),
      attrsObjects,
    );
  }

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

      curString += attrHelper(name, computed);
    } else if (value.type === "TemplateLiteral") {
      curString += " " + name + '="';

      for (let i = 0; i < value.expressions.length; i++) {
        const quasi = value.quasis[i];
        const expression = value.expressions[i];
        curString += escapeDoubleQuotes(quasi.value.cooked);
        quasis.push(curString);
        curString = "";
        expressions.push(
          t.callExpression(
            importNamed(
              file,
              "marko/src/runtime/html/helpers/escape-quotes.js",
              "d",
              "marko_escape_double_quotes",
            ),
            [expression],
          ),
        );
      }

      curString +=
        escapeDoubleQuotes(
          value.quasis[value.expressions.length].value.cooked,
        ) + '"';
    } else {
      quasis.push(curString);
      curString = "";
      expressions.push(
        t.callExpression(
          importDefault(
            file,
            "marko/src/runtime/html/helpers/attr.js",
            "marko_attr",
          ),
          [t.stringLiteral(name), value],
        ),
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
