import { types as t } from "@marko/babel-types";
import parseArguments from "./parse-arguments";

export default (hub, attributes, startPos) => {
  const code = hub.getCode();
  let attrEndPos = startPos;

  return attributes.map(attr => {
    const attrStartPos = code.indexOf(attr.name, attrEndPos);

    if (attr.name.slice(0, 3) === "...") {
      let attrExpression = attr.name.slice(3);

      if (attr.argument) {
        attrExpression += `(${attr.argument.value})`;
      }

      attrEndPos = attrStartPos + attrExpression.length;

      const value = hub.parseExpression(attrExpression, attrStartPos + 3);

      // TODO: Inline merge object literals.
      return hub.createNode(
        "markoSpreadAttribute",
        attrStartPos,
        attrEndPos,
        value
      );
    }

    const match = /:(.*)$/.exec(attr.name);
    const modifier = match && match[1];
    let name = attr.name;
    let value;

    if (modifier) {
      name = name.slice(0, name.length - modifier.length - 1);
    }

    if (attr.value) {
      attrEndPos = attr.endPos;
      const valueStart = attr.pos + 1; // Add one to account for "=".
      const rawValue = code.slice(valueStart, attrEndPos); // We use the raw value to ignore things like non standard placeholders.
      value = hub.parseExpression(rawValue, valueStart);
    } else {
      attrEndPos = attr.argument ? attr.argument.endPos + 1 : attr.endPos;
      value = t.booleanLiteral(true);
    }

    return hub.createNode(
      "markoAttribute",
      attrStartPos,
      attrEndPos,
      name,
      value,
      modifier,
      parseArguments(hub, attr.argument)
    );
  });
};
